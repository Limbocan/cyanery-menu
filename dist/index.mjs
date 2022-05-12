import { defineComponent, openBlock, createBlock, Transition, mergeProps, toHandlers, withCtx, withDirectives, createElementVNode, normalizeClass, createElementBlock, Fragment, renderList, resolveDynamicComponent, vShow, reactive, ref, computed, renderSlot, createVNode, unref, normalizeStyle, nextTick, h, toDisplayString, createCommentVNode, onMounted } from 'vue';

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
var script$2 = defineComponent({
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
  return (openBlock(), createBlock(Transition, mergeProps({ name: "collapse" }, toHandlers(_ctx.listeners)), {
    default: withCtx(() => [
      withDirectives(createElementVNode("ul", {
        class: normalizeClass(_ctx.getClassFomat(`menu-list list-child-${_ctx.props.diff} ${_ctx.props.open ? 'toggle-open' : 'toggle-close'}`))
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.props.child, (item) => {
          return (openBlock(), createBlock(resolveDynamicComponent(item), {
            key: item,
            "is-popover": _ctx.props.isPopover
          }, null, 8 /* PROPS */, ["is-popover"]))
        }), 128 /* KEYED_FRAGMENT */))
      ], 2 /* CLASS */), [
        [vShow, _ctx.props.open]
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
        this.state = reactive({
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
    getMenu() {
        return this.state.openedMenus;
    }
    pushMenu(menu) {
        this.state.openedMenus.push(menu);
    }
    remove(menu) {
        const INDEX = this.state.openedMenus.findIndex(m => m.key === menu.key);
        this.state.openedMenus.splice(INDEX, 1);
    }
}
const globalState = new GlobalState();

var script$1 = defineComponent({
    props: {
        disabled: {
            type: Boolean,
            default: false
        }
    },
    setup(__props) {
        const props = __props;
        const initGap = 10;
        const popover = ref({
            show: false,
            stopClose: false,
            x: 0,
            y: 0,
            gap: initGap
        });
        const popoverContRef = ref(null);
        const popoverStyle = computed(() => {
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
            nextTick(() => {
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
            return (openBlock(), createElementBlock(Fragment, null, [
                createElementVNode("div", {
                    onMouseenter: mouseenter,
                    onMouseleave: mouseleave
                }, [
                    renderSlot(_ctx.$slots, "trigger"),
                    renderSlot(_ctx.$slots, "default")
                ], 32),
                createVNode(Transition, { name: "popover" }, {
                    default: withCtx(() => [
                        withDirectives(createElementVNode("div", {
                            class: normalizeClass(unref(getClassFomat)('popover')),
                            style: normalizeStyle(unref(popoverStyle)),
                            onMouseenter: popMouseenter,
                            onMouseleave: popmouseleave
                        }, [
                            createElementVNode("div", {
                                class: normalizeClass(unref(getClassFomat)('popover-tip')),
                                style: normalizeStyle(unref(getStyleFormat)([{ prop: 'gap', val: popover.value.gap, type: 'num' }]))
                            }, null, 6),
                            createElementVNode("div", {
                                ref_key: "popoverContRef",
                                ref: popoverContRef,
                                class: normalizeClass(unref(getClassFomat)('popover-content'))
                            }, [
                                renderSlot(_ctx.$slots, "content")
                            ], 2)
                        ], 38), [
                            [vShow, popover.value.show]
                        ])
                    ]),
                    _: 3
                })
            ], 64));
        };
    }
});

script$1.__file = "src/components/menu-popover/index.vue";

const _hoisted_1 = createElementVNode("path", { d: "M677.888 598.528l-254.464 239.616c-15.872 14.848-38.912 18.944-59.392 11.264-20.48-8.192-33.792-26.624-33.792-47.616V322.56c0-20.992 13.312-39.424 33.792-47.616 6.656-2.56 13.824-4.096 20.992-4.096 14.336 0 28.16 5.12 38.4 15.36l254.464 239.616c10.24 9.728 15.872 23.04 15.872 36.352 0.512 13.824-5.632 26.624-15.872 36.352z" }, null, -1);
const _hoisted_2 = [
    _hoisted_1
];
var script = defineComponent({
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
        const isOpen = ref(false);
        const hasChild = ref(props.data.children && props.data.children.length > 0);
        const menuClick = () => {
            if (hasChild.value && !props.isPopover) {
                isOpen.value = !isOpen.value;
                if (isOpen.value)
                    globalState.pushMenu({ key: props.data.key });
                else
                    globalState.remove({ key: props.data.key });
            }
            globalState.menuEmitsMethod('menu-click', props.data);
        };
        const className = computed(() => isOpen.value ? 'open-active' : '');
        const boxStyle = computed(() => {
            return {
                'padding-left': props.isPopover ? null : props.diff * 10 + 'px'
            };
        });
        const childList = ref(hasChild.value ? props.data.children : []);
        const child = computed(() => childList.value.map((c) => {
            return h(script, { data: c, diff: props.diff + 1, itemSlot: props.itemSlot });
        }));
        return (_ctx, _cache) => {
            return (openBlock(), createElementBlock("li", {
                class: normalizeClass(unref(getClassFomat)('menu-item'))
            }, [
                createVNode(script$1, {
                    disabled: !hasChild.value || unref(globalState).state.MenuPropsData.open || unref(globalState).state.MenuPropsData.open === undefined
                }, {
                    trigger: withCtx(() => [
                        createElementVNode("div", {
                            class: normalizeClass(unref(getClassFomat)(`menu-item-box ${unref(className)}`)),
                            style: normalizeStyle(unref(boxStyle)),
                            onClick: menuClick
                        }, [
                            (props.itemSlot || unref(globalState).state.MenuPropsData.itemRender)
                                ? (openBlock(), createBlock(resolveDynamicComponent(props.itemSlot || unref(globalState).state.MenuPropsData.itemRender), {
                                    key: 0,
                                    data: props.data,
                                    open: isOpen.value
                                }, null, 8, ["data", "open"]))
                                : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                    createElementVNode("span", null, toDisplayString(props.data.name), 1),
                                    (hasChild.value)
                                        ? (openBlock(), createElementBlock("svg", {
                                            key: 0,
                                            class: normalizeClass(unref(getClassFomat)(`col-icon ${isOpen.value ? 'open-status' : ''}`)),
                                            viewBox: "0 0 1024 1024",
                                            version: "1.1",
                                            width: "16",
                                            height: "16"
                                        }, _hoisted_2, 2))
                                        : createCommentVNode("v-if", true)
                                ], 64))
                        ], 6)
                    ]),
                    content: withCtx(() => [
                        createVNode(script$2, {
                            child: unref(child),
                            diff: props.diff,
                            open: true,
                            "is-popover": true
                        }, null, 8, ["child", "diff"])
                    ]),
                    _: 1
                }, 8, ["disabled"]),
                (hasChild.value && !props.isPopover)
                    ? (openBlock(), createBlock(script$2, {
                        key: 0,
                        child: unref(child),
                        diff: props.diff,
                        open: isOpen.value
                    }, null, 8, ["child", "diff", "open"]))
                    : createCommentVNode("v-if", true)
            ], 2));
        };
    }
});

script.__file = "src/components/menu-item/menu-item.vue";

/*!
 * perfect-scrollbar v1.5.3
 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */

function get(element) {
  return getComputedStyle(element);
}

function set(element, obj) {
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === 'number') {
      val = val + "px";
    }
    element.style[key] = val;
  }
  return element;
}

function div(className) {
  var div = document.createElement('div');
  div.className = className;
  return div;
}

var elMatches =
  typeof Element !== 'undefined' &&
  (Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector);

function matches(element, query) {
  if (!elMatches) {
    throw new Error('No element matching method supported');
  }

  return elMatches.call(element, query);
}

function remove(element) {
  if (element.remove) {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}

function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, function (child) { return matches(child, selector); }
  );
}

var cls = {
  main: 'ps',
  rtl: 'ps__rtl',
  element: {
    thumb: function (x) { return ("ps__thumb-" + x); },
    rail: function (x) { return ("ps__rail-" + x); },
    consuming: 'ps__child--consume',
  },
  state: {
    focus: 'ps--focus',
    clicking: 'ps--clicking',
    active: function (x) { return ("ps--active-" + x); },
    scrolling: function (x) { return ("ps--scrolling-" + x); },
  },
};

/*
 * Helper methods
 */
var scrollingClassTimeout = { x: null, y: null };

function addScrollingClass(i, x) {
  var classList = i.element.classList;
  var className = cls.state.scrolling(x);

  if (classList.contains(className)) {
    clearTimeout(scrollingClassTimeout[x]);
  } else {
    classList.add(className);
  }
}

function removeScrollingClass(i, x) {
  scrollingClassTimeout[x] = setTimeout(
    function () { return i.isAlive && i.element.classList.remove(cls.state.scrolling(x)); },
    i.settings.scrollingThreshold
  );
}

function setScrollingClassInstantly(i, x) {
  addScrollingClass(i, x);
  removeScrollingClass(i, x);
}

var EventElement = function EventElement(element) {
  this.element = element;
  this.handlers = {};
};

var prototypeAccessors = { isEmpty: { configurable: true } };

EventElement.prototype.bind = function bind (eventName, handler) {
  if (typeof this.handlers[eventName] === 'undefined') {
    this.handlers[eventName] = [];
  }
  this.handlers[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};

EventElement.prototype.unbind = function unbind (eventName, target) {
    var this$1$1 = this;

  this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
    if (target && handler !== target) {
      return true;
    }
    this$1$1.element.removeEventListener(eventName, handler, false);
    return false;
  });
};

EventElement.prototype.unbindAll = function unbindAll () {
  for (var name in this.handlers) {
    this.unbind(name);
  }
};

prototypeAccessors.isEmpty.get = function () {
    var this$1$1 = this;

  return Object.keys(this.handlers).every(
    function (key) { return this$1$1.handlers[key].length === 0; }
  );
};

Object.defineProperties( EventElement.prototype, prototypeAccessors );

var EventManager = function EventManager() {
  this.eventElements = [];
};

EventManager.prototype.eventElement = function eventElement (element) {
  var ee = this.eventElements.filter(function (ee) { return ee.element === element; })[0];
  if (!ee) {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }
  return ee;
};

EventManager.prototype.bind = function bind (element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};

EventManager.prototype.unbind = function unbind (element, eventName, handler) {
  var ee = this.eventElement(element);
  ee.unbind(eventName, handler);

  if (ee.isEmpty) {
    // remove
    this.eventElements.splice(this.eventElements.indexOf(ee), 1);
  }
};

EventManager.prototype.unbindAll = function unbindAll () {
  this.eventElements.forEach(function (e) { return e.unbindAll(); });
  this.eventElements = [];
};

EventManager.prototype.once = function once (element, eventName, handler) {
  var ee = this.eventElement(element);
  var onceHandler = function (evt) {
    ee.unbind(eventName, onceHandler);
    handler(evt);
  };
  ee.bind(eventName, onceHandler);
};

function createEvent(name) {
  if (typeof window.CustomEvent === 'function') {
    return new CustomEvent(name);
  } else {
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, false, false, undefined);
    return evt;
  }
}

function processScrollDiff(
  i,
  axis,
  diff,
  useScrollingClass,
  forceFireReachEvent
) {
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var fields;
  if (axis === 'top') {
    fields = [
      'contentHeight',
      'containerHeight',
      'scrollTop',
      'y',
      'up',
      'down' ];
  } else if (axis === 'left') {
    fields = [
      'contentWidth',
      'containerWidth',
      'scrollLeft',
      'x',
      'left',
      'right' ];
  } else {
    throw new Error('A proper axis should be provided');
  }

  processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
}

function processScrollDiff$1(
  i,
  diff,
  ref,
  useScrollingClass,
  forceFireReachEvent
) {
  var contentHeight = ref[0];
  var containerHeight = ref[1];
  var scrollTop = ref[2];
  var y = ref[3];
  var up = ref[4];
  var down = ref[5];
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var element = i.element;

  // reset reach
  i.reach[y] = null;

  // 1 for subpixel rounding
  if (element[scrollTop] < 1) {
    i.reach[y] = 'start';
  }

  // 1 for subpixel rounding
  if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
    i.reach[y] = 'end';
  }

  if (diff) {
    element.dispatchEvent(createEvent(("ps-scroll-" + y)));

    if (diff < 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + up)));
    } else if (diff > 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + down)));
    }

    if (useScrollingClass) {
      setScrollingClassInstantly(i, y);
    }
  }

  if (i.reach[y] && (diff || forceFireReachEvent)) {
    element.dispatchEvent(createEvent(("ps-" + y + "-reach-" + (i.reach[y]))));
  }
}

