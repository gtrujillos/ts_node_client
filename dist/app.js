var a0_0x2dce=['Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables','config','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables','.env.example','set','port','env','PORT','views','join','../views','view\x20engine','pug','use','json','urlencoded','__importDefault','__esModule','defineProperty','body-parser','./util/logger','path','express-validator','default','existsSync','.env','debug'];(function(_0x39ddc0,_0x2d6c03){var _0x2cd2f4=function(_0x45c8a9){while(--_0x45c8a9){_0x39ddc0['push'](_0x39ddc0['shift']());}};_0x2cd2f4(++_0x2d6c03);}(a0_0x2dce,0x1c0));var a0_0x193f=function(_0x3b3848,_0x4059e3){_0x3b3848=_0x3b3848-0x0;var _0x4acb2b=a0_0x2dce[_0x3b3848];return _0x4acb2b;};'use strict';var __importDefault=this&&this[a0_0x193f('0x0')]||function(_0xe0020f){return _0xe0020f&&_0xe0020f[a0_0x193f('0x1')]?_0xe0020f:{'default':_0xe0020f};};Object[a0_0x193f('0x2')](exports,a0_0x193f('0x1'),{'value':!![]});const express_1=__importDefault(require('express'));const compression_1=__importDefault(require('compression'));const body_parser_1=__importDefault(require(a0_0x193f('0x3')));const logger_1=__importDefault(require(a0_0x193f('0x4')));const dotenv_1=__importDefault(require('dotenv'));const path_1=__importDefault(require(a0_0x193f('0x5')));const express_validator_1=__importDefault(require(a0_0x193f('0x6')));const fs_1=__importDefault(require('fs'));if(fs_1[a0_0x193f('0x7')][a0_0x193f('0x8')](a0_0x193f('0x9'))){logger_1['default'][a0_0x193f('0xa')](a0_0x193f('0xb'));dotenv_1[a0_0x193f('0x7')][a0_0x193f('0xc')]({'path':a0_0x193f('0x9')});}else{logger_1[a0_0x193f('0x7')][a0_0x193f('0xa')](a0_0x193f('0xd'));dotenv_1[a0_0x193f('0x7')][a0_0x193f('0xc')]({'path':a0_0x193f('0xe')});}const app=express_1[a0_0x193f('0x7')]();app[a0_0x193f('0xf')](a0_0x193f('0x10'),process[a0_0x193f('0x11')][a0_0x193f('0x12')]||0xbb8);app[a0_0x193f('0xf')](a0_0x193f('0x13'),path_1[a0_0x193f('0x7')][a0_0x193f('0x14')](__dirname,a0_0x193f('0x15')));app[a0_0x193f('0xf')](a0_0x193f('0x16'),a0_0x193f('0x17'));app['use'](compression_1['default']());app[a0_0x193f('0x18')](body_parser_1[a0_0x193f('0x7')][a0_0x193f('0x19')]());app[a0_0x193f('0x18')](body_parser_1[a0_0x193f('0x7')][a0_0x193f('0x1a')]({'extended':!![]}));app[a0_0x193f('0x18')](express_validator_1[a0_0x193f('0x7')]());app['use'](express_1['default']['static'](path_1[a0_0x193f('0x7')]['join'](__dirname,'public'),{'maxAge':0x758fac300}));exports[a0_0x193f('0x7')]=app;