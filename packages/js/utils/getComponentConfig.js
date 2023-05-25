import Icon from 'packages/assets/images/bigScreenIcon/export'
// import _ from 'lodash'
export default function getComponentConfig (type) {
  // const _type = _.upperFirst(type)
  // const className = `com.gccloud.starter.lowcode.page.bigscreen.components.${_type}Chart`
  switch (type) {
    case 'texts':
      return {
        name: '文本',
        title: '文本标签占位符',
        icon: Icon.getNameList()[0],
        className: 'com.gccloud.bigscreen.core.module.chart.components.ScreenTextChart',
        w: 150,
        h: 30,
        x: 0,
        y: 0,
        type
      }

    case 'picture':
      return {
        name: '图片',
        title: '图片',
        icon: Icon.getNameList()[1],
        className: 'com.gccloud.bigscreen.core.module.chart.components.ScreenPictureChart',
        w: 280,
        h: 200,
        x: 0,
        y: 0,
        type
      }
    case 'screenScrollBoard':
      return {
        name: '轮播表',
        title: '轮播表',
        icon: Icon.getNameList()[2],
        className: 'com.gccloud.bigscreen.core.module.chart.components.ScreenScrollBoardChart',
        w: 500,
        h: 300,
        x: 0,
        y: 0,
        type
      }
    case 'screenScrollRanking':
      return {
        name: '排名轮播表',
        title: '排名轮播表',
        icon: Icon.getNameList()[3],
        className: 'com.gccloud.bigscreen.core.module.chart.components.ScreenScrollRankingChart',
        w: 550,
        h: 350,
        x: 0,
        y: 0,
        type
      }
    case 'tables':
      return {
        name: '表格',
        title: '表格',
        icon: Icon.getNameList()[4],
        className: 'com.gccloud.bigscreen.core.module.chart.components.ScreenTablesChart',
        w: 600,
        h: 400,
        x: 0,
        y: 0,
        type
      }
    case 'map':
      return {
        name: '地图',
        title: '地图',
        icon: Icon.getNameList()[5],
        className: 'com.gccloud.bigscreen.core.module.chart.components.ScreenMapChart',
        w: 800,
        h: 700,
        x: 0,
        y: 0,
        type
      }
    case 'currentTime':
      return {
        name: '当前时间',
        title: '当前时间',
        icon: Icon.getNameList()[6],
        className: 'com.gccloud.bigscreen.core.module.chart.components.ScreenCurrentTimeChart',
        w: 280,
        h: 50,
        x: 0,
        y: 0,
        type
      }
    case 'timeCountDown':
      return {
        name: '倒计时',
        title: '倒计时',
        icon: Icon.getNameList()[7],
        className: 'com.gccloud.bigscreen.core.module.chart.components.ScreenTimeCountDownChart',
        w: 280,
        h: 50,
        x: 0,
        y: 0,
        type
      }
    case 'iframeChart':
      return {
        name: '外链',
        title: '外链',
        icon: Icon.getNameList()[8],
        className: 'com.gccloud.bigscreen.core.module.chart.components.ScreenIframeChart',
        w: 500,
        h: 500,
        x: 0,
        y: 0,
        type
      }
    default:
      return {}
  }
}