function toInt(x) {
  return parseInt(x, 10) || 0;
}

function isEditable(el) {
  return (
    matches(el, 'input,[contenteditable]') ||
    matches(el, 'select,[contenteditable]') ||
    matches(el, 'textarea,[contenteditable]') ||
    matches(el, 'button,[contenteditable]')
  );
}

function outerWidth(element) {
  var styles = get(element);
  return (
    toInt(styles.width) +
    toInt(styles.paddingLeft) +
    toInt(styles.paddingRight) +
    toInt(styles.borderLeftWidth) +
    toInt(styles.borderRightWidth)
  );
}

var env = {
  isWebKit:
    typeof document !== 'undefined' &&
    'WebkitAppearance' in document.documentElement.style,
  supportsTouch:
    typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      ('maxTouchPoints' in window.navigator &&
        window.navigator.maxTouchPoints > 0) ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)),
  supportsIePointer:
    typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
  isChrome:
    typeof navigator !== 'undefined' &&
    /Chrome/i.test(navigator && navigator.userAgent),
};

function updateGeometry(i) {
  var element = i.element;
  var roundedScrollTop = Math.floor(element.scrollTop);
  var rect = element.getBoundingClientRect();

  i.containerWidth = Math.round(rect.width);
  i.containerHeight = Math.round(rect.height);

  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;

  if (!element.contains(i.scrollbarXRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('x')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarXRail);
  }
  if (!element.contains(i.scrollbarYRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('y')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarYRail);
  }

  if (
    !i.settings.suppressScrollX &&
    i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth
  ) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(
      i,
      toInt((i.railXWidth * i.containerWidth) / i.contentWidth)
    );
    i.scrollbarXLeft = toInt(
      ((i.negativeScrollAdjustment + element.scrollLeft) *
        (i.railXWidth - i.scrollbarXWidth)) /
        (i.contentWidth - i.containerWidth)
    );
  } else {
    i.scrollbarXActive = false;
  }

  if (
    !i.settings.suppressScrollY &&
    i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight
  ) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(
      i,
      toInt((i.railYHeight * i.containerHeight) / i.contentHeight)
    );
    i.scrollbarYTop = toInt(
      (roundedScrollTop * (i.railYHeight - i.scrollbarYHeight)) /
        (i.contentHeight - i.containerHeight)
    );
  } else {
    i.scrollbarYActive = false;
  }

  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }

  updateCss(element, i);

  if (i.scrollbarXActive) {
    element.classList.add(cls.state.active('x'));
  } else {
    element.classList.remove(cls.state.active('x'));
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    element.scrollLeft = i.isRtl === true ? i.contentWidth : 0;
  }
  if (i.scrollbarYActive) {
    element.classList.add(cls.state.active('y'));
  } else {
    element.classList.remove(cls.state.active('y'));
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    element.scrollTop = 0;
  }
}

