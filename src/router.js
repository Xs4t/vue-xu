import VueRouter from "vue-router"

import HomeContainer from "./components/tabbar/HomeContainer.vue"
import MemberContainer from "./components/tabbar/MemberContainer.vue"
import SearchContainer from "./components/tabbar/SearchContainer.vue"
import ShopcarContainer from "./components/tabbar/ShopcarContainer.vue"

import Newslist from "./components/news/NewsList.vue"

import NewsInfo from './components/news/NewsInfo.vue'



import PhotoList from "./components/photos/PhotoList.vue"
import PhotoInfo from "./components/photos/PhotoInfo.vue"

import GoodList from "./components/goods/GoodList.vue"

var router = new VueRouter({
    routes: [{
        path: '/',
        redirect: "/home"
    }, {
        path: "/home",
        component: HomeContainer
    }, {
        path: "/member",
        component: MemberContainer
    }, {
        path: '/search',
        component: SearchContainer
    }, {
        path: "/shopcar",
        component: ShopcarContainer
    }, {
        path: "/home/newslist",
        component: Newslist
    }, {
        path: "/home/newslist/newsinfo/:id",
        component: NewsInfo
    }, {
        path: "/home/photolist",
        component: PhotoList
    }, {
        path: "/home/photoinfo/:id",
        component: PhotoInfo
    }, {
        path: "/home/goodlist",
        component: GoodList
    }],
    linkActiveClass: 'mui-active'
})

export default router