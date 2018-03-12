<template>
    <div style="padding: 10px;">
        <p class="dataManagement-title">{{isAdd?'新增供应商':'修改供应商'}}</p>
        <br/>
        <el-form :model="form" :rules="rules" ref="supplier" label-width="120px">
                <el-row>
                    <el-col :span="8"><el-form-item label="物料类别：" prop="materialType"><el-cascader :options="materialTree" :props="defaultProps"
                                                                               :show-all-levels="false" size="small" v-model="form.materialType" @change="handleChange"></el-cascader></el-form-item></el-col>
                    <el-col :span="8"><el-form-item label="公司名称：" prop="companyName"><el-input size="small" v-model="form.companyName"></el-input></el-form-item></el-col>
                    <el-col :span="8"><el-form-item label="编号：" prop="companyCode"><el-input size="small" v-model="form.companyCode"></el-input></el-form-item></el-col>
                </el-row>
                <el-row>
                    <el-col :span="8"><el-form-item label="固定供应商："><el-switch
                            v-model="form.isFixedVendors"
                            :active-text="YesNo[0].name"
                            :inactive-text="YesNo[1].name"
                            :active-value="YesNo[0].code"
                            :inactive-value="YesNo[1].code"
                           >
                    </el-switch></el-form-item></el-col>
                    <el-col :span="8"><el-form-item label="省份：" prop="province"><provinces-select v-model="form.province"></provinces-select></el-form-item></el-col>
                    <el-col :span="8"><el-form-item label="所在地：" prop="location"><cities-select size="small" v-model="form.location" :province="form.province"></cities-select></el-form-item></el-col>
                </el-row>
                <el-row>
                    <el-col :span="8"><el-form-item label="企业类型：" prop="companyTypeKey"><el-select size="small" v-model="form.companyTypeKey"><el-option v-for="item in companyType" :key="item.code" :label="item.name" :value="item.code"></el-option></el-select></el-form-item></el-col>
                    <el-col :span="8"><el-form-item label="开户银行："><el-input size="small" v-model="form.bankName"></el-input></el-form-item></el-col>
                    <el-col :span="8"><el-form-item label="行号："><el-input size="small" v-model="form.bankCode"></el-input></el-form-item></el-col>
                </el-row>
                <el-row>
                    <el-col :span="8"><el-form-item label="银行账号："><el-input size="small" v-model="form.bankAccount"></el-input></el-form-item></el-col>
                    <el-col :span="8"><el-form-item label="税号："><el-input size="small" v-model="form.taxNum"></el-input></el-form-item></el-col>
                    <el-col :span="8"><el-form-item label="开票地址："><el-input size="small" v-model="form.invoiceAddress"></el-input></el-form-item></el-col>
                </el-row>
                <el-row>
                    <el-col><el-form-item label="办公地址："><el-input size="small" v-model="form.officeAddress"></el-input></el-form-item></el-col>
                </el-row>
                <el-row>
                    <el-col :span="8"><el-form-item label="公司电话：" prop="companyTelphone"><el-input size="small" v-model="form.companyTelphone"></el-input></el-form-item></el-col>
                    <el-col :span="8"><el-form-item label="公司传真："><el-input size="small" v-model="form.companyFax"></el-input></el-form-item></el-col>
                    <el-col :span="8"><el-form-item label="法人代表："><el-input size="small" v-model="form.legalPersonName"></el-input></el-form-item></el-col>
                </el-row>
                <el-row>
                    <el-col :span="8"><el-form-item label="法人代表电话："><el-input size="small" v-model="form.legalPersonMobile"></el-input></el-form-item></el-col>
                    <el-col :span="8"><el-form-item label="信誉度：" prop="credit"><el-input size="small" v-model.number="form.credit"></el-input></el-form-item></el-col>
                </el-row>
        </el-form>
        <br/>
        <div style="text-align:right;margin:10px 0">
            <el-button type="primary" size="mini" @click="submit" :disabled="uploading">保存</el-button>
            <el-button @click="goBack" size="mini" v-if="!isAdd">取消</el-button>
        </div>
    </div>