function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }
  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }
  return thumbSize;
}

function updateCss(element, i) {
  var xRailOffset = { width: i.railXWidth };
  var roundedScrollTop = Math.floor(element.scrollTop);

  if (i.isRtl) {
    xRailOffset.left =
      i.negativeScrollAdjustment +
      element.scrollLeft +
      i.containerWidth -
      i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }
  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
  }
  set(i.scrollbarXRail, xRailOffset);

  var yRailOffset = { top: roundedScrollTop, height: i.railYHeight };
  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right =
        i.contentWidth -
        (i.negativeScrollAdjustment + element.scrollLeft) -
        i.scrollbarYRight -
        i.scrollbarYOuterWidth -
        9;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left =
        i.negativeScrollAdjustment +
        element.scrollLeft +
        i.containerWidth * 2 -
        i.contentWidth -
        i.scrollbarYLeft -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }
  set(i.scrollbarYRail, yRailOffset);

  set(i.scrollbarX, {
    left: i.scrollbarXLeft,
    width: i.scrollbarXWidth - i.railBorderXWidth,
  });
  set(i.scrollbarY, {
    top: i.scrollbarYTop,
    height: i.scrollbarYHeight - i.railBorderYWidth,
  });
}

function clickRail(i) {
  i.element;

  i.event.bind(i.scrollbarY, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
    var positionTop =
      e.pageY -
      window.pageYOffset -
      i.scrollbarYRail.getBoundingClientRect().top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;

    i.element.scrollTop += direction * i.containerHeight;
    updateGeometry(i);

    e.stopPropagation();
  });

  i.event.bind(i.scrollbarX, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
    var positionLeft =
      e.pageX -
      window.pageXOffset -
      i.scrollbarXRail.getBoundingClientRect().left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;

    i.element.scrollLeft += direction * i.containerWidth;
    updateGeometry(i);

    e.stopPropagation();
  });
}

