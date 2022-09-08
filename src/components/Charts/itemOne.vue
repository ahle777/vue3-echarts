<template>
  <div>
    <!-- 图表容器 -->
    <div class="chart" id="chart1"></div>
  </div>
</template>

<script>
import { inject, onMounted, reactive } from "vue";
export default {
  setup() {
    const $echarts = inject("echarts");
    const $axios = inject("axios");
    let chartData = reactive({});
    let xData = reactive([]);
    let yData = reactive([]);
    function setData() {
      yData = chartData.data.data.chartData.map((item) => item.title);
      xData = chartData.data.data.chartData.map((item) => item.num);
    }

    async function getState() {
      chartData = await $axios({
        url: "/one/data",
      });
    }

    onMounted(() => {
      const myChart1 = $echarts.init(document.getElementById("chart1"));
      // 获取数据
      getState().then(() => {
        // 整理数据
        setData();
        myChart1.setOption({
          grid: {
            top: "20%",
            left: "1%",
            right: "6%",
            bottom: "3%",
            containLabel: true,
          },
          title: {
            text: "销售总量",
            textStyle: {
              color: "#fff",
              fontSize: "0.25rem",
            },
            left: "center",
            top: "5%",
          },
          xAxis: {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
          },
          yAxis: {
            type: "category",
            data: yData,
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
          },
          tooltip: {},
          series: [
            {
              type: "bar",
              data: xData,
              itemStyle: {
                borderRadius: [0, 20, 20, 0],
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#1200ed", // 0% 处的颜色
                    },
                    {
                      offset: 0.5,
                      color: "#5800a6", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#970068", // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
            },
          ],
        });
      });
    });
    return {
      getState,
      chartData,
      xData,
      yData,
      setData,
    };
  },
};
</script>

<style lang="less">
.chart {
  height: 5rem;
}
</style>