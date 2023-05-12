module.exports = {
  // 解决线上module.exports报错
  sourceType: 'unambiguous',
  plugins: [
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining'
  ],
  presets: [
    '@vue/app',
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage'
      }
    ]
  ]
}
