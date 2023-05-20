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
        @click="search"
      >
        搜索
      </el-button>
    </div>

    <div class="list-wrap">
      <!-- 第一个是新增大屏卡片 -->
      <div class="big-screen-card-wrap">
        <div class="big-screen-card-inner">
          <div class="add-big-screen-card">
            <div class="add-big-screen-card-inner">
              <div class="add-big-screen-card-icon">
                <i class="el-icon-plus" />
              </div>
              <div class="add-big-screen-card-text">
                新增大屏
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 后面遍历 list, 产生卡片，上面是图片，下面文字，左边编辑，右边删除-->
      <div
        v-for="(screen) in list"
        :key="screen.id"
        class="big-screen-card-wrap"
      >
        <div class="big-screen-card-inner">
          <div class="big-screen-card-img">
            <img :src="screen.imgUrl" />
          </div>
          <div class="big-screen-card-text">
            {{ screen.name }}
          </div>
          <div class="big-screen-card-btns">
            <el-button
              type="text"
              icon="el-icon-edit"
            />
            <el-button
              type="text"
              icon="el-icon-delete"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="footer-pagination-wrap">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="page"
        @current-change="handleCurrentChange"
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
      total: 0,
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
  },
  methods: {
    handleCurrentChange (val) {
      this.currentPage = val
    },
    getDataList () {
      get('/bigScreen/design/page', {
        parentCode: this.catalogInfo?.page.code || null,
        current: this.current,
        size: this.size,
        searchKey: this.searchKey
      }).then(data => {
        console.log(data)
        this.list = data.list
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.big-screen-list-wrap {
  color: #9ea9b2;
  padding: 20px;
  height: 100%;
  .top-search-wrap {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 20px;
    .el-input {
      width: 200px;
      margin-right: 20px;
    }
  }
  .list-wrap {
    display: flex;
    flex-wrap: wrap;

    .big-screen-card-wrap {
      width: 200px;
      height: 200px;
      margin-right: 20px;
      margin-bottom: 20px;

      .big-screen-card-inner {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
        overflow: hidden;
        .big-screen-card-img {
          width: 100%;
          height: 100px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .big-screen-card-text {
          padding: 10px;
          font-size: 14px;
          color: #333;
          text-align: center;
        }
        .big-screen-card-btns {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          .el-button {
            padding: 0;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            font-size: 12px;
            color: #333;
            &:hover {
              background-color: transparent;
            }
          }
        }
      }
    }
  }
  .footer-pagination-wrap {
    position: absolute;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 20px;
    bottom: 10px;
  }
}
</style>
