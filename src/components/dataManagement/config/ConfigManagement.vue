<template>
    <el-card  style="min-height:520px">
        <div slot="header">
            <el-autocomplete placeholder="配置项名称" style="width:20%" size="small" v-model="searchParams.name" :fetch-suggestions="querySearch" :trigger-on-focus="false"
                             @select="handleSelect">
                <template slot-scope="props">
                    <div>{{ props.item }}</div>
                </template>
            </el-autocomplete>
            <el-date-picker
                    v-model="searchParams.beginTime"
                    style="width:20%"
                    size="small"
                    type="date"
                    placeholder="开始日期">
            </el-date-picker>
            <el-date-picker
                    v-model="searchParams.endTime"
                    style="width:20%"
                    size="small"
                    type="date"
                    value-format="yyyy-MM-dd 23:59:59"
                    placeholder="结束日期">
            </el-date-picker>
            <el-button type="primary" size="small" @click="getList">搜索</el-button>
            <el-button style="float: right" type="success" size="small" @click="configAdd">新增配置项</el-button>
        </div>
        <transition name="fade">
            <router-view :searchParams="searchParams" :searchMark="search"></router-view>
        </transition>
    </el-card>
</template>
<script>
    export default {
        name:'ConfigManagement',
        mounted(){
          this.doAjax()
        },
        data(){
            return{
                list:[],
                searchParams:{
                    name:'',
                    beginTime:'',
                    endTime:''
                },
                search:true
            }
        },
        methods:{
            configAdd(){
                this.$router.push("/dataManagement/config/add")
            },
            doAjax(){
                this.$http.post('/ys-web-wms/config/getConfigNames',{data:JSON.stringify(this.searchParam)}).then(
                    (res)=>{
                        this.list=res.data.data?res.data.data:[]
                    }
                )
            },
            querySearch(queryString, cb){
                var results = queryString ? this.list.filter(this.createFilter(queryString)) : this.list;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            createFilter(queryString) {
                return (val) => {
                    return (val.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            handleSelect(val){
                this.searchParams.name = val
            },
            getList(){
                this.$router.push('/dataManagement/config/list')
                this.search = !this.search
            }
        },
    }
</script>
<style>
</style>