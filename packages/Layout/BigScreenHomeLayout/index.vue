<template>
  <div class="big-screen-home-wrap">
    <header class="big-screen-home-wrap-top">
      <div class="logo-title">
        <span>{{ title || 'GCPAA大屏设计器' }}</span>
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
  height: 100vh;
  overflow: hidden;
  position: relative;

  .big-screen-home-wrap-top {
    height: 200px;
    background-image: url('~packages/Layout/BigScreenHomeLayout/images/nav-img.png');
    position: absolute;
    top: 0;
    width: 100%;

    .logo-title {
      color: #007aff;
      position: absolute;
      z-index: 23;
      left: 40px;
      top: 40px;
      font-size: 30px;
      -webkit-box-reflect: below -3px linear-gradient(transparent,rgba(0,0,0,.4));

      span {
        font-family: Source Han Sans CN;
        padding-left: 8px;
        font-size: 30px;
        font-weight: 700;
        background: linear-gradient(315deg,#c805bb 3%,#f9fafa 38%,#30eee2 68%,#ff1919 98%);
        -webkit-animation: text-animate 8s ease infinite;
        animation: text-animate 8s ease infinite;
        -webkit-background-clip: text;
        background-size: 400% 400%;
        color: transparent;
      }
    }

    .big-screen-nav-container {

    }
  }

  .big-screen-router-view-wrap {
    position: absolute;
    top: 200px;
    width: 100%;
    height: calc(100vh - 200px);
    overflow: auto;
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
