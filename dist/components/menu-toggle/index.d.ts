import { PropType } from 'vue';
export declare const MenuToggleComponent: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<boolean>;
        default: boolean;
    };
    type: {
        type: PropType<string>;
        default: string;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<boolean>;
        default: boolean;
    };
    type: {
        type: PropType<string>;
        default: string;
    };
}>> & {
    [x: string & `on${string}`]: (...args: any[]) => any;
}, {
    type: string;
    modelValue: boolean;
}>;
