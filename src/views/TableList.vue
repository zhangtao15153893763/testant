<template>
  <div>
    <a-table :columns="columns" :dataSource="dataSource" v-model="visible">
      <a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>
      <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
      <span slot="tags" slot-scope="tags">
	      <a-tag v-for="tag in tags" color="blue" :key="tag">{{tag}}</a-tag>
	    </span>
      <span slot="action" slot-scope="text, record">
	      <a href="javascript:;">Invite 一 {{record.name}}</a>
	      <a-divider type="vertical" />
	      <a href="javascript:;">Delete</a>
	      <a-divider type="vertical" />
	      <a href="javascript:;" class="ant-dropdown-link">
	        More actions <a-icon type="down" />
	      </a>
	    </span>
    </a-table>
    <a-button @click="test">测试</a-button>

    <!-- <test-modal ref="abc"></test-modal> -->
    <modal-list ref="abc"></modal-list>
  </div>
</template>



<script>

  import { Table } from 'ant-design-vue';
  import ModalList from "./ModalList";

  const dataSource= [
    {
      1:15,2:20,3:25
    },
    {
      1:1,2:2,3:3,
    },
    {
      1:12,2:23,3:25
    },
  ]

  export default{
    name:'TableList',
    components:{
      ModalList
    },
    data(){
      return{
        description:'测试表格页面',
        dataSource:[],
        visible:true,
        columns:[
          {
            title:'aaaa',
            align:'center',
            dataIndex:'aaa',
            customHeaderCell(column){
            	return{
            		on:{
            			click:() =>{
            			  console.log(column)
                    console.log("::::::::::::::::",window)
            			}
            		}
            	}
            }

          },
          {
            title:'bbbb',
            align:'center',
            dataIndex:'bbb'
          },
          {
            title:'cccc',
            align:'center',
            dataIndex:'ccc'
          }
        ],
        dataSource :[
          {
            aaa:15,bbb:20,ccc:25
          },
          {
            aaa:1,bbb:2,ccc:3,
          },
          {
            aaa:12,bbb:23,ccc:25
          },
        ]

      }
    },
    methods:{
      loadData(){
      },
      test(){
        // this.$refs.abc.show()
      }
    },
    created(){
      this.loadData()
    }
  }
</script>

<style>
  @import "../assets/less/common.less";
</style>
