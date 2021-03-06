<template>
  <teleport to="body">
    <div class="hand-dialog-div">
      <div class="hand-dialog-backdrop" v-if="visible"></div>
      <transition name="hand-dialog-show">
        <div class="hand-dialog-frame" v-if="visible">
          <div class="hand-dialog-close" @click="modifyVisible">
            <img class="hand-dialog-close-svg" :src="Close" alt="open"/>
          </div>
          <div class="hand-dialog-title">
            <slot name="title">title</slot>
          </div>
          <div class="hand-dialog-context">
            <slot name="context">This is a message</slot>
          </div>
          <Button class="hand-dialog-ok" @click="doOk">
            <slot name="ok">ok</slot>
          </Button>
          <Button class="hand-dialog-no" @click="doNo">
            <slot name="no">no</slot>
          </Button>
        </div>
      </transition>
    </div>
  </teleport>
</template>

<script lang="ts">
// @ts-ignore
import Button from './Button.vue'
// @ts-ignore
import Close from "../assets/icons/close.svg"
import {defineComponent} from "vue";

export default defineComponent({
  name: "Dialog",
  // @ts-ignore
  components: {Button, Close},
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    ok: {
      type: Function,
      require: true
    },
    no: {
      type: Function,
      require: true
    }
  },
  setup(props, context) {
    const modifyVisible = () => {
      context.emit('update:visible', !props.visible)
    }
    const doOk = () => {
      if (props.ok && props.ok() !== false) {
        modifyVisible()
      }
    }

    const doNo = () => {
      props.no && props.no()
      modifyVisible()
    }
    return {modifyVisible, Close, doOk, doNo}
  }
})
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
  z-index: 11;
  position: fixed;
  top: 30%;

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
  display: flex;
  justify-content: center;
}

.hand-dialog-button {
  position: absolute;
}

.hand-dialog-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #a7a5a5;
  opacity: 0.2;
  z-index: 10;
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