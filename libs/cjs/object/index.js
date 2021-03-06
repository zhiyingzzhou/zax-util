"use strict";
/**
 * Object module.
 * @module zaxObject
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/object
 */
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../types/index");
exports.isObject = index_1.isObject;
/**
 * has diff between objects.
 *
 * @example
 * ```js
 * hasDiff({ k: 1, v: 3 }, { k: 1, v: 3 })
 * //=> false
 * ```
 *
 * @see https://github.com/tkh44/shallow-compare/blob/master/src/index.js
 * @param a {Object} target a
 * @param b {Object} target b
 * @returns {Boolean} result
 */
var hasDiff = function (a, b) {
    if (Array.isArray(a) || Array.isArray(b)) {
        throw new TypeError('diff object must be object type!');
    }
    for (var i in a)
        if (!(i in b))
            return true;
    for (var i in b)
        if (a[i] !== b[i])
            return true;
    return false;
};
exports.hasDiff = hasDiff;
/* istanbul ignore next */
/**
 * shallow compare react props & states.
 *
 * @example
 * ```js
 * shallowCompare(this,this.props,nextProps)
 * //=> true
 * ```
 *
 * @see https://github.com/tkh44/shallow-compare/blob/master/src/index.js
 * @param instance {Object} react this
 * @param nextProps {Object} nextProps
 * @param nextState {Object} nextState
 * @returns {Boolean} result
 */
var shallowCompare = function (instance, nextProps, nextState) {
    return hasDiff(instance.props, nextProps) || hasDiff(instance.state, nextState);
};
exports.shallowCompare = shallowCompare;
/* istanbul ignore next */
var expData = {
    hasDiff: hasDiff,
    shallowCompare: shallowCompare,
    isObject: index_1.isObject
};
exports.default = expData;
//# sourceMappingURL=index.js.map