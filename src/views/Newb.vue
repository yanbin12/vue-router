<template>
  <div>

  <router-link to='/Homepage'> 首页>{{abc}}</router-link>
  <div v-for="i in arr">
    {{i.w}}
  </div>
  </div>
  
</template>
<script>
export default {
  data(){
    return {
      abc:"",
      arr:[]
    }
  },
  watch:{
    '$route'(){
      if(this.$route.params.state==1){
      this.abc="全新楼盘"
    }else if(this.$route.params.state==2){
   this.abc="二手楼盘"
    }else if(this.$route.params.state==3){
      this.abc="全新商铺"
      }

     this.$http.post('http://localhost:8000/bin',{state:this.$route.params.state},{emulateJSON:true}).then(e=>this.arr=e.body)
    }
    
  },
  created(){
     if(this.$route.params.state==1){
      this.abc="全新楼盘"
    }else if(this.$route.params.state==2){
   this.abc="二手楼盘"
    }else if(this.$route.params.state==3){
      this.abc="全新商铺"
    }
    console.log()
    
    this.$http.post('http://localhost:8000/bin',{state:this.$route.params.state},{emulateJSON:true}).then(e=>this.arr=e.body)
    console.log(this.arr)
  }
}
</script>
<style>

</style>
