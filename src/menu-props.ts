
import { PropType, reactive } from 'vue'
import { RenderProp } from './types'
import type { MenuItemProps } from './types'

// 组件参数
export const MenuProps = {
  // 菜单项列表
  data: {
    type: Array as PropType<MenuItemProps[]>,
    default: () => [],
  },
  // 样式类
  className: {
    type: String as PropType<string>,
    default: ''
  },
  // 菜单宽度
  width: {
    type: [Number, String] as PropType<number | string>,
    default: '100%'
  },
  // 菜单展开(true)/收起(false)
  open: {
    type: Boolean || undefined as PropType<boolean | undefined>,
    default: undefined
  },
  // 显示菜单切换按钮
  toggleButton: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  // 菜单背景色
  backgroundColor: {
    type: String as PropType<string>,
    default: '#333'
  },
  // 菜单主题色
  activeColor: {
    type: String as PropType<string>,
    default: '#e67e22'
  },
  // 菜单主题色
  textColor: {
    type: String as PropType<string>,
    default: '#fff'
  },
  // 菜单头部渲染方法
  headerRender: RenderProp,
  // 菜单底部渲染方法
  footerRender: RenderProp,
  // 菜单项渲染方法
  itemRender: RenderProp,
  // 菜单图标渲染方法
  iconRender: RenderProp,
}

// 菜单回调事件
export const MenuEmits = [
  'update:open',
  'menu-click',
]

// 全局状态
class GlobalState {
  state
  constructor() {
    this.state = reactive({
      openedMenus: [],
      MenuPropsData: {}, // 全局组件参数
      menuEmitFn: null // 全局emits方法
    })
  }
  // 存储菜单全局参数
  setMenuProps(props) {
    this.state.MenuPropsData = props
  }
  // 存储菜单全局事件
  setMenuEmit(emit) {
    this.state.menuEmitFn = emit
  }
  // 调用菜单全局事件
  menuEmitsMethod(name, value) {
    if (!this.state.menuEmitFn) return
    this.state.menuEmitFn(name, value)
  }

  getMenu() {
    return this.state.openedMenus
  }

  pushMenu(menu) {
    this.state.openedMenus.push(menu)
  }

  remove(menu) {
    const INDEX = this.state.openedMenus.findIndex(m => m.key === menu.key)
    this.state.openedMenus.splice(INDEX, 1)
  }
}

export const globalState = new GlobalState()
