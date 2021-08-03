<template>
  <div class="hand-calender-div">
    <div class="hand-calender-title">
      <div class="hand-calender-yearLeft" @click="getPlusYear(-1)">&lt;&lt;</div>
      <div class="hand-calender-monthLeft" @click="getPlusMonth(-1)">&lt;</div>
      {{ currentDate.getFullYear() }} / {{ currentDate.getMonth() + 1 }}
      <div class="hand-calender-monthRight" @click="getPlusMonth(1)">></div>
      <div class="hand-calender-yearRight" @click="getPlusYear(1)">>></div>
    </div>
    <div class="hand-calender-week">
      <div>Mon</div>
      <div>Tues</div>
      <div>Wed</div>
      <div>Thur</div>
      <div>Fri</div>
      <div>Sat</div>
      <div>Sun</div>
    </div>
    <div ref="handCalenderDate" class="hand-calender-dates">
      <div class="hand-calender-select" v-for="date in getDates" key="date">{{ date === 0 ? '' : date }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, ref} from "vue";

export default {
  name: "Calendar",
  setup() {
    let currentDate = ref(new Date())
    let handCalenderDate = ref(null)

    let getPlusMonth = (plus: Number) => {
      let date = currentDate.value
      let month = date.getMonth()
      let year = date.getFullYear()
      if (month === 0 && plus === -1) {
        month = 11
        year += plus
      } else if (month === 11 && plus === 1) {
        month = 0
        year += plus
      } else {
        month += plus
      }
      currentDate.value = new Date(year, month)
    }
    let getPlusYear = (plus: Number) => {
      let date = currentDate.value
      let year = date.getFullYear()
      year += plus
      currentDate.value = new Date(year, date.getMonth())
    }

    let getDates = computed(() => {
      let markDate = currentDate.value

      let getFillInArray = (num: Number): Array<Number> => {
        let end
        if (num === 0) {
          end = 6
        } else {
          end = num - 1
        }

        let fillInArray = []
        for (let i = 0; i < end; i++) {
          fillInArray.push(0)
        }
        return fillInArray
      }
      let date = new Date(markDate.getFullYear(), markDate.getMonth(), 0)
      let currentDates = []
      for (let i = 1; i <= date.getDate(); i++) {
        currentDates.push(i)
      }
      markDate.setDate(1)
      let tmpDates = getFillInArray(markDate.getDay()).concat(currentDates)
      let endFillArray = getFillInArray(43 - tmpDates.length)
      return tmpDates.concat(endFillArray)
    })
    return {
      getDates,
      currentDate,
      getPlusMonth,
      getPlusYear,
      handCalenderDate
    }
  }
}
</script>

<style lang="scss">
.hand-calender-div {
  border: solid #807f7f;
  border-width: 2px 3px 3px 1.5px;
  border-radius: 10px 50px / 50px 10px;
  width: 350px;
  height: 350px;
  position: relative;

  > .hand-calender-title {
    display: flex;
    justify-content: space-between;
    font-size: 25px;
    width: 100%;
    height: 10%;

    > div {
      width: 20px;
      margin-left: 10px;
      margin-right: 10px;
      cursor: pointer;
    }
  }

  > .hand-calender-week {
    width: 100%;
    height: 10%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;

    > div {
      width: 50px;
      text-align: center;
      padding-top: 7px;
      font-size: 20px;
      padding-left: 3px;
    }
  }

  > .hand-calender-dates {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    > div {
      width: 41px;
      height: 39px;
      display: flex;
      justify-content: center;
      padding-top: 7px;
      font-size: 20px;
      padding-left: 3px;
    }

    > div:hover:not(.hand-calender-select) {
      background-color: #e0d7d7;
      cursor: pointer;
      border-radius: 10px;
    }
  }
}
.hand-calender-select{
  border: solid red;
  border-radius: 50px;
  border-width: 2px 3px 3px 1.5px;
}
</style>