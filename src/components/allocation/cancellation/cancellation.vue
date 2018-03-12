<template>
  <div>
    <div class="right-topTitle">
      单据号：RK201712040001
    </div>
    <div class="right-content">
      <div class="right-content-body">
        <div class="right-content-body-topTitle">
          作废调拨单
        </div>
        <div style="padding: 5px;">
          <el-row style="margin-top: 17px" class="right-content-body-tableCss">
            <el-col :span="2" class="right-content-body-tableCss-left">作废原因:</el-col>
            <el-col :span="22" class="right-content-body-tableCss-right">
              <el-input
                type="textarea"
                :rows="7"
                placeholder="请输入原因"
                v-model="cancelReason">
              </el-input>
            </el-col>
          </el-row>
        </div>
        <div style="height: 40px">
        <el-button size="mini" type="primary" style="float: right;margin: 10px" @click="submit" :disabled="uploading">保存</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:"Cancellation",
    mounted(){

    },
    data(){
      return{
          cancelReason:"",
          uploading:false
      }
    },
    methods:{
        submit(){
            if (!this.cancelReason) {
                this.$message({
                    'type': 'warning',
                    message: "请输入作废原因",
                    'showClose': true
                });
                return false
            }
            this.$http.post("/ys-web-wms/transfer/cancel", {reason:this.cancelReason,id:this.$route.params.id})
                .then((response) => {
                    if(response.data.state == 500){
                        this.$message({
                            'type': 'warning',
                            message: response.data.message,
                            'showClose': true
                        });
                        this.uploading = false
                    }
                    else if (response.data.data.status == '200') {
                        this.$message({
                            'type': 'success',
                            message: "操作成功",
                            'showClose': true
                        });
                        this.$router.push('/allocation/detail/' + this.$route.params.id + '/info')
                    }else {
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
    }
  }
</script>
<style>

</style>
