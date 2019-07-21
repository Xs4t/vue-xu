<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>              
        <div class="mui-content">  
            <textarea placeholder="请输入要BB的内容(最多120个字)" maxlength="120" v-model="msg"></textarea>
        </div>    
    <mt-button type="primary" size="large" @click="postComments">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,i) in comments" :key="i">
        <div
          class="cmt-title"
        >第{{ i + 1 }}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time|dataFormat}}</div>
        <div class="cmt-content">{{item.content}}</div>
      </div>
    </div>
    <mt-button type="primary" size="large" @click="getmore" plain>加载更多</mt-button>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import axios from "axios";
export default {
  data() {
    return {
      comments: [],
      pageIndex: 1,
      msg: ""
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      axios
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex)
        .then(res => {
          //console.log(res.data);
          if (res.data.status === 0) {
            this.comments = this.comments.concat(res.data.message);
          } else {
            Toast("获取评论失败");
          }
        });
    },
    getmore() {
      this.pageIndex++;
      this.getComments();
    },
    postComments() {
      if (this.msg.trim().length === 0) {
        return Toast("评论内容不能为空!");
      }
      axios
        .post("api/postcomment/" + this.id, { content: this.msg.trim() })
        .then(res => {
          if (res.data.status === 0) {
            var cmt = {
              user_name: "匿名用户",
              add_time: Date.now(),
              content: this.msg.trim()
            };
            this.comments.unshift(cmt);
            this.msg = "";
          }
        });
    }
  },
  props: ["id"]
};
</script>
<style lang="less" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
    text-align: left;
  }
  textarea {
    height: 85px;
    margin: 0;
    font-size: 14px;
  }
  .cmt-list {
    margin: 5px 0;
    font-size: 14px;
    .cmt-item {
      text-align: left;
      .cmt-title {
        line-height: 30px;
        background:linear-gradient(to right,rgb(166, 4, 249),rgb(251, 223, 11))
      }
      .cmt-content {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
