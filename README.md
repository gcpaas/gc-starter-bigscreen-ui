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

## 📝 文档

[📘中文文档](https://www.yuque.com/chuinixiongkou/bigscreen/index)


# 大屏组件使用
## 一、安装

``` bash
npm install gc-starter-bigscreen-ui
```
组件依赖于一些组件，如果工程中没有，需要安装
```bash
npm install @antv/g2plot@2.4.20  @jiaminghi/data-view@2.10.0 axios@0.18.1 element-ui@2.15.6 insert-css@^2.0.0 jquery@^3.6.4  lodash@4.17.21 moment@^2.29.1 qs@^6.9.6 sortablejs@^1.15.0 tiny-sass-compiler@^0.12.2 vue-codemirror@^4.0.6 vue-contextmenujs@^1.4.9 vue-draggable-resizable-gorkys@^2.4.8 vue-json-editor@^1.4.3 vue-json-viewer@^2.2.22 vue-quill-editor@^3.0.6 vue-sketch-ruler@^1.0.3 vuedraggable@^2.24.3 ztree@3.5.24 echarts@^5.2.2
```

## 二、组件使用

### 1. 注册配置
#### 1.1 在 `main.js` 注册基础配置
在您的框架中，大屏接口的baseURL（需要启动大屏后端服务）可能有所不同，所以需要注册一些基础配置，如下：

```js
// 全局引入css
import 'gc-starter-bigscreen-ui/lib/bigScreen.css'
import { registerConfig } from 'gc-starter-bigscreen-ui'

// 第二个参数router是路由实例，添加后内部将会为您注册路由，快速访问
registerConfig({
  // 路由
  routers: {
    // 大屏设计路由
    designUrl: '/design',
    // 预览路由
    previewUrl: '/preview',
    // 页面管理路由（带头部跳转路由）
    pageManagementUrl: '/management',
    // 页面列表路由
    pageListUrl: '/pages',
    // 数据管理（带头部）
    dsManageUrl: '/data-source-manage',
    // 数据源管理
    dataSourceUrl: '/data-source',
    // 数据集管理
    dataSetUrl: '/data-set'
  },
	// 自定义http配置
  httpConfigs: {
		baseURL: 'http://127.0.0.1:8081/bigScreenServer' // 必填 
    // ...其他，比如请求头
    // headers: {
    //   'Content-Type': 'application/json; charset=utf-8',
    // }
	}
}, router)

```

- Q: 如何使用系统内已经存在的配置，比如baseURL 在window.baseURL上已经绑定，根据环境不同这个baseURL不同而不一样，怎么写。
- A:  可这样写

````js
registerConfig({
  // 自定义http配置
  httpConfigs: {
		baseURL: 'http://127.0.0.1:8081/bigScreenServer' // 必填 
	}
	// ...	
}, router)
````

- Q: 如何使用在 .env.prod   、 .env.dev中的变量？
- A: 比如，在 .env.prod   、 .env.dev中定义了 VUE_APP_BASE_URL （必须以VUE_APP_开头），在js中这么取即可

```js
registerConfig({
  httpConfigs: {
		baseURL: process.env.VUE_APP_BASE_URL
	}
	// ...	
}, router)
```



#### 1.2 引入大屏运行器所需要的vuex模块

```js
// 其他代码省略
// 此处引入页面运行器vuex模块
import { $bigScreen } from 'gc-starter-bigscreen-ui'
const store = new Vuex.Store({
  modules: {
    // 此处导出大屏所需vuex模块
    bigScreen: $bigScreen.bigScreenStore
  }
})
export default store

```

### 2. 快速访问（不用建页面，直接访问）

启动项目后，可分别访问

（此处假设前端基础路径为 localhost:8080）
下面的路由地址和在main.js 中 registerConfig 注入的配置一致

```js
localhost:8080/pages
localhost:8080/big-screen/design?code=xxx
localhost:8080/big-screen/preview?code=xxx
localhost:8080/data-sources/data-source-sets
localhost:8080/data-sources/data-set-configuration
```



### 3. 自定义页面路由


#### 3.1 大屏管理页页面
> 在组件中引入设计器组件
```vue
<template>
  <BigScreenManagement />
</template>
<script>
import { BigScreenManagement } from 'gc-starter-bigscreen-ui'
export default {
  components: {
    BigScreenManagement
  }
}
</script>
```

#### 3.2 设计态页面

> 在组件中引入设计器组件
引用该组件的路由必须包含code参数，code参数为页面的唯一标识

```vue
<template>
  <!-- code为大屏设计时的编码，你可以携带到本页面路由中获取 -->
  <BigScreenDesign ref="BigScreenDesign" :header-show="headerShow" :code="code" />
</template>
<script>
import { BigScreenDesign } from "gc-starter-bigscreen-ui";
export default {
  components: {
    BigScreenDesign,
  },
  data() {
    return {
      // 是否展示头部，可隐藏后自己写头部
      headerShow: true,
      // 当头部隐藏后，用户自己设置的头部高度不定，我们可自定义此时下方的设计器高度
      height: '100vh'
    };
  },
  computed: {
    code() {
      return this.$route.query.code;
    },
  },
  methods: {
    // 下面是其方法
    // 保存并预览
    saveAndPreview() {
      this.$refs.BigScreenDesign.saveAndPreview();
    },
    // 保存
    save() {
      this.$refs.BigScreenDesign.save();
    },
    // 清空
    empty() {
      this.$refs.BigScreenDesign.empty();
    },
  },
};
</script>
```

#### 3.3 运行态页面

> 在组件中引入运行态组件
> 引用该组件的路由必须包含code参数，code参数为页面的唯一标识

```vue
<template>
  <!-- code为大屏运行时的编码，你可以携带到本页面路由中获取 -->
  <BigScreenRun :code="code"/>
</template>
<script>
  import { BigScreenRun }  from 'gc-starter-bigscreen-ui'
  export default {
    components: {
      BigScreenRun
    },
    computed: {
      code() {
        return this.$route.query.code
      }
    }
  }
</script>
```





#### 3.4 数据源管理页面

```vue
<template>
  <DataSourceManagement />
</template>
<script>
  import { DataSourceManagement }  from 'gc-starter-bigscreen-ui'
  export default {
    components: {
      DataSourceManagement
    }
  }
</script>
```



#### 3.5 数据集管理页面

```vue
<template>
  <DataSetManagement />
</template>
<script>
  import { DataSetManagement }  from 'gc-starter-bigscreen-ui'
  export default {
    components: {
      DataSetManagement
    }
  }
</script>
```

#### 3.6 创建路由

为 步骤3 中的页面创建路由，即可使用，路由和registerConfig注册的路径保持一致



# 大屏组件的开发
## 环境准备
node = v10.x
npm = v6.x

## 开发步骤
### 1. 安装依赖
```shell
npm install
```

### 2. 启动后端服务
启动 https://github.com/gcpaas/gc-starter-bigscreen 工程的服务，
服务后端地址请记住，后面会用到

### 3. 在前端注册服务
#### 3.1 注册服务

根据环境不同修改public/config/index-development.js 或public/config/index-production.js中的配置，
将baseUrl改为2中的服务端地址

`public/config/index-development.js` :
```js
window.ENV = 'development'
var developmentConfig = {
  httpConfigs: {
    baseURL: 'http://127.0.0.1:8081/bigScreenServer'
  }
}
// 必须的
window.CONFIG = configDeepMerge(window.CONFIG, developmentConfig)
```

在main.js中注册服务，如下, baseUrl即为2中的服务端地址
```js
import { registerConfig } from 'gc-starter-bigscreen-ui'
// 因为此工程的配置放到window的CONFIG对象中，所以从这里取出来。自己的项目有可能从其他地方获取
registerConfig({
  httpConfigs: {
		baseURL: window.CONFIG?.baseUrl
	}
})
```

#### 3.2 运行访问
```shell
npm run serve
```

### 4. 开发和发布
可根据需求开发，
自定义开发组件后，执行下面命令可打包组件，然后发布到npm上
```shell
npm run package
```

## 联系我们
<img alt="Email" src="https://img.shields.io/badge/Email-tech@ustcinfo.com-blue.svg">
<img alt="QQ群" src="https://img.shields.io/badge/QQ群-322302395-blue.svg">

## License

Apache License 2.0
