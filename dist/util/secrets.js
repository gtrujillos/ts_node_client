var a24_0x2b1e=['.env','debug','config','.env.example','ENVIRONMENT','NODE_ENV','SESSION_SECRET','env','MONGODB_URI','MONGODB_URI_LOCAL','error','No\x20client\x20secret.\x20Set\x20SESSION_SECRET\x20environment\x20variable.','No\x20mongo\x20connection\x20string.\x20Set\x20MONGODB_URI\x20environment\x20variable.','__importDefault','__esModule','defineProperty','./logger','default','existsSync'];(function(_0x4e2f3a,_0x4d5cd5){var _0x5a6980=function(_0x98fbb5){while(--_0x98fbb5){_0x4e2f3a['push'](_0x4e2f3a['shift']());}};_0x5a6980(++_0x4d5cd5);}(a24_0x2b1e,0x13d));var a24_0x48de=function(_0x44df60,_0xb89b81){_0x44df60=_0x44df60-0x0;var _0x2bd997=a24_0x2b1e[_0x44df60];return _0x2bd997;};'use strict';var __importDefault=this&&this[a24_0x48de('0x0')]||function(_0x5a79ab){return _0x5a79ab&&_0x5a79ab[a24_0x48de('0x1')]?_0x5a79ab:{'default':_0x5a79ab};};Object[a24_0x48de('0x2')](exports,a24_0x48de('0x1'),{'value':!![]});const logger_1=__importDefault(require(a24_0x48de('0x3')));const dotenv_1=__importDefault(require('dotenv'));const fs_1=__importDefault(require('fs'));if(fs_1[a24_0x48de('0x4')][a24_0x48de('0x5')](a24_0x48de('0x6'))){logger_1[a24_0x48de('0x4')][a24_0x48de('0x7')]('Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables');dotenv_1[a24_0x48de('0x4')][a24_0x48de('0x8')]({'path':a24_0x48de('0x6')});}else{logger_1['default'][a24_0x48de('0x7')]('Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables');dotenv_1[a24_0x48de('0x4')][a24_0x48de('0x8')]({'path':a24_0x48de('0x9')});}exports[a24_0x48de('0xa')]=process['env'][a24_0x48de('0xb')];const prod=exports[a24_0x48de('0xa')]==='production';exports[a24_0x48de('0xc')]=process[a24_0x48de('0xd')][a24_0x48de('0xc')];exports['MONGODB_URI']=prod?process[a24_0x48de('0xd')][a24_0x48de('0xe')]:process[a24_0x48de('0xd')][a24_0x48de('0xf')];if(!exports[a24_0x48de('0xc')]){logger_1['default'][a24_0x48de('0x10')](a24_0x48de('0x11'));process['exit'](0x1);}if(!exports['MONGODB_URI']){logger_1[a24_0x48de('0x4')][a24_0x48de('0x10')](a24_0x48de('0x12'));process['exit'](0x1);}