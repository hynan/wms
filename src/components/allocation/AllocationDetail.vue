<template>
  <div class="">
    <div class="">
        <top-nav :id="id"></top-nav>
        <router-view style="margin-top: -42px" class="not-print"></router-view>
    </div>
  </div>
</template>
<script>
  import NavBar from './TopNavBtn.vue'

  export default {
    name:"AllocationDetail",
    mounted:function(){
      this.id = this.$route.params.id;
    },
    data(){
      return {
        id:0,
      }
    },
    methods:{
    },
    components:{
      "top-nav":NavBar,
    },
    watch:{
      "$route": function(){
        this.id = this.$route.params.id;
      }
    }
  }
</script>
<style scoped>

</style>
