var a15_0x2850=['./services/mainService','MainService','default','init','port','log','\x20\x20App\x20is\x20running\x20at\x20http://localhost:%d\x20in\x20%s\x20mode','get','env','\x20\x20Press\x20CTRL-C\x20to\x20stop\x0a','__importDefault','__esModule','defineProperty','errorhandler'];(function(_0x5517a5,_0x1902fc){var _0x5c10c0=function(_0x251c55){while(--_0x251c55){_0x5517a5['push'](_0x5517a5['shift']());}};_0x5c10c0(++_0x1902fc);}(a15_0x2850,0x184));var a15_0x50b8=function(_0x778fb,_0xb3dcdb){_0x778fb=_0x778fb-0x0;var _0xce62c8=a15_0x2850[_0x778fb];return _0xce62c8;};'use strict';var __importDefault=this&&this[a15_0x50b8('0x0')]||function(_0x190e79){return _0x190e79&&_0x190e79[a15_0x50b8('0x1')]?_0x190e79:{'default':_0x190e79};};Object[a15_0x50b8('0x2')](exports,'__esModule',{'value':!![]});const errorhandler_1=__importDefault(require(a15_0x50b8('0x3')));const mainService_1=require(a15_0x50b8('0x4'));const app_1=__importDefault(require('./app'));const mainService=new mainService_1[(a15_0x50b8('0x5'))](app_1[a15_0x50b8('0x6')]);mainService[a15_0x50b8('0x7')]();app_1[a15_0x50b8('0x6')]['use'](errorhandler_1[a15_0x50b8('0x6')]());const server=app_1[a15_0x50b8('0x6')]['listen'](app_1['default']['get'](a15_0x50b8('0x8')),()=>{console[a15_0x50b8('0x9')](a15_0x50b8('0xa'),app_1[a15_0x50b8('0x6')][a15_0x50b8('0xb')](a15_0x50b8('0x8')),app_1['default'][a15_0x50b8('0xb')](a15_0x50b8('0xc')));console['log'](a15_0x50b8('0xd'));});exports[a15_0x50b8('0x6')]=server;