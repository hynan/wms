<template>
  <div>
    <table class="info-table" style="width: 98%;margin:5px auto">
      <tbody>
      <tr>
        <td >报损单号:</td>
        <td>{{info.damageBillCode}}</td>
        <td >仓库:</td>
        <td>{{info.warehouseName}}</td>
      </tr>
      <tr>
        <td >外来单号:</td>
        <td>{{info.externalCode}}</td>
        <td >报损员:</td>
        <td>{{info.damageUserName}}</td>
      </tr>
      <tr>
        <td >报损日期: </td>
        <td>{{info.createDate}}</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>备注:</td>
        <td colspan="3">{{info.remarks}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default{
    name:"Info",
      props:['info'],
    mounted(){

    },
    data(){
      return{

      }
    },
    methods:{

    },
  }
</script>
<style>

</style>
