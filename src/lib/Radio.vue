<template>
  <div class="hand-radio-div" @click="changeSelect">
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
import Button from "./Button.vue";
import {onMounted, ref, watchEffect} from "vue";

export default {
  name: "Radio",
  components: {Button},
  props: {
    select: String,
    label: String
  },
  setup(props, context) {
    let selectVisible = ref(false)
    onMounted(() => {
      watchEffect(() => {
        if (props.select === props.label) {
          selectVisible.value = !selectVisible.value
        } else {
          selectVisible.value = false
        }
      })
    })

    const changeSelect = () => {
      context.emit('update:select', props.label)
    }
    return {selectVisible, changeSelect}
  }
}
</script>

<style lang="scss">
.hand-radio-div {
  width: 90px;
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