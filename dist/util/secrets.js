var a24_0xb062=['dotenv','default','existsSync','.env','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables','config','debug','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables','.env.example','ENVIRONMENT','env','NODE_ENV','SESSION_SECRET','MONGODB_URI_LOCAL','error','exit','__importDefault'];(function(_0x2699a9,_0x501e82){var _0x5b6c40=function(_0xa3de42){while(--_0xa3de42){_0x2699a9['push'](_0x2699a9['shift']());}};_0x5b6c40(++_0x501e82);}(a24_0xb062,0x175));var a24_0xa7a4=function(_0x57e59b,_0xc37a71){_0x57e59b=_0x57e59b-0x0;var _0x566773=a24_0xb062[_0x57e59b];return _0x566773;};'use strict';var __importDefault=this&&this[a24_0xa7a4('0x0')]||function(_0x14a8a3){return _0x14a8a3&&_0x14a8a3['__esModule']?_0x14a8a3:{'default':_0x14a8a3};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const logger_1=__importDefault(require('./logger'));const dotenv_1=__importDefault(require(a24_0xa7a4('0x1')));const fs_1=__importDefault(require('fs'));if(fs_1[a24_0xa7a4('0x2')][a24_0xa7a4('0x3')](a24_0xa7a4('0x4'))){logger_1[a24_0xa7a4('0x2')]['debug'](a24_0xa7a4('0x5'));dotenv_1[a24_0xa7a4('0x2')][a24_0xa7a4('0x6')]({'path':a24_0xa7a4('0x4')});}else{logger_1[a24_0xa7a4('0x2')][a24_0xa7a4('0x7')](a24_0xa7a4('0x8'));dotenv_1[a24_0xa7a4('0x2')][a24_0xa7a4('0x6')]({'path':a24_0xa7a4('0x9')});}exports[a24_0xa7a4('0xa')]=process[a24_0xa7a4('0xb')][a24_0xa7a4('0xc')];const prod=exports['ENVIRONMENT']==='production';exports[a24_0xa7a4('0xd')]=process[a24_0xa7a4('0xb')]['SESSION_SECRET'];exports['MONGODB_URI']=prod?process[a24_0xa7a4('0xb')]['MONGODB_URI']:process['env'][a24_0xa7a4('0xe')];if(!exports[a24_0xa7a4('0xd')]){logger_1[a24_0xa7a4('0x2')][a24_0xa7a4('0xf')]('No\x20client\x20secret.\x20Set\x20SESSION_SECRET\x20environment\x20variable.');process[a24_0xa7a4('0x10')](0x1);}if(!exports['MONGODB_URI']){logger_1[a24_0xa7a4('0x2')]['error']('No\x20mongo\x20connection\x20string.\x20Set\x20MONGODB_URI\x20environment\x20variable.');process['exit'](0x1);}