<template>
  <div class="logo">
    <div class='personal-center right'>
      <ul>
        <li class='logo-nav-right logo-nave-right-seting'>
          <div class='personal-center-title padding15'>设置</div>
           <div class='setting'>
             <span>设置内容1</span>
             <span>设置内容2</span>
             <span>设置内容3</span>
          </div> 
        </li>
        <li class='logo-nav-right'>
          <div class='personal-center-title padding15'>个人中心</div>
          <div class='personal-center-list'>
            <div class='personal-center-list-item'>
                <div class='ti-pinterest-alt'></div>
                <div>基本资料</div> 
            </div>
            <div class='personal-center-list-item'>
                 <div class='ti-pinterest-alt'></div>
                 <div>基本资料</div> 
            </div>
            <div class='personal-center-list-item'>
                 <div class='ti-pinterest-alt'></div>
                 <div>基本资料</div> 
            </div>
            <div class='personal-center-list-item'>
                 <div class='ti-pinterest-alt'></div>
                 <div>基本资料</div> 
            </div>
            <div class='personal-center-list-item'>
                 <div class='ti-pinterest-alt'></div>
                 <div>基本资料</div> 
            </div>
            <div class='personal-center-list-item'>
                 <div class='ti-pinterest-alt'></div>
                 <div>基本资料</div> 
            </div>
          </div>
        </li>
        
      </ul>
  
    </div>
  </div>
</template>
<script>
import TestService from '../service/TestService';
export default {
  name: 'logo',
  data() {
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {

  },
  created() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 60px;
  background: #373D41;
  color: #fff;
  line-height: 60px;
  z-index:10;
}
.logo ul li {
  display: inline-block;
}
.personal-center {
  position: relative;
  display: inline-block;
}
.personal-center-title {
  width: 100px;
  display: inline-block;
  cursor: pointer;
}

.personal-center-list {
  position: absolute;
  top: 60px;
  right: 0;
  background: red;
  display: none;   
  background: #fff;
  color: black;
  padding:10px; 
  box-shadow: 0 1px 1px rgba(0,0,0,0.15);
  width: 330px; 
}
.setting {
  position: absolute;
  top: 60px;
  right: 0;
  background: red;
   display: none;    
  background: #fff;
  color: black;
    /* padding:10px;    */
  box-shadow: 0 1px 1px rgba(0,0,0,0.15);
  line-height: 30px;
}
.setting span {
  display: block;
  padding:10px;
}
.logo-nav-right {
  position: relative;
}
.logo-nav-right:hover .personal-center-list {
   display: inline-block; 
}
.logo-nave-right-seting:hover .setting {
  display: inline-block;
}  
 .personal-center-list-item {
  display: inline-block;
  width: 90px;
  padding-top:15px;
} 
.personal-center-list-item:hover, .setting span:hover{
  background-color: #F5F5F6;
  cursor: pointer;
}
</style>
