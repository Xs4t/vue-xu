<template>
  <div id="app">
    <!-- topNav -->
    <header>
      <mt-header fixed title="传智播客,黑马程序员"></mt-header>
    </header>
    <!-- main区域 -->
    <transition>
        <router-view></router-view>
    </transition>

    <!-- TabBar -->
    <nav class="mui-bar mui-bar-tab">
		<router-link class="mui-tab-item" to="/home">
			<span class="mui-icon mui-icon-home"></span>
			<span class="mui-tab-label">首页</span>
		</router-link>
		<router-link class="mui-tab-item" to="/member">
			<span class="mui-icon mui-icon-contact"></span>
			<span class="mui-tab-label">会员</span>
		</router-link>
		<router-link class="mui-tab-item" to="/shopcar">
			<span class="mui-icon mui-icon-extra  mui-icon-extra-cart">
                <span class="mui-badge">0</span>
            </span>
			<span class="mui-tab-label">购物车</span>
		</router-link>
		<router-link class="mui-tab-item" to="/search">
			<span class="mui-icon mui-icon-search"></span>
			<span class="mui-tab-label">搜索</span>
		</router-link>
	</nav>
  </div>
</template>


<script>
export default {
  
}
</script>

<style scoped lang="less">
.mint-header{
	z-index: 999;
}
html,
body{
	height: 100%;
	background-color: #fff!important;
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	padding-top: 40px;
	padding-bottom: 50px;
	//解决底部有滚动条
	// position: absolute;
	height: 100%;
	overflow-x: hidden;
	 background-color: #fff;
 	header{
		background-color:#3A84A9;
	}
	.mui-bar.mui-bar-tab{
		background-color:#3A84A9;
		.mui-tab-item{
			color:#fff;
		}
		.mui-active{
			color:darkorange;
		}
	}	
}
	//设置动画
	.v-enter,
	.v-leave-to {
		opacity: 0;
	}
	.v-enter {
		transform: translateX(100%);
	}
	//解决滑动划出不流畅
	.v-leave-to {
		transform: translateX(-100%);
		position: absolute;
	}

	.v-enter-active,
	.v-leave-active {
		transition: all .5s ease;
	}
</style>
