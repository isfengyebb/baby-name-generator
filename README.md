# Baby Name Generator

AI 驱动的中文宝宝起名工具，基于 Claude API 结合中国传统文化，为宝宝生成寓意深远的好名字。

## 功能特性

- **智能起名** — 输入姓氏、性别、出生日期等信息，AI 自动生成多个候选名字
- **详细解析** — 每个名字提供逐字解析、整体寓意、诗词典故和起名理由
- **文化底蕴** — 综合考虑音韵美感、字形美观、五行平衡、诗词典故等维度
- **移动适配** — 基于 antd-mobile 构建，移动端体验友好

## 技术栈

- **React 19** + **React Router 7**
- **Vite 6** — 开发构建工具
- **antd-mobile 5** — 移动端 UI 组件库
- **Anthropic SDK** — Claude API 调用

## 项目结构

```
src/
├── components/       # 通用组件（NameCard、NameForm、NameList 等）
├── constants/        # 常量定义（API 配置、路由、Prompt）
├── hooks/            # 自定义 Hooks（useNameGeneration、useNameDetail）
├── models/           # 数据模型层（API 响应数据转换）
├── pages/            # 页面组件（HomePage、ResultPage、DetailPage）
├── router/           # 路由配置
├── services/         # 服务层（Claude 客户端、起名服务）
└── styles/           # 全局样式和 CSS 变量
```

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 配置环境变量

复制 `.env.example` 为 `.env` 并填入你的配置：

```bash
cp .env.example .env
```

```env
VITE_ANTHROPIC_BASE_URL=http://your-proxy-url
VITE_ANTHROPIC_API_KEY=your_api_key_here
```

### 3. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:5173 即可使用。

### 4. 构建生产版本

```bash
npm run build
npm run preview
```

## License

MIT
