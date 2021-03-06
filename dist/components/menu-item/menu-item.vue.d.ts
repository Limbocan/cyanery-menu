import { PropType } from 'vue';
import type { MenuItemProps } from '../../types';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<MenuItemProps>;
        default: string;
    };
    deep: {
        type: PropType<number>;
        default: number;
    };
    isPopover: {
        type: BooleanConstructor | PropType<boolean>;
        default: any;
    };
    itemSlot: {};
    iconSlot: {};
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<MenuItemProps>;
        default: string;
    };
    deep: {
        type: PropType<number>;
        default: number;
    };
    isPopover: {
        type: BooleanConstructor | PropType<boolean>;
        default: any;
    };
    itemSlot: {};
    iconSlot: {};
}>>, {
    data: MenuItemProps;
    deep: number;
    isPopover: boolean;
}>;
export default _default;
