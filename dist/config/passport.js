var a1_0x5826=['https://graph.facebook.com/','/picture?type=large','save','flash','info','There\x20is\x20already\x20an\x20account\x20using\x20this\x20email\x20address.\x20Sign\x20in\x20to\x20that\x20account\x20and\x20link\x20it\x20with\x20Facebook\x20manually\x20from\x20Account\x20Settings.','location','isAuthenticated','redirect','isAuthorized','path','slice','find','__importDefault','__esModule','passport-local','passport-facebook','lodash','../models/User','Strategy','default','serializeUser','findById','use','email','findOne','toLowerCase','Email\x20','\x20not\x20found.','comparePassword','env','FACEBOOK_ID','FACEBOOK_SECRET','name','link','timezone','user','errors','There\x20is\x20already\x20a\x20Facebook\x20account\x20that\x20belongs\x20to\x20you.\x20Sign\x20in\x20with\x20that\x20account\x20or\x20delete\x20it,\x20then\x20link\x20it\x20with\x20your\x20current\x20account.','facebook','tokens','push','profile','givenName','familyName','gender','_json','picture'];(function(_0x22895a,_0x3892f7){var _0x50ef6c=function(_0x1f53b8){while(--_0x1f53b8){_0x22895a['push'](_0x22895a['shift']());}};_0x50ef6c(++_0x3892f7);}(a1_0x5826,0x18d));var a1_0x3aa4=function(_0x2d8f05,_0x4b81bb){_0x2d8f05=_0x2d8f05-0x0;var _0x4d74cb=a1_0x5826[_0x2d8f05];return _0x4d74cb;};'use strict';var __importDefault=this&&this[a1_0x3aa4('0x0')]||function(_0x1db5a9){return _0x1db5a9&&_0x1db5a9['__esModule']?_0x1db5a9:{'default':_0x1db5a9};};Object['defineProperty'](exports,a1_0x3aa4('0x1'),{'value':!![]});const passport_1=__importDefault(require('passport'));const passport_local_1=__importDefault(require(a1_0x3aa4('0x2')));const passport_facebook_1=__importDefault(require(a1_0x3aa4('0x3')));const lodash_1=__importDefault(require(a1_0x3aa4('0x4')));const User_1=__importDefault(require(a1_0x3aa4('0x5')));const LocalStrategy=passport_local_1['default']['Strategy'];const FacebookStrategy=passport_facebook_1['default'][a1_0x3aa4('0x6')];passport_1[a1_0x3aa4('0x7')][a1_0x3aa4('0x8')]((_0x45cabb,_0xa9b812)=>{_0xa9b812(undefined,_0x45cabb['id']);});passport_1[a1_0x3aa4('0x7')]['deserializeUser']((_0x39a9e5,_0x4afecc)=>{User_1[a1_0x3aa4('0x7')][a1_0x3aa4('0x9')](_0x39a9e5,(_0x16c2e2,_0x5ea59e)=>{_0x4afecc(_0x16c2e2,_0x5ea59e);});});passport_1[a1_0x3aa4('0x7')][a1_0x3aa4('0xa')](new LocalStrategy({'usernameField':a1_0x3aa4('0xb')},(_0x25578a,_0x1d3d09,_0x3de74f)=>{User_1['default'][a1_0x3aa4('0xc')]({'email':_0x25578a[a1_0x3aa4('0xd')]()},(_0x4cea18,_0x3173cf)=>{if(_0x4cea18){return _0x3de74f(_0x4cea18);}if(!_0x3173cf){return _0x3de74f(undefined,![],{'message':a1_0x3aa4('0xe')+_0x25578a+a1_0x3aa4('0xf')});}_0x3173cf[a1_0x3aa4('0x10')](_0x1d3d09,(_0x4cea18,_0x4f258e)=>{if(_0x4cea18){return _0x3de74f(_0x4cea18);}if(_0x4f258e){return _0x3de74f(undefined,_0x3173cf);}return _0x3de74f(undefined,![],{'message':'Invalid\x20email\x20or\x20password.'});});});}));passport_1[a1_0x3aa4('0x7')][a1_0x3aa4('0xa')](new FacebookStrategy({'clientID':process[a1_0x3aa4('0x11')][a1_0x3aa4('0x12')],'clientSecret':process[a1_0x3aa4('0x11')][a1_0x3aa4('0x13')],'callbackURL':'/auth/facebook/callback','profileFields':[a1_0x3aa4('0x14'),a1_0x3aa4('0xb'),a1_0x3aa4('0x15'),'locale',a1_0x3aa4('0x16')],'passReqToCallback':!![]},(_0x471125,_0x4d4da5,_0x3fdd81,_0x1b60a0,_0x42d260)=>{if(_0x471125[a1_0x3aa4('0x17')]){User_1[a1_0x3aa4('0x7')][a1_0x3aa4('0xc')]({'facebook':_0x1b60a0['id']},(_0x364f3a,_0x40a6d8)=>{if(_0x364f3a){return _0x42d260(_0x364f3a);}if(_0x40a6d8){_0x471125['flash'](a1_0x3aa4('0x18'),{'msg':a1_0x3aa4('0x19')});_0x42d260(_0x364f3a);}else{User_1[a1_0x3aa4('0x7')][a1_0x3aa4('0x9')](_0x471125['user']['id'],(_0x364f3a,_0x2d7c62)=>{if(_0x364f3a){return _0x42d260(_0x364f3a);}_0x2d7c62[a1_0x3aa4('0x1a')]=_0x1b60a0['id'];_0x2d7c62[a1_0x3aa4('0x1b')][a1_0x3aa4('0x1c')]({'kind':a1_0x3aa4('0x1a'),'accessToken':_0x4d4da5});_0x2d7c62['profile'][a1_0x3aa4('0x14')]=_0x2d7c62[a1_0x3aa4('0x1d')][a1_0x3aa4('0x14')]||_0x1b60a0[a1_0x3aa4('0x14')][a1_0x3aa4('0x1e')]+'\x20'+_0x1b60a0[a1_0x3aa4('0x14')][a1_0x3aa4('0x1f')];_0x2d7c62['profile'][a1_0x3aa4('0x20')]=_0x2d7c62['profile'][a1_0x3aa4('0x20')]||_0x1b60a0[a1_0x3aa4('0x21')][a1_0x3aa4('0x20')];_0x2d7c62[a1_0x3aa4('0x1d')][a1_0x3aa4('0x22')]=_0x2d7c62[a1_0x3aa4('0x1d')]['picture']||a1_0x3aa4('0x23')+_0x1b60a0['id']+a1_0x3aa4('0x24');_0x2d7c62[a1_0x3aa4('0x25')](_0x364f3a=>{_0x471125[a1_0x3aa4('0x26')](a1_0x3aa4('0x27'),{'msg':'Facebook\x20account\x20has\x20been\x20linked.'});_0x42d260(_0x364f3a,_0x2d7c62);});});}});}else{User_1[a1_0x3aa4('0x7')][a1_0x3aa4('0xc')]({'facebook':_0x1b60a0['id']},(_0x4fc03b,_0x382b67)=>{if(_0x4fc03b){return _0x42d260(_0x4fc03b);}if(_0x382b67){return _0x42d260(undefined,_0x382b67);}User_1['default'][a1_0x3aa4('0xc')]({'email':_0x1b60a0[a1_0x3aa4('0x21')][a1_0x3aa4('0xb')]},(_0x4fc03b,_0xea9b0f)=>{if(_0x4fc03b){return _0x42d260(_0x4fc03b);}if(_0xea9b0f){_0x471125[a1_0x3aa4('0x26')]('errors',{'msg':a1_0x3aa4('0x28')});_0x42d260(_0x4fc03b);}else{const _0x22ab94=new User_1[(a1_0x3aa4('0x7'))]();_0x22ab94[a1_0x3aa4('0xb')]=_0x1b60a0[a1_0x3aa4('0x21')][a1_0x3aa4('0xb')];_0x22ab94[a1_0x3aa4('0x1a')]=_0x1b60a0['id'];_0x22ab94[a1_0x3aa4('0x1b')]['push']({'kind':'facebook','accessToken':_0x4d4da5});_0x22ab94[a1_0x3aa4('0x1d')][a1_0x3aa4('0x14')]=_0x1b60a0[a1_0x3aa4('0x14')]['givenName']+'\x20'+_0x1b60a0[a1_0x3aa4('0x14')]['familyName'];_0x22ab94[a1_0x3aa4('0x1d')][a1_0x3aa4('0x20')]=_0x1b60a0[a1_0x3aa4('0x21')][a1_0x3aa4('0x20')];_0x22ab94['profile']['picture']='https://graph.facebook.com/'+_0x1b60a0['id']+a1_0x3aa4('0x24');_0x22ab94['profile']['location']=_0x1b60a0['_json']['location']?_0x1b60a0[a1_0x3aa4('0x21')][a1_0x3aa4('0x29')][a1_0x3aa4('0x14')]:'';_0x22ab94[a1_0x3aa4('0x25')](_0x4fc03b=>{_0x42d260(_0x4fc03b,_0x22ab94);});}});});}}));exports[a1_0x3aa4('0x2a')]=(_0x10ec15,_0x322498,_0x578e36)=>{if(_0x10ec15[a1_0x3aa4('0x2a')]()){return _0x578e36();}_0x322498[a1_0x3aa4('0x2b')]('/login');};exports[a1_0x3aa4('0x2c')]=(_0x5be779,_0x4bdcae,_0x1437f3)=>{const _0x307897=_0x5be779[a1_0x3aa4('0x2d')]['split']('/')[a1_0x3aa4('0x2e')](-0x1)[0x0];if(lodash_1[a1_0x3aa4('0x7')][a1_0x3aa4('0x2f')](_0x5be779[a1_0x3aa4('0x17')][a1_0x3aa4('0x1b')],{'kind':_0x307897})){_0x1437f3();}else{_0x4bdcae[a1_0x3aa4('0x2b')]('/auth/'+_0x307897);}};