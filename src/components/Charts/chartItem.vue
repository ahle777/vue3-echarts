<template>
  <div class="chartsItem">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "chartsItem",
};
</script>

<style lang="less" scoped>
.chartsItem {
  height: 5.125rem;
  border: 1px solid blue;
  margin: 0.25rem;
  background-color: rgba(12, 130, 255, 0.7);
}
</style>