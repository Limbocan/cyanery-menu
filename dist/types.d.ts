import { PropType, VNodeChild } from 'vue';
export declare type MenuItemProps = {
    name: string;
    key: string | null;
    path: string | null;
    disabled?: boolean;
    deep?: number;
    children?: MenuItemProps[];
};
export declare const RenderProp: PropType<string | (() => VNodeChild)>;
