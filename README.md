# vue-163-music(网易云音乐web版)
用vue仿写163音乐客户端版。

原计划仿写完所有页面，碍于网易的接口API有限，实现页面也有限。

不推荐手机端访问。

页面高度为`670px`，`1366 X 768`分辨率及其以下按F11全屏浏览效果更佳

欢迎`issue`，`pr`，`star` or `follow`！我将继续开源更多适合练手学习的有趣项目

## 在线版
[点击进入](http://www.shanamaid.top:3000/)

## 部分效果截图
![3](screenshot/3.gif)

[更多效果gif图](screenshot/)

## 依赖
`vue` + `vuex`+ `vue-router` + `vue-resource`

`express`

`http-proxy-middleware` http请求转发

`store.js` 本地缓存播放列表

`animate.css` css动画库

`vue-slider-component` 滑块组件


## 实现功能
### 发现音乐
- [x] 个性推荐(推荐歌单中除每日歌曲推荐外，其余歌单可点击进入)

### 播放音乐
- [x] 上一曲
- [x] 播放
- [x] 暂停
- [x] 下一曲
- [x] 进度控制
- [x] 音量控制

### 音乐搜索
输入搜索关键词，`回车键`搜索，或者点击`放大镜`图标
- [x] 单曲(单击或双击歌曲添加至音乐播放列表，部分音乐会存在版权问题无法播放)
- [x] 歌手
- [x] 专辑
- [x] MV
- [x] 歌单(左键点击进入歌单列表)
- [x] 主播电台 (单期节目部分单击或双击歌曲添加至音乐播放列表，目前不存在版权问题)
- [x] 用户

### 歌单
- [x] 播放全部

### 播放列表
- [x] 切歌(单击切歌)
- [x] 删歌(鼠标悬浮在要删除的歌曲上，点击右侧小X)
- [x] 清空播放列表
- [x] 本地缓存播放列表

## 一些问题
通过api接口获取的mv播放量基本不准，尚未找到原因，其余类型的播放量准确


## 使用
```
git clone https://github.com/ShanaMaid/vue-163-music.git

cd vue-163-music

npm install 

cd server

node app.js

访问 http://localhost:3000/
```
## 目录结构
```
|
|—— build 
|—— config
|—— server 服务端
| |—— app.js 服务端启动入口文件
| |—— static 打包后的资源文件
| |__ index.html 网页入口
|
|——src 资源文件
| |—— assets 组件静态资源库
| |—— components 组件库
| |—— deal  163api返回的JSON字符串解构
| |—— filters 自定义过滤器
| |—— router 路由配置
| |—— store vuex状态管理
| |—— App.vue 163SPA
| |__ main.js SPA入口
|
|__ static 静态资源目录

```

## 路由配置
详情见`src/router/index.js`




