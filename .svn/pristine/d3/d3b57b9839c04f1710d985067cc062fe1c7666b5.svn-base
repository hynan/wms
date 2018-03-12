<template>
    <div class="dataManage-navbtn-wrapper">
        <router-link :to="edit" tag="button" class="el-button el-button--mini" active-class="el-button--primary" >修改</router-link>
        <el-button class="el-button el-button--mini" @click="delStore">删除</el-button>
        <el-button class="el-button el-button--mini" @click="print" type="primary">打印条码</el-button>
        <el-dialog title="" :visible.sync="dialogVisible" top="3vh">
            <print-allocation @close="dialogVisible=false" :printList="printData"></print-allocation>
        </el-dialog>
    </div>
</template>
<script>
    import PrintAllocation from "../printAllocation/PrintAllocation";
    export default {
        components: {PrintAllocation},
        name:"TopNavBtn",
        data(){
            return{
                dialogVisible:false,
                printData:[]
            }
        },
        methods:{
            print(){
                if(!this.printData||this.printData.length<1){
                this.$http.post("/ys-web-wms/store/getAllocationInfo", {id:this.$route.params.id})
                    .then((response) => {
                        if (response.data.data) {
                            let obj = response.data.data
                            obj.code = obj.goodsAllocationsCode
                            this.printData.push(obj)
                            this.dialogVisible = true;
                        } else {
                            this.$message({
                                'type': 'error',
                                message: "获取条码失败",
                                'showClose': true
                            });
                        }
                    })
                    .catch((error) => {
                        console.log(error)
                    });
                }else{
                    this.dialogVisible = true;
                }
            },
            delStore(){
                this.$confirm('确认删除该项?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$http.post("/ys-web-wms/store/delAllocation", {id:this.$route.params.id})
                        .then((response) => {
                            if (response.data.data.status == '200') {
                                this.$message({
                                    'type': 'success',
                                    message: "操作成功",
                                    'showClose': true
                                });
                                this.$router.push('/dataManagement')
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
            }
        },
        computed:{
            "edit":function(){
                return "/dataManagement/store/detail/location/"+this.$route.params.id+"/edit";
            },
        },
        watch:{
            '$route.params.id'(){
                this.printData = []
            }
        }
    }
</script>
<style>

</style>
