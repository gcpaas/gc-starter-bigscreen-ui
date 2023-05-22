<template>
  <div class="page-top-setting-wrap">
    <div class="logo-wrap item-wrap">
      <img
        class="menu-img"
        src="~packages/BigScreenDesign/images/app.png"
        alt="返回"
        @click="backManagement"
      >
      <span class="logo-text name-span">{{ pageInfo.name }}</span>
    </div>
    <div class="head-btn-group">
      <div
        class="head-btn"
        @click="execRun()"
      >
        预览
        <!-- <i class="iconfont-bigscreen icon-yulan" /> -->
      </div>
      <div
        class="head-btn"
        @click="save('saveLoading')"
      >
        <!-- <i class="iconfont-bigscreen icon-baocun" /> -->
        保存
      </div>
      <div
        class="head-btn"
        @click="empty"
      >
        清空
        <!-- <i class="iconfont-bigscreen icon-qingkong" /> -->
      </div>
    </div>
    <ChooseTemplateDialog
      ref="ChooseTemplateDialog"
      :has-create="false"
      :page-info="pageInfo"
      @replaceItByTemplate="replaceItByTemplate"
    />
  </div>
</template>
<script>
import { toPng } from 'html-to-image'
import { mapMutations, mapActions, mapState } from 'vuex'
import { saveScreen } from 'packages/js/api/bigScreenApi'
import ChooseTemplateDialog from 'packages/BigScreenManagement/ChooseTemplateDialog.vue'
import _ from 'lodash'
import { stringifyObjectFunctions } from 'packages/js/utils/evalFunctions'
export default {
  name: 'PageTopSetting',
  components: {
    ChooseTemplateDialog
  },
  props: {
    code: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      appInfo: '',
      saveLoading: false,
      createdImgLoading: false,
      saveAndPreviewLoading: false
    }
  },
  computed: {
    ...mapState({
      pageInfo: state => state.bigScreen.pageInfo
    }),
    pageCode () {
      return this.$route.query.code || this.code
    }
  },
  methods: {
    ...mapActions({
      initLayout: 'bigScreen/initLayout'
    }),
    ...mapMutations({
      changeActiveCode: 'bigScreen/changeActiveCode',
      changeActiveItem: 'bigScreen/changeActiveItem',
      changePageInfo: 'bigScreen/changePageInfo'
    }),
    backManagement () {
      this.$router.push({ path: window.BS_CONFIG?.routers?.pageManagementUrl || '/pages' })
    },
    // 清空
    empty () {
      this.changeActiveCode('')
      this.$emit('empty')
    },
    // 预览
    async execRun () {
      this.save('saveAndPreviewLoading').then(res => {
        this.preview()
      })
    },
    // 预览
    preview () {
      const { href } = this.$router.resolve({
        path: window.BS_CONFIG?.routers?.previewUrl || '/big-screen/preview',
        query: {
          code: this.pageCode
        }
      })
      window.open(href, '_blank')
    },
    // 保存
    save (loadingType = 'saveLoading', hasPageTemplateId = false) {
      const pageInfo = _.cloneDeep(this.handleSaveData())
      // 保存页面
      this[loadingType] = true
      return new Promise((resolve, reject) => {
        if (!hasPageTemplateId) {
          delete pageInfo.pageTemplateId
        }
        const node = document.querySelector('.render-theme-wrap')
        toPng(node)
          .then((dataUrl) => {
            pageInfo.coverPicture = dataUrl
            saveScreen(pageInfo).then(res => {
              this.$message.success('保存成功')
              resolve(res)
            }).finally(() => {
              this[loadingType] = false
            })
          })
          .catch(() => {
            this[loadingType] = false
          })
      })
    },
    goBack (path) {
      this.$router.push({
        path: `/${path}`
      })
    },
    // 得到模板列表
    getTemplateList (type) {
      this.$nextTick(() => {
        this.$refs.ChooseTemplateDialog.init(undefined, type)
      })
    },
    // 选择模版后覆盖配置
    selectTemplate (template) {
      this.pageInfo.pageTemplateId = template.id
      this.save('saveLoading', true).then(() => {
        this.initLayout(this.pageCode)
      })
    },
    replaceItByTemplate (config) {
      this.changePageInfo(config)
    },
    // 处理保存数据
    handleSaveData () {
      const pageInfo = _.cloneDeep(this.pageInfo)
      const chartList = _.cloneDeep(this.pageInfo.chartList)

      pageInfo.pageConfig.cacheDataSets = pageInfo.pageConfig.cacheDataSets?.map(cache => ({
        name: cache.name,
        dataSetId: cache.dataSetId
      })) || []

      const newChartList = chartList?.map(chart => {
        // 如果是自定义组件，需要将option转换为json字符串，因为其中可能有函数
        if (chart.type === 'customComponent') {
          chart.option.data = []
          chart.option = stringifyObjectFunctions(chart.option)
        }
        return chart
      })
      return _.cloneDeep({
        ...this.pageInfo,
        chartList: newChartList
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~packages/BigScreenDesign/fonts/iconfont.css';
.default-layout-box {
  display: flex;
  flex-wrap: wrap;

  .default-layout-item {
    cursor: pointer;
    width: 42%;
    margin: 9px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .component-name {
      font-size: 12px;
    }

    .sampleImg {
      margin: 0 auto;
      width: 102px;
      height: 73px;
      display: block;
    }

    .img_dispaly {
      margin: 0 auto;
      text-align: center;
      width: 100px;
      height: 70px;
      line-height: 70px;
      background-color: #D7D7D7;
      color: #999;
    }

    .demonstration {
      text-align: center;
    }
  }

  .default-layout-item:hover {
    cursor: pointer;
  }

  /deep/.el-radio__label {
    display: none;
  }
}

.page-top-setting-wrap {
  height: 40px;
  background-color: var(--bs-background-2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  color: #ffffff;
  padding: 0 5px;

  .app-name {
    cursor: pointer;
  }

  .head-btn-group {
    display: flex;
    margin-left: 50px;

    .head-btn {
      display: flex;
      background-color: #303640;
      cursor: pointer;
      width: 60px;
      justify-content: center;
      align-items: center;
      margin-right: 4px;
      padding: 4px 0;
      font-size: 12px;

      &:hover {
        background-color: #414750;
      }
    }
  }

  .item-wrap {
    display: flex;
    align-items: center;

    .menu-img {
      width: 18px;
      height: 18px;
      margin-left: 9px;
      margin-right: 15px;
      cursor: pointer;
    }

    .logo-text {
      user-select: none;
      margin-left: 9px;
      font-size: 14px;
      color: #ffffff;
    }

    .name-span {
      max-width: 100px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>
