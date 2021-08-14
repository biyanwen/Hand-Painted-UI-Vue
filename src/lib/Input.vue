<template>
  <div class="hand-input-div">
    <div class="hand-input-set-off"></div>
    <input class="hand-input"
           :placeholder='placeholder'
           ref="inputRef"
           v-model="mValue"
           @input="updateData"
    >
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref, watchEffect} from "vue";

export default defineComponent({
  name: "Input",
  props: {
    inputValue: {
      type: String,
    },
    placeholder: String,
  },
  setup(props, context) {
    let mValue = props.inputValue
    onMounted(() => {
      watchEffect(() => {
        mValue = props.inputValue
      })
    })
    const inputRef = ref(document.createElement('input'))
    let updateData = () => {
      context.emit('update:inputValue', inputRef.value.value)
    }
    return {inputRef, mValue, updateData}
  }
})
</script>

<style lang="scss" scoped>


.hand-input-div {
  position: relative;
  transition: all 250ms;

  > .hand-input-set-off {
    position: absolute;
    border: solid #b6b6b6;
    height: 40px;
    width: 165px;
    z-index: -1;
  }

  > .hand-input {
    padding-left: 10px;
    height: 40px;
    width: 160px;
    border: solid #b6b6b6;
    border-width: 3px 2px 2px 1px;
    border-radius: 10px 50px / 50px 10px;
    opacity: 0.8;
  }
}

.hand-input-div:hover {
  opacity: 0.6;
}

.hand-input:focus {
  border: 3px solid #636262;
}
</style>