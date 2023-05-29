export function showSize(base64url) {
  let str = base64url.replace('data:image/png;base64,', '')
  // 找到等号，把等号也去掉
  const equalIndex = str.indexOf('=')
  if (str.indexOf('=') > 0) {
    str = str.substring(0, equalIndex)
  }
  // 原来的字符流大小，单位为字节
  const strLength = base64url.length
  // 计算后得到的文件流大小，单位为字节
  const fileLength = parseInt(strLength - (strLength / 8) * 2)
  // 由字节转换为kb
  let size = ''
  size = (fileLength / 1024).toFixed(2)
  const sizeStr = size + '' // 转成字符串
  const index = sizeStr.indexOf('.') // 获取小数点处的索引
  const dou = sizeStr.substr(index + 1, 2) // 获取小数点后两位的值
  if (dou == '00') {
    // 判断后两位是否为00，如果是则删除00
    return sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2)
  }
  return size
}

export function dataURLtoBlob(dataurl) {
  const arr = dataurl.split(',')
  const _arr = arr[1].substring(0, arr[1].length - 2)
  const mime = arr[0].match(/:(.*?);/)[1]
  const bstr = atob(_arr)
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], {
    type: mime
  })
}

export function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result.toString()))
  reader.readAsDataURL(img)
}
export function formatBlobs(blobs) {
  return new Promise((resolve) => {
    getBase64(blobs, (url) => {
      resolve(url)
    })
  })
}
