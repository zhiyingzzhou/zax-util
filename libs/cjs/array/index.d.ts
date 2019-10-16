import { isArray } from '../types/index';
declare type TypeObject = {
    [key: string]: any;
};
declare type TypeArray = string[] | number[];
declare type ObjectArray = TypeObject[];
declare type MixArray = TypeArray | ObjectArray;
export declare type TypeOrderBy = 'ASC' | 'DESC';
export declare function sort(arr: MixArray, orderBy?: TypeOrderBy, key?: string): MixArray | void;
export declare function unique(arr: MixArray, key?: string): MixArray | void;
export declare function union(...arr: TypeArray[]): TypeArray;
export declare function diff(...arr: TypeArray[]): TypeArray;
declare const _default: {
    isArray: typeof isArray;
    sort: typeof sort;
    unique: typeof unique;
    union: typeof union;
    diff: typeof diff;
};
export default _default;
