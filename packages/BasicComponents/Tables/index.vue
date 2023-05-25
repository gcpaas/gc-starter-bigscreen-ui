<template>
  <div
    style="width: 100%;height: 100%"
    class="bs-design-wrap"
  >
    <!-- :border="this.config.customize.border" -->
    <el-table
      :id="config.code"
      height="100%"
      :stripe="config.customize.stripe"
      :data="config.option.tableData"
      :header-cell-style="headerCellStyle"
      :cell-style="cellStyle"
    >
      <el-table-column
        v-for="(col, index) in config.option.columnData"
        :key="index"
        show-overflow-tooltip
        :label="col.remark"
        :prop="col.alias"
        align="center"
      />
    </el-table>
  </div>
</template>
<script>
import commonMixins from 'packages/js/mixins/commonMixins'
import paramsMixins from 'packages/js/mixins/paramsMixins'
import linkageMixins from 'packages/js/mixins/linkageMixins'
export default {
  name: 'TableChart',
  mixins: [paramsMixins, commonMixins, linkageMixins],
  props: {
    id: {
      type: String,
      default: ''
    },
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      headerCellStyleObj: {
        backgroundColor: 'transparent'
      },
      cellStyleObj: {
        backgroundColor: 'transparent'
      }
    }
  },
  computed: {
    headerCellStyle () {
      const headerBackgroundColor = {
        dark: '#141414',
        light: '#ffffff',
        auto: 'transparent'
      }
      console.log(this.config)
      console.log(this.customTheme)
      console.log(this.customTheme !== 'custom'
        ? this.config.customize.headerBackgroundColor || headerBackgroundColor[this.customTheme]
        : this.headerCellStyleObj.backgroundColor)
      if (document.getElementById(this.config.code)?.querySelector('tr')) {
        document
          .getElementById(this.config.code)
          .querySelector('tr').style.backgroundColor =
          this.customTheme !== 'custom'
            ? this.config.customize.headerBackgroundColor || headerBackgroundColor[this.customTheme]
            : this.headerCellStyleObj.backgroundColor
      }
      const style = {
        height: '48px',
        borderBottom: 'solid 2px #007aff',
        backgroundColor:
        this.customTheme !== 'custom'
          ? this.config.customize.headerBackgroundColor || headerBackgroundColor[this.customTheme]
          : this.headerCellStyleObj.backgroundColor,
        color:
          this.customTheme === 'light'
            ? '#000000'
            : this.config.customize.headerFontColor || '#ffffff',
        fontSize: this.config.customize.headerFontSize + 'px' || '14px'
      }
      return style
    },
    cellStyle () {
      const bodyBackgroundColor = {
        dark: '#141414',
        light: '#ffffff',
        auto: 'transparent'
      }
      const style = {
        backgroundColor:
        this.customTheme !== 'custom'
          ? this.config.customize.bodyBackgroundColor || bodyBackgroundColor[this.customTheme]
          : this.headerCellStyleObj.backgroundColor,
        color:
          this.customTheme === 'light'
            ? '#000000'
            : this.config.customize.bodyFontColor || '#ffffff',
        fontSize: this.config.customize.bodyFontSize + 'px' || '14px'
      }
      return style
    }
  },
  created () {},
  mounted () {
    if (this.customTheme === 'custom') {
      this.headerCellStyleToObj()
      this.cellStyleToObj()
    }
    if (this.customTheme === 'custom') {
      this.headerCellStyleToObj()
      this.cellStyleToObj()
    }
    if (this.config.customize.stripe) {
      const trs = document
        .getElementById(this.config.code)
        ?.querySelectorAll('tr.el-table__row--striped')
      if (trs) {
        trs.forEach(tr => {
          tr.style.opacity = '0.9'
          // 透明度
          // const overlay = document.createElement("div");
          // overlay.classList.add("overlay");
          // // 将蒙版添加到容器中
          // tr.appendChild(overlay);
        })
      }
    } else {
      const trs = document
        .getElementById(this.config.code)
        ?.querySelectorAll('tr.el-table__row--striped')
      if (trs) {
        trs.forEach(tr => {
          tr.style.opacity = '1'
          // 透明度
          // const overlay = document.createElement("div");
          // overlay.classList.add("overlay");
          // // 将蒙版添加到容器中
          // tr.appendChild(overlay);
        })
      }
      // document.querySelectorAll(".overlay").forEach(overlay => {
      //   overlay.remove();
      // });
    }
    // this.chartInit();
  },
  methods: {
    buildOption (config, data) {
      config.option.tableData = data.data
      const filteredData = {}
      const columnData = data.columnData
      if (config.dataSource.dimensionFieldList && config.dataSource.dimensionFieldList.length > 0) {
        Object.keys(columnData).forEach(key => {
          if (
            config.dataSource.dimensionFieldList.includes(columnData[key].alias)
          ) {
            filteredData[key] = columnData[key]
          }
        })
        config.option.columnData = filteredData
      } else {
        config.option.columnData = columnData
      }
      // this.$set(this.headerCellStyleObj, "backgroundColor", config.customize.headerBackgroundColor)
      return config
    },

    // 将样式字符串转成对象, 用于自定义主题，表格头部样式
    headerCellStyleToObj () {
      const str = this.themeJson.themeCss
      // 匹配包含header-cell-style的样式字符串
      // 匹配包含header-cell-style的样式字符串
      const regex = /\.header-cell-style\{([^{}]+)\}/
      const match = str.match(regex)
      if (match) {
        // 将样式字符串转成对象
        const styleStr = match[1].trim().replace(/\s*;\s*$/, '') // 去掉末尾的空格和分号
        // const styleObj = {};
        styleStr.split(';').forEach(s => {
          const [key, value] = s.split(':')
          if (key && value) {
            // 判断是否为空字符串
            this.headerCellStyleObj[key.trim()] = value.trim()
          }
        })
      } else {
        this.headerCellStyleObj = {}
      }
    },
    // 将样式字符串转成对象, 用于自定义主题，表格主体样式
    cellStyleToObj () {
      const str = this.themeJson.themeCss
      // 匹配包含header-cell-style的样式字符串
      // 匹配包含header-cell-style的样式字符串
      const regex = /\.cell-style\{([^{}]+)\}/
      const match = str.match(regex)

      if (match) {
        // 将样式字符串转成对象
        const styleStr = match[1].trim().replace(/\s*;\s*$/, '') // 去掉末尾的空格和分号
        styleStr.split(';').forEach(s => {
          const [key, value] = s.split(':')
          if (key && value) {
            // 判断是否为空字符串
            this.cellStyleObj[key.trim()] = value.trim()
          }
        })
      } else {
        this.cellStyleObj = {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.bs-design-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-radius: 4px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}

::v-deep .el-table {
  height: 100%;
  background-color: transparent;
}
::v-deep .el-table th.gutter {
  border-bottom: 2px solid var(--bs-el-color-primary) !important;
}
::v-deep .el-table__body {
  height: 100%;
}
::v-deep .el-table tr {
  background-color: transparent;
}
::v-deep tr.el-table__row--striped {
  z-index: 1; /*将容器的 z-index 设为 1，以便其在蒙版之上*/
  position: relative; /*设置容器为相对定位*/
  opacity: 0.9;
}
::v-deep tr.el-table__row--striped::before {
  position: absolute; /*设置蒙版为绝对定位*/
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2); /*设置半透明的灰色背景色*/
  z-index: 2; /*将蒙版的 z-index 设为 2，以便其覆盖在容器之上*/
}
::v-deep .overlay {
  position: absolute; /*设置蒙版为绝对定位*/
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2) !important; /*设置半透明的灰色背景色*/
  z-index: 2; /*将蒙版的 z-index 设为 2，以便其覆盖在容器之上*/
}
::v-deep .cell.el-tooltip {
  z-index: 3;
  min-width: 50px;
  white-space: nowrap;
  position: inherit;
}

::v-deep .el-table {
    th.gutter, colgroup.gutter {
        width: 0px !important;//此处的宽度值，对应你自定义滚动条的宽度即可
    }
}

// 关键css代码
::v-deep .el-table__header colgroup col[name="gutter"] {
    display: table-cell !important;
}

::v-deep .el-table__body{
  width: 100% !important;
}
</style>
