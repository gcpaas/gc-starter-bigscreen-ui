<template>
  <div class="basic-component-button">
    <el-button
      :type="config.customize.type"
      :round="config.customize.isRound"
      :plain="config.customize.isPlain"
      :loading="config.customize.isLoading"
      :style="{
        backgroundColor: config.customize.type ? null : config.customize.backgroundColor,
        borderColor: config.customize.borderStyle.borderColor,
        borderWidth: config.customize.borderStyle.borderWidth + 'px',
        borderStyle: config.customize.borderStyle.borderStyle,
        borderRadius: config.customize.borderStyle.borderRadius + 'px'
      }"
    >
      <span :style="{ color: config.customize.fontColor,fontSize: config.customize.fontSize + 'px', }"> {{ config.name }}</span>
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'BasicComponentButton',
  props: {
    // 卡片的属性
    config: {
      type: Object,
      default: () => ({})
    },
    predefineThemeColors: {
      type: Array,
      default: () => {
        return [
          '#007aff',
          '#1aa97b',
          '#ff4d53',
          '#1890FF',
          '#DF0E1B',
          '#0086CC',
          '#2B74CF',
          '#00BC9D',
          '#ED7D32'
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.basic-component-button{
  width: 100%;
  height: 100%;
  .el-button{
    width: 100%;
    height: 100%;
  }
}
</style>
