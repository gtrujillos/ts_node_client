var a1_0x1cf4=['passport-facebook','lodash','../models/User','Strategy','default','serializeUser','findById','use','email','findOne','toLowerCase','Email\x20','\x20not\x20found.','comparePassword','Invalid\x20email\x20or\x20password.','env','/auth/facebook/callback','name','link','timezone','user','errors','tokens','facebook','profile','givenName','familyName','gender','_json','picture','https://graph.facebook.com/','/picture?type=large','Facebook\x20account\x20has\x20been\x20linked.','flash','push','location','save','isAuthenticated','redirect','/login','isAuthorized','path','split','slice','find','__importDefault','__esModule','defineProperty','passport','passport-local'];(function(_0x26ebb5,_0x221300){var _0x19c911=function(_0x467387){while(--_0x467387){_0x26ebb5['push'](_0x26ebb5['shift']());}};_0x19c911(++_0x221300);}(a1_0x1cf4,0x18b));var a1_0x1f55=function(_0x2f6c26,_0x27a5b0){_0x2f6c26=_0x2f6c26-0x0;var _0xc25ab0=a1_0x1cf4[_0x2f6c26];return _0xc25ab0;};'use strict';var __importDefault=this&&this[a1_0x1f55('0x0')]||function(_0x38acac){return _0x38acac&&_0x38acac[a1_0x1f55('0x1')]?_0x38acac:{'default':_0x38acac};};Object[a1_0x1f55('0x2')](exports,a1_0x1f55('0x1'),{'value':!![]});const passport_1=__importDefault(require(a1_0x1f55('0x3')));const passport_local_1=__importDefault(require(a1_0x1f55('0x4')));const passport_facebook_1=__importDefault(require(a1_0x1f55('0x5')));const lodash_1=__importDefault(require(a1_0x1f55('0x6')));const User_1=__importDefault(require(a1_0x1f55('0x7')));const LocalStrategy=passport_local_1['default'][a1_0x1f55('0x8')];const FacebookStrategy=passport_facebook_1[a1_0x1f55('0x9')][a1_0x1f55('0x8')];passport_1['default'][a1_0x1f55('0xa')]((_0x41c0f1,_0x44aaf8)=>{_0x44aaf8(undefined,_0x41c0f1['id']);});passport_1[a1_0x1f55('0x9')]['deserializeUser']((_0x5bb3cd,_0xa7c63e)=>{User_1[a1_0x1f55('0x9')][a1_0x1f55('0xb')](_0x5bb3cd,(_0x3ec1cf,_0x24bd09)=>{_0xa7c63e(_0x3ec1cf,_0x24bd09);});});passport_1[a1_0x1f55('0x9')][a1_0x1f55('0xc')](new LocalStrategy({'usernameField':a1_0x1f55('0xd')},(_0x4ab520,_0x7e6b05,_0x5507af)=>{User_1[a1_0x1f55('0x9')][a1_0x1f55('0xe')]({'email':_0x4ab520[a1_0x1f55('0xf')]()},(_0x40ef60,_0x4aefd0)=>{if(_0x40ef60){return _0x5507af(_0x40ef60);}if(!_0x4aefd0){return _0x5507af(undefined,![],{'message':a1_0x1f55('0x10')+_0x4ab520+a1_0x1f55('0x11')});}_0x4aefd0[a1_0x1f55('0x12')](_0x7e6b05,(_0x40ef60,_0x128f1d)=>{if(_0x40ef60){return _0x5507af(_0x40ef60);}if(_0x128f1d){return _0x5507af(undefined,_0x4aefd0);}return _0x5507af(undefined,![],{'message':a1_0x1f55('0x13')});});});}));passport_1[a1_0x1f55('0x9')]['use'](new FacebookStrategy({'clientID':process[a1_0x1f55('0x14')]['FACEBOOK_ID'],'clientSecret':process[a1_0x1f55('0x14')]['FACEBOOK_SECRET'],'callbackURL':a1_0x1f55('0x15'),'profileFields':[a1_0x1f55('0x16'),a1_0x1f55('0xd'),a1_0x1f55('0x17'),'locale',a1_0x1f55('0x18')],'passReqToCallback':!![]},(_0x6a4588,_0x33294f,_0x49d172,_0x1f6f4d,_0x14caaf)=>{if(_0x6a4588[a1_0x1f55('0x19')]){User_1[a1_0x1f55('0x9')]['findOne']({'facebook':_0x1f6f4d['id']},(_0x36ddff,_0x5730c8)=>{if(_0x36ddff){return _0x14caaf(_0x36ddff);}if(_0x5730c8){_0x6a4588['flash'](a1_0x1f55('0x1a'),{'msg':'There\x20is\x20already\x20a\x20Facebook\x20account\x20that\x20belongs\x20to\x20you.\x20Sign\x20in\x20with\x20that\x20account\x20or\x20delete\x20it,\x20then\x20link\x20it\x20with\x20your\x20current\x20account.'});_0x14caaf(_0x36ddff);}else{User_1[a1_0x1f55('0x9')][a1_0x1f55('0xb')](_0x6a4588[a1_0x1f55('0x19')]['id'],(_0x36ddff,_0x4a8de1)=>{if(_0x36ddff){return _0x14caaf(_0x36ddff);}_0x4a8de1['facebook']=_0x1f6f4d['id'];_0x4a8de1[a1_0x1f55('0x1b')]['push']({'kind':a1_0x1f55('0x1c'),'accessToken':_0x33294f});_0x4a8de1[a1_0x1f55('0x1d')][a1_0x1f55('0x16')]=_0x4a8de1[a1_0x1f55('0x1d')][a1_0x1f55('0x16')]||_0x1f6f4d[a1_0x1f55('0x16')][a1_0x1f55('0x1e')]+'\x20'+_0x1f6f4d[a1_0x1f55('0x16')][a1_0x1f55('0x1f')];_0x4a8de1['profile'][a1_0x1f55('0x20')]=_0x4a8de1['profile']['gender']||_0x1f6f4d[a1_0x1f55('0x21')][a1_0x1f55('0x20')];_0x4a8de1['profile'][a1_0x1f55('0x22')]=_0x4a8de1[a1_0x1f55('0x1d')][a1_0x1f55('0x22')]||a1_0x1f55('0x23')+_0x1f6f4d['id']+a1_0x1f55('0x24');_0x4a8de1['save'](_0x36ddff=>{_0x6a4588['flash']('info',{'msg':a1_0x1f55('0x25')});_0x14caaf(_0x36ddff,_0x4a8de1);});});}});}else{User_1[a1_0x1f55('0x9')][a1_0x1f55('0xe')]({'facebook':_0x1f6f4d['id']},(_0x1356c4,_0x26b8cc)=>{if(_0x1356c4){return _0x14caaf(_0x1356c4);}if(_0x26b8cc){return _0x14caaf(undefined,_0x26b8cc);}User_1[a1_0x1f55('0x9')][a1_0x1f55('0xe')]({'email':_0x1f6f4d[a1_0x1f55('0x21')][a1_0x1f55('0xd')]},(_0x1356c4,_0x1f8bd7)=>{if(_0x1356c4){return _0x14caaf(_0x1356c4);}if(_0x1f8bd7){_0x6a4588[a1_0x1f55('0x26')]('errors',{'msg':'There\x20is\x20already\x20an\x20account\x20using\x20this\x20email\x20address.\x20Sign\x20in\x20to\x20that\x20account\x20and\x20link\x20it\x20with\x20Facebook\x20manually\x20from\x20Account\x20Settings.'});_0x14caaf(_0x1356c4);}else{const _0x43c0f6=new User_1[(a1_0x1f55('0x9'))]();_0x43c0f6[a1_0x1f55('0xd')]=_0x1f6f4d[a1_0x1f55('0x21')][a1_0x1f55('0xd')];_0x43c0f6['facebook']=_0x1f6f4d['id'];_0x43c0f6[a1_0x1f55('0x1b')][a1_0x1f55('0x27')]({'kind':a1_0x1f55('0x1c'),'accessToken':_0x33294f});_0x43c0f6[a1_0x1f55('0x1d')][a1_0x1f55('0x16')]=_0x1f6f4d[a1_0x1f55('0x16')][a1_0x1f55('0x1e')]+'\x20'+_0x1f6f4d[a1_0x1f55('0x16')]['familyName'];_0x43c0f6['profile'][a1_0x1f55('0x20')]=_0x1f6f4d['_json'][a1_0x1f55('0x20')];_0x43c0f6[a1_0x1f55('0x1d')]['picture']=a1_0x1f55('0x23')+_0x1f6f4d['id']+a1_0x1f55('0x24');_0x43c0f6['profile'][a1_0x1f55('0x28')]=_0x1f6f4d[a1_0x1f55('0x21')][a1_0x1f55('0x28')]?_0x1f6f4d[a1_0x1f55('0x21')][a1_0x1f55('0x28')][a1_0x1f55('0x16')]:'';_0x43c0f6[a1_0x1f55('0x29')](_0x1356c4=>{_0x14caaf(_0x1356c4,_0x43c0f6);});}});});}}));exports[a1_0x1f55('0x2a')]=(_0xfdc9cb,_0x5a38ec,_0x27cc52)=>{if(_0xfdc9cb[a1_0x1f55('0x2a')]()){return _0x27cc52();}_0x5a38ec[a1_0x1f55('0x2b')](a1_0x1f55('0x2c'));};exports[a1_0x1f55('0x2d')]=(_0x5ad719,_0x124cdc,_0x556239)=>{const _0x5cba3f=_0x5ad719[a1_0x1f55('0x2e')][a1_0x1f55('0x2f')]('/')[a1_0x1f55('0x30')](-0x1)[0x0];if(lodash_1['default'][a1_0x1f55('0x31')](_0x5ad719[a1_0x1f55('0x19')]['tokens'],{'kind':_0x5cba3f})){_0x556239();}else{_0x124cdc['redirect']('/auth/'+_0x5cba3f);}};