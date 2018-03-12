<template>
  <el-row style="height:100%">
    <el-col style="height:100%; background:#F9FAFC;" id="leftMainBox" :span="8" class="left-main-box not-print">
      <search-bar @search="search" :params="searchParams"></search-bar>
      <div class="receivingList-table" style="height: 63%">
        <el-table :data="tableData"  border :row-class-name="highlightCurrent" @row-click="rowCurrentChange" :height="tableHeight" style="width: 100%" >
          <el-table-column label="报损日期" prop="damageDate" align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column label="报损单号" prop="damageCode"  align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column label="报损单状态" prop="damageBillStatusKey"  align="center" width="100">
            <span slot-scope="sp">{{sp.row.damageBillStatusKey|enumtext(damageBillStatus)}}</span>
          </el-table-column>
        </el-table>
      </div>
      <div class="pageBox">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          layout="total, prev, pager, next"
          :total="count">
        </el-pagination>
      </div>
    </el-col>
    <el-col id='rightMainBox' :span="16" class="page-print">
      <slide-bar leftEl='#leftMainBox' rightEl='#rightMainBox' class="not-print"></slide-bar>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </el-col>
  </el-row>
</template>

<script>
  import SearchBar from './ReportedLossSearchBar.vue'
  import SlideBar from '../common/SlideBar'
  export default {
    name: 'ReportedLossList',
    mounted(){
      this.tableHeight = document.body.clientHeight*0.62
        this.doAjax()
    },
    data () {
      return {
      tableHeight:"",
      count:0,
        currentPage: 1,
        searchParams:{
            date:'',
            damageDateBegin:"",//创建日期
            damageDateEnd:'',
            damageCode:"",//报损单号
            damageBillStatusKey:"",//报损单状态
            materialCode:"",//物料编码
            materialTypeCode:'',
            warehouseId:"",//仓库ID
        },
        currentPage:1,
        tableData:[],
        currentRow: {
          buyId:0,
          instanceId:0
        }
      }
    },
    methods:{
      search(val){
        this.searchParams = val;
        this.currentPage = 1
        this.doAjax();
      },
        doAjax(){
          if(this.$route.query.tourl){
            this.searchParams.damageId = this.$route.params.id
          }else{
            this.searchParams.damageId = "";
          }
            this.$http.post('/ys-web-wms/damage/getList',{data:JSON.stringify(this.searchParams),page:this.currentPage}).then(
                (res)=>{
                    this.tableData=res.data.data?res.data.data.list:[]
                    this.count = res.data.data?res.data.data.count:0
                    if(this.tableData){
                        let firstrow = this.tableData[0]
                        this.rowCurrentChange(firstrow)
                    }
                }
            )
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        this.doAjax();
      },
      rowCurrentChange(val){
        if(!val){
          return;
        }
        this.currentRow = val;
        let toPreurl  = "/reportedLoss/detail/" + val.damageId+'/';
        let modulePath = this.$route.query.tourl ? this.$route.query.tourl : "info";
        this.$router.push(toPreurl+modulePath);
      },
      highlightCurrent(val){
        return (val.row.damageId==this.currentRow.damageId ? 'info-row' :'');
      },
    },
    components:{
      'search-bar':SearchBar,
      SlideBar
    },
    watch: {
      "$route": function(to,from) {
      },
      "$store.state.purchase":function (val) {
        this.currentRow = val;
      },
        'is_refresh'(){
            this.doAjax()
        },
        'currentInfo'(){
            this.currentRow.damageBillStatusKey = this.currentInfo.damageBillStatusKey
        }
    },
    computed:{
        damageBillStatus(){
            return this.$store.state.enumList.damageBillStatus;
        },
        is_refresh(){
            return this.$store.state.moduleDM.is_refresh
        },
        currentInfo(){
            return this.$store.state.moduleDM.currentRow
        },
    },
  }
</script>

<style>

</style>
