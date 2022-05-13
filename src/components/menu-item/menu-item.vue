<template>
  <li :class="getClassFomat('menu-item')">
    <MenuPopover :disabled="!hasChild || globalState.state.MenuPropsData.open || globalState.state.MenuPropsData.open === undefined">
      <template #trigger>
        <div
          :class="getClassFomat(`menu-item-box ${className}`)"
          :style="boxStyle"
          @click="menuClick"
        >
          <component
            v-if="props.itemSlot || globalState.state.MenuPropsData.itemRender"
            :is="props.itemSlot || globalState.state.MenuPropsData.itemRender"
            :data="props.data"
            :open="isOpen"
          />
          <template v-else>
            <span>{{ props.data.name }}</span>
            <svg
              v-if="hasChild"
              :class="getClassFomat(`col-icon ${isOpen ? 'open-status' : ''}`)"
              viewBox="0 0 1024 1024"
              version="1.1"
              width="16"
              height="16"
            >
              <path
                d="M677.888 598.528l-254.464 239.616c-15.872 14.848-38.912 18.944-59.392 11.264-20.48-8.192-33.792-26.624-33.792-47.616V322.56c0-20.992 13.312-39.424 33.792-47.616 6.656-2.56 13.824-4.096 20.992-4.096 14.336 0 28.16 5.12 38.4 15.36l254.464 239.616c10.24 9.728 15.872 23.04 15.872 36.352 0.512 13.824-5.632 26.624-15.872 36.352z"
              />
            </svg>
          </template>
        </div>
      </template>
      <template #content>
        <ChildList
          :child="child"
          :diff="props.diff"
          :open="true"
          :is-popover="true"
        />
      </template>
    </MenuPopover>
    <template v-if="hasChild && !props.isPopover">
      <ChildList
        :child="child"
        :diff="props.diff"
        :open="isOpen"
      />
    </template>
  </li>
</template>

<script lang="ts" setup>
import { h, ref, PropType, computed } from 'vue'
import { getClassFomat } from 'src/utils/use-style'
import { globalState } from '../../menu-props'
import type { MenuItemProps } from '../../types'
import MenuItem from './menu-item.vue'
import ChildList from '../menu-list/menu-list.vue'
import MenuPopover from '../menu-popover/index.vue'

const props = defineProps({
  // 菜单项数据
  data: {
    type: Object as PropType<MenuItemProps>,
    default: ''
  },
  // 菜单层级
  diff: {
    type: Number as PropType<number>,
    default: 0
  },
  // 是否为浮窗内列表
  isPopover: {
    type: Boolean || undefined as PropType<boolean | undefined>,
    default: undefined
  },
  // 菜单项插槽
  itemSlot: {}
})

// 菜单打开状态
const isOpen = computed(() => {
  return globalState.state.openedMenus.findIndex(m => m.key === props.data.key && m.diff === props.diff) > -1
})
// 是否有子菜单
const hasChild = ref(props.data.children && props.data.children.length > 0)
// 菜单点击事件
const menuClick = () => {
  if (hasChild.value && !props.isPopover) {
    // isOpen.value = !isOpen.value
    const CURR_ITEM = { ...props.data }
    delete CURR_ITEM.children
    if (!isOpen.value) globalState.pushMenu({ ...CURR_ITEM, diff: props.diff })
    else globalState.remove({ ...CURR_ITEM, diff: props.diff })
  }
  globalState.menuEmitsMethod('menu-click', props.data)
}
// 菜单样式类
const className = computed(() => isOpen.value ? 'open-active' : '')
// 菜单项样式
const boxStyle = computed(() => {
  return {
    'padding-left': props.isPopover ? null : props.diff * 10 + 'px'
  }
})
// 子菜单项列表
const childList = ref(hasChild.value ? props.data.children : [])
const child = computed(() => childList.value.map((c) => {
  return h(MenuItem, { data: c, diff: props.diff + 1, itemSlot: props.itemSlot })
}))

</script>
