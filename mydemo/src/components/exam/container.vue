<template>
    <div class="container">
        <div class="sub">
            <router-link to="javaacript:;">
            <img src="../../../static/container/can1.png">
            </router-link>
            <p>红包</p>
        </div>
        <div class="sub">
            <router-link to="javaacript:;">
            <img src="../../../static/container/can2.png">
            </router-link>
            <p>签到</p>
        </div>
        <div class="sub">
            <router-link to="javaacript:;">
            <img src="../../../static/container/can3.png">
            </router-link>
            <p>新品</p>
        </div>
        <div class="sub">
            <router-link to="javaacript:;">
            <img src="../../../static/container/can4.png">
            </router-link>
            <p>团购</p>
        </div>
        <div class="sub">
            <router-link to="javaacript:;">
            <img src="../../../static/container/can5.png">
            </router-link>
            <p>分类</p>
        </div>
        <div class="sub">
            <router-link to="javaacript:;">
            <img src="../../../static/container/can6.png">
            </router-link>
            <p>生活</p>
        </div>
        <div class="sub">
            <router-link to="javaacript:;">
            <img src="../../../static/container/can7.png">
            </router-link>
            <p>秀秀</p>
        </div>
        <div class="sub">
            <router-link to="javaacript:;">
            <img src="../../../static/container/can8.png">
            </router-link>
            <p>达人</p>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {}
        }
    }
</script>
<style scoped>
    .container{
        width:100%;
        height:150px;
        background-color:#fff;
        display: flex;
        justify-content:center;        
        flex-wrap: wrap;
        margin-top:25px;
    }
    .sub{
        width:40px;
        height:40px;
        margin-left:10px;
        margin-right:10px;
        margin-top:10px;
    }
    .sub img{
        width:100%;
        height:100%;
    }
    .sub p{
        text-align: center;
        color: #686868;
        font-size: 12px;
        margin-top:0px;
    }
</style>