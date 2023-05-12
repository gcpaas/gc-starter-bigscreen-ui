<template>
  <el-dialog
    title="背景图"
    :visible.sync="dialogVisible"
    width="50%"
    :modal="true"
    :modal-append-to-body="false"
    :appen-to-body="true"
    @closed="$emit('imgUrl', imgUrl)"
  >
    <div>
      <el-upload
        ref="uploadDeviceRealImg"
        accept=".jpg,.jpeg,.PNG,.JPG"
        list-type="picture-card"
        :action="actionUrl"
        :limit="1"
        :on-success="uploadImg"
        :file-list="fileList"
        :data="fileUploadParam"
        :on-remove="removeImg"
        :before-upload="beforeUpload"
        :auto-upload="true"
      >
        <el-button
          :style="{ display: hideUploadImgBtn ? 'none' : '' }"
          type="primary"
        >
          上传背景图
        </el-button>
      </el-upload>
      <div>
        <el-row
          :gutter="8"
          style="margin-top: 8px;"
        >
          <el-col
            v-for="img in bgImgList"
            :key="img.name"
            :md="6"
            :lg="6"
            :xl="6"
            style="max-width: 200px"
          >
            <el-image
              class="bg-img"
              :src="img.url"
              fit="cover"
              @click.native="imgUrl = img.url; dialogVisible = false"
            />
          </el-col>
        </el-row>
      </div>
    </div>
  </el-dialog>
</template>
<script>
import { $gc } from 'gc-starter-ui-plus'
export default {
  name: 'BgImgDialog',
  props: {
    form: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      dialogVisible: false,
      hideUploadImgBtn: false,
      bgImgList: [],
      fileList: [],
      imgUrl: '',
      fileUploadParam: {
        module: 'attachment'
      },
      actionUrl: window.SITE_CONFIG['baseUrl'] + '/sys/file/upload'
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
    init () {
      this.dialogVisible = true
      this.imgUrl = this.form.bg
      this.fileList = this.imgUrl ? [{
        name: '背景图',
        url: this.imgUrl
      }] : []
      this.hideUploadImgBtn = this.fileList.length !== 0
      $gc.get('/bigScreen/design/bg/list').then(list => {
        this.bgImgList = list
      })
    },
    uploadImg (response, file) {
      if (response.code !== 200) {
        this.$message.error(response.msg)
        let idx = this.$refs.uploadDeviceRealImg['uploadFiles'].findIndex(
          item => item.uid === file.uid
        )
        this.$refs.uploadDeviceRealImg['uploadFiles'].splice(idx, 1)
      } else {
        this.dialogVisible = false
        this.hideUploadImgBtn = true
        this.imgUrl = response.data.url
      }
    },
    removeImg (file, fileList) {
      this.hideUploadImgBtn = fileList.length !== 0
      this.imgUrl = ''
    },
    beforeUpload (file) {
      if (file.size > 30 * 1024 * 1024) {
        this.$message.error('上传图片大小不能超过 30MB!')
        return false
      }
      return new Promise(resolve => {
        this.$nextTick(() => {
          resolve()
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-upload-list__item.is-ready,
.el-upload-list__item.is-uploading {
  display: none !important;
}

::v-deep .el-upload-list__item {
  transition: none !important;
}

::v-deep .el-upload--picture-card {
  width: 0;
  height: 0;
  display: table-row;
  line-height: 0;
  background-color: #ffffff;
}
::v-deep .el-upload-list__item {
    width: 200px;
    height: 150px;
    margin: 0;
  }

.bg-img {
  width: 100%;
  height: 100px;
  cursor: pointer;
}
</style>
