module.exports = {
  // 作用：语法转换、polyfill api、按需导入
  presets: [
    [
      '@babel/preset-env',
      {
        // targets不做配置，默认使用我们 .browserslistrc文件中的配置
        // targets: {},
        // 对所用语法进行polyfill，但依旧是改写prototype
        // useBuiltIns: 'usage',
        // corejs: {
        //   // 使用最新版本的core-js进行polyfill
        //   version: '^7.24.7',
        //   // 开启草案中的polyfill转译
        //   proposals: true,
        // },
        // 使用es6模块进行
        modules: false,
        //'false','commonjs', 'amd', 'umd', 'systemjs','auto'
        //测试后false和auto都有tree shaking，最好使用false，es6 module支持，commonjs则不支持，没有tree shaking
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: {
          version: 3,
          proposals: true,
        },
        useESModules: true,
      },
    ],
  ], //作用：避免重复定义
}
