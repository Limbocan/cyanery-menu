export declare enum componentConfig {
    mainClass = "cy-menu",
    stylePrefix = "--cy-menu-",
    classPrefix = "cy-menu-"
}
export declare const themeConfig: {
    normal: {
        closeWidth: string;
        backgroundColor: string;
        activeColor: string;
        textColor: string;
        activeTextCorlor: string;
    };
    primary: {
        closeWidth: string;
        backgroundColor: string;
        activeColor: string;
        textColor: string;
        activeTextCorlor: string;
    };
    dark: {
        closeWidth: string;
        backgroundColor: string;
        activeColor: string;
        textColor: string;
        activeTextCorlor: string;
    };
};
declare type styleFormatProp = {
    prop: String;
    val: any;
    type?: any;
};
export declare const getStyleFormat: (style: styleFormatProp[]) => {};
export declare const getClassFomat: (cl: string | Array<string>) => string;
export {};
