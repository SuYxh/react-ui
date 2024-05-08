## React 组件库

使用 React Hooks 和 typescript ，由浅入深的提高自己的 React 和 typescript 水平

![image-20240508171649251](https://qn.huat.xyz/mac/202405081716349.png)



![image-20240508171714061](https://qn.huat.xyz/mac/202405081717087.png)



### 安装

~~~javascript
npm install @yangxinhao/react-ui --save
~~~

### 使用

~~~javascript
// 加载样式
import '@yangxinhao/react-ui/dist/index.css'
// 引入组件
import { Button } from '@yangxinhao/react-ui'
~~~

###  亮点

* 🔥typescript with React Hooks
* 💧渐进式的学习
* ⛑️使用 react-testing-library 完成单元测试
* 📚使用 storybook 本地调试和生成文档页面
* 📚使用 react-doc-gen 自动生成文档
* 📦使用第三方库扩充组件-(react-fontawesome, react-transition-group)
* 🌹样式（Sass）文件从零开始，掌握大型应用的 CSS 组织方法
* 🎉涉及全部流程，包括最后的 npm publish，husky提交发布前验证，travis CI/CD 集成，发布文档站点等

### 本地开发命令

~~~bash
//启动本地文档
npm run stroybook

//跑单元测试
npm test

//build组件库
npm run build

//发布到 npm
npm run publish
~~~