function dragThumb(i) {
  bindMouseScrollHandler(i, [
    'containerWidth',
    'contentWidth',
    'pageX',
    'railXWidth',
    'scrollbarX',
    'scrollbarXWidth',
    'scrollLeft',
    'x',
    'scrollbarXRail' ]);
  bindMouseScrollHandler(i, [
    'containerHeight',
    'contentHeight',
    'pageY',
    'railYHeight',
    'scrollbarY',
    'scrollbarYHeight',
    'scrollTop',
    'y',
    'scrollbarYRail' ]);
}

function bindMouseScrollHandler(
  i,
  ref
) {
  var containerHeight = ref[0];
  var contentHeight = ref[1];
  var pageY = ref[2];
  var railYHeight = ref[3];
  var scrollbarY = ref[4];
  var scrollbarYHeight = ref[5];
  var scrollTop = ref[6];
  var y = ref[7];
  var scrollbarYRail = ref[8];

  var element = i.element;

  var startingScrollTop = null;
  var startingMousePageY = null;
  var scrollBy = null;

  function mouseMoveHandler(e) {
    if (e.touches && e.touches[0]) {
      e[pageY] = e.touches[0].pageY;
    }
    element[scrollTop] =
      startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
    addScrollingClass(i, y);
    updateGeometry(i);

    e.stopPropagation();
    if (e.type.startsWith('touch') && e.changedTouches.length > 1) {
      e.preventDefault();
    }
  }

  function mouseUpHandler() {
    removeScrollingClass(i, y);
    i[scrollbarYRail].classList.remove(cls.state.clicking);
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  }

  function bindMoves(e, touchMode) {
    startingScrollTop = element[scrollTop];
    if (touchMode && e.touches) {
      e[pageY] = e.touches[0].pageY;
    }
    startingMousePageY = e[pageY];
    scrollBy =
      (i[contentHeight] - i[containerHeight]) /
      (i[railYHeight] - i[scrollbarYHeight]);
    if (!touchMode) {
      i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
      i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);
      e.preventDefault();
    } else {
      i.event.bind(i.ownerDocument, 'touchmove', mouseMoveHandler);
    }

    i[scrollbarYRail].classList.add(cls.state.clicking);

    e.stopPropagation();
  }

  i.event.bind(i[scrollbarY], 'mousedown', function (e) {
    bindMoves(e);
  });
  i.event.bind(i[scrollbarY], 'touchstart', function (e) {
    bindMoves(e, true);
  });
}

