var a0_0x1605=['express','body-parser','./util/logger','dotenv','express-validator','default','existsSync','.env','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables','config','debug','.env.example','set','port','env','PORT','views','view\x20engine','pug','use','json','static','join','__importDefault','__esModule','defineProperty'];(function(_0x1f0a72,_0x48bd98){var _0xbb1937=function(_0x5d6262){while(--_0x5d6262){_0x1f0a72['push'](_0x1f0a72['shift']());}};_0xbb1937(++_0x48bd98);}(a0_0x1605,0xcd));var a0_0x400f=function(_0x6e4329,_0x1d9586){_0x6e4329=_0x6e4329-0x0;var _0x9e2abc=a0_0x1605[_0x6e4329];return _0x9e2abc;};'use strict';var __importDefault=this&&this[a0_0x400f('0x0')]||function(_0x2a1912){return _0x2a1912&&_0x2a1912[a0_0x400f('0x1')]?_0x2a1912:{'default':_0x2a1912};};Object[a0_0x400f('0x2')](exports,a0_0x400f('0x1'),{'value':!![]});const express_1=__importDefault(require(a0_0x400f('0x3')));const compression_1=__importDefault(require('compression'));const body_parser_1=__importDefault(require(a0_0x400f('0x4')));const logger_1=__importDefault(require(a0_0x400f('0x5')));const dotenv_1=__importDefault(require(a0_0x400f('0x6')));const path_1=__importDefault(require('path'));const express_validator_1=__importDefault(require(a0_0x400f('0x7')));const fs_1=__importDefault(require('fs'));if(fs_1[a0_0x400f('0x8')][a0_0x400f('0x9')](a0_0x400f('0xa'))){logger_1[a0_0x400f('0x8')]['debug'](a0_0x400f('0xb'));dotenv_1[a0_0x400f('0x8')][a0_0x400f('0xc')]({'path':a0_0x400f('0xa')});}else{logger_1[a0_0x400f('0x8')][a0_0x400f('0xd')]('Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables');dotenv_1['default']['config']({'path':a0_0x400f('0xe')});}const app=express_1[a0_0x400f('0x8')]();app[a0_0x400f('0xf')](a0_0x400f('0x10'),process[a0_0x400f('0x11')][a0_0x400f('0x12')]||0xbb8);app[a0_0x400f('0xf')](a0_0x400f('0x13'),path_1[a0_0x400f('0x8')]['join'](__dirname,'../views'));app[a0_0x400f('0xf')](a0_0x400f('0x14'),a0_0x400f('0x15'));app['use'](compression_1[a0_0x400f('0x8')]());app[a0_0x400f('0x16')](body_parser_1[a0_0x400f('0x8')][a0_0x400f('0x17')]());app[a0_0x400f('0x16')](body_parser_1[a0_0x400f('0x8')]['urlencoded']({'extended':!![]}));app['use'](express_validator_1['default']());app[a0_0x400f('0x16')](express_1[a0_0x400f('0x8')][a0_0x400f('0x18')](path_1[a0_0x400f('0x8')][a0_0x400f('0x19')](__dirname,'public'),{'maxAge':0x758fac300}));exports[a0_0x400f('0x8')]=app;