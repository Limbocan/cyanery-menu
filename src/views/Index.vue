<template>
  <div class="layout-content">
    <TheHeader v-model:open="open" />
    <div class="doc-content">
      <div class="left-content">
        <TheMenu ref="TheMenuRef" :open="open" @menu-router="menuRouter" />
      </div>
      <div ref="contentListRef" class="content-list">
        <Guide />
        <Props />
        <Methods />
        <Api />
        <Example />
        <Update />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TheMenu from './TheMenu.vue'
import TheHeader from './TheHeader.vue'
import Guide from './guide/Guide.vue'
import Props from './props/Props.vue'
import Methods from './methods/Methods.vue'
import Api from './api/Api.vue'
import Example from './example/Example.vue'
import Update from './update/Update.vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

const TheMenuRef = ref(null)
const contentListRef = ref(null)
const open = ref(true)

onMounted(() => {
  const allMenuId = getMenuId(TheMenuRef.value.menuData)

  const getActiveId = (dom) => {
    const listDom = dom || document.querySelector('.content-list')
    const scrollTop = listDom.scrollTop
    const menuDoms = listDom.querySelectorAll(allMenuId.join(','))
    const domInfo = [...menuDoms].map(m => {
      return { id: m.id, val: Math.abs(m.offsetTop - scrollTop) }
    })
    const top = Math.min(...domInfo.map(m => m.val))
    const activeDom = domInfo.find(m => m.val === top)?.id
    return `#${activeDom}`
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('pre code').forEach((el) => {
      hljs.highlightElement(el)
    })
  })
  contentListRef.value.addEventListener('scroll', (e) => {
    const active = getActiveId(e.target)
    TheMenuRef.value.setActive(active)
  })
})

const getMenuId = (list) => {
  const result = []
  list.forEach(menu => {
    result.push(menu.path)
    if (menu.children) result.push(...getMenuId(menu.children))
  })
  return result
}

const menuRouter = (val) => {
  const domId = `${val.path}`
  scrollMenu(domId)
}

const scrollMenu = (id) => {
  const viewDom = contentListRef.value.querySelector(id)
  viewDom && viewDom.scrollIntoView({ behavior: 'smooth' })
}

</script>

<style scoped>
.layout-content {
  --header-height: 60px;
  --bg-color: #ededed;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.doc-content {
  height: calc(100% - var(--header-height));
  margin-top: var(--header-height);
  display: flex;
  background-color: var(--bg-color);
}
.left-content {
  height: 100%;
}
.content-list {
  flex: 1;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 12px 50px;
}
</style>