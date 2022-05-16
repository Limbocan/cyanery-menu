
import { defineComponent, h, ref, computed, watch, onMounted } from 'vue'
import { MenuListComponent } from '../menu-list/index'
import { MenuToggleComponent } from '../menu-toggle/index'
import { componentConfig, themeConfig, getStyleFormat, getClassFomat } from 'src/utils/use-style'
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

    // 监听收起菜单
    watch(
      () => props.open,
      (val) => {
        isOpen.value = val
        if (val === false) globalState.closeAllMenu()
      }
    )
    // 监听当前活跃菜单项
    watch(
      () => props.modelValue,
      (key) => globalState.pushActiveMenu(key, isOpen.value),
      { immediate: true }
    )
    onMounted(() => {
      // 监听菜单触发方式
      watch(
        () => props.trigger,
        (val) => {
          const MENU_DOM = document.querySelector(`.${componentConfig.mainClass}`)
          if (val === 'hover') {
            globalState.menuEmitsMethod('update:open', false)
            MENU_DOM.addEventListener('mouseenter', changeOpen)
            MENU_DOM.addEventListener('mouseleave', changeOpen)
          } else {
            MENU_DOM.removeEventListener('mouseenter', changeOpen)
            MENU_DOM.removeEventListener('mouseleave', changeOpen)
          }
        },
        { immediate: true }
      )
    })
    const changeOpen = () => globalState.menuEmitsMethod('update:open', !props.open)

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
        { menuList: props.data, itemSlot: slots.menuItem, iconSlot: slots.icon }
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
    // 菜单样式变量
    const styleVar = computed(() => {
      const theme = themeConfig[props.theme]
      return getStyleFormat([
        { prop: 'width', val: props.width, type: 'num' },
        { prop: 'close-width', val: theme.closeWidth || props.closeWidth, type: 'num' },
        { prop: 'theme-bg-color', val: theme.backgroundColor || props.backgroundColor, type: 'color' },
        { prop: 'theme-active-color', val: theme.activeColor || props.activeColor, type: 'color' },
        { prop: 'theme-text-color', val: theme.textColor || props.textColor, type: 'color' }
      ])
    })

    expose({
      closeAll: () => globalState.closeAllMenu()
    })

    return () => h(
      'div',
      {
        class: `${componentConfig.mainClass} ` + getClassFomat(props.className +
          ` theme-${props.theme} ${(props.open ?? isOpen.value) ? 'open-status' : 'close-status'}`),
        style: styleVar.value,
      },
      childDomList.value
    )
  }
})

export default Menu
