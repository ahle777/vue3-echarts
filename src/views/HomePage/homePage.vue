<template>
  <div>
    <header>
      <h1>Vue3+Echarts</h1>
    </header>
    <!-- 内容大容器 -->
    <div class="container">
      <!-- 左容器 -->
      <section class="leftItem">
        <MyChart>
          <ItemOne />
        </MyChart>
        <MyChart>
          <ItemTwo />
        </MyChart>
      </section>
      <!-- 中容器 -->
      <section class="midItem">
        <ChinaMap></ChinaMap>
      </section>
      <!-- 右容器 -->
      <section class="rightItem">
        <MyChart>
          <ItemThree />
        </MyChart>
        <MyChart>
          <ItemFour />
        </MyChart>
      </section>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import MyChart from "@/components/Charts/chartItem";
import ItemOne from "@/components/Charts/itemOne";
import ItemTwo from "@/components/Charts/itemTwo";
import ItemThree from "@/components/Charts/itemThree";
import ItemFour from "@/components/Charts/itemFour";
import ChinaMap from "@/components/Charts/mapPage";
export default {
  name: "HomePage",
  components: { MyChart, ItemOne, ItemTwo, ItemThree, ItemFour, ChinaMap },
  setup() {
    let $echarts = inject("echarts");
    let $axios = inject("axios");
  },
};
</script>

<style lang="less" scoped>
header {
  height: 0.5rem;
  width: 100%;
  background-color: rgba(0, 0, 255, 0.2);
  h1 {
    font-size: 0.375rem;
    line-height: 0.5rem;
    text-align: center;
    color: #fff;
  }
}
.container {
  display: flex;
  max-width: 2048px;
  min-width: 1200px;
  margin: 0 auto;
  padding: 0.25rem 0.25rem 0;

  .leftItem,
  .rightItem {
    flex: 3;
  }
  .midItem {
    flex: 5;
    height: 10.5rem;
    padding: 0.125rem;
    margin: 0.25rem;
    border: 1px solid #fff;
  }
}
</style>