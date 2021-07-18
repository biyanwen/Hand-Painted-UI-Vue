<template>
  <div class="home">
    <div class="topBar">
    </div>
    <div class="homePage">
      <div class="getStart">
        GET START
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Home"
}
</script>

<style scoped>
.getStart{
  border: solid black;
  border-width: 2px 3px 2px 5px;
  max-width: 100px;
  margin-left: 40px;
  border-radius: 10px 50px 10px 50px/50px 10px 50px 10px;
}
.topBar {
  box-shadow: 0 2px 0 #888888;
  margin-bottom: 2px;
  height: 10vh;
}

.homePage {
  border: 1px solid red;
  height: 90vh;
}
</style>