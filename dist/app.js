var a0_0x291c=['__esModule','defineProperty','express','compression','body-parser','./util/logger','path','express-validator','default','existsSync','.env','debug','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables','config','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables','set','env','PORT','views','join','pug','use','json','urlencoded','static','public','__importDefault'];(function(_0x2a70e3,_0x528b96){var _0x222968=function(_0x47a85c){while(--_0x47a85c){_0x2a70e3['push'](_0x2a70e3['shift']());}};_0x222968(++_0x528b96);}(a0_0x291c,0x10d));var a0_0x2c72=function(_0x214a74,_0x2ceeeb){_0x214a74=_0x214a74-0x0;var _0x308bbe=a0_0x291c[_0x214a74];return _0x308bbe;};'use strict';var __importDefault=this&&this[a0_0x2c72('0x0')]||function(_0x29950b){return _0x29950b&&_0x29950b[a0_0x2c72('0x1')]?_0x29950b:{'default':_0x29950b};};Object[a0_0x2c72('0x2')](exports,a0_0x2c72('0x1'),{'value':!![]});const express_1=__importDefault(require(a0_0x2c72('0x3')));const compression_1=__importDefault(require(a0_0x2c72('0x4')));const body_parser_1=__importDefault(require(a0_0x2c72('0x5')));const logger_1=__importDefault(require(a0_0x2c72('0x6')));const dotenv_1=__importDefault(require('dotenv'));const path_1=__importDefault(require(a0_0x2c72('0x7')));const express_validator_1=__importDefault(require(a0_0x2c72('0x8')));const fs_1=__importDefault(require('fs'));if(fs_1[a0_0x2c72('0x9')][a0_0x2c72('0xa')](a0_0x2c72('0xb'))){logger_1['default'][a0_0x2c72('0xc')](a0_0x2c72('0xd'));dotenv_1[a0_0x2c72('0x9')][a0_0x2c72('0xe')]({'path':a0_0x2c72('0xb')});}else{logger_1[a0_0x2c72('0x9')]['debug'](a0_0x2c72('0xf'));dotenv_1['default'][a0_0x2c72('0xe')]({'path':'.env.example'});}const app=express_1[a0_0x2c72('0x9')]();app[a0_0x2c72('0x10')]('port',process[a0_0x2c72('0x11')][a0_0x2c72('0x12')]||0xbb8);app[a0_0x2c72('0x10')](a0_0x2c72('0x13'),path_1[a0_0x2c72('0x9')][a0_0x2c72('0x14')](__dirname,'../views'));app[a0_0x2c72('0x10')]('view\x20engine',a0_0x2c72('0x15'));app['use'](compression_1[a0_0x2c72('0x9')]());app[a0_0x2c72('0x16')](body_parser_1[a0_0x2c72('0x9')][a0_0x2c72('0x17')]());app[a0_0x2c72('0x16')](body_parser_1[a0_0x2c72('0x9')][a0_0x2c72('0x18')]({'extended':!![]}));app[a0_0x2c72('0x16')](express_validator_1[a0_0x2c72('0x9')]());app['use'](express_1['default'][a0_0x2c72('0x19')](path_1[a0_0x2c72('0x9')][a0_0x2c72('0x14')](__dirname,a0_0x2c72('0x1a')),{'maxAge':0x758fac300}));exports['default']=app;