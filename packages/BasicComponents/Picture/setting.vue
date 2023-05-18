<!--
 * @description: 标题属性设置面板
 * @Date: 2022-08-17 16:53:28
 * @Author: shiyi
-->
<template>
  <div class="bs-setting-wrap">
    <el-form
      ref="form"
      label-width="100px"
      label-position="left"
      :model="config"
      :rules="rules"
    >
      <el-collapse :value="['1', '2', '3']">
        <el-collapse-item name="2">
          <template slot="title">
            <div class="lc-field-head">
              <div class="lc-field-title">
                自定义属性
              </div>
            </div>
          </template>
          <div class="lc-field-body">
            <div class="">
              <el-form-item
                label="链接"
                label-width="100px"
              >
                <el-upload
                  :class="{hide: fileList.length >= 1 }"
                  :action="upLoadUrl"
                  :data="fileUploadParam"
                  :headers="headers"
                  :accept="accept"
                  :file-list="fileList"
                  :auto-upload="true"
                  :limit="1"
                  list-type="picture-card"
                  :on-success="handleUploadSuccess"
                  :before-upload="beforeUpload"
                >
                  <i
                    slot="default"
                    class="el-icon-plus"
                  />
                  <div
                    slot="file"
                    slot-scope="{ file }"
                  >
                    <img
                      class="el-upload-list__item-thumbnail"
                      :src="file.url"
                      alt=""
                    >
                    <span class="el-upload-list__item-actions">
                      <span
                        class="el-upload-list__item-delete"
                        @click="handleRemove(file)"
                      >
                        <i class="el-icon-delete" />
                      </span>
                    </span>
                  </div>
                  <el-input
                    slot="tip"
                    class="upload-tip"
                    :value="config.customize.url"
                    placeholder="或输入链接地址"
                    clearable
                    @change="handleUrlChange"
                  />
                </el-upload>
              </el-form-item>
              <el-form-item
                label="不透明度"
                label-width="100px"
              >
                <el-slider
                  v-model="config.customize.opacity"
                  class="bs-slider"
                  :min="0"
                  :max="100"
                  show-input
                />
              </el-form-item>
              <el-form-item
                label="圆角"
                label-width="100px"
              >
                <el-input-number
                  v-model="config.customize.radius"
                  class="bs-input-number"
                  placeholder="请输入圆角大小"
                  :min="0"
                />
              </el-form-item>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'PicSetting',
  components: {
  },
  data () {
    return {
      upLoadUrl: window.BS_CONFIG?.httpConfigs?.baseURL + '/sys/file/upload',
      fileUploadParam: {
        module: 'form'
      },
      headers: {
      },
      fileList: [],
      accept: 'image/*',
      hideUpload: false,
      rules: {}
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
  watch: {},
  mounted () {
    if (this.config.customize.url) {
      this.fileList = [
        {
          name: this.config.title,
          url: this.config.customize.url
        }
      ]
    } else {
      this.fileList = []
    }
  },
  methods: {
    handleUploadSuccess (res) {
      if (res.code === 200) {
        this.config.customize.url = res.data.url
      } else {
        this.$message.error(res.msg)
      }
    },
    handleRemove () {
      this.fileList = []
      this.config.customize.url = ''
    },
    beforeUpload (file) {
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!')
      }
      return isLt2M
    },
    handleUrlChange (val) {
      this.config.customize.url = val
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~packages/assets/style/settingWrap.scss";
.bs-slider{
 .el-input-number__decrease {
    background: $bs-component;
    border-right: 1px solid $bs-bg;
  }

  .el-input-number__increase {
    background: $bs-component;
    border-left: 1px solid $bs-bg;
  }
}
.bs-setting-wrap {
  padding-top: 16px;

  /deep/ .hide .el-upload--picture-card {
    display: none;
  }
  /deep/.el-upload-list__item {
    transition: none !important;
  }
  /deep/ .el-upload--picture-card {
    margin-bottom: 12px;
  }
}
</style>
