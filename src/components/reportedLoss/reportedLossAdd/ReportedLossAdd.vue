<template>
  <div style="padding:0 10px">
    <div class="right-topTitle">
    </div>
        <div class="right-content-body-topTitle">
          新建报损单
        </div>
          <span class="right-content-body-little-title">
            基本信息
          </span>
          <el-form ref="form" :model="form" label-width="130px" size="mini" style="width: 100%">
              <el-row style="width: 98%">
                <el-col :span="12">
              <el-form-item label="仓库名称:" prop="warehouseId" :rules="[
      { required: true, message: '请选择仓库', trigger: 'blur' },
    ]">
                <el-select clearable v-model="form.warehouseId"  placeholder="仓库名称" style="width: 100%" @change="handleSelect">
                  <el-option
                    v-for="item in whList"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
              </el-form-item>
                </el-col>
                <!--<el-col :span="12">-->
                  <!--<el-form-item label="外来单号:" >-->
                    <!--<el-select clearable v-model="form.externalCode" filterable placeholder="单据来源" size="mini"  style="width: 100%">-->
                      <!--<el-option-->
                              <!--v-for="item in whList"-->
                              <!--:key="item.id"-->
                              <!--:label="item.name"-->
                              <!--:value="item.id">-->
                      <!--</el-option>-->
                    <!--</el-select>-->
                  <!--</el-form-item>-->
                <!--</el-col>-->
            </el-row>
            <el-form-item label="备注:"  style="width: 98%">
              <el-input size="mini" placeholder="" v-model="form.remarks"></el-input>
            </el-form-item>
          </el-form>
        <!--明细信息-->
          <span style="font-style: normal;font-size: 12px;color: #2B7C9F;font-weight: bold;margin-left: 7px;">
              明细信息
          </span>
          <el-button size="mini" style="float: right;margin: 0px 7px 2px 0px" type="primary" @click="addDetail">添加明细</el-button>
      <el-form :model="form" ref="detailForm" :status-icon="true" :inline-message="true">
            <el-table :data="form.detailList" border style="width:100%" class="operation-table el-input el-input--mini">
              <el-table-column  label="库区" align="center" :show-overflow-tooltip="true" min-width="120">
                <template slot-scope="scope">
                  <el-form-item label="" :prop="'detailList.'+scope.$index+'.storeAreaCode'" v-if="scope.row.state=='edit'" :rules="rules.storeAreaCode">
                    <el-select  size="mini" v-model="scope.row.storeAreaCode" @change="handleArea(scope.row)"><el-option v-for="item in arealist" :value="item.code" :key="item.code" :label="item.name"></el-option></el-select>
                  </el-form-item>
                  <span v-else>{{scope.row.storeAreaCode}}</span>
                </template>
              </el-table-column>
              <el-table-column  label="货位" align="center" :show-overflow-tooltip="true" min-width="120">
                <template slot-scope="scope">
                  <el-form-item label="" :prop="'detailList.'+scope.$index+'.goodsAllocationCode'" v-if="scope.row.state=='edit'" :rules="rules.goodsAllocationCode">
                    <el-select size="mini" v-model="scope.row.goodsAllocationCode" @change="handleGoods(scope.row)"><el-option v-for="item in goodslist" :value="item.code" :key="item.code" :label="item.code"></el-option></el-select>
                  </el-form-item>
                  <span v-else>{{scope.row.goodsAllocationCode}}</span>
                </template>
              </el-table-column>
              <el-table-column  label="物料编码" align="center" :show-overflow-tooltip="true" min-width="120">
                <template slot-scope="scope">
                  <el-form-item label="" :prop="'detailList.'+scope.$index+'.materialCode'" v-if="scope.row.state=='edit'" :rules="rules.materialCode">
                    <el-select size="mini" v-model="scope.row.materialCode" @change="handleMCode(scope.row)"><el-option v-for="item in mCodelist" :label="item.materialCode" :value="item.materialCode" :key="item.materialCode"></el-option></el-select>
                  </el-form-item>
                  <span v-else>{{scope.row.materialCode}}</span>
                </template>
              </el-table-column>
              <el-table-column  label="物料名称" align="center" :show-overflow-tooltip="true" min-width="120">
                <template slot-scope="scope">
                  <!--<el-form-item label="" :prop="'detailList.'+scope.$index+'.materialName'" v-if="scope.row.state=='edit'" :rules="rules.materialName">-->
                    <!--<el-select size="mini" v-model="scope.row.materialName"></el-select>-->
                  <!--</el-form-item>-->
                  <span>{{scope.row.materialName}}</span>
                </template>
              </el-table-column>
              <el-table-column  label="物料类别" align="center" :show-overflow-tooltip="true" min-width="120">
                <template slot-scope="scope">
                  <!--<el-form-item label="" :prop="'detailList.'+scope.$index+'.materialCategoryCode'" v-if="scope.row.state=='edit'" :rules="rules.materialCategoryCode">-->
                    <!--<el-select size="mini" v-model="scope.row.materialCategoryCode"></el-select>-->
                  <!--</el-form-item>-->
                  <span>{{scope.row.materialCategoryName}}</span>
                </template>
              </el-table-column>
              <el-table-column  label="入库单号"  align="center" :show-overflow-tooltip="true" min-width="120">
                <template slot-scope="scope">
                  <el-form-item label="" :prop="'detailList.'+scope.$index+'.warehouseentryCode'" v-if="scope.row.state=='edit'" :rules="rules.warehouseentryCode">
                    <el-select size="mini" v-model="scope.row.warehouseentryCode" @change="handleSCode(scope.row)"><el-option v-for="item in sCodelist" :label="item.warehouseentryCode" :value="item.warehouseentryCode" :key="item.warehouseentryCode"></el-option></el-select>
                  </el-form-item>
                  <span v-else>{{scope.row.stockInDate}}</span>
                </template>
              </el-table-column>
              <el-table-column  label="存货条码" align="center" :show-overflow-tooltip="true" min-width="120">
                <template slot-scope="scope">
                  <el-form-item label="" :prop="'detailList.'+scope.$index+'.stockBarcode'" v-if="scope.row.state=='edit'" :rules="rules.stockBarcode">
                    <el-select size="mini" v-model="scope.row.stockBarcode" @change="handleBCode(scope.row)"><el-option v-for="item in bCodelist" :label="item.stockBarcode" :value="item.stockBarcode" :key="item.stockBarcode"></el-option></el-select>
                  </el-form-item>
                  <span v-else>{{scope.row.stockBarcode}}</span>
                </template>
              </el-table-column>
              <el-table-column  label="型号" align="center" :show-overflow-tooltip="true">
                <template slot-scope="scope">
                  <!--<el-form-item label="" :prop="'detailList.'+scope.$index+'.modelType'" v-if="scope.row.state=='edit'" :rules="rules.modelType">-->
                    <!--<input class="el-input__inner" size="mini" v-model="scope.row.modelType">-->
                  <!--</el-form-item>-->
                  <span>{{scope.row.modelType}}</span>
                </template>
              </el-table-column>
              <el-table-column  label="规格" align="center" :show-overflow-tooltip="true">
                <template slot-scope="scope">
                  <!--<el-form-item label="" :prop="'detailList.'+scope.$index+'.specification'" v-if="scope.row.state=='edit'" :rules="rules.specification">-->
                    <!--<input class="el-input__inner" size="mini" v-model="scope.row.specification">-->
                  <!--</el-form-item>-->
                  <span>{{scope.row.specification}}</span>
                </template>
              </el-table-column>
              <el-table-column  label="库存数量" align="center" :show-overflow-tooltip="true">
                <template slot-scope="scope">
                  <!--<el-form-item label="" :prop="'detailList.'+scope.$index+'.stockAmount'" v-if="scope.row.state=='edit'" :rules="rules.stockAmount">-->
                    <!--<input class="el-input__inner" size="mini" v-model="scope.row.stockAmount">-->
                  <!--</el-form-item>-->
                  <span >{{scope.row.stockAmount}}</span>
                </template>
              </el-table-column>
              <el-table-column  label="报损数量" width="120" align="center" :show-overflow-tooltip="true">
                <template slot-scope="scope">
                  <el-form-item label="" :prop="'detailList.'+scope.$index+'.damageAmount'" v-if="scope.row.state=='edit'" :rules="rules.damageAmount">
                    <el-input-number  size="mini" v-model.number="scope.row.damageAmount" style="width: 90%" :min="1" :max="Number(scope.row.stockAmount)" @change="amountChange(scope.row)" controls-position="right"></el-input-number>
                  </el-form-item>
                  <span v-else>{{scope.row.damageAmount}}</span>
                </template>
              </el-table-column>
              <el-table-column  label="报损单价" align="center" :show-overflow-tooltip="true">
                <template slot-scope="scope">
                  <el-form-item label="" :prop="'detailList.'+scope.$index+'.damageSinglePrice'" v-if="scope.row.state=='edit'" :rules="rules.damageSinglePrice">
                    <input class="el-input__inner" size="mini" v-model="scope.row.damageSinglePrice" @change="priceChange(scope.row)">
                  </el-form-item>
                  <span v-else>{{scope.row.damageSinglePrice}}</span>
                </template>
              </el-table-column>
              <el-table-column  label="报损金额" align="center" :show-overflow-tooltip="true">
                <template slot-scope="scope">
                  <!--<el-form-item label="" :prop="'detailList.'+scope.$index+'.damageMoneyAmount'" v-if="scope.row.state=='edit'" :rules="rules.damageMoneyAmount">-->
                    <!--<input class="el-input__inner" size="mini" v-model="scope.row.damageMoneyAmount">-->
                  <!--</el-form-item>-->
                  <span>{{scope.row.damageMoneyAmount}}</span>
                </template>
              </el-table-column>
              <el-table-column  label="报损原因" align="center" :show-overflow-tooltip="true">
                <template slot-scope="scope">
                  <el-form-item label="" :prop="'detailList.'+scope.$index+'.damageReson'" v-if="scope.row.state=='edit'" :rules="rules.damageReson">
                    <input class="el-input__inner" size="mini" v-model="scope.row.damageReson">
                  </el-form-item>
                  <span v-else>{{scope.row.damageReson}}</span>
                </template>
              </el-table-column>
              <el-table-column  label="单价" align="center" :show-overflow-tooltip="true">
                <template slot-scope="scope">
                  <!--<el-form-item label="" :prop="'detailList.'+scope.$index+'.singlePrice'" v-if="scope.row.state=='edit'" :rules="rules.singlePrice">-->
                    <!--<input class="el-input__inner" size="mini" v-model="scope.row.singlePrice">-->
                  <!--</el-form-item>-->
                  <span >{{scope.row.singlePrice}}</span>
                </template>
              </el-table-column>
              <el-table-column  label="库存金额" align="center" :show-overflow-tooltip="true">
                <template slot-scope="scope">
                  <!--<el-form-item label="" :prop="'detailList.'+scope.$index+'.stockMoneyAmount'" v-if="scope.row.state=='edit'" :rules="rules.stockMoneyAmount">-->
                    <!--<input class="el-input__inner" size="mini" v-model="scope.row.stockMoneyAmount">-->
                  <!--</el-form-item>-->
                  <span >{{scope.row.stockMoneyAmount}}</span>
                </template>
              </el-table-column>
              <el-table-column  label="物料所有人" align="center" :show-overflow-tooltip="true" width="120">
                <template slot-scope="scope">
                  <el-form-item label="" :prop="'detailList.'+scope.$index+'.ownerId'" v-if="scope.row.state=='edit'" :rules="rules.ownerId">
                    <el-select size="mini" v-model="scope.row.ownerId" @change="handleOwner(scope.row)"><el-option v-for="item in userList" :key="item.id" :label="item.name" :value="item.id"></el-option></el-select>
                  </el-form-item>
                  <span v-else>{{scope.row.ownerName}}</span>
                </template>
              </el-table-column>
              <el-table-column  label="总公司订单号" width="90" align="center" :show-overflow-tooltip="true">
                <template slot-scope="scope">
                  <el-form-item label="" :prop="'detailList.'+scope.$index+'.headOfficeOrderNum'" v-if="scope.row.state=='edit'" :rules="rules.headOfficeOrderNum">
                    <input class="el-input__inner" size="mini" v-model="scope.row.headOfficeOrderNum">
                  </el-form-item>
                  <span v-else>{{scope.row.headOfficeOrderNum}}</span>
                </template>
              </el-table-column>
              <el-table-column  label="分公司订单号" width="90" align="center" :show-overflow-tooltip="true">
                <template slot-scope="scope">
                  <el-form-item label="" :prop="'detailList.'+scope.$index+'.branchOfficeOrderNum'" v-if="scope.row.state=='edit'" :rules="rules.branchOfficeOrderNum">
                    <input class="el-input__inner" size="mini" v-model="scope.row.branchOfficeOrderNum">
                  </el-form-item>
                  <span v-else>{{scope.row.branchOfficeOrderNum}}</span>
                </template>
              </el-table-column>
              <el-table-column  label="产品批次" align="center" :show-overflow-tooltip="true">
                <template slot-scope="scope">
                  <el-form-item label="" :prop="'detailList.'+scope.$index+'.productBatch'" v-if="scope.row.state=='edit'" :rules="rules.productBatch">
                    <input class="el-input__inner" size="mini" v-model="scope.row.productBatch">
                  </el-form-item>
                  <span v-else>{{scope.row.productBatch}}</span>
                </template>
              </el-table-column>
              <el-table-column  label="计量单位" align="center" :show-overflow-tooltip="true">
                <template slot-scope="scope">
                  <!--<el-form-item label="" :prop="'detailList.'+scope.$index+'.unitName'" v-if="scope.row.state=='edit'" :rules="rules.unitName">-->
                    <!--<input class="el-input__inner" size="mini" v-model="scope.row.unitName">-->
                  <!--</el-form-item>-->
                  <span>{{scope.row.unitName}}</span>
                </template>
              </el-table-column>
              <el-table-column  label="操作" fixed="right" align="center" width="87">
                <template slot-scope="scope">
                  <div v-if="scope.row.state=='edit'">
                    <el-button type="text" size="mini" @click="savelDetail(scope.row,scope.$index,'detailForm')">保存</el-button>
                    <el-button type="text" size="mini" @click="delDetail(scope.row,scope.$index)">删除</el-button>
                  </div>
                  <div v-else>
                    <el-button type="text" size="mini" @click="editDetail(scope.row,scope.$index)">修改</el-button>
                    <el-button type="text" size="mini" @click="delDetail(scope.row,scope.$index)">删除</el-button>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </el-form>
        <div style="text-align: right" class="right-content-body-foot">
          <el-button size="mini" type="primary" @click="submit" :disabled="uploading">提交</el-button>
        </div>
      </div>
