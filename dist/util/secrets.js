var a29_0x34a7=['config','debug','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables','.env.example','ENVIRONMENT','SESSION_SECRET','env','MONGODB_URI','MONGODB_URI_LOCAL','error','No\x20client\x20secret.\x20Set\x20SESSION_SECRET\x20environment\x20variable.','exit','__importDefault','__esModule','defineProperty','./logger','dotenv','.env','default','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables'];(function(_0x28812f,_0xc6a148){var _0x1b2e29=function(_0x4d2614){while(--_0x4d2614){_0x28812f['push'](_0x28812f['shift']());}};_0x1b2e29(++_0xc6a148);}(a29_0x34a7,0x70));var a29_0x5370=function(_0x3562b5,_0x22dabc){_0x3562b5=_0x3562b5-0x0;var _0x54d52d=a29_0x34a7[_0x3562b5];return _0x54d52d;};'use strict';var __importDefault=this&&this[a29_0x5370('0x0')]||function(_0xc92123){return _0xc92123&&_0xc92123[a29_0x5370('0x1')]?_0xc92123:{'default':_0xc92123};};Object[a29_0x5370('0x2')](exports,'__esModule',{'value':!![]});const logger_1=__importDefault(require(a29_0x5370('0x3')));const dotenv_1=__importDefault(require(a29_0x5370('0x4')));const fs_1=__importDefault(require('fs'));if(fs_1['default']['existsSync'](a29_0x5370('0x5'))){logger_1[a29_0x5370('0x6')]['debug'](a29_0x5370('0x7'));dotenv_1[a29_0x5370('0x6')][a29_0x5370('0x8')]({'path':a29_0x5370('0x5')});}else{logger_1['default'][a29_0x5370('0x9')](a29_0x5370('0xa'));dotenv_1[a29_0x5370('0x6')][a29_0x5370('0x8')]({'path':a29_0x5370('0xb')});}exports[a29_0x5370('0xc')]=process['env']['NODE_ENV'];const prod=exports[a29_0x5370('0xc')]==='production';exports[a29_0x5370('0xd')]=process[a29_0x5370('0xe')][a29_0x5370('0xd')];exports[a29_0x5370('0xf')]=prod?process['env'][a29_0x5370('0xf')]:process[a29_0x5370('0xe')][a29_0x5370('0x10')];if(!exports['SESSION_SECRET']){logger_1[a29_0x5370('0x6')][a29_0x5370('0x11')](a29_0x5370('0x12'));process[a29_0x5370('0x13')](0x1);}if(!exports['MONGODB_URI']){logger_1[a29_0x5370('0x6')][a29_0x5370('0x11')]('No\x20mongo\x20connection\x20string.\x20Set\x20MONGODB_URI\x20environment\x20variable.');process[a29_0x5370('0x13')](0x1);}