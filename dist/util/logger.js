var a29_0x3577=['debug.log','env','defineProperty','__esModule','winston','Logger','default','transports','Console','NODE_ENV','production','debug'];(function(_0x260b63,_0x3915c8){var _0x33d27e=function(_0x2e6450){while(--_0x2e6450){_0x260b63['push'](_0x260b63['shift']());}};_0x33d27e(++_0x3915c8);}(a29_0x3577,0x1b2));var a29_0x4882=function(_0x295791,_0x539162){_0x295791=_0x295791-0x0;var _0x2f2f5b=a29_0x3577[_0x295791];return _0x2f2f5b;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x50736a){return _0x50736a&&_0x50736a['__esModule']?_0x50736a:{'default':_0x50736a};};Object[a29_0x4882('0x0')](exports,a29_0x4882('0x1'),{'value':!![]});const winston_1=__importDefault(require(a29_0x4882('0x2')));const winston_2=require(a29_0x4882('0x2'));const logger=new winston_2[(a29_0x4882('0x3'))]({'transports':[new winston_1[(a29_0x4882('0x4'))][(a29_0x4882('0x5'))][(a29_0x4882('0x6'))]({'level':process['env'][a29_0x4882('0x7')]===a29_0x4882('0x8')?'error':a29_0x4882('0x9')}),new winston_1[(a29_0x4882('0x4'))][(a29_0x4882('0x5'))]['File']({'filename':a29_0x4882('0xa'),'level':a29_0x4882('0x9')})]});if(process[a29_0x4882('0xb')][a29_0x4882('0x7')]!==a29_0x4882('0x8')){logger['debug']('Logging\x20initialized\x20at\x20debug\x20level');}exports[a29_0x4882('0x4')]=logger;