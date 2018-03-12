<template>
  <div class="card-box">
    <div class="card-box-inner">
    <div class="searchBar-main">
      <el-date-picker
              style="width: 47%;margin-bottom: 5px"
              size="small"
              v-model="searchParams.checkDateBegin"
              type="date"
              align="center"
              placeholder="盘点开始日期"
      >
      </el-date-picker>
      <el-date-picker
              style="width: 47%;margin-bottom: 5px"
              size="small"
              v-model="searchParams.checkDateEnd"
              type="date"
              align="center"
              value-format="yyyy-MM-dd 23:59:59"
              placeholder="盘点结束日期"
      >
      </el-date-picker>
      <el-select clearable v-model="searchParams.checkerId" placeholder="盘点员" size="small" style="width: 31%">
        <el-option
                v-for="item in allPersons"
                :key="item.id"
                :label="item.name"
                :value="item.id">
        </el-option>
      </el-select>
      <el-select clearable v-model="searchParams.warehouseDeptId" placeholder="仓库所属部门" size="small" style="width:31%">
        <el-option
          v-for="item in warehouseDeptList"
          :key="item.id"
          :label="item.name"
          :value="item.id">
        </el-option>
      </el-select>
      <el-select clearable v-model="searchParams.checkWarehouseCode" filterable placeholder="盘点仓库" size="small" style="width:31%">
        <el-option
                v-for="item in whList"
                :key="item.id"
                :label="item.name"
                :value="item.code">
        </el-option>
      </el-select>
      <el-select clearable v-model="searchParams.materialCategoryId" filterable placeholder="物料类别" size="small" style="width:31%">
        <el-option
                v-for="item in materialCategoryList"
                :key="item.id"
                :label="item.name"
                :value="item.id">
        </el-option>
      </el-select>
      <material-code :materialTypeCode="searchParams.materialCategoryId" v-model="searchParams.materialCode"></material-code>
      <el-select clearable v-model="searchParams.checkBillStatusKey" filterable placeholder="盘点单状态" size="small" style="width:31%">
        <el-option
                v-for="item in checkStockBillStatus"
                :key="item.code"
                :label="item.name"
                :value="item.code">
        </el-option>
      </el-select>

      <div class="searchBar-foot">
        <el-button type="primary" @click="search" icon="search" size="mini">搜索</el-button>
        <el-button type="success" @click="toAddStockTacking" size="mini" style="margin-left: 0px;">新建盘点单</el-button>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
    import MaterialCode from "../common/MaterialCode";
  export default {
    name:"StockTackingSearchBar",
      components:{
          MaterialCode
      },
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
      toAddStockTacking(){
        this.$router.push("/stockTacking/stockTackingAdd");
      }
    },
    computed:{
        "whList":function () {
            return this.$store.state.selectList.warehouseList;
        },
        checkStockBillStatus(){
            return this.$store.state.enumList.checkStockBillStatus;
        },
        materialCategoryList(){
            return this.$store.state.selectList.materialCategoryList
        },
        warehouseDeptList(){
            return this.$store.state.selectList.warehouseDeptList;
        },
        allPersons(){
            return this.$store.state.selectList.allPersons
        }
    },

  }
</script>
<style>

</style>
