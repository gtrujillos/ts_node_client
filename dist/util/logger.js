var a25_0x4b3b=['transports','Console','env','NODE_ENV','error','File','debug','__importDefault','__esModule','winston','Logger','default'];(function(_0x1fe782,_0x1bbb73){var _0x1ff9f9=function(_0x5af789){while(--_0x5af789){_0x1fe782['push'](_0x1fe782['shift']());}};_0x1ff9f9(++_0x1bbb73);}(a25_0x4b3b,0x1b7));var a25_0x254e=function(_0x5c7032,_0x2c1c4f){_0x5c7032=_0x5c7032-0x0;var _0x596098=a25_0x4b3b[_0x5c7032];return _0x596098;};'use strict';var __importDefault=this&&this[a25_0x254e('0x0')]||function(_0x517ff8){return _0x517ff8&&_0x517ff8[a25_0x254e('0x1')]?_0x517ff8:{'default':_0x517ff8};};Object['defineProperty'](exports,a25_0x254e('0x1'),{'value':!![]});const winston_1=__importDefault(require(a25_0x254e('0x2')));const winston_2=require('winston');const logger=new winston_2[(a25_0x254e('0x3'))]({'transports':[new winston_1[(a25_0x254e('0x4'))][(a25_0x254e('0x5'))][(a25_0x254e('0x6'))]({'level':process[a25_0x254e('0x7')][a25_0x254e('0x8')]==='production'?a25_0x254e('0x9'):'debug'}),new winston_1[(a25_0x254e('0x4'))][(a25_0x254e('0x5'))][(a25_0x254e('0xa'))]({'filename':'debug.log','level':a25_0x254e('0xb')})]});if(process[a25_0x254e('0x7')][a25_0x254e('0x8')]!=='production'){logger[a25_0x254e('0xb')]('Logging\x20initialized\x20at\x20debug\x20level');}exports[a25_0x254e('0x4')]=logger;