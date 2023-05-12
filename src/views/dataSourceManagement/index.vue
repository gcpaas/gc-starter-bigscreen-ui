<template>
  <div class="application-setting-wrap">
    <div class="left-tab-box">
      <ul>
        <li
          v-for="tab in tabList"
          :key="tab.path"
          :class="{'tab-active': tab.active,'tab-style':true}"
          @click="openTab(tab)"
        >
          <icon-svg
            :name="tab.img"
            class="tabIconStyle"
          />
          <span>{{ tab.name }}</span>
        </li>
      </ul>
    </div>

    <el-scrollbar class="scroll-box">
      <div class="inner-router-view-wrap">
        <router-view v-if="isRresh" />
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import Icon from '@/assets/images/appPrependIcon/export'
import Vue from 'vue'
import SvgIcon from '@/components/icons/export'
Vue.use(SvgIcon)
export default {
  name: 'DataSourceManagement',
  data () {
    return {
      // appIcon: Icon.getNameList(),
      isRresh: true,
      activeTabName: '',
      currentPermission: 1,
      tabList: [
        {
          active: false,
          name: '数据源管理',
          path: '/dataSourceSet',
          // permissionRequire: 0
          img: Icon.getNameList()[0]
        },
        {
          active: false,
          name: '数据集管理',
          path: '/dataSetConfig',
          // permissionRequire: 9
          img: Icon.getNameList()[1]
        }
      ]
    }
  },
  provide () {
    return {
      refresh: this.refresh
    }
  },
  watch: {
    // $route: {
    //   deep: true,
    //   handler: function (route) {
    //     this.setActiveTab(route)
    //   }
    // }
  },
  mounted () {
    this.getPermission()
    this.openTab(this.tabList[0])
  },
  methods: {
    refresh () {
      this.isRresh = false
      this.$nextTick(() => {
        this.isRresh = true
      })
    },
    openTab (tab) {
      // let form = {}
      // form.appCode = this.$route?.query?.appCode
      // form.appPath = path
      // appService.checkAppUrl(form).then((checkFlag) => {
      // if (checkFlag) {
      this.$router.push({
        path: tab.path
        // query: {
        //   appCode: this.$route?.query?.appCode ||''
        // }
      })
      this.tabList.forEach((item) => {
        if (item.path !== tab.path) {
          item.active = false
        } else {
          item.active = true
        }
      })
      // } else {
      // this.$router.push({
      //   path: '/404'
      // })
      // }
      // })
    },
    setActiveTab (route) {
      // const accessibleTab = this.tabList.filter((tab) => tab.permissionRequire <= this.currentPermission)
      // 如果当前路由不在可访问的tab中，则重定向到第一个tab
      // if (!accessibleTab.some((tab) => tab.path === route.path)) {
      this.$router.push({
        path: route.path
        // query: {
        //   appCode: this.$route?.query?.appCode ||''
        // }
      })
      // return
      // }
      this.tabList.forEach((tab) => {
        if (tab.path === route.path) {
          tab.active = true
        } else {
          tab.active = false
        }
      })
    },
    getPermission () {
    }
  }
}
</script>
<style lang="scss" scoped>
.application-setting-wrap {
  display: flex;
  height: calc(100vh - 52px);
  overflow-y: hidden;
  background: #f5f7fa;

  .left-tab-box {
    background: #fff;
    width: 290px;

    ul {
      padding-left: 0;
      li {
        display: flex;
        align-items: center;
        height: 40px;
        line-height: 40px;
        cursor: pointer;
        padding-left: 20px;
        margin: 5px 0;
        img {
          width: 20px;
          vertical-align: middle;
          margin-right: 10px;
        }
        &:hover {
          background-color: #007aff10;
        }
      }
    }

    .tab-active {
      background-color: #007aff10;

      &:before {
        content: "";
        height: 40px;
        line-height: 40px;
        position: absolute;
        left: 0;
        border-left: 4px solid #007aff;
      }
    }

    /deep/ .el-tabs__item {
      text-align: left;
      width: 290px;
    }

    /deep/ .el-tabs__nav-wrap::after {
      background-color: #fff !important;
    }
  }
  .scroll-box {
    width: calc(100% - 300px);
    overflow-y: auto;
    overflow-x: hidden;
    margin: 16px;
    background: #fff;
  }

  .inner-router-view-wrap {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  /deep/.el-scrollbar__view{
    height: 100%;
    .inner-router-view-wrap{
      height: 100%;
      .table-box{
        height: calc(100vh - 275px);
        .el-table{
          height: 100%;
        }
      }
    }
  }
  .tabIconStyle{
    width: 18px;
    height: 18px;
    margin-right: 20px;
  }
}

</style>
