<template>
  <div id="app">
    <div id="nav">
      <header>
        <div class="head-asp"><img src="../src/assets/head-asp.png"></div>
      <ul>
        <li><router-link class="black" to="/Homepage/4">首页</router-link></li>
        <li><router-link class="black" to="/Newb/1">全新楼盘</router-link></li>
        <li><router-link class="black" to="/Newb/2">二首楼盘</router-link></li>
        <li><router-link class="black" to="/Newb/3">全新商铺</router-link></li>
        <li><router-link class="black" to="/Property">楼市动态</router-link></li>
        <li><router-link class="black" to="/Contact">联系我们</router-link></li>
      </ul>
      <div id="header-logo">
        <div id="header-xb"><img src="../src/assets/loge.png" alt=""></div>
      
      <div class="logo-number"><span>	008-6666 6666</span></div>
      <div class="Consultation"><span>资讯电话</span></div>
      </div>
      </header>
    </div>
    <!-- height 路由 -->
     <router-view/>
  </div>
</template>

<style>
*{
  text-decoration: none;
    padding: 0;
    margin: 0;
    border: 0;
    font-size: 12px;
    font-weight: normal;
    text-decoration: none;
    list-style: none;
}
#nav{
  width: 100%;
  height: 100px;
}
header{
  width: 1190px;
  height: 100px;
  margin: 0 auto;
}
header .head-asp{
width: 209px;
float: left;
height: 100px;
padding-top: 27.5px;
box-sizing: border-box;
}
header ul{
  width: 737px;
  padding-left: 60px;
  box-sizing: border-box;
  height: 100px;
  float: left;
}
header ul li{
 line-height: 100px;
  height: 100px;
  width: 90px;
  float: left;
  text-align: center

}
header ul li .black{
    color: black;

}
#header-logo{
  height:100px;
  width: 244px;
  float: left;
}
#header-xb{
height: 100px;
float: left;
padding-top: 40.5px;
box-sizing: border-box;
}
#header-xb img{
width: 19px;
height: 16px;
}
.logo-number{
  height: 100px;
  margin:0 5px;
  float: left;
}
.logo-number span{
  line-height: 100px;
}
.Consultation{
  width: 86px;
  margin-top: 34.5px;
  height: 31px;
  margin-left: 10px;
  background:#3a79e8;
  border-radius: 6px;
  text-align: center;
  float: left;
}
.Consultation span{
  line-height: 31px;
  color: #ffffff;   
}
</style>

