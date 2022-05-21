<template>
  <h1 id="menu-example">示例</h1>
  <div class="example">
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
    />
    <div class="tools">
      <label>
        展开
        <input type="checkbox">
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const active = ref('')
const menuData = ref([
  {
    name: '菜单一',
    key: '1',
    path: '1',
  },
  {
    name: '菜单二',
    key: '2',
    path: '2',
    children: [
      {
        name: '菜单二一',
        key: '21',
        path: '21',
      },
      {
        name: '菜单二二',
        key: '22',
        path: '22',
      }
    ]
  },
  {
    name: '菜单三',
    key: '3',
    path: '3',
    children: [
      {
        name: '菜单三一',
        key: '31',
        path: '31',
      },
      {
        name: '菜单三二',
        key: '32',
        path: '32',
        children: [
          {
            name: '菜单三二一',
            key: '321',
            path: '321',
          },
          {
            name: '菜单三二二',
            key: '322',
            path: '322',
          }
        ]
      }
    ]
  },
  {
    name: '菜单四',
    key: '4',
    path: '4',
  },
  {
    name: '菜单五',
    key: '5',
    path: '5',
    children: [
      {
        name: '菜单五一',
        key: '51',
        path: '51',
      }
    ]
  },
])

const menuClick = () => {
  console.log(1, '====')
}

</script>

<style lang="scss" scoped>

</style>