<template>
  <div class="div">
    <div class="divButton">
      <div class="word">off</div>
      <div class="divSpan">
        <div class="line"></div>
        <div class="lines"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Switch"
}
</script>

<style lang="scss" scoped>
.div {
  height: 100vh;

  > .divButton {
    background-color: #d4d2d2;
    border: solid #929090;
    width: 50px;
    height: 20px;
    border-width: 2px 3px 2px 4px;
    border-radius: 27px 50px / 42px 28px;
    position: relative;

    >.word{
      font-family: 'HandPainted',serif;
      color: black;
      top: 2px;
      position: absolute;
      left: 23px;
    }
    > .divSpan {
      position: absolute;
      background-color: white;
      width: 20px;
      height: 19px;
      left: 3px;
      border-width: 1px 2px 2px 2px;
      border-radius: 50px;

      > .line {
        border: 2px solid #929090;
        width: 10px;
        height: 10px;
        top: 2px;
        left: 3px;
        border-radius: 100px 100px 0 0;
        position: absolute;
      }

      > .lines {
        background-color: #fff;
        height: 10px;
        top: 6px;
        left: 3px;
        width: 15px;
        position: absolute;
      }
    }
  }
}

</style>