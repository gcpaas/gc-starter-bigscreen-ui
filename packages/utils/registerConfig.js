/**
 * 对象属性合并，与 Object.assign 语法不同
 * @param target
 * @param source
 * @returns {{}}
 */
function configDeepMerge (target, source) {
  const merged = {}
  for (const each in source) {
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
  for (const eachTarget in target) {
    if (!(eachTarget in source) && target.hasOwnProperty(eachTarget)) {
      merged[eachTarget] = target[eachTarget]
    }
  }
  return merged
}
// 自动注册路由
function registerRouters (config, router) {
  const routers = [
    // 页面管理
    {
      path: config?.routers?.pageManagementUrl || '/pages',
      redirect: config?.routers?.pageListUrl || '/pages',
      component: () => import('packages/layout/ApplicationCreateTop/index'),
      children: [
        {
          path: config?.routers?.pageListUrl || '/pages',
          name: 'Management',
          component: () => require.ensure([], () => require('packages/BigScreenManagement')),
          meta: {
            title: '页面管理'
          }
        },
        {
          path: config?.routers?.dsManageUrl || '/data-sources',
          redirect: config?.routers?.dataSourceUrl || '/data-sources/data-source-sets',
          component: () => import('packages/DataManagement'),
          meta: {
            title: '数据源管理页面'
          },
          children: [
            {
              path: config?.routers?.dataSourceUrl || '/data-sources/data-source-sets',
              component: () => import('packages/DataSourceManagement'),
              meta: {
                title: '数据源管理'
              }
            },
            {
              path: config?.routers?.dataSetUrl || '/data-sources/data-set-configuration',
              component: () => import('packages/DataSetManagement'),
              meta: {
                title: '数据集管理'
              }
            }
          ]
        }
      ]
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
    }
  ]
  // 如果router有addRoutes方法
  if (router?.addRoutes) {
    router?.addRoutes(routers)
  } else {
    // eslint-disable-next-line no-unused-expressions
    routers?.forEach(route => {
      // eslint-disable-next-line no-unused-expressions
      router?.addRoute(route)
    })
  }
}

// 注册配置
export default function (config, router) {
  window.BS_CONFIG = {}
  window.BS_CONFIG = configDeepMerge(window.BS_CONFIG, config)

  // 注册路由
  registerRouters(config, router)
}
