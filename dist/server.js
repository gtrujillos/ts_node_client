var a15_0x4dcc=['./app','default','init','use','listen','log','\x20\x20App\x20is\x20running\x20at\x20http://localhost:%d\x20in\x20%s\x20mode','get','env','\x20\x20Press\x20CTRL-C\x20to\x20stop\x0a','__importDefault','__esModule','defineProperty','errorhandler'];(function(_0x2699a9,_0x501e82){var _0x5b6c40=function(_0xa3de42){while(--_0xa3de42){_0x2699a9['push'](_0x2699a9['shift']());}};_0x5b6c40(++_0x501e82);}(a15_0x4dcc,0x122));var a15_0x319e=function(_0x238869,_0x599330){_0x238869=_0x238869-0x0;var _0x172340=a15_0x4dcc[_0x238869];return _0x172340;};'use strict';var __importDefault=this&&this[a15_0x319e('0x0')]||function(_0x50bfda){return _0x50bfda&&_0x50bfda[a15_0x319e('0x1')]?_0x50bfda:{'default':_0x50bfda};};Object[a15_0x319e('0x2')](exports,a15_0x319e('0x1'),{'value':!![]});const errorhandler_1=__importDefault(require(a15_0x319e('0x3')));const mainService_1=require('./services/mainService');const app_1=__importDefault(require(a15_0x319e('0x4')));const mainService=new mainService_1['MainService'](app_1[a15_0x319e('0x5')]);mainService[a15_0x319e('0x6')]();app_1['default'][a15_0x319e('0x7')](errorhandler_1[a15_0x319e('0x5')]());const server=app_1[a15_0x319e('0x5')][a15_0x319e('0x8')](app_1['default']['get']('port'),()=>{console[a15_0x319e('0x9')](a15_0x319e('0xa'),app_1['default']['get']('port'),app_1['default'][a15_0x319e('0xb')](a15_0x319e('0xc')));console[a15_0x319e('0x9')](a15_0x319e('0xd'));});exports[a15_0x319e('0x5')]=server;