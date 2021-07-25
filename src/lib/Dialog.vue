<template>
  <div class="hand-dialog-div">
    <Button @click="modifyVisible" class="hand-dialog-button">
      <slot/>
    </Button>
    <transition name="hand-dialog-show">
      <div v-if="visible">
        <div class="hand-dialog-backdrop"></div>
        <div class="hand-dialog-frame">
          <div class="hand-dialog-close" @click="modifyVisible">
            <Close class="hand-dialog-close-svg"/>
          </div>
          <div class="hand-dialog-title">title</div>
          <div class="hand-dialog-context">hand-dialog-context</div>
          <Button class="hand-dialog-ok" @click="doOk">ok</Button>
          <Button class="hand-dialog-no" @click="doNo">no</Button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import {VueComponent as Close} from '../assets/icons/close.svg'

export default {
  name: "Dialog",
  components: {Button, Close},
  props: {
    visible: {type: Boolean, default: false},
    ok: {type: Function},
    no: {type: Function}
  },
  setup(props, context) {
    const modifyVisible = () => {
      context.emit('update:visible', !props.visible)
    }
    const doOk = () => {
      doFunction(props.ok)
    }
    const doNo = () => {
      doFunction(props.no)
    }
    const doFunction = (fun: Function) => {
      if (fun?.() !== false) {
        modifyVisible()
      }
    }
    return {modifyVisible, doOk, doNo}
  }
}
</script>

<style lang="scss">
.hand-dialog-close {
  width: 50px;
  position: absolute;
  top: 10px;
  left: 85%;
  height: 50px;

  > .hand-dialog-close-svg {
    width: 100%;
    height: 100%;
  }
}

.hand-dialog-frame {
  font-family: 'HandPainted', serif;
  border: solid #848282;
  background-color: #fff;
  border-width: 3px 2px 3px 3px;
  border-radius: 10px 50px/50px 10px;
  min-width: 400px;
  min-height: 250px;
  position: absolute;
  top: 20vh;
  left: 20vw;

  > .hand-dialog-title {
    font-size: 30px;
    position: absolute;
    margin-left: 20px;
    margin-top: 10px;
  }

  > .hand-dialog-context {
    font-size: 22px;
    position: absolute;
    top: 20%;
    width: 94%;
    max-height: 60%;
    text-align: left;
    margin-left: 10px;
  }

  > .hand-dialog-ok {
    position: absolute;
    left: 80%;
    top: 80%;
  }

  > .hand-dialog-no {
    position: absolute;
    left: 60%;
    top: 80%;
  }
}

.hand-dialog-div {
  position: relative;
}

.hand-dialog-button {
  position: absolute;
}

.hand-dialog-backdrop {
  position: absolute;
  border: 1px solid red;
  background-color: #a7a5a5;
  width: 100vw;
  height: 100vh;
  opacity: 0.2;
}

.hand-dialog-show-enter-active,
.hand-dialog-show-leave-active {
  transition: opacity 0.5s ease;
}

.hand-dialog-show-enter-from,
.hand-dialog-show-leave-to {
  opacity: 0;
}
</style>