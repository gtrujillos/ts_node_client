var a0_0x4dca=['./util/logger','path','express-validator','default','existsSync','.env','debug','config','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables','.env.example','set','env','views','view\x20engine','pug','use','json','urlencoded','static','join','public','__importDefault','defineProperty','__esModule','express','body-parser'];(function(_0x50234a,_0x4ae83c){var _0x32e56a=function(_0x485e6b){while(--_0x485e6b){_0x50234a['push'](_0x50234a['shift']());}};_0x32e56a(++_0x4ae83c);}(a0_0x4dca,0xff));var a0_0x245f=function(_0xafbf75,_0x33aa93){_0xafbf75=_0xafbf75-0x0;var _0x23e5aa=a0_0x4dca[_0xafbf75];return _0x23e5aa;};'use strict';var __importDefault=this&&this[a0_0x245f('0x0')]||function(_0x5aaf90){return _0x5aaf90&&_0x5aaf90['__esModule']?_0x5aaf90:{'default':_0x5aaf90};};Object[a0_0x245f('0x1')](exports,a0_0x245f('0x2'),{'value':!![]});const express_1=__importDefault(require(a0_0x245f('0x3')));const compression_1=__importDefault(require('compression'));const body_parser_1=__importDefault(require(a0_0x245f('0x4')));const logger_1=__importDefault(require(a0_0x245f('0x5')));const dotenv_1=__importDefault(require('dotenv'));const path_1=__importDefault(require(a0_0x245f('0x6')));const express_validator_1=__importDefault(require(a0_0x245f('0x7')));const fs_1=__importDefault(require('fs'));if(fs_1[a0_0x245f('0x8')][a0_0x245f('0x9')](a0_0x245f('0xa'))){logger_1[a0_0x245f('0x8')][a0_0x245f('0xb')]('Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables');dotenv_1[a0_0x245f('0x8')][a0_0x245f('0xc')]({'path':a0_0x245f('0xa')});}else{logger_1[a0_0x245f('0x8')][a0_0x245f('0xb')](a0_0x245f('0xd'));dotenv_1[a0_0x245f('0x8')][a0_0x245f('0xc')]({'path':a0_0x245f('0xe')});}const app=express_1['default']();app[a0_0x245f('0xf')]('port',process[a0_0x245f('0x10')]['PORT']||0xbb8);app['set'](a0_0x245f('0x11'),path_1[a0_0x245f('0x8')]['join'](__dirname,'../views'));app['set'](a0_0x245f('0x12'),a0_0x245f('0x13'));app['use'](compression_1[a0_0x245f('0x8')]());app[a0_0x245f('0x14')](body_parser_1[a0_0x245f('0x8')][a0_0x245f('0x15')]());app[a0_0x245f('0x14')](body_parser_1[a0_0x245f('0x8')][a0_0x245f('0x16')]({'extended':!![]}));app['use'](express_validator_1['default']());app[a0_0x245f('0x14')](express_1['default'][a0_0x245f('0x17')](path_1[a0_0x245f('0x8')][a0_0x245f('0x18')](__dirname,a0_0x245f('0x19')),{'maxAge':0x758fac300}));exports[a0_0x245f('0x8')]=app;