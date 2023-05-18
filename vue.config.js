/*
 * @description: 案例和打包加载不同配置
 * @Author: xing.heng
 */
module.exports = require(`./vue.config.${process.env.VUE_APP_BUILD_TYPE}`)
