<template>
  <div>
    <side-menu @getPageInfo="getPageInfo" />
    <menu-content :page-info="pageInfo" />
  </div>
</template>
<script>
import SideMenu from './SideMenu'
import MenuContent from './MenuContent'
export default {
  name: '',
  props: {},
  components: { SideMenu, MenuContent },
  data () {
    return {
      pageInfo: {
        isAll: false,
        page: {}
      }
    }
  },
  mounted () {},
  methods: {
    getPageInfo (pageInfo) {
      this.pageInfo = pageInfo
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
