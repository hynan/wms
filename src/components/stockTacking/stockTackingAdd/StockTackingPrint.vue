<template>
  <div >
    <div>
      <div class="right-content-body">
        <div class="print-title">
          盘点单
        </div>
        <div style="padding: 5px;">
          <!--<span class="right-content-body-little-title">基本信息</span>-->
          <info :info="info.basicInfo"></info>
        </div>
        <div style="padding: 5px">
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
  import Info from "../stockTackingInfo/Info.vue"
  import DetailTable from "../stockTackingInfo/DetailTable.vue"
  export default{
    name:"StockTackingPrint",
    props:["id"],
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
      doAjax(){
          this.$http.post('/ys-web-wms/check/getInfo', {id: this.$route.params.id}).then(
              (res) => {
                  this.info = Object.assign({
                      basicInfo: {},
                      detailList: [],
                      reviewList: []
                  }, res.data.data)
              }
          )
      },
      print(){
        window.print();
      },
      closePrint(){
          this.$emit('close')
      }
    },
    components:{
      "info":Info,
      "detail-table":DetailTable
    },
      watch:{
        id(){
            this.doAjax()
        }
      },
      computed:{
          YesNo(){
              return this.$store.state.enumList.YesNo
          },
      },
  }
</script>
<style>

</style>
