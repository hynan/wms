<template>
  <el-row style="height:100%">
    <el-col style="height:100%; background:#F9FAFC;" id="leftMainBox" :span="8" class="left-main-box not-print">
      <search-bar @search="search" :params="searchParams"></search-bar>
      <div class="receivingList-table" style="height: 63%">
        <el-table :data="tableData"  border :row-class-name="highlightCurrent" @row-click="rowCurrentChange" :height="tableHeight" style="width: 100%" >
          <el-table-column label="创建日期"  align="center" :show-overflow-tooltip="true">
            <span slot-scope="sp">{{sp.row.createDate?new Date(sp.row.createDate).pattern('yyyy-MM-dd'):''}}</span>
          </el-table-column>
          <el-table-column label="调拨单号" prop="transferCode"  align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column label="转出仓库" prop="outWarehouseName"   align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column label="转入仓库" prop="inWarehouseName"  align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column label="单据状态" prop="transferStatusKey"  align="center" width="100">
            <template slot-scope="scope">
              <span>{{ scope.row.transferStatusKey|enumtext(transferBillStatus) }}</span>
            </template>
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
  import SearchBar from './AllocationSearchBar.vue'
  import SlideBar from '../common/SlideBar'
  export default {
    name: 'AllocationList',
    mounted(){
      this.tableHeight = document.body.clientHeight*0.61
        this.doAjax()
    },
    data () {
      return {
      tableHeight:"",
      count:0,
        currentPage: 1,
        searchParams:{
            createDateBegin:"",//创建日期
            createDateEnd:'',
            outDeptId:'',
            InDeptId:'',
            outWarehouseId:'',
            inWarehouseId:'',
            transferCode:"",//入库单号
            transferStatusKey:"",//单据状态
        },
        tableData:[],
        currentRow: {
            transferId:0,
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
            this.searchParams.transferId = this.$route.params.id;
          }else{
            this.searchParams.transferId = "";
          }
          this.$http.post('/ys-web-wms/transfer/getList',{data:JSON.stringify(this.searchParams)}).then(
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
        let toPreurl  = "/allocation/detail/" + val.transferId+'/';
        let modulePath = this.$route.query.tourl ? this.$route.query.tourl : "info";
        this.$router.push(toPreurl+modulePath);
      },
      highlightCurrent(val){
        return (val.row.transferId==this.currentRow.transferId ? 'info-row' :'');
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
            this.currentRow.transferStatusKey = this.currentInfo.transferBillStatusKey
        }
    },
    computed:{
        transferBillStatus(){
            return this.$store.state.enumList.transferBillStatus
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
