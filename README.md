## 使用 yarn+vite+tailwind 创建 和发布 react 项目配置：

## Part1: 创建项目

### yarn 部分

1. #### 全局安装 yarn

   ```bash
   npm install --global yarn
   ```

2. #### 检查 yarn 是否安装成功及版本

   ```bash
   yarn -version
   ```

### Vite 部分

1. #### 安装 vite 脚手架

   ```bash
   yarn create vite
   ```

2. #### 按照提示执行：

   ​ ✔ Project name: … myPortfolio
   ​ ✔ Package name: … myportfolio
   ​ ✔ Select a framework: › React
   ​ ✔ Select a variant: › JavaScript

3. #### 进入项目文件夹

   ```bash
   cd myPortfolio
   ```

4. #### 生成 vite 配置文件

   ```bash
       yarn
   ```

   ​

5. #### 运行项目测试是否安装成功

   ```bash
   yarn dev
   ```

   ​

### Tailwind 部分

1. #### 安装 tailwindcss 相关包

   ```bash
   yarn add tailwindcss -D
   yarn add postcss
   yarn add autoprefixer
   ```

2. #### 根目录下创建`postcss.config.js`文件，并添加配置代码，引入 tailwindcss 和 autoprefixer

   ```js
   export default {
     plugins: {
       tailwindcss: {},
       autoprefixer: {}
     }
   }
   ```

3. #### 初始化 tailwindcss 配置，生成 tailwind.config.js 文件

   ```bash
   yarn tailwind init
   ```

   #### 并添加下面内容到 tailwind.config.js 文件中

   ```js
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   ```

4. #### 引入 tailwindcss 到项目中

   #### 清空 index.css 中的内容，并移入 tailwindcss

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

## Part2: Existing issues:

1.  #### 并列子组件 Works 和 Blog 同时包含多个子组件，并使用 route 跳转，路径重定向的问题（未解决）

2.  #### 使用锚点跳转和页面滚动锚点高亮的双向绑定问题（已解决）

3.  #### 使用锚点跳转和页面滚动修改 URL 路径的问题（解决方案不合理）

4.  #### 使用 MUI 的 Pagination 组件，自定样式的问题（部分解决）
