<template>
    <div class="mains">
      <img src="../assets/logo.png">
        <a-form
                :form="form"
        >
            <a-form-item>
                <a-input v-decorator="['userName',{rules:[{required:true,message:'请输入用户名'}]}]" placeholder="请输入用户名">
                    <a-icon slot="prefix" type="user"/>
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-input v-decorator="['password',{rules:[{required:true,message:'请输入密码'}]}]" type="password"
                         placeholder="请输入密码">
                    <a-icon slot="prefix" type="lock"/>
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-button type="primary" block @click="handleSubmit">登录</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                labelCol: {
                    span: 4
                },
                wrapperCol: {
                    span: 8
                },
                tailFormItemLayout: {
                    labelCol: {
                        span: 4
                    },
                    wrapperCol: {
                        span: 8
                    },
                }
            }
        },
        beforeCreate() {
            this.form = this.$form.createForm(this)
        },
        created() {
            let that = this
            document.onkeypress = function (e) {
                var keycode = document.all?event.keyCode:e.which;
                if(keycode == 13) {
                    that.handleSubmit()
                    return false
                }
            }
        },
        methods: {
            handleSubmit() {
              this.form.validateFields((err,values) =>{
                if(!err){
                  if (values.userName == 'admin' && values.password == '123'){
                    this.$router.push({path: '/index'})

                  }
                }
              })
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    a {
        color: #42b983;
    }

    .mains {
        background-color: #F0FBF6;
    }

    /*.login-form-button{*/
    /*  width: 100%;*/
    /*  margin-left: 315px;*/
    /*}*/
</style>
