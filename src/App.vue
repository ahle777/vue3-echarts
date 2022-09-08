<template>
  <router-view />
</template>

<script>
import { provide } from "vue";
import * as echarts from "echarts";
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000";
export default {
  setup() {
    // provide('名字'，'传递的内容')
    provide("echarts", echarts);
    provide("axios", axios);
  },
};
</script>




<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: url("~@/assets/bg.jpg") top center no-repeat;
  background-size: 100%;
}
</style>
