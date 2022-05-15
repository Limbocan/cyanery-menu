export declare const Menu: import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<string>;
        default: string;
    };
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
    unique: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    trigger: {
        type: import("vue").PropType<string>;
        default: string;
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
    headerRender: import("vue").PropType<string | (() => import("vue").VNodeChild)>;
    footerRender: import("vue").PropType<string | (() => import("vue").VNodeChild)>;
    itemRender: import("vue").PropType<string | (() => import("vue").VNodeChild)>;
    iconRender: import("vue").PropType<string | (() => import("vue").VNodeChild)>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<string>;
        default: string;
    };
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
    unique: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    trigger: {
        type: import("vue").PropType<string>;
        default: string;
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
    headerRender: import("vue").PropType<string | (() => import("vue").VNodeChild)>;
    footerRender: import("vue").PropType<string | (() => import("vue").VNodeChild)>;
    itemRender: import("vue").PropType<string | (() => import("vue").VNodeChild)>;
    iconRender: import("vue").PropType<string | (() => import("vue").VNodeChild)>;
}>> & {
    [x: string & `on${string}`]: (...args: any[]) => any;
}, {
    data: import("../../types").MenuItemProps[];
    modelValue: string;
    className: string;
    width: string | number;
    open: boolean;
    toggleButton: boolean;
    unique: boolean;
    trigger: string;
    showIcon: boolean;
    closeWidth: string;
    offset: number;
    theme: string;
    backgroundColor: string;
    activeColor: string;
    textColor: string;
}>;
export default Menu;
