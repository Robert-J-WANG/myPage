## 使用yarn+vite+tailwind创建 和发布 react项目配置：



## 创建项目



### yarn部分

1. #### 全局安装yarn

   ```bash
   npm install --global yarn
   ```

2. #### 检查yarn是否安装成功及版本

   ```bash
   yarn -version
   ```
   
   

### Vite 部分

1. #### 安装vite 脚手架

   ```bash
   yarn create vite
   ```

   

2. #### 按照提示执行：

   ​		✔ Project name: … myPortfolio
   ​		✔ Package name: … myportfolio
   ​		✔ Select a framework: › React
   ​		✔ Select a variant: › JavaScript

3. #### 进入项目文件夹

   ```bash
   cd myPortfolio
   ```

   

4. #### 生成vite配置文件

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

1. #### 安装tailwindcss相关包

   ```bash
   yarn add tailwindcss -D
   yarn add postcss
   yarn add autoprefixer
   ```

   

2. #### 根目录下创建`postcss.config.js`文件，并添加配置代码，引入tailwindcss和autoprefixer

   ```js
   export default {
     		plugins: {
       		tailwindcss: {},
       		autoprefixer: {},
    		 },
   }
   ```

   

3. #### 初始化 tailwindcss配置，生成tailwind.config.js文件

   ```bash
   yarn tailwind init
   ```

   #### 并添加下面内容到tailwind.config.js文件中

   ```js
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   ```

   

4. #### 引入tailwindcss到项目中

   #### 清空index.css中的内容，并移入tailwindcss

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

   ## 发布项目

   

