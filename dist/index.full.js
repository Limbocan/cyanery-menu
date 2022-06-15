!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).cyanMenu={},e.vue)}(this,(function(e,n){"use strict";var t,o=n.defineComponent({setup:()=>({listeners:{beforeEnter(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0},enter(e){e.dataset.oldOverflow=e.style.overflow,0!==e.scrollHeight?(e.style.maxHeight=`${e.scrollHeight}px`,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom):(e.style.maxHeight=0,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom),e.style.overflow="hidden"},afterEnter(e){e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow},beforeLeave(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.dataset.oldOverflow=e.style.overflow,e.style.maxHeight=`${e.scrollHeight}px`,e.style.overflow="hidden"},leave(e){0!==e.scrollHeight&&(e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0)},afterLeave(e){e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom}}})});o.render=function(e,t,o,m,u,c){return n.openBlock(),n.createBlock(n.Transition,n.mergeProps({name:"collapse"},n.toHandlers(e.listeners)),{default:n.withCtx((()=>[n.renderSlot(e.$slots,"default")])),_:3},16)},o.__file="src/components/menu-collapse/index.vue",function(e){e.mainClass="cy-menu",e.stylePrefix="--cy-menu-",e.classPrefix="cy-menu-"}(t||(t={}));const m={normal:{closeWidth:"44px",backgroundColor:"#333",activeColor:"#425873",textColor:"#b7b7b7",activeTextCorlor:"#fff"},primary:{closeWidth:"38px",backgroundColor:"#002654",activeColor:"#285a92",textColor:"#fff",activeTextCorlor:"#54c5ff"},dark:{closeWidth:"38px",backgroundColor:"#1e1e2f",activeColor:"#3a3f51",textColor:"#8c909a",activeTextCorlor:"#007bff"}},u=e=>{const n={};return e.forEach((e=>{const o=t.stylePrefix+e.prop;let m=null;if("num"===e.type)m=/^[1-9][0-9]*([\.][0-9]+)?$/g.test(e.val)?e.val+"px":e.val;else m=e.val;n[o]=m})),n},c=e=>("string"==typeof e?e.split(" "):e).map((e=>e?t.classPrefix+e:null)).filter((e=>!!e)).join(" "),i={child:{type:Array,default:()=>[]},deep:{type:Number,default:0},open:{type:Boolean||void 0,default:void 0},isPopover:{type:Boolean||void 0,default:void 0}};var l=n.defineComponent({components:{collapse:o},props:i,setup:e=>({props:e,getClassFomat:c})});l.render=function(e,t,o,m,u,c){const i=n.resolveComponent("collapse");return n.openBlock(),n.createBlock(i,null,{default:n.withCtx((()=>[n.withDirectives(n.createElementVNode("ul",{class:n.normalizeClass(e.getClassFomat(`menu-list list-child-${e.props.deep} ${e.props.open?"toggle-open":"toggle-close"}`))},[(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(e.props.child,(t=>(n.openBlock(),n.createBlock(n.resolveDynamicComponent(t),{key:t,"is-popover":e.props.isPopover},null,8,["is-popover"])))),128))],2),[[n.vShow,e.props.open]])])),_:1})},l.__file="src/components/menu-list/menu-list.vue";var a=n.defineComponent({props:{type:{type:String,default:"item"},class:{type:String,default:""},width:{type:String,default:"100%"},height:{type:String,default:"100%"},color:{type:String,default:""}},setup(e){const t=n.computed((()=>({item:n.h("svg",{viewBox:"0 0 1024 1024",class:e.class,width:e.width,height:e.height,fill:e.color},n.h("path",{d:"M512 877.714286c-204.8 0-365.714286-160.914286-365.714286-365.714286s160.914286-365.714286 365.714286-365.714286 365.714286 160.914286 365.714286 365.714286-160.914286 365.714286-365.714286 365.714286M512 0C226.742857 0 0 226.742857 0 512s226.742857 512 512 512 512-226.742857 512-512-226.742857-512-512-512m0 365.714286c-80.457143 0-146.285714 65.828571-146.285714 146.285714s65.828571 146.285714 146.285714 146.285714 146.285714-65.828571 146.285714-146.285714-65.828571-146.285714-146.285714-146.285714"})),arrow1:n.h("svg",{viewBox:"0 0 1024 1024",class:e.class,width:e.width,height:e.height,fill:e.color},n.h("path",{d:"M677.888 598.528l-254.464 239.616c-15.872 14.848-38.912 18.944-59.392 11.264-20.48-8.192-33.792-26.624-33.792-47.616V322.56c0-20.992 13.312-39.424 33.792-47.616 6.656-2.56 13.824-4.096 20.992-4.096 14.336 0 28.16 5.12 38.4 15.36l254.464 239.616c10.24 9.728 15.872 23.04 15.872 36.352 0.512 13.824-5.632 26.624-15.872 36.352z"})),arrow2:n.h("svg",{viewBox:"0 0 1024 1024",class:e.class,width:e.width,height:e.height,fill:e.color},n.h("path",{d:"M558.933333 490.666667L384 665.6l59.733333 59.733333 234.666667-234.666666L443.733333 256 384 315.733333l174.933333 174.933334z"})),arrow3:n.h("svg",{viewBox:"0 0 1024 1024",class:e.class,width:e.width,height:e.height,fill:e.color},[n.h("path",{d:"M837.9904 570.0608H124.5696a29.0304 29.0304 0 0 1-29.0304-29.0304V482.9696a29.0304 29.0304 0 0 1 29.0304-29.0304h713.4208z"}),n.h("path",{d:"M561.3056 808.96l-40.96-40.96a28.928 28.928 0 0 1 0-40.96l215.04-215.04-215.04-215.04a28.9792 28.9792 0 0 1 0-40.96l40.96-40.96a28.9792 28.9792 0 0 1 40.96 0l296.96 296.96-296.96 296.96a28.9792 28.9792 0 0 1-40.96 0z"})])})));return()=>t.value[e.type]}});a.__file="src/components/menu-item/icon.vue";var r=n.defineComponent({props:{disabled:{type:Boolean,default:!1}},setup(e){const t=e,o=n.ref({show:!1,stopClose:!1,x:0,y:0,gap:12}),m=n.ref(null),i=n.computed((()=>u([{prop:"popover-x",val:o.value.x,type:"num"},{prop:"popover-y",val:o.value.y,type:"num"}]))),l=()=>{setTimeout((()=>{o.value.stopClose||(o.value.show=!1)}),200)},a=e=>{if(t.disabled)return!1;const{right:u,top:c}=e.target.getBoundingClientRect();o.value.x=u,o.value.y=c,o.value.show=!0,o.value.stopClose=!0,n.nextTick((()=>{const e=m.value.offsetHeight+c-document.body.clientHeight;if(e>0){const n=c-e<0;o.value.y=n?0:c-e,o.value.gap=n?12+c:12+e}else o.value.gap=12}))},r=()=>{o.value.stopClose=!1,l()},s=()=>{o.value.stopClose=!0},p=()=>{o.value.stopClose=!1,l()};return(e,t)=>(n.openBlock(),n.createElementBlock(n.Fragment,null,[n.createElementVNode("div",{class:n.normalizeClass(n.unref(c)("popover-template")),onMouseenter:a,onMouseleave:r},[n.renderSlot(e.$slots,"trigger"),n.renderSlot(e.$slots,"default")],34),n.createVNode(n.Transition,{name:"popover"},{default:n.withCtx((()=>[n.withDirectives(n.createElementVNode("div",{class:n.normalizeClass(n.unref(c)("popover")),style:n.normalizeStyle(n.unref(i)),onMouseenter:s,onMouseleave:p},[n.createElementVNode("div",{class:n.normalizeClass(n.unref(c)("popover-tip")),style:n.normalizeStyle(n.unref(u)([{prop:"gap",val:o.value.gap,type:"num"}]))},null,6),n.createElementVNode("div",{ref_key:"popoverContRef",ref:m,class:n.normalizeClass(n.unref(c)("popover-content"))},[n.renderSlot(e.$slots,"content")],2)],38),[[n.vShow,o.value.show]])])),_:3})],64))}});r.__file="src/components/menu-popover/index.vue";var s=n.defineComponent({props:{data:{type:Object,default:""},deep:{type:Number,default:0},isPopover:{type:Boolean||void 0,default:void 0},itemSlot:{},iconSlot:{}},setup(e){const t=e,o=n.inject("globalState"),m=n.computed((()=>o.state.openedMenus.findIndex((e=>e.key===t.data.key&&e.deep===t.deep))>-1)),u=n.computed((()=>o.state.activeMenus.includes(t.data.key))),i=n.ref(t.data.children&&t.data.children.length>0),p=()=>{if(t.data.disabled)return!1;if(!i.value){const e=o.state.MenuPropsData.beforeRouter;e?e(o.state.activeMenuKey,t.data.key,y):y(t.data.key)}if(i.value&&!t.isPopover&&!1!==o.state.MenuPropsData.open&&!1===o.state.MenuPropsData.alwaysPopover){const e={...t.data};m.value?o.remove(e):o.pushMenu(e)}o.menuEmitsMethod("menu-click",t.data)},y=(e=t.data.key)=>{void 0===o.state.MenuPropsData.modelValue&&o.pushActiveMenu(e),o.menuEmitsMethod("update:modelValue",e)},d=n.computed((()=>!o.state.MenuPropsData.alwaysPopover&&(!i.value&&t.isPopover||o.state.MenuPropsData.open||void 0===o.state.MenuPropsData.open&&o.state.isOpen))),h=n.computed((()=>{let e="";return e+=m.value?"open-list ":"",e+=u.value?"open-active ":"",e+=t.data.disabled?"menu-disabled ":"",e+=t.isPopover?"is-popover ":"",e})),v=n.computed((()=>({"padding-left":t.isPopover?null:t.deep*o.state.MenuPropsData.offset+"px"}))),f=n.ref(i.value?t.data.children:[]),x=n.computed((()=>f.value.map((e=>n.h(s,{data:e,deep:t.deep+1,itemSlot:t.itemSlot})))));return(e,s)=>(n.openBlock(),n.createElementBlock("li",{class:n.normalizeClass(n.unref(c)("menu-item"))},[n.createVNode(r,{disabled:n.unref(d)},{trigger:n.withCtx((()=>[n.createElementVNode("div",{class:n.normalizeClass(n.unref(c)(`menu-item-box ${n.unref(h)}`)),style:n.normalizeStyle(n.unref(v)),onClick:p},[n.createCommentVNode(" 自定义渲染或插槽 "),t.itemSlot||n.unref(o).state.MenuPropsData.itemRender?(n.openBlock(),n.createBlock(n.resolveDynamicComponent(t.itemSlot||n.unref(o).state.MenuPropsData.itemRender),{key:0,data:t.data,active:n.unref(u),popover:t.isPopover,disabled:t.data.disabled,open:n.unref(m)},null,8,["data","active","popover","disabled","open"])):(n.openBlock(),n.createElementBlock(n.Fragment,{key:1},[n.createCommentVNode(" 默认菜单项DOM "),n.createCommentVNode(" 自定义图标渲染或插槽 "),n.withDirectives(n.createElementVNode("div",{class:n.normalizeClass(n.unref(c)("menu-icon"))},[t.iconSlot||n.unref(o).state.MenuPropsData.iconRender?(n.openBlock(),n.createBlock(n.resolveDynamicComponent(t.iconSlot||n.unref(o).state.MenuPropsData.iconRender),{key:0,data:t.data,active:n.unref(u),open:n.unref(m),disabled:t.data.disabled,deep:t.deep},null,8,["data","active","open","disabled","deep"])):n.unref(o).state.MenuPropsData.showIcon&&1===t.deep?(n.openBlock(),n.createBlock(a,{key:1})):n.createCommentVNode("v-if",!0)],2),[[n.vShow,n.unref(o).state.MenuPropsData.showIcon]]),n.createElementVNode("span",{class:n.normalizeClass(n.unref(c)("menu-text"))},n.toDisplayString(t.data.name),3),i.value?(n.openBlock(),n.createBlock(a,{key:0,class:n.normalizeClass(n.unref(c)(`col-icon ${n.unref(m)?"open-status":""} ${n.unref(u)?"active-status":""}`)),type:n.unref(o).state.MenuPropsData.arrowType,width:"16",height:"16"},null,8,["class","type"])):n.createCommentVNode("v-if",!0)],64))],6)])),content:n.withCtx((()=>[i.value?(n.openBlock(),n.createBlock(l,{key:0,child:n.unref(x),deep:t.deep,open:!0,"is-popover":!0},null,8,["child","deep"])):(n.openBlock(),n.createElementBlock("span",{key:1,class:n.normalizeClass(n.unref(c)("popover-label"))},n.toDisplayString(t.data.name),3))])),_:1},8,["disabled"]),n.createCommentVNode(" 子菜单项列表 "),i.value&&!t.isPopover?(n.openBlock(),n.createBlock(l,{key:0,child:n.unref(x),deep:t.deep,open:n.unref(m)},null,8,["child","deep","open"])):n.createCommentVNode("v-if",!0)],2))}});s.__file="src/components/menu-item/menu-item.vue";const p={menuList:{type:Array,default:()=>[]},deep:{type:Number,default:0},itemSlot:{},iconSlot:{}},y=n.defineComponent({name:"CyaneryMenuList",props:p,setup(e){const t=n.inject("globalState"),o=n.computed((()=>{const o=m([...e.menuList]);return t.saveMenus(o),o.map((t=>n.h(s,{data:t,deep:e.deep+1,itemSlot:e.itemSlot,iconSlot:e.iconSlot})))})),m=(e,n=1)=>e.map((e=>{const t={...e};return e.children&&(t.children=m(e.children,n+1)),{...t,key:t.key??t.path,deep:n}}));return()=>n.h(l,{child:o.value,deep:e.deep,open:!0})}}),d={modelValue:{type:Boolean,default:!1},type:{type:String,default:""}},h=n.defineComponent({name:"CyaneryMenuToggle",props:d,emits:["update:modelValue"],setup(e,{emit:t}){const o=n.computed((()=>e.modelValue?"is-open":"is-close"));return()=>n.h(a,{class:c("toggle-box "+o.value),type:"arrow2",onClick:()=>(()=>{const n=!e.modelValue;t("update:modelValue",n)})()})}}),v=[String,Function],f={modelValue:{type:String||void 0,default:void 0},data:{type:Array,default:()=>[]},className:{type:String,default:""},width:{type:[Number,String],default:"100%"},open:{type:Boolean||void 0,default:void 0},toggleButton:{type:Boolean,default:!1},unique:{type:Boolean,default:!1},trigger:{type:String,default:"click"},beforeRouter:{type:Function||void 0,default:void 0},showIcon:{type:Boolean,default:!0},closeWidth:{type:String,default:""},offset:{type:Number,default:6},alwaysPopover:{type:Boolean,default:!1},arrowType:{type:String,default:"arrow1"},theme:{type:String,default:"normal"},backgroundColor:{type:String,default:""},activeColor:{type:String,default:""},textColor:{type:String,default:""},activeTextCorlor:{type:String,default:""},headerRender:v,footerRender:v,itemRender:v,iconRender:v};class x{state;constructor(){this.state=n.reactive({isOpen:!0,allMenus:[],openedMenus:[],activeMenuKey:"",activeMenus:n.computed((()=>this.getActiveMenus(this.state.activeMenuKey,this.state.allMenus))),MenuPropsData:{},menuEmitFn:null})}setMenuProps(e){this.state.MenuPropsData=e}setMenuEmit(e){this.state.menuEmitFn=e}menuEmitsMethod(e,n){this.state.menuEmitFn&&this.state.menuEmitFn(e,n)}saveMenus(e){e instanceof Array&&(this.state.allMenus=e)}pushActiveMenu(e,t){this.state.activeMenuKey=e,n.nextTick((()=>{this.state.MenuPropsData.alwaysPopover||this.setActiveOpen(this.state.allMenus,this.state.activeMenus,t)}))}getActiveMenus(e,n,t=0,o=[]){for(let m=0;m<n.length&&o[o.length-1]!==e;m++){const u=n[m];if(o[t]=u.key,e===u.key){o.splice(t+1);break}u.children&&u.children.length&&this.getActiveMenus(e,u.children,t+1,o)}return o[o.length-1]!==e?[]:o}setActiveOpen(e,n,t){n.forEach((n=>{const o=this.findMenuItem(e,n);this.state.openedMenus.findIndex((e=>e.key===o.key&&e.deep===o.deep))<0&&t&&this.pushMenu(o)}))}findMenuItem(e=this.state.allMenus,n){const t=[];for(let o=0;o<e.length;o++){const m=e[o];if(t.length>0)break;if(m.key===n){t.push(m);break}if(0===t.length&&m.children&&m.children.length>0){this.findMenuItem(m.children,n).key&&t.push(this.findMenuItem(m.children,n))}}return t[0]||{}}pushMenu(e){const n=e.children&&e.children.length>0;if(this.state.MenuPropsData.unique&&n){const n=this.state.openedMenus.findIndex((n=>n.deep===e.deep));n>-1&&this.state.openedMenus.splice(n,1)}if(n){const n={...e};delete n.children,this.state.openedMenus.push(n)}}remove(e){const n=this.state.openedMenus.findIndex((n=>n.key===e.key&&n.deep===e.deep));this.state.openedMenus.splice(n,1)}closeAllMenu(){this.state.openedMenus.splice(0,this.state.openedMenus.length)}}const g=n.defineComponent({name:"CyaneryMenu",props:f,emits:["update:modelValue","update:open","menu-click"],setup(e,{emit:t,slots:o,expose:c}){const i=n.reactive(new x),l=n.ref(null);n.provide("globalState",i),i.setMenuEmit(t),i.setMenuProps(e),i.state.isOpen=e.open??!0,n.watch((()=>e.open),(e=>{i.state.isOpen=e,n.nextTick((()=>{!1===e&&i.closeAllMenu()}))})),n.watch((()=>e.modelValue),(e=>i.pushActiveMenu(e,i.state.isOpen)),{immediate:!0}),n.onMounted((()=>{n.watch((()=>e.trigger),(e=>{const n=l.value;"hover"===e?(i.menuEmitsMethod("update:open",!1),n.addEventListener("mouseenter",a),n.addEventListener("mouseleave",a)):(n.removeEventListener("mouseenter",a),n.removeEventListener("mouseleave",a))}),{immediate:!0})}));const a=()=>i.menuEmitsMethod("update:open",!e.open),r=n.computed((()=>{const t=e.headerRender?n.h(e.headerRender):n.h("div",null,o.header?o.header({open:e.open}):null),m=n.h(h,{modelValue:e.open??i.state.isOpen,"onUpdate:modelValue":e=>{i.state.isOpen=e,i.menuEmitsMethod("update:open",e),!1===e&&i.closeAllMenu()}}),u=n.h(y,{menuList:e.data,itemSlot:o.menuItem,iconSlot:o.icon}),c=e.footerRender?n.h(e.footerRender):n.h("div",null,o.footer?o.footer({open:e.open}):null);return[t,e.toggleButton?m:null,u,c]})),s=n.computed((()=>{const n=m[e.theme];return u([{prop:"width",val:e.width,type:"num"},{prop:"close-width",val:e.closeWidth||n.closeWidth,type:"num"},{prop:"theme-bg-color",val:e.backgroundColor||n.backgroundColor,type:"color"},{prop:"theme-active-color",val:e.activeColor||n.activeColor,type:"color"},{prop:"theme-text-color",val:e.textColor||n.textColor,type:"color"},{prop:"theme-active-text-color",val:e.activeTextCorlor||n.activeTextCorlor,type:"color"}])}));return c({closeAll:()=>i.closeAllMenu(),openMenu:e=>i.pushMenu(e),closeMenu:e=>i.remove(e)}),{ContentRef:l,props:e,globalState:i,styleVar:s,childDomList:r}},render(){return n.h("div",{class:`${t.mainClass} `+c(this.props.className+` theme-${this.props.theme} ${this.props.open??this.globalState.state.isOpen?"open-status":"close-status"}`),style:this.styleVar,ref:"ContentRef"},this.childDomList)}});!function(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],m=document.createElement("style");m.type="text/css","top"===t&&o.firstChild?o.insertBefore(m,o.firstChild):o.appendChild(m),m.styleSheet?m.styleSheet.cssText=e:m.appendChild(document.createTextNode(e))}}('.cy-menu.cy-menu-theme-normal .cy-menu-menu-list {\n  color: var(--cy-menu-theme-text-color);\n  background-color: var(--cy-menu-theme-bg-color);\n}\n.cy-menu.cy-menu-theme-normal .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box {\n  border-left: 3px solid transparent;\n  border-left-width: initial;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  border-top: 1px solid rgba(255, 255, 255, 0.05);\n}\n.cy-menu.cy-menu-theme-normal .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n  border-left-color: var(--cy-menu-theme-active-text-color);\n}\n.cy-menu.cy-menu-theme-normal .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active {\n  color: var(--cy-menu-theme-active-text-color);\n  border-left-color: var(--cy-menu-theme-active-text-color);\n}\n.cy-menu.cy-menu-theme-normal .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  border: 4px solid transparent;\n  border-left-color: var(--cy-menu-theme-active-text-color);\n  transform: translateY(-50%);\n  transition: border 0.3s ease-in-out;\n}\n.cy-menu.cy-menu-theme-normal .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active > .cy-menu-menu-icon, .cy-menu.cy-menu-theme-normal .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active > .cy-menu-menu-text, .cy-menu.cy-menu-theme-normal .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active > .cy-menu-active-status {\n  color: var(--cy-menu-theme-active-text-color);\n  fill: var(--cy-menu-theme-active-text-color);\n}\n.cy-menu.cy-menu-theme-normal .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-menu-disabled {\n  color: #ccc;\n  background-color: #a7b4bf;\n}\n.cy-menu.cy-menu-theme-normal .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-menu-disabled > .cy-menu-menu-icon, .cy-menu.cy-menu-theme-normal .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-menu-disabled > .cy-menu-col-icon {\n  fill: #ccc;\n}\n.cy-menu.cy-menu-theme-normal .cy-menu-menu-list[class*=cy-menu-list-child]:not(.cy-menu-list-child-0) {\n  background-color: var(--cy-menu-theme-active-color);\n}\n.cy-menu.cy-menu-theme-normal .cy-menu-popover-content .cy-menu-menu-item-box.cy-menu-is-popover {\n  background-color: var(--cy-menu-theme-bg-color);\n}\n\n.cy-menu.cy-menu-theme-primary .cy-menu-menu-list {\n  color: var(--cy-menu-theme-text-color);\n  background-color: var(--cy-menu-theme-bg-color);\n}\n.cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box {\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n.cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box:hover {\n  color: var(--cy-menu-theme-active-text-color);\n  background-color: var(--cy-menu-theme-active-color);\n}\n.cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box:hover > .cy-menu-menu-icon, .cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box:hover > .cy-menu-col-icon {\n  fill: var(--cy-menu-theme-active-text-color);\n}\n.cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active > .cy-menu-menu-icon, .cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active > .cy-menu-menu-text, .cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active > .cy-menu-active-status {\n  color: var(--cy-menu-theme-active-text-color);\n  fill: var(--cy-menu-theme-active-text-color);\n}\n.cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-menu-disabled {\n  color: #e9e9ee;\n}\n.cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-menu-disabled > .cy-menu-menu-icon, .cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-menu-disabled > .cy-menu-col-icon {\n  fill: #e9e9ee;\n}\n.cy-menu.cy-menu-theme-primary .cy-menu-menu-list[class*=cy-menu-list-child]:not(.cy-menu-list-child-0) .cy-menu-popover-template > .cy-menu-menu-item-box:not(.cy-menu-is-popover) {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-right: 26px;\n}\n.cy-menu.cy-menu-theme-primary .cy-menu-menu-list[class*=cy-menu-list-child]:not(.cy-menu-list-child-0) .cy-menu-popover-template > .cy-menu-menu-item-box:not(.cy-menu-is-popover)::before {\n  content: "";\n  position: absolute;\n  left: 18px;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background-color: #0355a3;\n}\n.cy-menu.cy-menu-theme-primary .cy-menu-menu-list[class*=cy-menu-list-child]:not(.cy-menu-list-child-0) .cy-menu-popover-template > .cy-menu-menu-item-box:not(.cy-menu-is-popover).cy-menu-open-active::before {\n  background-color: #a2b5f7;\n}\n.cy-menu.cy-menu-theme-primary .cy-menu-menu-list[class*=cy-menu-list-child]:not(.cy-menu-list-child-0) .cy-menu-popover-template > .cy-menu-menu-item-box:not(.cy-menu-is-popover):hover {\n  color: var(--cy-menu-theme-active-text-color);\n  background-color: var(--cy-menu-theme-bg-color);\n}\n.cy-menu.cy-menu-theme-primary .cy-menu-popover-content .cy-menu-menu-item-box.cy-menu-is-popover {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.cy-menu.cy-menu-theme-dark > .cy-menu-menu-list > .cy-menu-menu-item {\n  margin-top: 4px;\n}\n.cy-menu.cy-menu-theme-dark > .cy-menu-menu-list > .cy-menu-menu-item:nth-child(1) {\n  margin-top: 10px;\n}\n.cy-menu.cy-menu-theme-dark .cy-menu-menu-list {\n  color: var(--cy-menu-theme-text-color);\n  background-color: var(--cy-menu-theme-bg-color);\n}\n.cy-menu.cy-menu-theme-dark .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-right: 28px;\n}\n.cy-menu.cy-menu-theme-dark .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box > .cy-menu-col-icon {\n  right: 12px;\n}\n.cy-menu.cy-menu-theme-dark .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box:hover {\n  color: var(--cy-menu-theme-active-text-color);\n  background-color: var(--cy-menu-theme-active-color);\n}\n.cy-menu.cy-menu-theme-dark .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box:hover > .cy-menu-menu-icon, .cy-menu.cy-menu-theme-dark .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box:hover > .cy-menu-col-icon {\n  fill: var(--cy-menu-theme-active-text-color);\n}\n.cy-menu.cy-menu-theme-dark .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-list {\n  border-radius: 10px 10px 0 0;\n  background-color: var(--cy-menu-theme-active-color);\n}\n.cy-menu.cy-menu-theme-dark .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active {\n  background-color: var(--cy-menu-theme-active-color);\n}\n.cy-menu.cy-menu-theme-dark .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active > .cy-menu-menu-icon, .cy-menu.cy-menu-theme-dark .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active > .cy-menu-menu-text, .cy-menu.cy-menu-theme-dark .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active > .cy-menu-active-status {\n  color: var(--cy-menu-theme-active-text-color);\n  fill: var(--cy-menu-theme-active-text-color);\n}\n.cy-menu.cy-menu-theme-dark .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-menu-disabled {\n  color: #e9e9ee;\n}\n.cy-menu.cy-menu-theme-dark .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-menu-disabled > .cy-menu-menu-icon, .cy-menu.cy-menu-theme-dark .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-menu-disabled > .cy-menu-col-icon {\n  fill: #e9e9ee;\n}\n.cy-menu.cy-menu-theme-dark .cy-menu-menu-list .cy-menu-list-child-1 {\n  box-shadow: 0px -18px 0 -12px var(--cy-menu-theme-active-color);\n}\n.cy-menu.cy-menu-theme-dark:not(.cy-menu-close-status) .cy-menu-menu-list .cy-menu-menu-item-box {\n  margin: 0 12px;\n  border-radius: 10px;\n}\n.cy-menu.cy-menu-theme-dark .cy-menu-menu-list[class*=cy-menu-list-child]:not(.cy-menu-list-child-0) .cy-menu-popover-template > .cy-menu-menu-item-box:not(.cy-menu-is-popover) {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-right: 26px;\n  color: var(--cy-menu-theme-text-color);\n  border-radius: 0;\n  background-color: var(--cy-menu-theme-active-color);\n}\n.cy-menu.cy-menu-theme-dark .cy-menu-menu-list[class*=cy-menu-list-child]:not(.cy-menu-list-child-0) .cy-menu-popover-template > .cy-menu-menu-item-box:not(.cy-menu-is-popover)::before {\n  content: "";\n  position: absolute;\n  left: 18px;\n  top: 50%;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background-color: var(--cy-menu-theme-text-color);\n  transform: translateY(-50%);\n}\n.cy-menu.cy-menu-theme-dark .cy-menu-menu-list[class*=cy-menu-list-child]:not(.cy-menu-list-child-0) .cy-menu-popover-template > .cy-menu-menu-item-box:not(.cy-menu-is-popover).cy-menu-open-active::before {\n  background-color: var(--cy-menu-theme-active-text-color);\n}\n.cy-menu.cy-menu-theme-dark .cy-menu-menu-list[class*=cy-menu-list-child]:not(.cy-menu-list-child-0) .cy-menu-popover-template > .cy-menu-menu-item-box:not(.cy-menu-is-popover):hover {\n  color: var(--cy-menu-theme-active-text-color);\n  background-color: var(--cy-menu-theme-active-color);\n}\n.cy-menu.cy-menu-theme-dark .cy-menu-popover-content {\n  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.2);\n}\n.cy-menu.cy-menu-theme-dark .cy-menu-popover-content .cy-menu-list-child-1 {\n  box-shadow: none;\n}\n.cy-menu.cy-menu-theme-dark .cy-menu-popover-content .cy-menu-menu-item-box.cy-menu-is-popover {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  margin: 0;\n  border-radius: 0;\n}\n\n.cy-menu {\n  --cy-menu-animate-time: 0.3s;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start;\n  height: 100%;\n  width: var(--cy-menu-width);\n  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2901960784);\n  user-select: none;\n  transition: width 0.2s ease-in-out;\n}\n.cy-menu.cy-menu-close-status {\n  width: var(--cy-menu-close-width);\n}\n.cy-menu.cy-menu-close-status .cy-menu-menu-list:not(.cy-menu-list-child-0) .cy-menu-menu-icon {\n  display: none;\n}\n.cy-menu.cy-menu-close-status > .cy-menu-list-child-0 > .cy-menu-menu-item > .cy-menu-popover-template > .cy-menu-menu-item-box .cy-menu-menu-icon {\n  display: unset;\n}\n.cy-menu.cy-menu-close-status > .cy-menu-list-child-0 > .cy-menu-menu-item > .cy-menu-popover-template > .cy-menu-menu-item-box .cy-menu-menu-text, .cy-menu.cy-menu-close-status > .cy-menu-list-child-0 > .cy-menu-menu-item > .cy-menu-popover-template > .cy-menu-menu-item-box .cy-menu-col-icon {\n  display: none;\n}\n.cy-menu.cy-menu-open-status {\n  width: var(--cy-menu-width);\n}\n.cy-menu .cy-menu-toggle-box {\n  position: absolute;\n  right: -30px;\n  width: 30px;\n  height: 30px;\n  background-color: var(--cy-menu-theme-bg-color);\n  fill: var(--cy-menu-theme-text-color);\n  cursor: pointer;\n}\n.cy-menu .cy-menu-toggle-box:hover {\n  fill: var(--cy-menu-theme-active-text-color);\n}\n.cy-menu .cy-menu-toggle-box.cy-menu-is-open {\n  transform: rotate(180deg);\n}\n.cy-menu .cy-menu-menu-list {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  flex: 1;\n  overflow: auto;\n  transition: height var(--cy-menu-animate-time) ease-in-out, padding-top var(--cy-menu-animate-time) ease-in-out, padding-bottom var(--cy-menu-animate-time) ease-in-out, max-height var(--cy-menu-animate-time) ease-in-out;\n}\n.cy-menu .cy-menu-menu-list .cy-menu-menu-item {\n  list-style: none;\n  width: 100%;\n  overflow: hidden;\n}\n.cy-menu .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box {\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 12px 24px 12px 12px;\n  font-size: 14px;\n  white-space: nowrap;\n  cursor: pointer;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  transition: background 0.2s ease-in-out, border 0.2s ease-in-out, color 0.2s ease-in-out;\n}\n.cy-menu .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box .cy-menu-menu-icon {\n  fill: var(--cy-menu-theme-text-color);\n  min-width: 22px;\n  width: 22px;\n  height: 22px;\n  padding: 0 4px;\n  margin-right: 6px;\n}\n.cy-menu .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box .cy-menu-col-icon {\n  fill: var(--cy-menu-theme-text-color);\n  position: absolute;\n  right: 4px;\n  transition: transform 0.2s linear;\n}\n.cy-menu .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box .cy-menu-col-icon.cy-menu-open-status {\n  transform: rotate(90deg);\n}\n.cy-menu .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-menu-disabled {\n  cursor: not-allowed;\n}\n.cy-menu .cy-menu-menu-list[class*=cy-menu-list-child]:not(.cy-menu-list-child-0) {\n  overflow: hidden;\n}\n.cy-menu .cy-menu-menu-list[class*=cy-menu-list-child]:not(.cy-menu-list-child-0) .cy-menu-menu-item-box {\n  font-size: 12px;\n}\n.cy-menu .cy-menu-menu-list::-webkit-scrollbar {\n  width: 4px;\n  background-color: var(--cy-menu-theme-bg-color);\n}\n.cy-menu .cy-menu-menu-list::-webkit-scrollbar-thumb {\n  border-radius: 2px;\n  background-color: #c1c1c1;\n}\n.cy-menu .cy-menu-menu-list::-webkit-scrollbar-thumb:hover {\n  background-color: #a8a8a8;\n}\n.cy-menu .cy-menu-menu-list::-webkit-scrollbar-thumb:active {\n  background-color: #787878;\n}\n.cy-menu .cy-menu-menu-list {\n  scrollbar-width: thin;\n  scrollbar-color: #c1c1c1 #eee;\n}\n\n.cy-menu-popover {\n  position: fixed;\n  left: var(--cy-menu-popover-x);\n  top: var(--cy-menu-popover-y);\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  z-index: 99;\n}\n.cy-menu-popover .cy-menu-popover-tip {\n  position: absolute;\n  left: 0;\n  top: var(--cy-menu-gap);\n  border: 10px solid transparent;\n  border-right-color: var(--cy-menu-theme-bg-color, #909090);\n  margin-left: -4px;\n}\n.cy-menu-popover .cy-menu-popover-content {\n  position: absolute;\n  left: 15px;\n  min-height: 40px;\n  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.3607843137);\n  border-radius: 2px;\n  background-color: var(--cy-menu-theme-bg-color, #909090);\n}\n.cy-menu-popover .cy-menu-popover-content .cy-menu-popover-label {\n  display: block;\n  white-space: nowrap;\n  padding: 12px;\n  font-size: 12px;\n}\n.cy-menu-popover .cy-menu-popover-content .cy-menu-menu-item-box.cy-menu-is-popover {\n  min-height: 40px;\n}\n\n.popover-enter-active,\n.popover-leave-active {\n  transition: all 0.2s;\n}\n\n.popover-enter-from,\n.popover-leave-to {\n  opacity: 0;\n}');const b=((e,n)=>{if(e.install=t=>{for(const o of[e,...Object.values(null!=n?n:{})])t.component(o.name,o)},n)for(const[t,o]of Object.entries(n))e[t]=o;return e})(g);e.Collapse=o,e.CyaneryMenu=b,e.Popover=r,e.default=b,Object.defineProperty(e,"__esModule",{value:!0})}));
