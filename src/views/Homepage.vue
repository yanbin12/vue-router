<template>
  <div>
    <div class="box-max">
      <!-- <div class="clear" style="clear: both;"></div> -->
      <div class="max">
    <div class="banner">
     <img src="../assets/banner-1.jpg"> 
    </div>
<div class="box-content">
<div class="con-left">
  <div class="con-left-img">
    <ul>
      <li class="con-left-l"><img src="../assets/front-1.jpg" alt=""></li>
      <li><img src="../assets/front2.jpg" alt=""></li>
      <li class="con-left-s con-left-l"><img src="../assets/front3.jpg" alt=""></li>
      <li class="con-left-s"><img src="../assets/front4.jpg" alt=""></li>
    </ul>
  </div>

  
  <!-- 4张图 -->
 <div class="over" v-for="i in state">
   <div class="apa"><P>{{i.quanxin}}</P><span>{{i.new}}</span></div>
   <ul class="lopan">
    <li class="flor" v-for="i in state">
      <img :src="i.img" alt="">
        <h3>{{i.w}}</h3>
        <span>{{i.region}}</span>
        <p>{{i.layout}}</p>
        <span>{{i.price}}</span>
  </li>
    <div class="quan">全新楼盘</div>  
   </ul>


   <!-- v-for -->
   </div>  
   <!-- 全新 -->
</div>
<!-- 左830 -->
<div class="con-right">
  
</div>
<!-- 左830 -->
</div>
     <!-- 居中1200-->    
    </div>
    <!-- 居中1259-->
</div>
<!-- 大 -->
  </div>
</template>
<script>
export default {
  data(){
    return{
      state:[]
    }
  
  },  watch:{
    '$route'(){

     this.$http.post('http://localhost:8000/bin',{state:this.$route.params.state},{emulateJSON:true}).then(e=>this.state=e.body)
    }
    
  },
    created(){
       
     this.$http.post('http://localhost:8000/bin',{state:this.$route.params.state},{emulateJSON:true}).then(e=>this.state=e.body)
    }
}
</script>
<style>
.box-max{
  width: 100%;
  height: auto;
  overflow: hidden;
}
.max{
  width:1259px;
  height:auto;
  margin: 0 auto;
  overflow: hidden;
}
.banner{
  float: left;
   width:1259px;
  height:600px;
  margin-bottom: 60px;
}
.banner img{
     width:1259px;
  height:600px;
}
.box-content{
  width: 1200px;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
}
.con-left{
  margin: 0 20px 0 40px;
  width: 820px;
  height: 1918px;
   float: left;
  background: #ff0000;
   overflow: hidden;
 }

.con-left-img{
   width: 820px;
    height: 296px;
    float: left;
    background: bisque
  }
.con-left-img ul li{
  width: 405px;
  height: 137.69px;
  float: left;
}
.con-left-img ul li img{
  width: 405px;
  height: 137.69px;
}
.con-left-img ul .con-left-s{
  margin-top: 10px;
}
.con-left-img ul .con-left-l{
  margin-right: 10px;
}
.over{
  float: left;
}
.apa{
   width: 818px;
   height: 96px;
   float: left;
  padding-top: 20px;
  box-sizing: border-box;
  text-align: center;
}
.apa p{
  color: #000;
     font-family: 微软雅黑;
    font-size: 22px;
    font-weight: bold;
    font-style: normal;
}
.apa span{
      font-family: arial;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    color: #aaaaaa
}

.lopan{
    width: 100%;
    height: auto;
    overflow: hidden;
    background:#ffffff;
      }
.flor img{
  width: 267px;
  height: 174px;
  }
.flor h3{
  font-size: 21px;
  line-height: 38px;
  }
.flor span{
  line-height: 22px;
  }
.flor p{
  line-height: 22px;
      }  
.flor{
     float: left;
     margin-right: 5px;
     width: 267px;
     height: 300px;
    }

.con-right{
    width: 280px;
    float: left;
    height: 1318px;
    background:aquamarine;
    overflow: hidden;
    }
    .quan{
      width: 100%;
      height: 38px;
      margin: 0 auto；
    }
</style>
