module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',

    // 以下是element-ui的按需引入配置
    ['@babel/preset-env', { 'modules': false }]
  ],
  plugins: [
    [
      'component',
      {
        'libraryName': 'element-ui',
        'styleLibraryName': 'theme-chalk'
      }
    ]
  ]
}