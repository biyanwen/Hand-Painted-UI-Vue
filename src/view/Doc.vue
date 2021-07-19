<template>
  <div class="doc">
    <ToPBar class="topBar" />
    <div class="main">
      <div class="aside" v-show="asideShow">
        <div class="asideTitle">组件列表</div>
        <router-link class="asideText" to="/doc/switch">Switch 开关</router-link>
      </div>
      <div class="docMain">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ToPBar from "../components/TopBar.vue"
import {provide, ref} from 'vue'

export default {
  name: "Doc",
  components: {ToPBar},
  setup() {
    const asideShow = ref(false)
    provide('asideShow', asideShow)
    return {asideShow}
  }
}
</script>

<style lang="scss" scoped>
$title-margin-left: 10px;
$text-margin-top: 10px;
.doc {
  display: flex;
  flex-direction: column;
  height: 100vh;
}


.docMain {
  position: relative;
  width: 100%;
  border: 1px solid red;
  //position: absolute;
  //right: 0;
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
  border: 1px solid red;
  display: flex;
  padding-left: 250px;
}

.aside {
  box-shadow: 2px 0 #eeeded;
  height: 100%;
  min-width: 240px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 80px;
  transition: 2s;
}
.topBar {
  position: relative;
}
</style>