export default function App() {
  return (
    <div className="poster">
      <div className="header">
        <h1>Harley 健身私教</h1>
        <div className="subtitle">专业 · 科学 · 个性化</div>
      </div>

      <div className="content">
        <div className="services">
          <div className="service-card">
            <div className="service-title">线下一对一</div>
            <div className="pricing">
              <div className="price-item">
                <span className="price-label">1v1 一对一 (1小时)</span>
                <span className="price-value">$150</span>
              </div>
              <div className="price-item">
                <span className="price-label">1v2 一对二 (1小时)</span>
                <span className="price-value">$200</span>
              </div>
            </div>
            <div className="note">上1付1，不捆绑授课，试课价格不变</div>
          </div>

          <div className="service-card">
            <div className="service-title">线上指导</div>
            <div className="pricing">
              <div className="price-item">
                <span className="price-label">季度套餐 (3个月)</span>
                <span className="price-value">$550</span>
              </div>
              <div className="price-item">
                <span className="price-label">半年套餐 (6个月)</span>
                <span className="price-value">$750</span>
              </div>
              <div className="price-item">
                <span className="price-label">年度套餐 (12个月)</span>
                <span className="price-value">$1000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="highlight">
          💪 减脂 / 增肌 / 塑型 / 马甲线 / 蜜桃臀 / 体态纠正
        </div>

        <div className="target-groups">
          <h3>适合人群</h3>
          <p>健身小白 • 进阶训练者 • 备赛选手 • 产后宝妈</p>
        </div>

        <div className="coach-intro">
          <h3>教练介绍 & 成功案例</h3>

          <div className="intro-section">
            <h4>🏆 专业背景:</h4>
            <ul>
              <li>解剖学、运动力学、营养学、康复专业知识</li>
              <li>科学训练方法结合实战经验</li>
            </ul>
          </div>

          <div className="intro-section">
            <h4>🥇 比赛成绩:</h4>
            <ul>
              <li>2024年 WNBF 比基尼健美小组第一名</li>
              <li>2024年 NPC 比基尼健美小组第一名</li>
              <li>2025年 NPC 比基尼健美小组第一名</li>
            </ul>
          </div>

          <div className="success-case">
            <h4>✨ 学生成功案例</h4>
            <p>
              线下成功案例：50+
              <br />
              线上成功案例：100+
            </p>
          </div>
        </div>

        <div className="service-comparison">
          <h3>服务对比</h3>

          <div className="comparison-grid">
            <div className="service-column offline-service">
              <h4>🏋️ 线下服务内容</h4>
              <ul>
                <li>热身激活教学，体态矫正</li>
                <li>动作模式纠正，训练动作示范</li>
                <li>器材教学，正确使用指导</li>
                <li>个性化训练动作推荐</li>
                <li>基础饮食三大营养素比例推荐</li>
                <li>科学运动和饮食模式指导</li>
              </ul>
              <div className="service-note">
                注：线下课程专注于动作指导和基础建议
              </div>
            </div>

            <div className="service-column online-service">
              <h4>📱 线上服务内容</h4>
              <ul>
                <li>每日训练计划 (具体动作+组数+重量)</li>
                <li>每日饮食计划 (精确到克数)</li>
                <li>专业软件记录，打卡监测</li>
                <li>考虑职业生活，科学制定计划</li>
                <li>灵活沟通改变，实时调整</li>
                <li>不挨饿减脂，增肌塑形同步</li>
              </ul>
              <div className="service-note">注：线上服务提供详细个性化方案</div>
            </div>
          </div>
        </div>

        <div className="online-features">
          <h4>🔥 线上减脂特点</h4>
          <ul>
            <li>饮食照片形式记录 (每天拍照打卡)</li>
            <li>训练视频形式记录 (视频发送)</li>
            <li>每两周根据状态调整训练和饮食</li>
            <li>量身制定每个季度目标和计划</li>
          </ul>
          <div className="special-feature">
            ✨ 不挨饿 + 增加代谢 + 减脂塑形增肌同步进行
          </div>
        </div>

        <div className="location">
          <h3>📍 线下授课地点</h3>
          <div className="location-details">
            <strong>The Clara 公寓</strong>
            <div className="address">
              5150 Calle Del Sol
              <br />
              Santa Clara, CA 95054
            </div>
            <div className="facilities">
              健身房环境干净隐私，设备全新
              <br />
              桑拿、蒸房、冰浴并且有瑜伽室、造型室
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
