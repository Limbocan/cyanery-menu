import type { MenuItemProps } from '../../types';
export declare const Menu: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor | import("vue").PropType<string>;
        default: any;
    };
    data: {
        type: import("vue").PropType<MenuItemProps[]>;
        default: () => any[];
    };
    className: {
        type: import("vue").PropType<string>;
        default: string;
    };
    width: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
    open: {
        type: BooleanConstructor | import("vue").PropType<boolean>;
        default: any;
    };
    toggleButton: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    unique: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    trigger: {
        type: import("vue").PropType<string>;
        default: string;
    };
    beforeRouter: {
        type: import("vue").PropType<Function>;
        default: any;
    };
    showIcon: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    closeWidth: {
        type: import("vue").PropType<string>;
        default: string;
    };
    offset: {
        type: import("vue").PropType<number>;
        default: number;
    };
    alwaysPopover: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    arrowType: {
        type: import("vue").PropType<string>;
        default: string;
    };
    theme: {
        type: import("vue").PropType<string>;
        default: string;
    };
    backgroundColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    activeColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    textColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    activeTextCorlor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    headerRender: import("vue").PropType<string | (() => import("vue").VNodeChild)>;
    footerRender: import("vue").PropType<string | (() => import("vue").VNodeChild)>;
    itemRender: import("vue").PropType<string | (() => import("vue").VNodeChild)>;
    iconRender: import("vue").PropType<string | (() => import("vue").VNodeChild)>;
}, {
    ContentRef: any;
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: StringConstructor | import("vue").PropType<string>;
            default: any;
        };
        data: {
            type: import("vue").PropType<MenuItemProps[]>;
            default: () => any[];
        };
        className: {
            type: import("vue").PropType<string>;
            default: string;
        };
        width: {
            type: import("vue").PropType<string | number>;
            default: string;
        };
        open: {
            type: BooleanConstructor | import("vue").PropType<boolean>;
            default: any;
        };
        toggleButton: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        unique: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        trigger: {
            type: import("vue").PropType<string>;
            default: string;
        };
        beforeRouter: {
            type: import("vue").PropType<Function>;
            default: any;
        };
        showIcon: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        closeWidth: {
            type: import("vue").PropType<string>;
            default: string;
        };
        offset: {
            type: import("vue").PropType<number>;
            default: number;
        };
        alwaysPopover: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        arrowType: {
            type: import("vue").PropType<string>;
            default: string;
        };
        theme: {
            type: import("vue").PropType<string>;
            default: string;
        };
        backgroundColor: {
            type: import("vue").PropType<string>;
            default: string;
        };
        activeColor: {
            type: import("vue").PropType<string>;
            default: string;
        };
        textColor: {
            type: import("vue").PropType<string>;
            default: string;
        };
        activeTextCorlor: {
            type: import("vue").PropType<string>;
            default: string;
        };
        headerRender: import("vue").PropType<string | (() => import("vue").VNodeChild)>;
        footerRender: import("vue").PropType<string | (() => import("vue").VNodeChild)>;
        itemRender: import("vue").PropType<string | (() => import("vue").VNodeChild)>;
        iconRender: import("vue").PropType<string | (() => import("vue").VNodeChild)>;
    }>> & {
        [x: string & `on${string}`]: (...args: any[]) => any;
    }>>;
    globalState: {
        state: any;
        setMenuProps: (props: any) => void;
        setMenuEmit: (emit: any) => void;
        menuEmitsMethod: (name: any, value: any) => void;
        saveMenus: (menus: any) => void;
        pushActiveMenu: (key: any, isOpen?: boolean) => void;
        getActiveMenus: (key: any, menus: any, deep?: number, result?: any[]) => any[];
        setActiveOpen: (menus: any, openKeys: any, isOpen: any) => void;
        findMenuItem: (menus: any, key: any) => any;
        pushMenu: (menu: any) => void;
        remove: (menu: any) => void;
        closeAllMenu: () => void;
    };
    styleVar: import("vue").ComputedRef<{}>;
    childDomList: import("vue").ComputedRef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor | import("vue").PropType<string>;
        default: any;
    };
    data: {
        type: import("vue").PropType<MenuItemProps[]>;
        default: () => any[];
    };
    className: {
        type: import("vue").PropType<string>;
        default: string;
    };
    width: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
    open: {
        type: BooleanConstructor | import("vue").PropType<boolean>;
        default: any;
    };
    toggleButton: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    unique: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    trigger: {
        type: import("vue").PropType<string>;
        default: string;
    };
    beforeRouter: {
        type: import("vue").PropType<Function>;
        default: any;
    };
    showIcon: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    closeWidth: {
        type: import("vue").PropType<string>;
        default: string;
    };
    offset: {
        type: import("vue").PropType<number>;
        default: number;
    };
    alwaysPopover: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    arrowType: {
        type: import("vue").PropType<string>;
        default: string;
    };
    theme: {
        type: import("vue").PropType<string>;
        default: string;
    };
    backgroundColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    activeColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    textColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    activeTextCorlor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    headerRender: import("vue").PropType<string | (() => import("vue").VNodeChild)>;
    footerRender: import("vue").PropType<string | (() => import("vue").VNodeChild)>;
    itemRender: import("vue").PropType<string | (() => import("vue").VNodeChild)>;
    iconRender: import("vue").PropType<string | (() => import("vue").VNodeChild)>;
}>> & {
    [x: string & `on${string}`]: (...args: any[]) => any;
}, {
    data: MenuItemProps[];
    modelValue: string;
    className: string;
    width: string | number;
    open: boolean;
    toggleButton: boolean;
    unique: boolean;
    trigger: string;
    beforeRouter: Function;
    showIcon: boolean;
    closeWidth: string;
    offset: number;
    alwaysPopover: boolean;
    arrowType: string;
    theme: string;
    backgroundColor: string;
    activeColor: string;
    textColor: string;
    activeTextCorlor: string;
}>;
export default Menu;
