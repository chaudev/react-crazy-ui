"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author Nguyen Phuc Bao Chau
 *
 * @create date 2024-09-04 14:09:09
 * @modify date 2024-09-06 17:14:25
 */
var react_1 = __importDefault(require("react"));
/**
 * The CustomInput component in TypeScript React handles keyboard events for Enter and Escape keys,
 * triggers callbacks accordingly, and clears input on change.
 * @param  - The `CustomInput` component takes the following props:
 * @returns The `CustomInput` component is being returned, which is an input element with additional
 * event handlers for key down and change events. The `handleKeyDown` function checks for Enter and
 * Escape key presses and calls the corresponding callback functions `onEnter` and `onESC` if they are
 * provided. The `handleChange` function calls the `onEmpty` callback (if provided) and the `onChange`
 */
var Input = function (_a) {
    var onEnter = _a.onEnter, onESC = _a.onESC, onEmpty = _a.onEmpty, onChange = _a.onChange, rest = __rest(_a, ["onEnter", "onESC", "onEmpty", "onChange"]);
    var handleKeyDown = function (event) {
        if (event.key == "Enter" && onEnter) {
            onEnter(event);
        }
        else if (event.key == "Escape" && onESC) {
            onESC(event);
        }
    };
    var handleChange = function (event) {
        onEmpty === null || onEmpty === void 0 ? void 0 : onEmpty();
        onChange && onChange(event);
    };
    return react_1.default.createElement("input", __assign({}, rest, { onKeyDown: handleKeyDown, onChange: handleChange }));
};
exports.default = Input;
