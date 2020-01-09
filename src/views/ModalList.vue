<template>
  <a-modal
    title="test modal"
    v-model = "visible"
    @ok="handleOk"
    @close="handleClose"
    :width="1000"
  >
    <a-card :bordered="false">
      <div style="height: 300px;border: 1px solid #000000;"></div>
    </a-card>

  </a-modal>
</template>

<script>
  import { Modal } from 'ant-design-vue';

  export default{
    name:'ModalList',
    data(){
      return{
        description:'testModal',
        visible:false

      }
    },
    methods:{
      loadData(){

      },
      handleOk(){
        this.visible = false
      },
      handleClose(){
        this.visible = false
      },
      show(){
        this.visible = true
      }

    },
    created(){
    }
  }
</script>

<style>
</style>
