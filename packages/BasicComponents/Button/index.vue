<template>
  <div>
    {{}} <el-button>查询</el-button>
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
    }
  }
}
</script>
