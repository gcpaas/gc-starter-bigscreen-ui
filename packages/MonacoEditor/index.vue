<!--
 * @description: monaco 编辑器
-->

<template>
  <div class="monaco-editor-wrap">
    <div
      ref="monacoEditor"
      class="monaco-editor-box"
    />
  </div>
</template>

<script>
import * as monaco from 'monaco-editor/esm/vs/editor/editor.main'
export default {
  components: {},
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    editorOptions: {
      type: Object,
      default: () => ({
        selectOnLineNumbers: true,
        roundedSelection: false,
        readOnly: false, // 只读
        cursorStyle: 'line', // 光标样式
        glyphMargin: true, // 字形边缘
        useTabStops: false,
        autoIndent: true,
        quickSuggestionsDelay: 500, // 代码提示延时
        automaticLayout: false, // 自动布局
        fontSize: 32 // 字体大小
      })
    },
    language: {
      type: String,
      default: 'javascript'
    },
    value: {
      type: String,
      default: ''
    },
    suggestions: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      editor: null, // 文本编辑器
      isSave: true // 文件改动状态，是否保存
    }
  },
  mounted () {
    this.initEditor()
  },
  beforeDestroy () {
    this.editor.dispose()
  },
  methods: {
    initEditor () {
      // 初始化编辑器，确保dom已经渲染
      this.editor = monaco.editor.create(this.$refs.monacoEditor, {
        value: this.value, // 编辑器初始显示内容
        language: this.language, // 支持语言
        theme: 'vs-dark', // 主题
        selectOnLineNumbers: true, // 显示行号
        editorOptions: this.editorOptions,
        minimap: { // 关闭小地图
          enabled: false
        }
      })

      this.$emit('onMounted', this.editor) // 编辑器创建完成回调
      this.editor.onDidChangeModelContent((event) => {
        // 编辑器内容change事件
        this.$emit('change', this.editor.getValue(), event)
      })
    },
    insertCode (code) {
      // 插入代码
      this.editor.executeEdits('', [
        {
          range: this.editor.getSelection(),
          text: code
        }
      ])
    }
  }
}
</script>

<style lang="scss" scoped>
.monaco-editor-wrap {
  width: 100%;
  height: 100%;

  .monaco-editor-box {
    width: 100%;
    height: 100%;
  }

  /deep/ .monaco-editor {
    height: 100%;
  }
}
</style>
