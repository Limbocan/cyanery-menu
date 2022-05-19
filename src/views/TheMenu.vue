<template>
  <div class="menu-box">
    <CyMenu
      v-model="active"
      :data="menuData"
      width="240px"
      theme="dark"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const active = ref('start')
const menuData = [
  {
    name: '开始',
    key: 'start',
    path: '#menu-start',
    children: [
      {
        name: '指引',
        key: 'guide',
        path: '#menu-guide',
      }
    ]
  },
  {
    name: '安装',
    key: 'install',
    path: '#menu-install'
  }
]

</script>

<style scoped>
.menu-box {
  height: 100%;
}
</style>