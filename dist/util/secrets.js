var a24_0x48b3=['default','existsSync','.env','config','debug','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables','.env.example','ENVIRONMENT','env','NODE_ENV','production','SESSION_SECRET','MONGODB_URI','MONGODB_URI_LOCAL','error','No\x20client\x20secret.\x20Set\x20SESSION_SECRET\x20environment\x20variable.','exit','__importDefault','__esModule','defineProperty','dotenv'];(function(_0x4aa11e,_0x5aa7cc){var _0x44e66f=function(_0x3733a7){while(--_0x3733a7){_0x4aa11e['push'](_0x4aa11e['shift']());}};_0x44e66f(++_0x5aa7cc);}(a24_0x48b3,0x65));var a24_0x651d=function(_0x49912f,_0x9aa2b2){_0x49912f=_0x49912f-0x0;var _0x4019e3=a24_0x48b3[_0x49912f];return _0x4019e3;};'use strict';var __importDefault=this&&this[a24_0x651d('0x0')]||function(_0x35f755){return _0x35f755&&_0x35f755[a24_0x651d('0x1')]?_0x35f755:{'default':_0x35f755};};Object[a24_0x651d('0x2')](exports,a24_0x651d('0x1'),{'value':!![]});const logger_1=__importDefault(require('./logger'));const dotenv_1=__importDefault(require(a24_0x651d('0x3')));const fs_1=__importDefault(require('fs'));if(fs_1[a24_0x651d('0x4')][a24_0x651d('0x5')](a24_0x651d('0x6'))){logger_1['default']['debug']('Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables');dotenv_1[a24_0x651d('0x4')][a24_0x651d('0x7')]({'path':a24_0x651d('0x6')});}else{logger_1[a24_0x651d('0x4')][a24_0x651d('0x8')](a24_0x651d('0x9'));dotenv_1['default'][a24_0x651d('0x7')]({'path':a24_0x651d('0xa')});}exports[a24_0x651d('0xb')]=process[a24_0x651d('0xc')][a24_0x651d('0xd')];const prod=exports[a24_0x651d('0xb')]===a24_0x651d('0xe');exports[a24_0x651d('0xf')]=process[a24_0x651d('0xc')]['SESSION_SECRET'];exports[a24_0x651d('0x10')]=prod?process['env'][a24_0x651d('0x10')]:process[a24_0x651d('0xc')][a24_0x651d('0x11')];if(!exports[a24_0x651d('0xf')]){logger_1[a24_0x651d('0x4')][a24_0x651d('0x12')](a24_0x651d('0x13'));process[a24_0x651d('0x14')](0x1);}if(!exports[a24_0x651d('0x10')]){logger_1[a24_0x651d('0x4')][a24_0x651d('0x12')]('No\x20mongo\x20connection\x20string.\x20Set\x20MONGODB_URI\x20environment\x20variable.');process['exit'](0x1);}