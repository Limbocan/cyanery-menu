

import { withInstall } from './utils/install'
import Menu from './components/menu-content'
import Popover from './components/menu-popover/index.vue'
import './styles/index.scss'

const CyaneryMenu = withInstall(Menu)

export { CyaneryMenu, CyaneryMenu as default, Popover }
