var a23_0x1e17=['existsSync','.env','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables','config','debug','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables','env','NODE_ENV','ENVIRONMENT','production','SESSION_SECRET','MONGODB_URI','error','No\x20client\x20secret.\x20Set\x20SESSION_SECRET\x20environment\x20variable.','No\x20mongo\x20connection\x20string.\x20Set\x20MONGODB_URI\x20environment\x20variable.','exit','__esModule','defineProperty','./logger','default'];(function(_0x2c08e3,_0x7c13f0){var _0x1b1581=function(_0x46ff3c){while(--_0x46ff3c){_0x2c08e3['push'](_0x2c08e3['shift']());}};_0x1b1581(++_0x7c13f0);}(a23_0x1e17,0x1f0));var a23_0x4b21=function(_0x2498fd,_0x1b5247){_0x2498fd=_0x2498fd-0x0;var _0xe9ffe=a23_0x1e17[_0x2498fd];return _0xe9ffe;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x1f7c94){return _0x1f7c94&&_0x1f7c94[a23_0x4b21('0x0')]?_0x1f7c94:{'default':_0x1f7c94};};Object[a23_0x4b21('0x1')](exports,'__esModule',{'value':!![]});const logger_1=__importDefault(require(a23_0x4b21('0x2')));const dotenv_1=__importDefault(require('dotenv'));const fs_1=__importDefault(require('fs'));if(fs_1[a23_0x4b21('0x3')][a23_0x4b21('0x4')](a23_0x4b21('0x5'))){logger_1[a23_0x4b21('0x3')]['debug'](a23_0x4b21('0x6'));dotenv_1[a23_0x4b21('0x3')][a23_0x4b21('0x7')]({'path':'.env'});}else{logger_1[a23_0x4b21('0x3')][a23_0x4b21('0x8')](a23_0x4b21('0x9'));dotenv_1['default'][a23_0x4b21('0x7')]({'path':'.env.example'});}exports['ENVIRONMENT']=process[a23_0x4b21('0xa')][a23_0x4b21('0xb')];const prod=exports[a23_0x4b21('0xc')]===a23_0x4b21('0xd');exports[a23_0x4b21('0xe')]=process[a23_0x4b21('0xa')]['SESSION_SECRET'];exports[a23_0x4b21('0xf')]=prod?process['env']['MONGODB_URI']:process['env']['MONGODB_URI_LOCAL'];if(!exports[a23_0x4b21('0xe')]){logger_1[a23_0x4b21('0x3')][a23_0x4b21('0x10')](a23_0x4b21('0x11'));process['exit'](0x1);}if(!exports[a23_0x4b21('0xf')]){logger_1[a23_0x4b21('0x3')][a23_0x4b21('0x10')](a23_0x4b21('0x12'));process[a23_0x4b21('0x13')](0x1);}