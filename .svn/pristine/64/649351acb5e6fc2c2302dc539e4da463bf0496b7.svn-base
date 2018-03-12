<template>
    <div>
        <p class="dataManagement-title">{{isAdd?'添加货位':'修改货位'}}</p>
        <br/>
        <el-form :model="form" ref="locForm" :rules="rules" label-width="120px" >
          <el-form-item label="物料类别：" prop="codeList">
                    <materiel-select v-model="form.materialCategoryCode"></materiel-select>
            </el-form-item>
        </el-form>
        <div style="text-align:right;margin-top:10px">
            <el-button type="primary" size="mini" @click="submit" :disabled="uploading">保存</el-button>
            <el-button @click="goBack" size="mini" v-if="!isAdd">取消</el-button>
        </div>
    </div>
</template>
<script>
    import MaterielSelect from '../MaterielSelect.vue'
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
                    materialCategoryCode:'',
                },
                rules:{
                },
                uploading:false,
            }
        },
        methods:{
            goBack(){
                this.$router.push("/dataManagement/store/detail/location/"+this.$route.params.id+"/info")
            },
            doAjax(){
                this.$http.post('/ys-web-wms/store/getAllocationInfo',{id:this.$route.params.id}).then(
                    (res)=>{
                        if(res.data){
                            this.form=Object.assign({  materialCategoryCode:'',},res.data.data)
                        this.form.materialCategoryCode = res.data.data.materialCategoryCodes
                            this.form.materialCategoryName = ""
                        }
                    }
                )
            },
            submit(){
                if(! this.form.materialCategoryCode){
                    this.$message({
                        'type': 'warning',
                        message: "请选择物料类别",
                        'showClose': true
                    });
                    return false
                }
                let url = "editAllocation"
                if(this.isAdd){
                    url = "addAllocation"
                    this.form.shelfId = this.$route.query.shelfId
                }
                this.$refs['locForm'].validate((valid) => {
                    if (valid) {
                        this.uploading = true
                        this.$http.post("/ys-web-wms/store/"+url, {params: JSON.stringify(this.form),id:this.$route.params.id})
                            .then((response) => {
                                if (response.data.data.status == '200') {
                                    this.$message({
                                        'type': 'success',
                                        message: "操作成功",
                                        'showClose': true
                                    });
                                    if(this.isAdd){
                                        this.$store.commit('SET_EXPAND_KEYS',[this.$route.query.shelfId])
                                        this.$store.commit('IS_REFRESH')
                                         this.$router.push('/dataManagement/store/detail/container/'+this.$route.query.shelfId+'/info')
                                    }else{
                                        this.$router.push('/dataManagement/store/detail/location/'+this.$route.params.id+'/info')
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
                    }
                })
            }
        },
        computed:{
            isAdd(){
                return this.$route.name == 'locAdd'
            }
        },
        components:{
            MaterielSelect
        }
    }
</script>
<style scoped>

</style>
