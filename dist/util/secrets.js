var a24_0x50b8=['__importDefault','__esModule','defineProperty','./logger','dotenv','existsSync','.env','default','debug','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables','config','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables','ENVIRONMENT','env','NODE_ENV','production','SESSION_SECRET','MONGODB_URI_LOCAL','error','No\x20client\x20secret.\x20Set\x20SESSION_SECRET\x20environment\x20variable.','exit','No\x20mongo\x20connection\x20string.\x20Set\x20MONGODB_URI\x20environment\x20variable.'];(function(_0x467bb5,_0x19b660){var _0x3a7909=function(_0x3043da){while(--_0x3043da){_0x467bb5['push'](_0x467bb5['shift']());}};_0x3a7909(++_0x19b660);}(a24_0x50b8,0x134));var a24_0x3a97=function(_0x1c4e42,_0x2a6fe2){_0x1c4e42=_0x1c4e42-0x0;var _0x5c1473=a24_0x50b8[_0x1c4e42];return _0x5c1473;};'use strict';var __importDefault=this&&this[a24_0x3a97('0x0')]||function(_0x16079a){return _0x16079a&&_0x16079a[a24_0x3a97('0x1')]?_0x16079a:{'default':_0x16079a};};Object[a24_0x3a97('0x2')](exports,a24_0x3a97('0x1'),{'value':!![]});const logger_1=__importDefault(require(a24_0x3a97('0x3')));const dotenv_1=__importDefault(require(a24_0x3a97('0x4')));const fs_1=__importDefault(require('fs'));if(fs_1['default'][a24_0x3a97('0x5')](a24_0x3a97('0x6'))){logger_1[a24_0x3a97('0x7')][a24_0x3a97('0x8')](a24_0x3a97('0x9'));dotenv_1[a24_0x3a97('0x7')][a24_0x3a97('0xa')]({'path':a24_0x3a97('0x6')});}else{logger_1[a24_0x3a97('0x7')][a24_0x3a97('0x8')](a24_0x3a97('0xb'));dotenv_1[a24_0x3a97('0x7')][a24_0x3a97('0xa')]({'path':'.env.example'});}exports[a24_0x3a97('0xc')]=process[a24_0x3a97('0xd')][a24_0x3a97('0xe')];const prod=exports[a24_0x3a97('0xc')]===a24_0x3a97('0xf');exports[a24_0x3a97('0x10')]=process[a24_0x3a97('0xd')][a24_0x3a97('0x10')];exports['MONGODB_URI']=prod?process[a24_0x3a97('0xd')]['MONGODB_URI']:process['env'][a24_0x3a97('0x11')];if(!exports[a24_0x3a97('0x10')]){logger_1[a24_0x3a97('0x7')][a24_0x3a97('0x12')](a24_0x3a97('0x13'));process[a24_0x3a97('0x14')](0x1);}if(!exports['MONGODB_URI']){logger_1[a24_0x3a97('0x7')][a24_0x3a97('0x12')](a24_0x3a97('0x15'));process[a24_0x3a97('0x14')](0x1);}