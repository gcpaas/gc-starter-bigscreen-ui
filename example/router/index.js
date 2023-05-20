import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// TODO: 后面有搞成可配置
export const baseRoutes = [
  {
    path: '/home',
    redirect: '/big-screen-list',
    component: () => import('packages/Layout/BigScreenHomeLayout/index.vue'),
    children: [
      {
        path: '/big-screen-list',
        name: 'BsList',
        component: () => require.ensure([], () => require('packages/BigScreenMag')),
        meta: {
          title: '大屏管理'
        }
      },
      {
        path: '/big-screen-template',
        name: 'Template',
        component: () => require.ensure([], () => require('packages/BigScreenTempMag')),
        meta: {
          title: '模版管理'
        }
      },
      {
        path: '/big-screen-dataSource',
        name: 'dataSource',
        component: () => require.ensure([], () => require('packages/DataSourceManagement')),
        meta: {
          title: '数据源管理'
        }
      },
      {
        path: '/big-screen-dataSet',
        name: 'dataSet',
        component: () => require.ensure([], () => require('packages/DataSetManagement/src/index.vue')),
        meta: {
          title: '数据集管理'
        }
      }
    ]
  }
]

export const constantRoutes = []

const createRouter = () => new Router({
  mode: process.env.VUE_APP_HISTORY === 'y' ? 'history' : null,
  base: process.env.VUE_APP_HISTORY === 'y' ? process.env.VUE_APP_BASE : null,
  scrollBehavior: () => ({ y: 0 }),
  routes: baseRoutes
})

const router = createRouter()

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
