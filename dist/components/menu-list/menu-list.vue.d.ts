import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    child: {
        type: ArrayConstructor;
        default: () => any[];
    };
    deep: {
        type: PropType<number>;
        default: number;
    };
    open: {
        type: BooleanConstructor | PropType<boolean>;
        default: any;
    };
    isPopover: {
        type: BooleanConstructor | PropType<boolean>;
        default: any;
    };
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        child: {
            type: ArrayConstructor;
            default: () => any[];
        };
        deep: {
            type: PropType<number>;
            default: number;
        };
        open: {
            type: BooleanConstructor | PropType<boolean>;
            default: any;
        };
        isPopover: {
            type: BooleanConstructor | PropType<boolean>;
            default: any;
        };
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any);
    }>>;
    getClassFomat: (cl: string | string[]) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    child: {
        type: ArrayConstructor;
        default: () => any[];
    };
    deep: {
        type: PropType<number>;
        default: number;
    };
    open: {
        type: BooleanConstructor | PropType<boolean>;
        default: any;
    };
    isPopover: {
        type: BooleanConstructor | PropType<boolean>;
        default: any;
    };
}>>, {
    child: unknown[];
    deep: number;
    open: boolean;
    isPopover: boolean;
}>;
export default _default;
