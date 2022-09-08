<template>
  <div>
    <!-- 图表容器 -->
    <div class="chart" id="chart4"></div>
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

    async function getState() {
      chartData = await $axios({ url: "/four/data" });
    }
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
        const myChart4 = $echarts.init(document.querySelector("#chart4"));
        myChart4.setOption({
          grid: {
            top: "25%",
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
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          legend: {
            top: "12%",
          },
          xAxis: {
            type: "category",
            data: xData,
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
              name: "服饰",
              type: "bar",
              data: Clothes,
              stack: "total",
              label: { show: true },
              emphasis: {
                focus: "series",
              },
            },
            {
              name: "日化",
              type: "bar",
              data: Chemicals,
              stack: "total",
              label: { show: true },
              emphasis: {
                focus: "series",
              },
            },
            {
              name: "电子",
              type: "bar",
              data: Electrical,
              stack: "total",
              label: { show: true },
              emphasis: {
                focus: "series",
              },
            },
            {
              name: "数码",
              type: "bar",
              data: digit,
              stack: "total",
              label: { show: true },
              emphasis: {
                focus: "series",
              },
            },
            {
              name: "家具",
              type: "bar",
              data: gear,
              stack: "total",
              label: { show: true },
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