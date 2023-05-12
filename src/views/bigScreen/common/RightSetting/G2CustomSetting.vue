<template>
  <div class="bs-setting-wrap">
    <el-form
      ref="form"
      :model="config"
      :rules="customRules"
      label-width="90px"
      label-position="left"
      class="setting-body"
    >
      <el-collapse :value="['1','2']">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="lc-field-head">
              <div class="lc-field-title">
                自定义属性
              </div>
            </div>
          </template>

          <div class="lc-field-body">
            <div class="">
              <el-form-item
                label="标题"
                label-width="100px"
              >
                <el-input
                  v-model="config.title"
                  placeholder="请输入标题"
                  clearable
                />
              </el-form-item>
              <template
                v-for="(setting, index) in config.setting.filter(item => item.tabName === 'custom')"
              >
                <el-form-item
                  :key="index"
                  :label="setting.label"
                  label-width="100px"
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
                    :placeholder="`请输入${setting.label}`"
                    clearable
                  >
                    <el-option
                      v-for="(opt, optIndex) in setting.options"
                      :key="optIndex"
                      :label="opt.label"
                      :value="opt.value"
                    />
                  </el-select>
                  <!-- <el-color-picker
                    v-else-if="setting.type === 'colorPicker'"
                    v-model="setting.value"
                  /> -->
                  <template v-else-if="setting.type === 'colorSelect'">
                    <color-select
                      v-model="colorScheme"
                      @update="updateColorScheme"
                    />
                    <div style="display: flex;align-items: center;height: 42px;flex-wrap: wrap">
                      <el-color-picker
                        v-for="(colorItem, colorsIndex) in colors"
                        :key="colorsIndex"
                        v-model="setting.value[colorsIndex]"
                        show-alpha
                        class="start-color"
                      />
                      <span
                        class="el-icon-circle-plus-outline"
                        style="color: #007AFF;font-size: 20px"
                        @click="addColor"
                      />
                      <span
                        v-if="colors.length"
                        class="el-icon-remove-outline"
                        style="color: #ea0b30;font-size: 20px"
                        @click="delColor()"
                      />
                    </div>
                  </template>
                  <color-picker
                    v-else-if="setting.type === 'colorPicker'"
                    v-model="setting.value"
                    style="width: 100%;display: grid;"
                  />
                  <!-- 渐变色设置 -->
                  <GradualSetting
                    v-else-if="setting.type === 'gradual'"
                    v-model="setting.value"
                  />
                  <el-input-number
                    v-else-if="setting.type === 'inputNumber'"
                    v-model="setting.value"
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
              </template>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-form>
  </div>
</template>
<script>
import { chartSettingMixins } from 'gc-starter-bigscreen/mixins/chartSettingMixins'
import ColorSelect from 'gc-starter-bigscreen/common/ColorSelect/index'
import ColorPicker from '@/views/bigScreen/common/ColorPicker/index.vue'
import PaddingSetting from 'gc-starter-bigscreen/common/PaddingSetting/index'
import GradualSetting from 'gc-starter-bigscreen/common/GradualSetting/index'
export default {
  name: 'CustomComponentSetting',
  components: {
    ColorSelect,
    ColorPicker,
    PaddingSetting,
    GradualSetting
  },
  mixins: [chartSettingMixins],
  data () {
    return {
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
    pageCode () {
      return this.$route.query.code
    }
  },
  watch: {},
  mounted () {

  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import "../../css/settingWrap";
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
</style>
