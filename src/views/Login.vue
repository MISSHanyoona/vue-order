<template>
    <div class="row mt-3">
        <div class="col-sm-12 col-lg-12">
            <div class="card">
                <div class="card-body">
                    <img class="mx-auto d-block" src="../../src/assets/icon.jpg">
                    <form @submit.prevent="onSubmit">
                        <div class="form-group">
                            <label for="email">邮箱</label>
                            <input type="email" class="form-control" v-model="email">
                        </div>

                        <div class="form-group">
                            <label for="password">密码</label>
                            <input type="password" class="form-control" v-model="password">
                        </div>

                        
                        <button class="btn btn-block btn-success" type="submit">登录</button>
                    </form>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods:{
        onSubmit(){
            
        }
    }
    
}
</script>

<style scoped>

</style>


