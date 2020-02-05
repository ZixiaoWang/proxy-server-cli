"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = __importDefault(require("colors"));
var get_timestamp_1 = require("./tools/get_timestamp");
exports.showLog = function (arg) {
    var type = "[LOG]";
    var timestamp = get_timestamp_1.get_timestamp();
    console.log(type + " " + timestamp + " " + arg);
};
exports.showWarn = function (arg) {
    var type = "[" + colors_1.default.bgYellow('WARN') + "]";
    var timestamp = get_timestamp_1.get_timestamp();
    console.log(type + " " + timestamp + " " + arg);
};
exports.showInfo = function (arg) {
    var type = "[" + colors_1.default.cyan('INFO') + "]";
    var timestamp = get_timestamp_1.get_timestamp();
    console.log(type + " " + timestamp + " " + arg);
};
exports.showError = function (arg) {
    var type = "[" + colors_1.default.bgRed('ERROR') + "]";
    var timestamp = get_timestamp_1.get_timestamp();
    console.log(type + " " + timestamp + " " + arg);
};
