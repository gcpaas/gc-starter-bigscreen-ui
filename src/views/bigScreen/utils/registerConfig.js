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
    designUrl: '/big-screen/design',
    // 预览路由
    previewUrl: '/big-screen/preview',
    // 页面管理路由
    pageManagementUrl: '/pages',
    // 数据管理
    dataSourceUrl: '/data-sources',
    // 数据源管理
    dataSourceSetUrl: '/data-sources/data-source-sets',
    // 数据集管理
    dataSetConfigUrl: '/data-sources/data-set-configuration'
  }
  const routers = [
    {
      path: config?.pageManagementUrl || '/pages',
      name: 'Management',
      component: () => require.ensure([], () => require('../../pageManage'))
    },
    {
      path: config?.designUrl || '/big-screen/design',
      name: 'Design',
      component: () => require.ensure([], () => require('../pages/design'))
    },
    {
      path: config?.previewUrl || '/big-screen/preview',
      name: 'Preview',
      component: () => require.ensure([], () => require('../components/Run'))
    },
    {
      path: config?.dataSourceUrl || '/data-sources',
      name: 'DataSourceManagement',
      component: () => require.ensure([], () => require('../../dataSourceManagement/dataSourceSet'))
    },
    {
      path: config?.dataSourceSetUrl || '/data-sources/data-source-sets',
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
