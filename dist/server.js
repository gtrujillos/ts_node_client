var a15_0x314e=['use','port','\x20\x20App\x20is\x20running\x20at\x20http://localhost:%d\x20in\x20%s\x20mode','get','env','log','__esModule','defineProperty','errorhandler','./app','MainService','default','init'];(function(_0xf842b4,_0xe2e18e){var _0x417718=function(_0x1569d7){while(--_0x1569d7){_0xf842b4['push'](_0xf842b4['shift']());}};_0x417718(++_0xe2e18e);}(a15_0x314e,0x1c0));var a15_0xb708=function(_0x6a15c2,_0x5f1177){_0x6a15c2=_0x6a15c2-0x0;var _0x2d2a3a=a15_0x314e[_0x6a15c2];return _0x2d2a3a;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x3ebae6){return _0x3ebae6&&_0x3ebae6[a15_0xb708('0x0')]?_0x3ebae6:{'default':_0x3ebae6};};Object[a15_0xb708('0x1')](exports,a15_0xb708('0x0'),{'value':!![]});const errorhandler_1=__importDefault(require(a15_0xb708('0x2')));const mainService_1=require('./services/mainService');const app_1=__importDefault(require(a15_0xb708('0x3')));const mainService=new mainService_1[(a15_0xb708('0x4'))](app_1[a15_0xb708('0x5')]);mainService[a15_0xb708('0x6')]();app_1[a15_0xb708('0x5')][a15_0xb708('0x7')](errorhandler_1['default']());const server=app_1[a15_0xb708('0x5')]['listen'](app_1[a15_0xb708('0x5')]['get'](a15_0xb708('0x8')),()=>{console['log'](a15_0xb708('0x9'),app_1[a15_0xb708('0x5')][a15_0xb708('0xa')]('port'),app_1['default'][a15_0xb708('0xa')](a15_0xb708('0xb')));console[a15_0xb708('0xc')]('\x20\x20Press\x20CTRL-C\x20to\x20stop\x0a');});exports[a15_0xb708('0x5')]=server;