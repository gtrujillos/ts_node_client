var a13_0x48b3=['env','log','\x20\x20Press\x20CTRL-C\x20to\x20stop\x0a','__importDefault','__esModule','defineProperty','./services/mainService','./app','MainService','default','listen','get','port','\x20\x20App\x20is\x20running\x20at\x20http://localhost:%d\x20in\x20%s\x20mode'];(function(_0x38cad8,_0xd1fef){var _0x2d461f=function(_0x415de0){while(--_0x415de0){_0x38cad8['push'](_0x38cad8['shift']());}};_0x2d461f(++_0xd1fef);}(a13_0x48b3,0x65));var a13_0x651d=function(_0x6ac6cd,_0x4655da){_0x6ac6cd=_0x6ac6cd-0x0;var _0x5151ae=a13_0x48b3[_0x6ac6cd];return _0x5151ae;};'use strict';var __importDefault=this&&this[a13_0x651d('0x0')]||function(_0x35f755){return _0x35f755&&_0x35f755[a13_0x651d('0x1')]?_0x35f755:{'default':_0x35f755};};Object[a13_0x651d('0x2')](exports,a13_0x651d('0x1'),{'value':!![]});const errorhandler_1=__importDefault(require('errorhandler'));const mainService_1=require(a13_0x651d('0x3'));const app_1=__importDefault(require(a13_0x651d('0x4')));const mainService=new mainService_1[(a13_0x651d('0x5'))](app_1[a13_0x651d('0x6')]);mainService['init']();app_1['default']['use'](errorhandler_1[a13_0x651d('0x6')]());const server=app_1[a13_0x651d('0x6')][a13_0x651d('0x7')](app_1[a13_0x651d('0x6')][a13_0x651d('0x8')](a13_0x651d('0x9')),()=>{console['log'](a13_0x651d('0xa'),app_1[a13_0x651d('0x6')][a13_0x651d('0x8')](a13_0x651d('0x9')),app_1[a13_0x651d('0x6')][a13_0x651d('0x8')](a13_0x651d('0xb')));console[a13_0x651d('0xc')](a13_0x651d('0xd'));});exports['default']=server;