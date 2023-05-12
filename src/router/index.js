import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const baseRoutes = [
  // 页面管理
  {
    name: 'page',
    path: '/',
    redirect: '/pageManagement',
    component: () => import(/* webpackChunkName: "pageIndex" */ '@/layout/ApplicationCreateTop/index'),
    children: [
      {
        name: 'pageManagement',
        path: '/pageManagement',
        component: () => import(/* webpackChunkName: "pageManageIndex" */ '@/views/pageManage/index')
      },
      {
        name: 'dataSourceManagement',
        path: '/dataSourceManagement',
        component: () => import(/* webpackChunkName: "pageManageIndex" */ '@/views/dataSourceManagement/index'),
        children: [
          {
            // 数据源
            name: 'dataSourceSet',
            path: '/dataSourceSet',
            component: () => import(/* webpackChunkName: "dataSourceSet" */ '@/views/dataSourceManagement/dataSourceSet/index')
          },
          {
            // 数据集
            name: 'dataSetConfig',
            path: '/dataSetConfig',
            component: () => import(/* webpackChunkName: "dataSetConfig" */ '@/views/dataSourceManagement/dataSetConfig/index')
          }
        ]
      }
    ]
  },
  // 大屏页面设计
  {
    path: '/bigScreen/design',
    name: 'BigScreenDesign',
    component: () => import(/* webpackChunkName: "bigScreenDesign" */ '@/views/bigScreen/pages/design/index')
  },
  // 大屏页面预览
  {
    name: 'bigScreenPreview',
    path: '/preview/bigScreen',
    component: () => import(/* webpackChunkName: "bigScreenPreview" */ '@/views/bigScreen/components/Run/index')
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
