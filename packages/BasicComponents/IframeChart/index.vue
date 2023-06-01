<template>
  <div class="bs-design-wrap">
    <div class="iframe-wrap">
      <iframe
        class="iframe"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        oallowfullscreen="true"
        msallowfullscreen="true"
        scrolling="no"
        :style="{
          width: '200%',
          height: '200%',
          transform: 'scale(.5, .5) translate(-50%, -50%)',
          border: 'none'
        }"
        frameborder="0"
        :src="config.url"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IframeChart',
  props: {
    config: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  mounted () {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.bs-design-wrap {
  position: relative;
  overflow: hidden;
  background: #fff;
  width: 100%;
  height: 100%;
  pointer-events: none;
  .iframe-wrap {
    height: 100%;
  }
}
</style>
