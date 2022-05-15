
import { PropType, reactive } from 'vue'
import { RenderProp } from './types'
import type { MenuItemProps } from './types'

// 组件参数
export const MenuProps = {
  // 当前菜单项
  modelValue: {
    type: String as PropType<string>,
    default: '',
  },
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
  // 保持同级唯一一个子菜单展开
  unique: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  // 展开菜单方式
  trigger: {
    type: String as PropType<string>,
    default: 'click'
  },
  // 展示菜单图标
  showIcon: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  // 菜单收起宽度
  closeWidth: {
    type: String as PropType<string>,
    default: '44px'
  },
  // 次级菜单缩进（单位像素）
  offset: {
    type: Number as PropType<number>,
    default: 6
  },
  // 主题
  theme: {
    type: String as PropType<string>,
    default: 'primary'
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
  'update:modelValue',
  'update:open',
  'menu-click',
]

// 全局状态
class GlobalState {
  state
  constructor() {
    this.state = reactive({
      allMenus: [], // 所有菜单数据
      openedMenus: [], // 打开的菜单项
      activeMenu: [],
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
  // 存储菜单数据
  saveMenus(menus) {
    if (menus instanceof Array) this.state.allMenus = menus
  }
  // 设置当前活跃菜单项
  pushActiveMenu(key) {
    this.state.activeMenu = this.getActiveMenu(key, this.state.allMenus)
  }
  // 获取活跃菜单项
  getActiveMenu(key, menus, deep = 0, result = []) {
    for (let i = 0; i < menus.length; i++) {
      if (result[result.length - 1] === key) break
      const ITEM = menus[i]
      result[deep] = ITEM.key
      if (key === ITEM.key) {
        result.splice(deep + 1)
        break
      } else if (ITEM.children && ITEM.children.length) {
        this.getActiveMenu(key, ITEM.children, deep + 1, result)
      }
    }
    return result
  }
  // 存储打开的菜单项
  pushMenu(menu) {
    if (this.state.MenuPropsData.unique) {
      const DIFF_INDEX = this.state.openedMenus.findIndex(m => m.diff === menu.diff)
      if (DIFF_INDEX > -1) this.state.openedMenus.splice(DIFF_INDEX, 1)
    }
    this.state.openedMenus.push(menu)
  }
  // 移除关闭的菜单项
  remove(menu) {
    const INDEX = this.state.openedMenus.findIndex(m => m.key === menu.key && m.diff === menu.diff)
    this.state.openedMenus.splice(INDEX, 1)
  }
  // 关闭所有菜单
  closeAllMenu() {
    this.state.openedMenus.splice(0, this.state.openedMenus.length)
  }
}

export const globalState = new GlobalState()
