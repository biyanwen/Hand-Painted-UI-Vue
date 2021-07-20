<template>
  <div class="doc">
    <ToPBar/>
    <MyIcon/>
    <button class="showAsideList" @click="asideShow = !asideShow"></button>
    <div class="main">
      <transition name="slide-fade">
        <div class="aside" v-show="asideShow">
          <div class="asideTitle">组件列表</div>
          <router-link class="asideText" to="/doc/switch">Switch 开关</router-link>
        </div>
      </transition>
      <div class="docMain">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ToPBar from "../components/TopBar.vue"
import { VueComponent as MyIcon } from '../assets/icons/remark.svg'

export default {
  name: "Doc",
  components: {ToPBar, MyIcon},
  data: function () {
    return {
      asideShow: true
    }
  },
  setup() {
  }
}
</script>

<style lang="scss" scoped>
$title-margin-left: 10px;
$text-margin-top: 10px;
.showAsideList {
  width: 50px;
  height: 50px;
  background-color: red;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 11;
}

.docMain {
  position: relative;
  width: 100%;
  border: 1px solid red;
  overflow: auto;
}

.asideText {
  color: black;
  display: flex;
  margin-left: $title-margin-left;
  font-size: 25px;
  margin-top: $text-margin-top;
}

.asideTitle {
  display: flex;
  font-size: 30px;
  font-weight: bolder;
  margin-left: $title-margin-left;
}

.main {
  border: 1px solid black;
  display: flex;
  padding-left: 250px;
  margin-top: 10vh;
}

.aside {
  box-shadow: 2px 0 #eeeded;
  height: 100%;
  min-width: 240px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 80px;
}

// 侧边栏动画
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>