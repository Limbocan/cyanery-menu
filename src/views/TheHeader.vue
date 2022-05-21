<template>
  <div class="page-header">
    <span class="title">CyaneryMenu <span>中文文档</span></span>
  </div>
</template>

<script setup>

</script>

<style scoped>
.page-header {
  position: fixed;
  top: 0;
  height: var(--header-height);
  width: 100%;
  padding: 0 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #4f4e4e;
  font-family: var(--font-family);
  font-weight: bolder;
  background-color: var(--bg-color);
  box-shadow: 0 5px 21px -5px #cdd1e1;
  z-index: 10;
}
.title {
  margin-bottom: 4px;
  font-size: 1.2rem;
}
</style>