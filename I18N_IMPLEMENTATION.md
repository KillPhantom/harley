# 国际化 (i18n) 实现文档

## ✅ 已完成的工作

### 1. **依赖安装**
- ✅ 安装了 `i18next` 和 `react-i18next` 库

### 2. **配置文件**
- ✅ 创建了 `src/i18n/config.ts` - i18n 配置文件
- ✅ 创建了 `src/i18n/locales/zh.json` - 中文翻译资源
- ✅ 创建了 `src/i18n/locales/en.json` - 英文翻译资源
- ✅ 在 `src/main.tsx` 中初始化 i18n

### 3. **导航组件**
- ✅ 在 `Navigation.tsx` 添加了语言切换按钮
  - 桌面版：显示语言图标 + 文字（EN/中）
  - 移动版：显示语言图标
- ✅ 导航链接已全部翻译
- ✅ Logo 和 subtitle 已全部翻译

### 4. **页面翻译**

#### **HomePage (首页)** - 部分完成 ⚠️
已翻译的内容：
- ✅ 页面副标题
- ✅ 线下一对一服务
- ✅ 线上指导服务
- ✅ 价格套餐
- ✅ 特色亮点
- ✅ 目标人群
- ✅ 教练介绍标题
- ✅ 微信弹窗
- ✅ 页脚版权信息

待翻译的内容：
- ⚠️ 专业背景详细内容
- ⚠️ 比赛成绩详细内容
- ⚠️ 成功案例详细内容
- ⚠️ 服务对比详细内容
- ⚠️ 线上减脂特点详细内容
- ⚠️ 线下授课地点详细内容

#### **CollaborationPage (合作页面)** - 部分完成 ⚠️
已翻译的内容：
- ✅ 页面头部（subtitle, totalReach）
- ✅ 社交媒体链接
- ✅ 导航对话框菜单项
- ✅ About 部分（完整）
- ✅ Platform Overview（完整）
- ✅ Value Proposition（完整）
- ✅ Audience 部分（Gender, Age Range）
- ✅ 联系按钮和邮箱

待翻译的内容：
- ⚠️ Geographic Distribution 详细数据
- ⚠️ Analytics（Instagram & TikTok 数据）
- ⚠️ Portfolio（合作案例）
- ⚠️ Pricing（价格方案）

#### **SupplementsPage (补剂页面)** - 未完成 ❌
- ❌ 尚未添加翻译

#### **QuestionairePage (问卷页面)** - 未完成 ❌
- ❌ 尚未添加翻译

## 🎯 使用方法

### 用户端使用
1. 访问网站后，点击导航栏右侧的语言切换按钮
2. 桌面版显示 "EN" 或 "中" 文字
3. 移动版显示语言图标 (Languages icon)
4. 点击按钮即可在中英文之间切换

### 开发者使用
```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('nav.home')}</h1>
      <p>{t('home.subtitle')}</p>
    </div>
  );
}
```

## 📁 文件结构

```
src/
├── i18n/
│   ├── config.ts           # i18n 配置
│   └── locales/
│       ├── zh.json         # 中文翻译
│       └── en.json         # 英文翻译
├── components/
│   └── Navigation.tsx      # 导航组件（已添加语言切换按钮）
├── pages/
│   ├── HomePage.tsx        # 首页（部分翻译）
│   ├── CollaborationPage.tsx  # 合作页面（部分翻译）
│   ├── SupplementsPage.tsx    # 补剂页面（未翻译）
│   └── QuestionairePage.tsx   # 问卷页面（未翻译）
└── main.tsx                # 初始化 i18n
```

## 🔧 配置说明

### 默认语言
- 默认语言：中文 (zh)
- 备用语言：中文 (zh)

如需修改默认语言，编辑 `src/i18n/config.ts`：
```ts
lng: 'zh', // 改为 'en' 可设置默认为英文
fallbackLng: 'zh',
```

### 添加新翻译

1. 在 `src/i18n/locales/zh.json` 添加中文：
```json
{
  "mySection": {
    "myKey": "我的文本"
  }
}
```

2. 在 `src/i18n/locales/en.json` 添加英文：
```json
{
  "mySection": {
    "myKey": "My Text"
  }
}
```

3. 在组件中使用：
```tsx
{t('mySection.myKey')}
```

## 📋 待完成任务

### 高优先级
1. ✨ 完成 HomePage 所有内容的翻译
2. ✨ 完成 CollaborationPage 剩余部分的翻译
   - Geographic Distribution
   - Analytics (Instagram & TikTok)
   - Portfolio
   - Pricing & Terms

### 中优先级
3. 🔨 添加 SupplementsPage 的翻译
4. 🔨 添加 QuestionairePage 的翻译

### 低优先级
5. 🎨 优化语言切换按钮样式
6. 🎨 添加语言切换动画效果
7. 🎨 记住用户的语言选择（localStorage）

## 🐛 已知问题

无

## 📝 注意事项

1. 所有翻译键都遵循 `section.key` 的命名规范
2. 翻译文件使用 JSON 格式，确保语法正确
3. 添加新翻译时，务必同时更新 zh.json 和 en.json
4. 构建前请确保所有翻译键都已定义，否则会显示键名

## ✅ 测试

运行以下命令测试：
```bash
pnpm run dev   # 开发环境测试
pnpm run build # 生产环境构建测试
```

所有构建均已通过测试 ✓

