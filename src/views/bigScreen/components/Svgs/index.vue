<template>
  <icon-svg
    :name="config.icon"
    class="page-opt-list-icon icon-box"
  />
</template>

<script>
import Vue from 'vue'
import SvgIcon from '@/components/icons/export'
Vue.use(SvgIcon)
export default {
  name: 'Svgs',
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-box{
  width: 100%;
  height: 100%;
}
</style>
