<template>
  <div class="layout-content">
    <TheMenu />
    <div class="left-content">
      <TheHeader />
      <div class="content-list">
        <TheStart />
      </div>
    </div>
  </div>
</template>

<script setup>
import TheMenu from './TheMenu.vue'
import TheHeader from './TheHeader.vue'
import TheStart from './example/TheStart.vue'

</script>

<style scoped>
.layout-content {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}
.left-content {
  --header-height: 50px;
  height: 100%;
  flex: 1;
}
.content-list {
  height: calc(100% - var(--header-height));
  overflow-x: hidden;
  overflow-y: auto;
  padding: 12px 12%;
}
</style>