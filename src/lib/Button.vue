<template>
  <button class="handButton"
          :class="`hand-theme-${theme}
                   hand-level-${level}
                   hand-size-${size}`">
    <span v-if="loading" class="hand-loading"></span>
    <slot/>
  </button>
</template>

<script lang="ts">
export default {
  name: "Button",
  props: {
    theme: {type: String, default: "default"},
    level: {type: String, default: "default"},
    size: {type: String, default: "default"},
    loading: {type: Boolean, default: false}
  }
}
</script>

<style lang="scss">
.handButton {
  border: 2px solid #a5a4a4;
  border-radius: 10px 50px 10px 50px/ 50px 10px 50px 10px;
  background-color: #fff;
  font-family: 'HandPainted', serif;
  padding: 10px;
  font-size: 18px;
  min-width: 50px;
  height: 40px;
  opacity: 1;
  transition: 250ms;
}

.hand-loading {
  width: 14px;
  height: 14px;
  display: inline-block;
  margin-right: 4px;
  border-radius: 8px;
  border: 2px dashed;
  animation: hand-loading-action 1s infinite linear;

}

@keyframes hand-loading-action {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}

.hand-size-big {
  font-size: 28px;
  height: 58px;
  padding: 0 16px;

}

.hand-size-small {
  font-size: 12px;
  height: 20px;
  padding: 0 4px;
}

.hand-level-success {
  background-color: #d0dbc2;
  color: #6c844d;
  border: solid #86a361;
}

.hand-level-warning {
  background-color: #f5f0c6;
  color: #cab925;
  border: solid #ddcd45;
}

.hand-level-danger {
  background-color: #f0cbc9;
  border: solid #a7342d;
  color: #7f2722;
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

[class ^="hand"][disabled] {
  cursor: not-allowed;
  opacity: 0.7;
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