<template>
  <div
    class="head-btn"
    @click="$emit('click')"
  >
    <slot />

    <i
      v-if="loading"
      class="el-icon el-icon-loading"
      style="padding-left: 4px;"
    />
  </div>
</template>
<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    click (e) {
      e.preventDefault()
      if (!this.loading) {
        this.$emit('click')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.head-btn {
  display: flex;
  background-color: #303640;
  cursor: pointer;
  width: auto;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
  padding: 4px 10px;
  font-size: 12px;

  &:hover {
    background-color: #414750;
  }
}
</style>
