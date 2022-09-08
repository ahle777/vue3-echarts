<template>
  <div>
    <!-- 图表容器 -->
    <div class="chart" id="chart2"></div>
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
    let Chemicals = reactive([]);
    let Clothes = reactive([]);
    let Electrical = reactive([]);
    let digit = reactive([]);
    let gear = reactive([]);

    // 请求数据
    async function getState() {
      chartData = await $axios({ url: "/two/data" });
    }
    // 处理数据
    function setData() {
      let data = chartData.data.data.chartData;
      xData = data.day;
      Chemicals = data.num.Chemicals;
      Clothes = data.num.Clothes;
      Electrical = data.num.Electrical;
      digit = data.num.digit;
      gear = data.num.gear;
    }
    onMounted(() => {
      getState().then(() => {
        setData();
        const myChart2 = $echarts.init(document.querySelector("#chart2"));
        myChart2.setOption({
          grid: {
            top: "25%",
            left: "1%",
            right: "6%",
            bottom: "3%",
            containLabel: true,
          },
          title: {
            text: "产品月销",
            left: "center",
            textStyle: {
              color: "#fff",
              fontSize: "0.25rem",
            },
            top: "5%",
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              label: { backgroundColor: "#e6b600" },
            },
          },
          legend: {
            data: ["日化", "服饰", "电子", "数码", "家具"],
            top: "15%",
          },
          xAxis: {
            type: "category",
            data: xData,
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
          },
          yAxis: {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
          },
          series: [
            {
              name: "日化",
              type: "line",
              data: Chemicals,
              smooth: true,
              stack: "Total",
              showSymbol: false,
              areaStyle: {
                opacity: 0.8,
                color: {
                  type: "linear",
                  x: 0,
                  y: 1,
                  x2: 0,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#6399c6", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#fffbb8", // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
              emphasis: {
                focus: "series",
              },
            },
            {
              name: "服饰",
              type: "line",
              data: Clothes,
              smooth: true,
              stack: "Total",
              showSymbol: false,
              areaStyle: {
                opacity: 0.8,
                color: {
                  type: "linear",
                  x: 0,
                  y: 1,
                  x2: 0,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#c9e8f2", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#3ba272", // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
              emphasis: {
                focus: "series",
              },
            },
            {
              name: "电子",
              type: "line",
              data: Electrical,
              smooth: true,
              stack: "Total",
              showSymbol: false,
              areaStyle: {
                opacity: 0.8,
                color: {
                  type: "linear",
                  x: 0,
                  y: 1,
                  x2: 0,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#c9e8f2", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#eb5c3b", // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
              emphasis: {
                focus: "series",
              },
            },
            {
              name: "数码",
              type: "line",
              data: digit,
              smooth: true,
              stack: "Total",
              showSymbol: false,
              areaStyle: {
                opacity: 0.8,
                color: {
                  type: "linear",
                  x: 0,
                  y: 1,
                  x2: 0,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#c9e8f2", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#ffdc60", // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
              emphasis: {
                focus: "series",
              },
            },
            {
              name: "家具",
              type: "line",
              data: gear,
              smooth: true,
              stack: "Total",
              showSymbol: false,
              areaStyle: {
                opacity: 0.8,
                color: {
                  type: "linear",
                  x: 0,
                  y: 1,
                  x2: 0,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#c9e8f2", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#cd2627", // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
              emphasis: {
                focus: "series",
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
      Chemicals,
      Clothes,
      Electrical,
      digit,
      gear,
      setData,
    };
  },
};
</script>

<style>
.chart {
  height: 5rem;
}
</style>