</template>
<script>
  export default{
    name:"ReportedLossAdd",
    mounted:function () {
      // this.doAjax()
    },
    data(){
      return{
        radio:"",
        index:"",
          form:{
              warehouseId:'',
              warehouseName:'',
              externalCode:'',
              remarks:'',
              detailList:[]
          },
        rules:{
            storeAreaCode:[{ required: true,message:'请选择库区', trigger: 'blur' }],
            goodsAllocationCode:[{ required: true,message:'请选择货柜', trigger: 'blur' }],
            materialCode:[{ required: true,message:'请选择物料编码', trigger: 'blur' }],
            warehouseentryCode:[{ required: true,message:'请选择入库单号', trigger: 'blur' }],
            stockBarcode:[{ required: true,message:'请选择存货条码', trigger: 'blur' }],
            damageAmount:[{ required: true,message:'请输入报损数量', trigger: 'blur' }],
            damageSinglePrice:[{ required: true,message:'请输入报损单价', trigger: 'blur' }],
            damageMoneyAmount:[{ required: true,message:'请输入报损金额', trigger: 'blur' }],
        },
          uploading:false,
          // whList:[],//仓库列表
          arealist:[],//库区列表
          goodslist:[],//货位列表
          mCodelist:[],//物料编码列表
          sCodelist:[],//入库单号列表
          bCodelist:[],//条码列表
          params:{}
      }
    },
    methods:{
      editDetail(data,index){
          this.uploading = true
        data.state = "edit";
      },
      delDetail(data,index){
        this.form.detailList.splice(index, 1);
          this.uploading = false
      },
      savelDetail(data,index,formName){
          this.$refs[formName].validate((valid)=>{
                  if(valid) {
                      data.state = "nomal"
                      this.uploading = false
                  }})
      },
      addDetail() {
          this.uploading = true
        this.form.detailList.push({stockAmount:"",damageAmount:"",damageSinglePrice:'',damageMoneyAmount:'',damageReson:'',singlePrice:'',stockMoneyAmount:'',productBatch:'',ownerId:"",
            ownerName:'',headOfficeOrderNum:'',branchOfficeOrderNum:'',storeAreaName:'',storeAreaCode:'',goodsAllocationCode:'',stockBarcode:'',stockInDate:'',auditorId:'',
            auditorName:'',materialCode:'',materialName:'',materialCategoryCode:'',materialCategoryName:'',modelType:'',specification:'',unitName:'',warehouseentryCode:'',state:"edit"})
      },
        handleSelect(val){
            this.$http.post('/ys-web-wms/common/getStoreAreas',{id:val}).then(
                (res)=>{
                    this.arealist = res.data.data?res.data.data:[]
                }
            )
            for(let item of this.whList){
              if(item.id == val){
                this.form.warehouseName=item.name
              }
              }
        },
        handleArea(row){
            this.resetCurrent(row)
            row.goodsAllocationCode=''
            row.materialCode=''
                row.materialName=''
                row.materialCategoryCode=''
                row.materialCategoryName=''
            row.warehouseentryCode=''
            row.stockBarcode=''
            let id = ''
            for(let item of this.arealist){
                if(item.code == row.storeAreaCode){
                    id = item.id
                }
            }
                    this.$http.post('/ys-web-wms/store/getAllocationByArea',{id:id}).then(
                (res)=>{
                    this.goodslist = res.data.data?res.data.data:[]
                }
            )
        },
        handleGoods(row){
            this.resetCurrent(row)
            row.materialCode=''
            row.materialName=''
            row.materialCategoryCode=''
            row.materialCategoryName=''
            row.warehouseentryCode=''
            row.stockBarcode=''
            this.params={goodsAllocationCode : row.goodsAllocationCode}
            this.getList((data)=>{
                this.mCodelist = data
            })
        },
        handleMCode(row){
            this.params={
                goodsAllocationCode:this.params.goodsAllocationCode,
                materialCode : row.materialCode
            }
            this.resetCurrent(row)
            row.warehouseentryCode=''
            row.stockBarcode=''
            for(let item of this.mCodelist){
                if(item.materialCode == row.materialCode){
                    row.materialName = item.materialName
                    row.materialCategoryName = item.materialCategoryName
                    row.materialCategoryCode = item.materialCategoryCode
                }
            }
            this.getList((data)=>{
                this.sCodelist = data
            })
        },
        handleSCode(row){
            this.params={
                goodsAllocationCode:this.params.goodsAllocationCode,
                materialCode : this.params.materialCode,
                wareEntryCode  :row.warehouseentryCode,
            }
            this.resetCurrent(row)
            row.stockBarcode=''
            this.getList((data)=>{
                this.bCodelist = data
            })
        },
        handleBCode(row){
            this.resetCurrent(row)
                for(let item of this.bCodelist){
                    if(item.stockBarcode == row.stockBarcode){
                        item.storeAreaCode = row.storeAreaCode
                        row = Object.assign(row,item)
                    }
                }
        },
        handleOwner(row){
            for(let item of this.userList){
                if(item.id == row.ownerId){
                    row.ownerName = item.name
                }
            }
        },
        amountChange(row){
            this.$nextTick(()=>{
                row.damageAmount=parseInt(row.damageAmount)
                row.damageMoneyAmount = Number(row.damageAmount)*Number(row.damageSinglePrice?row.damageSinglePrice:0)
            })
        },
        priceChange(row){
            this.$nextTick(()=>{
                row.damageSinglePrice=isNaN(row.damageSinglePrice)?0:row.damageSinglePrice
                row.damageMoneyAmount = Number(row.damageAmount?row.damageAmount:0)*Number(row.damageSinglePrice)
            })
        },
        resetCurrent(row){
            row = Object.assign(row,{stockAmount:"",damageAmount:"",damageSinglePrice:'',damageMoneyAmount:'',damageReson:'',singlePrice:'',stockMoneyAmount:'',productBatch:'',ownerId:"",
                ownerName:'',headOfficeOrderNum:'',branchOfficeOrderNum:'',stockInDate:'',auditorId:'',
                auditorName:'',modelType:'',specification:'',unitName:'',state:"edit"} )
        },
        doAjax(){
            this.$http.post('/ys-web-wms/damage/getWhList',{id:this.$route.params.id}).then(
                (res)=>{
                   this.whList = res.data.data?res.data.data:[]
                }
            )
        },
        getList(cb){
            this.$http.post('/ys-web-wms/damage/getDetailList',{data:JSON.stringify(this.params)}).then(
                (res)=>{
                    cb(res.data.data);
                }
            )
        },
        submit(){
            if(!this.form.detailList||this.form.detailList.length<1){
                this.$message({
                    'type': 'warning',
                    message: "请添加明细",
                    'showClose': true
                });
                return false
            }
            this.$refs['form'].validate((valid)=>{
                if(valid){
                    this.uploading = true
                    this.$http.post("/ys-web-wms/damage/add", {params: JSON.stringify(this.form)})
                        .then((response) => {
                            if (response.data.data.status == '200') {
                                this.$message({
                                    'type': 'success',
                                    message: "操作成功",
                                    'showClose': true
                                });
                                    this.$store.commit('IS_REFRESH')
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
                }else{
                    this.$nextTick(()=> {
                        document.getElementsByClassName("el-form-item__error")[0].parentNode.getElementsByClassName('el-input__inner')[0].scrollIntoView()
                        document.getElementsByClassName("el-form-item__error")[0].parentNode.getElementsByClassName('el-input__inner')[0].focus()
                    })
                }
            })
        }
    },
      computed:{
          userList(){
              return this.$store.state.selectList.allPersons
          },
          "whList":function () {
              return this.$store.state.selectList.warehouseList;
          },
      },
    components:{

    },
      watch:{
        'form.warehouseId'(){
            this.form.detailList=[]
        }
      }
  }
</script>
<style>

</style>
