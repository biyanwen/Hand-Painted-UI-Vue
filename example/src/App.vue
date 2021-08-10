<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <Button size="big">123</Button>
  <Button size="small">123</Button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import "hand-painted-ui-vue/dist/lib/handPainted.css"
import {Button} from 'hand-painted-ui-vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Button
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
