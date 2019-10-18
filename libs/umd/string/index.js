/**
 * String module.
 * @module zaxString
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/string
 * @see striptags https://github.com/ericnorris/striptags
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../types/index", "striptags"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var index_1 = require("../types/index");
    exports.isString = index_1.isString;
    var striptags_1 = __importDefault(require("striptags"));
    exports.striptags = striptags_1.default;
    var SpecialChar = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '|', ':', '<', '>', '?', '-', '=', '[', ']', ';', "'", ',', '.', '/', "\"", '`', ' '];
    /**
     * ellipsis string.
     *
     * ```js
     * ellipsis("qwertyuiop", 5, '*', 3);
     * //=> qwert***
     * ```
     *
     * @param str {String} target
     * @param limit {Number} limit
     * @param tail {SpecialCharType} tail
     * @param tailLength {Number} tail length
     * @readonly {MixArray | void}
     */
    var ellipsis = function (str, limit, tail, tailLength) {
        if (limit === void 0) { limit = 10; }
        if (tail === void 0) { tail = '.'; }
        if (tailLength === void 0) { tailLength = 3; }
        if (!str) {
            return '';
        }
        str = striptags_1.default(str);
        if (str.length <= limit) {
            return str;
        }
        return striptags_1.default(str).substr(0, limit) + tail.repeat(tailLength);
    };
    exports.ellipsis = ellipsis;
    /* istanbul ignore next */
    var expData = {
        isString: index_1.isString,
        ellipsis: ellipsis,
        striptags: striptags_1.default
    };
    exports.default = expData;
});
//# sourceMappingURL=index.js.map