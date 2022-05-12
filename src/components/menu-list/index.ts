
import { defineComponent, h, ref, PropType, computed, onMounted } from 'vue'
import MenuChildList from './menu-list.vue'
import MenuItem from '../menu-item/menu-item.vue'
import type { MenuItemProps } from '../../types'
import PerfectScrollbar from 'perfect-scrollbar'

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
    const scrollbar = ref(null)

    onMounted(() => {
      scrollbar.value = new PerfectScrollbar('.cy-menu-list-child-0', {
        suppressScrollX: true,
        wheelSpeed: 0.5,
        wheelPropagation: true
      })
    })

    const MENU_NODE = computed(() => {
      return props.menuList.map(m => h(
        MenuItem,
        { data: m, diff: props.diff + 1, itemSlot: props.itemSlot },
      ))
    })

    return () => h(MenuChildList, { child: MENU_NODE.value, diff: props.diff, open: true })
  }
})
