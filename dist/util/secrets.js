var a23_0x19da=['SESSION_SECRET','MONGODB_URI_LOCAL','error','No\x20client\x20secret.\x20Set\x20SESSION_SECRET\x20environment\x20variable.','exit','MONGODB_URI','No\x20mongo\x20connection\x20string.\x20Set\x20MONGODB_URI\x20environment\x20variable.','__importDefault','__esModule','defineProperty','./logger','dotenv','default','existsSync','.env','debug','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables','config','.env.example','ENVIRONMENT','env','production'];(function(_0x2d8f05,_0x4b81bb){var _0x4d74cb=function(_0x32719f){while(--_0x32719f){_0x2d8f05['push'](_0x2d8f05['shift']());}};_0x4d74cb(++_0x4b81bb);}(a23_0x19da,0x1eb));var a23_0x44a1=function(_0x242ecc,_0x528af0){_0x242ecc=_0x242ecc-0x0;var _0x1e1be8=a23_0x19da[_0x242ecc];return _0x1e1be8;};'use strict';var __importDefault=this&&this[a23_0x44a1('0x0')]||function(_0xd8fe59){return _0xd8fe59&&_0xd8fe59[a23_0x44a1('0x1')]?_0xd8fe59:{'default':_0xd8fe59};};Object[a23_0x44a1('0x2')](exports,a23_0x44a1('0x1'),{'value':!![]});const logger_1=__importDefault(require(a23_0x44a1('0x3')));const dotenv_1=__importDefault(require(a23_0x44a1('0x4')));const fs_1=__importDefault(require('fs'));if(fs_1[a23_0x44a1('0x5')][a23_0x44a1('0x6')](a23_0x44a1('0x7'))){logger_1[a23_0x44a1('0x5')]['debug']('Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables');dotenv_1[a23_0x44a1('0x5')]['config']({'path':a23_0x44a1('0x7')});}else{logger_1[a23_0x44a1('0x5')][a23_0x44a1('0x8')](a23_0x44a1('0x9'));dotenv_1[a23_0x44a1('0x5')][a23_0x44a1('0xa')]({'path':a23_0x44a1('0xb')});}exports[a23_0x44a1('0xc')]=process[a23_0x44a1('0xd')]['NODE_ENV'];const prod=exports[a23_0x44a1('0xc')]===a23_0x44a1('0xe');exports[a23_0x44a1('0xf')]=process[a23_0x44a1('0xd')]['SESSION_SECRET'];exports['MONGODB_URI']=prod?process['env']['MONGODB_URI']:process[a23_0x44a1('0xd')][a23_0x44a1('0x10')];if(!exports[a23_0x44a1('0xf')]){logger_1[a23_0x44a1('0x5')][a23_0x44a1('0x11')](a23_0x44a1('0x12'));process[a23_0x44a1('0x13')](0x1);}if(!exports[a23_0x44a1('0x14')]){logger_1[a23_0x44a1('0x5')][a23_0x44a1('0x11')](a23_0x44a1('0x15'));process[a23_0x44a1('0x13')](0x1);}