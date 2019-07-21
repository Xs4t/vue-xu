<template>
  <div>
      <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <span :class="['mui-control-item',item.id==0?'mui-active':0]" v-for="item in cates" :key="item.id" @tap="getPhotoListBycateId(item.id)">{{item.title}}</span>
        </div>
      </div>
    </div>
    <ul class="photo-list">
      <router-link v-for="item in list" :key="item.id" tag="li" :to="'/home/photoinfo/'+item.id">
        <img v-lazy="item.img_url">
        <div class="info">
          <div class="info-title">{{item.title}}</div>
          <div class="info-body">{{item.zhaiyao}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
import mui from "../../assets/lib/mui/js/mui.js";
import axios from "axios"
mui("body").on("tap", "a", function() {
  mui.openWindow({
    url: this.href
      })
  })
export default {
  created(){
    this.getAllCategory(),
    this.getPhotoListBycateId(0)


  },
  mounted() {
    // 如果要操作元素,最好在mounted里面,因为这个时候dom元素是最新的
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  data() {
    return {
      cates:[],
      list:[],
    };
  },
  methods: {
    getAllCategory(){
      axios.get("api/getimgcategory").then(res=>{
        if(res.data.status==0){
          //console.log(res.data);          
          res.data.message.unshift({title:"全部",id:0})
          this.cates=res.data.message      
        }
      })
    },
    getPhotoListBycateId(id){
      axios.get("api/getimages/"+id).then(res=>{
        console.log(res.data);       
        if(res.data.status==0){
          this.list=res.data.message
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
* {
  touch-action: pan-y;
}
.photo-list{
  list-style: none;
  padding: 10px;
  margin: 0;
  margin-bottom: 0;
  li{
    text-align: center;
    position: relative;
    margin-top: 10px;
    box-shadow: 0 0 9px #999;
    img[lazy=loading] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    img{
      width: 100%;
      vertical-align: middle;
    }
    .info{
      position: absolute;
      bottom: 0;
      background-color: rgba(0,0,0,.4);
      text-align: left;
      color: white;
      max-height: 84px;
      .info-title{
        font-size: 15px;

      }
      .info-body{
        font-size: 13px;

      }
    }
  }

}
</style>
