var a13_0x21da=['__esModule','errorhandler','MainService','init','default','use','listen','port','log','get','env','\x20\x20Press\x20CTRL-C\x20to\x20stop\x0a','__importDefault'];(function(_0x5d4cac,_0x1ec44a){var _0x1f5dc7=function(_0x5cdf16){while(--_0x5cdf16){_0x5d4cac['push'](_0x5d4cac['shift']());}};_0x1f5dc7(++_0x1ec44a);}(a13_0x21da,0x1c6));var a13_0x498a=function(_0x14e2eb,_0x19a315){_0x14e2eb=_0x14e2eb-0x0;var _0x29a74b=a13_0x21da[_0x14e2eb];return _0x29a74b;};'use strict';var __importDefault=this&&this[a13_0x498a('0x0')]||function(_0x1945e4){return _0x1945e4&&_0x1945e4['__esModule']?_0x1945e4:{'default':_0x1945e4};};Object['defineProperty'](exports,a13_0x498a('0x1'),{'value':!![]});const errorhandler_1=__importDefault(require(a13_0x498a('0x2')));const mainService_1=require('./services/mainService');const app_1=__importDefault(require('./app'));const mainService=new mainService_1[(a13_0x498a('0x3'))](app_1['default']);mainService[a13_0x498a('0x4')]();app_1[a13_0x498a('0x5')][a13_0x498a('0x6')](errorhandler_1[a13_0x498a('0x5')]());const server=app_1[a13_0x498a('0x5')][a13_0x498a('0x7')](app_1['default']['get'](a13_0x498a('0x8')),()=>{console[a13_0x498a('0x9')]('\x20\x20App\x20is\x20running\x20at\x20http://localhost:%d\x20in\x20%s\x20mode',app_1[a13_0x498a('0x5')]['get'](a13_0x498a('0x8')),app_1[a13_0x498a('0x5')][a13_0x498a('0xa')](a13_0x498a('0xb')));console[a13_0x498a('0x9')](a13_0x498a('0xc'));});exports['default']=server;