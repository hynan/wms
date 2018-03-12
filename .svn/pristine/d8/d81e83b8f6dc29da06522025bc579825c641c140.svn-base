<template>
  <div class="card-box">
    <div class="card-box-inner">
    <div class="searchBar-main">
      <el-date-picker
        style="width: 47%;margin-bottom: 5px"
        size="small"
        v-model="searchParams.damageDateBegin"
        type="date"
        align="center"
        placeholder="报损开始日期"
       >
      </el-date-picker>
        <el-date-picker
                style="width: 47%;margin-bottom: 5px"
                size="small"
                v-model="searchParams.damageDateEnd"
                type="date"
                align="center"
                value-format="yyyy-MM-dd 23:59:59"
                placeholder="报损结束日期"
        >
      </el-date-picker>
      <el-input v-model="searchParams.damageCode" placeholder="报损单号" size="small" style="width: 31%"></el-input>
      <el-select clearable v-model="searchParams.warehouseId" placeholder="仓库" size="small" style="width:31%">
        <el-option
          v-for="item in whList"
          :key="item.id"
          :label="item.name"
          :value="item.id">
        </el-option>
      </el-select>
      <el-select clearable v-model="searchParams.materialTypeCode" filterable placeholder="物料类别" size="small" style="width:31%">
        <el-option
          v-for="item in materialCategoryList"
          :key="item.id"
          :label="item.name"
          :value="item.id">
        </el-option>
      </el-select>
      <material-code :materialTypeCode="searchParams.materialTypeCode" v-model="searchParams.materialCode"></material-code>
      <el-select clearable v-model="searchParams.damageBillStatusKey" filterable placeholder="报损单状态" size="small" style="width:31%">
        <el-option
          v-for="item in damageBillStatus"
          :key="item.code"
          :label="item.name"
          :value="item.code">
        </el-option>
      </el-select>

      <div class="searchBar-foot">
        <el-button type="primary" @click="search" icon="search" size="mini">搜索</el-button>
        <el-button type="success" @click="toAddStockTacking" size="mini" style="margin-left: 0px;">新建报损单</el-button>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
    import MaterialCode from "../common/MaterialCode";
  export default {
      components: {MaterialCode},
      name:"ReportedLossSearchBar",
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
        this.$router.push("/reportedLoss/reportedLossAdd");
      },
    },
    computed:{
      "whList":function () {
        return this.$store.state.selectList.warehouseList;
      },
        damageBillStatus(){
            return this.$store.state.enumList.damageBillStatus;
        },
        materialCategoryList(){
            return this.$store.state.selectList.materialCategoryList
        }
    },

  }
</script>
<style>

</style>
