/**
 * 选中多个组件进行组合
 */
import { mapMutations, mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      activeCodes: (state) => state.bigScreen.activeCodes,
      activeChart: (state) => state.bigScreen.activeItemConfig
    })
  },
  mounted () {
    // 监听shift键的按下和抬起
    document.addEventListener('keydown', this.keydown)
    document.addEventListener('keyup', this.keyup)
  },
  beforeDestroy () {
    document.removeEventListener('keydown', this.keydown)
    document.removeEventListener('keyup', this.keyup)
  },
  methods: {
    ...mapMutations('bigScreen', {
      changeShiftDown: 'changeShiftDown',
      changeActivePos: 'changeActivePos',
      deleteItem: 'delItem'
    }),
    keydown (event) {
      // 关闭默认事件
      event.preventDefault()
      if (event.keyCode === 37) {
        // 左箭头键被按下
        this.changeActivePos({ diffX: -1, diffY: 0 })
      } else if (event.keyCode === 38) {
        // 上箭头键被按下
        this.changeActivePos({ diffX: 0, diffY: -1 })
      } else if (event.keyCode === 39) {
        // 右箭头键被按下
        this.changeActivePos({ diffX: 1, diffY: 0 })
      } else if (event.keyCode === 40) {
        // 下箭头键被按下
        this.changeActivePos({ diffX: 0, diffY: 1 })
      }
      // 删除
      if (event.keyCode === 8 || event.keyCode === 46) {
        // 批量删除
        if (Array.isArray(this.activeCodes) && this.activeCodes.length > 0) {
          this.deleteItem(this.activeCodes)
        } else {
          // 单个删除
          this.deleteItem(this.activeChart)
        }
      }

      if (event.shiftKey) {
        // 当按下 shift 键时，设置状态，表示 shiftKey 键被按下
        this.changeShiftDown(true)
      }
    },
    keyup (event) {
      if (!event.shiftKey) {
        // 当释放 shift 键时，重置状态，表示 shift 键没有被按下
        this.changeShiftDown(false)
      }
    }
  }
}
