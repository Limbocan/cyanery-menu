
// 组件配置
export enum componentConfig {
  mainClass = 'cy-menu',
  stylePrefix = '--cy-menu-',
  classPrefix = 'cy-menu-'
}

export const themeConfig = {
  normal: {
    closeWidth: '44px',
    backgroundColor: '#333',
    activeColor: '#e67e22',
    textColor: '#fff',
    activeTextCorlor: '#fff'
  },
  primary: {
    closeWidth: '38px',
    backgroundColor: '#223e9c',
    activeColor: '#2753c0',
    textColor: '#fff',
    activeTextCorlor: '#54fdff'
  },
  dark: {
    closeWidth: '38px',
    backgroundColor: '#1e1e2f',
    activeColor: '#3a3f51',
    textColor: '#8c909a',
    activeTextCorlor: '#007bff'
  }
}

// style参数
type styleFormatProp = {
  prop: String,
  val: any,
  type?: any,
}

// 设置dom-style属性
export const getStyleFormat = (style: styleFormatProp[]) => {
  const styleOption = {}
  style.forEach(s => {
    const PROPNAME = componentConfig.stylePrefix + s.prop
    let PROPVALUE = null
    switch (s.type) {
      case 'num':
        if (/^[1-9][0-9]*([\.][0-9]+)?$/g.test(s.val)) PROPVALUE = s.val + 'px'
        else PROPVALUE = s.val
        break
      case 'color':
        PROPVALUE = s.val
        break
      default:
        PROPVALUE = s.val
    }
    styleOption[PROPNAME] = PROPVALUE
  })
  return styleOption
}

// 设置dom-class
export const getClassFomat = (cl: string | Array<string>) => {
  let CL_LIST = (typeof cl === 'string' ? cl.split(' ') : cl).map(c => {
    return c ? componentConfig.classPrefix + c : null
  }).filter(c => !!c)
  return CL_LIST.join(' ')
}