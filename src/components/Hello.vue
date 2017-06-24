<template>
  <div class="hello">
    <div class="bgColor" style="background:url('./static/bgColor.png');background-size: 100% 100%;">
      <span>{{ msg }}</span>
    </div>
    <div class="imgPic">
      <img v-bind:src="imgsrc" alt="">
    </div>
    <form action="" class="form">
      <input class="inp inp1" v-model="username" placeholder="input usernaem" style="background: url('./static/userImg.png') no-repeat 20px 14px; ">
      <input class="inp inp2" v-model="password" type="password" placeholder="input password" style="background: url('./static/passImg.png') no-repeat 20px 14px; ">
      <router-link to="/logining" class="tiaozhuang">登录</router-link>

    </form>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '乐读',
      imgsrc:'../static/logo.png',
      username:"",
      password:""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 100%;
  height: 100%; 
  background: #f8f7f3;
}
.bgColor{
  width: 100%;
  height: 30%;
  /*background:url("./static/bgColor.png");*/
  /*background-size: 100% 100%;*/
  position: relative;
}
.bgColor span {
  width: 200px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 50%; 
  margin-left: -100px;
  margin-top: -30px;
  font-size: 3em;
  color:white;
  text-align: center;
}
.imgPic{
  position: absolute;
  top:38%;
  left: 50%;
  z-index: 2;
  width: 130px;
  height: 130px;
  margin-left: -75px;
  margin-top: -95px;
  /*border:1px solid red;*/
  border-radius: 50%;
  border-width:10px;
  border-style: solid;
  border-color: white;
    background: #f8f7f3;

}
.imgPic img{
  width: 100%;
  height: 100%;
  /*border:1px solid red;*/
  border-radius: 50%;

}
.form{
  width: 60%;
  /*height: 200px;*/
  position: absolute;  
  /*border:1px solid red;*/
  left: 20%;
  top:50%;
}
.inp{
  border-color: #e7e4df;
  margin-top: 30px;
  width: 100%;
  line-height: 50px;
  font-size: 1em;
  border-radius: 8px;
  border:none;
  box-shadow: 0 0 2px 2px #e7e4df;
  box-sizing: border-box;
  padding-left:60px;
}
/*.inp1{
  background: url("./static/userImg.png") no-repeat 20px 16px; 
}
.inp2{
  background: url("./static/passImg.png") no-repeat 20px 16px; 
}*/
.tiaozhuang{
  margin-top: 30px;
  text-decoration: none;
  font-size: 1.4em;
  background: #57bc82;
  display: inline-block;
  width: 100%;
  line-height: 50px ;
  color:white;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 0 2px 1px #e7e4df;
}

</style>
