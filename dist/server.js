var a13_0x2dce=['__importDefault','__esModule','defineProperty','./app','MainService','init','default','use','get','port','log','\x20\x20App\x20is\x20running\x20at\x20http://localhost:%d\x20in\x20%s\x20mode','env','\x20\x20Press\x20CTRL-C\x20to\x20stop\x0a'];(function(_0x2d8f05,_0x4b81bb){var _0x4d74cb=function(_0x32719f){while(--_0x32719f){_0x2d8f05['push'](_0x2d8f05['shift']());}};_0x4d74cb(++_0x4b81bb);}(a13_0x2dce,0x1c0));var a13_0x193f=function(_0x1a756f,_0x30ec04){_0x1a756f=_0x1a756f-0x0;var _0x39f831=a13_0x2dce[_0x1a756f];return _0x39f831;};'use strict';var __importDefault=this&&this[a13_0x193f('0x0')]||function(_0xe0020f){return _0xe0020f&&_0xe0020f[a13_0x193f('0x1')]?_0xe0020f:{'default':_0xe0020f};};Object[a13_0x193f('0x2')](exports,a13_0x193f('0x1'),{'value':!![]});const errorhandler_1=__importDefault(require('errorhandler'));const mainService_1=require('./services/mainService');const app_1=__importDefault(require(a13_0x193f('0x3')));const mainService=new mainService_1[(a13_0x193f('0x4'))](app_1['default']);mainService[a13_0x193f('0x5')]();app_1[a13_0x193f('0x6')][a13_0x193f('0x7')](errorhandler_1[a13_0x193f('0x6')]());const server=app_1[a13_0x193f('0x6')]['listen'](app_1[a13_0x193f('0x6')][a13_0x193f('0x8')](a13_0x193f('0x9')),()=>{console[a13_0x193f('0xa')](a13_0x193f('0xb'),app_1[a13_0x193f('0x6')][a13_0x193f('0x8')](a13_0x193f('0x9')),app_1[a13_0x193f('0x6')][a13_0x193f('0x8')](a13_0x193f('0xc')));console[a13_0x193f('0xa')](a13_0x193f('0xd'));});exports[a13_0x193f('0x6')]=server;