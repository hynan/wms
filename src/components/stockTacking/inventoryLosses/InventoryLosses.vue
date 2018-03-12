<template>
  <div>
    <div class="right-topTitle">
      单据号：{{info.basicInfo.checkBillCode}}
    </div>
    <div class="right-content">
      <div class="right-content-body">
        <div style="padding: 5px;height: 157px">
          <span class="right-content-body-little-title">
            基本信息
          </span>
          <info :info="info.basicInfo"></info>
        </div>
        <div style="padding: 5px">
          <span class="right-content-body-little-title">
            明细信息
          </span>
            <el-table :data="detailList" border style="width: 100%" @selection-change="handleSelectionChange">
              <el-table-column align="center" type="selection" width="55" :selectable="handleSelectable"></el-table-column>
              <!--<el-table-column prop="barCode" label="库存条码" align="center" :show-overflow-tooltip="true"></el-table-column>-->
              <el-table-column prop="storageBin" label="货位" align="center" :show-overflow-tooltip="true"></el-table-column>
              <el-table-column prop="materialName" label="物料名称" align="center" :show-overflow-tooltip="true"></el-table-column>
              <el-table-column prop="materialCode" label="物料编码" align="center" :show-overflow-tooltip="true"></el-table-column>
              <el-table-column prop="materialModel" label="型号" align="center" :show-overflow-tooltip="true"></el-table-column>
              <el-table-column prop="specification" label="规格" align="center" :show-overflow-tooltip="true"></el-table-column>
              <el-table-column prop="stockInAmount" label="出库数量" min-width="150" align="center" :show-overflow-tooltip="true">
                <template slot-scope="scope">
                    <el-input-number size="mini" v-model.number="scope.row.stockInAmount"   :step="1" :min="0" controls-position="right" :max="scope.row.inventoryProfitAmount"></el-input-number>
                </template>
              </el-table-column>
              <el-table-column prop="inventoryProfitAmount" label="盘亏数量" align="center" :show-overflow-tooltip="true" >
              </el-table-column>
              <el-table-column prop="inOrOutAmount" label="已盘数量" align="center" :show-overflow-tooltip="true" >
                <span slot-scope="sp">{{sp.row.inOrOutAmount?sp.row.inOrOutAmount:0}}</span>
              </el-table-column>
              <el-table-column prop="materialOwnerId" label="物料所有人" min-width="150" align="center" :show-overflow-tooltip="true">
                <template slot-scope="scope">
                    <el-select size="mini" v-model="scope.row.materialOwnerId" @change="handleOwner(scope.row)"><el-option v-for="item in userList" :key="item.id" :label="item.name" :value="item.id"></el-option></el-select>
                </template>
              </el-table-column>
              <el-table-column prop="productBatch" label="产品批次" align="center" :show-overflow-tooltip="true">
                <template slot-scope="scope">
                  <el-input size="mini" v-model="scope.row.productBatch"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="centralOrderNum" label="总公司订单号" width="120" align="center" :show-overflow-tooltip="true">
                <template slot-scope="scope">
                  <el-input size="mini" v-model="scope.row.centralOrderNum"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="filialeOrderNum" label="分公司订单号" width="120" align="center" :show-overflow-tooltip="true">
                <template slot-scope="scope">
                  <el-input size="mini" v-model="scope.row.filialeOrderNum"></el-input>
                </template>
              </el-table-column>
            </el-table>
          <div style="text-align: right;padding: 7px;">
            <!--<el-button size="mini" :disabled="uploading" @click="submit('saveInventoryLosses')">保存</el-button>-->
            <el-button size="mini" :disabled="uploading" type="primary" @click="submit('subInventoryLosses')">提交</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import Info from "../stockTackingInfo/Info.vue"
    export default{
        name:"InventoryProfit",
        mounted(){
            this.doAjax()
        },
        data(){
            return{
                info:{
                    basicInfo:{}
                },
                form:{
                    detailList:[],
                },
                detailList:[],
                rules:{
                    stockInAmount:[]
                },
                uploading:false
            }
        },
        methods:{
            handleOwner(row){
                for(let item of this.userList){
                    if(item.id == row.materialOwnerId){
                        row.materialOwnerName = item.name
                    }
                }
            },
            handleSelectionChange(val){
                this.form.detailList = val
            },
            handleSelectable(row, index){
                return row.stockInAmount>0
            },
            doAjax(){
                this.$http.post('/ys-web-wms/check/getInfo', {id: this.$route.params.id}).then(
                    (res) => {
                        this.info = Object.assign({
                            basicInfo: {},
                        }, res.data.data)
                    }
                )
                this.$http.post('/ys-web-wms/check/getOutList', {id: this.$route.params.id}).then(
                    (res) => {
                        this.detailList = res.data.data?res.data.data:[]
                    }
                )
            },
            submit(val){
                if(!this.form.detailList||this.form.detailList.length<1){
                    this.$message({
                        'type': 'warning',
                        message: "请选择明细",
                        'showClose': true
                    });
                    return false
                }
                        this.form.warehouseId = this.info.basicInfo.checkWarehouseId
                        this.form.warehouseName = this.info.basicInfo.checkWarehouseName
                        this.form.checkBillId = this.info.basicInfo.checkBillId
                        this.form.checkBillCode = this.info.basicInfo.checkBillCode
                        this.$http.post("/ys-web-wms/check/" + val, {params: JSON.stringify(this.form)})
                            .then((response) => {
                                if (response.data.data.status == '200') {
                                    this.$message({
                                        'type': 'success',
                                        message: "操作成功",
                                        'showClose': true
                                    });
                                    this.$router.push('/stockTacking/detail/' + this.$route.params.id + '/info')
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
            userList(){
                return this.$store.state.selectList.allPersons
            },
        },
        components:{
            "info":Info,
        }
    }
</script>
<style>

</style>
