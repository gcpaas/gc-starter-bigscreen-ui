/**
 * 对象属性合并，与 Object.assign 语法不同
 * @param target
 * @param source
 * @returns {{}}
 */
function configDeepMerge (target, source) {
  var merged = {}
  for (var each in source) {
    if (target.hasOwnProperty(each) && source.hasOwnProperty(each)) {
      if (typeof target[each] === 'object' && typeof source[each] === 'object') {
        merged[each] = configDeepMerge(target[each], source[each])
      } else {
        merged[each] = source[each]
      }
    } else if (source.hasOwnProperty(each)) {
      merged[each] = source[each]
    }
  }
  for (var eachTarget in target) {
    if (!(eachTarget in source) && target.hasOwnProperty(eachTarget)) {
      merged[eachTarget] = target[eachTarget]
    }
  }
  return merged
}

export default function (config, router) {
  window.SITE_CONFIG = {
    // 大屏设计路由
    designUrl: '/bigScreen/design',
    // 预览路由
    previewUrl: '/preview/bigScreen',
    // 页面管理路由
    pageManagementUrl: '/pageManagement',
    // 数据管理
    dataSourceUrl: '/dataSourceManagement',
    // 数据源管理
    dataSourceSetUrl: '/dataSourceSet',
    // 数据集管理
    dataSetConfigUrl: '/dataSetConfig'
  }
  const routers = [
    {
      path: config?.pageManagementUrl || '/pageManagement',
      name: 'Management',
      component: () => require.ensure([], () => require('../../pageManage'))
    },
    {
      path: config?.designUrl || '/bigScreen/design',
      name: 'Design',
      component: () => require.ensure([], () => require('../pages/design'))
    },
    {
      path: config?.previewUrl || '/preview/bigScreen',
      name: 'Preview',
      component: () => require.ensure([], () => require('../components/Run'))
    },
    {
      path: config?.dataSourceUrl || '/dataSourceManagement',
      name: 'DataSourceManagement',
      component: () => require.ensure([], () => require('../../dataSourceManagement/dataSourceSet'))
    },
    {
      path: config?.dataSourceSetUrl || '/dataSourceSet',
      name: 'DataSetManagement',
      component: () => require.ensure([], () => require('../../dataSourceManagement/dataSetConfig'))
    }
  ]
  // eslint-disable-next-line no-unused-expressions
  routers?.forEach(route => {
    // eslint-disable-next-line no-unused-expressions
    router?.addRoute(route)
  })

  window.SITE_CONFIG = configDeepMerge(window.SITE_CONFIG, config)
}
