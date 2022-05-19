import { PropType } from 'vue';
import type { MenuItemProps } from '../../types';
export declare const MenuListComponent: import("vue").DefineComponent<{
    menuList: {
        type: PropType<MenuItemProps[]>;
        default: () => any[];
    };
    deep: {
        type: PropType<number>;
        default: number;
    };
    itemSlot: {};
    iconSlot: {};
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    menuList: {
        type: PropType<MenuItemProps[]>;
        default: () => any[];
    };
    deep: {
        type: PropType<number>;
        default: number;
    };
    itemSlot: {};
    iconSlot: {};
}>>, {
    deep: number;
    menuList: MenuItemProps[];
}>;
