#!/usr/bin/env python3
"""
WebMCP Directory 审核评测与自动化收录提交工具
(Hongrun Technology - WebMCP Tool Validator & Submission Assistant)

功能:
  1. 自动化单元测试: 模拟 AI Agent 深度执行 5 大核心工具 (Search, Sizing, Solutions, Certificates, RFQ);
  2. 验证 InputSchema 与 Output 结构; RFQ 使用模拟 fetch，不发送真实询价;
  3. 支持通过 WebMCP 官方 API (/api/scan) 提交宏润官网收录评测申请。

用法:
  python3 submit_webmcp.py           # 本地模拟执行与规范校验
  python3 submit_webmcp.py --submit  # 本地校验 + 向 webmcp.com 提交在线爬虫沙盒扫描
"""

import os
import subprocess
import json
import sys
import urllib.request
import urllib.error

ROOT = os.path.dirname(os.path.abspath(__file__))
TOOLS_JS = os.path.join(ROOT, "assets", "js", "webmcp-tools.js")
SITE_URL = "https://www.hongrun1995.cn"
SUBMIT_EMAIL = "martinchen@hongrun1995.cn"
WEBMCP_SCAN_API = "https://webmcp.com/api/scan"

NODE_TEST_SCRIPT = """
const assert = require('node:assert/strict');
const tools = require('./assets/js/webmcp-tools.js');
const parse = response => JSON.parse(response.content[0].text);

async function testSuite() {
  console.log('------------------------------------------------------------');
  console.log('🧪 执行 WebMCP 工具深度测试套件 (5/5 工具链路校验)');
  console.log('------------------------------------------------------------');

  console.log('1. 测试 [search_products] 工具与证书适用范围...');
  const data1 = parse(await tools.toolSearchProducts.execute({ category: 'compressor', minAirFlowLpm: 200 }));
  assert.ok(data1.totalMatches > 0);
  assert.match(data1.purityStandard, /HW-200 through HW-3600/);
  console.log(`   ✅ 匹配到 ${data1.totalMatches} 款医用空压机`);

  console.log('2. 测试 [calculate_dental_sizing] 工具 (12 台牙椅, 并发系数 0.7)...');
  const data2 = parse(await tools.toolCalculateDentalSizing.execute({ chairCount: 12, simultaneousFactor: 0.7, includeSuction: true }));
  assert.match(data2.airRequirements.calculatedFlowNeeded, /^420 L\\/min/);
  assert.match(data2.airRequirements.recommendedModel, /HYT-500|engineered central plant/);
  assert.match(data2.suctionRequirements.recommendedModel, /HVS-10|HVS-15/);
  console.log(`   ✅ 气量需求 ${data2.airRequirements.calculatedFlowNeeded}; 推荐 ${data2.airRequirements.recommendedModel}`);

  console.log('3. 测试 [get_industry_solutions] 工具...');
  const data3 = parse(await tools.toolGetIndustrySolutions.execute({ sector: 'analytical_lab' }));
  assert.ok(data3.solutions.analytical_lab.sectorName);
  assert.doesNotMatch(JSON.stringify(data3), /HYG units deliver 0\\.003/);
  console.log(`   ✅ 行业方案: ${data3.solutions.analytical_lab.sectorName}`);

  console.log('4. 测试 [get_compliance_certificates] 工具...');
  const data4 = parse(await tools.toolGetComplianceCertificates.execute({ certificateType: 'ISO_8573_1_CLASS_0' }));
  assert.ok(data4.certificates.length > 0);
  assert.match(JSON.stringify(data4.certificates[0]), /HW-200 (?:through|to) HW-3600/);
  console.log(`   ✅ 证书数量: ${data4.certificates.length}; 残油值: ${data4.certificates[0].measuredOilContent}`);

  console.log('5. 测试 [submit_rfq_inquiry] 成功与失败回执 (fetch 全程模拟)...');
  const originalFetch = global.fetch;
  let submittedPayload;
  global.fetch = async (url, options) => {
    assert.equal(url, 'https://formspree.io/f/mqazkndr');
    submittedPayload = JSON.parse(options.body);
    return { ok: true, status: 200 };
  };
  let data5;
  try {
    data5 = parse(await tools.toolSubmitRfqInquiry.execute({
      buyerName: 'Dr. Julian Weber',
      email: 'j.weber@dental-munich.de',
      country: 'Germany',
      organizationOrClinic: 'Munich Central Dental Hospital',
      dentalChairs: 12,
      targetProducts: 'HYT-500 Medical Compressor + HVS-10 Suction'
    }));
  } finally {
    global.fetch = originalFetch;
  }
  assert.equal(data5.status, 'success');
  assert.match(submittedPayload.target_products, /HYT-500/);
  assert.ok(data5.rfqReferenceCode);
  console.log(`   ✅ 状态: ${data5.status}; 追踪编号: ${data5.rfqReferenceCode}`);

  global.fetch = async () => ({ ok: false, status: 500 });
  let failure;
  try {
    failure = parse(await tools.toolSubmitRfqInquiry.execute({
      buyerName: 'Test Buyer', email: 'test@example.com', country: 'Germany', dentalChairs: 2
    }));
  } finally {
    global.fetch = originalFetch;
  }
  assert.equal(failure.status, 'error');
  assert.equal(failure.retryable, true);
  assert.equal(failure.rfqReferenceCode, undefined);
  console.log('   ✅ HTTP 500 不生成成功回执，并提供重试与备用联系方式');

  console.log('------------------------------------------------------------');
  console.log('🎉 5 大核心工具及失败回执测试全部 PASS！');
  console.log('------------------------------------------------------------');
}

testSuite().catch(err => {
  console.error('❌ 测试失败:', err);
  process.exit(1);
});
"""


