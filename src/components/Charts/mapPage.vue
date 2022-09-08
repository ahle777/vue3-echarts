<template>
  <!-- 图表容器 -->
  <div class="map"></div>
</template>

<script>
import { inject, onMounted, reactive } from "vue";
export default {
  setup() {
    const $axios = inject("axios");
    const $echarts = inject("echarts");
    let mapData = reactive({});
    async function getMapData() {
      mapData = await $axios({
        url: "/chinamap/data",
      });
    }
    onMounted(() => {
      const myChart = $echarts.init(document.querySelector(".map"));

      getMapData().then(() => {
        $echarts.registerMap("ChinaMap", mapData.data.data);
        myChart.setOption({
          geo: {
            type: "map",
            map: "ChinaMap",
            roam: true, //平移
            itemStyle: {
              areaColor: "#0099ff",
              borderColor: "#00ffff",
              shadowColor: "rgba(230,130,70,0.5)",
              shadowBlur: 30,
            },
            zoom: 1.2,
          },
          tooltip: {
            trigger: "item",
          },
          title: {
            text: "城市销量",
            left: "center",
            textStyle: {
              color: "#fff",
              fontSize: 20,
              textShadowBlur: 10,
              textShadowColor: "#33ffff",
            },
          },
          //   视觉映射组件
          visualMap: {
            min: 100,
            max: 5000,
            calculable: true,
            realtime: false,
            inRange: {
              color: [
                "#313695",
                "#4575b4",
                "#74add1",
                "#abd9e9",
                "#e0f3f8",
                "#ffffbf",
                "#fee090",
                "#fdae61",
                "#f46d43",
                "#d73027",
                "#a50026",
              ],
            },
            textStyle: {
              color: "#fff",
            },
          },
          series: [
            {
              type: "scatter",
              itemStyle: {
                color: "red",
              },
              //   指定坐标基准为地图
              coordinateSystem: "geo",
              data: [
                { name: "北京", value: [116.46, 39.92, 4367] },
                { name: "上海", value: [121.48, 31.22, 8675] },
                { name: "深圳", value: [114.07, 22.62, 2461] },
                { name: "广州", value: [113.23, 23.16, 187] },
                { name: "西安", value: [108.45, 34, 3421] },
              ],
            },
          ],
        });
      });
    });
    return {
      mapData,
      getMapData,
    };
  },
};
</script>

<style lang="less" scoped>
.map {
  height: 100%;
  width: 100%;
}
</style>