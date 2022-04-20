## 简历模板
- 如何使用
  - 增加自己的.env 写入自己的VITE_PHONE，对应简历的手机号码部分,写入VITE_TITLE，对应pdf的文件名和网页标题
  - 默认dev情况下不会隐藏手机号码，保存pdf时用的是dev环境所以也不会隐藏，在build[prod环境]自动隐藏，也可以直接指定hidden为true，那么无论什么环境都会隐藏手机号码
  - 分为彩色/黑色两种形式，运行`npm run pdf:[black/color]`保存不同颜色版本的pdf