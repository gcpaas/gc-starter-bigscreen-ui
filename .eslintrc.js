/*
 * @Author: wujian
 * @Date: 2022-05-31 09:27:01
 * @LastEditors: xing.heng
 * @LastEditTime: 2023-05-15 16:10:11
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
    "vue/no-v-html":"off"
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    '@vue/standard' // 使eslint继承standard标准
  ],
}
