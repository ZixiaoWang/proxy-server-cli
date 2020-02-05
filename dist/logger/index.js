"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var console_1 = require("./console");
exports.Logger = {
    showWarn: console_1.showWarn,
    showError: console_1.showError,
    showInfo: console_1.showInfo,
    showLog: console_1.showLog
};
__export(require("./banner"));
