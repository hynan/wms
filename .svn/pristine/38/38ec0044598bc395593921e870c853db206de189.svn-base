<template>
    <div style="display:inline-block">
    <el-select v-model="province" placeholder="省份" size="small" :clearable="true">
      <el-option
        v-for="item in provinces"
        :label="item.name"
        :key="item.code"
        :value="item.name">
      </el-option>
    </el-select>
    </div>
</template>
<script>
   import area from './area';
   export default{
    name :'ProvincesSelect',
    props:['value'],
    mounted(){
      this.provinces = area.provinces;
    },
    data(){
      return {
        provinces:[],
        province:this.value
      }
    },
    watch:{
      'province':function(nval){
        this.$emit('input',nval);
      },
      'value':function(nval){
        this.province = nval;
      }
    }

   }
</script>
