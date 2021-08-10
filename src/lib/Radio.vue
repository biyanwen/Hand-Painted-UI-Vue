<template>
  <div ref="handRadioDiv" class="hand-radio-div" @click="changeSelect">
    <div v-show="disabled" class="hand-radio-screen"></div>
    <div class="hand-radio-circle">
      <div class="hand-radio-circle2">
        <div v-show="selectVisible" class="hand-radio-circle-select"></div>
      </div>
    </div>
    <div class="hand-radio-text">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import {onMounted, ref, SetupContext, watchEffect} from "vue";
import {RadioProps} from "./Radio";

export default {
  name: "Radio",
  components: {Button},
  props: {
    select: String,
    label: String,
  },
  setup(props: RadioProps, context: SetupContext) {
    let selectVisible = ref(false)
    let handRadioDiv = ref(null)
    let disabled = ref(false)
    onMounted(() => {
      watchEffect(() => {
        if (props.select === props.label) {
          selectVisible.value = !selectVisible.value
        } else {
          selectVisible.value = false
        }
      })

      watchEffect(() => {
        disabled.value = (handRadioDiv.value as any)?.attributes?.disabled !== undefined;
      })
    })


    const changeSelect = (e: Event) => {
      if (disabled.value) {
        e.stopPropagation()
        return
      }
      context.emit('update:select', props.label)
    }
    return {selectVisible, changeSelect, handRadioDiv, disabled}
  }
}
</script>

<style lang="scss">
$width: 90px;
$height: 25px;
.hand-radio-screen {
  position: absolute;
  min-width: $width;
  height: $height;
  z-index: 2;
  cursor: not-allowed;
}

.hand-radio-div {
  padding-right: 10px;
  min-width: 90px;
  display: flex;
  align-content: center;

  > .hand-radio-text {
    background-color: white;
    margin-left: 14px;
    font-size: 25px;
    cursor: pointer;
  }

  > .hand-radio-circle {
    border: solid #7f7d7d;
    border-width: 1px 2px 2px 3px;
    width: 20px;
    height: 20px;
    border-radius: 59px 50px / 50px 31px;
    cursor: pointer;

    > .hand-radio-circle2 {
      border: solid #868484;
      border-width: 2px 1px 1px 2px;
      width: 20px;
      height: 20px;
      border-radius: 11px;
      position: relative;

      > .hand-radio-circle-select {
        background-color: #575656;
        width: 13px;
        height: 13px;
        position: absolute;
        left: 2px;
        top: 1px;
        border-radius: 101px 50px / 50px 31px;
      }
    }
  }
}

</style>