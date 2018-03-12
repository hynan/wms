<template>
    <div>
        <el-container style="border:1px solid #D3DCE6;min-height:500px"  v-loading="uploading"
                      element-loading-text="正在提交"
                      element-loading-spinner="el-icon-loading">
            <el-header class="dataManagement-title" style="background-color:#f5f7fa;height:auto;font-size:15px;padding:5px 20px">
                字段显示设置
            </el-header>
            <el-main style="font-size:8px">
                <!--入库类别：<el-select size="small" v-model="sttype" @change="typeChange">-->
                <!--<el-option :value='item.code' :label="item.name" :key="i.rowName" v-for="item in stockInType"></el-option>-->
            <!--</el-select>-->
                <el-row>
                    <el-col :span="8"><div class="supplier-body fieldManagement-col">
                        <p class="dataManagement-title">入库管理</p>
                            <el-checkbox class="flex-chechbox" v-for="i in data.stockInDescs" :label="i.rowDesc" :key="i.rowName" v-model="i.visible"></el-checkbox>
                        <div style="text-align: center;padding: 10px" v-if="!data.stockInDescs||data.stockInDescs.length<1">无数据</div>
                    </div></el-col>
                    <el-col :span="8"><div class="supplier-body fieldManagement-col">
                        <p class="dataManagement-title">出库管理</p>
                        <el-checkbox class="flex-chechbox" v-for="i in data.stockOutDescs" :label="i.rowDesc" :key="i.rowName" v-model="i.visible"></el-checkbox>
                        <div style="text-align: center;padding: 10px" v-if="!data.stockOutDescs||data.stockOutDescs.length<1">无数据</div>
                    </div></el-col>
                    <el-col :span="8"><div class="supplier-body fieldManagement-col">
                        <p class="dataManagement-title">调拨业务</p>
                        <el-checkbox class="flex-chechbox" v-for="i in data.transferDescs" :label="i.rowDesc" :key="i.rowName" v-model="i.visible"></el-checkbox>
                        <div style="text-align: center;padding: 10px" v-if="!data.transferDescs||data.transferDescs.length<1">无数据</div>
                    </div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="8"><div class="supplier-body fieldManagement-col">
                        <p class="dataManagement-title">盘点业务</p>
                        <el-checkbox class="flex-chechbox" v-for="i in data.checkDescs" :label="i.rowDesc" :key="i.rowName" v-model="i.visible"></el-checkbox>
                        <div style="text-align: center;padding: 10px" v-if="!data.checkDescs||data.checkDescs.length<1">无数据</div>
                    </div></el-col>
                    <el-col :span="16"><div class="supplier-body fieldManagement-col">
                        <p class="dataManagement-title">报损业务</p>
                        <el-checkbox class="flex-chechbox" v-for="i in data.damageDescs" :label="i.rowDesc" :key="i.rowName" v-model="i.visible"></el-checkbox>
                        <div style="text-align: center;padding: 10px" v-if="!data.damageDescs||data.damageDescs.length<1">无数据</div>
                    </div></el-col>
                </el-row>
                <div style="text-align:right"><el-button size="small" type="primary" @click="submit" >确定</el-button></div>
            </el-main>
        </el-container>
    </div>
</template>
<script>
    export default {
        name:'FieldManagement',
        mounted(){
        },
        data(){
            return{
                uploading:false
            }
        },
        methods:{
//            doAjax(){
//                this.$http.post('/ys-web-wms/field/getFields').then(
//                    (res)=>{
//                        this.data=Object.assign({
//                            damageDescs:[],
//                            checkDescs:[],
//                            stockInDescs:[],
//                            stockOutDescs:[],
//                            transferDescs:[]
//                        },res.data.data)
//                    }
//                )
//            },
            submit(){
                this.uploading=true
                this.$http.post("/ys-web-wms/field/save", {params:JSON.stringify(this.data)})
                    .then((response) => {
                        if (response.data.data.status == '200') {
                            this.$message({
                                'type': 'success',
                                message: "操作成功",
                                'showClose': true
                            });
                            this.$store.dispatch("getDisplayItems");//加载字段显示列表
                            this.uploading=false
                        } else {
                            this.$message({
                                'type': 'error',
                                message: "操作失败，,请重试或联系管理",
                                'showClose': true
                            });
                            this.uploading=false
                        }
                    })
                    .catch((error) => {
                        this.uploading=false
                        console.log(error)
                    });
            },
        },
        computed:{
            stockInType(){
                return this.$store.state.enumList.stockInType
            },
            data(){
                return this.$store.state.displayItems
            }
        }
    }
</script>
<style>
    .fieldManagement-col{
        padding:10px;
    }
    .flex-chechbox{
        float:left;
        min-width:25%;
        margin:5px 0;
    }
    .fieldManagement-col .el-checkbox+.el-checkbox{
        margin-left:0;
    }
    .flex-chechbox .el-checkbox__label{
        padding-left:5px!important;
        font-size:12px;
    }
</style>