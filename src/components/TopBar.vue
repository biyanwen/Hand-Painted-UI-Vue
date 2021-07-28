<template>
  <div class="topBar">
    <div class="topBarVuePng">
      <img src="../assets/png/Vue.png">
    </div>
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