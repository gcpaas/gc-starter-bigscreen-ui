<template>
  <div class="page-top-setting-wrap">
    <div class="logo-wrap item-wrap">
      <img
        class="menu-img"
        src="~packages/assets/images/icons/app.png"
        alt="返回"
        @click="backManagement"
      >
      <span class="logo-text name-span">{{ pageInfo.name }}</span>
    </div>

    <div class="action-bar action-bar-top">
      <div class="choose-layout-item item-wrap" />
      <!-- <el-button
        class="top-button"
        type="primary"
        @click.native="getTemplateList('bigScreen')"
      >
        模板
      </el-button> -->
      <el-button
        class="top-button"
        :loading="saveAndPreviewLoading"
        type="primary"
        @click="execRun()"
      >
        保存并预览
      </el-button>
      <el-button
        class="top-button"
        type="primary"
        @click="empty"
      >
        清空
      </el-button>
      <el-button
        class="top-button"
        :loading="saveLoading"
        type="primary"
        @click="save('saveLoading')"
      >
        保存
      </el-button>
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
import { mapMutations, mapActions, mapState } from 'vuex'
import { saveScreen } from 'packages/api/bigScreenApi'
import ChooseTemplateDialog from 'packages/BigScreenManagement/ChooseTemplateDialog.vue'
import _ from 'lodash'
import { stringifyObjectFunctions } from 'packages/utils/evalFunctions'
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
      'changeActiveCode': 'bigScreen/changeActiveCode',
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
      let pageInfo = _.cloneDeep(this.handleSaveData())
      // 保存页面
      this[loadingType] = true
      return new Promise((resolve, reject) => {
        if (!hasPageTemplateId) {
          delete pageInfo.pageTemplateId
        }
        saveScreen(pageInfo).then(res => {
          this.$message.success('保存成功')
          resolve(res)
        }).finally(() => {
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
      let pageInfo = _.cloneDeep(this.pageInfo)
      let chartList = _.cloneDeep(this.pageInfo.chartList)

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
  height: 52px;
  background-color: #007AFF;
  /*border-bottom: 1px solid #dfe1e5;*/
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  color: #ffffff;
  padding: 0 16px;

  .app-name {
    cursor: pointer;
  }

  .item-wrap {
    flex: 1;
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

  .img-btn {
    flex: 1;
    display: flex;
    height: 100%;

    .svg-box {
      width: 50px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1) !important;
        cursor: pointer;
      }
    }

    .active-avg-box {
      background-color: rgba(255, 255, 255, 0.1) !important;
    }

    .img-btn-svg {
      width: 30px;
      height: 30px;
      color: #ffffff;
    }

    &:hover {
      cursor: pointer;
    }
  }

  .choose-layout-item {
    margin-right: 7px;
    cursor: pointer;

  }

  .action-bar {
    display: flex;
    align-items: center;
    position: absolute;
    right: 20px;

    .delete-btn {
      color: #ea0b30;
    }
  }

  .equipment-menu {
    margin: 0 auto;

    img {
      display: inline-block;
      margin: 0 15px;
    }
  }
  .action-bar-top {
    /deep/.el-button--primary:hover {
      background-color: rgba(255, 255, 255, 0.1) !important;
    }
  }
  /deep/.el-button--primary {
    background-color: #007AFF!important;
    border: 1px solid #007AFF!important;
  }
}
</style>
