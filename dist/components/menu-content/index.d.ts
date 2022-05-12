export declare const Menu: import("vue").DefineComponent<{
    data: {
        type: import("vue").PropType<import("../../types").MenuItemProps[]>;
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
    headerRender: import("vue").PropType<string | (() => import("vue").VNodeChild)>;
    footerRender: import("vue").PropType<string | (() => import("vue").VNodeChild)>;
    itemRender: import("vue").PropType<string | (() => import("vue").VNodeChild)>;
    iconRender: import("vue").PropType<string | (() => import("vue").VNodeChild)>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: import("vue").PropType<import("../../types").MenuItemProps[]>;
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
    headerRender: import("vue").PropType<string | (() => import("vue").VNodeChild)>;
    footerRender: import("vue").PropType<string | (() => import("vue").VNodeChild)>;
    itemRender: import("vue").PropType<string | (() => import("vue").VNodeChild)>;
    iconRender: import("vue").PropType<string | (() => import("vue").VNodeChild)>;
}>> & {
    [x: string & `on${string}`]: (...args: any[]) => any;
}, {
    data: import("../../types").MenuItemProps[];
    className: string;
    width: string | number;
    open: boolean;
    toggleButton: boolean;
    backgroundColor: string;
    activeColor: string;
    textColor: string;
}>;
export default Menu;
