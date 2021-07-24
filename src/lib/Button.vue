<template>
  <button class="handButton"
          :class="`hand-theme-${theme}`">
    <slot/>
  </button>
</template>

<script lang="ts">
export default {
  name: "Button",
  props: {
    theme: {type: String, default: "default"}
  }
}
</script>

<style lang="scss">
.handButton {
  border: 2px solid #747272;
  border-radius: 10px 50px 10px 50px/ 50px 10px 50px 10px;
  background-color: #fff;
  font-family: 'HandPainted', serif;
  font-size: 18px;
  min-width: 80px;
  height: 30px;
  opacity: 1;
  transition: 0.5s;
}

.hand-theme-link {
  color: #40adff;
  border: none;

  &:hover {
    opacity: 0.7;
  }
}

.hand-theme-text {
  border: none;

  &:hover {
    background-color: #efecec;
  }
}

.hand-theme-dashed {
  border: 2px dashed #747272;

  &:hover {
    opacity: 0.4;
  }
}

.hand-theme-default {

  &:hover {
    opacity: 0.4;
  }
}

.hand-theme-primary {
  background-color: #1890ff;
  color: white;
  border: 2px solid #0d89fa;

  &:hover {
    opacity: 0.5;
  }
}

</style>