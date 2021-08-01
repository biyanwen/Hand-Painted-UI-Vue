<template>
  <div class="switchDemo-demoDiv">
    <div class="demo">
      <h2>{{ component.__sourceCodeTitle }}</h2>
      <div class="demo-component">
        <component :is="component"/>
      </div>
      <div class="demo-actions">
        <Button @click="codeVisible = !codeVisible" v-show="!codeVisible">show code</Button>
        <Button @click="codeVisible = !codeVisible" v-show="codeVisible">hide code</Button>
      </div>
      <div class="demo-code" id="demo-code-switch1" v-show="codeVisible">
        <pre>{{ component.__sourceCode }}</pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import {ref} from "vue";

export default {
  name: "Demo",
  components: {Button},
  props: ['component'],
  setup() {

    const codeVisible = ref<Boolean>(false)
    return {codeVisible}
  }
}
</script>

<style lang="scss" scoped>

$border-color: #d9d9d9;
$border-radius: 10px 50px/50px 10px;
$border-width: 2px 3px 3px 2px;
.switchDemo-demoDiv {
  padding: 40px;
}

.demo {
  border: solid $border-color;
  border-width: $border-width;
  border-radius: $border-radius;
  margin: 16px 0 32px;
  min-width: 32vw;

  > h2 {
    text-align: center;
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: solid $border-color;
    border-radius: $border-radius;
    border-width: $border-width;
  }

  &-component {
    padding: 16px;
    display: flex;
    justify-content: center;
  }

  &-actions {
    text-align: center;
    padding: 8px 16px;
    border-top: solid $border-color;
    border-radius: $border-radius;
    border-width: $border-width;
  }

  &-code {
    padding: 8px 16px;
    border-top: $border-color;
    border-radius: $border-radius;
    border-width: $border-width;

    > pre {
      word-wrap: break-word;
      white-space: pre-wrap;
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>