def run_tests():
    try:
        proc = subprocess.run(
            ["node", "-e", NODE_TEST_SCRIPT],
            cwd=ROOT,
            capture_output=True,
            text=True,
            check=True
        )
        print(proc.stdout)
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ 单元测试未通过:\n{e.stderr}")
        return False


def submit_to_directory():
    print("-" * 70)
    print("🌐 正在向 WebMCP.com 发起官方爬虫沙盒扫描与收录申请...")
    print(f"  • Target URL : {SITE_URL}")
    print(f"  • Alert Email: {SUBMIT_EMAIL}")
    print("-" * 70)

    payload = {
        "email": SUBMIT_EMAIL,
        "url": SITE_URL,
        "rescan": False
    }

    req = urllib.request.Request(
        WEBMCP_SCAN_API,
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "Content-Type": "application/json; charset=utf-8",
            "User-Agent": "HongrunTech-WebMCP-Client/1.0",
            "Origin": "https://webmcp.com",
            "Referer": "https://webmcp.com/?path=build"
        }
    )

    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            status = resp.status
            body = resp.read().decode("utf-8")
            data = json.loads(body)
            print(f"  ✅ [提交成功] HTTP 状态码: {status}")
            print(f"  • Job ID       : {data.get('jobId', 'N/A')}")
            print(f"  • 评测报告链接 : https://webmcp.com/report/{data.get('jobId', '')}")
            print("  • 后续动作     : 等待 WebMCP 扫描完成并查看官方报告。")
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8")
        print(f"  ℹ️ [API 响应] 状态码 {e.code}: {e.reason}")
        try:
            err_json = json.loads(body)
            print(f"  详情: {err_json}")
        except Exception:
            print(f"  详情: {body}")
    except Exception as e:
        print(f"  ⚠️ 网络请求提示: {e} (可直接在网页端 https://webmcp.com/?path=build 手动提交)")


def main():
    do_submit = "--submit" in sys.argv

    print("=" * 70)
    print("🚀 宏润科技国际官网 - WebMCP 工具验证与目录收录助手")
    print("=" * 70)
    print(f"  • 站点域名: {SITE_URL}")
    print(f"  • 工具位置: {TOOLS_JS}")
    print("-" * 70)

    if not run_tests():
        sys.exit(1)

    if do_submit:
        submit_to_directory()
    else:
        print("📋 [WebMCP Directory 全球先锋目录提交流程指南]")
        print("  1. 确保最新代码已推送至 GitHub main 分支并在生产环境生效;")
        print("  2. 执行自动化提交命令: python3 submit_webmcp.py --submit")
        print("  3. 或直接访问官方收录平台: https://webmcp.com/?path=build")
        print("     输入宏润官网与对接邮箱:")
        print(f"     • Site URL : {SITE_URL}")
        print(f"     • Email    : {SUBMIT_EMAIL}")
        print("  4. 官方沙盒爬虫将自动访问全站，探测 document.modelContext 工具注册情况;")
        print("  5. 评测系统将出具评分卡（Scorecard），包含:")
        print("     - search_products (Answer 类工具)")
        print("     - calculate_dental_sizing (Answer 类工具)")
        print("     - get_industry_solutions (Answer 类工具)")
        print("     - get_compliance_certificates (Answer 类工具)")
        print("     - submit_rfq_inquiry (Transact / Sensitive Action 类工具)")
        print("  6. 审核通过后，宏润科技将正式入驻全球 WebMCP Directory 制造业官方名录！")
        print("=" * 70)


if __name__ == "__main__":
    main()
