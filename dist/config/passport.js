var a1_0x47de=['\x20not\x20found.','comparePassword','Invalid\x20email\x20or\x20password.','env','FACEBOOK_SECRET','/auth/facebook/callback','name','link','locale','timezone','user','flash','There\x20is\x20already\x20a\x20Facebook\x20account\x20that\x20belongs\x20to\x20you.\x20Sign\x20in\x20with\x20that\x20account\x20or\x20delete\x20it,\x20then\x20link\x20it\x20with\x20your\x20current\x20account.','facebook','tokens','push','profile','givenName','familyName','gender','picture','https://graph.facebook.com/','/picture?type=large','save','Facebook\x20account\x20has\x20been\x20linked.','_json','There\x20is\x20already\x20an\x20account\x20using\x20this\x20email\x20address.\x20Sign\x20in\x20to\x20that\x20account\x20and\x20link\x20it\x20with\x20Facebook\x20manually\x20from\x20Account\x20Settings.','location','redirect','/login','isAuthorized','slice','find','/auth/','__importDefault','__esModule','defineProperty','passport','passport-local','lodash','default','Strategy','serializeUser','deserializeUser','findById','use','email','findOne','toLowerCase','Email\x20'];(function(_0x323cdd,_0x145f2){var _0x50bfab=function(_0x2b0aef){while(--_0x2b0aef){_0x323cdd['push'](_0x323cdd['shift']());}};_0x50bfab(++_0x145f2);}(a1_0x47de,0x180));var a1_0x565c=function(_0xddb16a,_0x41b9ae){_0xddb16a=_0xddb16a-0x0;var _0x5b1e6f=a1_0x47de[_0xddb16a];return _0x5b1e6f;};'use strict';var __importDefault=this&&this[a1_0x565c('0x0')]||function(_0x23ed2a){return _0x23ed2a&&_0x23ed2a[a1_0x565c('0x1')]?_0x23ed2a:{'default':_0x23ed2a};};Object[a1_0x565c('0x2')](exports,a1_0x565c('0x1'),{'value':!![]});const passport_1=__importDefault(require(a1_0x565c('0x3')));const passport_local_1=__importDefault(require(a1_0x565c('0x4')));const passport_facebook_1=__importDefault(require('passport-facebook'));const lodash_1=__importDefault(require(a1_0x565c('0x5')));const User_1=__importDefault(require('../models/User'));const LocalStrategy=passport_local_1[a1_0x565c('0x6')][a1_0x565c('0x7')];const FacebookStrategy=passport_facebook_1[a1_0x565c('0x6')][a1_0x565c('0x7')];passport_1['default'][a1_0x565c('0x8')]((_0x33c6c4,_0x73d4c7)=>{_0x73d4c7(undefined,_0x33c6c4['id']);});passport_1['default'][a1_0x565c('0x9')]((_0x1b45cd,_0x2fc0b0)=>{User_1[a1_0x565c('0x6')][a1_0x565c('0xa')](_0x1b45cd,(_0x10e396,_0x3b764e)=>{_0x2fc0b0(_0x10e396,_0x3b764e);});});passport_1[a1_0x565c('0x6')][a1_0x565c('0xb')](new LocalStrategy({'usernameField':a1_0x565c('0xc')},(_0x448b52,_0x41cc02,_0x4f00f5)=>{User_1[a1_0x565c('0x6')][a1_0x565c('0xd')]({'email':_0x448b52[a1_0x565c('0xe')]()},(_0x288464,_0x1f91ea)=>{if(_0x288464){return _0x4f00f5(_0x288464);}if(!_0x1f91ea){return _0x4f00f5(undefined,![],{'message':a1_0x565c('0xf')+_0x448b52+a1_0x565c('0x10')});}_0x1f91ea[a1_0x565c('0x11')](_0x41cc02,(_0x288464,_0x554667)=>{if(_0x288464){return _0x4f00f5(_0x288464);}if(_0x554667){return _0x4f00f5(undefined,_0x1f91ea);}return _0x4f00f5(undefined,![],{'message':a1_0x565c('0x12')});});});}));passport_1[a1_0x565c('0x6')]['use'](new FacebookStrategy({'clientID':process[a1_0x565c('0x13')]['FACEBOOK_ID'],'clientSecret':process[a1_0x565c('0x13')][a1_0x565c('0x14')],'callbackURL':a1_0x565c('0x15'),'profileFields':[a1_0x565c('0x16'),'email',a1_0x565c('0x17'),a1_0x565c('0x18'),a1_0x565c('0x19')],'passReqToCallback':!![]},(_0x4d8377,_0x10ebbd,_0x23926d,_0x368987,_0x33f2a6)=>{if(_0x4d8377[a1_0x565c('0x1a')]){User_1[a1_0x565c('0x6')]['findOne']({'facebook':_0x368987['id']},(_0x4fb501,_0x3abffc)=>{if(_0x4fb501){return _0x33f2a6(_0x4fb501);}if(_0x3abffc){_0x4d8377[a1_0x565c('0x1b')]('errors',{'msg':a1_0x565c('0x1c')});_0x33f2a6(_0x4fb501);}else{User_1['default']['findById'](_0x4d8377['user']['id'],(_0x4fb501,_0x1df652)=>{if(_0x4fb501){return _0x33f2a6(_0x4fb501);}_0x1df652[a1_0x565c('0x1d')]=_0x368987['id'];_0x1df652[a1_0x565c('0x1e')][a1_0x565c('0x1f')]({'kind':a1_0x565c('0x1d'),'accessToken':_0x10ebbd});_0x1df652['profile']['name']=_0x1df652[a1_0x565c('0x20')][a1_0x565c('0x16')]||_0x368987[a1_0x565c('0x16')][a1_0x565c('0x21')]+'\x20'+_0x368987[a1_0x565c('0x16')][a1_0x565c('0x22')];_0x1df652[a1_0x565c('0x20')][a1_0x565c('0x23')]=_0x1df652['profile'][a1_0x565c('0x23')]||_0x368987['_json']['gender'];_0x1df652[a1_0x565c('0x20')][a1_0x565c('0x24')]=_0x1df652[a1_0x565c('0x20')][a1_0x565c('0x24')]||a1_0x565c('0x25')+_0x368987['id']+a1_0x565c('0x26');_0x1df652[a1_0x565c('0x27')](_0x4fb501=>{_0x4d8377['flash']('info',{'msg':a1_0x565c('0x28')});_0x33f2a6(_0x4fb501,_0x1df652);});});}});}else{User_1['default'][a1_0x565c('0xd')]({'facebook':_0x368987['id']},(_0x17b675,_0xc86202)=>{if(_0x17b675){return _0x33f2a6(_0x17b675);}if(_0xc86202){return _0x33f2a6(undefined,_0xc86202);}User_1[a1_0x565c('0x6')][a1_0x565c('0xd')]({'email':_0x368987[a1_0x565c('0x29')][a1_0x565c('0xc')]},(_0x17b675,_0x2ddf72)=>{if(_0x17b675){return _0x33f2a6(_0x17b675);}if(_0x2ddf72){_0x4d8377[a1_0x565c('0x1b')]('errors',{'msg':a1_0x565c('0x2a')});_0x33f2a6(_0x17b675);}else{const _0xc4a87e=new User_1['default']();_0xc4a87e[a1_0x565c('0xc')]=_0x368987[a1_0x565c('0x29')]['email'];_0xc4a87e['facebook']=_0x368987['id'];_0xc4a87e[a1_0x565c('0x1e')][a1_0x565c('0x1f')]({'kind':a1_0x565c('0x1d'),'accessToken':_0x10ebbd});_0xc4a87e[a1_0x565c('0x20')][a1_0x565c('0x16')]=_0x368987[a1_0x565c('0x16')][a1_0x565c('0x21')]+'\x20'+_0x368987[a1_0x565c('0x16')][a1_0x565c('0x22')];_0xc4a87e[a1_0x565c('0x20')][a1_0x565c('0x23')]=_0x368987[a1_0x565c('0x29')]['gender'];_0xc4a87e[a1_0x565c('0x20')][a1_0x565c('0x24')]=a1_0x565c('0x25')+_0x368987['id']+a1_0x565c('0x26');_0xc4a87e['profile'][a1_0x565c('0x2b')]=_0x368987[a1_0x565c('0x29')]['location']?_0x368987[a1_0x565c('0x29')][a1_0x565c('0x2b')][a1_0x565c('0x16')]:'';_0xc4a87e['save'](_0x17b675=>{_0x33f2a6(_0x17b675,_0xc4a87e);});}});});}}));exports['isAuthenticated']=(_0x1c743f,_0x7ed502,_0x1540aa)=>{if(_0x1c743f['isAuthenticated']()){return _0x1540aa();}_0x7ed502[a1_0x565c('0x2c')](a1_0x565c('0x2d'));};exports[a1_0x565c('0x2e')]=(_0x8f2021,_0x3b7fd4,_0x33d9fb)=>{const _0x554614=_0x8f2021['path']['split']('/')[a1_0x565c('0x2f')](-0x1)[0x0];if(lodash_1['default'][a1_0x565c('0x30')](_0x8f2021[a1_0x565c('0x1a')][a1_0x565c('0x1e')],{'kind':_0x554614})){_0x33d9fb();}else{_0x3b7fd4[a1_0x565c('0x2c')](a1_0x565c('0x31')+_0x554614);}};