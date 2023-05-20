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
  // 没有router对象不注册路由
  if (!router) {
    return
  }
  const routers = [
    // 页面管理
    {
      path: config?.routers?.pageManagementUrl || '/pages',
      redirect: config?.routers?.pageListUrl || '/pages',
      component: () => import('packages/Layout/ApplicationCreateTop/index.vue'),
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
          component: () => import('packages/DataManagement/index.vue'),
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
function registerTheme (config) {
  const style = document.createElement('style')
  style.type = 'text/css'
  const theme = config?.customTheme
  let themeStr = ''
  for (const key in theme) {
    themeStr += `${key}:${theme[key]};`
  }
  style.innerHTML = `
  .el-dialog__wrapper, .el-popper, el-color-dropdown, .bs-theme-wrap {
      ${themeStr}
    }
  `
  document.getElementsByTagName('head')[0].appendChild(style)
}

// 注册配置
export default function (config, router) {
  window.BS_CONFIG = {}
  window.BS_CONFIG = configDeepMerge(window.BS_CONFIG, config)

  // 注册路由
  registerRouters(config, router)
  // 注册自定义主题
  registerTheme(config)
}
