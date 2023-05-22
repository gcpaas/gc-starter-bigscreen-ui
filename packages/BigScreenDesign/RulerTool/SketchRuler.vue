<template>
  <div
    id="wrapper"
    class="wrapper vue-ruler-wrapper"
    :style="{
      width: width + thick + 'px',
      height: height + thick + 'px'
    }"
  >
    <i
      :class="{
        'iconfont-bigscreen': true,
        'icon-eye': isShowReferLine,
        'icon-eye-close': !isShowReferLine
      }"
      @click="handleCornerClick"
    />
    <SketchRule
      :key="scale"
      :lang="lang"
      :thick="thick"
      :scale="scale"
      :width="width"
      :height="height"
      :start-x="startX"
      :start-y="startY"
      :shadow="shadow"
      :hor-line-arr="[...lines.h, ...presetLines.h]"
      :ver-line-arr="[...lines.v, ...presetLines.v]"
      :palette="Palette"
      :is-show-refer-line="isShowReferLine"
      :corner-active="cornerActive"
      @handleLine="handleLine"
      @onCornerClick="handleCornerClick"
    />
    <div
      id="screens"
      ref="screensRef"
      :style="{
        cursor: isMouseDown ? 'move' : 'default',
      }"
      @scroll="handleScroll"
    >
      <div
        ref="containerRef"
        class="screen-container"
        :style="containerRefStyle"
      >
        <div
          id="canvas"
          :style="canvasStyle"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SketchRule from 'vue-sketch-ruler'
import { dragDesignPanelMixin } from './dragDesignPanel'
import { mapState } from 'vuex'
export default {
  components: {
    SketchRule
  },
  mixins: [dragDesignPanelMixin],
  props: {
    width: {
      type: Number,
      default: 500
    },
    height: {
      type: Number,
      default: 400
    }
  },
  data () {
    return {
      startX: 0,
      startY: 0,
      lines: {
        h: [],
        v: []
      },
      thick: 20,
      lang: 'zh-CN', // 中英文
      isShowRuler: true, // 显示标尺
      isShowReferLine: true, // 显示参考线
      cornerActive: true, // 左上角激活状态
      Palette: {
        bgColor: 'rgba(225,225,225, 0)',
        longfgColor: '#BABBBC',
        shortfgColor: '#C8CDD0',
        fontColor: '#7D8694',
        shadowColor: 'transparent',
        lineColor: '#0089d0',
        borderColor: '#transparent',
        cornerActiveColor: 'rgb(235, 86, 72, 0.6)'
      },

      containerRefStyle: {
        width: this.width + 'px',
        height: this.height + 'px'
      }
    }
  },
  computed: {
    ...mapState('bigScreen', {
      scale: state => state.zoom / 100
    }),
    presetLines () {
      const presetLine = this.$store.state.bigScreen.presetLine
      // { type: 'h', site: y || 0 },
      const v = presetLine?.filter(p => p.type === 'h')?.map(p => p.site)
      const h = presetLine?.filter(p => p.type === 'v')?.map(p => p.site)
      return {
        h,
        v
      }
    },
    shadow () {
      return {
        x: 0,
        y: 0,
        width: this.width,
        height: this.height
      }
    },
    canvasStyle () {
      return {
        width: this.width + 'px',
        height: this.height + 'px',
        transform: `scale(${this.scale})`,
        transformOrigin: '0 0 0'
      }
    }
  },
  mounted () {
    // 监听屏幕改变
    window.onresize = this.initRuleHeight
    this.initRuleHeight()
  },
  methods: {
    initRuleHeight () {
      setTimeout(() => {
        const screensRect = document
          .querySelector('.grid-wrap-box')
          .getBoundingClientRect()

        this.diffX = this.width - screensRect.width
        this.diffY = this.height - screensRect.height

        this.containerRefStyle = {
          width: this.diffX > 0 ? ((this.width + this.diffX + this.thick + 30) + 'px') : (this.width + 'px'),
          height: this.diffY > 0 ? ((this.height + this.diffY + this.thick + 30) + 'px') : (this.height + 'px')
        }
      }, 1000)
    },
    handleLine (lines) {
      this.lines = lines
    },
    handleCornerClick () {
      this.isShowReferLine = !this.isShowReferLine
      this.cornerActive = !this.cornerActive
    },
    handleScroll () {
      const screensRect = document
        .querySelector('#screens')
        .getBoundingClientRect()
      const canvasRect = document
        .querySelector('#canvas')
        .getBoundingClientRect()

      // 标尺开始的刻度
      const startX = (screensRect.left + this.thick - canvasRect.left) / this.scale
      const startY = (screensRect.top + this.thick - canvasRect.top) / this.scale

      this.startX = startX >> 0
      this.startY = startY >> 0

      this.$emit('changeStart', {
        x: this.startX,
        y: this.startY
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~packages/BigScreenDesign/fonts/iconfont.css';
.wrapper {
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;

  .iconfont-bigscreen {
    position: absolute;
    left: 0;
    top: 0;
    font-size: 16px;
    color: #fff;
    z-index: 999;
    cursor: pointer;
  }
}

#screens {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: auto; }

.screen-container {
  position: absolute;

}

.scale-value {
  position: absolute;
  left: 0;
  bottom: 100%;
}

.button {
  position: absolute;
  left: 100px;
  bottom: 100%;
}

.button-ch {
  position: absolute;
  left: 200px;
  bottom: 100%;
}
.button-en {
  position: absolute;
  left: 230px;
  bottom: 100%;
}

#canvas {
  position: absolute;
  top: 21px;
  left: 21px;
}
/deep/ .line {
  border-left: 1px dashed #0089d0 !important;
  border-top: 1px dashed #0089d0 !important;
}
/deep/.action {
  .value {
    background: #007aff;
    padding: 4px;
    color: #fff;
  }

  .del {
    color: #007aff;
  }
}
/deep/ .ruler, /deep/ .corner {
  background: var(--bs-background-1);
}
/deep/ .corner {
  z-index: 999;
  background: var(--bs-background-1) !important;
}

/deep/ .mb-ruler {
  z-index: 998
}
</style>
