<template>
  <div>
    <div  id="allocationPrint">
      <div class="right-content-body">
        <div class="print-title">
          调拨单
        </div>
        <div style="padding: 5px;">
          <!--<span class="right-content-body-little-title">基本信息</span>-->
          <info :info="info.basicInfo"></info>
        </div>
        <div style="padding: 5px;">
          <!--<span class="right-content-body-little-title">明细信息</span>-->
          <detail-table :tableData="info.detailList" :showTips="false"></detail-table>
        </div>
        <div class="not-print" style="height: 40px;padding-right: 2%">
          <el-button size="mini" style="float: right;margin: 10px;"  @click="closePrint">取消</el-button>
          <el-button size="mini" style="float: right;margin: 10px;" type="primary" @click="print">打印</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Info from "../allocationInfo/Info.vue"
  import DetailTable from "../allocationInfo/DetailTable.vue"
  export default{
    name:"AllocationPrint",
      props:['id'],
      mounted(){
          this.doAjax()
      },
      data(){
          return{
              info:{
                  basicInfo:{},
                  detailList:[],
                  reviewList:[]
              },
      }
    },
    methods:{
      print(){
          window.print();
      },
        closePrint(){
            this.$emit('close')
        },
            doAjax(){
                this.$http.post('/ys-web-wms/transfer/getInfo',{id:this.id}).then(
                    (res)=>{
                        this.info=Object.assign({
                            basicInfo:{},
                            detailList:[],
                            reviewList:[]
                        },res.data.data)
                    }
                )
            }
        },
        computed:{
            YesNo(){
                return this.$store.state.enumList.YesNo
            },
        },
    components:{
      "info":Info,
      "detail-table":DetailTable
    },
      watch:{
          id(){
              this.doAjax()
          }
      }
  }
</script>
<style>
.printContent{
  position: absolute;
  display:none;
  background:#fff;
  width:100%;
  height:100%;
  z-index:9999;
}
</style>
