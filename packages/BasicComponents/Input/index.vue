<template>
  <div class="basic-component-input">
    <el-input
      v-model="inputValue"
      resize="both"
    />
  </div>
</template>

<script>
export default {
  name: 'BasicComponentInput',
  props: {
    // 卡片的属性
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      inputValue: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.basic-component-input{
  width: 100%;
  .el-input{
    height: 100%;
    width: 100%;
   ::v-deep .el-input__inner{
      height: 100%;
      width: 100%;
    }
  }
}
</style>
