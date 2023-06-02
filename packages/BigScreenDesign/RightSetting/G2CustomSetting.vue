<template>
  <div class="bs-setting-wrap">
    <el-form
      ref="form"
      :model="config"
      :rules="customRules"
      label-width="120px"
      label-position="left"
      class="setting-body"
    >
      <!-- <div class="lc-field-body"> -->
      <div class="lc-field-head">
        <div class="lc-field-title">
          基础设置
        </div>
      </div>
      <div class="lc-field-body">
        <el-form-item
          label="标题"
          label-width="120px"
        >
          <el-input
            v-model="config.title"
            placeholder="请输入标题"
            clearable
          />
        </el-form-item>
      </div>
      <div class="lc-field-head">
        <div class="lc-field-title">
          位置设置
        </div>
      </div>
      <div class="lc-field-body">
        <PosWhSetting
          label-width="120px"
          :config="config"
        />
      </div>
      <template v-for="group in groupList">
        <div :key="group.groupName">
          <div class="lc-field-head">
            <div class="lc-field-title">
              {{ group.groupName | filterGroupName }}
            </div>
          </div>
          <div class="lc-field-body">
            <div
              v-for="(setting, settingIndex) in group.list"
              :key="settingIndex+1"
            >
              <el-form-item
                :label="setting.label"
                label-width="120px"
              >
                <el-input
                  v-if="setting.type === 'input'"
                  v-model="setting.value"
                  :placeholder="`请输入${setting.label}`"
                  clearable
                />
                <el-select
                  v-else-if="setting.type === 'select'"
                  v-model="setting.value"
                  popper-class="bs-el-select"
                  class="bs-el-select"
                  :placeholder="`请选择${setting.label}`"
                  clearable
                >
                  <el-option
                    v-for="(opt, optIndex) in setting.options"
                    :key="optIndex"
                    :label="opt.label"
                    :value="opt.value"
                  />
                </el-select>
                <template v-else-if="setting.type === 'colorSelect'">
                  <color-select
                    v-model="colorScheme"
                    @update="updateColorScheme"
                  />
                  <div
                    style="
                    display: flex;
                    align-items: center;
                    height: 42px;
                    flex-wrap: wrap;
                  "
                  >
                    <el-color-picker
                      v-for="(colorItem, colorItemIndex) in colors"
                      :key="colorItemIndex"
                      v-model="setting.value[colorItemIndex]"
                      popper-class="bs-el-color-picker"
                      show-alpha
                      class="start-color"
                    />
                    <span
                      class="el-icon-circle-plus-outline"
                      style="color: #007aff; font-size: 20px"
                      @click="addColor"
                    />
                    <span
                      v-if="colors.length"
                      class="el-icon-remove-outline"
                      style="color: #ea0b30; font-size: 20px"
                      @click="delColor()"
                    />
                  </div>
                </template>
                <el-color-picker
                  v-else-if="setting.type === 'colorPicker'"
                  v-model="setting.value"
                  popper-class="bs-el-color-picker"
                  show-alpha
                />
                <!-- 渐变色设置 -->
                <GradualSetting
                  v-else-if="setting.type === 'gradual'"
                  v-model="setting.value"
                />
                <el-input-number
                  v-else-if="setting.type === 'inputNumber'"
                  v-model="setting.value"
                  class="bs-el-input-number"
                  :step="setting.step || 1"
                />
                <el-radio-group
                  v-else-if="setting.type === 'radio'"
                  v-model="setting.value"
                >
                  <template v-for="(opt, optIndex) in setting.options">
                    <el-radio-button
                      :key="optIndex"
                      :label="opt.value"
                    >
                      {{ opt.label }}
                    </el-radio-button>
                  </template>
                </el-radio-group>
                <el-switch
                  v-else-if="setting.type === 'switch'"
                  v-model="setting.value"
                />
                <el-switch
                  v-else-if="setting.type === 'switchNumber'"
                  v-model="setting.value"
                  :active-value="1"
                  :inactive-value="0"
                />
                <el-slider
                  v-else-if="setting.type === 'slider'"
                  v-model="setting.value"
                  :min="0"
                  :max="1"
                  :step="0.01"
                />
                <PaddingSetting
                  v-else-if="setting.type === 'padding'"
                  v-model="setting.value"
                />
              </el-form-item>
            </div>
          </div>
        </div>
      </template>
      <!-- </div> -->
    </el-form>
  </div>
</template>
<script>
import { chartSettingMixins } from 'packages/js/mixins/chartSettingMixins'
import ColorSelect from 'packages/ColorMultipleSelect/index.vue'
// import ColorPicker from 'packages/ColorPicker/index.vue'
import PaddingSetting from 'packages/BigScreenDesign/RightSetting/PaddingSetting/index.vue'
import GradualSetting from 'packages/BigScreenDesign/RightSetting/GradualSetting/index.vue'
import PosWhSetting from 'packages/BigScreenDesign/RightSetting/PosWhSetting.vue'
export default {
  name: 'CustomComponentSetting',
  components: {
    ColorSelect,
    // ColorPicker,
    PaddingSetting,
    GradualSetting,
    PosWhSetting
  },
  mixins: [chartSettingMixins],
  data () {
    return {
      groupList: []
    }
  },
  filters: {
    filterGroupName (val) {
      const settingGroup = {
        basic: '基础设置',
        position: '位置设置',
        graph: '图表设置',
        grid: '网格线设置',
        legend: '图例设置',
        xAxis: 'X轴设置',
        yAxis: 'Y轴设置',
        padding: '边距设置',
        other: '其他设置'

      }
      return settingGroup[val]
    }
  },
  computed: {
    config: {
      get () {
        return this.$store.state.bigScreen.activeItemConfig
      },
      set (val) {
        this.$store.state.bigScreen.activeItemConfig = val
      }
    },
    appCode: {
      get () {
        return this.$store.state.bigScreen.pageInfo.appCode
      }
    },
    pageCode () {
      return this.$route.query.code
    }
  },
  watch: {},
  mounted () {
    const groupNameList = []
    this.config.setting.filter(
      (item) => item.tabName === 'custom'
    ).forEach(item => {
      if (item.tabName === 'custom' && item.groupName) {
        if (!groupNameList.includes(item.groupName)) {
          groupNameList.push(item.groupName)
          this.groupList.push({
            groupName: item.groupName,
            list: [item]
          })
        } else {
          this.groupList.find(group => group.groupName === item.groupName).list.push(item)
        }
      } else {
        this.groupList.push({
          groupName: 'other',
          list: [item]
        })
        this.groupList.other.list.push(item)
      } // 没有分组的放到other里面
    })
    console.log(this.config.setting)
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '~packages/assets/style/settingWrap.scss';

// 筛选条件的按钮样式
.add-filter-box {
  position: relative;

  .add-filter {
    margin-left: 90px;
    margin-bottom: 10px;
  }

  .add-filter-btn {
    position: absolute;
    top: 0;
  }
}

.lc-field-body {
  padding: 0 16px;
}

.lc-field-title {
  position: relative;
  padding-left: 12px;
  line-height: 30px;
  height: 30px;

  &:after {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    content: '';
    width: 4px;
    height: 14px;
    background-color: var(--bs-el-color-primary);
  }
}

::v-deep .el-color-picker__trigger {
  border-color: var(--bs-el-border);
}
</style>
