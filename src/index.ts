

import { withInstall } from './utils/install'
import Menu from './components/menu-content'
import './styles/index.scss'

const CyaneryMenu = withInstall(Menu)

export { CyaneryMenu, CyaneryMenu as default }

// 使用
// import Menu from 'cyanery-menu'
// app.component('TestMenu', Menu)
// app.use(Menu)
