var a1_0x383b=['/login','isAuthorized','path','split','slice','user','/auth/','__importDefault','__esModule','defineProperty','passport','passport-local','passport-facebook','lodash','../models/User','default','Strategy','serializeUser','deserializeUser','findById','use','email','findOne','toLowerCase','Email\x20','\x20not\x20found.','comparePassword','Invalid\x20email\x20or\x20password.','env','FACEBOOK_SECRET','/auth/facebook/callback','link','There\x20is\x20already\x20a\x20Facebook\x20account\x20that\x20belongs\x20to\x20you.\x20Sign\x20in\x20with\x20that\x20account\x20or\x20delete\x20it,\x20then\x20link\x20it\x20with\x20your\x20current\x20account.','facebook','tokens','push','profile','name','givenName','familyName','gender','_json','picture','https://graph.facebook.com/','save','flash','errors','/picture?type=large','location','isAuthenticated','redirect'];(function(_0x5a0489,_0x4fab7f){var _0x2200ee=function(_0x182b4c){while(--_0x182b4c){_0x5a0489['push'](_0x5a0489['shift']());}};_0x2200ee(++_0x4fab7f);}(a1_0x383b,0x6d));var a1_0x47be=function(_0x242ecc,_0x528af0){_0x242ecc=_0x242ecc-0x0;var _0x1e1be8=a1_0x383b[_0x242ecc];return _0x1e1be8;};'use strict';var __importDefault=this&&this[a1_0x47be('0x0')]||function(_0x1edbff){return _0x1edbff&&_0x1edbff[a1_0x47be('0x1')]?_0x1edbff:{'default':_0x1edbff};};Object[a1_0x47be('0x2')](exports,a1_0x47be('0x1'),{'value':!![]});const passport_1=__importDefault(require(a1_0x47be('0x3')));const passport_local_1=__importDefault(require(a1_0x47be('0x4')));const passport_facebook_1=__importDefault(require(a1_0x47be('0x5')));const lodash_1=__importDefault(require(a1_0x47be('0x6')));const User_1=__importDefault(require(a1_0x47be('0x7')));const LocalStrategy=passport_local_1[a1_0x47be('0x8')][a1_0x47be('0x9')];const FacebookStrategy=passport_facebook_1[a1_0x47be('0x8')][a1_0x47be('0x9')];passport_1[a1_0x47be('0x8')][a1_0x47be('0xa')]((_0x4f49b5,_0xb92a81)=>{_0xb92a81(undefined,_0x4f49b5['id']);});passport_1[a1_0x47be('0x8')][a1_0x47be('0xb')]((_0xa08043,_0x5cfbf5)=>{User_1[a1_0x47be('0x8')][a1_0x47be('0xc')](_0xa08043,(_0x24f54c,_0x28cf87)=>{_0x5cfbf5(_0x24f54c,_0x28cf87);});});passport_1['default'][a1_0x47be('0xd')](new LocalStrategy({'usernameField':a1_0x47be('0xe')},(_0x1aa608,_0x43c759,_0x5f5d84)=>{User_1[a1_0x47be('0x8')][a1_0x47be('0xf')]({'email':_0x1aa608[a1_0x47be('0x10')]()},(_0x1cf838,_0x5a09d6)=>{if(_0x1cf838){return _0x5f5d84(_0x1cf838);}if(!_0x5a09d6){return _0x5f5d84(undefined,![],{'message':a1_0x47be('0x11')+_0x1aa608+a1_0x47be('0x12')});}_0x5a09d6[a1_0x47be('0x13')](_0x43c759,(_0x1cf838,_0x1f0021)=>{if(_0x1cf838){return _0x5f5d84(_0x1cf838);}if(_0x1f0021){return _0x5f5d84(undefined,_0x5a09d6);}return _0x5f5d84(undefined,![],{'message':a1_0x47be('0x14')});});});}));passport_1[a1_0x47be('0x8')][a1_0x47be('0xd')](new FacebookStrategy({'clientID':process[a1_0x47be('0x15')]['FACEBOOK_ID'],'clientSecret':process[a1_0x47be('0x15')][a1_0x47be('0x16')],'callbackURL':a1_0x47be('0x17'),'profileFields':['name','email',a1_0x47be('0x18'),'locale','timezone'],'passReqToCallback':!![]},(_0x5f3e7f,_0x5979b9,_0x2b826f,_0x433ddf,_0x2409e4)=>{if(_0x5f3e7f['user']){User_1[a1_0x47be('0x8')][a1_0x47be('0xf')]({'facebook':_0x433ddf['id']},(_0x1aac40,_0x4c4c55)=>{if(_0x1aac40){return _0x2409e4(_0x1aac40);}if(_0x4c4c55){_0x5f3e7f['flash']('errors',{'msg':a1_0x47be('0x19')});_0x2409e4(_0x1aac40);}else{User_1['default'][a1_0x47be('0xc')](_0x5f3e7f['user']['id'],(_0x1aac40,_0x19c3ca)=>{if(_0x1aac40){return _0x2409e4(_0x1aac40);}_0x19c3ca[a1_0x47be('0x1a')]=_0x433ddf['id'];_0x19c3ca[a1_0x47be('0x1b')][a1_0x47be('0x1c')]({'kind':'facebook','accessToken':_0x5979b9});_0x19c3ca[a1_0x47be('0x1d')]['name']=_0x19c3ca[a1_0x47be('0x1d')][a1_0x47be('0x1e')]||_0x433ddf[a1_0x47be('0x1e')][a1_0x47be('0x1f')]+'\x20'+_0x433ddf[a1_0x47be('0x1e')][a1_0x47be('0x20')];_0x19c3ca['profile']['gender']=_0x19c3ca[a1_0x47be('0x1d')][a1_0x47be('0x21')]||_0x433ddf[a1_0x47be('0x22')]['gender'];_0x19c3ca[a1_0x47be('0x1d')][a1_0x47be('0x23')]=_0x19c3ca[a1_0x47be('0x1d')]['picture']||a1_0x47be('0x24')+_0x433ddf['id']+'/picture?type=large';_0x19c3ca[a1_0x47be('0x25')](_0x1aac40=>{_0x5f3e7f['flash']('info',{'msg':'Facebook\x20account\x20has\x20been\x20linked.'});_0x2409e4(_0x1aac40,_0x19c3ca);});});}});}else{User_1[a1_0x47be('0x8')]['findOne']({'facebook':_0x433ddf['id']},(_0xed9c4e,_0x3f715e)=>{if(_0xed9c4e){return _0x2409e4(_0xed9c4e);}if(_0x3f715e){return _0x2409e4(undefined,_0x3f715e);}User_1[a1_0x47be('0x8')]['findOne']({'email':_0x433ddf[a1_0x47be('0x22')][a1_0x47be('0xe')]},(_0xed9c4e,_0x4c3965)=>{if(_0xed9c4e){return _0x2409e4(_0xed9c4e);}if(_0x4c3965){_0x5f3e7f[a1_0x47be('0x26')](a1_0x47be('0x27'),{'msg':'There\x20is\x20already\x20an\x20account\x20using\x20this\x20email\x20address.\x20Sign\x20in\x20to\x20that\x20account\x20and\x20link\x20it\x20with\x20Facebook\x20manually\x20from\x20Account\x20Settings.'});_0x2409e4(_0xed9c4e);}else{const _0x3edb49=new User_1[(a1_0x47be('0x8'))]();_0x3edb49[a1_0x47be('0xe')]=_0x433ddf[a1_0x47be('0x22')]['email'];_0x3edb49[a1_0x47be('0x1a')]=_0x433ddf['id'];_0x3edb49[a1_0x47be('0x1b')]['push']({'kind':a1_0x47be('0x1a'),'accessToken':_0x5979b9});_0x3edb49[a1_0x47be('0x1d')]['name']=_0x433ddf[a1_0x47be('0x1e')][a1_0x47be('0x1f')]+'\x20'+_0x433ddf['name'][a1_0x47be('0x20')];_0x3edb49['profile']['gender']=_0x433ddf['_json'][a1_0x47be('0x21')];_0x3edb49[a1_0x47be('0x1d')][a1_0x47be('0x23')]=a1_0x47be('0x24')+_0x433ddf['id']+a1_0x47be('0x28');_0x3edb49['profile'][a1_0x47be('0x29')]=_0x433ddf['_json'][a1_0x47be('0x29')]?_0x433ddf['_json'][a1_0x47be('0x29')][a1_0x47be('0x1e')]:'';_0x3edb49[a1_0x47be('0x25')](_0xed9c4e=>{_0x2409e4(_0xed9c4e,_0x3edb49);});}});});}}));exports[a1_0x47be('0x2a')]=(_0x3a2bc2,_0x529403,_0xafa52a)=>{if(_0x3a2bc2[a1_0x47be('0x2a')]()){return _0xafa52a();}_0x529403[a1_0x47be('0x2b')](a1_0x47be('0x2c'));};exports[a1_0x47be('0x2d')]=(_0x44a2b6,_0x34e888,_0x369f76)=>{const _0x388337=_0x44a2b6[a1_0x47be('0x2e')][a1_0x47be('0x2f')]('/')[a1_0x47be('0x30')](-0x1)[0x0];if(lodash_1[a1_0x47be('0x8')]['find'](_0x44a2b6[a1_0x47be('0x31')]['tokens'],{'kind':_0x388337})){_0x369f76();}else{_0x34e888[a1_0x47be('0x2b')](a1_0x47be('0x32')+_0x388337);}};