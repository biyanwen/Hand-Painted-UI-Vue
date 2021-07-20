<template>
  <div class="home">
    <ToPBar/>
    <div class="homePage">
      <button class="getStart" @click="toDoc">
        GET START
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import route from "../route/route";
import ToPBar from "../components/TopBar.vue"

export default {
  name: "Home",
  components: {ToPBar},
  setup() {
    let toDoc = function () {
      route.push("doc")
    }
    return {
      toDoc
    }
  }
}
</script>

<style scoped>
.getStart {
  border: solid black;
  border-width: 2px 3px 2px 5px;
  max-width: 100px;
  margin-left: 40px;
  margin-top: 100px;
  border-radius: 10px 50px 10px 50px/50px 10px 50px 10px;
}

.homePage {
  border: 1px solid red;
  height: 90vh;
}
</style>