<template>
  <div class="wrap">
    <div class="header">
      <div class="leftdiv">
        <span @click="fanhui">&lt;</span>
        &nbsp;&nbsp;{{name}}
      </div>
      <div class="rightdiv">
        <span></span>
        <span></span>
      </div>

    </div>
    <div class="main">
      {{msg}}
    </div>
    <div class="footer">
      <a-input style="width: 80%"/><a-button style="width: 20%">发送</a-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Details',
  data(){
    return {
      name:'',
      msg:''
    }
  },
  created() {
    this.getData()
  },
  methods:{
    searchfor(){

    },
    getData(){
      let name = this.$route.query.item.name
      let msg = this.$route.query.item.msg
      // console.log(name+"::::::::::::"+msg)
      this.name = name
      this.msg = msg
    },
    fanhui(){
      this.$router.push('/index')
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
  text-align:center;
  background-color: #EDEDED;
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
    margin-right: 30px;
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

</style>
