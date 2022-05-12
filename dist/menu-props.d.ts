import { PropType } from 'vue';
import type { MenuItemProps } from './types';
export declare const MenuProps: {
    data: {
        type: PropType<MenuItemProps[]>;
        default: () => any[];
    };
    className: {
        type: PropType<string>;
        default: string;
    };
    width: {
        type: PropType<string | number>;
        default: string;
    };
    open: {
        type: BooleanConstructor | PropType<boolean>;
        default: any;
    };
    toggleButton: {
        type: PropType<boolean>;
        default: boolean;
    };
    backgroundColor: {
        type: PropType<string>;
        default: string;
    };
    activeColor: {
        type: PropType<string>;
        default: string;
    };
    textColor: {
        type: PropType<string>;
        default: string;
    };
    headerRender: PropType<string | (() => import("vue").VNodeChild)>;
    footerRender: PropType<string | (() => import("vue").VNodeChild)>;
    itemRender: PropType<string | (() => import("vue").VNodeChild)>;
    iconRender: PropType<string | (() => import("vue").VNodeChild)>;
};
export declare const MenuEmits: string[];
declare class GlobalState {
    state: any;
    constructor();
    setMenuProps(props: any): void;
    setMenuEmit(emit: any): void;
    menuEmitsMethod(name: any, value: any): void;
    getMenu(): any;
    pushMenu(menu: any): void;
    remove(menu: any): void;
}
export declare const globalState: GlobalState;
export {};
