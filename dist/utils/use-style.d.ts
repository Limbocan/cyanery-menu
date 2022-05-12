declare type styleFormatProp = {
    prop: String;
    val: any;
    type?: any;
};
export declare const getStyleFormat: (style: styleFormatProp[]) => {};
export declare const getClassFomat: (cl: string | Array<string>) => string;
export interface IColorObj {
    r: number;
    g: number;
    b: number;
    a?: number;
}
export declare const toHex: (n: number) => string;
export declare const toHexString: (colorObj: IColorObj) => string;
export declare const toRgbString: (colorObj: IColorObj) => string;
export declare const toRgbaString: (colorObj: IColorObj, n?: number) => string;
export declare const parseHexColor: (color: string) => IColorObj;
export declare const parseRgbaColor: (color: string) => IColorObj;
export declare const parseColorString: (color: string) => IColorObj;
export declare const getColorInfo: (color: string) => {
    hex: string;
    rgba: string;
    rgb: string;
    rgbaObj: IColorObj;
};
export declare const hexToRgba: (hex: string) => string;
export declare const rgbaToHex: (rgba: string) => string;
export {};
