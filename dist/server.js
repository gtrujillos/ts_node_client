var a13_0x13ca=['log','\x20\x20App\x20is\x20running\x20at\x20http://localhost:%d\x20in\x20%s\x20mode','port','env','\x20\x20Press\x20CTRL-C\x20to\x20stop\x0a','__esModule','defineProperty','errorhandler','./services/mainService','./app','MainService','default','init','listen','get'];(function(_0x1c602d,_0x1e1cae){var _0x364440=function(_0x126337){while(--_0x126337){_0x1c602d['push'](_0x1c602d['shift']());}};_0x364440(++_0x1e1cae);}(a13_0x13ca,0x7d));var a13_0x1020=function(_0xe33c30,_0x2632af){_0xe33c30=_0xe33c30-0x0;var _0x110b29=a13_0x13ca[_0xe33c30];return _0x110b29;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x591a0b){return _0x591a0b&&_0x591a0b[a13_0x1020('0x0')]?_0x591a0b:{'default':_0x591a0b};};Object[a13_0x1020('0x1')](exports,'__esModule',{'value':!![]});const errorhandler_1=__importDefault(require(a13_0x1020('0x2')));const mainService_1=require(a13_0x1020('0x3'));const app_1=__importDefault(require(a13_0x1020('0x4')));const mainService=new mainService_1[(a13_0x1020('0x5'))](app_1[a13_0x1020('0x6')]);mainService[a13_0x1020('0x7')]();app_1[a13_0x1020('0x6')]['use'](errorhandler_1['default']());const server=app_1[a13_0x1020('0x6')][a13_0x1020('0x8')](app_1[a13_0x1020('0x6')][a13_0x1020('0x9')]('port'),()=>{console[a13_0x1020('0xa')](a13_0x1020('0xb'),app_1['default'][a13_0x1020('0x9')](a13_0x1020('0xc')),app_1['default'][a13_0x1020('0x9')](a13_0x1020('0xd')));console['log'](a13_0x1020('0xe'));});exports[a13_0x1020('0x6')]=server;