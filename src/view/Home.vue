<template>
  <div class="home">
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
    justify-content: space-between;;

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
    top: 312px;
    left: 750px;
    position: absolute;
  }

  > .github {
    top: 312px;
    left: 600px;
    position: absolute;
  }

  > .des {
    position: absolute;
    top: 129px;
    font-size: 65px;
    max-width: 50vw;
    left: 500px;
  }

  > .vuePng {
    width: 230px;
    margin-top: 120px;
    position: absolute;

    > img {
      width: 100%;
    }
  }
}

@media (min-width: 1201px) {
  .vuePng {
    left: 210px;
  }
}

@media (max-width: 1200px) {
  $pageTop: 100px;
  $pageLeft: 33%;
  .homePage {
    height: 90vh;
    display: flex;
    justify-content: center;

    .featureDiv {
      position: absolute;
      top: $pageTop + 650px;
      width: 100%;
      height: 70%;
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      align-items: center;

      > .tsDiv {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 300px;
        margin-bottom: 25px;

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
      top: $pageTop +  562px;
      left: $pageLeft - 5%;
      position: absolute;
    }

    > .github {
      top: $pageTop +  562px;
      left: $pageLeft + 25%;
      position: absolute;
    }

    > .des {
      position: absolute;
      top: $pageTop + 280px;
      font-size: 65px;
      max-width: 70vw;
      left: $pageLeft - 20%;
    }

    > .vuePng {
      width: 230px;
      margin-top: $pageTop;

      > img {
        width: 100%;
      }
    }
  }
}
</style>