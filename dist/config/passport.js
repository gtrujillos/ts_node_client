var a1_0x4eb2=['find','/auth/','__importDefault','__esModule','passport','passport-local','passport-facebook','lodash','default','Strategy','deserializeUser','findById','use','findOne','\x20not\x20found.','env','FACEBOOK_ID','name','email','link','timezone','user','errors','There\x20is\x20already\x20a\x20Facebook\x20account\x20that\x20belongs\x20to\x20you.\x20Sign\x20in\x20with\x20that\x20account\x20or\x20delete\x20it,\x20then\x20link\x20it\x20with\x20your\x20current\x20account.','facebook','tokens','profile','familyName','gender','_json','picture','https://graph.facebook.com/','/picture?type=large','save','flash','info','Facebook\x20account\x20has\x20been\x20linked.','push','givenName','location','isAuthenticated','redirect','/login','path','split'];(function(_0x2fbeca,_0x302170){var _0x1ae02f=function(_0x1066ee){while(--_0x1066ee){_0x2fbeca['push'](_0x2fbeca['shift']());}};_0x1ae02f(++_0x302170);}(a1_0x4eb2,0xb6));var a1_0x4c10=function(_0x2d324b,_0x27ec48){_0x2d324b=_0x2d324b-0x0;var _0x12f2ef=a1_0x4eb2[_0x2d324b];return _0x12f2ef;};'use strict';var __importDefault=this&&this[a1_0x4c10('0x0')]||function(_0x418405){return _0x418405&&_0x418405[a1_0x4c10('0x1')]?_0x418405:{'default':_0x418405};};Object['defineProperty'](exports,a1_0x4c10('0x1'),{'value':!![]});const passport_1=__importDefault(require(a1_0x4c10('0x2')));const passport_local_1=__importDefault(require(a1_0x4c10('0x3')));const passport_facebook_1=__importDefault(require(a1_0x4c10('0x4')));const lodash_1=__importDefault(require(a1_0x4c10('0x5')));const User_1=__importDefault(require('../models/User'));const LocalStrategy=passport_local_1[a1_0x4c10('0x6')][a1_0x4c10('0x7')];const FacebookStrategy=passport_facebook_1[a1_0x4c10('0x6')][a1_0x4c10('0x7')];passport_1[a1_0x4c10('0x6')]['serializeUser']((_0x160054,_0x4e166c)=>{_0x4e166c(undefined,_0x160054['id']);});passport_1[a1_0x4c10('0x6')][a1_0x4c10('0x8')]((_0x1fd3b2,_0x19552d)=>{User_1['default'][a1_0x4c10('0x9')](_0x1fd3b2,(_0x2386a1,_0x262193)=>{_0x19552d(_0x2386a1,_0x262193);});});passport_1['default'][a1_0x4c10('0xa')](new LocalStrategy({'usernameField':'email'},(_0x4978be,_0x3acc47,_0x1a7db0)=>{User_1['default'][a1_0x4c10('0xb')]({'email':_0x4978be['toLowerCase']()},(_0x58a50a,_0xcfc5e7)=>{if(_0x58a50a){return _0x1a7db0(_0x58a50a);}if(!_0xcfc5e7){return _0x1a7db0(undefined,![],{'message':'Email\x20'+_0x4978be+a1_0x4c10('0xc')});}_0xcfc5e7['comparePassword'](_0x3acc47,(_0x58a50a,_0xf12cfc)=>{if(_0x58a50a){return _0x1a7db0(_0x58a50a);}if(_0xf12cfc){return _0x1a7db0(undefined,_0xcfc5e7);}return _0x1a7db0(undefined,![],{'message':'Invalid\x20email\x20or\x20password.'});});});}));passport_1[a1_0x4c10('0x6')]['use'](new FacebookStrategy({'clientID':process[a1_0x4c10('0xd')][a1_0x4c10('0xe')],'clientSecret':process['env']['FACEBOOK_SECRET'],'callbackURL':'/auth/facebook/callback','profileFields':[a1_0x4c10('0xf'),a1_0x4c10('0x10'),a1_0x4c10('0x11'),'locale',a1_0x4c10('0x12')],'passReqToCallback':!![]},(_0x35d11b,_0x1430b8,_0x24e5dd,_0x57bdb4,_0x157249)=>{if(_0x35d11b[a1_0x4c10('0x13')]){User_1['default'][a1_0x4c10('0xb')]({'facebook':_0x57bdb4['id']},(_0x543fc7,_0xe4964d)=>{if(_0x543fc7){return _0x157249(_0x543fc7);}if(_0xe4964d){_0x35d11b['flash'](a1_0x4c10('0x14'),{'msg':a1_0x4c10('0x15')});_0x157249(_0x543fc7);}else{User_1[a1_0x4c10('0x6')][a1_0x4c10('0x9')](_0x35d11b[a1_0x4c10('0x13')]['id'],(_0x543fc7,_0x201ad6)=>{if(_0x543fc7){return _0x157249(_0x543fc7);}_0x201ad6[a1_0x4c10('0x16')]=_0x57bdb4['id'];_0x201ad6[a1_0x4c10('0x17')]['push']({'kind':'facebook','accessToken':_0x1430b8});_0x201ad6['profile'][a1_0x4c10('0xf')]=_0x201ad6[a1_0x4c10('0x18')][a1_0x4c10('0xf')]||_0x57bdb4[a1_0x4c10('0xf')]['givenName']+'\x20'+_0x57bdb4[a1_0x4c10('0xf')][a1_0x4c10('0x19')];_0x201ad6[a1_0x4c10('0x18')][a1_0x4c10('0x1a')]=_0x201ad6[a1_0x4c10('0x18')][a1_0x4c10('0x1a')]||_0x57bdb4[a1_0x4c10('0x1b')][a1_0x4c10('0x1a')];_0x201ad6[a1_0x4c10('0x18')][a1_0x4c10('0x1c')]=_0x201ad6[a1_0x4c10('0x18')]['picture']||a1_0x4c10('0x1d')+_0x57bdb4['id']+a1_0x4c10('0x1e');_0x201ad6[a1_0x4c10('0x1f')](_0x543fc7=>{_0x35d11b[a1_0x4c10('0x20')](a1_0x4c10('0x21'),{'msg':a1_0x4c10('0x22')});_0x157249(_0x543fc7,_0x201ad6);});});}});}else{User_1['default'][a1_0x4c10('0xb')]({'facebook':_0x57bdb4['id']},(_0x55d9c1,_0x408125)=>{if(_0x55d9c1){return _0x157249(_0x55d9c1);}if(_0x408125){return _0x157249(undefined,_0x408125);}User_1[a1_0x4c10('0x6')]['findOne']({'email':_0x57bdb4[a1_0x4c10('0x1b')]['email']},(_0x55d9c1,_0xe9b51f)=>{if(_0x55d9c1){return _0x157249(_0x55d9c1);}if(_0xe9b51f){_0x35d11b[a1_0x4c10('0x20')]('errors',{'msg':'There\x20is\x20already\x20an\x20account\x20using\x20this\x20email\x20address.\x20Sign\x20in\x20to\x20that\x20account\x20and\x20link\x20it\x20with\x20Facebook\x20manually\x20from\x20Account\x20Settings.'});_0x157249(_0x55d9c1);}else{const _0x259869=new User_1[(a1_0x4c10('0x6'))]();_0x259869[a1_0x4c10('0x10')]=_0x57bdb4[a1_0x4c10('0x1b')][a1_0x4c10('0x10')];_0x259869['facebook']=_0x57bdb4['id'];_0x259869[a1_0x4c10('0x17')][a1_0x4c10('0x23')]({'kind':'facebook','accessToken':_0x1430b8});_0x259869[a1_0x4c10('0x18')][a1_0x4c10('0xf')]=_0x57bdb4['name'][a1_0x4c10('0x24')]+'\x20'+_0x57bdb4['name'][a1_0x4c10('0x19')];_0x259869['profile']['gender']=_0x57bdb4[a1_0x4c10('0x1b')][a1_0x4c10('0x1a')];_0x259869[a1_0x4c10('0x18')][a1_0x4c10('0x1c')]='https://graph.facebook.com/'+_0x57bdb4['id']+a1_0x4c10('0x1e');_0x259869[a1_0x4c10('0x18')][a1_0x4c10('0x25')]=_0x57bdb4[a1_0x4c10('0x1b')][a1_0x4c10('0x25')]?_0x57bdb4[a1_0x4c10('0x1b')][a1_0x4c10('0x25')][a1_0x4c10('0xf')]:'';_0x259869[a1_0x4c10('0x1f')](_0x55d9c1=>{_0x157249(_0x55d9c1,_0x259869);});}});});}}));exports[a1_0x4c10('0x26')]=(_0x25e038,_0x1b85e5,_0x491afe)=>{if(_0x25e038[a1_0x4c10('0x26')]()){return _0x491afe();}_0x1b85e5[a1_0x4c10('0x27')](a1_0x4c10('0x28'));};exports['isAuthorized']=(_0x586547,_0xf4656e,_0x29eda8)=>{const _0x20c019=_0x586547[a1_0x4c10('0x29')][a1_0x4c10('0x2a')]('/')['slice'](-0x1)[0x0];if(lodash_1['default'][a1_0x4c10('0x2b')](_0x586547['user']['tokens'],{'kind':_0x20c019})){_0x29eda8();}else{_0xf4656e[a1_0x4c10('0x27')](a1_0x4c10('0x2c')+_0x20c019);}};