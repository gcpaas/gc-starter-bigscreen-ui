<template>
  <div class="basic-component-input">
    <span
      v-if="config.customize.showTitle"
      class="title-left"
      :style="{ marginRight: config.customize.titleStyle.marginRight + 'px', fontSize: config.customize.titleStyle.fontSize + 'px', color: config.customize.titleStyle.color }"
    >
      {{ config.customize.title }}
    </span>
    <el-input
      :id="`el-input-${config.code}`"
      v-model="config.customize.value"
      type="text"
      resize="both"
      class="input"
      :placeholder="config.customize.placeholderStyle.placeholder"
      :style="{ backgroundColor: config.customize.backgroundStyle.backgroundColor }"
    />
  </div>
</template>

<script>
import commonMixins from 'packages/js/mixins/commonMixins'
import linkageMixins from 'packages/js/mixins/linkageMixins'
export default {
  name: 'BasicComponentInput',
  mixins: [commonMixins, linkageMixins],
  props: {
    // 卡片的属性
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return { }
  },
  mounted () {
    this.updateComponent()
  },
  methods: {
    updateComponent () {
      // console.log(document.querySelector(`#el-input-${this.config.code}`))
      // console.log(this.config.customize)
      const input = document.querySelector(`#el-input-${this.config.code}`)
      input.style.backgroundColor = this.config.customize.backgroundStyle.backgroundColor
      input.style.setProperty('color', this.config.customize.placeholderStyle.placeholderColor, 'placeholder')
      input.style.fontSize = this.config.customize.inputStyle.fontSize + 'px'
      input.style.paddingLeft = this.config.customize.inputStyle.paddingLeft + 'px'
      input.style.color = this.config.customize.inputStyle.color
      input.style.borderColor = this.config.customize.borderStyle.borderColor
      input.style.borderWidth = this.config.customize.borderStyle.borderWidth + 'px'
      input.style.borderStyle = this.config.customize.borderStyle.borderStyle
      input.style.borderRadius = this.config.customize.borderStyle.borderRadius + 'px'
    }
  }
}
</script>

<style lang="scss" scoped>
.basic-component-input {
  width: 100%;
  display: flex;
  .title-left {
    display: block;
    white-space: nowrap;
    align-self: center;
  }
  // .title-top{
  //   display: block;
  //   text-align: center;
  //   white-space: nowrap;
  // }

  .el-input {
    height: 100%;
    width: 100%;

    ::v-deep .el-input__inner {
      height: 100%;
      width: 100%;
    }
  }

}
</style>
