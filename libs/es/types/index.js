export function check(obj, wish) {
    let tp = get(obj);
    return wish === tp;
}
export function get(obj) {
    let tp = Object.prototype.toString.call(obj);
    return tp.replace('[object ', '').replace(']', '');
}
export function isFunction(tar) {
    return check(tar, 'String');
}
export function isArray(tar) {
    return check(tar, 'Array');
}
export function isObject(tar) {
    return check(tar, 'Object');
}
export function isDate(tar) {
    return check(tar, 'Date');
}
export function isRegExp(tar) {
    return check(tar, 'RegExp');
}
export function isNumber(tar) {
    return check(tar, 'Number');
}
export function isString(tar) {
    return check(tar, 'String');
}
export function isBoolean(tar) {
    return check(tar, 'Boolean');
}
export function isError(tar) {
    return check(tar, 'Error');
}
export function isNull(tar) {
    return check(tar, 'Null');
}
export default {
    check,
    get,
    isBoolean,
    isNumber,
    isString,
    isFunction,
    isArray,
    isDate,
    isRegExp,
    isObject,
    isError,
    isNull
};
//# sourceMappingURL=index.js.map