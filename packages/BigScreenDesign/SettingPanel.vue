<template>
  <transition name="slide-fade">
    <div class="bs-right-panel-wrap">
      <div
        class="bs-folder-wrap"
        :style="{ height }"
      >
        <i
          :class="rightVisiable ? 'el-icon-arrow-right' : 'el-icon-arrow-left'"
          @click="toggleShow"
        />
        <el-slider
          :value="zoom"
          vertical
          height="200px"
          class="slider-zoom"
          :min="10"
          @input="changeScreenZoom"
        />
      </div>
      <el-scrollbar>
        <div :class="!rightVisiable ? 'bs-page-right bs-page-right-fold' : 'bs-page-right'">
          <RightSetting
            v-if="chartSettingShow"
            @closeRightPanel="close"
            @updateSetting="updateSetting"
            @updateDataSetting="updateDataSetting"
          />
          <OverallSetting
            v-if="!chartSettingShow"
            ref="OverallSetting"
            @close="close"
          />
        </div>
      </el-scrollbar>
    </div>
  </transition>
</template>
<script>
import RightSetting from 'packages/BigScreenDesign/RightSetting/index.vue'
import OverallSetting from 'packages/BigScreenDesign/OverallSetting/index.vue'
import _ from 'lodash'
import { mapState, mapMutations } from 'vuex'
export default {
  name: '',
  components: {
    RightSetting,
    OverallSetting
  },
  props: {
    rightVisiable: {
      type: Boolean,
      default: true
    },
    headerShow: {
      type: Boolean,
      default: true
    },
    height: {
      type: String,
      default: '100vh'
    }
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState('bigScreen', {
      activeItem: state => state.activeItemConfig,
      activeCode: state => state.activeCode,
      zoom: state => state.zoom
    }),
    chartSettingShow () {
      return Boolean(!_.isEmpty(this.activeItem) && this.rightVisiable && this.activeCode)
    }
  },
  watch: {
    activeCode: {
      handler (val) {
        if (!val) {
          this.$nextTick(() => {
            // eslint-disable-next-line no-unused-expressions
            this.$refs.OverallSetting && this.$refs?.OverallSetting?.init()
          })
        }
      },
      deep: true,
      immediate: true
    }
  },
  mounted () { },
  methods: {
    ...mapMutations('bigScreen', [
      'changeZoom'
    ]),
    toggleShow () {
      this.$emit('update:rightVisiable', !this.rightVisiable)
    },
    close () {
      this.$emit('update:rightVisiable', false)
    },
    updateSetting (config) {
      this.$emit('updateSetting', config)
    },
    updateDataSetting (config) {
      this.$emit('updateDataSetting', config)
    },
    changeScreenZoom (zoom) {
      this.changeZoom(zoom)
    }
  }
}
</script>

<style lang="scss" scoped>
.bs-right-panel-wrap {
  display: flex;

  .bs-folder-wrap {
    width: 20px;
    position: relative;

    i {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      font-size: 20px;
      color: #fff;
      cursor: pointer;
      z-index: 1;
    }

    &:hover {
      background: rgba(143, 225, 255, .1)
    }
  }

  .bs-page-right {
    height: calc(100vh - 40px);
    width: 320px;
    box-sizing: border-box;

    .config-title {
      display: flex;
      height: 40px;
      line-height: 40px;
      padding: 0 10px;
      color: #fff;
      font-size: 14px;
      border-bottom: 1px solid #ebeef5;

      .config-title-text {
        display: inline-block;
        max-width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    >* {
      color: #fff;
    }

    // 左侧居中伸缩图标
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: -10px;
      width: 10px;
      height: 100%;
      background: #fff;
      cursor: pointer;
      z-index: 1;
    }
  }

  .bs-page-right-fold {
    width: 0;
    overflow: hidden;
  }

  .slider-zoom {
    position: absolute;
    bottom: 10px;
    right: -10px;
  }
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to

/* .slide-fade-leave-active for below version 2.1.8 */
  {
  transform: translateX(10px);
  opacity: 0;
}
/deep/ .el-scrollbar__view{
  height: calc(100vh - 40px);
  overflow-x: unset;
}
</style>
