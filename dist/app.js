var a0_0x4cbb=['default','debug','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables','config','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables','port','env','PORT','set','../views','pug','use','json','urlencoded','static','join','public','__importDefault','__esModule','defineProperty','express','compression','body-parser','./util/logger','dotenv','path','express-validator','existsSync','.env'];(function(_0x4bbc63,_0x1339fb){var _0x15f2f1=function(_0x384f3d){while(--_0x384f3d){_0x4bbc63['push'](_0x4bbc63['shift']());}};_0x15f2f1(++_0x1339fb);}(a0_0x4cbb,0xbf));var a0_0x1d97=function(_0x164f2c,_0x3b6d26){_0x164f2c=_0x164f2c-0x0;var _0x36006a=a0_0x4cbb[_0x164f2c];return _0x36006a;};'use strict';var __importDefault=this&&this[a0_0x1d97('0x0')]||function(_0x1c810d){return _0x1c810d&&_0x1c810d[a0_0x1d97('0x1')]?_0x1c810d:{'default':_0x1c810d};};Object[a0_0x1d97('0x2')](exports,a0_0x1d97('0x1'),{'value':!![]});const express_1=__importDefault(require(a0_0x1d97('0x3')));const compression_1=__importDefault(require(a0_0x1d97('0x4')));const body_parser_1=__importDefault(require(a0_0x1d97('0x5')));const logger_1=__importDefault(require(a0_0x1d97('0x6')));const dotenv_1=__importDefault(require(a0_0x1d97('0x7')));const path_1=__importDefault(require(a0_0x1d97('0x8')));const express_validator_1=__importDefault(require(a0_0x1d97('0x9')));const fs_1=__importDefault(require('fs'));if(fs_1['default'][a0_0x1d97('0xa')](a0_0x1d97('0xb'))){logger_1[a0_0x1d97('0xc')][a0_0x1d97('0xd')](a0_0x1d97('0xe'));dotenv_1[a0_0x1d97('0xc')][a0_0x1d97('0xf')]({'path':a0_0x1d97('0xb')});}else{logger_1['default'][a0_0x1d97('0xd')](a0_0x1d97('0x10'));dotenv_1[a0_0x1d97('0xc')][a0_0x1d97('0xf')]({'path':'.env.example'});}const app=express_1[a0_0x1d97('0xc')]();app['set'](a0_0x1d97('0x11'),process[a0_0x1d97('0x12')][a0_0x1d97('0x13')]||0xbb8);app[a0_0x1d97('0x14')]('views',path_1[a0_0x1d97('0xc')]['join'](__dirname,a0_0x1d97('0x15')));app[a0_0x1d97('0x14')]('view\x20engine',a0_0x1d97('0x16'));app[a0_0x1d97('0x17')](compression_1['default']());app[a0_0x1d97('0x17')](body_parser_1[a0_0x1d97('0xc')][a0_0x1d97('0x18')]());app[a0_0x1d97('0x17')](body_parser_1[a0_0x1d97('0xc')][a0_0x1d97('0x19')]({'extended':!![]}));app[a0_0x1d97('0x17')](express_validator_1[a0_0x1d97('0xc')]());app['use'](express_1[a0_0x1d97('0xc')][a0_0x1d97('0x1a')](path_1[a0_0x1d97('0xc')][a0_0x1d97('0x1b')](__dirname,a0_0x1d97('0x1c')),{'maxAge':0x758fac300}));exports[a0_0x1d97('0xc')]=app;