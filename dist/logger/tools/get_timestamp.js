"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_timestamp = function () {
    return new Date().toJSON().replace('T', ' ').replace(/\.\w{4}$/, '');
};
