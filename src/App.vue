<template>
  <div>
    <svg
      id="gc-starter-ui-plus-svg-default-id"
      style="display: none"
    />
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  updated () {
    const loading = document.getElementById('loader-wrapper')
    if (loading) {
      document.body.removeChild(loading)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
