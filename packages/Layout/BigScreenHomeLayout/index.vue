<template>
  <div class="big-screen-home-wrap">
    <header class="big-screen-home-wrap-top">
      <div class="logo-title">
        <img
          class="logo"
          :src="logo"
        >
        <span>{{ title || 'GCPAAS大屏设计器' }}</span>
      </div>

      <div class="big-screen-nav-container">
        <Nav
          :navs="tabList"
          @change="changeTab"
        />
      </div>
    </header>
    <div class="big-screen-router-view-wrap">
      <router-view />
    </div>
  </div>
</template>
<script>
import Nav from './Nav'
export default {
  name: 'BigScreenHome',
  components: {
    Nav
  },
  props: [],
  data () {
    return {
      // 和此处路由保持一致，将会激活tab，请按需更改
      tabList: [
        {
          id: 0,
          name: '大屏管理',
          path: '/big-screen-list',
          icon: 'el-icon-s-home'
        },
        {
          id: 1,
          name: '模版管理',
          path: '/big-screen-template',
          icon: 'el-icon-s-home'
        }
      ]
    }
  },
  computed: {
    title () {
      return window?.BS_CONFIG?.starter?.title
    },
    logo () {
      return window?.BS_CONFIG?.starter?.logo || require('./images/logo.png')
    }
  },
  created () {
  },
  methods: {
    changeTab (tab) {
      this.$router.push({
        path: tab.path
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.big-screen-home-wrap {
  position: relative;
  overflow: hidden;
  height: 100vh;

  .big-screen-home-wrap-top {
    position: absolute;
    top: 0;
    width: 100%;
    height: 200px;
    background-image: url('~packages/Layout/BigScreenHomeLayout/images/nav-img.png');

    .logo-title {
      font-size: 30px;
      position: absolute;
      z-index: 23;
      top: 40px;
      left: 40px;
      display: flex;
      align-items: center;
      color: #007aff;

      -webkit-box-reflect: below -3px linear-gradient(transparent,rgba(0,0,0,.4));

      .logo {
        height: 30px;
      }

      span {
        font-family: Source Han Sans CN;
        font-size: 30px;
        font-weight: 700;
        padding-left: 8px;
        -webkit-animation: text-animate 8s ease infinite;
                animation: text-animate 8s ease infinite;
        color: transparent;
        background: linear-gradient(315deg,#c805bb 3%,#f9fafa 38%,#30eee2 68%,#ff1919 98%);
        -webkit-background-clip: text;
        background-size: 400% 400%;
      }
    }
  }

  .big-screen-router-view-wrap {
    position: absolute;
    top: 200px;
    overflow: auto;
    width: 100%;
    height: calc(100vh - 200px);
    background-color: #171b22;
  }
}

@keyframes text-animate {
  0% {
    background-position: 0 0;
    -webkit-background-clip: text;
  }

  50% {
    background-position: 0 0;
    -webkit-background-clip: text;
  }

  100% {
    background-position: 0 0;
    -webkit-background-clip: text;
  }
}
</style>
