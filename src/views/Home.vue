<template>
    <div class="row">
        <div id="home" class="col-sm-12 text-center">
            <div class="background">
                <h1>欢迎大家来品尝pizza</h1>
                <h2>这里有你非常喜欢的pizza</h2>
                <button class="btn btn-success" @click="handle">Let's order</button>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        handle(){
            // 跳转到上一次浏览界面
            // this.$router.go(-1)

            // 
            // this.$router.push({name: 'loginLink'})
            
        }
    }
    
}
</script>

<style scoped>
/* vh vw 在谷歌浏览器支持较好 */
#home{
    background: url('../../src/assets/pizza.jpg');
    height: 85vh;
    padding: 10%;
}
h1,h2{
    margin: 6%;
}
.background{
    background: #eee;
    opacity: 0.8;
    max-width: 70vw;
    margin: 0 auto;
    padding: 20px 0;
}

</style>


