
import { defineComponent, h, PropType, computed, onMounted } from 'vue'
import MenuChildList from './menu-list.vue'
import MenuItem from '../menu-item/menu-item.vue'
import { globalState } from '../../menu-props'
import type { MenuItemProps } from '../../types'

// 组件参数
const MenuListProps = {
  // 菜单列表数据
  menuList: {
    type: Array as PropType<MenuItemProps[]>,
    default: () => []
  },
  // 菜单层级
  diff: {
    type: Number as PropType<number>,
    default: 0
  },
  // 菜单项插槽
  itemSlot: {}
}

// 组件
export const MenuListComponent = defineComponent({
  name: 'CyaneryMenuList',
  props: MenuListProps,
  setup(props) {

    const MENU_NODE = computed(() => {
      const MENU_LIST = formatList([...props.menuList])
      globalState.saveMenus(MENU_LIST)
      return MENU_LIST.map(m => h(
        MenuItem,
        { data: m, diff: props.diff + 1, itemSlot: props.itemSlot },
      ))
    })

    const formatList = (list) => {
      return list.map(m => {
        const ITEM = { ...m }
        if (m.children) ITEM.children = formatList(m.children)
        return { ...ITEM, key: ITEM.key ?? ITEM.path }
      })
    }

    return () => h(MenuChildList, { child: MENU_NODE.value, diff: props.diff, open: true })
  }
})
