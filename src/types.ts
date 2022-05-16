import { PropType, VNodeChild } from 'vue'

// 菜单项
export type MenuItemProps = {
  name: string,
  key: string | null,
  path: string | null,
  disabled?: boolean,
  children?: MenuItemProps[]
}

// 插槽/组件渲染prop类型
export const RenderProp = [String, Function] as PropType<string | (() => VNodeChild)>
