!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=require("lodash")},function(e,t){e.exports=require("colors")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.get_default_config=function(){return{ws:!1,changeOrigin:!0,target:null}}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{s(r.next(e))}catch(e){i(e)}}function a(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}s((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=i(n(16));t.get_custom_config=function(e){return r(void 0,void 0,void 0,(function(){var t,r,i;return o(this,(function(o){switch(o.label){case 0:t=e||"./proxy.config.js",r={},o.label=1;case 1:return o.trys.push([1,7,,8]),/\.js$/.test(t)?[4,n(17)(t)]:[3,3];case 2:return r=o.sent(),[3,6];case 3:return/\.json$/.test(t)?[4,u.default.readJSON(t)]:[3,5];case 4:return r=o.sent(),[3,6];case 5:throw new Error(e+" is not a valid config file, use default options instead");case 6:return[2,r];case 7:throw i=o.sent(),new Error(i);case 8:return[2]}}))}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(5),i=n(13),u=n(15),a=new i.Program,s=a.getOptions(),c=r.assign(u.get_default_config(),s);a.start(),o.start_server(c)},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{s(r.next(e))}catch(e){i(e)}}function a(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}s((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=i(n(6)),a=i(n(7)),s=i(n(8)),c=i(n(9)),f=i(n(1)),l=n(0),p=n(10),d=function(e){var t=c.default.createServer(),n=function(e,t){return r(void 0,void 0,void 0,(function(){return o(this,(function(r){return[2,new Promise((function(r,o){e.once("error",(function(r){if("EADDRINUSE"===r.code)return n(e,t+1);o(r)})),e.once("listening",(function(){e.close(),r(t)})),e.listen(t)}))]}))}))};return n(t,e)};t.start_server=function(e){return r(void 0,void 0,void 0,(function(){var t,n,r,i;return o(this,(function(o){switch(o.label){case 0:return t=l.get(e,"port")||8080,[4,d(t)];case 1:return n=o.sent(),(r=u.default()).use(s.default()),l.get(e,"target")&&(i=a.default(e),r.use(i)),r.listen(n,(function(){var e="Server is listening to "+n.toString();p.Logger.showLog(f.default.green(e))})),[2]}}))}))}},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("http-proxy-middleware")},function(e,t){e.exports=require("cors")},function(e,t){e.exports=require("net")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(11);t.Logger={showWarn:r.showWarn,showError:r.showError,showInfo:r.showInfo,showLog:r.showLog}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(1)),i=n(12);t.showLog=function(e){var t=i.get_timestamp();console.log("[LOG] "+t+" "+e)},t.showWarn=function(e){var t="["+o.default.bgYellow("WARN")+"]",n=i.get_timestamp();console.log(t+" "+n+" "+e)},t.showInfo=function(e){var t="["+o.default.cyan("INFO")+"]",n=i.get_timestamp();console.log(t+" "+n+" "+e)},t.showError=function(e){var t="["+o.default.bgRed("ERROR")+"]",n=i.get_timestamp();console.log(t+" "+n+" "+e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.get_timestamp=function(){return(new Date).toJSON().replace("T"," ").replace(/\.\w{4}$/,"")}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(14)),i=r(n(1)),u=n(0),a=function(){function e(){var e=this;this.program=o.default,this.options={},this.setPort=function(){e.program.option("-p, --port <serverPort>","set port to proxy server, default is "+i.default.green("8080")).action((function(t){return u.set(e.options,"port",parseInt(t.port)||8080)}))},this.setTarget=function(){e.program.requiredOption("-t, --target <url>","set target to proxy server "+i.default.red("required")).action((function(t){return u.set(e.options,"target",t.target)}))},this.setConfigFilePath=function(){e.program.option("-c, --config ","set config file path, proxy is disabled by default").action((function(t){return u.set(e.options,"config",t.config)}))},this.setPort(),this.setTarget(),this.setConfigFilePath(),this.start()}return e.prototype.start=function(e){this.program.parse(process.argv),e&&"function"==typeof e&&e()},e.prototype.getOptions=function(){return this.options},e}();t.Program=a},function(e,t){e.exports=require("commander")},function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n(2)),r(n(3)),r(n(18))},function(e,t){e.exports=require("fs-extra")},function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=17},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{s(r.next(e))}catch(e){i(e)}}function a(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}s((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),u=n(3),a=n(0);t.get_config=function(e){return r(void 0,void 0,void 0,(function(){var t,n,r;return o(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,u.get_custom_config(e)];case 1:return t=o.sent(),n=i.get_default_config(),[2,a.merge(n,t)];case 2:throw r=o.sent(),new Error(r);case 3:return[2]}}))}))}}]);