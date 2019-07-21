import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

// 1.0 导入 Mint-ui 
// import { Header, Button, Swipe, SwipeItem, Lazyload } from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Button.name, Button)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.use(Lazyload);
import mint from "mint-ui"
Vue.use(mint)

// 2.0 导入mui样式和js
import "./assets/lib/mui/css/mui.min.css"
import "./assets/lib/mui/css/icons-extra.css"

//导入预览插件
import VuePreview from 'vue-preview'
// defalut install
Vue.use(VuePreview)



// 3.0 导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//定义事件过滤器
import moment from "moment"
Vue.filter("dataFormat", function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})

import axios from 'axios'
axios.defaults.baseURL = "http://www.liulongbin.top:3005"


import router from "./router.js"
import store from './store'

new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')