<template >
    <div class="home-container">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
          <!-- 展示页 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/newslist">
                    <img src="../../assets/images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/photolist">
                    <img src="../../assets/images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/goodlist">
                    <img src="../../assets/images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <a>
                    <img src="../../assets/images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <a>
                    <img src="../../assets/images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <a>
                    <img src="../../assets/images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from "axios"
import {Toast} from "mint-ui"
export default {
    data(){
        return {
            lunbotuList:null         
        }
    },
    created(){
        this.getSwipe()
    },
    methods:{
        getSwipe(){
           axios.get("api/getlunbo")
            .then(res=>{
                //console.log(res);                
                if(res.data.status===0){
                    this.lunbotuList=res.data.message
                }else{
                    Toast("加载轮播图失败")
                }                
            })
        }
    }      
}
</script>
<style lang="less" scoped>
    .mint-swipe{
        height: 200px;
        img{
            width:100%;
            height: 100%;
        }
    }

    
    .mui-grid-view.mui-grid-9{
        border:none;
        background-color: #fff;
        .mui-table-view-cell{
            border:0; 
            img{
                width: 60px;
                height: 60px;
            }             
        }
    }
</style>
