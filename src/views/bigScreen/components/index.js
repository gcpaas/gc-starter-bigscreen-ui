// 大屏管理页面
import BigScreenManagement from "../../pageManage";
// 渲染整个bigScreen的渲染引擎
import BigScreenRun from "./Run";
// 大屏设计引擎
import BigScreenDesign from "../pages/design";
// 数据源管理
import DataSourceManagement from "../../dataSourceManagement/dataSourceSet";
// 数据集管理
import DataSetManagement from "../../dataSourceManagement/dataSetConfig";

// 大屏 vuex store数据
import bigScreenStore from "../store/page";
// 注册基础配置
import registerConfig from "../utils/registerConfig";

// 引入element-ui
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, { size: 'mini' })
// 存储组件列表
const components = [
  BigScreenManagement,
  BigScreenRun,
  BigScreenDesign,
  DataSetManagement,
  DataSourceManagement
];

const $bigScreen = {
  bigScreenStore
};

function install(Vue) {

  components.map(component => {
    Vue.component(component.name, component);
  });
}
export  {
  install,
  BigScreenManagement,
  BigScreenRun,
  BigScreenDesign,
  DataSetManagement,
  DataSourceManagement,

  $bigScreen,
  registerConfig
};

export default {
  install,
  BigScreenManagement,
  BigScreenRun,
  BigScreenDesign,
  DataSetManagement,
  DataSourceManagement,

  $bigScreen,
  registerConfig
};
