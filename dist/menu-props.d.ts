import { PropType } from 'vue';
import type { MenuItemProps } from './types';
export declare const MenuProps: {
    modelValue: {
        type: PropType<string> | StringConstructor;
        default: any;
    };
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
    unique: {
        type: PropType<boolean>;
        default: boolean;
    };
    trigger: {
        type: PropType<string>;
        default: string;
    };
    showIcon: {
        type: PropType<boolean>;
        default: boolean;
    };
    closeWidth: {
        type: PropType<string>;
        default: string;
    };
    offset: {
        type: PropType<number>;
        default: number;
    };
    theme: {
        type: PropType<string>;
        default: string;
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
    saveMenus(menus: any): void;
    pushActiveMenu(key: any, watch?: boolean): void;
    getActiveMenus(key: any, menus: any, deep?: number, result?: any[]): any[];
    setActiveOpen(menus: any, openKeys: any): void;
    findMenuItem(menus: any, key: any): any;
    pushMenu(menu: any): void;
    remove(menu: any): void;
    closeAllMenu(): void;
}
export declare const globalState: GlobalState;
export {};
