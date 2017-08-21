<template>
  <div class="navbar" :class="{'width-shortnav':isShortNav}">
    <div class='text-center menu-icon' @click='isShortNav=!isShortNav'>
      <span class='ti-menu padding15'></span>
    </div>
    <div class='menu-list'>
      <ul>
        <li>
          <!-- 每个导航的标题部分 -->
          <div class='nav-title'>
            <div class='navbar-item' data-toggle="collapse" href="#tab1" aria-expanded="false" aria-controls="collapseExample" @click='isNavCollapse=!isNavCollapse'>
              <div class='shortnav'>
                <span class='ti-angle-right padding15 mini-fontsize' v-if='!isNavCollapse'></span>
                <span class='ti-angle-down padding15 mini-fontsize' v-if='isNavCollapse'></span>
              </div>
              <span>数据建模</span>
            </div>
            <div class='hover-item' v-if='isShortNav'>数据建模
              <span class="bot"></span>
              <span class="top"></span>
            </div>
          </div>
  
          <div class="collapse" id="tab1">
            <ul>
              <li class='nav-title'>
                <div class='subnav-list-item'>
                  <span class='ti-joomla padding15 mini-fontsize shortnav'></span>
                  <span class='subnav'>我的模型</span>
                </div>
                <div class='hover-item' v-if='isShortNav'>我的模型
                  <span class="bot"></span>
                  <span class="top"></span>
                </div>
              </li>
              <li class='nav-title'>
                <div class='subnav-list-item'>
                  <span class='ti-joomla padding15 mini-fontsize shortnav'></span>
                  <span class='subnav'>查看结果</span>
                </div>
                <div class='hover-item' v-if='isShortNav'>查看结果
                  <span class="bot"></span>
                  <span class="top"></span>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div class='nav-title'>
            <div class='navbar-item' data-toggle="collapse" href="#tab2" aria-expanded="false" aria-controls="collapseExample" @click='isNavCollapse1=!isNavCollapse1'>
              <div class='shortnav'>
                <span class='ti-angle-right padding15 mini-fontsize' v-if='!isNavCollapse1'></span>
                <span class='ti-angle-down padding15 mini-fontsize' v-if='isNavCollapse1'></span>
              </div>
              <span>旅客信息</span>
            </div>
            <div class='hover-item' v-if='isShortNav'>旅客信息
              <span class="bot"></span>
              <span class="top"></span>
            </div>
          </div>
        </li>
        <li>
          <div class='nav-title'>
            <div class='navbar-item' data-toggle="collapse" href="#tab3" aria-expanded="false" aria-controls="collapseExample" @click='goToBaipiPage("/baipi")'>
              <div class='shortnav'>
                <span class='ti-angle-right padding15 mini-fontsize' v-if='!isNavCollapse2'></span>
                <span class='ti-angle-down padding15 mini-fontsize' v-if='isNavCollapse2'></span>
              </div>
              <span>白皮书信息</span>
            </div>
            <div class='hover-item' v-if='isShortNav'>白皮书信息
              <span class="bot"></span>
              <span class="top"></span>
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
  name: 'navbar',
  data() {
    return {
      isNavCollapse: false,
      isNavCollapse1: false,
      isNavCollapse2: false,
      isShortNav: false
    }
  },
  components: {

  },
  
  created() {

  },
  methods: {
    goToBaipiPage(path){
      this.isNavCollapse2 = !this.isNavCollapse
      this.$router.push(path);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  width: 200px;
  position: fixed;
  left: 0;
  top: 60px;
  bottom: 0;
  z-index: 24;
  background: #333744;
  padding: 0;
  text-align: left;
  cursor: pointer;
  color: #fff;
}

.menu-icon {
  background-color: #4A5064;
  height: 40px;
  line-height: 40px;
}

.menu-list {
  background-color: #42485B;
}

.navbar-item {
  height: 40px;
  line-height: 40px;
  overflow: hidden;
}

.subnav-list-item {
  overflow: hidden;
  height: 40px;
}

.navbar-item:hover {
  background: #00C1DE;
}

.navbar-item-list {
  overflow: hidden;
}

.collapse li:hover {
  background: #4A5064;
}

.subnav {
  display: inline-block;
  height: 40px;
  line-height: 40px;
}

.shortnav {
  width: 42px;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  text-align: center;
}

.width-shortnav {
  width: 42px !important;
}

.hover-item {
  display: none;
  position: absolute;
  left: 70px;
  top: -19px;
  background: #373D41;
  color: #fff;
  width: 80px;
  height: 40px;
  border-radius: 100%;
  -o-border-radius: 100%;
  -ms-border-radius: 100%;
  -moz-border-radius: 100%;
  -webkit-border-radius: 100%;
  line-height: 40px;
  text-align: center;
}

.nav-title {
  position: relative;
}

.nav-title:hover .hover-item {
  display: inline-block;
}

.hover-item span {
  background: #5A5F63;
  overflow: hidden;
  position: absolute;
}

.hover-item span.bot {
  width: 15px;
  height: 15px;
  -moz-border-radius: 15px;
  -webkit-border-radius: 15px;
  border-radius: 15px;
  left: -6px;
  top: 33px;
}

.hover-item span.top {
  width: 10px;
  height: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
  left: -20px;
  bottom: -16px;
}
</style>
