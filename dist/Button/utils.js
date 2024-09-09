"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBackground = exports.getIcon = exports.getHover = void 0;
/**
 * @author Nguyen Phuc Bao Chau
 *
 * @create date 2024-09-09 09:26:06
 * @modify date 2024-09-09 11:44:12
 */
var styles_module_css_1 = __importDefault(require("./styles.module.css"));
var Icon_1 = require("./Icon");
var react_1 = __importDefault(require("react"));
function getHover(hover) {
    switch (hover) {
        case "opacity":
            return styles_module_css_1.default["hover-opacity"];
        case "scale-out":
            return styles_module_css_1.default["hover-scale-out"];
        case "scale-in":
            return styles_module_css_1.default["hover-scale-in"];
        default:
            return styles_module_css_1.default["hover-opacity"];
    }
}
exports.getHover = getHover;
function getBackground(background) {
    switch (background) {
        case "red":
            return styles_module_css_1.default["btn-delete"];
        case "green":
            return styles_module_css_1.default["btn-create"];
        case "blue":
            return styles_module_css_1.default["btn-save"];
        case "light-blue":
            return styles_module_css_1.default["btn-edit"];
        case "orange":
            return styles_module_css_1.default["btn-export"];
        case "yellow":
            return styles_module_css_1.default["btn-warning"];
        case "purple":
            return styles_module_css_1.default["btn-purple"];
        case "transparent":
            return styles_module_css_1.default["btn-transparent"];
        default:
            return "";
    }
}
exports.getBackground = getBackground;
function getIcon(icon, customIcon, iconSize) {
    // Trường hợp nó truyền 1 cái custom icon từ ngoài vào
    if (customIcon) {
        return customIcon;
    }
    if (!icon) {
        return "";
    }
    // Các icon setup sẵn
    switch (icon) {
        case "create":
            return react_1.default.createElement(Icon_1.IconCreate, { size: iconSize || 16 });
        case "save":
            return react_1.default.createElement(Icon_1.IconSave, { size: iconSize || 18 });
        case "edit":
            return react_1.default.createElement(Icon_1.IconEdit, { size: iconSize || 18 });
        case "delete":
            return react_1.default.createElement(Icon_1.IconTrash, { size: iconSize || 15 });
        case "import":
            return react_1.default.createElement(Icon_1.IconImport, { size: iconSize || 18 });
        case "export":
            return react_1.default.createElement(Icon_1.IconExcel, { size: iconSize || 18 });
        case "notification":
            return react_1.default.createElement(Icon_1.IconNotifications, { size: iconSize || 18 });
        case "close":
            return react_1.default.createElement(Icon_1.IconClose, { size: iconSize || 18 });
        case "download":
            return react_1.default.createElement(Icon_1.IconDownload, { size: iconSize || 18 });
        case "drop-down":
            return react_1.default.createElement(Icon_1.IconArrowSortedDown, { size: iconSize || 18 });
        case "send":
            return react_1.default.createElement(Icon_1.IconBcSend, { size: iconSize || 18 });
        default:
            return null;
    }
}
exports.getIcon = getIcon;
