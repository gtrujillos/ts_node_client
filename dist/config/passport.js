var a1_0x2e01=['toLowerCase','\x20not\x20found.','comparePassword','Invalid\x20email\x20or\x20password.','use','env','FACEBOOK_ID','FACEBOOK_SECRET','/auth/facebook/callback','name','locale','user','errors','There\x20is\x20already\x20a\x20Facebook\x20account\x20that\x20belongs\x20to\x20you.\x20Sign\x20in\x20with\x20that\x20account\x20or\x20delete\x20it,\x20then\x20link\x20it\x20with\x20your\x20current\x20account.','tokens','push','facebook','profile','givenName','familyName','gender','picture','https://graph.facebook.com/','/picture?type=large','save','flash','Facebook\x20account\x20has\x20been\x20linked.','_json','There\x20is\x20already\x20an\x20account\x20using\x20this\x20email\x20address.\x20Sign\x20in\x20to\x20that\x20account\x20and\x20link\x20it\x20with\x20Facebook\x20manually\x20from\x20Account\x20Settings.','location','isAuthenticated','redirect','/login','isAuthorized','path','slice','find','__importDefault','__esModule','defineProperty','passport','lodash','default','Strategy','serializeUser','deserializeUser','findById','email','findOne'];(function(_0x2c5d5c,_0x4591a9){var _0x562d7e=function(_0x14cdae){while(--_0x14cdae){_0x2c5d5c['push'](_0x2c5d5c['shift']());}};_0x562d7e(++_0x4591a9);}(a1_0x2e01,0x14b));var a1_0xc3c1=function(_0x4d4026,_0x4be87e){_0x4d4026=_0x4d4026-0x0;var _0x5bb09b=a1_0x2e01[_0x4d4026];return _0x5bb09b;};'use strict';var __importDefault=this&&this[a1_0xc3c1('0x0')]||function(_0x9150a9){return _0x9150a9&&_0x9150a9[a1_0xc3c1('0x1')]?_0x9150a9:{'default':_0x9150a9};};Object[a1_0xc3c1('0x2')](exports,'__esModule',{'value':!![]});const passport_1=__importDefault(require(a1_0xc3c1('0x3')));const passport_local_1=__importDefault(require('passport-local'));const passport_facebook_1=__importDefault(require('passport-facebook'));const lodash_1=__importDefault(require(a1_0xc3c1('0x4')));const User_1=__importDefault(require('../models/User'));const LocalStrategy=passport_local_1[a1_0xc3c1('0x5')][a1_0xc3c1('0x6')];const FacebookStrategy=passport_facebook_1[a1_0xc3c1('0x5')][a1_0xc3c1('0x6')];passport_1[a1_0xc3c1('0x5')][a1_0xc3c1('0x7')]((_0x1c4f42,_0x3c7ef8)=>{_0x3c7ef8(undefined,_0x1c4f42['id']);});passport_1[a1_0xc3c1('0x5')][a1_0xc3c1('0x8')]((_0x5db90b,_0x28d60e)=>{User_1[a1_0xc3c1('0x5')][a1_0xc3c1('0x9')](_0x5db90b,(_0x3d1629,_0x329641)=>{_0x28d60e(_0x3d1629,_0x329641);});});passport_1['default']['use'](new LocalStrategy({'usernameField':a1_0xc3c1('0xa')},(_0x1c4b7b,_0x5ced73,_0x28b08b)=>{User_1[a1_0xc3c1('0x5')][a1_0xc3c1('0xb')]({'email':_0x1c4b7b[a1_0xc3c1('0xc')]()},(_0x5b9581,_0x143add)=>{if(_0x5b9581){return _0x28b08b(_0x5b9581);}if(!_0x143add){return _0x28b08b(undefined,![],{'message':'Email\x20'+_0x1c4b7b+a1_0xc3c1('0xd')});}_0x143add[a1_0xc3c1('0xe')](_0x5ced73,(_0x5b9581,_0x2ef544)=>{if(_0x5b9581){return _0x28b08b(_0x5b9581);}if(_0x2ef544){return _0x28b08b(undefined,_0x143add);}return _0x28b08b(undefined,![],{'message':a1_0xc3c1('0xf')});});});}));passport_1[a1_0xc3c1('0x5')][a1_0xc3c1('0x10')](new FacebookStrategy({'clientID':process[a1_0xc3c1('0x11')][a1_0xc3c1('0x12')],'clientSecret':process['env'][a1_0xc3c1('0x13')],'callbackURL':a1_0xc3c1('0x14'),'profileFields':[a1_0xc3c1('0x15'),a1_0xc3c1('0xa'),'link',a1_0xc3c1('0x16'),'timezone'],'passReqToCallback':!![]},(_0xadbc60,_0x5664e9,_0x1cba0e,_0x35a7b6,_0x272bda)=>{if(_0xadbc60[a1_0xc3c1('0x17')]){User_1[a1_0xc3c1('0x5')]['findOne']({'facebook':_0x35a7b6['id']},(_0x134917,_0x55a6eb)=>{if(_0x134917){return _0x272bda(_0x134917);}if(_0x55a6eb){_0xadbc60['flash'](a1_0xc3c1('0x18'),{'msg':a1_0xc3c1('0x19')});_0x272bda(_0x134917);}else{User_1[a1_0xc3c1('0x5')][a1_0xc3c1('0x9')](_0xadbc60[a1_0xc3c1('0x17')]['id'],(_0x134917,_0x4431a4)=>{if(_0x134917){return _0x272bda(_0x134917);}_0x4431a4['facebook']=_0x35a7b6['id'];_0x4431a4[a1_0xc3c1('0x1a')][a1_0xc3c1('0x1b')]({'kind':a1_0xc3c1('0x1c'),'accessToken':_0x5664e9});_0x4431a4[a1_0xc3c1('0x1d')][a1_0xc3c1('0x15')]=_0x4431a4[a1_0xc3c1('0x1d')][a1_0xc3c1('0x15')]||_0x35a7b6[a1_0xc3c1('0x15')][a1_0xc3c1('0x1e')]+'\x20'+_0x35a7b6[a1_0xc3c1('0x15')][a1_0xc3c1('0x1f')];_0x4431a4[a1_0xc3c1('0x1d')]['gender']=_0x4431a4['profile'][a1_0xc3c1('0x20')]||_0x35a7b6['_json']['gender'];_0x4431a4[a1_0xc3c1('0x1d')][a1_0xc3c1('0x21')]=_0x4431a4['profile'][a1_0xc3c1('0x21')]||a1_0xc3c1('0x22')+_0x35a7b6['id']+a1_0xc3c1('0x23');_0x4431a4[a1_0xc3c1('0x24')](_0x134917=>{_0xadbc60[a1_0xc3c1('0x25')]('info',{'msg':a1_0xc3c1('0x26')});_0x272bda(_0x134917,_0x4431a4);});});}});}else{User_1['default'][a1_0xc3c1('0xb')]({'facebook':_0x35a7b6['id']},(_0x53dd7d,_0x41a25a)=>{if(_0x53dd7d){return _0x272bda(_0x53dd7d);}if(_0x41a25a){return _0x272bda(undefined,_0x41a25a);}User_1['default'][a1_0xc3c1('0xb')]({'email':_0x35a7b6[a1_0xc3c1('0x27')][a1_0xc3c1('0xa')]},(_0x53dd7d,_0x2b336b)=>{if(_0x53dd7d){return _0x272bda(_0x53dd7d);}if(_0x2b336b){_0xadbc60['flash'](a1_0xc3c1('0x18'),{'msg':a1_0xc3c1('0x28')});_0x272bda(_0x53dd7d);}else{const _0x320b59=new User_1['default']();_0x320b59[a1_0xc3c1('0xa')]=_0x35a7b6[a1_0xc3c1('0x27')][a1_0xc3c1('0xa')];_0x320b59[a1_0xc3c1('0x1c')]=_0x35a7b6['id'];_0x320b59[a1_0xc3c1('0x1a')][a1_0xc3c1('0x1b')]({'kind':'facebook','accessToken':_0x5664e9});_0x320b59[a1_0xc3c1('0x1d')][a1_0xc3c1('0x15')]=_0x35a7b6[a1_0xc3c1('0x15')][a1_0xc3c1('0x1e')]+'\x20'+_0x35a7b6[a1_0xc3c1('0x15')][a1_0xc3c1('0x1f')];_0x320b59[a1_0xc3c1('0x1d')][a1_0xc3c1('0x20')]=_0x35a7b6['_json'][a1_0xc3c1('0x20')];_0x320b59[a1_0xc3c1('0x1d')]['picture']=a1_0xc3c1('0x22')+_0x35a7b6['id']+a1_0xc3c1('0x23');_0x320b59[a1_0xc3c1('0x1d')][a1_0xc3c1('0x29')]=_0x35a7b6[a1_0xc3c1('0x27')]['location']?_0x35a7b6[a1_0xc3c1('0x27')][a1_0xc3c1('0x29')]['name']:'';_0x320b59[a1_0xc3c1('0x24')](_0x53dd7d=>{_0x272bda(_0x53dd7d,_0x320b59);});}});});}}));exports['isAuthenticated']=(_0x59282d,_0x3b4e9c,_0xd26722)=>{if(_0x59282d[a1_0xc3c1('0x2a')]()){return _0xd26722();}_0x3b4e9c[a1_0xc3c1('0x2b')](a1_0xc3c1('0x2c'));};exports[a1_0xc3c1('0x2d')]=(_0x3077dd,_0x265321,_0x4c521c)=>{const _0x1cfea8=_0x3077dd[a1_0xc3c1('0x2e')]['split']('/')[a1_0xc3c1('0x2f')](-0x1)[0x0];if(lodash_1['default'][a1_0xc3c1('0x30')](_0x3077dd[a1_0xc3c1('0x17')][a1_0xc3c1('0x1a')],{'kind':_0x1cfea8})){_0x4c521c();}else{_0x265321[a1_0xc3c1('0x2b')]('/auth/'+_0x1cfea8);}};