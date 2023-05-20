<template>
  <div>
    <side-menu @getPageList="getPageList"/>
    <menu-content :page-list="pageList" />
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
      pageList: []
    }
  },
  mounted () {},
  methods: {
    getPageList (list) {
      this.pageList = list
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
