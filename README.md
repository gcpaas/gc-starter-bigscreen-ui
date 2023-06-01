## 📚简介
<p align="center">
  <img alt="logo" width="50" src="./doc/logo.png">
</p>

🔥基于SpringBoot、MyBatisPlus、ElementUI、G2Plot、Echarts等技术栈的大屏设计器，具备大屏目录管理、大屏设计、大屏预览能力，支持MySQL、Oracle、PostgreSQL、JSON等数据集接入，对于复杂数据处理还可以使用Groovy脚本数据集，使用简单，完全免费，代码开源。

<p align="center">
    <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/gcpaas/gc-starter-bigscreen-ui?style=social">
  <img alt="GitHub forks" src="https://img.shields.io/github/forks/gcpaas/gc-starter-bigscreen-ui?style=social">
  <img alt="GitHub license" src="https://img.shields.io/badge/license-Apache%20License%202.0-blue.svg">
    <img alt="npm" src="https://img.shields.io/npm/v/gc-starter-bigscreen-ui">
  <img alt="Company" src="https://img.shields.io/badge/Author-科大国创云网科技有限公司-blue.svg">
    <img alt="QQ" src="https://img.shields.io/badge/QQ-322302395-blue.svg">
</p>

-------------------------------------------------------------------------------

## 效果图

<img alt="logo" src="./doc/images/design01.png">


## 优势

* 一站式大屏解决方案，从**数据处理**->**大屏设计**->**大屏预览**->**生产使用**
* 支持**多种数据集接入**，可用于生产
* 支持🔥**独立部署**，不对原有工程产生影响
* 支持🔥**嵌入式集成**，与项目无缝融合，引入依赖包即可，无其他系统框架依赖，减少运维成本
* 支持自定义接口权限、数据权限，轻松对接🔥**Shiro、Security**等认证框架，保证大屏数据安全


## 功能
- [x] 支持大屏管理、设计、预览、导出、集成
- [x] 支持图层上下调整，支持置于顶层、置于底层
- [x] 支持图画布组件框选、组合、取消组合、锁定、批量删除、复制功能
- [x] 支持图画布组件撤回和取消撤回、历史操作记录功能
- [x] 支持文本、图片、轮播表、排名表、翻牌器、基础表格、倒计时、系统时间、外链
- [x] 支持基础折线图、梯形图、柱状图、面积图、条形图、饼图、环图、水波图、仪表盘、进度条、词云图、雷达图、漏斗图等
- [x] 支持15中边框组件，支持动画、渐变色设置，支持水平线、垂直线设置
- [x] 支持10多种修饰组件，支持动画、渐变色设置
- [x] 支持资源管理，包含LOGO、3D图标、商务科技图、卡通手绘图、简约背景图、大屏背景图等上百个大屏设计资源，资源支持自定义上传
- [x] 支持组件管理，支持组件化设计，一键复用组件
- [x] 支持数据源管理，支持MySQL、ClickHouse、PostgreSQL、Oracle
- [x] 支持数据集管理，支持原始数据集、自助数据集、存储过程数据集、JSON数据集、脚本数据集、HTTP数据集，接入不同来源数据
- [x] 支持自定义接口权限、数据权限，保证大屏数据安全


## 链接

* [使用手册、二次开发、部署手册、常见问题](https://www.yuque.com/chuinixiongkou/bigscreen/index)
* [前端代码仓库(GitHub)](https://github.com/gcpaas/gc-starter-bigscreen-ui)、[前端代码仓库(码云)](https://gitee.com/gcpaas/gc-starter-bigscreen-ui)
* [后端代码仓库(GitHub)](https://github.com/gcpaas/gc-starter-bigscreen)、 [后端代码仓库(码云)](https://gitee.com/gcpaas/gc-starter-bigscreen)

## 如何集成

### 1. 安装依赖

``` bash
npm install gc-starter-bigscreen-ui
```

### 2. 在 `main.js` 引入大屏
```javascript
// file: main.js

// 组件依赖 element-ui，项目已有element-ui可以忽略此步骤
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI, { size: 'mini' })

// 引入大屏css
import 'gc-starter-bigscreen-ui/lib/bigScreen.css'
```

###  3. 在 `main.js` 配置大屏

**方式一：后端服务地址配置在`.js`文件中**

```javascript
// file: xxx.js

window.CONFIG.baseUrl=http://127.0.0.1:8081/bigScreenServer
```

```javascript
// file: main.js

import { registerConfig } from 'gc-starter-bigscreen-ui'
registerConfig({
  httpConfigs: {
    baseURL: `这里是后端服务地址的值，如：window.CONFIG.baseUrl`
  }
}, router)
```

**方式二：后端服务地址配置在`.env文件中**

```javascript
// file: .env.development

VUE_APP_BASE_URL=http://127.0.0.1:8081/bigScreenServer
```

```javascript
// file: main.js

import { registerConfig } from 'gc-starter-bigscreen-ui'
registerConfig({
  httpConfigs: {
    baseURL: `这里是后端服务地址的值，如：process.env.VUE_APP_BASE_URL`
  }
}, router)
```

### 4.  `vuex`模块新增大屏`store`

```js
// file: 项目中导出strore的文件

import { $bigScreen } from 'gc-starter-bigscreen-ui'
const store = new Vuex.Store({
  modules: 
    // 导出大屏所需vuex模块
    bigScreen: $bigScreen.bigScreenStore
  }
})
export default store

```

### 5. 访问大屏

启动项目后，访问前端地址 http://ip:port/management


## 演示DEMO

<a href="http://gcpaas.gccloud.com/bigScreen"> http://gcpaas.gccloud.com/bigScreen </a>

## 联系我们
<img alt="Email" src="https://img.shields.io/badge/Email-tech@ustcinfo.com-blue.svg">

<img alt="QQ群" src="https://img.shields.io/badge/QQ群-322302395-blue.svg">

<p>
    <img alt="logo" width="200" src="./doc/images/qq.jpeg">
</p>

## License

Apache License 2.0
