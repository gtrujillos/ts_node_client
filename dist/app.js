var a0_0x2a8b=['debug','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables','set','port','env','PORT','views','join','../views','view\x20engine','pug','use','__importDefault','__esModule','express','compression','body-parser','./util/logger','dotenv','path','default','existsSync','.env','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables','config'];(function(_0x3fd3af,_0x23d5d4){var _0x14f1e2=function(_0x4ce5){while(--_0x4ce5){_0x3fd3af['push'](_0x3fd3af['shift']());}};_0x14f1e2(++_0x23d5d4);}(a0_0x2a8b,0x16a));var a0_0x3a6d=function(_0x170366,_0x211a74){_0x170366=_0x170366-0x0;var _0x1d346a=a0_0x2a8b[_0x170366];return _0x1d346a;};'use strict';var __importDefault=this&&this[a0_0x3a6d('0x0')]||function(_0x3f855b){return _0x3f855b&&_0x3f855b[a0_0x3a6d('0x1')]?_0x3f855b:{'default':_0x3f855b};};Object['defineProperty'](exports,a0_0x3a6d('0x1'),{'value':!![]});const express_1=__importDefault(require(a0_0x3a6d('0x2')));const compression_1=__importDefault(require(a0_0x3a6d('0x3')));const body_parser_1=__importDefault(require(a0_0x3a6d('0x4')));const logger_1=__importDefault(require(a0_0x3a6d('0x5')));const dotenv_1=__importDefault(require(a0_0x3a6d('0x6')));const path_1=__importDefault(require(a0_0x3a6d('0x7')));const express_validator_1=__importDefault(require('express-validator'));const fs_1=__importDefault(require('fs'));if(fs_1[a0_0x3a6d('0x8')][a0_0x3a6d('0x9')](a0_0x3a6d('0xa'))){logger_1[a0_0x3a6d('0x8')]['debug'](a0_0x3a6d('0xb'));dotenv_1[a0_0x3a6d('0x8')][a0_0x3a6d('0xc')]({'path':a0_0x3a6d('0xa')});}else{logger_1[a0_0x3a6d('0x8')][a0_0x3a6d('0xd')](a0_0x3a6d('0xe'));dotenv_1['default'][a0_0x3a6d('0xc')]({'path':'.env.example'});}const app=express_1[a0_0x3a6d('0x8')]();app[a0_0x3a6d('0xf')](a0_0x3a6d('0x10'),process[a0_0x3a6d('0x11')][a0_0x3a6d('0x12')]||0xbb8);app[a0_0x3a6d('0xf')](a0_0x3a6d('0x13'),path_1[a0_0x3a6d('0x8')][a0_0x3a6d('0x14')](__dirname,a0_0x3a6d('0x15')));app[a0_0x3a6d('0xf')](a0_0x3a6d('0x16'),a0_0x3a6d('0x17'));app[a0_0x3a6d('0x18')](compression_1[a0_0x3a6d('0x8')]());app[a0_0x3a6d('0x18')](body_parser_1[a0_0x3a6d('0x8')]['json']());app[a0_0x3a6d('0x18')](body_parser_1[a0_0x3a6d('0x8')]['urlencoded']({'extended':!![]}));app[a0_0x3a6d('0x18')](express_validator_1[a0_0x3a6d('0x8')]());app[a0_0x3a6d('0x18')](express_1[a0_0x3a6d('0x8')]['static'](path_1[a0_0x3a6d('0x8')][a0_0x3a6d('0x14')](__dirname,'public'),{'maxAge':0x758fac300}));exports[a0_0x3a6d('0x8')]=app;