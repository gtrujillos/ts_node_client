var a13_0x1f64=['log','port','env','__importDefault','__esModule','defineProperty','errorhandler','./services/mainService','./app','MainService','default','use','get'];(function(_0x5aeba1,_0x108c3e){var _0x34b6a1=function(_0x486f53){while(--_0x486f53){_0x5aeba1['push'](_0x5aeba1['shift']());}};_0x34b6a1(++_0x108c3e);}(a13_0x1f64,0xed));var a13_0x31b9=function(_0x21ddf6,_0x16ec1d){_0x21ddf6=_0x21ddf6-0x0;var _0x391436=a13_0x1f64[_0x21ddf6];return _0x391436;};'use strict';var __importDefault=this&&this[a13_0x31b9('0x0')]||function(_0x5aaa43){return _0x5aaa43&&_0x5aaa43[a13_0x31b9('0x1')]?_0x5aaa43:{'default':_0x5aaa43};};Object[a13_0x31b9('0x2')](exports,a13_0x31b9('0x1'),{'value':!![]});const errorhandler_1=__importDefault(require(a13_0x31b9('0x3')));const mainService_1=require(a13_0x31b9('0x4'));const app_1=__importDefault(require(a13_0x31b9('0x5')));const mainService=new mainService_1[(a13_0x31b9('0x6'))](app_1['default']);mainService['init']();app_1[a13_0x31b9('0x7')][a13_0x31b9('0x8')](errorhandler_1['default']());const server=app_1['default']['listen'](app_1[a13_0x31b9('0x7')][a13_0x31b9('0x9')]('port'),()=>{console[a13_0x31b9('0xa')]('\x20\x20App\x20is\x20running\x20at\x20http://localhost:%d\x20in\x20%s\x20mode',app_1[a13_0x31b9('0x7')]['get'](a13_0x31b9('0xb')),app_1[a13_0x31b9('0x7')][a13_0x31b9('0x9')](a13_0x31b9('0xc')));console[a13_0x31b9('0xa')]('\x20\x20Press\x20CTRL-C\x20to\x20stop\x0a');});exports[a13_0x31b9('0x7')]=server;