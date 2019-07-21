module.exports = {
    presets: [
        '@vue/app', ['env', //添加 babel-preset-env 配置 
            {
                'modules': false
            }
        ]
    ],
    "ignore": ["src/assets/lib/mui/js/mui.js"],
    plugins: [ // Mint-ui官方教程   babel-plugin-component
        //"transform-remove-strict-mode", //配置插件，这里很重要
        [
            'component',
            {
                'libraryName': 'mint-ui',
                "style": true
            }
        ]
    ]
}