<template>
  <ToPBar class="topBar"/>
  <div class="aside"></div>
  <div class="docMain">
    <div class="docMainText"></div>
  </div>
</template>

<script lang="ts">
import ToPBar from "../components/TopBar.vue"

export default {
  name: "Doc",
  components: {ToPBar}
}
</script>

<style scoped>
.docMain{
  display: flex;
  flex-wrap: nowrap;
}
.aside{
  box-shadow: 2px 0 #eeeded;
  height: 100%;
  width: 300px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>