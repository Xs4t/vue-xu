<template>
    <div class="goods-list">
        <div class="goods-item">
            <img src="https://img13.360buyimg.com/n7/jfs/t1/5064/31/3461/142209/5b997c0eE8b26d23e/8788a4743af36f36.jpg">
            <h1 class="title">111111111111111</h1>
            <div class="info">
                <p class="price">
                    <span class="now">¥11</span>
                    <span class="old">¥11</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩2件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="https://img13.360buyimg.com/n7/jfs/t1/5064/31/3461/142209/5b997c0eE8b26d23e/8788a4743af36f36.jpg">
            <h1 class="title">111111111111111</h1>
            <div class="info">
                <p class="price">
                    <span class="now">¥11</span>
                    <span class="old">¥11</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩2件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="https://img13.360buyimg.com/n7/jfs/t1/5064/31/3461/142209/5b997c0eE8b26d23e/8788a4743af36f36.jpg">
            <h1 class="title">111111111111111</h1>
            <div class="info">
                <p class="price">
                    <span class="now">¥11</span>
                    <span class="old">¥11</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩2件</span>
                </p>
            </div>
        </div>                              
    </div>          
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 7px;
   
    box-shadow: 0 0 8px #ccc;
    .goods-item{
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin: 3px 0;
        padding: 2px;
        min-height: 293px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .title{
            font-size: 14px;
        }
        img{
            width: 100%;
            
        }
        .info{
            background-color:#eee;
            p{
                margin: 0;
                padding: 5px;
            }
            .price{
                .now{
                    color: red;
                    font-weight:bold;
                    font-size: 16px;
                }
                .old{
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 10px;
                }

            }
            .sell{
                display: flex;
                justify-content: space-between;
            }
        }
    }

}
</style>
