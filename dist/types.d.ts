import { PropType, VNodeChild } from 'vue';
export declare type MenuItemProps = {
    name: string;
    key: string | null;
    path: string | null;
    disabled?: boolean;
    children?: MenuItemProps[];
};
export declare const RenderProp: PropType<string | (() => VNodeChild)>;
