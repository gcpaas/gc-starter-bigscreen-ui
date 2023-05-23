<template>
  <!-- <transition name="slide-fade"> -->
  <div
    v-if="rightVisiable"
    class="bs-right-panel-wrap"
  >
    <div class="bs-set-title">
      <span class="bs-set-title-text">{{ chartSettingShow ? `${title}设置` : '大屏设置' }}</span>
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
  <!-- </transition> -->
</template>
<script>
import RightSetting from 'packages/BigScreenDesign/RightSetting/index.vue'
import OverallSetting from 'packages/BigScreenDesign/OverallSetting/index.vue'
import { mapState } from 'vuex'
export default {
  name: '',
  components: {
    RightSetting,
    OverallSetting
  },
  props: {
    rightVisiable: {
      type: Boolean,
      default: false
    },
    pageInfoVisiable: {
      type: Boolean,
      default: false
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
      activeCode: state => state.activeCode
    }),
    chartSettingShow () {
      return this.rightVisiable && !this.pageInfoVisiable && this.activeCode
    },
    title () {
      return this.activeItem?.title || ''
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
    }
  }
}
</script>

<style lang="scss" scoped>
.bs-right-panel-wrap {
  display: flex;
  flex-direction: column;
  background-color: var(--bs-background-1);

  .bs-set-title {
    background-color: var(--bs-background-2);
    color: var(--bs-el-title);
    height: 40px;
    font-size: 14px;
    border-bottom: 2px solid var(--bs-background-1);
    display: flex;
    align-items: center;

    .bs-set-title-text {
      display: inline-block;
      border-left: 4px solid #007aff;
      padding-left: 10px;
    }
  }

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
    height: calc(100vh - 80px);
    width: 320px;
    box-sizing: border-box;
    background-color: var(--bs-background-2);

    .config-title {
      display: flex;
      height: 40px;
      line-height: 40px;
      padding: 0 10px;
      color: #fff;
      font-size: 14px;
      /* border-bottom: 1px solid #ebeef5; */

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
  height: calc(100vh - 80px);
  overflow-x: unset;
}
</style>
