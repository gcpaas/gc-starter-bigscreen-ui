/*
 * @Author: wujian
 * @Date: 2022-05-31 09:27:01
 * @LastEditors: wujian
 * @LastEditTime: 2022-09-01 16:17:50
 */
module.exports = {
  root: true,
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module',
    ecmaVersion: 2015
  },
  plugins: ['vue'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    // 忽略console警告
    'no-console': 'off',
    // 忽略v-html警告
    "vue/no-v-html":"off",
    // 忽略$符号
    jquery: true
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    '@vue/standard' // 使eslint继承standard标准
  ],
}
