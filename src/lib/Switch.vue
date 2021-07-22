<template>
  <div class="hand-div">
    <div :class="{divButtonOffColor: !onOrOff,divButtonOnColor:onOrOff}" @click="switchWord" class="hand-divButton ">
      <div :class="{wordOff: !onOrOff,wordOn:onOrOff}" class="hand-word">off</div>
      <div @click="switchStatus" :class="{divSpanOffLeft:!onOrOff,divSpanOnLeft:onOrOff}" class="hand-divSpan">
        <div class="hand-line"></div>
        <div class="hand-lineAid"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: "Switch",
  props: {onOrOff: Boolean},
  setup(props, context) {
    let switchStatus = () => {
      context.emit("update:onOrOff", !props.onOrOff)
    }
    let switchWord = () => {
      let word = document.getElementsByClassName('hand-word')[0]
      if (props.onOrOff) {
        word.innerHTML = 'on'
      } else {
        word.innerHTML = 'off'
      }
    }
    return {switchWord, switchStatus}
  }
}
</script>

<style lang="scss" >
.hand-div {
  height: 100vh;

  > .hand-divButton {
    border: solid #929090;
    width: 50px;
    height: 20px;
    border-width: 2px 3px 2px 4px;
    border-radius: 27px 50px / 42px 28px;
    position: relative;

    > .hand-word {
      font-family: 'HandPainted', serif;
      top: 2px;
      position: absolute;
    }

    > .hand-divSpan {
      position: absolute;
      background-color: white;
      width: 20px;
      height: 19px;
      border-width: 1px 2px 2px 2px;
      border-radius: 50px;
      transition: 0.5s;

      > .hand-line {
        border: 2px solid #929090;
        width: 10px;
        height: 10px;
        top: 2px;
        left: 3px;
        border-radius: 100px 100px 0 0;
        position: absolute;
      }

      > .hand-lineAid {
        background-color: #fff;
        height: 10px;
        top: 6px;
        left: 3px;
        width: 15px;
        position: absolute;
      }
    }
  }
}

.wordOff {
  left: 23px;
  color: black;
}

.wordOn {
  left: 3px;
  color: white;
  font-size: 17px;
}

.divSpanOnLeft {
  left: 28px;
}

.divSpanOffLeft {
  left: 3px;
}

.divButtonOnColor {
  background-color: #62b9d7;
}

.divButtonOffColor {
  background-color: #d4d2d2;
}

</style>