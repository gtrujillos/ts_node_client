var a1_0x3d1f=['familyName','location','save','isAuthenticated','redirect','isAuthorized','path','split','slice','find','/auth/','__esModule','defineProperty','passport-local','passport-facebook','lodash','../models/User','default','Strategy','serializeUser','use','email','findOne','Email\x20','\x20not\x20found.','comparePassword','env','FACEBOOK_ID','FACEBOOK_SECRET','link','timezone','errors','findById','user','facebook','tokens','profile','name','gender','picture','https://graph.facebook.com/','/picture?type=large','info','Facebook\x20account\x20has\x20been\x20linked.','_json','flash','push','givenName'];(function(_0x2a6f9e,_0x85d0d){var _0x45f7bc=function(_0x27a752){while(--_0x27a752){_0x2a6f9e['push'](_0x2a6f9e['shift']());}};_0x45f7bc(++_0x85d0d);}(a1_0x3d1f,0x1bb));var a1_0x38d7=function(_0x1b804d,_0x5bfe73){_0x1b804d=_0x1b804d-0x0;var _0x3ca52c=a1_0x3d1f[_0x1b804d];return _0x3ca52c;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x98b577){return _0x98b577&&_0x98b577[a1_0x38d7('0x0')]?_0x98b577:{'default':_0x98b577};};Object[a1_0x38d7('0x1')](exports,a1_0x38d7('0x0'),{'value':!![]});const passport_1=__importDefault(require('passport'));const passport_local_1=__importDefault(require(a1_0x38d7('0x2')));const passport_facebook_1=__importDefault(require(a1_0x38d7('0x3')));const lodash_1=__importDefault(require(a1_0x38d7('0x4')));const User_1=__importDefault(require(a1_0x38d7('0x5')));const LocalStrategy=passport_local_1[a1_0x38d7('0x6')][a1_0x38d7('0x7')];const FacebookStrategy=passport_facebook_1[a1_0x38d7('0x6')][a1_0x38d7('0x7')];passport_1[a1_0x38d7('0x6')][a1_0x38d7('0x8')]((_0x1f3dcb,_0x5310aa)=>{_0x5310aa(undefined,_0x1f3dcb['id']);});passport_1[a1_0x38d7('0x6')]['deserializeUser']((_0x496b43,_0x64d601)=>{User_1['default']['findById'](_0x496b43,(_0x251410,_0x2adeb0)=>{_0x64d601(_0x251410,_0x2adeb0);});});passport_1[a1_0x38d7('0x6')][a1_0x38d7('0x9')](new LocalStrategy({'usernameField':a1_0x38d7('0xa')},(_0xf29822,_0x4207de,_0x265333)=>{User_1[a1_0x38d7('0x6')][a1_0x38d7('0xb')]({'email':_0xf29822['toLowerCase']()},(_0x21ec49,_0x2e7f07)=>{if(_0x21ec49){return _0x265333(_0x21ec49);}if(!_0x2e7f07){return _0x265333(undefined,![],{'message':a1_0x38d7('0xc')+_0xf29822+a1_0x38d7('0xd')});}_0x2e7f07[a1_0x38d7('0xe')](_0x4207de,(_0x21ec49,_0x42c4a0)=>{if(_0x21ec49){return _0x265333(_0x21ec49);}if(_0x42c4a0){return _0x265333(undefined,_0x2e7f07);}return _0x265333(undefined,![],{'message':'Invalid\x20email\x20or\x20password.'});});});}));passport_1[a1_0x38d7('0x6')][a1_0x38d7('0x9')](new FacebookStrategy({'clientID':process[a1_0x38d7('0xf')][a1_0x38d7('0x10')],'clientSecret':process[a1_0x38d7('0xf')][a1_0x38d7('0x11')],'callbackURL':'/auth/facebook/callback','profileFields':['name',a1_0x38d7('0xa'),a1_0x38d7('0x12'),'locale',a1_0x38d7('0x13')],'passReqToCallback':!![]},(_0xea2be2,_0x3560fd,_0x2b2d09,_0x461c60,_0x2f32d1)=>{if(_0xea2be2['user']){User_1[a1_0x38d7('0x6')][a1_0x38d7('0xb')]({'facebook':_0x461c60['id']},(_0x21a3e4,_0x4da7bc)=>{if(_0x21a3e4){return _0x2f32d1(_0x21a3e4);}if(_0x4da7bc){_0xea2be2['flash'](a1_0x38d7('0x14'),{'msg':'There\x20is\x20already\x20a\x20Facebook\x20account\x20that\x20belongs\x20to\x20you.\x20Sign\x20in\x20with\x20that\x20account\x20or\x20delete\x20it,\x20then\x20link\x20it\x20with\x20your\x20current\x20account.'});_0x2f32d1(_0x21a3e4);}else{User_1[a1_0x38d7('0x6')][a1_0x38d7('0x15')](_0xea2be2[a1_0x38d7('0x16')]['id'],(_0x21a3e4,_0x1700eb)=>{if(_0x21a3e4){return _0x2f32d1(_0x21a3e4);}_0x1700eb[a1_0x38d7('0x17')]=_0x461c60['id'];_0x1700eb[a1_0x38d7('0x18')]['push']({'kind':'facebook','accessToken':_0x3560fd});_0x1700eb[a1_0x38d7('0x19')][a1_0x38d7('0x1a')]=_0x1700eb[a1_0x38d7('0x19')][a1_0x38d7('0x1a')]||_0x461c60['name']['givenName']+'\x20'+_0x461c60['name']['familyName'];_0x1700eb[a1_0x38d7('0x19')][a1_0x38d7('0x1b')]=_0x1700eb[a1_0x38d7('0x19')][a1_0x38d7('0x1b')]||_0x461c60['_json'][a1_0x38d7('0x1b')];_0x1700eb['profile'][a1_0x38d7('0x1c')]=_0x1700eb[a1_0x38d7('0x19')][a1_0x38d7('0x1c')]||a1_0x38d7('0x1d')+_0x461c60['id']+a1_0x38d7('0x1e');_0x1700eb['save'](_0x21a3e4=>{_0xea2be2['flash'](a1_0x38d7('0x1f'),{'msg':a1_0x38d7('0x20')});_0x2f32d1(_0x21a3e4,_0x1700eb);});});}});}else{User_1[a1_0x38d7('0x6')][a1_0x38d7('0xb')]({'facebook':_0x461c60['id']},(_0x5c1c09,_0x539e97)=>{if(_0x5c1c09){return _0x2f32d1(_0x5c1c09);}if(_0x539e97){return _0x2f32d1(undefined,_0x539e97);}User_1['default']['findOne']({'email':_0x461c60[a1_0x38d7('0x21')][a1_0x38d7('0xa')]},(_0x5c1c09,_0x2fa694)=>{if(_0x5c1c09){return _0x2f32d1(_0x5c1c09);}if(_0x2fa694){_0xea2be2[a1_0x38d7('0x22')](a1_0x38d7('0x14'),{'msg':'There\x20is\x20already\x20an\x20account\x20using\x20this\x20email\x20address.\x20Sign\x20in\x20to\x20that\x20account\x20and\x20link\x20it\x20with\x20Facebook\x20manually\x20from\x20Account\x20Settings.'});_0x2f32d1(_0x5c1c09);}else{const _0x5425ff=new User_1[(a1_0x38d7('0x6'))]();_0x5425ff[a1_0x38d7('0xa')]=_0x461c60[a1_0x38d7('0x21')][a1_0x38d7('0xa')];_0x5425ff['facebook']=_0x461c60['id'];_0x5425ff[a1_0x38d7('0x18')][a1_0x38d7('0x23')]({'kind':a1_0x38d7('0x17'),'accessToken':_0x3560fd});_0x5425ff[a1_0x38d7('0x19')]['name']=_0x461c60[a1_0x38d7('0x1a')][a1_0x38d7('0x24')]+'\x20'+_0x461c60[a1_0x38d7('0x1a')][a1_0x38d7('0x25')];_0x5425ff[a1_0x38d7('0x19')][a1_0x38d7('0x1b')]=_0x461c60[a1_0x38d7('0x21')][a1_0x38d7('0x1b')];_0x5425ff[a1_0x38d7('0x19')][a1_0x38d7('0x1c')]='https://graph.facebook.com/'+_0x461c60['id']+a1_0x38d7('0x1e');_0x5425ff['profile'][a1_0x38d7('0x26')]=_0x461c60[a1_0x38d7('0x21')][a1_0x38d7('0x26')]?_0x461c60[a1_0x38d7('0x21')][a1_0x38d7('0x26')]['name']:'';_0x5425ff[a1_0x38d7('0x27')](_0x5c1c09=>{_0x2f32d1(_0x5c1c09,_0x5425ff);});}});});}}));exports[a1_0x38d7('0x28')]=(_0x210fd0,_0x1522d7,_0x33c531)=>{if(_0x210fd0[a1_0x38d7('0x28')]()){return _0x33c531();}_0x1522d7[a1_0x38d7('0x29')]('/login');};exports[a1_0x38d7('0x2a')]=(_0x38c9f1,_0x3659c1,_0x13d51a)=>{const _0x188566=_0x38c9f1[a1_0x38d7('0x2b')][a1_0x38d7('0x2c')]('/')[a1_0x38d7('0x2d')](-0x1)[0x0];if(lodash_1[a1_0x38d7('0x6')][a1_0x38d7('0x2e')](_0x38c9f1[a1_0x38d7('0x16')][a1_0x38d7('0x18')],{'kind':_0x188566})){_0x13d51a();}else{_0x3659c1[a1_0x38d7('0x29')](a1_0x38d7('0x2f')+_0x188566);}};