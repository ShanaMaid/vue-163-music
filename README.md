# vue-163-music(网易云音乐web版)
用vue仿写163音乐客户端版，力求做到高度还原


## 效果图
![其实我不是客户端](show.gif)

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


## 模块
发现音乐
- [x] 个性推荐
- [ ] 歌单
- [ ] 主播电台
- [ ] 排行榜
- [ ] 歌手
- [ ] 最新音乐


- [ ] 私人FM
- [ ] MV
- [ ] 朋友
- [ ] 本地音乐
- [ ] 下载管理
- [ ] 我的音乐云盘
- [ ] 我的歌手
- [ ] 我的歌台
- [ ] 歌单

搜索音乐
- [x] 单曲
- [x] 歌手
- [x] 专辑
- [x] MV
- [x] 歌单
- [ ] 歌词
- [x] 主播电台
- [x] 用户

- [x] 播放音乐
## 路由配置
详情见`src/router/index.js`

发现音乐
- [x] 个性推荐
- [x] 歌单
- [x] 主播电台
- [x] 排行榜
- [x] 歌手
- [x] 最新音乐


- [x] 私人FM
- [x] MV
- [x] 朋友
- [x] 本地音乐
- [x] 下载管理
- [x] 我的音乐云盘
- [x] 我的歌手
- [x] 我的歌台
- [x] 歌单









## 指令
```
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 还处于开发填空中相关文档、功能、单元测试等后续进行完善