var a1_0x495b=['push','profile','givenName','familyName','gender','_json','picture','/picture?type=large','info','Facebook\x20account\x20has\x20been\x20linked.','There\x20is\x20already\x20an\x20account\x20using\x20this\x20email\x20address.\x20Sign\x20in\x20to\x20that\x20account\x20and\x20link\x20it\x20with\x20Facebook\x20manually\x20from\x20Account\x20Settings.','https://graph.facebook.com/','location','save','isAuthenticated','redirect','/login','isAuthorized','path','split','slice','find','/auth/','defineProperty','__esModule','passport','passport-local','passport-facebook','lodash','../models/User','default','Strategy','serializeUser','deserializeUser','findById','use','email','findOne','toLowerCase','Email\x20','comparePassword','Invalid\x20email\x20or\x20password.','FACEBOOK_ID','FACEBOOK_SECRET','/auth/facebook/callback','name','link','locale','timezone','flash','errors','There\x20is\x20already\x20a\x20Facebook\x20account\x20that\x20belongs\x20to\x20you.\x20Sign\x20in\x20with\x20that\x20account\x20or\x20delete\x20it,\x20then\x20link\x20it\x20with\x20your\x20current\x20account.','facebook','tokens'];(function(_0x2cb67c,_0x5a974f){var _0x4649d0=function(_0x432dae){while(--_0x432dae){_0x2cb67c['push'](_0x2cb67c['shift']());}};_0x4649d0(++_0x5a974f);}(a1_0x495b,0xb9));var a1_0x1673=function(_0x3a666b,_0x55dfbe){_0x3a666b=_0x3a666b-0x0;var _0x162796=a1_0x495b[_0x3a666b];return _0x162796;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x59c583){return _0x59c583&&_0x59c583['__esModule']?_0x59c583:{'default':_0x59c583};};Object[a1_0x1673('0x0')](exports,a1_0x1673('0x1'),{'value':!![]});const passport_1=__importDefault(require(a1_0x1673('0x2')));const passport_local_1=__importDefault(require(a1_0x1673('0x3')));const passport_facebook_1=__importDefault(require(a1_0x1673('0x4')));const lodash_1=__importDefault(require(a1_0x1673('0x5')));const User_1=__importDefault(require(a1_0x1673('0x6')));const LocalStrategy=passport_local_1[a1_0x1673('0x7')][a1_0x1673('0x8')];const FacebookStrategy=passport_facebook_1[a1_0x1673('0x7')]['Strategy'];passport_1[a1_0x1673('0x7')][a1_0x1673('0x9')]((_0x51d92b,_0xa8d5c3)=>{_0xa8d5c3(undefined,_0x51d92b['id']);});passport_1[a1_0x1673('0x7')][a1_0x1673('0xa')]((_0x3ca408,_0x5b55d2)=>{User_1[a1_0x1673('0x7')][a1_0x1673('0xb')](_0x3ca408,(_0x25629f,_0x2549c8)=>{_0x5b55d2(_0x25629f,_0x2549c8);});});passport_1[a1_0x1673('0x7')][a1_0x1673('0xc')](new LocalStrategy({'usernameField':a1_0x1673('0xd')},(_0x4cb9be,_0x1c828e,_0x13800f)=>{User_1[a1_0x1673('0x7')][a1_0x1673('0xe')]({'email':_0x4cb9be[a1_0x1673('0xf')]()},(_0x1953a5,_0x26fd9d)=>{if(_0x1953a5){return _0x13800f(_0x1953a5);}if(!_0x26fd9d){return _0x13800f(undefined,![],{'message':a1_0x1673('0x10')+_0x4cb9be+'\x20not\x20found.'});}_0x26fd9d[a1_0x1673('0x11')](_0x1c828e,(_0x1953a5,_0x4e9cd3)=>{if(_0x1953a5){return _0x13800f(_0x1953a5);}if(_0x4e9cd3){return _0x13800f(undefined,_0x26fd9d);}return _0x13800f(undefined,![],{'message':a1_0x1673('0x12')});});});}));passport_1[a1_0x1673('0x7')][a1_0x1673('0xc')](new FacebookStrategy({'clientID':process['env'][a1_0x1673('0x13')],'clientSecret':process['env'][a1_0x1673('0x14')],'callbackURL':a1_0x1673('0x15'),'profileFields':[a1_0x1673('0x16'),a1_0x1673('0xd'),a1_0x1673('0x17'),a1_0x1673('0x18'),a1_0x1673('0x19')],'passReqToCallback':!![]},(_0x52d8fb,_0x466f22,_0x312569,_0x1b8337,_0x5f43f8)=>{if(_0x52d8fb['user']){User_1['default']['findOne']({'facebook':_0x1b8337['id']},(_0x1452f6,_0x5ef89a)=>{if(_0x1452f6){return _0x5f43f8(_0x1452f6);}if(_0x5ef89a){_0x52d8fb[a1_0x1673('0x1a')](a1_0x1673('0x1b'),{'msg':a1_0x1673('0x1c')});_0x5f43f8(_0x1452f6);}else{User_1[a1_0x1673('0x7')][a1_0x1673('0xb')](_0x52d8fb['user']['id'],(_0x1452f6,_0x516e64)=>{if(_0x1452f6){return _0x5f43f8(_0x1452f6);}_0x516e64[a1_0x1673('0x1d')]=_0x1b8337['id'];_0x516e64[a1_0x1673('0x1e')][a1_0x1673('0x1f')]({'kind':a1_0x1673('0x1d'),'accessToken':_0x466f22});_0x516e64[a1_0x1673('0x20')][a1_0x1673('0x16')]=_0x516e64[a1_0x1673('0x20')][a1_0x1673('0x16')]||_0x1b8337[a1_0x1673('0x16')][a1_0x1673('0x21')]+'\x20'+_0x1b8337[a1_0x1673('0x16')][a1_0x1673('0x22')];_0x516e64['profile'][a1_0x1673('0x23')]=_0x516e64['profile'][a1_0x1673('0x23')]||_0x1b8337[a1_0x1673('0x24')]['gender'];_0x516e64[a1_0x1673('0x20')][a1_0x1673('0x25')]=_0x516e64[a1_0x1673('0x20')][a1_0x1673('0x25')]||'https://graph.facebook.com/'+_0x1b8337['id']+a1_0x1673('0x26');_0x516e64['save'](_0x1452f6=>{_0x52d8fb[a1_0x1673('0x1a')](a1_0x1673('0x27'),{'msg':a1_0x1673('0x28')});_0x5f43f8(_0x1452f6,_0x516e64);});});}});}else{User_1[a1_0x1673('0x7')][a1_0x1673('0xe')]({'facebook':_0x1b8337['id']},(_0x436d5f,_0x1de9cf)=>{if(_0x436d5f){return _0x5f43f8(_0x436d5f);}if(_0x1de9cf){return _0x5f43f8(undefined,_0x1de9cf);}User_1[a1_0x1673('0x7')]['findOne']({'email':_0x1b8337[a1_0x1673('0x24')]['email']},(_0x436d5f,_0x590915)=>{if(_0x436d5f){return _0x5f43f8(_0x436d5f);}if(_0x590915){_0x52d8fb[a1_0x1673('0x1a')]('errors',{'msg':a1_0x1673('0x29')});_0x5f43f8(_0x436d5f);}else{const _0x3ba0ed=new User_1['default']();_0x3ba0ed[a1_0x1673('0xd')]=_0x1b8337[a1_0x1673('0x24')]['email'];_0x3ba0ed['facebook']=_0x1b8337['id'];_0x3ba0ed[a1_0x1673('0x1e')][a1_0x1673('0x1f')]({'kind':a1_0x1673('0x1d'),'accessToken':_0x466f22});_0x3ba0ed['profile']['name']=_0x1b8337[a1_0x1673('0x16')][a1_0x1673('0x21')]+'\x20'+_0x1b8337[a1_0x1673('0x16')]['familyName'];_0x3ba0ed[a1_0x1673('0x20')][a1_0x1673('0x23')]=_0x1b8337[a1_0x1673('0x24')][a1_0x1673('0x23')];_0x3ba0ed[a1_0x1673('0x20')][a1_0x1673('0x25')]=a1_0x1673('0x2a')+_0x1b8337['id']+a1_0x1673('0x26');_0x3ba0ed[a1_0x1673('0x20')]['location']=_0x1b8337['_json'][a1_0x1673('0x2b')]?_0x1b8337[a1_0x1673('0x24')]['location'][a1_0x1673('0x16')]:'';_0x3ba0ed[a1_0x1673('0x2c')](_0x436d5f=>{_0x5f43f8(_0x436d5f,_0x3ba0ed);});}});});}}));exports[a1_0x1673('0x2d')]=(_0x2b6eed,_0x4ba9c0,_0x482bf6)=>{if(_0x2b6eed['isAuthenticated']()){return _0x482bf6();}_0x4ba9c0[a1_0x1673('0x2e')](a1_0x1673('0x2f'));};exports[a1_0x1673('0x30')]=(_0x7aa1c3,_0x6ba17e,_0x4c930)=>{const _0x1dc9e9=_0x7aa1c3[a1_0x1673('0x31')][a1_0x1673('0x32')]('/')[a1_0x1673('0x33')](-0x1)[0x0];if(lodash_1[a1_0x1673('0x7')][a1_0x1673('0x34')](_0x7aa1c3['user'][a1_0x1673('0x1e')],{'kind':_0x1dc9e9})){_0x4c930();}else{_0x6ba17e[a1_0x1673('0x2e')](a1_0x1673('0x35')+_0x1dc9e9);}};