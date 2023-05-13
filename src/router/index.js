import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const baseRoutes = [
  // 页面管理
  {
    path: '/',
    redirect: '/pages',
    component: () => import('@/layout/ApplicationCreateTop/index'),
    children: [
      {
        path: '/pages',
        component: () => import('@/views/pageManage/index'),
        meta: {
          title: '页面管理'
        }
      },
      {
        path: '/data-sources',
        redirect: '/data-sources/data-source-sets',
        component: () => import('@/views/dataSourceManagement/index'),
        meta: {
          title: '数据源管理页面'
        },
        children: [
          {
            path: 'data-source-sets',
            component: () => import('@/views/dataSourceManagement/dataSourceSet/index'),
            meta: {
              title: '数据源管理'
            }
          },
          {
            path: 'data-set-configuration',
            component: () => import('@/views/dataSourceManagement/dataSetConfig/index'),
            meta: {
              title: '数据集管理'
            }
          }
        ]
      }
    ]
  },
  // 大屏页面设计
  {
    path: '/big-screen/design',
    name: 'BigScreenDesign',
    component: () => import('@/views/bigScreen/pages/design/index'),
    meta: {
      title: '大屏页面设计'
    }
  },
  {
    name: 'bigScreenPreview',
    path: '/big-screen/preview',
    component: () => import('@/views/bigScreen/components/Run/index'),
    meta: {
      title: '大屏页面预览'
    }
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
