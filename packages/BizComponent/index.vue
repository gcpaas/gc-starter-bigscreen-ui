<template>
  <div class="bs-custom-components">
    <div class="bs-custom-component-header">
      <div class="left-title">
        <div class="logo-wrap item-wrap">
          <img
            class="menu-img"
            src="~packages/BigScreenDesign/images/app.png"
            alt="返回"
            @click="backManagement"
          >
          <span class="logo-text name-span">{{ form.name }}</span>
        </div>
      </div>
      <div class="right-btn-wrap">
        <CusBtn>
          生成图片
        </CusBtn>
        <CusBtn
          :loading="loading"
          @click="save"
        >
          保存
        </CusBtn>
      </div>
    </div>
    <div class="bs-custom-component-content">
      <div class="bs-custom-component-content-code">
        <div class="left-vue-code component-code">
          <div class="code-tab-header">
            <div class="code-tab">
              VUE组件
            </div>
            <div class="upload-btn">
              <el-button
                class="bs-el-button-default"
                @click="upload('vueContent')"
              >
                上传
              </el-button>
            </div>
          </div>
          <div class="code-tab-content">
            <MonacoEditor
              ref="vueContent"
              v-model="form.vueContent"
              class="editor"
              language="html"
            />
          </div>
        </div>
        <div class="right-setting-code component-code">
          <div class="code-tab-header">
            <div class="code-tab">
              组件配置
            </div>
            <div class="upload-btn">
              <el-button
                class="bs-el-button-default"
                @click="upload('settingContent')"
              >
                上传
              </el-button>
            </div>
          </div>
          <div class="code-tab-content">
            <MonacoEditor
              ref="settingContent"
              v-model="form.settingContent"
              class="editor"
              language="javascript"
            />
          </div>
        </div>
      </div>
      <div class="bs-custom-component-content-preview">
        <div class="bs-preview-inner">
          <BizComponentPreview
            :vue-content="form.vueContent"
            :setting-content="form.settingContent"
          />
        </div>
      </div>
      <input
        ref="fileId"
        style="display: none"
        type="file"
        name="file"
        @change="handleBatchUpload"
      >
    </div>
  </div>
</template>
<script>
import CusBtn from 'packages/BigScreenDesign/BtnLoading'
import MonacoEditor from 'packages/MonacoEditor'
import BizComponentPreview from './Preview'
import { getBizComponentInfo, updateBizComponent } from 'packages/js/api/bigScreenApi'
export default {
  name: 'BizComponentDesign',
  components: {
    CusBtn,
    MonacoEditor,
    BizComponentPreview
  },
  props: {},
  data () {
    return {
      form: {
        name: '',
        coverPicture: '',
        settingContent: '',
        vueContent: ''
      },
      currentContentType: 'vueContent',
      loading: false
    }
  },
  computed: {
  },
  mounted () {
    this.getBizComponentInfo()
  },
  methods: {
    getBizComponentInfo () {
      const code = this.$route.query.code
      if (code) {
        getBizComponentInfo(code).then(data => {
          this.form = data
          this.$refs.vueContent.editor.setValue(data.vueContent)
          this.$refs.settingContent.editor.setValue(data.settingContent)
        })
      }
    },
    upload (type) {
      this.currentContentType = type
      this.$refs.fileId.click()
    },
    handleBatchUpload (source) {
      const file = source.target.files
      const reader = new FileReader() // 新建一个FileReader
      reader.readAsText(file[0], 'UTF-8') // 读取文件

      reader.onload = (event) => {
        const sileString = event.target.result // 读取文件内容
        this.$refs[this.currentContentType].editor.setValue(sileString)
        this.form[this.currentContentType] = sileString
      }
    },
    backManagement () {
      this.$router.push({
        path: window.BS_CONFIG?.routers?.componentUrl || '/big-screen-components'
      })
    },
    save () {
      this.loading = true
      updateBizComponent(this.form).then(() => {
        this.$message.success('保存成功')
      }).catch(() => {
        this.$message.error('保存失败')
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.bs-custom-components {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  color: var(--bs-el-text);
  background: var(--bs-background-2);

  > * {
    box-sizing: border-box;
  }

  .bs-custom-component-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    padding: 0 16px;
    border-bottom: 4px solid var(--bs-background-1);
    background: var(--bs-background-2);

    .left-title {
      font-size: 16px;
      color: var(--bs-el-title);

      .logo-wrap {
        display: flex;
        align-items: center;
      }

      .menu-img {
        width: 18px;
        height: 18px;
        margin-right: 15px;
        margin-left: 9px;
        cursor: pointer;
      }
    }

    .right-btn-wrap {
      display: flex;
      align-items: center;
      height: 100%;

      /deep/ .head-btn {
        font-size: 14px;
      }
    }
  }

  .bs-custom-component-content {
    flex: 1;
    background: var(--bs-background-2);

    .bs-custom-component-content-code {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 50%;
      padding: 16px;

      .left-vue-code {
        width: 60%;
        height: 100%;
        /* background: var(--bs-background-1); */
      }

      .right-setting-code {
        width: calc(40% - 16px);
        height: 100%;
        /* background: var(--bs-background-1); */
      }

      .component-code {
        .code-tab-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 40px;

          .code-tab {
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 120px;
            height: 100%;
            color: var(--bs-el-title);
            background: var(--bs-background-1);
          }
        }

        .code-tab-content {
          height: calc(100% - 40px);
          background: var(--bs-background-1);
        }
      }
    }

    .bs-custom-component-content-preview {
      width: 100%;
      height: 50%;
      padding: 0 16px 16px;

      .bs-preview-inner {
        width: 100%;
        height: 100%;
        background: var(--bs-background-1);
      }
    }
  }
}
</style>
<style>
  .monaco-editor-background,
  .monaco-editor .margin {
    background: var(--bs-background-1) !important;
  }
</style>
