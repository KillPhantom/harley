# 📧 EmailJS 配置指南

## 步骤 1：注册 EmailJS 账号

1. 访问 [https://www.emailjs.com/](https://www.emailjs.com/)
2. 点击 **Sign Up** 注册免费账号
3. 验证你的邮箱

---

## 步骤 2：添加邮件服务

1. 登录后，进入 **Email Services** 页面
2. 点击 **Add New Service**
3. 选择你的邮件服务商（推荐使用 **Gmail**）
   - 如果使用 Gmail，需要：
     - 开启 Google 账号的"两步验证"
     - 生成"应用专用密码"（App Password）
     - 详细步骤：https://support.google.com/accounts/answer/185833
4. 配置完成后，记下你的 **Service ID**（例如：`service_abc123`）

---

## 步骤 3：创建邮件模板

1. 进入 **Email Templates** 页面
2. 点击 **Create New Template**
3. 配置模板：

### 模板基本信息
- **Template Name**: Party Questionnaire（随便起名）
- **Subject**: 新的派对问卷提交 - {{wechat}}

### 模板内容（Content）

**🎨 推荐：使用精美的 HTML 模板**

我已经为你准备了一个精美的 HTML 邮件模板，完整代码在项目根目录的 `EMAILJS_TEMPLATE.html` 文件中。

**如何使用：**
1. 打开 `EMAILJS_TEMPLATE.html` 文件
2. 复制全部内容（Cmd+A → Cmd+C）
3. 在 EmailJS 的 **Content** 标签中，切换到 **HTML** 模式
4. 粘贴模板代码
5. 点击 **Preview** 预览效果

**效果预览：**
- ✨ 美观的渐变色标题
- 📦 卡片式布局
- 🎨 图标 + 表格排版
- 💫 渐变色按钮背景
- 📱 移动端友好

---

**📝 或者使用简洁的纯文本模板（如果不需要 HTML）**

如果你偏好简洁的纯文本格式，可以使用以下内容：

```
新的派对问卷提交！

=====================================
提交时间：{{submitted_at}}
=====================================

👤 联系方式(WeChat)：
{{wechat}}

📅 参加计划：
{{attendance}}

🕐 希望的活动时间：
{{time}}
{{#timeOther}}
其他时间说明：{{timeOther}}
{{/timeOther}}

🥗 饮食限制/偏好：
{{diet}}
{{#dietOther}}
其他饮食说明：{{dietOther}}
{{/dietOther}}

⚠️ 过敏详情：
{{allergyDetails}}

🍖 蛋白质偏好：
{{protein}}

🎮 附加活动：
{{activity}}

=====================================
此邮件由 Harley's Party 问卷系统自动发送
```

4. 在 **Settings** 标签中：
   - **To Email**: 填写你的邮箱地址（例如：`your-email@gmail.com`）
   - **From Name**: Harley's Party Questionnaire
   - **Reply To**: {{wechat}}（可选）

5. 点击 **Save** 保存模板
6. 记下你的 **Template ID**（例如：`template_xyz789`）

---

## 步骤 4：获取 Public Key

1. 进入 **Account** → **General** 页面
2. 找到 **Public Key**（例如：`Abc123XyZ-defGHI`）
3. 复制这个 Key

---

## 步骤 5：配置代码

打开 `src/pages/QuestionairePage.tsx`，找到以下代码并替换：

```typescript
// 🔧 替换以下三个值
const SERVICE_ID = "YOUR_SERVICE_ID";     // 替换为步骤 2 的 Service ID
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";   // 替换为步骤 3 的 Template ID
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";     // 替换为步骤 4 的 Public Key
```

### 示例（替换后）：
```typescript
const SERVICE_ID = "service_abc123";      // 你的 Service ID
const TEMPLATE_ID = "template_xyz789";    // 你的 Template ID
const PUBLIC_KEY = "Abc123XyZ-defGHI";    // 你的 Public Key
```

**注意：** 收件邮箱地址在 EmailJS 模板的 Settings 中配置，不需要在代码中指定。

---

## 步骤 6：测试

1. 运行你的网站：`pnpm run dev`
2. 访问 `/questionaire` 页面
3. 填写并提交表单
4. 检查你的邮箱是否收到邮件
5. 如果没收到，检查：
   - EmailJS Dashboard 的 **Logs** 页面查看错误
   - 浏览器控制台（F12）查看错误信息
   - 垃圾邮件文件夹

---

## 免费额度

- ✅ 每月 **200 封邮件**（免费版）
- ✅ 完全够用于个人项目
- 如需更多，可升级付费计划

---

## 常见问题

### Q: 邮件没收到？
A: 检查以下几点：
1. Service ID、Template ID、Public Key 是否正确
2. Gmail 是否开启了"应用专用密码"
3. 查看 EmailJS Dashboard 的 Logs 页面
4. 检查垃圾邮件文件夹

### Q: 提示 "Public Key is required"？
A: 确保在 EmailJS Dashboard → Account → General 中复制了正确的 Public Key

### Q: 想要修改邮件格式？
A: 在 EmailJS Dashboard → Email Templates 中编辑模板内容

---

## 安全说明

✅ **为什么 EmailJS 是安全的？**
- Public Key 是公开的，设计为在前端使用
- EmailJS 在服务器端处理实际的邮件发送
- 你的真实邮箱密码不会暴露
- 可以在 Dashboard 中设置域名白名单，防止滥用

---

## 需要帮助？

- EmailJS 官方文档：https://www.emailjs.com/docs/
- EmailJS 示例：https://www.emailjs.com/docs/examples/reactjs/

---

配置完成后，删除这个文件即可！🎉

