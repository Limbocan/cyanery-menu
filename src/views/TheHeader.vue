<template>
  <div class="page-header">
    <div class="title">
      CyaneryMenu <span>中文文档</span>
      <svg v-show="!props.open" width="22" height="22" viewBox="0 0 48 48" fill="none" class="header-icon" @click="changeOpen">
        <rect width="48" height="48" fill="white" fill-opacity="0.01" />
        <path d="M8 10.5H40" stroke="#787878" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M24 19.5H40" stroke="#787878" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M24 28.5H40" stroke="#787878" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8 37.5H40" stroke="#787878" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8 19L16 24L8 29V19Z" fill="#2F88FF" stroke="#787878" stroke-width="2" stroke-linejoin="round" />
      </svg>
      <svg v-show="props.open" width="22" height="22" viewBox="0 0 48 48" fill="none" class="header-icon" @click="changeOpen">
        <rect width="48" height="48" fill="white" fill-opacity="0.01" />
        <path d="M8 10.5H40" stroke="#787878" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M24 19.5H40" stroke="#787878" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M24 28.5H40" stroke="#787878" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8 37.5H40" stroke="#787878" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M16 19L8 24L16 29V19Z" fill="#2F88FF" stroke="#787878" stroke-width="2" stroke-linejoin="round" />
      </svg>
    </div>
    <div>
      <a href="https://github.com/Limbocan/cyanery-menu" class="logo">GitHub</a>
      <img src="../assets/mocan.png" alt="log" class="logo" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  open: {
    type: Boolean,
    default: true
  }
})
const emits = defineEmits(['update:open'])

const changeOpen = () => {
  const val = !props.open
  emits('update:open', val)
}

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