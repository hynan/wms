<template>
  <div>
    <div class="right-topTitle">
      单据号：{{info.basicInfo.checkBillCode}}
    </div>
    <div class="right-content">
      <div class="right-content-body">
        <el-row style="padding: 5px;margin-top: 10px">
          <el-steps :active="progress" align-center finish-status="success">
            <el-step :title="item" v-for="item,index in checkStockBillStatus" :key="index"></el-step>
          </el-steps>
        </el-row>
        <div style="padding: 5px;height: 187px">
          <span class="right-content-body-little-title">
            基本信息
          </span>
          <info :info="info.basicInfo"></info>
        </div>
        <div style="padding: 5px">
          <span class="right-content-body-little-title">
            明细信息
          </span>
          <detail-table :tableData="info.detailList"></detail-table>
        </div>
        <div style="padding: 5px">
          <span class="right-content-body-little-title">
            审核信息
          </span>
          <el-table :data="info.reviewList" border  style="width:98.2%;margin:5px auto">
            <el-table-column prop="reviewDate" label="审核时间" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="reviewerName" label="审核人" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="reveiwResultKey" width="100" label="审核结果" align="center" :show-overflow-tooltip="true">
              <span slot-scope="sp">{{sp.row.reveiwResultKey|enumtext(YesNo)}}</span>
            </el-table-column>
            <el-table-column prop="refuseReason" label="拒绝原因" align="center" :show-overflow-tooltip="true"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import Info from "./Info.vue"
    import DetailTable from "./DetailTable.vue"
    export default{
        name:"AllocationInfo",
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
                progress:0,
                checkStockBillStatus:[]
            }
        },
        methods:{
            doAjax(){
                this.$http.post('/ys-web-wms/check/getInfo',{id:this.$route.params.id}).then(
                    (res)=>{
                        this.info=Object.assign({
                            basicInfo:{},
                            detailList:[],
                            reviewList:[]
                        },res.data.data)
                        this.$store.commit('SET_CURRENTROW',this.info.basicInfo)
                        this.progress = (res.data.data&&res.data.data.progressBar)?res.data.data.progressBar.currProgressIndex:0
                        this.checkStockBillStatus = (res.data.data&&res.data.data.progressBar)?res.data.data.progressBar.progressNameArray:[]
                    }
                )
            }
        },
        computed:{
            YesNo(){
                return this.$store.state.enumList.YesNo
            },
        },
        watch:{
            '$route'(){
                this.doAjax()
            }
        },
    components:{
      "info":Info,
      "detail-table":DetailTable
    }
  }
</script>
<style>

</style>
