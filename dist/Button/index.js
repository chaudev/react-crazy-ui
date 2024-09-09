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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author Nguyen Phuc Bao Chau
 *
 * @create date 2024-09-06 17:50:51
 * @modify date 2024-09-09 11:41:07
 */
var react_1 = __importDefault(require("react"));
var utils_1 = require("./utils");
var loading_1 = __importDefault(require("./loading"));
var styles_module_css_1 = __importDefault(require("./styles.module.css"));
var rootClass = styles_module_css_1.default["crazy-button"];
var Button = function (props) {
    var className = props.className, children = props.children, _a = props.type, type = _a === void 0 ? "button" : _a, style = props.style, _b = props.hover, hover = _b === void 0 ? "opacity" : _b, customIcon = props.customIcon, _c = props.hideTitleOnMobile, hideTitleOnMobile = _c === void 0 ? false : _c;
    var _d = props.background, background = _d === void 0 ? "blue" : _d, icon = props.icon, _e = props.loading, loading = _e === void 0 ? false : _e, _f = props.disabled, disabled = _f === void 0 ? false : _f, onClick = props.onClick, _g = props.hideIcon, hideIcon = _g === void 0 ? false : _g, iconSize = props.iconSize;
    var customClass = "".concat((0, utils_1.getHover)(hover), " ").concat((0, utils_1.getBackground)(background));
    var crazyProps = __assign(__assign({}, props), { type: type, className: "".concat(rootClass, " ").concat(customClass, " ").concat(disabled ? styles_module_css_1.default["opa-50"] : "", " ").concat(className || ""), style: style || {}, disabled: loading || disabled, onClick: !loading && !disabled ? onClick : function () { } });
    return (react_1.default.createElement("button", __assign({}, crazyProps),
        loading && react_1.default.createElement(loading_1.default, null),
        !loading && !hideIcon && react_1.default.createElement(react_1.default.Fragment, null, (0, utils_1.getIcon)(icon, customIcon, iconSize)),
        !hideTitleOnMobile ? (children) : (react_1.default.createElement("div", { className: styles_module_css_1.default["desktop"] }, children))));
};
exports.default = Button;
