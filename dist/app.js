var a0_0x2000=['fromBuffer','original','message','__importDefault','__esModule','defineProperty','compression','body-parser','./util/logger','dotenv','path','express-validator','default','existsSync','.env','debug','.env.example','env','PORT','set','views','join','../views','view\x20engine','pug','use','json','urlencoded','static','public','get','/image1','FILES_FOLDER','image1.jpg','image2.jpg','base64-img','base64Sync','log','replace','base64','writeHead','image/png','length','end','/image2','jimp','from'];(function(_0x1e5c9c,_0x48d335){var _0x370ae9=function(_0x23afbb){while(--_0x23afbb){_0x1e5c9c['push'](_0x1e5c9c['shift']());}};_0x370ae9(++_0x48d335);}(a0_0x2000,0xbf));var a0_0x6768=function(_0x2ae9f2,_0x2196ea){_0x2ae9f2=_0x2ae9f2-0x0;var _0x36dfa3=a0_0x2000[_0x2ae9f2];return _0x36dfa3;};'use strict';var __importDefault=this&&this[a0_0x6768('0x0')]||function(_0x342de4){return _0x342de4&&_0x342de4[a0_0x6768('0x1')]?_0x342de4:{'default':_0x342de4};};Object[a0_0x6768('0x2')](exports,a0_0x6768('0x1'),{'value':!![]});const express_1=__importDefault(require('express'));const compression_1=__importDefault(require(a0_0x6768('0x3')));const body_parser_1=__importDefault(require(a0_0x6768('0x4')));const logger_1=__importDefault(require(a0_0x6768('0x5')));const dotenv_1=__importDefault(require(a0_0x6768('0x6')));const path_1=__importDefault(require(a0_0x6768('0x7')));const express_validator_1=__importDefault(require(a0_0x6768('0x8')));const fs_1=__importDefault(require('fs'));if(fs_1[a0_0x6768('0x9')][a0_0x6768('0xa')](a0_0x6768('0xb'))){logger_1[a0_0x6768('0x9')][a0_0x6768('0xc')]('Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables');dotenv_1['default']['config']({'path':'.env'});}else{logger_1[a0_0x6768('0x9')][a0_0x6768('0xc')]('Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables');dotenv_1[a0_0x6768('0x9')]['config']({'path':a0_0x6768('0xd')});}const app=express_1[a0_0x6768('0x9')]();app['set']('port',process[a0_0x6768('0xe')][a0_0x6768('0xf')]||0xbb8);app[a0_0x6768('0x10')](a0_0x6768('0x11'),path_1[a0_0x6768('0x9')][a0_0x6768('0x12')](__dirname,a0_0x6768('0x13')));app[a0_0x6768('0x10')](a0_0x6768('0x14'),a0_0x6768('0x15'));app[a0_0x6768('0x16')](compression_1[a0_0x6768('0x9')]());app[a0_0x6768('0x16')](body_parser_1[a0_0x6768('0x9')][a0_0x6768('0x17')]());app[a0_0x6768('0x16')](body_parser_1[a0_0x6768('0x9')][a0_0x6768('0x18')]({'extended':!![]}));app[a0_0x6768('0x16')](express_validator_1[a0_0x6768('0x9')]());app[a0_0x6768('0x16')](express_1['default'][a0_0x6768('0x19')](path_1[a0_0x6768('0x9')][a0_0x6768('0x12')](__dirname,a0_0x6768('0x1a')),{'maxAge':0x758fac300}));app[a0_0x6768('0x1b')](a0_0x6768('0x1c'),function(_0x970ec0,_0x4ee3ce){const _0x5d3710=process[a0_0x6768('0xe')][a0_0x6768('0x1d')]+a0_0x6768('0x1e');const _0x279698=process[a0_0x6768('0xe')][a0_0x6768('0x1d')]+a0_0x6768('0x1f');const _0x4a8be9=require(a0_0x6768('0x20'));const _0x105d43=_0x4a8be9[a0_0x6768('0x21')](_0x5d3710);console[a0_0x6768('0x22')]('******************************************************');console[a0_0x6768('0x22')](_0x105d43);const _0x15399b=_0x105d43[a0_0x6768('0x23')](/^data:image\/(png|jpeg|jpg);base64,/,'');const _0x58a91e=Buffer['from'](_0x15399b,a0_0x6768('0x24'));_0x4ee3ce[a0_0x6768('0x25')](0xc8,{'Content-Type':a0_0x6768('0x26'),'Content-Length':_0x58a91e[a0_0x6768('0x27')]});_0x4ee3ce[a0_0x6768('0x28')](_0x58a91e);});app[a0_0x6768('0x1b')](a0_0x6768('0x29'),function(_0x55df59,_0x5169b4){const _0x47c3c0=require(a0_0x6768('0x20'));const _0x4dcc5d=require(a0_0x6768('0x2a'));const _0x243617=require('image-convert');const _0x5fc57e=process[a0_0x6768('0xe')][a0_0x6768('0x1d')]+'image2.jpg';const _0x3a069b=_0x47c3c0['base64Sync'](_0x5fc57e);const _0x2d8ff3=_0x3a069b[a0_0x6768('0x23')](/^data:image\/(png|jpeg|jpg);base64,/,'');const _0x4c598f=Buffer[a0_0x6768('0x2b')](_0x2d8ff3,'base64');_0x243617[a0_0x6768('0x2c')]({'buffer':_0x3a069b,'quality':0x32,'output_format':'jpg','size':a0_0x6768('0x2d')},function(_0x277651,_0x6c349b,_0x3685b2){if(!_0x277651){console['log'](_0x3685b2);_0x5169b4[a0_0x6768('0x28')](_0x6c349b);}else{_0x5169b4[a0_0x6768('0x17')]({'Error':_0x277651[a0_0x6768('0x2e')]});}});});exports[a0_0x6768('0x9')]=app;