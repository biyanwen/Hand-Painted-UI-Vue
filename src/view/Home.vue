<template>
  <div class="home">
    <ToPBar/>
    <div class="homePage">
      <div class="vuePng">
        <img src="../assets/png/Vue.png" alt="vue"/>
      </div>
      <span class="des">This is a Hand Painted UI for Vue3.js
      </span>
      <Button class="getStart" @click="toDoc">GET START</Button>
      <Button class="github" @click="toGithub">GITHUB</Button>
      <div class="featureDiv">
        <div class="approachableDiv">
          <span class="approachable">Approachable</span>
          <span class="approachableContext">Use this UI just need simple config</span>
          <span></span>
        </div>
        <div class="versatileDiv">
          <span class="versatile">Versatile</span>
          <span class="versatileContext">Provides many components</span>
          <span></span>
        </div>
        <div class="tsDiv">
          <span class="ts">TypeScript</span>
          <span class="tsContext">Use TypeScript</span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import route from "../route/route";
import ToPBar from "../components/TopBar.vue"
import Button from "../lib/Button.vue";

export default {
  name: "Home",
  components: {ToPBar, Button},
  setup() {
    let toDoc = () => {
      route.push("doc")
    }
    let toGithub = () => {
      window.location.href = "https://github.com/biyanwen/Hand-Painted-UI-Vue"
    }
    return {
      toDoc,
      toGithub
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  font-family: 'HandPainted', serif;
}


.homePage {
  height: 90vh;
  display: flex;
  justify-content: center;

  .featureDiv {
    position: absolute;
    width: 90%;
    top: 500px;
    display: flex;
    justify-content: space-between; ;

    > .tsDiv {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      width: 300px;

      > .ts {
        font-size: 40px;
      }

      > .tsContext {
        font-size: 20px;
        margin-top: 25px;
      }
    }

    > .versatileDiv {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      width: 300px;

      > .versatile {
        font-size: 40px;
      }

      > .versatileContext {
        font-size: 20px;
        margin-top: 25px;
      }
    }

    > .approachableDiv {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      width: 300px;

      > .approachable {
        font-size: 40px;
      }

      > .approachableContext {
        font-size: 20px;
        margin-top: 25px;
      }
    }

  }


  > .getStart {
    top: 342px;
    left: 750px;
    position: absolute;
  }

  > .github {
    top: 342px;
    left: 600px;
    position: absolute;
  }

  > .des {
    position: absolute;
    top: 169px;
    font-size: 65px;
    max-width: 50vw;
    left: 500px;
  }

  > .vuePng {
    width: 230px;
    left: 250px;
    margin-top: 150px;
    position: absolute;

    > img {
      width: 100%;
    }
  }
}
</style>