var a23_0x502a=['File','__importDefault','__esModule','winston','Logger','default','transports','env','NODE_ENV','production','error','debug'];(function(_0x1b9f9f,_0x271689){var _0x4ffb5e=function(_0x3ee6a5){while(--_0x3ee6a5){_0x1b9f9f['push'](_0x1b9f9f['shift']());}};_0x4ffb5e(++_0x271689);}(a23_0x502a,0xd9));var a23_0xeff0=function(_0x202ac2,_0xf3de13){_0x202ac2=_0x202ac2-0x0;var _0x2a2ee4=a23_0x502a[_0x202ac2];return _0x2a2ee4;};'use strict';var __importDefault=this&&this[a23_0xeff0('0x0')]||function(_0x100604){return _0x100604&&_0x100604[a23_0xeff0('0x1')]?_0x100604:{'default':_0x100604};};Object['defineProperty'](exports,a23_0xeff0('0x1'),{'value':!![]});const winston_1=__importDefault(require(a23_0xeff0('0x2')));const winston_2=require(a23_0xeff0('0x2'));const logger=new winston_2[(a23_0xeff0('0x3'))]({'transports':[new winston_1[(a23_0xeff0('0x4'))][(a23_0xeff0('0x5'))]['Console']({'level':process[a23_0xeff0('0x6')][a23_0xeff0('0x7')]===a23_0xeff0('0x8')?a23_0xeff0('0x9'):a23_0xeff0('0xa')}),new winston_1[(a23_0xeff0('0x4'))][(a23_0xeff0('0x5'))][(a23_0xeff0('0xb'))]({'filename':'debug.log','level':a23_0xeff0('0xa')})]});if(process[a23_0xeff0('0x6')][a23_0xeff0('0x7')]!==a23_0xeff0('0x8')){logger['debug']('Logging\x20initialized\x20at\x20debug\x20level');}exports[a23_0xeff0('0x4')]=logger;