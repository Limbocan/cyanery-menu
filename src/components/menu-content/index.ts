
import { defineComponent, h, ref, computed } from 'vue'
import { MenuListComponent } from '../menu-list/index'
import { MenuToggleComponent } from '../menu-toggle/index'
import { getStyleFormat, getClassFomat } from 'src/utils/use-style'
import { MenuProps, MenuEmits, globalState } from '../../menu-props'

// 组件
export const Menu = defineComponent({
  name: 'CyaneryMenu',
  props: MenuProps,
  emits: MenuEmits,
  setup(props, { emit, slots, expose }) {

    // 设置全局emits
    globalState.setMenuEmit(emit)
    // 设置全局props
    globalState.setMenuProps(props)

    // 菜单是否展开显示
    const isOpen = ref(props.open ?? true)

    // 菜单DOM内容
    const childDomList = computed(() => {
      // 菜单头部
      const headerSlot = props.headerRender ? 
        h(props.headerRender) :
        h('div', null, slots.header ? slots.header({ open: props.open }) : null)
      // 菜单切换组件
      const toggleDom = h(
        MenuToggleComponent,
        {
          modelValue: props.open ?? isOpen.value,
          'onUpdate:modelValue': (val) => {
            isOpen.value = val
            globalState.menuEmitsMethod('update:open', val)
          }
        }
      )
      // 菜单列表组件
      const ListDom = h(
        MenuListComponent,
        { menuList: props.data, itemSlot: slots.menuItem }
      )
      // 菜单尾部
      const bottomSlot = props.footerRender ? 
        h(props.footerRender) :
        h('div', null, slots.footer ? slots.footer({ open: props.open }) : null)

      return [
        headerSlot,
        props.toggleButton ? toggleDom : null,
        ListDom,
        bottomSlot
      ]
    })

    expose({
      getMenu: () => globalState.getMenu()
    })

    return () => h(
      'div',
      {
        class: 'cy-menu ' + getClassFomat(props.className),
        style: getStyleFormat([
          { prop: 'width', val: props.width, type: 'num' },
          { prop: 'theme-cyan-bg-color', val: props.backgroundColor, type: 'color' },
          { prop: 'theme-cyan-active-color', val: props.activeColor, type: 'color' },
          { prop: 'theme-cyan-text-color', val: props.textColor, type: 'color' }
        ]),
      },
      childDomList.value
    )
  }
})

export default Menu
