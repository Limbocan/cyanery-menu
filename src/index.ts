

import { withInstall } from './utils/install'
import Menu from './components/menu-content'
import Popover from './components/menu-popover/index.vue'
import Collapse from './components/menu-collapse/index.vue'
import './styles/index.scss'

const CyaneryMenu = withInstall(Menu)

export {
  CyaneryMenu as default,
  CyaneryMenu,
  Popover,
  Collapse,
}
