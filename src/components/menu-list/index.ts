
import { defineComponent, h, PropType, computed, inject } from 'vue'
import MenuChildList from './menu-list.vue'
import MenuItem from '../menu-item/menu-item.vue'
import type { MenuItemProps } from '../../types'

// 组件参数
const MenuListProps = {
  // 菜单列表数据
  menuList: {
    type: Array as PropType<MenuItemProps[]>,
    default: () => []
  },
  // 菜单层级
  deep: {
    type: Number as PropType<number>,
    default: 0
  },
  // 菜单项插槽
  itemSlot: {},
  // 图标插槽
  iconSlot: {},
}

// 组件
export const MenuListComponent = defineComponent({
  name: 'CyaneryMenuList',
  props: MenuListProps,
  setup(props) {

    const globalState = inject('globalState') as any
    const MENU_NODE = computed(() => {
      const MENU_LIST = formatList([...props.menuList])
      globalState.saveMenus(MENU_LIST)
      return MENU_LIST.map(m => h(
        MenuItem,
        { data: m, deep: props.deep + 1, itemSlot: props.itemSlot, iconSlot: props.iconSlot },
      ))
    })

    const formatList = (list, deep = 1) => {
      return list.map(m => {
        const ITEM = { ...m }
        if (m.children) ITEM.children = formatList(m.children, deep + 1)
        return { ...ITEM, key: ITEM.key ?? ITEM.path, deep }
      })
    }

    return () => h(MenuChildList, { child: MENU_NODE.value, deep: props.deep, open: true })
  }
})
