<template>
  <div class="doc">
    <ToPBar/>
    <div class="remarkIcon" @click="asideShow = !asideShow">
      <img class="remark" :src="Remark" alt="open"/>
    </div>
    <div class="main">
      <transition name="slide-fade">
        <div class="aside" v-show="asideShow">
          <div class="asideTitle">Document</div>
          <router-link class="asideText" to="/doc/info">Info</router-link>
          <div class="asideTitle">Components</div>
          <router-link class="asideText" to="/doc/switchDemo">Switch</router-link>
          <router-link class="asideText" to="/doc/buttonDemo">Button</router-link>
          <router-link class="asideText" to="/doc/dialogDemo">Dialog</router-link>
          <router-link class="asideText" to="/doc/tabsDemo">Tabs</router-link>
          <router-link class="asideText" to="/doc/radioDemo">Radio</router-link>
          <router-link class="asideText" to="/doc/calendarDemo">Calendar</router-link>
          <router-link class="asideText" to="/doc/inputDemo">Input</router-link>
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
import Remark from '../assets/icons/remark.svg'

export default {
  name: "Doc",
  components: {ToPBar, Remark},
  data: function () {
    return {
      asideShow: true
    }
  },
  setup() {
    return {Remark}
  }
}
</script>

<style lang="scss" scoped>
$title-margin-left: 10px;
$text-margin-top: 10px;
.router-link-active {
  text-decoration: underline;
}

.remarkIcon {
  display: none;
}

.docMain {
  position: relative;
  width: 100%;
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
  margin-top: $text-margin-top;
}

.main {
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
  z-index: 1;
  background-color: #fff;
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


@media (max-width: 600px) {
  .remarkIcon {
    display: block;
    width: 50px;
    height: 50px;
    position: fixed;
    left: 100px;
    top: 10px;
    z-index: 11;

    > .remark {
      width: 100%;
      height: 100%;
    }
  }
  .main {
    padding-left: 0;
  }
}
</style>