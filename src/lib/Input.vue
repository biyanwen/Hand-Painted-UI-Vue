<template>
  <div ref="handInputDiv" class="hand-input-div">
    <div class="hand-input-set-off"></div>
    <input class="hand-input"
           :placeholder='placeholder'
           ref="inputRef"
           @input="updateData"
           type="text"
    >
    <div v-show="cleanIconShow" class="hand-input-clean" @click="clearInput">
      <img class="hand-input-clean-icons" :src="Clean" alt="clean">
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, ref, watchEffect} from "vue";
import Clean from '../assets/icons/clean.svg'

export default defineComponent({
  name: "Input",
  components: {Clean},
  props: {
    inputValue: String,
    placeholder: String,
  },
  setup(props, context) {
    const inputRef = ref(document.createElement('input'))
    const handInputDiv = ref(document.createElement('div'))
    let cleanIconShow = ref(false)
    const disabled = () => {
      return handInputDiv.value.attributes.getNamedItem('disabled') !== null
    }
    const password = computed(() => {
      return handInputDiv.value.attributes.getNamedItem('password') !== null
    })
    const clearable = () => {
      return handInputDiv.value.attributes.getNamedItem('clearable') !== null
    }
    let mValue
    onMounted(() => {
      watchEffect(() => {
        mValue = props.inputValue
      })

      watchEffect(() => {
        if (disabled()) {
          inputRef.value.disabled = true
        }
      })

      watchEffect(() => {
        if (password.value) {
          inputRef.value.type = 'password'
        }
      })
    })
    let updateData = () => {
      context.emit('update:inputValue', inputRef.value.value)
      if (clearable() && inputRef.value.value !== '') {
        cleanIconShow.value = true
      }
    }
    const clearInput = () => {
      inputRef.value.value = ''
    }
    return {
      inputRef, mValue, updateData, handInputDiv,
      cleanIconShow, Clean, clearInput
    }
  }
})
</script>

<style lang="scss">


.hand-input-div {
  position: relative;
  transition: all 250ms;
  width: 180px;

  > .hand-input-clean {
    position: absolute;
    left: 148px;
    height: 25px;
    top: 10px;
    cursor: pointer;

    > .hand-input-clean-icons {
      height: 100%;
    }
  }

  > .hand-input-set-off {
    position: absolute;
    border: solid #b6b6b6;
    height: 40px;
    width: 175px;
    z-index: -1;
  }

  > .hand-input {
    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 30px;
    height: 40px;
    width: 100%;
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