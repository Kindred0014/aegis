# Aegis

一个练习《帝国时代 IV》建筑快捷键的小游戏。
A tiny game to practise [Age of Empires IV](https://www.ageofempires.com/games/age-of-empires-iv/) building shortcuts.

使用 ⚛️ [Create-React-App](https://reactjs.org/docs/create-a-new-react-app.html) 和 🐻 [Zustand](https://github.com/pmndrs/zustand) 构建。
Built with ⚛️ [Create-React-App](https://reactjs.org/docs/create-a-new-react-app.html) and 🐻 [Zustand](https://github.com/pmndrs/zustand).

在线体验 / Hosted site: [Aegis](https://aegis-shortcut-practice.rainy-fig-6636.chatgpt.site)

## 部署 / Deployment

本项目配置为使用 Hugo 框架部署到 **Cloudflare Pages**。
This project is configured to deploy on **Cloudflare Pages** using Hugo as the deployment framework.

### 本地开发 / Local Development

```bash
# 安装依赖 / Install dependencies
npm install

# 启动开发服务器（仅运行 React）/ Run the development server (React only)
npm start

# 构建生产版本（Hugo + React）/ Build for production (Hugo + React)
npm run build:hugo
```

### Cloudflare Pages 设置 / Cloudflare Pages Setup

1. 将你的 GitHub 仓库连接到 Cloudflare Pages。
   Connect your GitHub repository to Cloudflare Pages.
2. 配置构建设置：
   Configure the build settings:
   - **构建命令 / Build command**: `./build-hugo.sh`
   - **构建输出目录 / Build output directory**: `public`
   - **环境变量 / Environment variables**:
     - `NODE_VERSION`: `18`
     - `HUGO_VERSION`: `0.121.0`（或最新版本 / or latest）

构建过程：
The build process:
1. 使用 Create React App 构建 React 应用。
   Builds the React application using Create React App.
2. 将构建结果复制到 Hugo 的静态文件目录。
   Copies the build output to Hugo's static directory.
3. 运行 Hugo 生成最终静态网站。
   Runs Hugo to generate the final static site.
4. 将所有文件输出到 `public` 目录。
   Outputs everything to the `public` directory.

### 系统要求 / Requirements

- Node.js 18 或更高版本 / Node.js 18 or higher
- Hugo 0.121.0 或更高版本 / Hugo 0.121.0 or higher

# 许可证 / Licence

除所有美术素材（`/public/buildings/*.png`）外，本项目采用 MIT 许可证。
With the exception of all visual assets (`/public/buildings/*.png`), the project is licensed under MIT.
详情请见 [LICENSE](LICENSE)。
See [LICENSE](LICENSE).

# 免责声明 / Disclaimer

《帝国时代 IV》版权归 Microsoft Corporation 所有。
Age of Empires IV © Microsoft Corporation.

本项目依据 Microsoft 的[《游戏内容使用规则》](https://www.xbox.com/en-US/developers/rules)制作，并使用了《帝国时代 IV》的素材；本项目未获 Microsoft 认可，也与其无关联。
This project was created under Microsoft's ["Game Content Usage Rules"](https://www.xbox.com/en-US/developers/rules) using assets from Age of Empires IV, and it is not endorsed by or affiliated with Microsoft.
