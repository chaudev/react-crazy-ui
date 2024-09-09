"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author Nguyen Phuc Bao Chau
 *
 * @create date 2024-09-06 10:32:54
 * @modify date 2024-09-06 17:13:14
 */
var react_1 = __importDefault(require("react"));
var List = function (_a) {
    var data = _a.data, keyExtractor = _a.keyExtractor, RenderItem = _a.RenderItem, EmptyComponent = _a.EmptyComponent;
    if (!data || !Array.isArray(data) || (data === null || data === void 0 ? void 0 : data.length) == 0) {
        return EmptyComponent ? react_1.default.createElement(EmptyComponent, null) : react_1.default.createElement(react_1.default.Fragment, null);
    }
    return (react_1.default.createElement(react_1.default.Fragment, null, data.map(function (item, index) { return (react_1.default.createElement(RenderItem, { key: keyExtractor ? keyExtractor(item, index) : "LIST-CRAZY-".concat(index), item: item, index: index })); })));
};
exports.default = List;
