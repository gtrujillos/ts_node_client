var a13_0x48b3=['env','log','\x20\x20Press\x20CTRL-C\x20to\x20stop\x0a','__importDefault','__esModule','defineProperty','./services/mainService','./app','MainService','default','listen','get','port','\x20\x20App\x20is\x20running\x20at\x20http://localhost:%d\x20in\x20%s\x20mode'];(function(_0x1f718e,_0xee1c5b){var _0x4ce060=function(_0x202bd1){while(--_0x202bd1){_0x1f718e['push'](_0x1f718e['shift']());}};_0x4ce060(++_0xee1c5b);}(a13_0x48b3,0x65));var a13_0x651d=function(_0x2bf7c3,_0x2e6709){_0x2bf7c3=_0x2bf7c3-0x0;var _0x17d0d0=a13_0x48b3[_0x2bf7c3];return _0x17d0d0;};'use strict';var __importDefault=this&&this[a13_0x651d('0x0')]||function(_0x35f755){return _0x35f755&&_0x35f755[a13_0x651d('0x1')]?_0x35f755:{'default':_0x35f755};};Object[a13_0x651d('0x2')](exports,a13_0x651d('0x1'),{'value':!![]});const errorhandler_1=__importDefault(require('errorhandler'));const mainService_1=require(a13_0x651d('0x3'));const app_1=__importDefault(require(a13_0x651d('0x4')));const mainService=new mainService_1[(a13_0x651d('0x5'))](app_1[a13_0x651d('0x6')]);mainService['init']();app_1['default']['use'](errorhandler_1[a13_0x651d('0x6')]());const server=app_1[a13_0x651d('0x6')][a13_0x651d('0x7')](app_1[a13_0x651d('0x6')][a13_0x651d('0x8')](a13_0x651d('0x9')),()=>{console['log'](a13_0x651d('0xa'),app_1[a13_0x651d('0x6')][a13_0x651d('0x8')](a13_0x651d('0x9')),app_1[a13_0x651d('0x6')][a13_0x651d('0x8')](a13_0x651d('0xb')));console[a13_0x651d('0xc')](a13_0x651d('0xd'));});exports['default']=server;