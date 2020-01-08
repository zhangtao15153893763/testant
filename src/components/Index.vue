<template>
  <div class="wrap">
    <div class="header">
      <div class="leftdiv">消息</div>
      <div class="rightdiv">
        <span @click="searchfor">搜索</span>
        <span>+</span>
      </div>

    </div>
    <div class="main">
      <div v-for="item in msgArray" class="msgItem" @click="msgClick(item)">
        <img src="../assets/logo.png">
        {{item.name}} <br>
        {{item.msg}}
      </div>
    </div>
    <div class="footer">
      <div class="item" @click="clickItem('/index')">首页</div>
      <div class="item" @click="clickItem('/tongxunlu')">通讯录</div>
      <div class="item" @click="clickItem('/find')">动态</div>
      <div class="item" @click="clickItem('/my')">我的</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Index',
  data(){
    return {
      msgArray:[
        {
          name:'张三',
          msg:'hello vue'
        },
        {
          name:'李四',
          msg:'hello java'
        },
        {
          name:'王五',
          msg:'hello js'
        },
        {
          name:'赵六',
          msg:'hello world'
        },
        {
          name:'张三',
          msg:'hello vue'
        },
        {
          name:'李四',
          msg:'hello java'
        },
        {
          name:'王五',
          msg:'hello js'
        },
        {
          name:'赵六',
          msg:'hello world'
        },
        {
          name:'张三',
          msg:'hello vue'
        },
        {
          name:'李四',
          msg:'hello java'
        },
        {
          name:'王五',
          msg:'hello js'
        },
        {
          name:'赵六',
          msg:'hello world'
        },
        {
          name:'张三',
          msg:'hello vue'
        },
        {
          name:'李四',
          msg:'hello java'
        },
        {
          name:'王五',
          msg:'hello js'
        },
        {
          name:'赵六',
          msg:'hello world'
        },
        {
          name:'张三',
          msg:'hello vue'
        },
        {
          name:'李四',
          msg:'hello java'
        },
        {
          name:'王五',
          msg:'hello js'
        },
        {
          name:'赵六',
          msg:'hello world'
        }
      ]
    }
  },
  created() {
  },
  methods:{
    searchfor(){
      window.console.log(111111111111111111111111111111111111111)
    },
    clickItem(path){
      this.$router.push(path)
    },
    msgClick(item){
      this.$router.push()
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li {
    list-style: none;
  }
a {
  color: #42b983;
}
 html,body{
   height:100%;
 }
.wrap{
  display:-webkit-box;
  display:-webkit-flex;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-flex-direction:column;
  -ms-flex-direction:column;
  flex-direction:column;
  width:100%;
  height:100%;
}
.header,.footer{
  height:50px;
  line-height: 40px;
  background-color:#EDEDED;
  text-align:center;
}
main{
  -webkit-box-flex:1;
  -webkit-flex:1;
  -ms-flex:1;
  flex:1;
  width:100%;
  overflow:auto;/* winphone8和android4+ */
  -webkit-overflow-scrolling: touch; /* ios5+ */
}
  .leftdiv{
    float: left;
    margin-left: 20px;
    margin-right: 230px;
    margin-top: 5px;
  }
  .rightdiv{
    margin-top: 5px;
  }
  .header .rightdiv span{
    margin-right: 20px;
  }
  .header{
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #EDEDED;
  }
  .footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #EDEDED;
  }
  .item{
    margin: 5px 8%;
    float: left;
  }
  .msgItem{
    height: 50px;
    border-bottom: 1px solid #EFEFEF;
    text-align: left;
    padding-left: 5px;
  }
  .msgItem img{
    width: 50px;
    height: 50px;
    float: left;
  }

</style>
