"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_proxy_middleware_1 = __importDefault(require("http-proxy-middleware"));
var cors_1 = __importDefault(require("cors"));
var net_1 = __importDefault(require("net"));
var colors_1 = __importDefault(require("colors"));
var lodash_1 = require("lodash");
var logger_1 = require("../logger");
var get_available_port = function (port) {
    var server = net_1.default.createServer();
    var listenToPort = function (server, port) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    server.once('error', function (err) {
                        if (err.code === 'EADDRINUSE') {
                            return listenToPort(server, port + 1);
                        }
                        else {
                            reject(err);
                        }
                    });
                    server.once('listening', function () {
                        server.close();
                        resolve(port);
                    });
                    server.listen(port);
                })];
        });
    }); };
    return listenToPort(server, port);
};
exports.start_server = function (options) { return __awaiter(void 0, void 0, void 0, function () {
    var default_port, port, app, proxyPathsMatch, proxyMiddleWare;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                default_port = lodash_1.get(options, 'port') || 8080;
                return [4 /*yield*/, get_available_port(default_port)];
            case 1:
                port = _a.sent();
                app = express_1.default();
                app.use(cors_1.default());
                if (lodash_1.get(options, 'target')) {
                    proxyPathsMatch = lodash_1.get(options, 'pathMatch', '/').split(/,\s?/).filter(function (path) { return !!path; });
                    proxyMiddleWare = http_proxy_middleware_1.default(proxyPathsMatch, options);
                    app.use(proxyMiddleWare);
                }
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var server = app.listen(port, function (err) {
                            if (err) {
                                reject(err);
                            }
                            var message = "Server is listening to " + port.toString();
                            logger_1.Logger.showLog(colors_1.default.green(message));
                            resolve(server);
                        });
                    })];
        }
    });
}); };
