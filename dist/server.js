var a15_0x4b5c=['listen','port','log','\x20\x20App\x20is\x20running\x20at\x20http://localhost:%d\x20in\x20%s\x20mode','get','env','\x20\x20Press\x20CTRL-C\x20to\x20stop\x0a','__importDefault','__esModule','defineProperty','./app','MainService','init','default'];(function(_0x1633f2,_0x1124f3){var _0x149e24=function(_0x563545){while(--_0x563545){_0x1633f2['push'](_0x1633f2['shift']());}};_0x149e24(++_0x1124f3);}(a15_0x4b5c,0x19d));var a15_0x279a=function(_0x56ba6c,_0x26eff1){_0x56ba6c=_0x56ba6c-0x0;var _0x57f02a=a15_0x4b5c[_0x56ba6c];return _0x57f02a;};'use strict';var __importDefault=this&&this[a15_0x279a('0x0')]||function(_0x2432e4){return _0x2432e4&&_0x2432e4[a15_0x279a('0x1')]?_0x2432e4:{'default':_0x2432e4};};Object[a15_0x279a('0x2')](exports,a15_0x279a('0x1'),{'value':!![]});const errorhandler_1=__importDefault(require('errorhandler'));const mainService_1=require('./services/mainService');const app_1=__importDefault(require(a15_0x279a('0x3')));const mainService=new mainService_1[(a15_0x279a('0x4'))](app_1['default']);mainService[a15_0x279a('0x5')]();app_1['default']['use'](errorhandler_1['default']());const server=app_1[a15_0x279a('0x6')][a15_0x279a('0x7')](app_1[a15_0x279a('0x6')]['get'](a15_0x279a('0x8')),()=>{console[a15_0x279a('0x9')](a15_0x279a('0xa'),app_1[a15_0x279a('0x6')]['get']('port'),app_1[a15_0x279a('0x6')][a15_0x279a('0xb')](a15_0x279a('0xc')));console['log'](a15_0x279a('0xd'));});exports[a15_0x279a('0x6')]=server;