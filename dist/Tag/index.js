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
exports.TagPrimary = void 0;
/**
 * @author Nguyen Phuc Bao Chau
 *
 * @create date 2024-09-09 11:58:16
 * @modify date 2024-09-09 11:58:16
 */
var react_1 = __importDefault(require("react"));
var styles_module_css_1 = __importDefault(require("./styles.module.css"));
function getBackground(color) {
    switch (color) {
        case "red":
            return styles_module_css_1.default["red-tag"];
        case "green":
            return styles_module_css_1.default["green-tag"];
        case "blue":
            return styles_module_css_1.default["blue-tag"];
        case "yellow":
            return styles_module_css_1.default["yellow-tag"];
        case "black":
            return styles_module_css_1.default["black-tag"];
        case "white":
            return styles_module_css_1.default["white-tag"];
        case "dark":
            return styles_module_css_1.default["dark-tag"];
        case "turquoise":
            return styles_module_css_1.default["turquoise-tag"];
        case "teal":
            return styles_module_css_1.default["teal-tag"];
        case "deeppurple":
            return styles_module_css_1.default["deeppurple-tag"];
        case "purple":
            return styles_module_css_1.default["purple-tag"];
        case "pink":
            return styles_module_css_1.default["pink-tag"];
        case "orange":
            return styles_module_css_1.default["orange-tag"];
        default:
            return styles_module_css_1.default["blue-tag"];
    }
}
// Cấm chỉnh sửa dưới mọi hình thức
var TagPrimary = function (props) {
    var key = props.key, children = props.children, _a = props.background, background = _a === void 0 ? "blue" : _a, onClick = props.onClick, isButton = props.isButton, _b = props.style, style = _b === void 0 ? {} : _b;
    var divProps = {
        key: key || "$tag-".concat(new Date().getTime()),
        className: getBackground(background),
        style: __assign({ cursor: isButton ? "pointer" : "default" }, style),
    };
    return (react_1.default.createElement("div", __assign({}, divProps, { onClick: function () { return !!onClick && onClick(); } }), children));
};
exports.TagPrimary = TagPrimary;
exports.default = exports.TagPrimary;
