<template>
  <div class="topBar">
  </div>
</template>

<script lang="ts">

export default {
  name: "TopBar",
  setup() {
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
  width: 100%;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}
</style>