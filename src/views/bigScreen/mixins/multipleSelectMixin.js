/**
 * 选中多个组件进行组合
 */
import { mapMutations } from 'vuex'

export default {
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
      changeShiftDown: 'changeShiftDown'
    }),
    keydown (event) {
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
