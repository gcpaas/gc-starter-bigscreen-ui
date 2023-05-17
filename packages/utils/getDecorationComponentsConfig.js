/*
 * @description: 得到装饰组件配置
 */
export default function getComponentConfig (type, classNameType) {
  const className = 'com.gccloud.bigscreen.core.module.chart.components.ScreenDecorationChart'
  switch (type) {
    case 'decoration1':
      return {
        name: '装饰一',
        title: '装饰一',
        img: null,
        component: require('packages/Decorations/Decoration1/decoration1.vue').default,
        className,
        w: 350,
        h: 30,
        x: 0,
        y: 0,
        type
      }
    case 'decoration2':
      return {
        name: '装饰三',
        title: '装饰三',
        img: null,
        component: require('packages/Decorations/Decoration2/decoration2.vue').default,
        className,
        w: 350,
        h: 20,
        x: 0,
        y: 0,
        type
      }
    case 'decoration2Reverse':
      return {
        name: '装饰三(旋转)',
        title: '装饰三(旋转)',
        img: null,
        component: require('packages/Decorations/Decoration2Reverse/decoration2.vue').default,
        className,
        w: 20,
        h: 350,
        x: 0,
        y: 0,
        type
      }
    case 'decoration3':
      return {
        name: '装饰二',
        title: '装饰二',
        img: null,
        component: require('packages/Decorations/Decoration3/decoration3.vue').default,
        className,
        w: 350,
        h: 30,
        x: 0,
        y: 0,
        type
      }
    case 'decoration4':
      return {
        name: '装饰四',
        title: '装饰四',
        img: null,
        component: require('packages/Decorations/Decoration4/decoration4.vue').default,
        className,
        w: 30,
        h: 320,
        x: 0,
        y: 0,
        type
      }
    case 'decoration4Reverse':
      return {
        name: '装饰四(旋转)',
        title: '装饰四(旋转)',
        img: null,
        component: require('packages/Decorations/Decoration4Reverse/decoration4.vue').default,
        className,
        w: 320,
        h: 30,
        x: 0,
        y: 0,
        type
      }
    case 'decoration5':
      return {
        name: '装饰五',
        title: '装饰五',
        img: null,
        component: require('packages/Decorations/Decoration5/decoration5.vue').default,
        className,
        w: 350,
        h: 50,
        x: 0,
        y: 0,
        type
      }
    case 'decoration6':
      return {
        name: '装饰六',
        title: '装饰六',
        img: null,
        component: require('packages/Decorations/Decoration6/decoration6.vue').default,
        className,
        w: 350,
        h: 30,
        x: 0,
        y: 0,
        type
      }
    case 'decoration8':
      return {
        name: '装饰七',
        title: '装饰七',
        img: null,
        component: require('packages/Decorations/Decoration8/decoration8.vue').default,
        className,
        w: 350,
        h: 50,
        x: 0,
        y: 0,
        type
      }
    case 'decoration8Reverse':
      return {
        name: '装饰七(旋转)',
        title: '装饰七(旋转)',
        img: null,
        component: require('packages/Decorations/Decoration8Reverse/decoration8.vue').default,
        className,
        w: 350,
        h: 50,
        x: 0,
        y: 0,
        type
      }
    case 'decoration9':
      return {
        name: '装饰八',
        title: '装饰八',
        img: null,
        component: require('packages/Decorations/Decoration9/decoration9.vue').default,
        className,
        w: 150,
        h: 150,
        x: 0,
        y: 0,
        type
      }
    case 'decoration10':
      return {
        name: '装饰九',
        title: '装饰九',
        img: null,
        component: require('packages/Decorations/Decoration10/decoration10.vue').default,
        className,
        w: 350,
        h: 50,
        x: 0,
        y: 0,
        type
      }
    case 'decoration11':
      return {
        name: '装饰十',
        title: '装饰十',
        img: null,
        component: require('packages/Decorations/Decoration11/decoration11.vue').default,
        className,
        w: 350,
        h: 50,
        x: 0,
        y: 0,
        type
      }
    case 'decoration12':
      return {
        name: '装饰十一',
        title: '装饰十一',
        img: null,
        component: require('packages/Decorations/Decoration12/decoration12.vue').default,
        className,
        w: 150,
        h: 150,
        x: 0,
        y: 0,
        type
      }
    default:
      return {}
  }
}