function keyboard(i) {
  var element = i.element;

  var elementHovered = function () { return matches(element, ':hover'); };
  var scrollbarFocused = function () { return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus'); };

  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if (
        (scrollTop === 0 && deltaY > 0) ||
        (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if (
        (scrollLeft === 0 && deltaX < 0) ||
        (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }

  i.event.bind(i.ownerDocument, 'keydown', function (e) {
    if (
      (e.isDefaultPrevented && e.isDefaultPrevented()) ||
      e.defaultPrevented
    ) {
      return;
    }

    if (!elementHovered() && !scrollbarFocused()) {
      return;
    }

    var activeElement = document.activeElement
      ? document.activeElement
      : i.ownerDocument.activeElement;
    if (activeElement) {
      if (activeElement.tagName === 'IFRAME') {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        // go deeper if element is a webcomponent
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }
      if (isEditable(activeElement)) {
        return;
      }
    }

    var deltaX = 0;
    var deltaY = 0;

    switch (e.which) {
      case 37: // left
        if (e.metaKey) {
          deltaX = -i.contentWidth;
        } else if (e.altKey) {
          deltaX = -i.containerWidth;
        } else {
          deltaX = -30;
        }
        break;
      case 38: // up
        if (e.metaKey) {
          deltaY = i.contentHeight;
        } else if (e.altKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = 30;
        }
        break;
      case 39: // right
        if (e.metaKey) {
          deltaX = i.contentWidth;
        } else if (e.altKey) {
          deltaX = i.containerWidth;
        } else {
          deltaX = 30;
        }
        break;
      case 40: // down
        if (e.metaKey) {
          deltaY = -i.contentHeight;
        } else if (e.altKey) {
          deltaY = -i.containerHeight;
        } else {
          deltaY = -30;
        }
        break;
      case 32: // space bar
        if (e.shiftKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = -i.containerHeight;
        }
        break;
      case 33: // page up
        deltaY = i.containerHeight;
        break;
      case 34: // page down
        deltaY = -i.containerHeight;
        break;
      case 36: // home
        deltaY = i.contentHeight;
        break;
      case 35: // end
        deltaY = -i.contentHeight;
        break;
      default:
        return;
    }

    if (i.settings.suppressScrollX && deltaX !== 0) {
      return;
    }
    if (i.settings.suppressScrollY && deltaY !== 0) {
      return;
    }

    element.scrollTop -= deltaY;
    element.scrollLeft += deltaX;
    updateGeometry(i);

    if (shouldPreventDefault(deltaX, deltaY)) {
      e.preventDefault();
    }
  });
}

function wheel(i) {
  var element = i.element;

  function shouldPreventDefault(deltaX, deltaY) {
    var roundedScrollTop = Math.floor(element.scrollTop);
    var isTop = element.scrollTop === 0;
    var isBottom =
      roundedScrollTop + element.offsetHeight === element.scrollHeight;
    var isLeft = element.scrollLeft === 0;
    var isRight =
      element.scrollLeft + element.offsetWidth === element.scrollWidth;

    var hitsBound;

    // pick axis with primary direction
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      hitsBound = isTop || isBottom;
    } else {
      hitsBound = isLeft || isRight;
    }

    return hitsBound ? !i.settings.wheelPropagation : true;
  }

  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;

    if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
      // OS X Safari
      deltaX = (-1 * e.wheelDeltaX) / 6;
      deltaY = e.wheelDeltaY / 6;
    }

    if (e.deltaMode && e.deltaMode === 1) {
      // Firefox in deltaMode 1: Line scrolling
      deltaX *= 10;
      deltaY *= 10;
    }

    if (deltaX !== deltaX && deltaY !== deltaY /* NaN checks */) {
      // IE in some mouse drivers
      deltaX = 0;
      deltaY = e.wheelDelta;
    }

    if (e.shiftKey) {
      // reverse axis with shift key
      return [-deltaY, -deltaX];
    }
    return [deltaX, deltaY];
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    // FIXME: this is a workaround for <select> issue in FF and IE #571
    if (!env.isWebKit && element.querySelector('select:focus')) {
      return true;
    }

    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);

      // if deltaY && vertical scrollable
      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            (cursor.scrollTop > 0 && deltaY < 0) ||
            (cursor.scrollTop < maxScrollTop && deltaY > 0)
          ) {
            return true;
          }
        }
      }
      // if deltaX && horizontal scrollable
      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            (cursor.scrollLeft > 0 && deltaX < 0) ||
            (cursor.scrollLeft < maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function mousewheelHandler(e) {
    var ref = getDeltaFromEvent(e);
    var deltaX = ref[0];
    var deltaY = ref[1];

    if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
      return;
    }

    var shouldPrevent = false;
    if (!i.settings.useBothWheelAxes) {
      // deltaX will only be used for horizontal scrolling and deltaY will
      // only be used for vertical scrolling - this is the default
      element.scrollTop -= deltaY * i.settings.wheelSpeed;
      element.scrollLeft += deltaX * i.settings.wheelSpeed;
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      // only vertical scrollbar is active and useBothWheelAxes option is
      // active, so let's scroll vertical bar using both mouse wheel axes
      if (deltaY) {
        element.scrollTop -= deltaY * i.settings.wheelSpeed;
      } else {
        element.scrollTop += deltaX * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      // useBothWheelAxes and only horizontal bar is active, so use both
      // wheel axes for horizontal bar
      if (deltaX) {
        element.scrollLeft += deltaX * i.settings.wheelSpeed;
      } else {
        element.scrollLeft -= deltaY * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    }

    updateGeometry(i);

    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent && !e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  if (typeof window.onwheel !== 'undefined') {
    i.event.bind(element, 'wheel', mousewheelHandler);
  } else if (typeof window.onmousewheel !== 'undefined') {
    i.event.bind(element, 'mousewheel', mousewheelHandler);
  }
}

function touch(i) {
  if (!env.supportsTouch && !env.supportsIePointer) {
    return;
  }

  var element = i.element;

  function shouldPrevent(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    var scrollLeft = element.scrollLeft;
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);

    if (magnitudeY > magnitudeX) {
      // user is perhaps trying to swipe up/down the page

      if (
        (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight) ||
        (deltaY > 0 && scrollTop === 0)
      ) {
        // set prevent for mobile Chrome refresh
        return window.scrollY === 0 && deltaY > 0 && env.isChrome;
      }
    } else if (magnitudeX > magnitudeY) {
      // user is perhaps trying to swipe left/right across the page

      if (
        (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth) ||
        (deltaX > 0 && scrollLeft === 0)
      ) {
        return true;
      }
    }

    return true;
  }

  function applyTouchMove(differenceX, differenceY) {
    element.scrollTop -= differenceY;
    element.scrollLeft -= differenceX;

    updateGeometry(i);
  }

  var startOffset = {};
  var startTime = 0;
  var speed = {};
  var easingLoop = null;

  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      // Maybe IE pointer
      return e;
    }
  }

  function shouldHandle(e) {
    if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
      return false;
    }
    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }
    if (
      e.pointerType &&
      e.pointerType !== 'mouse' &&
      e.pointerType !== e.MSPOINTER_TYPE_MOUSE
    ) {
      return true;
    }
    return false;
  }

  function touchStart(e) {
    if (!shouldHandle(e)) {
      return;
    }

    var touch = getTouch(e);

    startOffset.pageX = touch.pageX;
    startOffset.pageY = touch.pageY;

    startTime = new Date().getTime();

    if (easingLoop !== null) {
      clearInterval(easingLoop);
    }
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);

      // if deltaY && vertical scrollable
      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            (cursor.scrollTop > 0 && deltaY < 0) ||
            (cursor.scrollTop < maxScrollTop && deltaY > 0)
          ) {
            return true;
          }
        }
      }
      // if deltaX && horizontal scrollable
      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            (cursor.scrollLeft > 0 && deltaX < 0) ||
            (cursor.scrollLeft < maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function touchMove(e) {
    if (shouldHandle(e)) {
      var touch = getTouch(e);

      var currentOffset = { pageX: touch.pageX, pageY: touch.pageY };

      var differenceX = currentOffset.pageX - startOffset.pageX;
      var differenceY = currentOffset.pageY - startOffset.pageY;

      if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
        return;
      }

      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;

      var currentTime = new Date().getTime();

      var timeGap = currentTime - startTime;
      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }

      if (shouldPrevent(differenceX, differenceY)) {
        e.preventDefault();
      }
    }
  }
  function touchEnd() {
    if (i.settings.swipeEasing) {
      clearInterval(easingLoop);
      easingLoop = setInterval(function() {
        if (i.isInitialized) {
          clearInterval(easingLoop);
          return;
        }

        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }

        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }

        if (!i.element) {
          clearInterval(easingLoop);
          return;
        }

        applyTouchMove(speed.x * 30, speed.y * 30);

        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }

  if (env.supportsTouch) {
    i.event.bind(element, 'touchstart', touchStart);
    i.event.bind(element, 'touchmove', touchMove);
    i.event.bind(element, 'touchend', touchEnd);
  } else if (env.supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(element, 'pointerdown', touchStart);
      i.event.bind(element, 'pointermove', touchMove);
      i.event.bind(element, 'pointerup', touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(element, 'MSPointerDown', touchStart);
      i.event.bind(element, 'MSPointerMove', touchMove);
      i.event.bind(element, 'MSPointerUp', touchEnd);
    }
  }
}

