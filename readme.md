## 简历模板
基于cynxxx的[简历项目](https://cyanxxx.github.io/resume/) ，使用react hook, vite实现，添加一些功能扩充，
支持A4预览，全屏查看，彩色和黑白，单列双列，添加了不同版本展示、组件样式定制化功能。

- 如何使用
  - 增加自己的.env 写入自己的VITE_PHONE，对应简历的手机号码部分,写入VITE_TITLE，对应pdf的文件名和网页标题
  - 部署在github page的简历如果想只让特定的人访问，可以配置VITE_SECRET,VITE_SECRET_VALUE,这会用来拼接都url的query部分，只有query展示页面，当然，如果别人直接查看你的js文档还是会看到，只是最低限度的半公开的形式展示简历,当然如果不介意的话可以不配置,只有prod会有限制访问
  - 默认dev情况下不会隐藏手机号码，保存pdf时用的是dev环境所以也不会隐藏，在build[prod环境]自动隐藏，也可以直接指定hidden为true，那么无论什么环境都会隐藏手机号码
  - 分为彩色/黑色两种形式，运行`npm run pdf:[black/color]`保存不同颜色版本的pdf
  - 单列和两列可以分为两个分支，选择自己合适的版本，溢出部分需要抽取出来PartList/PartItem为一个整体抽取