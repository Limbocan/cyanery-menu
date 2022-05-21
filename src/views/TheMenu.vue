<template>
  <div class="menu-box">
    <SvgIcon />
    <CyMenu
      v-model="active"
      :open="props.open"
      :data="menuData"
      :unique="true"
      backgroundColor="#ededed"
      activeColor="#e7e7e7"
      textColor="#787878"
      activeTextCorlor="#248afd"
      width="240px"
      theme="dark"
      @update:open="(val) => emits('update:open', val)"
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

const props = defineProps({
  open: {
    type: Boolean,
    default: true
  }
})
const emits = defineEmits(['menu-router', 'update:open'])
const open = ref(true)

const menuClick = (val) => {
  if (val.children) return
  emits('menu-router', val)
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
    path: '#menu-props',
    children: [
      {
        name: 'modelValue',
        key: 'modelValue',
        path: '#menu-modelValue'
      },
      {
        name: 'data',
        key: 'data',
        path: '#menu-data'
      },
      {
        name: 'className',
        key: 'className',
        path: '#menu-className'
      },
      {
        name: 'open',
        key: 'open',
        path: '#menu-open'
      },
      {
        name: 'width',
        key: 'width',
        path: '#menu-width'
      },
      {
        name: 'closeWidth',
        key: 'closeWidth',
        path: '#menu-closeWidth'
      },
      {
        name: 'toggleButton',
        key: 'toggleButton',
        path: '#menu-toggleButton'
      },
      {
        name: 'unique',
        key: 'unique',
        path: '#menu-unique'
      },
      {
        name: 'trigger',
        key: 'trigger',
        path: '#menu-trigger'
      },
      {
        name: 'beforeRouter',
        key: 'beforeRouter',
        path: '#menu-beforeRouter'
      },
      {
        name: 'showIcon',
        key: 'showIcon',
        path: '#menu-showIcon'
      },
      {
        name: 'offset',
        key: 'offset',
        path: '#menu-offset'
      },
      {
        name: 'alwaysPopover',
        key: 'alwaysPopover',
        path: '#menu-alwaysPopover'
      },
      {
        name: 'arrowType',
        key: 'arrowType',
        path: '#menu-arrowType'
      },
      {
        name: 'theme',
        key: 'theme',
        path: '#menu-theme'
      },
      {
        name: 'backgroundColor',
        key: 'backgroundColor',
        path: '#menu-backgroundColor'
      },
      {
        name: 'activeColor',
        key: 'activeColor',
        path: '#menu-activeColor'
      },
      {
        name: 'textColor',
        key: 'textColor',
        path: '#menu-textColor'
      },
      {
        name: 'activeTextCorlor',
        key: 'activeTextCorlor',
        path: '#menu-activeTextCorlor'
      },
      {
        name: 'headerRender',
        key: 'headerRender',
        path: '#menu-headerRender'
      },
      {
        name: 'footerRender',
        key: 'footerRender',
        path: '#menu-footerRender'
      },
      {
        name: 'itemRender',
        key: 'itemRender',
        path: '#menu-itemRender'
      },
      {
        name: 'iconRender',
        key: 'iconRender',
        path: '#menu-iconRender'
      }
    ]
  },
  {
    name: '事件',
    key: 'methods',
    path: '#menu-methods',
    children: [
      {
        name: 'update:modelValue',
        key: 'updatemodelValue',
        path: '#menu-updatemodelValue'
      },
      {
        name: 'update:open',
        key: 'updateopen',
        path: '#menu-updateopen'
      },
      {
        name: 'menu-click',
        key: 'menu-click',
        path: '#menu-menu-click'
      }
    ]
  },
  {
    name: 'API',
    key: 'api',
    path: '#menu-api',
    children: [
      {
        name: 'closeAll',
        key: 'closeAll',
        path: '#menu-closeAll'
      },
      {
        name: 'openMenu',
        key: 'openMenu',
        path: '#menu-openMenu'
      },
      {
        name: 'closeMenu',
        key: 'closeMenu',
        path: '#menu-closeMenu'
      },
    ]
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