var defaultSettings = function () { return ({
  handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
  maxScrollbarLength: null,
  minScrollbarLength: null,
  scrollingThreshold: 1000,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  suppressScrollX: false,
  suppressScrollY: false,
  swipeEasing: true,
  useBothWheelAxes: false,
  wheelPropagation: true,
  wheelSpeed: 1,
}); };

var handlers = {
  'click-rail': clickRail,
  'drag-thumb': dragThumb,
  keyboard: keyboard,
  wheel: wheel,
  touch: touch,
};

var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
  var this$1$1 = this;
  if ( userSettings === void 0 ) userSettings = {};

  if (typeof element === 'string') {
    element = document.querySelector(element);
  }

  if (!element || !element.nodeName) {
    throw new Error('no element is specified to initialize PerfectScrollbar');
  }

  this.element = element;

  element.classList.add(cls.main);

  this.settings = defaultSettings();
  for (var key in userSettings) {
    this.settings[key] = userSettings[key];
  }

  this.containerWidth = null;
  this.containerHeight = null;
  this.contentWidth = null;
  this.contentHeight = null;

  var focus = function () { return element.classList.add(cls.state.focus); };
  var blur = function () { return element.classList.remove(cls.state.focus); };

  this.isRtl = get(element).direction === 'rtl';
  if (this.isRtl === true) {
    element.classList.add(cls.rtl);
  }
  this.isNegativeScroll = (function () {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  })();
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? element.scrollWidth - element.clientWidth
    : 0;
  this.event = new EventManager();
  this.ownerDocument = element.ownerDocument || document;

  this.scrollbarXRail = div(cls.element.rail('x'));
  element.appendChild(this.scrollbarXRail);
  this.scrollbarX = div(cls.element.thumb('x'));
  this.scrollbarXRail.appendChild(this.scrollbarX);
  this.scrollbarX.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarX, 'focus', focus);
  this.event.bind(this.scrollbarX, 'blur', blur);
  this.scrollbarXActive = null;
  this.scrollbarXWidth = null;
  this.scrollbarXLeft = null;
  var railXStyle = get(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
  if (isNaN(this.scrollbarXBottom)) {
    this.isScrollbarXUsingBottom = false;
    this.scrollbarXTop = toInt(railXStyle.top);
  } else {
    this.isScrollbarXUsingBottom = true;
  }
  this.railBorderXWidth =
    toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
  // Set rail to display:block to calculate margins
  set(this.scrollbarXRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
  set(this.scrollbarXRail, { display: '' });
  this.railXWidth = null;
  this.railXRatio = null;

  this.scrollbarYRail = div(cls.element.rail('y'));
  element.appendChild(this.scrollbarYRail);
  this.scrollbarY = div(cls.element.thumb('y'));
  this.scrollbarYRail.appendChild(this.scrollbarY);
  this.scrollbarY.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarY, 'focus', focus);
  this.event.bind(this.scrollbarY, 'blur', blur);
  this.scrollbarYActive = null;
  this.scrollbarYHeight = null;
  this.scrollbarYTop = null;
  var railYStyle = get(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(railYStyle.right, 10);
  if (isNaN(this.scrollbarYRight)) {
    this.isScrollbarYUsingRight = false;
    this.scrollbarYLeft = toInt(railYStyle.left);
  } else {
    this.isScrollbarYUsingRight = true;
  }
  this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
  this.railBorderYWidth =
    toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
  set(this.scrollbarYRail, { display: 'block' });
  this.railYMarginHeight =
    toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
  set(this.scrollbarYRail, { display: '' });
  this.railYHeight = null;
  this.railYRatio = null;

  this.reach = {
    x:
      element.scrollLeft <= 0
        ? 'start'
        : element.scrollLeft >= this.contentWidth - this.containerWidth
        ? 'end'
        : null,
    y:
      element.scrollTop <= 0
        ? 'start'
        : element.scrollTop >= this.contentHeight - this.containerHeight
        ? 'end'
        : null,
  };

  this.isAlive = true;

  this.settings.handlers.forEach(function (handlerName) { return handlers[handlerName](this$1$1); });

  this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only
  this.lastScrollLeft = element.scrollLeft; // for onScroll only
  this.event.bind(this.element, 'scroll', function (e) { return this$1$1.onScroll(e); });
  updateGeometry(this);
};

PerfectScrollbar.prototype.update = function update () {
  if (!this.isAlive) {
    return;
  }

  // Recalcuate negative scrollLeft adjustment
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? this.element.scrollWidth - this.element.clientWidth
    : 0;

  // Recalculate rail margins
  set(this.scrollbarXRail, { display: 'block' });
  set(this.scrollbarYRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(get(this.scrollbarXRail).marginLeft) +
    toInt(get(this.scrollbarXRail).marginRight);
  this.railYMarginHeight =
    toInt(get(this.scrollbarYRail).marginTop) +
    toInt(get(this.scrollbarYRail).marginBottom);

  // Hide scrollbars not to affect scrollWidth and scrollHeight
  set(this.scrollbarXRail, { display: 'none' });
  set(this.scrollbarYRail, { display: 'none' });

  updateGeometry(this);

  processScrollDiff(this, 'top', 0, false, true);
  processScrollDiff(this, 'left', 0, false, true);

  set(this.scrollbarXRail, { display: '' });
  set(this.scrollbarYRail, { display: '' });
};

PerfectScrollbar.prototype.onScroll = function onScroll (e) {
  if (!this.isAlive) {
    return;
  }

  updateGeometry(this);
  processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
  processScrollDiff(
    this,
    'left',
    this.element.scrollLeft - this.lastScrollLeft
  );

  this.lastScrollTop = Math.floor(this.element.scrollTop);
  this.lastScrollLeft = this.element.scrollLeft;
};

PerfectScrollbar.prototype.destroy = function destroy () {
  if (!this.isAlive) {
    return;
  }

  this.event.unbindAll();
  remove(this.scrollbarX);
  remove(this.scrollbarY);
  remove(this.scrollbarXRail);
  remove(this.scrollbarYRail);
  this.removePsClasses();

  // unset elements
  this.element = null;
  this.scrollbarX = null;
  this.scrollbarY = null;
  this.scrollbarXRail = null;
  this.scrollbarYRail = null;

  this.isAlive = false;
};

PerfectScrollbar.prototype.removePsClasses = function removePsClasses () {
  this.element.className = this.element.className
    .split(' ')
    .filter(function (name) { return !name.match(/^ps([-_].+|)$/); })
    .join(' ');
};

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
const MenuListComponent = defineComponent({
    name: 'CyaneryMenuList',
    props: MenuListProps,
    setup(props) {
        const scrollbar = ref(null);
        onMounted(() => {
            scrollbar.value = new PerfectScrollbar('.cy-menu-list-child-0', {
                suppressScrollX: true,
                wheelSpeed: 0.5,
                wheelPropagation: true
            });
        });
        const MENU_NODE = computed(() => {
            return props.menuList.map(m => h(script, { data: m, diff: props.diff + 1, itemSlot: props.itemSlot }));
        });
        return () => h(script$2, { child: MENU_NODE.value, diff: props.diff, open: true });
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
const MenuToggleComponent = defineComponent({
    name: 'CyaneryMenuToggle',
    props: ToggleProps,
    emits: ToggleEmits,
    setup(props, { emit }) {
        const status = computed(() => {
            return props.modelValue ? 'is-open' : 'is-close';
        });
        const toggleClick = () => {
            const val = !props.modelValue;
            emit('update:modelValue', val);
        };
        return () => h('div', {
            class: getClassFomat('toggle-box ' + status.value),
            onClick: () => toggleClick(),
        }, status.value);
    },
});

const Menu = defineComponent({
    name: 'CyaneryMenu',
    props: MenuProps,
    emits: MenuEmits,
    setup(props, { emit, slots, expose }) {
        globalState.setMenuEmit(emit);
        globalState.setMenuProps(props);
        const isOpen = ref(props.open ?? true);
        const childDomList = computed(() => {
            const headerSlot = props.headerRender ?
                h(props.headerRender) :
                h('div', null, slots.header ? slots.header({ open: props.open }) : null);
            const toggleDom = h(MenuToggleComponent, {
                modelValue: props.open ?? isOpen.value,
                'onUpdate:modelValue': (val) => {
                    isOpen.value = val;
                    globalState.menuEmitsMethod('update:open', val);
                }
            });
            const ListDom = h(MenuListComponent, { menuList: props.data, itemSlot: slots.menuItem });
            const bottomSlot = props.footerRender ?
                h(props.footerRender) :
                h('div', null, slots.footer ? slots.footer({ open: props.open }) : null);
            return [
                headerSlot,
                props.toggleButton ? toggleDom : null,
                ListDom,
                bottomSlot
            ];
        });
        expose({
            getMenu: () => globalState.getMenu()
        });
        return () => h('div', {
            class: 'cy-menu ' + getClassFomat(props.className),
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

var css_248z$1 = ".cy-menu {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start;\n  height: 100%;\n  width: var(--cy-menu-width);\n  background-color: var(--cy-menu-theme-cyan-bg-color);\n  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2901960784);\n  color: var(--cy-menu-theme-cyan-text-color);\n  user-select: none;\n}\n.cy-menu .cy-menu-toggle-box {\n  position: absolute;\n  right: 0;\n  width: 40px;\n  height: 40px;\n  background-color: aqua;\n}\n.cy-menu > .cy-menu-menu-list {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  flex: 1;\n  overflow: hidden;\n}\n.cy-menu > .cy-menu-menu-list .cy-menu-menu-item {\n  --cy-menu-time: 0.5s;\n  list-style: none;\n  width: 100%;\n  overflow: hidden;\n}\n.cy-menu > .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box {\n  position: relative;\n  padding: 12px 22px 12px 12px;\n  border-left: 3px solid transparent;\n  border-left-width: initial;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  border-top: 1px solid rgba(255, 255, 255, 0.05);\n  white-space: nowrap;\n  cursor: pointer;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  transition: background 0.3s ease-in-out, border 0.3s ease-in-out;\n}\n.cy-menu > .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n  border-left-color: var(--cy-menu-theme-cyan-active-color);\n}\n.cy-menu > .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active {\n  color: rgb(103, 168, 254);\n  border-left-color: var(--cy-menu-theme-cyan-active-color);\n}\n.cy-menu > .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  border: 4px solid transparent;\n  border-left-color: var(--cy-menu-theme-cyan-active-color);\n  transform: translateY(-50%);\n  transition: border 0.3s ease-in-out;\n}\n.cy-menu > .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box .cy-menu-col-icon {\n  position: absolute;\n  right: 2px;\n  transition: transform 0.2s linear;\n}\n.cy-menu > .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box .cy-menu-col-icon.cy-menu-open-status {\n  transform: rotate(90deg);\n}\n.cy-menu > .cy-menu-menu-list .cy-menu-menu-item > .cy-menu-menu-list {\n  transition: height var(--cy-menu-time) ease-in-out, padding-top var(--cy-menu-time) ease-in-out, padding-bottom var(--cy-menu-time) ease-in-out, max-height var(--cy-menu-time) ease-in-out;\n}\n.cy-menu > .cy-menu-menu-list .cy-menu-menu-item > .cy-menu-menu-list[class*=cy-menu-list-child] {\n  overflow: hidden;\n}\n.cy-menu > .cy-menu-menu-list .cy-menu-menu-item > .cy-menu-menu-list[class*=cy-menu-list-child] .cy-menu-menu-item-box {\n  padding-left: 8px;\n}\n\n.cy-menu-popover {\n  --cy-menu-popover-color: rgba(98, 109, 121, 0.8862745098);\n  position: fixed;\n  left: var(--cy-menu-popover-x);\n  top: var(--cy-menu-popover-y);\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n.cy-menu-popover .cy-menu-popover-tip {\n  position: absolute;\n  left: 0;\n  top: var(--cy-menu-gap);\n  border: 10px solid transparent;\n  border-right-color: var(--cy-menu-popover-color);\n  margin-left: -4px;\n}\n.cy-menu-popover .cy-menu-popover-content {\n  position: absolute;\n  left: 15px;\n  box-shadow: 0 0 12px rgba(0, 0, 0, 0.329);\n  border-radius: 2px;\n  background-color: var(--cy-menu-popover-color);\n}\n\n.popover-enter-active,\n.popover-leave-active {\n  transition: all 0.5s;\n}\n\n.popover-enter-from,\n.popover-leave-to {\n  opacity: 0;\n}";
styleInject(css_248z$1);

var css_248z = "/*\n * Scrollbar rail styles\n */\n.ps__rail-x {\n  display: none;\n}\n\n.ps__rail-y {\n  display: none;\n  opacity: 0;\n  transition: background-color 0.2s linear, opacity 0.2s linear;\n  width: 4px;\n  /* there must be 'right' or 'left' for ps__rail-y */\n  right: 0;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps--active-x > .ps__rail-x,\n.ps--active-y > .ps__rail-y {\n  display: block;\n  background-color: transparent;\n}\n\n.ps:hover > .ps__rail-x,\n.ps:hover > .ps__rail-y,\n.ps--focus > .ps__rail-x,\n.ps--focus > .ps__rail-y,\n.ps--scrolling-x > .ps__rail-x,\n.ps--scrolling-y > .ps__rail-y {\n  opacity: 0.6;\n}\n\n.ps .ps__rail-x:hover,\n.ps .ps__rail-y:hover,\n.ps .ps__rail-x:focus,\n.ps .ps__rail-y:focus,\n.ps .ps__rail-x.ps--clicking,\n.ps .ps__rail-y.ps--clicking {\n  background-color: #eee;\n  opacity: 0.9;\n}\n\n/*\n * Scrollbar thumb styles\n */\n.ps__thumb-y {\n  background-color: #aaa;\n  border-radius: 4px;\n  transition: background-color 0.2s linear, width 0.2s ease-in-out;\n  width: 2px;\n  /* there must be 'right' for ps__thumb-y */\n  right: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-x:hover > .ps__thumb-x,\n.ps__rail-x:focus > .ps__thumb-x,\n.ps__rail-x.ps--clicking .ps__thumb-x {\n  background-color: #999;\n  height: 4px;\n}\n\n.ps__rail-y:hover > .ps__thumb-y,\n.ps__rail-y:focus > .ps__thumb-y,\n.ps__rail-y.ps--clicking .ps__thumb-y {\n  background-color: #999;\n  width: 4px;\n}\n\n/* MS supports */\n@supports (-ms-overflow-style: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}";
styleInject(css_248z);

const CyaneryMenu = withInstall(Menu);

export { CyaneryMenu, CyaneryMenu as default };
