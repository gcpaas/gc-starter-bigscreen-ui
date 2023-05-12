module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',  //可选链 ?.
    '@babel/plugin-proposal-nullish-coalescing-operator'  //空值合并 ??
  ]
}
