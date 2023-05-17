<!--
 * @description: 数据为空的组件
 * @Date: 2022-06-07 10:51:48
 * @Author: xingheng
-->
<template>
  <div
    class="img-empty-wrap"
  >
    <img
      :src="img"
      alt=""
    >
    <span>{{ text }}</span>
  </div>
</template>
<script>
export default {
  name: 'Empty',
  props: {
    text: {
      type: String,
      default: '数据为空'
    }
  },
  data () {
    return {
      img: require('@/assets/images/uedImgs/empty.png')
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
  .img-empty-wrap {
    flex-direction: column;
    display: flex;
    align-items: center;
    color: #9a9a9a;
  }
</style>
