"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author Nguyen Phuc Bao Chau
 *
 * @create date 2024-09-09 09:22:54
 * @modify date 2024-09-09 11:41:18
 */
var react_1 = __importDefault(require("react"));
var styles_module_css_1 = __importDefault(require("./styles.module.css"));
var LoadingButton = function () {
    return (react_1.default.createElement("svg", { className: styles_module_css_1.default['loading'], fill: "none", viewBox: "0 0 24 24" },
        react_1.default.createElement("circle", { style: { opacity: 0.25 }, cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
        react_1.default.createElement("path", { style: { opacity: 0.75 }, fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })));
};
exports.default = LoadingButton;
