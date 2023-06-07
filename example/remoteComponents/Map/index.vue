<template>
  <div class="map-box">
    <div
      :id="`map-${config.code}`"
      style="width: 100%; height: 100%;"
    />
  </div>
</template>

<script>
export default {
  name: 'RemoteMap',
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      map: null
    }
  },
  computed: {
    option () {
      return this.config.option
    },
    optionData () {
      return this.option.data
    },
    customize () {
      return this.option.customize
    }
  },

  mounted () {
    this.initMap()
  },
  methods: {
    initMap () {
      // 找到已经存在高德地图的script标签
      const existingScripts = Array.from(document.getElementsByTagName('script')).filter(
        (script) => script.src.includes('https://webapi.amap.com/maps?v=1.4.15')
      )
      // 删除已经存在的script标签
      existingScripts.forEach((script) => {
        script.parentNode.removeChild(script)
      })
      // 销毁已经存在的地图
      if (this.map) {
        this.map.destroy()
      }
      // 重新创建script标签
      const script = document.createElement('script')
      script.src = `https://webapi.amap.com/maps?v=1.4.15&key=${this.customize.mapKey}`
      script.async = true
      script.onload = () => {
        // 创建地图
        this.map = new AMap.Map(`map-${this.config.code}`, {
          resizeEnable: true, // 是否监控地图容器尺寸变化
          lang: this.customize.lang,
          mapStyle: `amap://styles/${this.customize.mapStyle}`,
          center: [this.customize.lng, this.customize.lat],
          features: this.customize.features,
          zoom: this.customize.zoom,
          viewMode: this.customize.viewMode,
          // 开启工具条
          toolBar: true,
          // 开启比例尺
          scaleControl: true
        })
        let marker = null // 用于存储标记对象的变量
        if (this.customize.markerSpan) {
          // 创建自定义标记内容
          const markerContent = document.createElement('div')
          markerContent.style.position = 'absolute'
          markerContent.style.width = '25px'
          markerContent.style.height = '34px'

          // 创建标记图标
          const markerImg = document.createElement('img')
          markerImg.src = '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png'
          markerImg.style.width = '25px'
          markerImg.style.height = '34px'
          markerContent.appendChild(markerImg)

          // 创建标记文本
          const markerSpan = document.createElement('span')
          markerSpan.className = 'marker'
          markerSpan.innerHTML = this.customize.markerSpan
          markerContent.appendChild(markerSpan)
          // 删除之前的标记（如果存在）
          if (marker) {
            this.map.remove(marker)
          }
          // 创建自定义标记
          marker = new AMap.Marker({
            position: [this.customize.markerLng, this.customize.markerLat],
            content: markerContent,
            offset: new AMap.Pixel(0, 0) // 设置标记偏移，使其指向标记位置
          })

          // 将标记添加到地图中
          this.map.add(marker)
          // 动态修改标记的 right 位置
          const markerElement = marker.getContent()
          const markerTextElement = markerElement.querySelector('.marker')
          markerTextElement.style.right = 0 // 设置初始的 right 值
          if (markerTextElement) {
            setTimeout(() => {
              markerTextElement.style.right = `-${markerTextElement.clientWidth}px` // 设置新的 right 值
            }, 100)
          }
        }
      }
      document.head.appendChild(script)
    }
  }
}
</script>

<style scoped></style>

<style lang="scss" scoped>
.map-box {
  width: 100%;
  height: 100%;
  z-index: 999;
  pointer-events: none;

  ::v-deep .amap-marker-content img {
    width: 25px;
    height: 34px;
  }

  ::v-deep .marker {
    position: absolute;
    top: -20px;
    right: -118px;
    color: #fff;
    padding: 4px 10px;
    box-shadow: 1px 1px 1px rgba(10, 10, 10, .2);
    white-space: nowrap;
    font-size: 12px;
    font-family: "";
    background-color: #25A5F7;
    border-radius: 3px;
  }
}
</style>
