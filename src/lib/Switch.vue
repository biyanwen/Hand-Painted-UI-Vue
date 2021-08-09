<template>
  <div class="hand-div">
    <div :class="{handDivButtonOffColor: !onOrOff,handDivButtonOnColor:onOrOff}" @click="switchWord"
         class="hand-divButton ">
      <div :class="{handWordOff: !onOrOff,handWordOn:onOrOff}" class="hand-word">off</div>
      <div @click="switchStatus" :class="{handDivSpanOffLeft:!onOrOff,handDivSpanOnLeft:onOrOff}" class="hand-divSpan">
        <div class="hand-line"></div>
        <div class="hand-lineAid"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
interface SwitchProps {
  onOrOff: Boolean
}

interface SwitchContext {
  emit: (event: string, ...args: unknown[]) => void
}

export default {
  name: "Switch",
  props: {onOrOff: Boolean},
  setup(props: SwitchProps, context: SwitchContext) {
    const hasDisabled = (e: Event) => {
      return (e.currentTarget as any)?.parentElement.parentElement
          .attributes.getNamedItem("disabled") !== null
    }
    let switchStatus = (e: Event) => {
      if (hasDisabled(e)) {
        e.stopPropagation()
        return
      }
      context.emit("update:onOrOff", !props.onOrOff)
    }
    let switchWord = (e: Event) => {
      let word = (e.currentTarget as any)?.childNodes[0];
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

<style lang="scss">
.hand-div {

  > .hand-divButton {
    width: 50px;
    height: 20px;
    border-width: 2px 3px 2px 4px;
    border-radius: 27px 50px / 42px 28px;
    position: relative;

    > .hand-word {
      font-family: 'HandPainted', serif;
      top: 1px;
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

.handWordOff {
  left: 23px;
  color: black;
}

.handWordOn {
  left: 3px;
  color: white;
  font-size: 17px;
}

.handDivSpanOnLeft {
  left: 28px;
}

.handDivSpanOffLeft {
  left: 3px;
}

.handDivButtonOnColor {
  background-color: #a2cef6;
  border: solid #0071de;
}

.handDivButtonOffColor {
  background-color: #d4d2d2;
  border: solid #929090;
}

</style>