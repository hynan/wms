<template>
    <div>
        <br/>
        <p class="dataManagement-title">货位列表</p>
        <el-button type="success" size="mini" style="float:right;margin-bottom:10px" @click="locAdd">添加货位</el-button>
        <el-button  type="primary" size="mini" style="float:right;margin-right:10px" @click="doAjax">搜索</el-button>
        <el-input v-model="code" size="mini" style="width: 20%;float: right" placeholder="货位编码"></el-input>
        <el-form :model="form" ref="allocationList">
            <el-table border style="width: 100%;" :data="form.tableData">
                <el-table-column  label="货位编码"  align="center" :show-overflow-tooltip="true" prop="goodsAllocationCode">
                </el-table-column>
                <el-table-column  label="物料类别"  align="center" >
                    <template slot-scope="sp">
                        <materiel-select v-if="sp.$index==cIndex" v-model="sp.row.materialCategoryCodes"></materiel-select>
                        <span v-else>{{sp.row.materialCategoryNames?sp.row.materialCategoryNames.join(","):''}}</span>
                    </template>
                </el-table-column>
                <el-table-column  label="创建日期"  align="center" :show-overflow-tooltip="true">
                    <template slot-scope="sp">
                        <span>{{sp.row.createDate}}</span>
                    </template>
                </el-table-column>
                <el-table-column  label="操作"  align="center" :show-overflow-tooltip="true">
                    <template slot-scope="sp">
                        <el-button-group v-if="sp.$index==cIndex">
                            <el-button  size="mini" @click="cancel(sp.$index)" icon="el-icon-error" ></el-button>
                            <el-button  size="mini" @click="confirm(sp.row)" icon="el-icon-success" type="primary" :disabled="uploading"></el-button>
                        </el-button-group>
                        <el-button-group v-else>
                            <el-button type="primary" icon="el-icon-edit" size="mini" @click="edit(sp.$index)"></el-button>
                            <el-button type="danger" icon="el-icon-delete" size="mini" @click="deleteCon(sp.row)"></el-button>
                        </el-button-group>
                    </template>
                </el-table-column>
            </el-table>
        </el-form>
        <br/>
        <div style="text-align:right">
            <el-pagination
                    @current-change="pageChange"
                    :current-page="currentPage"
                    small
                    layout="total,prev, pager, next"
                    :total="total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    import MaterielSelect from '../MaterielSelect.vue'
    export default{
        name:'StoreAreaList',
        mounted(){
            this.doAjax()
        },
        data(){
            return{
                cIndex:-1,
                form:{
                    tableData:[],
                },
                uploading:false,
                total:0,
                currentPage:1,
                code:''
            }
        },
        methods:{
            resetNod(){
                this.nod = true
                this.cIndex = -1
            },
            locAdd(){
                this.$router.push('/dataManagement/store/detail/locAdd?shelfId='+this.$route.params.id)
            },
            edit(val){
                this.cIndex = val
            },
            doAjax(){
                this.$http.post('/ys-web-wms/store/getAllocationList',{id:this.$route.params.id,page:this.currentPage,code:this.code}).then(
                    (res)=>{
                        this.form.tableData=res.data.data?res.data.data.list:[]
                        this.total = res.data.data?res.data.data.count:0
                        this.resetNod()
                    }
                )
            },
            pageChange(val){
                this.currentPage = val
                this.doAjax()
            },
            cancel(val){
                if(!this.nod){
                    this.form.list.splice(val,1)
                }
                this.doAjax()
            },
            deleteCon(val){
                this.$confirm('确认删除该项?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$http.post("/ys-web-wms/store/delAllocation", {id:val.goodsAllocationId})
                        .then((response) => {
                            if (response.data.data.status == '200') {
                                this.$message({
                                    'type': 'success',
                                    message: "操作成功",
                                    'showClose': true
                                });
                                this.doAjax()
                            } else {
                                this.$message({
                                    'type': 'error',
                                    message: "操作失败，,请重试或联系管理",
                                    'showClose': true
                                });
                            }
                        })
                        .catch((error) => {
                            console.log(error)
                        });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            confirm(val){
                val.materialCategoryCode = val.materialCategoryCodes
                if(! val.materialCategoryCode){
                    this.$message({
                        'type': 'warning',
                        message: "请选择物料类别",
                        'showClose': true
                    });
                    return false
                }
                this.$refs['allocationList'].validate((valid)=>{
                    if(valid){
                        this.uploading = true
                        this.$http.post("/ys-web-wms/store/editAllocation", {params: JSON.stringify(val),id:val.goodsAllocationId})
                            .then((response) => {
                                if (response.data.data.status == '200') {
                                    this.$message({
                                        'type': 'success',
                                        message: "操作成功",
                                        'showClose': true
                                    });
                                    this.doAjax()
                                    this.uploading = false
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
                        })
                    }
                })
            },

        },
        components:{
            MaterielSelect
        },
        watch:{
            '$route.params.id'(){
                this.doAjax()
            }
        }
    }
</script>