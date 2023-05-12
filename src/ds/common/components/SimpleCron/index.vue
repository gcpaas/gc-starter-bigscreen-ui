<template>
  <div>
    <el-form
      ref="dataForm"
      :model="form"
      label-width="60px"
    >
      <el-form-item label="类型">
        <el-radio-group
          v-model="cronType"
          @change="cronTypeChange"
        >
          <el-radio
            v-for="cronType in cronTypeList"
            :key="cronType.type"
            :label="cronType.type"
          >
            {{ cronType.desc }}
          </el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="每">
        <el-select
          v-model.number="cronValue"
          filterable
          style="width: 80px"
        >
          <el-option
            v-for="op in options"
            :key="op"
            :label="op"
            :value="op"
          />
        </el-select>
        {{ desc }}执行一次 &nbsp;&nbsp;&nbsp;
        <el-button
          type="text"
          icon="el-icon-close"
          @click="close"
        >
          取消
        </el-button>
        <el-button
          type="text"
          icon="el-icon-check"
          @click="generate"
        >
          确定
        </el-button>&nbsp;&nbsp;
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {},
      cronType: 'sec',
      cronValue: 1,
      desc: '',
      options: [],
      cronTypeList: [
        {
          type: 'sec',
          desc: '秒'
        }, {
          type: 'min',
          desc: '分钟'
        }, {
          type: 'hour',
          desc: '小时'
        }, {
          type: 'day',
          desc: '天'
        }, {
          type: 'mon',
          desc: '月'
        }
      ]
    }
  },
  mounted () {
    console.log('初始化')
    this.cronType = 'sec'
    this.cronTypeChange('sec')
  },
  methods: {
    close () {
      this.$emit('close')
    },
    generate () {
      if (!this.cronValue) {
        this.$message.error('请选择执行的频率')
        return
      }
      let newType = this.cronType
      let cronExpress = ''
      if (newType === 'sec') {
        cronExpress = '0/' + this.cronValue + ' * * * * ?'
      } else if (newType === 'min') {
        cronExpress = '0 0/' + this.cronValue + ' * * * ?'
      } else if (newType === 'hour') {
        cronExpress = '0 0 0/' + this.cronValue + ' * * ?'
      } else if (newType === 'day') {
        cronExpress = '0 0 0 1/' + this.cronValue + ' * ?'
      } else if (newType === 'mon') {
        cronExpress = '* * * * 1/' + this.cronValue + ' ?' + ' *'
      }
      this.$emit('change', cronExpress)
      this.$emit('close')
    },
    cronTypeChange (newType) {
      this.cronValue = 1
      let arr = []
      if (newType === 'sec') {
        this.desc = '秒'
        for (let i = 1; i <= 59; i++) {
          arr.push(i)
        }
        this.options = arr
      } else if (newType === 'min') {
        this.desc = '分钟'
        for (let i = 1; i <= 59; i++) {
          arr.push(i)
        }
        this.options = arr
      } else if (newType === 'hour') {
        this.desc = '小时'
        for (let i = 1; i <= 23; i++) {
          arr.push(i)
        }
        this.options = arr
      } else if (newType === 'day') {
        this.desc = '天'
        for (let i = 1; i <= 30; i++) {
          arr.push(i)
        }
        this.options = arr
      } else if (newType === 'mon') {
        this.desc = '月'
        for (let i = 1; i <= 11; i++) {
          arr.push(i)
        }
        this.options = arr
      }
    }
  }
}
</script>
