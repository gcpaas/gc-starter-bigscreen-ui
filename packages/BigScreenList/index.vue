<template>
  <div class="big-screen-list-wrap">
    <div class="top-search-wrap">
      <el-input
        v-model="searchKey"
        placeholder="请输入关键字"
        prefix-icon="el-icon-search"
        clearable
        @clear="reSearch"
        @keyup.enter.native="reSearch"
      />
      <el-button
        type="primary"
        @click="reSearch"
      >
        搜索
      </el-button>
    </div>

    <div
      v-loading="loading"
      class="list-wrap"
      element-loading-text="加载中"
    >
      <!-- 第一个是新增大屏卡片 -->
      <div class="big-screen-card-wrap">
        <div class="big-screen-card-inner big-screen-card-inner-add">
          <div class="add-big-screen-card">
            <div class="add-big-screen-card-inner">
              <div class="add-big-screen-card-text">
                新建大屏
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 后面遍历 list -->
      <div
        v-for="(screen) in list"
        :key="screen.id"
        class="big-screen-card-wrap"
      >
        <div class="big-screen-card-inner">
          <div class="screen-card__hover">
            <div class="preview">
              <div
                class="screen-card__oper-label circle"
                @click="preview(screen)"
              >
                <span>预览</span>
              </div>
              <div
                class="circle"
                @click="design(screen)"
              >
                <span>设计</span>
              </div>
              <div
                class="circle"
                @click="edit(screen)"
              >
                <span>编辑</span>
              </div>
              <div
                class="circle"
                @click="del(screen)"
              >
                <span>删除</span>
              </div>
            </div>
          </div>
          <div class="big-screen-card-img">
            <img :src="screen.imgUrl || defaultImg">
          </div>
          <div class="big-screen-bottom">
            <div
              class="left-bigscreen-title"
              :title="screen.name"
            >
              {{ screen.name }}
            </div>
            <div class="right-bigscreen-time-title">
              {{ screen.createTime || '2023-01-01 08:11:34' }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-pagination-wrap">
      <div class="footer-pagination-wrap-text">
        总共 {{ totalCount }} 个项目
      </div>
      <el-pagination
        background
        layout="sizes, prev, pager, next"
        :page-size="size"
        :total="totalCount"
        :page-sizes="[10, 20, 50, 100]"
        :current-page="current"
        @current-change="currentChangeHandle"
        @size-change="sizeChangeHandle"
      />
    </div>
  </div>
</template>
<script>
import { get } from 'packages/js/utils/http'
import { pageMixins } from 'packages/js/mixins/page'
export default {
  name: 'BigScreenList',
  mixins: [pageMixins],
  props: {
    type: {
      type: String,
      default: 'screen' // screen | template
    },
    catalogInfo: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      searchKey: '',
      list: [],
      defaultImg: require('./images/defaultImg.png'),
      loading: false
    }
  },
  computed: {
    code () {
      return this.catalogInfo?.page?.code
    }
  },
  watch: {
    code (value) {
      this.getDataList()
    }
  },
  mounted () {
    this.getDataList()
  },
  methods: {
    getDataList () {
      this.loading = true
      get('/bigScreen/design/page', {
        parentCode: this.code || null,
        current: this.current,
        size: this.size,
        searchKey: this.searchKey
      }).then(data => {
        this.list = data.list
        this.totalCount = data.totalCount
      }).finally(() => {
        this.loading = false
      })
    },
    preview (screen) {
      const { href } = this.$router.resolve({
        path: window.BS_CONFIG?.routers?.previewUrl || '/big-screen/preview', // 这里写的是要跳转的路由地址
        query: {
          code: screen.code
        }
      })
      window.open(href, '_blank')
    },
    design (screen) {
      const path = window.BS_CONFIG?.routers?.designUrl || '/big-screen/design'
      const { href } = this.$router.resolve({
        path,
        query: {
          code: screen.code
        }
      })
      window.open(href, '_self')
    },
    edit (screen) {
      // TODO
    },
    del (screen) {
      // TODO
    }
  }
}
</script>

<style lang="scss" scoped>
.big-screen-list-wrap {
  position: relative;
  height: 100%;
  padding: 20px;
  color: #9ea9b2;

  .top-search-wrap {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 20px;

    .el-input {
      width: 200px;
      margin-right: 20px;
    }
  }

  .list-wrap {
    display: grid;
    overflow: auto;
    // 间隙自适应
    justify-content: space-around;
    height: calc(100vh - 320px);
    // 每份 290px

    grid-template-columns: repeat(auto-fill, 290px);

    .big-screen-card-wrap {
      position: relative;
      width: 290px;
      height: 220px;
      margin-right: 20px;
      margin-bottom: 20px;
      cursor: pointer;
      border: 1px solid #204d5f;

      &:hover {
        .screen-card__hover {
          height: 220px;
        }
      }

      .screen-card__hover {
        position: absolute;
        z-index: 999;
        top: 0;
        right: 0;
        left: 0;
        display: flex;
        overflow: hidden;
        align-items: center;
        justify-content: center;
        height: 0;
        transition: height .4s;
        background: #00000080;

        .preview {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          width: 100%;
          cursor: pointer;
          color: #007aff;

          .circle {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            border: 4px solid #007aff;
            border-radius: 50%;
            background: #fff;

            &:hover {
              color: #fff;
              background: #007aff;
            }

            span {
              font-size: 14px;
            }
          }
        }
      }

      .big-screen-card-inner {
        overflow: hidden;
        width: 100%;
        height: 100%;
        cursor: pointer;
        // 渐变色
        background: linear-gradient(180deg, #204d5f 0%, #1a3e4b 100%);
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, .1);

        .add-big-screen-card-text {
          font-size: 14px;
          font-size: 30px;
          color: var(--bs-el-text);
        }

        .big-screen-card-img {
          width: 100%;
          height: 190px;

          img {
            width: 100%;
            height: 100%;

            object-fit: cover;
          }
        }

        .big-screen-bottom {
          display: flex;
          align-items: center;
          flex-direction: row;
          justify-content: space-between;
          box-sizing: border-box;
          width: 100%;
          height: 26px;
          padding: 0 10px;
          color: var(--bs-el-text);

          .left-bigscreen-title {
            font-size: 14px;
            overflow: hidden;
            width: 120px;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          .right-bigscreen-time-title {
            font-size: 12px;
          }
        }

        .big-screen-card-text {
          font-size: 14px;
          padding: 10px;
          text-align: center;
          color: #333;
        }
      }

      .big-screen-card-inner-add {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .footer-pagination-wrap {
    position: absolute;
    bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-top: 20px;
    padding: 0 20px;
  }
}
</style>
