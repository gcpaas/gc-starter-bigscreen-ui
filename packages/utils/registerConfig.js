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
  window.BS_CONFIG = {}
  const routers = [
    {
      path: config?.routers?.pageManagementUrl || '/pages',
      name: 'Management',
      component: () => require.ensure([], () => require('packages/BigScreenManagement'))
    },
    {
      path: config?.routers?.designUrl || '/big-screen/design',
      name: 'Design',
      component: () => require.ensure([], () => require('packages/BigScreenDesign'))
    },
    {
      path: config?.routers?.previewUrl || '/big-screen/preview',
      name: 'Preview',
      component: () => require.ensure([], () => require('packages/BigScreenRun'))
    },
    {
      path: config?.routers?.dataSourceUrl || '/data-sources',
      name: 'DataSourceManagement',
      component: () => require.ensure([], () => require('packages/DataSourceManagement/dataSourceSet'))
    },
    {
      path: config?.routers?.dataSourceSetUrl || '/data-sources/data-source-sets',
      name: 'DataSetManagement',
      component: () => require.ensure([], () => require('packages/DataSourceManagement/dataSetConfig'))
    }
  ]
  // eslint-disable-next-line no-unused-expressions
  routers?.forEach(route => {
    // eslint-disable-next-line no-unused-expressions
    router?.addRoute(route)
  })

  window.BS_CONFIG = configDeepMerge(window.BS_CONFIG, config)
}
