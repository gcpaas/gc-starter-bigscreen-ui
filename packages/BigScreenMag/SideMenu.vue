<template>
  <div class="side-catalog-wrap">
    <div class="side-catalog-box">
      <div
        class="side-catalog-all side-catalog-item"
        :class="{'active-catalog':isAll}"
        @click="clickAllCatalog()"
      >
        全部
      </div>
      <div
        v-for="(catalog,index) in catalogList"
        :key="index"
        class="side-catalog-item"
        :class="{'active-catalog':currentCatalog.code === catalog.code && !isAll}"
        @click="clickCatalog(catalog)"
      >
        <span class="catalog-name">{{ catalog.name }}</span>
        <el-dropdown
          class="page-list-dropdown"
          placement="bottom-start"
          node-key="id"
          trigger="click"
        >
          <span class="el-dropdown-link menu-dropdown-link">
            <i class="el-icon-more" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="catalogEdit(catalog)">
              编辑
            </el-dropdown-item>
            <el-dropdown-item
              class="delete-item"
              @click.native="catalogDel(catalog)"
            >
              删除
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div
      class="add-catalog-box"
      @click="catalogAdd"
    >
      <i class="el-icon-plus" />
      <div>新建分组</div>
    </div>
    <!-- 新增或编辑目录弹窗 -->
    <el-dialog
      :title="currentCatalog.id ? '编辑目录':'新增目录'"
      :visible.sync="catalogVisible"
      width="30%"
      class="bs-dialog-wrap catalog-dialog"
      @close="handleClose"
    >
      <el-form
        ref="form"
        :model="currentCatalog"
        label-width="80px"
        :rules="formRules"
      >
        <el-form-item
          label="目录名称"
          prop="name"
        >
          <el-input v-model="currentCatalog.name" />
        </el-form-item>
        <el-form-item
          label="排序"
        >
          <el-input-number
            v-model="currentCatalog.orderNum"
            :min="0"
            :max="30000"
            controls-position="right"
          />
        </el-form-item>
      </el-form>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="catalogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="addOrEditCatalog"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { post } from '../../packages/js/utils/http'
import _ from 'lodash'
export default {
  data () {
    return {
      isAll: false,
      catalogList: [],
      catalogVisible: false,
      currentCatalog: {
        name: '',
        id: '',
        code: ''
      },
      formRules: {
        name: [
          { required: true, message: '目录名称不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    this.getCatalogList()
  },
  methods: {
    // 点击全部
    clickAllCatalog () {
      this.isAll = true
      this.$emit('getPageInfo', { isAll: true })
    },
    // 点击目录
    clickCatalog (catalog) {
      this.currentCatalog = _.cloneDeep(catalog)
      this.isAll = false
      this.$emit('getPageInfo', { isAll: false, page: catalog })
    },
    // 关闭目录弹窗
    handleClose () {
      this.catalogVisible = false
      this.$refs.form.clearValidate()
    },
    // 新增编辑目录（点击确定）
    addOrEditCatalog () {
      this.$refs.form.validate(async (valid) => {
        if (!valid) {
          return
        }
        if (!this.currentCatalog.id) {
          post('/bigScreen/category/add',
            {
              ...this.currentCatalog
            }).then(data => {
            this.catalogVisible = false
            this.getCatalogList()
            this.flag = true
            // 关闭页面菜单的弹窗
            this.closePageMenuDialog()
          }).catch(() => {
          })
        } else {
          post('/bigScreen/category/update', { ...this.currentCatalog, excludeCategory: this.currentCatalog.code }).then(data => {
            this.catalogVisible = false
            this.getCatalogList()
          }).catch(() => {
          })
        }
      })
    },
    // 新增目录
    catalogAdd () {
      this.catalogVisible = true
      this.currentCatalog = {
        name: '',
        id: '',
        code: ''
      }
    },
    // 编辑目录
    catalogEdit () {
      this.catalogVisible = true
    },
    // 删除目录
    catalogDel (catalog) {
      this.$confirm('确定删除该目录？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        post(`/bigScreen/category/delete/${catalog.code}`).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.getCatalogList()
        }).catch(() => {
          this.$message({
            type: 'error',
            message: '删除失败!'
          })
        })
      }).catch()
    },
    // 获取目录的列表
    getCatalogList () {
      this.pageLoading = true
      post('/bigScreen/category/list', { typeList: 'catalog' }).then(data => {
        this.catalogList = data
      }).catch(() => {
      }).finally(() => {
        this.pageLoading = false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .side-catalog-wrap{
    padding-top: 16px;
    position: absolute;
    width: 300px;
    height: 100%;
    background-color: #202023;
    box-sizing: border-box;
    color: #FFFFFF;
    .side-catalog-box{
      height: calc(100% - 30px);
      overflow-y: auto;
      .side-catalog-all{
        font-weight: bold;
      }
      .side-catalog-item{
        width: 100%;
        padding: 8px 16px;
        display: flex;
        justify-content: space-between;
        &:hover{
          color: #007AFF;
        }
        .el-icon-more{
          transform: rotate(90deg);
          color: #FFFFFF;
        }
        .catalog-name{
          overflow:hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          -o-text-overflow:ellipsis;
        }
      }
      .active-catalog{
        background-image: url(./images/nav-menu-img.png);
        background-repeat: round;
        color: #FFFFFF;
        &:hover{
          color: #FFFFFF;
        }
      }
    }
    .add-catalog-box{
      display: flex;
      justify-content: center;
      align-items: center;
      .el-icon-plus{
        padding: 0 5px;
      }
      &:hover{
        cursor: pointer;
        color: #007AFF;
      }
    }

  }
</style>
