var a1_0x5a07=['/auth/facebook/callback','name','locale','timezone','user','flash','errors','There\x20is\x20already\x20a\x20Facebook\x20account\x20that\x20belongs\x20to\x20you.\x20Sign\x20in\x20with\x20that\x20account\x20or\x20delete\x20it,\x20then\x20link\x20it\x20with\x20your\x20current\x20account.','facebook','tokens','push','profile','familyName','gender','_json','picture','https://graph.facebook.com/','/picture?type=large','save','info','Facebook\x20account\x20has\x20been\x20linked.','There\x20is\x20already\x20an\x20account\x20using\x20this\x20email\x20address.\x20Sign\x20in\x20to\x20that\x20account\x20and\x20link\x20it\x20with\x20Facebook\x20manually\x20from\x20Account\x20Settings.','location','isAuthenticated','find','redirect','__importDefault','__esModule','defineProperty','passport','passport-local','../models/User','serializeUser','default','deserializeUser','findById','use','email','findOne','Email\x20','\x20not\x20found.','comparePassword','Invalid\x20email\x20or\x20password.','env','FACEBOOK_SECRET'];(function(_0x64ae5b,_0x1f53ce){var _0x49edf5=function(_0x1fe7c3){while(--_0x1fe7c3){_0x64ae5b['push'](_0x64ae5b['shift']());}};_0x49edf5(++_0x1f53ce);}(a1_0x5a07,0x74));var a1_0x560c=function(_0x1de7c8,_0x3d059b){_0x1de7c8=_0x1de7c8-0x0;var _0x5b6b44=a1_0x5a07[_0x1de7c8];return _0x5b6b44;};'use strict';var __importDefault=this&&this[a1_0x560c('0x0')]||function(_0x3cb52a){return _0x3cb52a&&_0x3cb52a[a1_0x560c('0x1')]?_0x3cb52a:{'default':_0x3cb52a};};Object[a1_0x560c('0x2')](exports,a1_0x560c('0x1'),{'value':!![]});const passport_1=__importDefault(require(a1_0x560c('0x3')));const passport_local_1=__importDefault(require(a1_0x560c('0x4')));const passport_facebook_1=__importDefault(require('passport-facebook'));const lodash_1=__importDefault(require('lodash'));const User_1=__importDefault(require(a1_0x560c('0x5')));const LocalStrategy=passport_local_1['default']['Strategy'];const FacebookStrategy=passport_facebook_1['default']['Strategy'];passport_1['default'][a1_0x560c('0x6')]((_0x492497,_0x1a2d5a)=>{_0x1a2d5a(undefined,_0x492497['id']);});passport_1[a1_0x560c('0x7')][a1_0x560c('0x8')]((_0x397f2e,_0x5404aa)=>{User_1['default'][a1_0x560c('0x9')](_0x397f2e,(_0xb6ec8,_0x5b407b)=>{_0x5404aa(_0xb6ec8,_0x5b407b);});});passport_1['default'][a1_0x560c('0xa')](new LocalStrategy({'usernameField':a1_0x560c('0xb')},(_0x18a5bd,_0x343c51,_0x4387f6)=>{User_1[a1_0x560c('0x7')][a1_0x560c('0xc')]({'email':_0x18a5bd['toLowerCase']()},(_0x1a00ef,_0x3ee1ac)=>{if(_0x1a00ef){return _0x4387f6(_0x1a00ef);}if(!_0x3ee1ac){return _0x4387f6(undefined,![],{'message':a1_0x560c('0xd')+_0x18a5bd+a1_0x560c('0xe')});}_0x3ee1ac[a1_0x560c('0xf')](_0x343c51,(_0x1a00ef,_0x5e64e0)=>{if(_0x1a00ef){return _0x4387f6(_0x1a00ef);}if(_0x5e64e0){return _0x4387f6(undefined,_0x3ee1ac);}return _0x4387f6(undefined,![],{'message':a1_0x560c('0x10')});});});}));passport_1[a1_0x560c('0x7')][a1_0x560c('0xa')](new FacebookStrategy({'clientID':process[a1_0x560c('0x11')]['FACEBOOK_ID'],'clientSecret':process[a1_0x560c('0x11')][a1_0x560c('0x12')],'callbackURL':a1_0x560c('0x13'),'profileFields':[a1_0x560c('0x14'),a1_0x560c('0xb'),'link',a1_0x560c('0x15'),a1_0x560c('0x16')],'passReqToCallback':!![]},(_0xa0c63,_0x3345e3,_0x48a355,_0xb9187,_0x5774cb)=>{if(_0xa0c63[a1_0x560c('0x17')]){User_1[a1_0x560c('0x7')][a1_0x560c('0xc')]({'facebook':_0xb9187['id']},(_0x165791,_0x479ddd)=>{if(_0x165791){return _0x5774cb(_0x165791);}if(_0x479ddd){_0xa0c63[a1_0x560c('0x18')](a1_0x560c('0x19'),{'msg':a1_0x560c('0x1a')});_0x5774cb(_0x165791);}else{User_1['default'][a1_0x560c('0x9')](_0xa0c63[a1_0x560c('0x17')]['id'],(_0x165791,_0x208da2)=>{if(_0x165791){return _0x5774cb(_0x165791);}_0x208da2[a1_0x560c('0x1b')]=_0xb9187['id'];_0x208da2[a1_0x560c('0x1c')][a1_0x560c('0x1d')]({'kind':a1_0x560c('0x1b'),'accessToken':_0x3345e3});_0x208da2['profile'][a1_0x560c('0x14')]=_0x208da2[a1_0x560c('0x1e')][a1_0x560c('0x14')]||_0xb9187[a1_0x560c('0x14')]['givenName']+'\x20'+_0xb9187[a1_0x560c('0x14')][a1_0x560c('0x1f')];_0x208da2[a1_0x560c('0x1e')][a1_0x560c('0x20')]=_0x208da2['profile'][a1_0x560c('0x20')]||_0xb9187[a1_0x560c('0x21')]['gender'];_0x208da2[a1_0x560c('0x1e')][a1_0x560c('0x22')]=_0x208da2[a1_0x560c('0x1e')][a1_0x560c('0x22')]||a1_0x560c('0x23')+_0xb9187['id']+a1_0x560c('0x24');_0x208da2[a1_0x560c('0x25')](_0x165791=>{_0xa0c63['flash'](a1_0x560c('0x26'),{'msg':a1_0x560c('0x27')});_0x5774cb(_0x165791,_0x208da2);});});}});}else{User_1[a1_0x560c('0x7')][a1_0x560c('0xc')]({'facebook':_0xb9187['id']},(_0x4396af,_0x15f59f)=>{if(_0x4396af){return _0x5774cb(_0x4396af);}if(_0x15f59f){return _0x5774cb(undefined,_0x15f59f);}User_1[a1_0x560c('0x7')][a1_0x560c('0xc')]({'email':_0xb9187[a1_0x560c('0x21')][a1_0x560c('0xb')]},(_0x4396af,_0x23a78a)=>{if(_0x4396af){return _0x5774cb(_0x4396af);}if(_0x23a78a){_0xa0c63[a1_0x560c('0x18')]('errors',{'msg':a1_0x560c('0x28')});_0x5774cb(_0x4396af);}else{const _0x208d26=new User_1[(a1_0x560c('0x7'))]();_0x208d26[a1_0x560c('0xb')]=_0xb9187['_json'][a1_0x560c('0xb')];_0x208d26[a1_0x560c('0x1b')]=_0xb9187['id'];_0x208d26[a1_0x560c('0x1c')][a1_0x560c('0x1d')]({'kind':a1_0x560c('0x1b'),'accessToken':_0x3345e3});_0x208d26[a1_0x560c('0x1e')][a1_0x560c('0x14')]=_0xb9187[a1_0x560c('0x14')]['givenName']+'\x20'+_0xb9187['name'][a1_0x560c('0x1f')];_0x208d26[a1_0x560c('0x1e')][a1_0x560c('0x20')]=_0xb9187['_json'][a1_0x560c('0x20')];_0x208d26[a1_0x560c('0x1e')][a1_0x560c('0x22')]='https://graph.facebook.com/'+_0xb9187['id']+a1_0x560c('0x24');_0x208d26['profile']['location']=_0xb9187[a1_0x560c('0x21')][a1_0x560c('0x29')]?_0xb9187[a1_0x560c('0x21')][a1_0x560c('0x29')][a1_0x560c('0x14')]:'';_0x208d26[a1_0x560c('0x25')](_0x4396af=>{_0x5774cb(_0x4396af,_0x208d26);});}});});}}));exports[a1_0x560c('0x2a')]=(_0x2bb7d4,_0x18f44d,_0x32ab27)=>{if(_0x2bb7d4[a1_0x560c('0x2a')]()){return _0x32ab27();}_0x18f44d['redirect']('/login');};exports['isAuthorized']=(_0x37e385,_0x505fda,_0x17ed71)=>{const _0x129ec1=_0x37e385['path']['split']('/')['slice'](-0x1)[0x0];if(lodash_1[a1_0x560c('0x7')][a1_0x560c('0x2b')](_0x37e385['user'][a1_0x560c('0x1c')],{'kind':_0x129ec1})){_0x17ed71();}else{_0x505fda[a1_0x560c('0x2c')]('/auth/'+_0x129ec1);}};