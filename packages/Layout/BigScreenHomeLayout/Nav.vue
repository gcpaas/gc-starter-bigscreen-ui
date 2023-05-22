<template>
  <div class="nav-main">
    <canvas
      id="nav-canvas"
      style="position: absolute; z-index: -1; left: 0;"
    />
    <span
      v-for="nav in navs"
      :key="nav.id"
      class="nav-span"
    >
      <a
        class="nav-link"
        :class="{ 'nav-active': activeNav === nav.id }"
        @click="toggleNav(nav)"
      >
        <span class="nav-icon">
          <i
            :class="[ 'iconfont-bigscreen', nav.icon]"
          />
        </span>
        {{ nav.name }}
      </a>
    </span>
  </div>
</template>

<script lang='ts'>
import { NavCanvas } from './utils/nav-canvas'

export default {
  name: 'NavMain',
  components: {},
  data () {
    return {
      nc: null,
      activeNav: 0
    }
  },
  props: {
    navs: {
      type: Array,
      required: true
    }
  },
  mounted () {
    const nav = this.navs.find(m => m.path === this.$route.path)
    this.activeNav = nav ? nav.id : 0
    this.nc = new NavCanvas('nav-canvas', '.nav-main .nav-span', this.activeNav)
    window.addEventListener('resize', this.debNavResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.debNavResize)
  },
  methods: {
    toggleNav (nav) {
      if (this.nc) {
        this.activeNav = nav.id
        this.nc.toggle(nav.id)
        this.$emit('change', nav)
      }
    },
    debNavResize () {
      if (this.nc) {
        this.nc.resize()
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.nav-main {
  z-index: 10;
  display: flex;
  top: 30px;
  position: sticky;
  width: 100%;
  margin-top: 107px;
  min-width: 1024px;
  user-select: none;

  .nav-span {
    .nav-link {
      display: flex;
      align-items: center;
      transition: color 0.2s;
      text-decoration: none !important;
      color: var(--bs-el-title);
      width: auto;
      min-width: 140px;
      line-height: 40px;
      font-size: 14px;
      text-align: left;
      cursor: pointer;
      padding: 0 40px;

      &.nav-active,
      &:hover {
        color: var(--bs-el-text) !important;
      }
    }

    .nav-icon {
      margin-right: 5px;
    }
  }
}
</style>
