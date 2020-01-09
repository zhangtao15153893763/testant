<template>
  <div class="wrap">
    <div class="header">
      <a-input-search style="width: 98%;" @search="onSearch" />
    </div>
    <div class="main">

    </div>
    <div class="footer">

    </div>
  </div>
</template>

<script>

export default {
  name: 'Search',
  data(){
    return {
      name:'',
      msg:''
    }
  },
  created() {
  },
  methods:{
    onSearch(){
      console.log("点击搜索按钮")
    },

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
