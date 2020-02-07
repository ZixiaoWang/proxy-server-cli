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
var path_1 = __importDefault(require("path"));
var commander_1 = __importDefault(require("commander"));
var colors_1 = __importDefault(require("colors"));
var lodash_1 = require("lodash");
var fs_extra_1 = __importDefault(require("fs-extra"));
var config_1 = require("../config");
var Program = /** @class */ (function () {
    function Program() {
        var _this = this;
        this.program = commander_1.default;
        this.options = {};
        this.initConfig = function () {
            _this.program
                .option('-i, --init', 'initailize the config file')
                .action(function (cmd) {
                if (cmd.init) {
                    _this.init();
                }
            });
        };
        this.setPort = function () {
            _this.program
                .option('-p, --port [serverPort]', "set port to proxy server, default is " + colors_1.default.green('8080'))
                .action(function (cmd) {
                if (cmd.port && /\d+/.test(cmd.port)) {
                    lodash_1.set(_this.options, 'port', parseInt(cmd.port));
                }
            });
        };
        this.setTarget = function () {
            _this.program
                .option('-t, --target <url>', "set target to proxy server, target is required")
                .action(function (cmd) { return lodash_1.set(_this.options, 'target', cmd.target); });
        };
        this.setConfigFilePath = function () {
            _this.program
                .option('-c, --config [filepath]', "set config file path, " + colors_1.default.green('./proxy.config.js') + " will be used by default")
                .action(function (cmd) { return lodash_1.set(_this.options, 'config', cmd.config); });
        };
        this.setPathMatch = function () {
            _this.program
                .option('-P, --path-match <paths>', 'specify path(s) to proxy, otherwise the request will be sent without proxy.\n' +
                'if there are multiple paths, use "," to separate the path.\n' +
                ("e.g. " + colors_1.default.cyan('$ start-proxy-server --path-match "/path1,/path2" --target "https://mydomain.com"')))
                .action(function (cmd) { return lodash_1.set(_this.options, 'pathMatch', cmd.pathMatch); });
        };
        this.setPort();
        this.setTarget();
        this.setConfigFilePath();
        this.setPathMatch();
        this.initConfig();
    }
    Program.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var filename, filepath, filecontent, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filename = 'proxy.config.js';
                        filepath = path_1.default.resolve('./', filename);
                        filecontent = config_1.get_config_template();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, fs_extra_1.default.outputFile(filepath, filecontent)];
                    case 2:
                        _a.sent();
                        console.log(colors_1.default.green(filename) + ' has been created');
                        return [2 /*return*/, true];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Program.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.program.parse(process.argv);
                if (process.argv.length === 2) {
                    this.program.outputHelp();
                    console.log('\n');
                    return [2 /*return*/, false];
                }
                if (this.program.init) {
                    return [2 /*return*/, false];
                }
                return [2 /*return*/, true];
            });
        });
    };
    Program.prototype.getOptions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var config_file_path, preset_options, cli_options, options, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        config_file_path = './proxy.config.js';
                        if (this.options.config && typeof this.options.config === 'string') {
                            config_file_path = this.options.config;
                        }
                        else if (this.options.config === undefined) {
                            config_file_path = undefined;
                        }
                        return [4 /*yield*/, config_1.get_config(config_file_path)];
                    case 1:
                        preset_options = _a.sent();
                        cli_options = this.options;
                        options = lodash_1.assign(preset_options, cli_options);
                        if (isNaN(options.port) === true) {
                            options.port = 8080;
                        }
                        return [2 /*return*/, options];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Program;
}());
exports.Program = Program;