</template>
<script>
    import area from '../../common/area/area';
    import CitiesSelect from "../../common/area/CitiesSelect";
    import ProvincesSelect from "../../common/area/ProvincesSelect";
    export default {
        name:"Edit",
        mounted(){
          if(!this.isAdd){
              this.doAjax()
          }
        },
        data(){
            return{
                form:{
                    companyName:'',
                    companyCode:'',
                    province:'',
                    companyTypeKey:'',
                    bankName:'',
                    location:'',
                    bankCode:'',
                    bankAccount:'',
                    officeAddress:'',
                    taxNum:'',
                    invoiceAddress:'',
                    companyTelphone:'',
                    companyFax:'',
                    legalPersonName:'',
                    legalPersonMobile:'',
                    creditDegree:100,
                    materialTypeCode:'',
                    isFixedVendors:2,
                    credit:100,
                    materialType:[]
                },
                rules:{
                    companyName:[{required:true,message:'请输入公司名称',trigger:'blur'}],
                    materialType:[{type:'array',required:true,message:'请选择物料类别',trigger:'blur'}],
                    companyCode:[{required:true,message:'请输入公司编号',trigger:'blur'}],
                    credit:[{message:'请输入数字',trigger:'blur',type:'number'}],
                    companyTypeKey:[{required:true,message:'请选择公司类型',trigger:'blur'}],
                    companyTelphone:[{required:true,message:'请输入公司电话',trigger:'blur'}]
                },
                uploading:false,
                defaultProps:{
                    value:'code',
                    label:'name',
                    children:'childList'
                }

            }
        },
        methods:{
            goBack(){
                this.$router.push("/dataManagement/supplier/detail/"+this.$route.params.id+"/info")
            },
            handleChange(val){
              console.log(val)
            },
            doAjax(){
                this.$http.post('/ys-web-wms/supplier/getInfo',{id:this.$route.params.id}).then(
                    (res)=>{
                        if(res.data)
                            this.form=Object.assign({companyName:'',
                                companyCode:'',
                                province:'',
                                companyTypeKey:'',
                                bankName:'',
                                location:'',
                                bankCode:'',
                                bankAccount:'',
                                officeAddress:'',
                                taxNum:'',
                                invoiceAddress:'',
                                companyTelphone:'',
                                companyFax:'',
                                legalPersonName:'',
                                legalPersonMobile:'',
                                creditDegree:100,
                                materialTypeCode:'',
                                isFixedVendors:2,
                                credit:100,
                                materialType:[]},res.data.data)
                                this.getMaterialType(this.form.materialTypeId)
                        this.form.credit = res.data.data.creditDegree
                    }
                )
            },
            getMaterialType(val){
                let arry = []
                for(let item of this.materialTree){
                    for(let i of item.childList){
                        if(i.code == val){
                            arry.push(item.code)
                            arry.push(i.code)
                        }
                    }
                }
                this.form.materialType = arry
            },
            submit(){
                let url = "edit"
                if(this.isAdd)
                    url = "add"
                this.form.creditDegree = this.form.credit
                if( this.form.materialType)
                this.form .materialTypeCode = this.form.materialType[this.form.materialType.length-1]
                this.$refs['supplier'].validate((valid)=>{
                    if(valid){
                        this.uploading = true
                        this.$http.post("/ys-web-wms/supplier/"+url, {params: JSON.stringify(this.form),id:this.$route.params.id})
                            .then((response) => {
                                if (response.data.data.status == '200') {
                                    this.$message({
                                        'type': 'success',
                                        message: "操作成功",
                                        'showClose': true
                                    });
                                    if(this.isAdd){
                                            this.$store.commit('IS_REFRESH')
                                    }else{
                                        this.$router.push('/dataManagement/supplier/detail/'+this.$route.params.id+'/info')
                                    }
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
            isAdd(){
                return this.$route.name == 'supplierAdd'
            },
            YesNo(){
                return this.$store.state.enumList.YesNo
            },
            materialTree(){
                return this.$store.state.selectList.materialCategoryTree
            },
            companyType(){
                return this.$store.state.enumList.companyType
            }
        },
        components:{
            ProvincesSelect,
            CitiesSelect
        }
    }
</script>
<style scoped>
</style>
