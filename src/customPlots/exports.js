// 遍历 当前文件夹下的所有文件，找到中文.js文件，然后导出
const files = require.context('./plots', true, /[\u4e00-\u9fa5]+.js$/)
const images = require.context('./logos', true, /.png$/)

const customPlots = []

files?.keys()?.forEach(key => {
  // ./基础折线.js 取到 "基础折线"
  const title = key.split('/')[1].replace('.js', '')
  customPlots.push({
    title,
    ...files(key).default,
    img: images(`./${title}.png`)
  })
})

export default customPlots
