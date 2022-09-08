<template>
  <div>
    <!-- 图表容器 -->
    <div class="chart" id="chart3"></div>
  </div>
</template>

<script>
import { inject, onMounted, reactive } from "vue";
export default {
  setup() {
    const $echarts = inject("echarts");
    const $axios = inject("axios");
    let chartData = reactive({});
    // 请求数据
    async function getState() {
      let result = await $axios({ url: "/three/data" });
      if (result.status === 200) {
        chartData = result.data.data.chartData;
      }
    }
    onMounted(() => {
      getState().then(() => {
        let myChart3 = $echarts.init(document.querySelector("#chart3"));
        myChart3.setOption({
          grid: {
            top: "20%",
            left: "1%",
            right: "6%",
            bottom: "3%",
            containLabel: true,
          },
          title: {
            text: "库存统计",
            left: "center",
            top: "5%",
            textStyle: {
              color: "#fff",
              fontSize: "0.25rem",
            },
          },
          legend: {
            bottom: "3%",
            padding: 3,
            itemWidth: 20,
            itemHeight: 10,
          },
          tooltip: {},
          series: [
            {
              type: "pie",
              data: chartData,
              radius: [10, 80],
              center: ["50%", "55%"],
              roseType: "area",
              itemStyle: {
                borderRadius: 10,
              },
            },
          ],
        });
      });
    });
    return {
      getState,
      chartData,
    };
  },
};
</script>

<style>
.chart {
  height: 5rem;
}
</style>