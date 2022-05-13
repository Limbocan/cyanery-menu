(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.cyanMenu = {}, global.vue));
})(this, (function (exports, vue) { 'use strict';

  const withInstall = (main, extra) => {
      main.install = (app) => {
          for (const comp of [main, ...Object.values(extra != null ? extra : {})]) {
              app.component(comp.name, comp);
          }
      };
      if (extra) {
          for (const [key, comp] of Object.entries(extra)) {
              main[key] = comp;
          }
      }
      return main;
  };

  var componentConfig;
  (function (componentConfig) {
      componentConfig["stylePrefix"] = "--cy-menu-";
      componentConfig["classPrefix"] = "cy-menu-";
  })(componentConfig || (componentConfig = {}));

  const getStyleFormat = (style) => {
      const styleOption = {};
      style.forEach(s => {
          const PROPNAME = componentConfig.stylePrefix + s.prop;
          let PROPVALUE = null;
          switch (s.type) {
              case 'num':
                  if (/^\d+\.?\d+$/g.test(s.val))
                      PROPVALUE = s.val + 'px';
                  else
                      PROPVALUE = s.val;
                  break;
              case 'color':
                  PROPVALUE = getColorInfo(s.val).rgba;
                  break;
              default:
                  PROPVALUE = s.val;
          }
          styleOption[PROPNAME] = PROPVALUE;
      });
      return styleOption;
  };
  const getClassFomat = (cl) => {
      let CL_LIST = (typeof cl === 'string' ? cl.split(' ') : cl).map(c => {
          return c ? componentConfig.classPrefix + c : null;
      }).filter(c => !!c);
      return CL_LIST.join(' ');
  };
  const toHex = (n) => `${n > 15 ? '' : 0}${n.toString(16)}`;
  const toHexString = (colorObj) => {
      const { r, g, b, a = 1 } = colorObj;
      return `#${toHex(r)}${toHex(g)}${toHex(b)}${a === 1 ? '' : toHex(Math.floor(a * 255))}`;
  };
  const toRgbString = (colorObj) => {
      const { r, g, b } = colorObj;
      return `rgb(${r},${g},${b})`;
  };
  const toRgbaString = (colorObj, n = 10000) => {
      const { r, g, b, a = 1 } = colorObj;
      return `rgba(${r},${g},${b},${Math.floor(a * n) / n})`;
  };
  const parseHexColor = (color) => {
      let hex = color.slice(1);
      let a = 1;
      if (hex.length === 3) {
          hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
      }
      if (hex.length === 8) {
          a = parseInt(hex.slice(6), 16) / 255;
          hex = hex.slice(0, 6);
      }
      const bigint = parseInt(hex, 16);
      return {
          r: (bigint >> 16) & 255,
          g: (bigint >> 8) & 255,
          b: bigint & 255,
          a,
      };
  };
  const parseRgbaColor = (color) => {
      const arr = color.match(/(\d(\.\d+)?)+/g) || [];
      const res = arr.map((s) => parseInt(s, 10));
      return {
          r: res[0],
          g: res[1],
          b: res[2],
          a: parseFloat(arr[3]),
      };
  };
  const parseColorString = (color) => {
      if (color.startsWith('#')) {
          return parseHexColor(color);
      }
      else if (color.startsWith('rgb')) {
          return parseRgbaColor(color);
      }
      else if (color === 'transparent') {
          return parseHexColor('#00000000');
      }
      throw new Error(`color string error: ${color}`);
  };
  const getColorInfo = (color) => {
      const colorObj = parseColorString(color);
      const hex = toHexString(colorObj);
      const rgba = toRgbaString(colorObj);
      const rgb = toRgbString(colorObj);
      return {
          hex,
          rgba,
          rgb,
          rgbaObj: colorObj,
      };
  };

  const listProps = {
      child: {
          type: Array,
          default: () => []
      },
      diff: {
          type: Number,
          default: 0
      },
      open: {
          type: Boolean || undefined,
          default: undefined
      },
      isPopover: {
          type: Boolean || undefined,
          default: undefined
      }
  };
  var script$2 = vue.defineComponent({
      props: listProps,
      setup(props) {
          const listeners = {
              beforeEnter(el) {
                  if (!el.dataset)
                      el.dataset = {};
                  el.dataset.oldPaddingTop = el.style.paddingTop;
                  el.dataset.oldPaddingBottom = el.style.paddingBottom;
                  el.style.maxHeight = 0;
                  el.style.paddingTop = 0;
                  el.style.paddingBottom = 0;
              },
              enter(el) {
                  el.dataset.oldOverflow = el.style.overflow;
                  if (el.scrollHeight !== 0) {
                      el.style.maxHeight = `${el.scrollHeight}px`;
                      el.style.paddingTop = el.dataset.oldPaddingTop;
                      el.style.paddingBottom = el.dataset.oldPaddingBottom;
                  }
                  else {
                      el.style.maxHeight = 0;
                      el.style.paddingTop = el.dataset.oldPaddingTop;
                      el.style.paddingBottom = el.dataset.oldPaddingBottom;
                  }
                  el.style.overflow = 'hidden';
              },
              afterEnter(el) {
                  el.style.maxHeight = '';
                  el.style.overflow = el.dataset.oldOverflow;
              },
              beforeLeave(el) {
                  if (!el.dataset)
                      el.dataset = {};
                  el.dataset.oldPaddingTop = el.style.paddingTop;
                  el.dataset.oldPaddingBottom = el.style.paddingBottom;
                  el.dataset.oldOverflow = el.style.overflow;
                  el.style.maxHeight = `${el.scrollHeight}px`;
                  el.style.overflow = 'hidden';
              },
              leave(el) {
                  if (el.scrollHeight !== 0) {
                      el.style.maxHeight = 0;
                      el.style.paddingTop = 0;
                      el.style.paddingBottom = 0;
                  }
              },
              afterLeave(el) {
                  el.style.maxHeight = '';
                  el.style.overflow = el.dataset.oldOverflow;
                  el.style.paddingTop = el.dataset.oldPaddingTop;
                  el.style.paddingBottom = el.dataset.oldPaddingBottom;
              },
          };
          return {
              listeners,
              props,
              getClassFomat
          };
      }
  });

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock(vue.Transition, vue.mergeProps({ name: "collapse" }, vue.toHandlers(_ctx.listeners)), {
      default: vue.withCtx(() => [
        vue.withDirectives(vue.createElementVNode("ul", {
          class: vue.normalizeClass(_ctx.getClassFomat(`menu-list list-child-${_ctx.props.diff} ${_ctx.props.open ? 'toggle-open' : 'toggle-close'}`))
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.props.child, (item) => {
            return (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(item), {
              key: item,
              "is-popover": _ctx.props.isPopover
            }, null, 8 /* PROPS */, ["is-popover"]))
          }), 128 /* KEYED_FRAGMENT */))
        ], 2 /* CLASS */), [
          [vue.vShow, _ctx.props.open]
        ])
      ]),
      _: 1 /* STABLE */
    }, 16 /* FULL_PROPS */))
  }

  script$2.render = render;
  script$2.__file = "src/components/menu-list/menu-list.vue";

  const RenderProp = [String, Function];

  const MenuProps = {
      data: {
          type: Array,
          default: () => [],
      },
      className: {
          type: String,
          default: ''
      },
      width: {
          type: [Number, String],
          default: '100%'
      },
      open: {
          type: Boolean || undefined,
          default: undefined
      },
      toggleButton: {
          type: Boolean,
          default: false
      },
      unique: {
          type: Boolean,
          default: false
      },
      theme: {
          type: String,
          default: 'primary'
      },
      backgroundColor: {
          type: String,
          default: '#333'
      },
      activeColor: {
          type: String,
          default: '#e67e22'
      },
      textColor: {
          type: String,
          default: '#fff'
      },
      headerRender: RenderProp,
      footerRender: RenderProp,
      itemRender: RenderProp,
      iconRender: RenderProp,
  };
  const MenuEmits = [
      'update:open',
      'menu-click',
  ];
  class GlobalState {
      state;
      constructor() {
          this.state = vue.reactive({
              allMenus: [],
              openedMenus: [],
              MenuPropsData: {},
              menuEmitFn: null
          });
      }
      setMenuProps(props) {
          this.state.MenuPropsData = props;
      }
      setMenuEmit(emit) {
          this.state.menuEmitFn = emit;
      }
      menuEmitsMethod(name, value) {
          if (!this.state.menuEmitFn)
              return;
          this.state.menuEmitFn(name, value);
      }
      saveMenus(menus) {
          if (menus instanceof Array)
              this.state.allMenus = menus;
      }
      pushMenu(menu) {
          if (this.state.MenuPropsData.unique) {
              const DIFF_INDEX = this.state.openedMenus.findIndex(m => m.diff === menu.diff);
              if (DIFF_INDEX > -1)
                  this.state.openedMenus.splice(DIFF_INDEX, 1);
          }
          this.state.openedMenus.push(menu);
      }
      remove(menu) {
          const INDEX = this.state.openedMenus.findIndex(m => m.key === menu.key && m.diff === menu.diff);
          this.state.openedMenus.splice(INDEX, 1);
      }
      closeAllMenu() {
          this.state.openedMenus.splice(0, this.state.openedMenus.length);
      }
  }
  const globalState = new GlobalState();

  var script$1 = vue.defineComponent({
      props: {
          disabled: {
              type: Boolean,
              default: false
          }
      },
      setup(__props) {
          const props = __props;
          const initGap = 10;
          const popover = vue.ref({
              show: false,
              stopClose: false,
              x: 0,
              y: 0,
              gap: initGap
          });
          const popoverContRef = vue.ref(null);
          const popoverStyle = vue.computed(() => {
              return getStyleFormat([
                  { prop: 'popover-x', val: popover.value.x, type: 'num' },
                  { prop: 'popover-y', val: popover.value.y, type: 'num' }
              ]);
          });
          const closePopover = () => {
              setTimeout(() => {
                  if (!popover.value.stopClose)
                      popover.value.show = false;
              }, 300);
          };
          const mouseenter = (e) => {
              if (props.disabled)
                  return false;
              const { right, top } = e.target.getBoundingClientRect();
              popover.value.x = right;
              popover.value.y = top;
              popover.value.show = true;
              popover.value.stopClose = true;
              vue.nextTick(() => {
                  const gap = popoverContRef.value.offsetHeight + top - document.body.clientHeight;
                  if (gap > 0) {
                      const topGap = top - gap;
                      const topEable = topGap < 0;
                      popover.value.y = topEable ? 0 : top - gap;
                      popover.value.gap = topEable ? initGap + top : initGap + gap;
                  }
                  else
                      popover.value.gap = initGap;
              });
          };
          const mouseleave = () => {
              popover.value.stopClose = false;
              closePopover();
          };
          const popMouseenter = () => {
              popover.value.stopClose = true;
          };
          const popmouseleave = () => {
              popover.value.stopClose = false;
              closePopover();
          };
          return (_ctx, _cache) => {
              return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
                  vue.createElementVNode("div", {
                      onMouseenter: mouseenter,
                      onMouseleave: mouseleave
                  }, [
                      vue.renderSlot(_ctx.$slots, "trigger"),
                      vue.renderSlot(_ctx.$slots, "default")
                  ], 32),
                  vue.createVNode(vue.Transition, { name: "popover" }, {
                      default: vue.withCtx(() => [
                          vue.withDirectives(vue.createElementVNode("div", {
                              class: vue.normalizeClass(vue.unref(getClassFomat)('popover')),
                              style: vue.normalizeStyle(vue.unref(popoverStyle)),
                              onMouseenter: popMouseenter,
                              onMouseleave: popmouseleave
                          }, [
                              vue.createElementVNode("div", {
                                  class: vue.normalizeClass(vue.unref(getClassFomat)('popover-tip')),
                                  style: vue.normalizeStyle(vue.unref(getStyleFormat)([{ prop: 'gap', val: popover.value.gap, type: 'num' }]))
                              }, null, 6),
                              vue.createElementVNode("div", {
                                  ref_key: "popoverContRef",
                                  ref: popoverContRef,
                                  class: vue.normalizeClass(vue.unref(getClassFomat)('popover-content'))
                              }, [
                                  vue.renderSlot(_ctx.$slots, "content")
                              ], 2)
                          ], 38), [
                              [vue.vShow, popover.value.show]
                          ])
                      ]),
                      _: 3
                  })
              ], 64));
          };
      }
  });

  script$1.__file = "src/components/menu-popover/index.vue";

  const _hoisted_1 = vue.createElementVNode("path", { d: "M677.888 598.528l-254.464 239.616c-15.872 14.848-38.912 18.944-59.392 11.264-20.48-8.192-33.792-26.624-33.792-47.616V322.56c0-20.992 13.312-39.424 33.792-47.616 6.656-2.56 13.824-4.096 20.992-4.096 14.336 0 28.16 5.12 38.4 15.36l254.464 239.616c10.24 9.728 15.872 23.04 15.872 36.352 0.512 13.824-5.632 26.624-15.872 36.352z" }, null, -1);
  const _hoisted_2 = [
      _hoisted_1
  ];
  var script = vue.defineComponent({
      props: {
          data: {
              type: Object,
              default: ''
          },
          diff: {
              type: Number,
              default: 0
          },
          isPopover: {
              type: Boolean || undefined,
              default: undefined
          },
          itemSlot: {}
      },
      setup(__props) {
          const props = __props;
          const isOpen = vue.computed(() => {
              return globalState.state.openedMenus.findIndex(m => m.key === props.data.key && m.diff === props.diff) > -1;
          });
          const hasChild = vue.ref(props.data.children && props.data.children.length > 0);
          const menuClick = () => {
              if (hasChild.value && !props.isPopover) {
                  const CURR_ITEM = { ...props.data };
                  delete CURR_ITEM.children;
                  if (!isOpen.value)
                      globalState.pushMenu({ ...CURR_ITEM, diff: props.diff });
                  else
                      globalState.remove({ ...CURR_ITEM, diff: props.diff });
              }
              globalState.menuEmitsMethod('menu-click', props.data);
          };
          const className = vue.computed(() => isOpen.value ? 'open-active' : '');
          const boxStyle = vue.computed(() => {
              return {
                  'padding-left': props.isPopover ? null : props.diff * 10 + 'px'
              };
          });
          const childList = vue.ref(hasChild.value ? props.data.children : []);
          const child = vue.computed(() => childList.value.map((c) => {
              return vue.h(script, { data: c, diff: props.diff + 1, itemSlot: props.itemSlot });
          }));
          return (_ctx, _cache) => {
              return (vue.openBlock(), vue.createElementBlock("li", {
                  class: vue.normalizeClass(vue.unref(getClassFomat)('menu-item'))
              }, [
                  vue.createVNode(script$1, {
                      disabled: !hasChild.value || vue.unref(globalState).state.MenuPropsData.open || vue.unref(globalState).state.MenuPropsData.open === undefined
                  }, {
                      trigger: vue.withCtx(() => [
                          vue.createElementVNode("div", {
                              class: vue.normalizeClass(vue.unref(getClassFomat)(`menu-item-box ${vue.unref(className)}`)),
                              style: vue.normalizeStyle(vue.unref(boxStyle)),
                              onClick: menuClick
                          }, [
                              (props.itemSlot || vue.unref(globalState).state.MenuPropsData.itemRender)
                                  ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(props.itemSlot || vue.unref(globalState).state.MenuPropsData.itemRender), {
                                      key: 0,
                                      data: props.data,
                                      open: vue.unref(isOpen)
                                  }, null, 8, ["data", "open"]))
                                  : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                                      vue.createElementVNode("span", null, vue.toDisplayString(props.data.name), 1),
                                      (hasChild.value)
                                          ? (vue.openBlock(), vue.createElementBlock("svg", {
                                              key: 0,
                                              class: vue.normalizeClass(vue.unref(getClassFomat)(`col-icon ${vue.unref(isOpen) ? 'open-status' : ''}`)),
                                              viewBox: "0 0 1024 1024",
                                              version: "1.1",
                                              width: "16",
                                              height: "16"
                                          }, _hoisted_2, 2))
                                          : vue.createCommentVNode("v-if", true)
                                  ], 64))
                          ], 6)
                      ]),
                      content: vue.withCtx(() => [
                          vue.createVNode(script$2, {
                              child: vue.unref(child),
                              diff: props.diff,
                              open: true,
                              "is-popover": true
                          }, null, 8, ["child", "diff"])
                      ]),
                      _: 1
                  }, 8, ["disabled"]),
                  (hasChild.value && !props.isPopover)
                      ? (vue.openBlock(), vue.createBlock(script$2, {
                          key: 0,
                          child: vue.unref(child),
                          diff: props.diff,
                          open: vue.unref(isOpen)
                      }, null, 8, ["child", "diff", "open"]))
                      : vue.createCommentVNode("v-if", true)
              ], 2));
          };
      }
  });

  script.__file = "src/components/menu-item/menu-item.vue";

  const MenuListProps = {
      menuList: {
          type: Array,
          default: () => []
      },
      diff: {
          type: Number,
          default: 0
      },
      itemSlot: {}
  };
  const MenuListComponent = vue.defineComponent({
      name: 'CyaneryMenuList',
      props: MenuListProps,
      setup(props) {
          const MENU_NODE = vue.computed(() => {
              const MENU_LIST = formatList([...props.menuList]);
              globalState.saveMenus(MENU_LIST);
              return MENU_LIST.map(m => vue.h(script, { data: m, diff: props.diff + 1, itemSlot: props.itemSlot }));
          });
          const formatList = (list) => {
              return list.map(m => {
                  const ITEM = { ...m };
                  if (m.children)
                      ITEM.children = formatList(m.children);
                  return { ...ITEM, key: ITEM.key ?? ITEM.path };
              });
          };
          return () => vue.h(script$2, { child: MENU_NODE.value, diff: props.diff, open: true });
      }
  });

  const ToggleProps = {
      modelValue: {
          type: Boolean,
          default: false
      },
      type: {
          type: String,
          default: ''
      },
  };
  const ToggleEmits = ['update:modelValue'];
  const MenuToggleComponent = vue.defineComponent({
      name: 'CyaneryMenuToggle',
      props: ToggleProps,
      emits: ToggleEmits,
      setup(props, { emit }) {
          const status = vue.computed(() => {
              return props.modelValue ? 'is-open' : 'is-close';
          });
          const toggleClick = () => {
              const val = !props.modelValue;
              emit('update:modelValue', val);
          };
          return () => vue.h('div', {
              class: getClassFomat('toggle-box ' + status.value),
              onClick: () => toggleClick(),
          }, status.value);
      },
  });

  const Menu = vue.defineComponent({
      name: 'CyaneryMenu',
      props: MenuProps,
      emits: MenuEmits,
      setup(props, { emit, slots, expose }) {
          globalState.setMenuEmit(emit);
          globalState.setMenuProps(props);
          const isOpen = vue.ref(props.open ?? true);
          const childDomList = vue.computed(() => {
              const headerSlot = props.headerRender ?
                  vue.h(props.headerRender) :
                  vue.h('div', null, slots.header ? slots.header({ open: props.open }) : null);
              const toggleDom = vue.h(MenuToggleComponent, {
                  modelValue: props.open ?? isOpen.value,
                  'onUpdate:modelValue': (val) => {
                      isOpen.value = val;
                      globalState.menuEmitsMethod('update:open', val);
                  }
              });
              const ListDom = vue.h(MenuListComponent, { menuList: props.data, itemSlot: slots.menuItem });
              const bottomSlot = props.footerRender ?
                  vue.h(props.footerRender) :
                  vue.h('div', null, slots.footer ? slots.footer({ open: props.open }) : null);
              return [
                  headerSlot,
                  props.toggleButton ? toggleDom : null,
                  ListDom,
                  bottomSlot
              ];
          });
          expose({
              closeAll: () => globalState.closeAllMenu()
          });
          return () => vue.h('div', {
              class: 'cy-menu ' + getClassFomat(props.className + ` theme-${props.theme}`),
              style: getStyleFormat([
                  { prop: 'width', val: props.width, type: 'num' },
                  { prop: 'theme-cyan-bg-color', val: props.backgroundColor, type: 'color' },
                  { prop: 'theme-cyan-active-color', val: props.activeColor, type: 'color' },
                  { prop: 'theme-cyan-text-color', val: props.textColor, type: 'color' }
              ]),
          }, childDomList.value);
      }
  });

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".cy-menu {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start;\n  height: 100%;\n  width: var(--cy-menu-width);\n  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2901960784);\n  user-select: none;\n  overflow: hidden;\n}\n.cy-menu .cy-menu-toggle-box {\n  position: absolute;\n  right: 0;\n  width: 40px;\n  height: 40px;\n  background-color: aqua;\n}\n.cy-menu .cy-menu-menu-list {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  flex: 1;\n  overflow: auto;\n  transition: height var(--cy-menu-time) ease-in-out, padding-top var(--cy-menu-time) ease-in-out, padding-bottom var(--cy-menu-time) ease-in-out, max-height var(--cy-menu-time) ease-in-out;\n}\n.cy-menu .cy-menu-menu-list .cy-menu-menu-item {\n  --cy-menu-time: 0.3s;\n  list-style: none;\n  width: 100%;\n  overflow: hidden;\n}\n.cy-menu .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box {\n  position: relative;\n  padding: 12px 22px 12px 12px;\n  white-space: nowrap;\n  cursor: pointer;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  transition: background 0.3s ease-in-out, border 0.3s ease-in-out;\n}\n.cy-menu .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box .cy-menu-col-icon {\n  fill: var(--cy-menu-theme-cyan-text-color);\n  position: absolute;\n  right: 2px;\n  transition: transform 0.2s linear;\n}\n.cy-menu .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box .cy-menu-col-icon.cy-menu-open-status {\n  fill: var(--cy-menu-theme-cyan-active-color);\n  transform: rotate(90deg);\n}\n.cy-menu .cy-menu-menu-list[class*=cy-menu-list-child]:not(.cy-menu-list-child-0) {\n  overflow: hidden;\n}\n.cy-menu .cy-menu-menu-list[class*=cy-menu-list-child]:not(.cy-menu-list-child-0) .cy-menu-menu-item-box {\n  padding-left: 8px;\n}\n.cy-menu .cy-menu-menu-list::-webkit-scrollbar {\n  width: 4px;\n  background-color: #eee;\n}\n.cy-menu .cy-menu-menu-list::-webkit-scrollbar-thumb {\n  border-radius: 2px;\n  background-color: #c1c1c1;\n}\n.cy-menu .cy-menu-menu-list::-webkit-scrollbar-thumb:hover {\n  background-color: #a8a8a8;\n}\n.cy-menu .cy-menu-menu-list::-webkit-scrollbar-thumb:active {\n  background-color: #787878;\n}\n.cy-menu .cy-menu-menu-list {\n  scrollbar-width: thin;\n  scrollbar-color: #c1c1c1 #eee;\n}\n\n.cy-menu.cy-menu-theme-primary .cy-menu-menu-list {\n  color: var(--cy-menu-theme-cyan-text-color);\n  background-color: var(--cy-menu-theme-cyan-bg-color);\n}\n.cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box {\n  border-left: 3px solid transparent;\n  border-left-width: initial;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  border-top: 1px solid rgba(255, 255, 255, 0.05);\n}\n.cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n  border-left-color: var(--cy-menu-theme-cyan-active-color);\n}\n.cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active {\n  color: var(--cy-menu-theme-cyan-active-color);\n  border-left-color: var(--cy-menu-theme-cyan-active-color);\n}\n.cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  border: 4px solid transparent;\n  border-left-color: var(--cy-menu-theme-cyan-active-color);\n  transform: translateY(-50%);\n  transition: border 0.3s ease-in-out;\n}\n.cy-menu.cy-menu-theme-primary .cy-menu-menu-list[class*=cy-menu-list-child]:not(.cy-menu-list-child-0) {\n  background-color: #60686a;\n}\n\n.cy-menu-popover {\n  --cy-menu-popover-color: rgba(98, 109, 121, 0.8862745098);\n  position: fixed;\n  left: var(--cy-menu-popover-x);\n  top: var(--cy-menu-popover-y);\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n.cy-menu-popover .cy-menu-popover-tip {\n  position: absolute;\n  left: 0;\n  top: var(--cy-menu-gap);\n  border: 10px solid transparent;\n  border-right-color: var(--cy-menu-popover-color);\n  margin-left: -4px;\n}\n.cy-menu-popover .cy-menu-popover-content {\n  position: absolute;\n  left: 15px;\n  box-shadow: 0 0 12px rgba(0, 0, 0, 0.329);\n  border-radius: 2px;\n  background-color: var(--cy-menu-popover-color);\n}\n\n.popover-enter-active,\n.popover-leave-active {\n  transition: all 0.5s;\n}\n\n.popover-enter-from,\n.popover-leave-to {\n  opacity: 0;\n}";
  styleInject(css_248z);

  const CyaneryMenu = withInstall(Menu);

  exports.CyaneryMenu = CyaneryMenu;
  exports["default"] = CyaneryMenu;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
