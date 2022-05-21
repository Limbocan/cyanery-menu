<template>
  <div class="menu-box">
    <SvgIcon />
    <CyMenu
      v-model="active"
      :data="menuData"
      backgroundColor="#ededed"
      activeColor="#e7e7e7"
      textColor="#787878"
      activeTextCorlor="#248afd"
      width="240px"
      theme="dark"
      @menu-click="menuClick"
    >
      <template #icon="{ data }">
        <svg width="16" height="16" class="menu-icon"><use :xlink:href="data.path" /></svg>
      </template>
    </CyMenu>
  </div>
</template>

<script setup>
import SvgIcon from './TheSvg.vue'
import { ref } from 'vue'

const emits = defineEmits(['menu-click'])

const menuClick = (val) => {
  emits('menu-click', val)
}

const active = ref('guide')
const menuData = ref([
  {
    name: '指引',
    key: 'guide',
    path: '#menu-guide',
    children: [
      {
        name: '介绍',
        key: 'intro',
        path: '#menu-intro',
      },
      {
        name: '开始',
        key: 'start',
        path: '#menu-start',
      },
      {
        name: '安装',
        key: 'install',
        path: '#menu-install',
      },
      {
        name: '使用',
        key: 'use',
        path: '#menu-use',
      }
    ]
  },
  {
    name: '参数',
    key: 'props',
    path: '#menu-props'
  },
  {
    name: '事件',
    key: 'methods',
    path: '#menu-methods'
  },
  {
    name: 'API',
    key: 'api',
    path: '#menu-api'
  },
  {
    name: '示例',
    key: 'example',
    path: '#menu-example'
  },
  {
    name: '更新',
    key: 'update',
    path: '#menu-update'
  }
])
const setActive = (id) => {
  const key = id.split('-')[1]
  active.value = key
}

defineExpose({
  setActive,
  menuData
})

</script>

<style scoped>
.menu-box {
  height: 100%;
}
.cy-menu {
  box-shadow: none;
}
.menu-icon {
  vertical-align: middle;
}
</style>