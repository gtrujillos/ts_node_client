var a15_0x3c22=['defineProperty','errorhandler','./services/mainService','MainService','init','use','default','get','log','\x20\x20App\x20is\x20running\x20at\x20http://localhost:%d\x20in\x20%s\x20mode','port','env','\x20\x20Press\x20CTRL-C\x20to\x20stop\x0a','__importDefault','__esModule'];(function(_0x3b82ed,_0x4ca3ba){var _0x126058=function(_0x46ae59){while(--_0x46ae59){_0x3b82ed['push'](_0x3b82ed['shift']());}};_0x126058(++_0x4ca3ba);}(a15_0x3c22,0x67));var a15_0x3ca3=function(_0x2d8f05,_0x4b81bb){_0x2d8f05=_0x2d8f05-0x0;var _0x4d74cb=a15_0x3c22[_0x2d8f05];return _0x4d74cb;};'use strict';var __importDefault=this&&this[a15_0x3ca3('0x0')]||function(_0x5d58fe){return _0x5d58fe&&_0x5d58fe[a15_0x3ca3('0x1')]?_0x5d58fe:{'default':_0x5d58fe};};Object[a15_0x3ca3('0x2')](exports,'__esModule',{'value':!![]});const errorhandler_1=__importDefault(require(a15_0x3ca3('0x3')));const mainService_1=require(a15_0x3ca3('0x4'));const app_1=__importDefault(require('./app'));const mainService=new mainService_1[(a15_0x3ca3('0x5'))](app_1['default']);mainService[a15_0x3ca3('0x6')]();app_1['default'][a15_0x3ca3('0x7')](errorhandler_1['default']());const server=app_1[a15_0x3ca3('0x8')]['listen'](app_1[a15_0x3ca3('0x8')][a15_0x3ca3('0x9')]('port'),()=>{console[a15_0x3ca3('0xa')](a15_0x3ca3('0xb'),app_1[a15_0x3ca3('0x8')][a15_0x3ca3('0x9')](a15_0x3ca3('0xc')),app_1[a15_0x3ca3('0x8')][a15_0x3ca3('0x9')](a15_0x3ca3('0xd')));console[a15_0x3ca3('0xa')](a15_0x3ca3('0xe'));});exports[a15_0x3ca3('0x8')]=server;