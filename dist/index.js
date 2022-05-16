'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

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
    componentConfig["mainClass"] = "cy-menu";
    componentConfig["stylePrefix"] = "--cy-menu-";
    componentConfig["classPrefix"] = "cy-menu-";
})(componentConfig || (componentConfig = {}));
const themeConfig = {
    normal: {},
    primary: {
        closeWidth: '38px',
        backgroundColor: '#5768f3',
        activeColor: '#0f25d5',
        textColor: '#fff'
    }
};
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
    deep: {
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
var script$3 = vue.defineComponent({
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
        class: vue.normalizeClass(_ctx.getClassFomat(`menu-list list-child-${_ctx.props.deep} ${_ctx.props.open ? 'toggle-open' : 'toggle-close'}`))
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

script$3.render = render;
script$3.__file = "src/components/menu-list/menu-list.vue";

const RenderProp = [String, Function];

const MenuProps = {
    modelValue: {
        type: String || undefined,
        default: undefined,
    },
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
    trigger: {
        type: String,
        default: 'click'
    },
    showIcon: {
        type: Boolean,
        default: true
    },
    closeWidth: {
        type: String,
        default: '44px'
    },
    offset: {
        type: Number,
        default: 6
    },
    theme: {
        type: String,
        default: 'normal'
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
    'update:modelValue',
    'update:open',
    'menu-click',
];
class GlobalState {
    state;
    constructor() {
        this.state = vue.reactive({
            allMenus: [],
            openedMenus: [],
            activeMenuKey: '',
            activeMenus: vue.computed(() => this.getActiveMenus(this.state.activeMenuKey, this.state.allMenus)),
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
    pushActiveMenu(key, isOpen) {
        this.state.activeMenuKey = key;
        vue.nextTick(() => {
            this.setActiveOpen(this.state.allMenus, this.state.activeMenus, isOpen);
        });
    }
    getActiveMenus(key, menus, deep = 0, result = []) {
        for (let i = 0; i < menus.length; i++) {
            if (result[result.length - 1] === key)
                break;
            const ITEM = menus[i];
            result[deep] = ITEM.key;
            if (key === ITEM.key) {
                result.splice(deep + 1);
                break;
            }
            else if (ITEM.children && ITEM.children.length)
                this.getActiveMenus(key, ITEM.children, deep + 1, result);
        }
        if (result[result.length - 1] !== key)
            return [];
        return result;
    }
    setActiveOpen(menus, openKeys, isOpen) {
        openKeys.forEach(key => {
            const MENU = this.findMenuItem(menus, key);
            const INDEX = this.state.openedMenus.findIndex(m => m.key === MENU.key && m.deep === MENU.deep);
            if (INDEX < 0 && isOpen)
                this.pushMenu(MENU);
        });
    }
    findMenuItem(menus = this.state.allMenus, key) {
        const result = [];
        for (let i = 0; i < menus.length; i++) {
            const MENU = menus[i];
            if (result.length > 0)
                break;
            else if (MENU.key === key) {
                result.push(MENU);
                break;
            }
            else if (result.length === 0 && MENU.children && MENU.children.length > 0) {
                const TEMP = this.findMenuItem(MENU.children, key);
                TEMP.key ? result.push(this.findMenuItem(MENU.children, key)) : null;
            }
        }
        return result[0] || {};
    }
    pushMenu(menu) {
        const hasChild = menu.children && menu.children.length > 0;
        if (this.state.MenuPropsData.unique && hasChild) {
            const DIFF_INDEX = this.state.openedMenus.findIndex(m => m.deep === menu.deep);
            if (DIFF_INDEX > -1)
                this.state.openedMenus.splice(DIFF_INDEX, 1);
        }
        if (hasChild) {
            const CURR_ITEM = { ...menu };
            delete CURR_ITEM.children;
            this.state.openedMenus.push(CURR_ITEM);
        }
    }
    remove(menu) {
        const INDEX = this.state.openedMenus.findIndex(m => m.key === menu.key && m.deep === menu.deep);
        this.state.openedMenus.splice(INDEX, 1);
    }
    closeAllMenu() {
        this.state.openedMenus.splice(0, this.state.openedMenus.length);
    }
}
const globalState = new GlobalState();

var script$2 = vue.defineComponent({
    setup() {
        return () => vue.h('svg', { viewBox: '0 0 1024 1024', width: '100%', height: '100%' }, vue.h('path', { d: 'M512 877.714286c-204.8 0-365.714286-160.914286-365.714286-365.714286s160.914286-365.714286 365.714286-365.714286 365.714286 160.914286 365.714286 365.714286-160.914286 365.714286-365.714286 365.714286M512 0C226.742857 0 0 226.742857 0 512s226.742857 512 512 512 512-226.742857 512-512-226.742857-512-512-512m0 365.714286c-80.457143 0-146.285714 65.828571-146.285714 146.285714s65.828571 146.285714 146.285714 146.285714 146.285714-65.828571 146.285714-146.285714-65.828571-146.285714-146.285714-146.285714' }));
    },
});

script$2.__file = "src/components/menu-item/icon.vue";

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
            }, 200);
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
                    class: vue.normalizeClass(vue.unref(getClassFomat)('popover-template')),
                    onMouseenter: mouseenter,
                    onMouseleave: mouseleave
                }, [
                    vue.renderSlot(_ctx.$slots, "trigger"),
                    vue.renderSlot(_ctx.$slots, "default")
                ], 34),
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
        deep: {
            type: Number,
            default: 0
        },
        isPopover: {
            type: Boolean || undefined,
            default: undefined
        },
        itemSlot: {},
        iconSlot: {},
    },
    setup(__props) {
        const props = __props;
        const isOpen = vue.computed(() => {
            return globalState.state.openedMenus.findIndex(m => m.key === props.data.key && m.deep === props.deep) > -1;
        });
        const isActive = vue.computed(() => {
            return globalState.state.activeMenus.includes(props.data.key);
        });
        const hasChild = vue.ref(props.data.children && props.data.children.length > 0);
        const menuClick = () => {
            if (props.data.disabled)
                return false;
            if (!hasChild.value) {
                if (globalState.state.MenuPropsData.modelValue === undefined)
                    globalState.pushActiveMenu(props.data.key);
                globalState.menuEmitsMethod('update:modelValue', props.data.key);
            }
            if (hasChild.value && !props.isPopover && globalState.state.MenuPropsData.open !== false) {
                const CURR_ITEM = { ...props.data };
                if (!isOpen.value)
                    globalState.pushMenu(CURR_ITEM);
                else
                    globalState.remove(CURR_ITEM);
            }
            globalState.menuEmitsMethod('menu-click', props.data);
        };
        const className = vue.computed(() => {
            let CLASS_STR = '';
            CLASS_STR += isOpen.value ? 'open-list ' : '';
            CLASS_STR += isActive.value ? 'open-active ' : '';
            CLASS_STR += props.data.disabled ? 'menu-disabled ' : '';
            return CLASS_STR;
        });
        const boxStyle = vue.computed(() => {
            return {
                'padding-left': props.isPopover ? null : props.deep * globalState.state.MenuPropsData.offset + 'px'
            };
        });
        const childList = vue.ref(hasChild.value ? props.data.children : []);
        const child = vue.computed(() => childList.value.map((c) => {
            return vue.h(script, { data: c, deep: props.deep + 1, itemSlot: props.itemSlot });
        }));
        return (_ctx, _cache) => {
            return (vue.openBlock(), vue.createElementBlock("li", {
                class: vue.normalizeClass(vue.unref(getClassFomat)('menu-item'))
            }, [
                vue.createCommentVNode(" :disabled=\"!hasChild || globalState.state.MenuPropsData.open || globalState.state.MenuPropsData.open === undefined\" "),
                vue.createVNode(script$1, {
                    disabled: (!hasChild.value && props.isPopover) || vue.unref(globalState).state.MenuPropsData.open || vue.unref(globalState).state.MenuPropsData.open === undefined
                }, {
                    trigger: vue.withCtx(() => [
                        vue.createElementVNode("div", {
                            class: vue.normalizeClass(vue.unref(getClassFomat)(`menu-item-box ${vue.unref(className)}`)),
                            style: vue.normalizeStyle(vue.unref(boxStyle)),
                            onClick: menuClick
                        }, [
                            vue.createCommentVNode(" 自定义渲染或插槽 "),
                            (props.itemSlot || vue.unref(globalState).state.MenuPropsData.itemRender)
                                ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(props.itemSlot || vue.unref(globalState).state.MenuPropsData.itemRender), {
                                    key: 0,
                                    data: props.data,
                                    open: vue.unref(isOpen)
                                }, null, 8, ["data", "open"]))
                                : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                                    vue.createCommentVNode(" 默认菜单项DOM "),
                                    vue.createCommentVNode(" 自定义图标渲染或插槽 "),
                                    vue.withDirectives(vue.createElementVNode("div", {
                                        class: vue.normalizeClass(vue.unref(getClassFomat)('menu-icon'))
                                    }, [
                                        (props.iconSlot || vue.unref(globalState).state.MenuPropsData.iconRender)
                                            ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(props.iconSlot || vue.unref(globalState).state.MenuPropsData.iconRender), {
                                                key: 0,
                                                data: props.data,
                                                open: vue.unref(isOpen),
                                                deep: props.deep
                                            }, null, 8, ["data", "open", "deep"]))
                                            : (vue.unref(globalState).state.MenuPropsData.showIcon && props.deep === 1)
                                                ? (vue.openBlock(), vue.createBlock(script$2, { key: 1 }))
                                                : vue.createCommentVNode("v-if", true)
                                    ], 2), [
                                        [vue.vShow, vue.unref(globalState).state.MenuPropsData.showIcon]
                                    ]),
                                    vue.createElementVNode("span", {
                                        class: vue.normalizeClass(vue.unref(getClassFomat)('menu-text'))
                                    }, vue.toDisplayString(props.data.name), 3),
                                    (hasChild.value)
                                        ? (vue.openBlock(), vue.createElementBlock("svg", {
                                            key: 0,
                                            class: vue.normalizeClass(vue.unref(getClassFomat)(`col-icon ${vue.unref(isOpen) ? 'open-status' : ''} ${vue.unref(isActive) ? 'active-status' : ''}`)),
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
                        (hasChild.value)
                            ? (vue.openBlock(), vue.createBlock(script$3, {
                                key: 0,
                                child: vue.unref(child),
                                deep: props.deep,
                                open: true,
                                "is-popover": true
                            }, null, 8, ["child", "deep"]))
                            : (vue.openBlock(), vue.createElementBlock("span", {
                                key: 1,
                                class: vue.normalizeClass(vue.unref(getClassFomat)('popover-label'))
                            }, vue.toDisplayString(props.data.name), 3))
                    ]),
                    _: 1
                }, 8, ["disabled"]),
                vue.createCommentVNode(" 子菜单项列表 "),
                (hasChild.value && !props.isPopover)
                    ? (vue.openBlock(), vue.createBlock(script$3, {
                        key: 0,
                        child: vue.unref(child),
                        deep: props.deep,
                        open: vue.unref(isOpen)
                    }, null, 8, ["child", "deep", "open"]))
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
    deep: {
        type: Number,
        default: 0
    },
    itemSlot: {},
    iconSlot: {},
};
const MenuListComponent = vue.defineComponent({
    name: 'CyaneryMenuList',
    props: MenuListProps,
    setup(props) {
        const MENU_NODE = vue.computed(() => {
            const MENU_LIST = formatList([...props.menuList]);
            globalState.saveMenus(MENU_LIST);
            return MENU_LIST.map(m => vue.h(script, { data: m, deep: props.deep + 1, itemSlot: props.itemSlot, iconSlot: props.iconSlot }));
        });
        const formatList = (list, deep = 1) => {
            return list.map(m => {
                const ITEM = { ...m };
                if (m.children)
                    ITEM.children = formatList(m.children, deep + 1);
                return { ...ITEM, key: ITEM.key ?? ITEM.path, deep };
            });
        };
        return () => vue.h(script$3, { child: MENU_NODE.value, deep: props.deep, open: true });
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
        vue.watch(() => props.open, (val) => {
            isOpen.value = val;
            if (val === false)
                globalState.closeAllMenu();
        });
        vue.watch(() => props.modelValue, (key) => globalState.pushActiveMenu(key, isOpen.value), { immediate: true });
        vue.onMounted(() => {
            vue.watch(() => props.trigger, (val) => {
                const MENU_DOM = document.querySelector(`.${componentConfig.mainClass}`);
                if (val === 'hover') {
                    globalState.menuEmitsMethod('update:open', false);
                    MENU_DOM.addEventListener('mouseenter', changeOpen);
                    MENU_DOM.addEventListener('mouseleave', changeOpen);
                }
                else {
                    MENU_DOM.removeEventListener('mouseenter', changeOpen);
                    MENU_DOM.removeEventListener('mouseleave', changeOpen);
                }
            }, { immediate: true });
        });
        const changeOpen = () => globalState.menuEmitsMethod('update:open', !props.open);
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
            const ListDom = vue.h(MenuListComponent, { menuList: props.data, itemSlot: slots.menuItem, iconSlot: slots.icon });
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
        const styleVar = vue.computed(() => {
            const theme = themeConfig[props.theme];
            return getStyleFormat([
                { prop: 'width', val: props.width, type: 'num' },
                { prop: 'close-width', val: theme.closeWidth || props.closeWidth, type: 'num' },
                { prop: 'theme-bg-color', val: theme.backgroundColor || props.backgroundColor, type: 'color' },
                { prop: 'theme-active-color', val: theme.activeColor || props.activeColor, type: 'color' },
                { prop: 'theme-text-color', val: theme.textColor || props.textColor, type: 'color' }
            ]);
        });
        expose({
            closeAll: () => globalState.closeAllMenu()
        });
        return () => vue.h('div', {
            class: `${componentConfig.mainClass} ` + getClassFomat(props.className +
                ` theme-${props.theme} ${(props.open ?? isOpen.value) ? 'open-status' : 'close-status'}`),
            style: styleVar.value,
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

var css_248z = ".cy-menu.cy-menu-theme-normal .cy-menu-menu-list {\n  color: var(--cy-menu-theme-text-color);\n  background-color: var(--cy-menu-theme-bg-color);\n}\n.cy-menu.cy-menu-theme-normal .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box {\n  border-left: 3px solid transparent;\n  border-left-width: initial;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  border-top: 1px solid rgba(255, 255, 255, 0.05);\n}\n.cy-menu.cy-menu-theme-normal .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n  border-left-color: var(--cy-menu-theme-active-color);\n}\n.cy-menu.cy-menu-theme-normal .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-list > .cy-menu-menu-icon, .cy-menu.cy-menu-theme-normal .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-list > .cy-menu-menu-text, .cy-menu.cy-menu-theme-normal .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-list > .cy-menu-open-status {\n  color: #fff;\n  fill: #fff;\n}\n.cy-menu.cy-menu-theme-normal .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active {\n  color: var(--cy-menu-theme-active-color);\n  border-left-color: var(--cy-menu-theme-active-color);\n}\n.cy-menu.cy-menu-theme-normal .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  border: 4px solid transparent;\n  border-left-color: var(--cy-menu-theme-active-color);\n  transform: translateY(-50%);\n  transition: border 0.3s ease-in-out;\n}\n.cy-menu.cy-menu-theme-normal .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active > .cy-menu-menu-icon, .cy-menu.cy-menu-theme-normal .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active > .cy-menu-menu-text, .cy-menu.cy-menu-theme-normal .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active > .cy-menu-active-status {\n  color: var(--cy-menu-theme-active-color);\n  fill: var(--cy-menu-theme-active-color);\n}\n.cy-menu.cy-menu-theme-normal .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-menu-disabled {\n  color: #ccc;\n  background-color: #a7b4bf;\n}\n.cy-menu.cy-menu-theme-normal .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-menu-disabled > .cy-menu-menu-icon, .cy-menu.cy-menu-theme-normal .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-menu-disabled > .cy-menu-col-icon {\n  fill: #ccc;\n}\n.cy-menu.cy-menu-theme-normal .cy-menu-menu-list[class*=cy-menu-list-child]:not(.cy-menu-list-child-0) {\n  background-color: #60686a;\n}\n\n.cy-menu.cy-menu-theme-primary .cy-menu-menu-list {\n  color: var(--cy-menu-theme-text-color);\n  background-color: var(--cy-menu-theme-bg-color);\n}\n.cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box:hover {\n  color: var(--cy-menu-theme-bg-color);\n  background-color: var(--cy-menu-theme-active-color);\n}\n.cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box:hover > .cy-menu-menu-icon, .cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box:hover > .cy-menu-col-icon {\n  fill: var(--cy-menu-theme-bg-color);\n}\n.cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-list {\n  background-color: var(--cy-menu-theme-active-color);\n}\n.cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-list > .cy-menu-menu-icon, .cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-list > .cy-menu-menu-text, .cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-list > .cy-menu-col-icon {\n  color: var(--cy-menu-theme-bg-color);\n  fill: var(--cy-menu-theme-bg-color);\n}\n.cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active {\n  color: var(--cy-menu-theme-text-color);\n  background-color: var(--cy-menu-theme-active-color);\n}\n.cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active > .cy-menu-menu-icon, .cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active > .cy-menu-menu-text, .cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active > .cy-menu-active-status {\n  color: var(--cy-menu-theme-bg-color);\n  fill: var(--cy-menu-theme-bg-color);\n}\n.cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-menu-disabled {\n  color: #e9e9ee;\n}\n.cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-menu-disabled > .cy-menu-menu-icon, .cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-menu-disabled > .cy-menu-col-icon {\n  fill: #e9e9ee;\n}\n.cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-toggle-open {\n  color: #a2b5f7;\n}\n.cy-menu.cy-menu-theme-primary .cy-menu-menu-list[class*=cy-menu-list-child]:not(.cy-menu-list-child-0) {\n  background-color: var(--cy-menu-theme-active-color);\n}\n.cy-menu.cy-menu-theme-primary .cy-menu-menu-list[class*=cy-menu-list-child]:not(.cy-menu-list-child-0) .cy-menu-menu-item-box {\n  padding-right: 26px;\n}\n.cy-menu.cy-menu-theme-primary .cy-menu-popover-content .cy-menu-menu-item-box {\n  padding: 10px;\n}\n\n.cy-menu {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start;\n  height: 100%;\n  width: var(--cy-menu-width);\n  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2901960784);\n  user-select: none;\n  overflow: hidden;\n  transition: width 0.2s ease-in-out;\n}\n.cy-menu.cy-menu-close-status {\n  width: var(--cy-menu-close-width);\n}\n.cy-menu.cy-menu-close-status .cy-menu-menu-list:not(.cy-menu-list-child-0) .cy-menu-menu-icon {\n  display: none;\n}\n.cy-menu.cy-menu-close-status > .cy-menu-list-child-0 > .cy-menu-menu-item > .cy-menu-popover-template > .cy-menu-menu-item-box .cy-menu-menu-icon {\n  display: unset;\n}\n.cy-menu.cy-menu-close-status > .cy-menu-list-child-0 > .cy-menu-menu-item > .cy-menu-popover-template > .cy-menu-menu-item-box .cy-menu-menu-text, .cy-menu.cy-menu-close-status > .cy-menu-list-child-0 > .cy-menu-menu-item > .cy-menu-popover-template > .cy-menu-menu-item-box .cy-menu-col-icon {\n  display: none;\n}\n.cy-menu.cy-menu-open-status {\n  width: var(--cy-menu-width);\n}\n.cy-menu .cy-menu-toggle-box {\n  position: absolute;\n  right: 0;\n  width: 40px;\n  height: 40px;\n  background-color: aqua;\n}\n.cy-menu .cy-menu-menu-list {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  flex: 1;\n  overflow: auto;\n  transition: height var(--cy-menu-time) ease-in-out, padding-top var(--cy-menu-time) ease-in-out, padding-bottom var(--cy-menu-time) ease-in-out, max-height var(--cy-menu-time) ease-in-out;\n}\n.cy-menu .cy-menu-menu-list .cy-menu-menu-item {\n  --cy-menu-time: 0.3s;\n  list-style: none;\n  width: 100%;\n  overflow: hidden;\n}\n.cy-menu .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box {\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 12px 22px 12px 12px;\n  white-space: nowrap;\n  cursor: pointer;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  transition: background 0.2s ease-in-out, border 0.2s ease-in-out, color 0.2s ease-in-out;\n}\n.cy-menu .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box .cy-menu-menu-icon {\n  fill: var(--cy-menu-theme-text-color);\n  min-width: 22px;\n  width: 22px;\n  height: 22px;\n  padding: 0 4px;\n  margin-right: 6px;\n}\n.cy-menu .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box .cy-menu-col-icon {\n  fill: var(--cy-menu-theme-text-color);\n  position: absolute;\n  right: 2px;\n  transition: transform 0.2s linear;\n}\n.cy-menu .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box .cy-menu-col-icon.cy-menu-open-status {\n  transform: rotate(90deg);\n}\n.cy-menu .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-menu-disabled {\n  cursor: not-allowed;\n}\n.cy-menu .cy-menu-menu-list[class*=cy-menu-list-child]:not(.cy-menu-list-child-0) {\n  overflow: hidden;\n}\n.cy-menu .cy-menu-menu-list::-webkit-scrollbar {\n  width: 4px;\n  background-color: var(--cy-menu-theme-bg-color);\n}\n.cy-menu .cy-menu-menu-list::-webkit-scrollbar-thumb {\n  border-radius: 2px;\n  background-color: #c1c1c1;\n}\n.cy-menu .cy-menu-menu-list::-webkit-scrollbar-thumb:hover {\n  background-color: #a8a8a8;\n}\n.cy-menu .cy-menu-menu-list::-webkit-scrollbar-thumb:active {\n  background-color: #787878;\n}\n.cy-menu .cy-menu-menu-list {\n  scrollbar-width: thin;\n  scrollbar-color: #c1c1c1 #eee;\n}\n\n.cy-menu-popover {\n  --cy-menu-popover-color: rgba(98, 109, 121, 0.8862745098);\n  position: fixed;\n  left: var(--cy-menu-popover-x);\n  top: var(--cy-menu-popover-y);\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n.cy-menu-popover .cy-menu-popover-tip {\n  position: absolute;\n  left: 0;\n  top: var(--cy-menu-gap);\n  border: 10px solid transparent;\n  border-right-color: var(--cy-menu-popover-color);\n  margin-left: -4px;\n}\n.cy-menu-popover .cy-menu-popover-content {\n  position: absolute;\n  left: 15px;\n  box-shadow: 0 0 12px rgba(0, 0, 0, 0.329);\n  border-radius: 2px;\n  background-color: var(--cy-menu-popover-color);\n}\n.cy-menu-popover .cy-menu-popover-content .cy-menu-popover-label {\n  display: block;\n  white-space: nowrap;\n  padding: 10px;\n}\n\n.popover-enter-active,\n.popover-leave-active {\n  transition: all 0.2s;\n}\n\n.popover-enter-from,\n.popover-leave-to {\n  opacity: 0;\n}";
styleInject(css_248z);

const CyaneryMenu = withInstall(Menu);

exports.CyaneryMenu = CyaneryMenu;
exports["default"] = CyaneryMenu;
