<template>
    <div class="newsinfo-container">
        <h3 class="title">{{newsinfo.title}}</h3>
        <p class="subtitle">
            <span>{{newsinfo.add_time|dataFormat}}</span>
            <span>点击:{{newsinfo.click}}次</span>
        </p>
        <hr>
        <div class="content" v-html="newsinfo.content"></div>
        <comment :id="this.id"></comment>
    </div>
</template>
<script>

import axios from "axios"
import {Toast} from "mint-ui"
import comment from "../subcomponents/Comments.vue"

export default {
    data(){
        return {
            newsinfo:[],
            id:this.$route.params.id
        }
    },
    created(){
        
        this.getNewsInfo()

    },
    methods:{
        getNewsInfo(){
            axios.get("api/getnew/"+this.id).then(res=>{
                if(res.data.status===0){
                    this.newsinfo=res.data.message[0]
                    //console.log(res.data.message[0].content);
                }else{
                    Toast("获取详细信息失败")
                }
            })

        },
 
    },
    components:{
        comment
    }

}
</script>
<style lang="less" scoped>
.newsinfo-container{
    padding: 0 4px;
    .title{
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color: lightcoral;
    }
    .subtitle{
        color:lightskyblue;
        display: flex;
        justify-content: space-between;
    }
    .content{
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>
