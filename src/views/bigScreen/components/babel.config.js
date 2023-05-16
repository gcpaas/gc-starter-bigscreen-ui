module.exports = {
  plugins: [
    '@babel/plugin-proposal-optional-chaining',  //可选链 ?.
    '@babel/plugin-proposal-nullish-coalescing-operator'  //空值合并 ??
  ],
  presets: [
    '@vue/cli-plugin-babel/preset',
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3
      }
    ]
  ]
}
