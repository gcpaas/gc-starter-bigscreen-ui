import { commonConfig, displayOption } from 'packages/js/config'

export const settingConfig = {
  padding: [30, 30, 30, 60],
  legend: false,
  isGroup: true,
  data: [],
  // 设置面板属性的显隐
  displayOption: {
    ...displayOption,
    params: {
      enable: false
    },
    headerField: {
      enable: false
    },
    metricField: {
      // 指标
      label: '指标',
      enable: false,
      multiple: false // 是否多选
    },
    dimensionField: {
      // 表格列
      label: '展示字段', // 维度/查询字段
      enable: true,
      multiple: false // 是否多选
    }
  }
}
const customConfig = {
  type: 'digitalFlop',
  root: {
    contribution: false
  },
  customize: {
    content: '',
    toFixed: 0,
    textAlign: 'center',
    rowGap: 0,
    formatter: '',
    style: {
      fontSize: 50,
      fill: '#7ec699'
    }
  }
}
export const dataConfig = {
  ...commonConfig(customConfig)
}
