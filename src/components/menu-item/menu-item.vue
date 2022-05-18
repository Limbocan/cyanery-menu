<template>
  <li :class="getClassFomat('menu-item')">
    <MenuPopover :disabled="popverDisabled">
      <!-- 菜单项（触发浮窗） -->
      <template #trigger>
        <div
          :class="getClassFomat(`menu-item-box ${className}`)"
          :style="boxStyle"
          @click="menuClick"
        >
          <!-- 自定义渲染或插槽 -->
          <component
            v-if="props.itemSlot || globalState.state.MenuPropsData.itemRender"
            :is="props.itemSlot || globalState.state.MenuPropsData.itemRender"
            :data="props.data"
            :active="isActive"
            :popover="props.isPopover"
            :disabled="props.data.disabled"
            :open="isOpen"
          />
          <!-- 默认菜单项DOM -->
          <template v-else>
          <!-- 自定义图标渲染或插槽 -->
            <div
              v-show="globalState.state.MenuPropsData.showIcon"
              :class="getClassFomat('menu-icon')"
            >
              <component
                v-if="props.iconSlot || globalState.state.MenuPropsData.iconRender"
                :is="props.iconSlot || globalState.state.MenuPropsData.iconRender"
                :data="props.data"
                :active="isActive"
                :open="isOpen"
                :disabled="props.data.disabled"
                :deep="props.deep"
              />
              <MenuIcon v-else-if="globalState.state.MenuPropsData.showIcon && props.deep === 1" />
            </div>
            <span :class="getClassFomat('menu-text')">{{ props.data.name }}</span>
            <MenuIcon
              v-if="hasChild"
              :class="getClassFomat(`col-icon ${isOpen ? 'open-status' : ''} ${isActive ? 'active-status' : ''}`)"
              :type="globalState.state.MenuPropsData.arrowType"
              width="16"
              height="16"
            />
          </template>
        </div>
      </template>
      <!-- 菜单悬浮窗 -->
      <template #content>
        <ChildList
          v-if="hasChild"
          :child="child"
          :deep="props.deep"
          :open="true"
          :is-popover="true"
        />
        <span v-else :class="getClassFomat('popover-label')">{{ props.data.name }}</span>
      </template>
    </MenuPopover>
    <!-- 子菜单项列表 -->
    <template v-if="hasChild && !props.isPopover">
      <ChildList
        :child="child"
        :deep="props.deep"
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
import MenuIcon from './icon.vue'
import ChildList from '../menu-list/menu-list.vue'
import MenuPopover from '../menu-popover/index.vue'

const props = defineProps({
  // 菜单项数据
  data: {
    type: Object as PropType<MenuItemProps>,
    default: ''
  },
  // 菜单层级
  deep: {
    type: Number as PropType<number>,
    default: 0
  },
  // 是否为浮窗内列表
  isPopover: {
    type: Boolean || undefined as PropType<boolean | undefined>,
    default: undefined
  },
  // 菜单项插槽
  itemSlot: {},
  // 图标插槽
  iconSlot: {},
})

// 菜单打开状态
const isOpen = computed(() => {
  return globalState.state.openedMenus.findIndex(m => m.key === props.data.key && m.deep === props.deep) > -1
})
// 是否为活跃菜单
const isActive = computed(() => {
  return globalState.state.activeMenus.includes(props.data.key)
})
// 是否有子菜单
const hasChild = ref(props.data.children && props.data.children.length > 0)
// 菜单点击事件
const menuClick = () => {
  if (props.data.disabled) return false
  if (!hasChild.value) {
    const next = globalState.state.MenuPropsData.beforeRouter
    if (next) next(globalState.state.activeMenuKey, props.data.key, nextActive) 
    else nextActive(props.data.key)
  }
  if (hasChild.value && !props.isPopover && globalState.state.MenuPropsData.open !== false &&
    globalState.state.MenuPropsData.alwaysPopover === false) {
    const CURR_ITEM = { ...props.data }
    if (!isOpen.value) globalState.pushMenu(CURR_ITEM)
    else globalState.remove(CURR_ITEM)
  }
  globalState.menuEmitsMethod('menu-click', props.data)
}
// 菜单活跃项跳转
const nextActive = (key = props.data.key) => {
  if (globalState.state.MenuPropsData.modelValue === undefined) globalState.pushActiveMenu(key)
  globalState.menuEmitsMethod('update:modelValue', key)
}
// 菜单浮窗禁止条件
const popverDisabled = computed(() => {
  if (globalState.state.MenuPropsData.alwaysPopover) return false
  return (!hasChild.value && props.isPopover) || globalState.state.MenuPropsData.open ||
    globalState.state.MenuPropsData.open === undefined
})
// 菜单样式类
const className = computed(() => {
  let CLASS_STR = ''
  CLASS_STR += isOpen.value ? 'open-list ' : ''
  CLASS_STR += isActive.value ? 'open-active ' : ''
  CLASS_STR += props.data.disabled ? 'menu-disabled ' : ''
  CLASS_STR += props.isPopover ? 'is-popover ' : ''
  return CLASS_STR
})
// 菜单项样式
const boxStyle = computed(() => {
  return {
    'padding-left': props.isPopover ? null : props.deep * globalState.state.MenuPropsData.offset + 'px'
  }
})
// 子菜单项列表
const childList = ref(hasChild.value ? props.data.children : [])
// 子菜单项渲染列表
const child = computed(() => childList.value.map((c) => {
  return h(MenuItem, { data: c, deep: props.deep + 1, itemSlot: props.itemSlot })
}))

</script>
