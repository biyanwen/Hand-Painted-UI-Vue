<template>
  <div class="switchDemo">
    <h1>Examples</h1>
    <div class="switchDemo-demoDiv">
      <div class="demo">
        <h2>Basic</h2>
        <div class="demo-component">
          <SwitchDemo1/>
        </div>
        <div class="demo-actions">
          <Button @click="showCode1">show code</Button>
        </div>
        <div class="demo-code" id="demo-code-switch1">
          <pre>{{ SwitchDemo1.__sourceCode }}</pre>
        </div>
      </div>
      <div class="demo">
        <h2>disabled </h2>
        <div class="demo-component">
          <SwitchDemo2/>
        </div>
        <div class="demo-actions">
          <Button @click="showCode2">show code</Button>
        </div>
        <div class="demo-code" id="demo-code-switch2">
          <pre>{{ SwitchDemo2.__sourceCode }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SwitchDemo1 from '../components/SwitchDemo1.vue'
import SwitchDemo2 from '../components/SwitchDemo2.vue'
import Button from "../lib/Button.vue";

export default {
  name: "SwitchDemo",
  components: {Button, SwitchDemo1, SwitchDemo2},
  setup() {
    const showCode1 = () => {
      let showCodeOne = document.getElementById('demo-code-switch1');
      if (showCodeOne.style.display === 'none') {
        showCodeOne.style.display = "block"
      } else {
        showCodeOne.style.display = 'none'
      }
    }
    const showCode2 = () => {
      let showCodeOne = document.getElementById('demo-code-switch2');
      if (showCodeOne.style.display === 'none') {
        showCodeOne.style.display = "block"
      } else {
        showCodeOne.style.display = 'none'
      }
    }
    return {SwitchDemo1, SwitchDemo2, showCode1, showCode2}
  }
}
</script>

<style lang="scss">
$border-color: #d9d9d9;
$border-radius: 10px 50px/50px 10px;
$border-width: 2px 3px 3px 2px;
.switchDemo {
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
  justify-content: center;

  > h1 {
    font-size: 40px;
    width: 100%;
    text-align: center;
  }

  &-demoDiv {
    margin-top: 40px;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}

.demo {
  border: solid $border-color;
  border-width: $border-width;
  border-radius: $border-radius;
  margin: 16px 0 32px;
  min-width: 28vw;

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