var a24_0x21c6=['.env.example','ENVIRONMENT','NODE_ENV','production','SESSION_SECRET','MONGODB_URI','env','MONGODB_URI_LOCAL','error','No\x20client\x20secret.\x20Set\x20SESSION_SECRET\x20environment\x20variable.','exit','__esModule','defineProperty','./logger','dotenv','default','existsSync','.env','debug','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables','config'];(function(_0x3e75b4,_0x3e31d6){var _0xbabc50=function(_0x282510){while(--_0x282510){_0x3e75b4['push'](_0x3e75b4['shift']());}};_0xbabc50(++_0x3e31d6);}(a24_0x21c6,0x19a));var a24_0x2702=function(_0x1b1eff,_0x4d1ce0){_0x1b1eff=_0x1b1eff-0x0;var _0x1f98be=a24_0x21c6[_0x1b1eff];return _0x1f98be;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x16def2){return _0x16def2&&_0x16def2[a24_0x2702('0x0')]?_0x16def2:{'default':_0x16def2};};Object[a24_0x2702('0x1')](exports,a24_0x2702('0x0'),{'value':!![]});const logger_1=__importDefault(require(a24_0x2702('0x2')));const dotenv_1=__importDefault(require(a24_0x2702('0x3')));const fs_1=__importDefault(require('fs'));if(fs_1[a24_0x2702('0x4')][a24_0x2702('0x5')](a24_0x2702('0x6'))){logger_1[a24_0x2702('0x4')][a24_0x2702('0x7')](a24_0x2702('0x8'));dotenv_1['default'][a24_0x2702('0x9')]({'path':a24_0x2702('0x6')});}else{logger_1[a24_0x2702('0x4')][a24_0x2702('0x7')]('Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables');dotenv_1[a24_0x2702('0x4')][a24_0x2702('0x9')]({'path':a24_0x2702('0xa')});}exports[a24_0x2702('0xb')]=process['env'][a24_0x2702('0xc')];const prod=exports['ENVIRONMENT']===a24_0x2702('0xd');exports[a24_0x2702('0xe')]=process['env'][a24_0x2702('0xe')];exports[a24_0x2702('0xf')]=prod?process[a24_0x2702('0x10')][a24_0x2702('0xf')]:process[a24_0x2702('0x10')][a24_0x2702('0x11')];if(!exports[a24_0x2702('0xe')]){logger_1[a24_0x2702('0x4')][a24_0x2702('0x12')](a24_0x2702('0x13'));process[a24_0x2702('0x14')](0x1);}if(!exports[a24_0x2702('0xf')]){logger_1[a24_0x2702('0x4')][a24_0x2702('0x12')]('No\x20mongo\x20connection\x20string.\x20Set\x20MONGODB_URI\x20environment\x20variable.');process[a24_0x2702('0x14')](0x1);}