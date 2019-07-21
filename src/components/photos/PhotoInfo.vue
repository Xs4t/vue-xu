<template>
    <div class="photoinfo-container">
        <h3>{{photoinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间:{{photoinfo.add_time|dataFormat}}</span>
            <span>点击次数:{{photoinfo.click}}次</span>
        </p>
        <hr>
        <!-- 缩略图 -->
        <div class="thumbs">
            <vue-preview :slides="list" @close="handleClose"></vue-preview>
        </div>

        <div class="content" v-html="photoinfo.content"></div>
        <comment :id="id"></comment>
    </div> 
</template>
<script>
import axios from "axios"
import comment from "../subcomponents/Comments"
export default {
    created(){
        this.getPhotoList(),
        this.getThumbs()

    },
    data(){
       return {
           id:this.$route.params.id,
           photoinfo:[],
           list:[],      
       }
    },
    methods:{
        getPhotoList(){
            axios.get("api/getimageInfo/"+this.id).then(res=>{
               // console.log(res.data);                
                if(res.data.status==0){
                    this.photoinfo=res.data.message[0]
                }
            })
        },
        getThumbs(){
            axios.get("api/getthumimages/"+this.id).then(res=>{  
                console.log(res.data);                              
                if(res.data.status==0){
                    this.list=res.data.message
                    this.list.forEach(item => {
                        item.w=600
                        item.h=400
                        item.msrc=item.src                      
                    })                  
                }           
            })
        },
        handleClose () {
         console.log('close event')
        }
    },
    components:{
        comment,
    }   
}
</script>
<style lang="less">
.photoinfo-container{
    padding: 3px;
    .thumbs{
        overflow-x: hidden;
        img{
            padding: 0;
            margin: 0;
            margin-right: 5px;
            margin-bottom: 5px;
            float: left;
             width: 100px;
             height: 100px;
             box-shadow: 0 0 8px #999;            
        }
    }
    h3{
        font-size: 15px;
        padding: 5px 0;
        color: lightcoral;
    }
    .subtitle{
        color: black;
        padding-top:5px;
        display: flex;
        justify-content: space-between;
        background:linear-gradient(to right,#7A88FF, #7AFFAF)
    }
    .content{
        line-height: 30px;
        font-size: 14px;
        color:#282C34;
        background: linear-gradient(to right,#E94E65, #15A892 20%, #A89215 80%, #1574A8)
    }
}
</style>
