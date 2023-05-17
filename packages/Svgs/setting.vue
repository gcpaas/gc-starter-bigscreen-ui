
<template>
  <div class="bs-setting-wrap">
    <el-form
      ref="form"
      label-width="100px"
      label-position="left"
      :model="config"
      :rules="rules"
    >
      待开发
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'SvgsSetting',
  components: {
  },
  data () {
    return {
      rules: {
      }
    }
  },
  computed: {
    config: {
      get () {
        return this.$store.state.bigScreen.activeItemConfig
      },
      set (val) {
        this.$store.state.bigScreen.activeItemConfig = val
      }
    }
  },
  watch: {
  },
  mounted () {},
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  @import "~packages/assets/style/settingWrap.scss";
  .bs-setting-wrap{
    padding-top: 16px;
  }
</style>
