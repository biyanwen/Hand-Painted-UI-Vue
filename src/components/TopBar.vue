<template>
  <div class="topBar">
    <div class="topBarVuePng">
      <img @click="toHome" src="../assets/png/Vue.png">
    </div>
    <a href="https://github.com/biyanwen/Hand-Painted-UI-Vue" class="githubA">Github</a>
  </div>
</template>

<script lang="ts">

import route from "../route/route";

export default {
  name: "TopBar",
  setup() {
    const toHome = () => {
      route.push('/')
    }
    return {toHome}
  },
}
</script>

<style lang="scss" scoped>

.topBar {
  box-shadow: 0 2px 0 #eeeded;
  margin-bottom: 2px;
  height: 70px;
  width: 100%;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  > .githubA {
    font-family: 'HandPainted', serif;
    z-index: 11;
    width: 50px;
    height: 50px;
    position: fixed;
    right: 80px;
    top: 17px;
    font-size: 35px;
    color: #4e4d4d;
  }

  > .topBarVuePng {
    width: 65px;
    margin-left: 20px;
    margin-top: 5px;
    z-index: 11;

    > img {
      width: 100%;
    }
  }
}
</style>