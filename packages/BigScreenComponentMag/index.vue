<template>
  <div class="bs-component-mag-wrap">
    <BigScreenMag type="componentCatalog" />
  </div>
</template>
<script>
import BigScreenMag from 'packages/BigScreenMag'
export default {
  name: 'BigScreenTempMag',
  props: {},
  components: {
    BigScreenMag
  },
  data () {
    return {

    }
  },
  mounted () {},
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .bs-component-mag-wrap{
    height: 100%;
  }
</style>
