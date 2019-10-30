<template>
    <div>
        <div class="div1">
            <router-link to="/my" tag="p"><</router-link>
            <h2>我的地址</h2>
        </div>
        <div class='div2'>
            <p>暂无数据</p>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        }
    }
</script>

<style lang="scss" scoped>
.div1{
    width:100%;
    height:1.2rem;
    border-bottom:1px solid gainsboro;
    display: flex;
    p{
        font-size:0.4rem;
        margin:0.2rem;
    }
    h2{
        margin: 0.34rem auto;
        font-size:0.32rem;
        font-weight: 520;
    }
}
.div2{
    width:100%;
    height:1rem;
    text-align: center;
    margin-top:3rem;
    p{
        font-size:0.4rem;
        color: gray;
    }
}
</style>