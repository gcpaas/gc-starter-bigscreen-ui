<!--
 * @description: 时间线
-->
<template>
  <el-dialog
    title="历史记录"
    :visible.sync="dialogVisible"
    width="50%"
    :modal="true"
    :modal-append-to-body="false"
    :appen-to-body="true"
    class="bs-dialog-wrap bs-el-dialog"
  >
    <div class="layer-list-wrap">
      <!-- el-table 三列，动作，时间，操作。操作栏中是回退 -->
      <el-table
        :data="chartList"
        border
        style="width: 100%"
        class="bs-el-table"
      >
        <el-table-column
          prop="timelineTitle"
          label="动作"
          class-name="bs-el-table-column"
        />
        <el-table-column
          prop="updateTime"
          label="时间"
          width="180"
          class-name="bs-el-table-column"
        />
        <el-table-column
          prop="operation"
          label="操作"
          width="180"
          class-name="bs-el-table-column"
        >
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click="rollback(scope.$index)"
            >
              回退
            </el-button>
          </template>
        </el-table-column>
        <el-table-column
          prop="operation"
          label="当前节点"
          width="80"
          class-name="bs-el-table-column"
        >
          <template slot-scope="scope">
            <div v-if="scope.$index === currentTimeLine - 1">
              &lt;----
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <span
      slot="footer"
      class="dialog-footer"
    >
      <el-button
        @click="dialogVisible = false"
      >
        取消
      </el-button>
      <el-button
        type="primary"
        @click="clearTimeline"
      >
        清除历史
      </el-button>
    </span>
  </el-dialog>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'HistoryList',
  props: {},
  data () {
    return {
      dialogVisible: false
    }
  },
  computed: {
    ...mapState({
      chartList: state => state.bigScreen.timelineStore,
      currentTimeLine: state => state.bigScreen.currentTimeLine
    })
  },
  mounted () {},
  methods: {
    ...mapMutations({
      clearTimeline: 'bigScreen/clearTimeline',
      rollbackTimeline: 'bigScreen/rollbackTimeline'
    }),
    init () {
      this.dialogVisible = true
    },
    rollback (index) {
      this.rollbackTimeline(index)
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~packages/BigScreenDesign/fonts/iconfont.css';
@import '~packages/assets/style/bsTheme.scss';
.layer-list-wrap {

}
</style>
