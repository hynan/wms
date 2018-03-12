/**
* 物料编码下拉框
*/
<template>
    <el-select clearable v-model="code" filterable placeholder="物料编码" size="small" style="width:31%" @change="handleChange">
        <el-option
                v-for="item in list"
                :key="item.materialCode"
                :label="item.materialCode"
                :value="item.materialCode">
        </el-option>
    </el-select>
</template>
<script>
    export default{
        name: 'MaterialCode',
        props:{
            value:{

            },
            materialTypeCode:{
                required:true
            }
        },
        data(){
          return{
              list:[],
              code:this.value
          }
        },
        methods:{
            doAjax(){
            this.$http.post('/ys-web-wms/common/getMaterialInfoList',{code:this.materialTypeCode}).then(
            (res)=>{
                this.list= res.data.data?res.data.data:[]
                }
            )
            },
            handleChange(val){
                this.$emit('input',val)
            }
        },
        watch:{
            materialTypeCode(){
                if(this.materialTypeCode){
                this.doAjax()}
                else{
                    this.list = []
                    this.handleChange("")
                }
            }
        }
    }
</script>
<style>
</style>