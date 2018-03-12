<template>
  <div class="card-box">
    <div class="card-box-inner">
    <div class="searchBar-main">
      <el-date-picker
              style="width: 47%;margin-bottom: 5px"
              size="small"
              v-model="searchParams.createDateBegin"
              type="date"
              align="center"
              placeholder="创建开始日期"
      >
      </el-date-picker>
      <el-date-picker
              style="width: 47%;margin-bottom: 5px"
              size="small"
              v-model="searchParams.createDateEnd"
              type="date"
              align="center"
              value-format="yyyy-MM-dd 23:59:59"
              placeholder="创建结束日期"
      >
      </el-date-picker>
      <el-input v-model="searchParams.transferCode" placeholder="调拨单号" size="small" style="width: 31%"></el-input>
      <el-select clearable v-model="searchParams.outDeptId" placeholder="转出部门" size="small" style="width:31%">
        <el-option
          v-for="item in warehouseDeptList"
          :key="item.id"
          :label="item.name"
          :value="item.id">
        </el-option>
      </el-select>
      <el-select clearable v-model="searchParams.InDeptId" filterable placeholder="转入部门" size="small" style="width:31%">
        <el-option
          v-for="item in warehouseDeptList"
          :key="item.id"
          :label="item.name"
          :value="item.id">
        </el-option>
      </el-select>
      <el-select clearable v-model="searchParams.outWarehouseId" filterable placeholder="转出仓库" size="small" style="width:31%">
        <el-option
          v-for="item in whList"
          :key="item.id"
          :label="item.name"
          :value="item.id">
        </el-option>
      </el-select>
      <el-select clearable v-model="searchParams.inWarehouseId" filterable placeholder="转入仓库" size="small" style="width:31%">
        <el-option
          v-for="item in whList"
          :key="item.id"
          :label="item.name"
          :value="item.id">
        </el-option>
      </el-select>
      <el-select clearable v-model="searchParams.transferStatusKey" filterable placeholder="单据状态" size="small" style="width:31%">
        <el-option
          v-for="item in transferBillStatus"
          :key="item.code"
          :label="item.name"
          :value="item.code">
        </el-option>
      </el-select>

      <div class="searchBar-foot">
        <el-button type="primary" @click="search" icon="search" size="mini">搜索</el-button>
        <el-button type="success" @click="toAddAllocation" size="mini" style="margin-left: 0px;">新建调拨单</el-button>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:"AllocationSearchBar",
    props:{
      params:Object
    },
    mounted(){

    },
    data(){
      return {
        searchParams: Object.assign({},this.params),
      }
    },
    methods:{
      handleChange(value) {
        console.log(value);
      },
      search(){
        this.$emit("search",this.searchParams);
      },
      toAddAllocation(){
        this.$router.push("/allocation/allocationAdd");
      }
    },
    computed:{
        transferBillStatus(){
            return this.$store.state.enumList.transferBillStatus
        },
        "whList":function () {
            return this.$store.state.selectList.warehouseList;
        },
        warehouseDeptList(){
            return this.$store.state.selectList.warehouseDeptList;
        }
    },

  }
</script>
<style>

</style>
