/* eslint-disable eqeqeq */
import axios from 'axios'
import { Message } from 'element-ui'
import vm from 'gc-starter-ui-plus/packages/service/vm'
import qs from 'qs'

// 判断有无systoken
let sysTokenkey, sysToken
if (window.SITE_CONFIG && window.SITE_CONFIG['previewIntercept']) {
  sysTokenkey = window.SITE_CONFIG['systemTokenKey']
  sysToken = ''
}
/**
 * 统一进行异常输出
 * 如果异常只是弹框显示即可，可使用该实例
 */

const httpCustom = axios.create({
  timeout: 1000 * 30,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})
/**
 *对于出现异常时还需要做其他操作，可使用该实例
 */
const http = axios.create({
  timeout: 1000 * 30,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

/**
 * 封装的异常对象
 * @param message
 * @param code
 * @constructor
 *
 */
function EipException (message, code) {
  this.msg = message
  this.code = code
}

/**
 * 请求拦截
 */
http.interceptors.request.use(config => {
  if (sysTokenkey) {
    if (config.method.toLowerCase() == 'get') config.params[sysTokenkey] = sysToken
    if (config.method.toLowerCase() == 'post') {
      let data = JSON.parse(config.data)
      data[sysTokenkey] = sysToken
      config.data = JSON.stringify(data)
    }
  }
  return config
}, error => {
  return Promise.reject(error)
})

/**
 * 自定义请求拦截
 */
httpCustom.interceptors.request.use(config => {
  if (sysTokenkey) {
    if (config.method.toLowerCase() == 'get') config.params[sysTokenkey] = sysToken
    if (config.method.toLowerCase() == 'post') {
      let data = JSON.parse(config.data)
      data[sysTokenkey] = sysToken
      config.data = JSON.stringify(data)
    }
  }
  return config
}, error => {
  return Promise.reject(error)
})

/**
 * 响应拦截
 */
http.interceptors.response.use(response => {
  const res = response.data
  // 异常拦截
  if (res && res.code === 401) {
    // 跳转到登录页面，发送事件
    vm.$emit('loginUserSelectEvent', { command: 'noLogin' })
  } else if (res && res.code !== 200) {
    // 错误信息统一在这里处理、页面代码只需要关系正常情况即可
    Message({
      message: response.data.msg || 'error',
      type: 'error',
      duration: 5 * 1000
    })
    // return Promise.reject(response.data.msg)
    throw new EipException(response.data.msg, response.data.code)
  } else {
    return res
  }
}, error => {
  if (error.message && error.message === 'Network Error') {
    Message({
      message: `服务无法访问，请确定当前终端是否能够访问: ${window.SITE_CONFIG?.baseUrl}`,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  } else {
    Message({
      message: '接口无法访问',
      type: 'error',
      duration: 5 * 1000
    })
  }
  return Promise.reject(error)
})

/**
 * 响应拦截
 */
httpCustom.interceptors.response.use(response => {
  const res = response.data
  return res
}, error => {
  if (error.message && error.message === 'Network Error') {
    Message({
      message: `服务无法访问，请确定当前终端是否能够访问: ${window.SITE_CONFIG?.baseUrl}`,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  } else {
    Message({
      message: '接口无法访问',
      type: 'error',
      duration: 5 * 1000
    })
  }
  return Promise.reject(error)
})

/**
 * get请求
 * @param url
 * @param params
 * @returns {Promise<any>}
 */
export function get (url, params = {}, customHandlerException = false) {
  if (!url.startsWith('http')) {
    url = window.SITE_CONFIG?.baseUrl + url
  }
  // 如果是ie浏览器要添加个时间戳，解决浏览器缓存问题
  if (!!window.ActiveXObject || 'ActiveXObject' in window) {
    params['_t'] = new Date().getTime()
  }
  let axiosInstance = customHandlerException ? httpCustom : http
  return new Promise((resolve, reject) => {
    axiosInstance.get(url, {
      params: params,
      paramsSerializer: params => {
        return qs.stringify(params, { indices: false })
      }
    }).then(response => {
      if (customHandlerException) {
        resolve(response)
      } else {
        resolve(response.data)
      }
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * Post 请求
 * @param url
 * @param params
 * @returns {Promise<any>}
 */
export function post (url, data = {}, customHandlerException = false) {
  if (!url.startsWith('http')) {
    url = window.SITE_CONFIG?.baseUrl + url
  }
  let axiosInstance = customHandlerException ? httpCustom : http
  data = JSON.stringify(data)
  return new Promise((resolve, reject) => {
    axiosInstance.post(url, data).then(response => {
      if (customHandlerException) {
        resolve(response)
      } else {
        resolve(response.data)
      }
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * delete 请求
 * @param url
 * @param data
 * @returns {Promise<any>}
 */
export function del (url, data = {}, customHandlerException = false) {
  if (!url.startsWith('http')) {
    url = window.SITE_CONFIG?.baseUrl + url
  }
  let axiosInstance = customHandlerException ? httpCustom : http
  data = JSON.stringify(data)
  return new Promise((resolve, reject) => {
    axiosInstance.delete(url, data).then(response => {
      if (customHandlerException) {
        resolve(response)
      } else {
        resolve(response.data)
      }
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * put 请求
 * @param url
 * @param data
 * @returns {Promise<any>}
 */
export function put (url, data = {}, customHandlerException = false) {
  if (!url.startsWith('http')) {
    url = window.SITE_CONFIG?.baseUrl + url
  }
  let axiosInstance = customHandlerException ? httpCustom : http
  data = JSON.stringify(data)
  return new Promise((resolve, reject) => {
    axiosInstance.put(url, data).then(response => {
      if (customHandlerException) {
        resolve(response)
      } else {
        resolve(response.data)
      }
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * download 请求
 * @returns {Promise<any>}
 */

export function download (url, headers = {}, params = {}, body = {}) {
  if (!url.startsWith('http')) {
    url = window.SITE_CONFIG?.baseUrl + url
  }
  // 如果是ie浏览器要添加个时间戳，解决浏览器缓存问题
  if (!!window.ActiveXObject || 'ActiveXObject' in window) {
    params['_t'] = new Date().getTime()
  }
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: url,
      headers: headers,
      params: params,
      data: body,
      withCredentials: false,
      responseType: 'arraybuffer'
    }).then(res => {
      // IE10,11采用自带下载文件流方法
      if ((!!window.ActiveXObject || 'ActiveXObject' in window) && window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(new Blob([res.data]), res.headers['filename'])
        return
      }
      let fileUrl = window.URL.createObjectURL(new Blob([res.data]))
      // 创建超链接
      let fileLink = document.createElement('a')
      fileLink.href = fileUrl
      // 设置下载文件名
      let responseFileName = res.headers['filename']
      // 解决中文乱码
      responseFileName = window.decodeURI(responseFileName)
      fileLink.setAttribute('download', responseFileName)
      document.body.appendChild(fileLink)
      // 模拟人工点击下载超链接
      fileLink.click()
      // 释放资源
      document.body.removeChild(fileLink)
      window.URL.revokeObjectURL(fileUrl)
    }).catch(e => {
      let status = e?.response?.status
      if (status === 404) {
        this.$message.error('该文件不存在或已被删除')
        return
      }
      this.$message.error('服务器异常')
    })
  })
}

/**
 * 包装uri地址
 * @param url
 * @returns {*}
 */
export function wrapUrl (url) {
  if (!url.startsWith('http')) {
    url = window.SITE_CONFIG?.baseUrl + url
  }
  return url
}
