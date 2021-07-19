<template>
  <div class="topBar" @click="toggleMenu">
    <div class="list"></div>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from "vue";

export default {
  name: "TopBar",
  setup() {
    const asideShow = inject<Ref<boolean>>('asideShow')
    const toggleMenu = () => {
      asideShow.value = !asideShow.value
    }
    return {toggleMenu}
  },
  data: function () {
    return {}
  }
}
</script>

<style scoped>
.topBar {
  box-shadow: 0 2px 0 #eeeded;
  margin-bottom: 2px;
  height: 10vh;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}
.list {
  border: 1px solid black;
  width: 50px;
  height: 50px;
}
</style>