<template>
  <div class="toExamine">
    <div class="right-topTitle">
      单据号：{{info.basicInfo.damageBillCode}}
    </div>
          <span class="right-content-body-little-title">
            基本信息
          </span>
          <info :info="info.basicInfo"></info>
          <span class="right-content-body-little-title">
            明细信息
          </span>
          <detail-table :tableData="info.detailList"></detail-table>
          <span class="right-content-body-little-title">
            审核信息
          </span>
          <el-table :data="info.reviewList" border style="width: 98%;margin:5px auto">
            <el-table-column prop="reviewDate" label="审核时间" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="reviewerName" label="审核人" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="reveiwResultKey" label="审核结果" align="center" :show-overflow-tooltip="true">
              <span slot-scope="sp">{{sp.row.reveiwResultKey|enumtext(YesNo)}}</span>
            </el-table-column>
            <el-table-column prop="refuseReason" label="拒绝原因" align="center" :show-overflow-tooltip="true"></el-table-column>
          </el-table>
      <el-form label-width="130px"   style="width: 98%;margin:5px auto" >
        <el-form-item label="是否同意:">
          <el-switch
                  v-model="doesAgreeFlag"
                  :active-text="YesNo[0].name"
                  :inactive-text="YesNo[1].name"
                  :active-value="YesNo[0].code"
                  :inactive-value="YesNo[1].code">
          </el-switch>
        </el-form-item>
        <el-form-item label="拒绝原因:"  v-if="doesAgreeFlag==YesNo[1].code" >
          <el-input size="mini" style="width: 80%" v-model="refuseReason"></el-input>
        </el-form-item>
      </el-form>
    <div>
      <el-button size="mini" type="primary" style="float: right;margin: 10px" @click="submit" :disabled="uploading">提交</el-button>
    </div>
  </div>
</template>
<script>
  import Info from "../reportedLossInfo/Info.vue"
  import DetailTable from "../reportedLossInfo/DetailTable.vue"
  export default{
    name:"ToExamine",
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
              doesAgreeFlag:2,
              refuseReason:'',
              uploading:false,
          }
      },
      methods:{
          doAjax(){
              this.$http.post('/ys-web-wms/damage/getInfo',{id:this.$route.params.id}).then(
                  (res)=>{
                      this.info=Object.assign({
                          basicInfo:{},
                          detailList:[],
                          reviewList:[]
                      },res.data.data)
                  }
              )
          },
          submit(){
              if (this.doesAgreeFlag == this.YesNo[1].code && !this.refuseReason) {
                  this.$message({
                      'type': 'warning',
                      message: "请输入拒绝原因",
                      'showClose': true
                  });
                  return false
              }
              let param = {billId: this.$route.params.id,doesAgreeFlag:this.doesAgreeFlag,
                  refuseReason:this.refuseReason,}
              this.$http.post("/ys-web-wms/damage/check", {params:JSON.stringify(param)})
                  .then((response) => {
                      if (response.data.data.status == '200') {
                          this.$message({
                              'type': 'success',
                              message: "操作成功",
                              'showClose': true
                          });
                          this.$router.push('/reportedLoss/detail/' + this.$route.params.id + '/info')
                      } else {
                          this.$message({
                              'type': 'error',
                              message: "操作失败，,请重试或联系管理",
                              'showClose': true
                          });
                          this.uploading = false
                      }
                  })
                  .catch((error) => {
                      console.log(error)
                      this.uploading = false
                  });
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
    }
  }
</script>
<style>
  .toExamine-submit .right-content-body-tableForm{margin-left: 0px}
</style>
