var a1_0x3ce2=['comparePassword','Invalid\x20email\x20or\x20password.','FACEBOOK_ID','FACEBOOK_SECRET','locale','timezone','user','findOne','errors','findById','tokens','push','facebook','profile','name','givenName','gender','picture','/picture?type=large','info','flash','There\x20is\x20already\x20an\x20account\x20using\x20this\x20email\x20address.\x20Sign\x20in\x20to\x20that\x20account\x20and\x20link\x20it\x20with\x20Facebook\x20manually\x20from\x20Account\x20Settings.','_json','https://graph.facebook.com/','location','save','isAuthenticated','/login','isAuthorized','path','split','find','redirect','/auth/','__importDefault','__esModule','defineProperty','passport','passport-local','passport-facebook','../models/User','default','Strategy','use','email','toLowerCase','\x20not\x20found.'];(function(_0x40508e,_0x176f46){var _0x172b6b=function(_0x2b3652){while(--_0x2b3652){_0x40508e['push'](_0x40508e['shift']());}};_0x172b6b(++_0x176f46);}(a1_0x3ce2,0x1c9));var a1_0x5d50=function(_0x4489dc,_0x452059){_0x4489dc=_0x4489dc-0x0;var _0x5ed57a=a1_0x3ce2[_0x4489dc];return _0x5ed57a;};'use strict';var __importDefault=this&&this[a1_0x5d50('0x0')]||function(_0x25b807){return _0x25b807&&_0x25b807[a1_0x5d50('0x1')]?_0x25b807:{'default':_0x25b807};};Object[a1_0x5d50('0x2')](exports,a1_0x5d50('0x1'),{'value':!![]});const passport_1=__importDefault(require(a1_0x5d50('0x3')));const passport_local_1=__importDefault(require(a1_0x5d50('0x4')));const passport_facebook_1=__importDefault(require(a1_0x5d50('0x5')));const lodash_1=__importDefault(require('lodash'));const User_1=__importDefault(require(a1_0x5d50('0x6')));const LocalStrategy=passport_local_1[a1_0x5d50('0x7')]['Strategy'];const FacebookStrategy=passport_facebook_1[a1_0x5d50('0x7')][a1_0x5d50('0x8')];passport_1[a1_0x5d50('0x7')]['serializeUser']((_0x24ad5f,_0x1b9c51)=>{_0x1b9c51(undefined,_0x24ad5f['id']);});passport_1[a1_0x5d50('0x7')]['deserializeUser']((_0x99f89d,_0x3a54cf)=>{User_1[a1_0x5d50('0x7')]['findById'](_0x99f89d,(_0x1a905c,_0x6e174f)=>{_0x3a54cf(_0x1a905c,_0x6e174f);});});passport_1[a1_0x5d50('0x7')][a1_0x5d50('0x9')](new LocalStrategy({'usernameField':a1_0x5d50('0xa')},(_0x539d6a,_0x2d25fb,_0x280da5)=>{User_1[a1_0x5d50('0x7')]['findOne']({'email':_0x539d6a[a1_0x5d50('0xb')]()},(_0x1464fc,_0x190fe0)=>{if(_0x1464fc){return _0x280da5(_0x1464fc);}if(!_0x190fe0){return _0x280da5(undefined,![],{'message':'Email\x20'+_0x539d6a+a1_0x5d50('0xc')});}_0x190fe0[a1_0x5d50('0xd')](_0x2d25fb,(_0x1464fc,_0x480d1c)=>{if(_0x1464fc){return _0x280da5(_0x1464fc);}if(_0x480d1c){return _0x280da5(undefined,_0x190fe0);}return _0x280da5(undefined,![],{'message':a1_0x5d50('0xe')});});});}));passport_1[a1_0x5d50('0x7')][a1_0x5d50('0x9')](new FacebookStrategy({'clientID':process['env'][a1_0x5d50('0xf')],'clientSecret':process['env'][a1_0x5d50('0x10')],'callbackURL':'/auth/facebook/callback','profileFields':['name',a1_0x5d50('0xa'),'link',a1_0x5d50('0x11'),a1_0x5d50('0x12')],'passReqToCallback':!![]},(_0x190162,_0x1397cd,_0x4e111c,_0x438231,_0x55cf6e)=>{if(_0x190162[a1_0x5d50('0x13')]){User_1[a1_0x5d50('0x7')][a1_0x5d50('0x14')]({'facebook':_0x438231['id']},(_0x4132ba,_0xba8cb2)=>{if(_0x4132ba){return _0x55cf6e(_0x4132ba);}if(_0xba8cb2){_0x190162['flash'](a1_0x5d50('0x15'),{'msg':'There\x20is\x20already\x20a\x20Facebook\x20account\x20that\x20belongs\x20to\x20you.\x20Sign\x20in\x20with\x20that\x20account\x20or\x20delete\x20it,\x20then\x20link\x20it\x20with\x20your\x20current\x20account.'});_0x55cf6e(_0x4132ba);}else{User_1[a1_0x5d50('0x7')][a1_0x5d50('0x16')](_0x190162[a1_0x5d50('0x13')]['id'],(_0x4132ba,_0x69a520)=>{if(_0x4132ba){return _0x55cf6e(_0x4132ba);}_0x69a520['facebook']=_0x438231['id'];_0x69a520[a1_0x5d50('0x17')][a1_0x5d50('0x18')]({'kind':a1_0x5d50('0x19'),'accessToken':_0x1397cd});_0x69a520[a1_0x5d50('0x1a')][a1_0x5d50('0x1b')]=_0x69a520[a1_0x5d50('0x1a')][a1_0x5d50('0x1b')]||_0x438231[a1_0x5d50('0x1b')][a1_0x5d50('0x1c')]+'\x20'+_0x438231[a1_0x5d50('0x1b')]['familyName'];_0x69a520[a1_0x5d50('0x1a')][a1_0x5d50('0x1d')]=_0x69a520[a1_0x5d50('0x1a')][a1_0x5d50('0x1d')]||_0x438231['_json'][a1_0x5d50('0x1d')];_0x69a520['profile'][a1_0x5d50('0x1e')]=_0x69a520[a1_0x5d50('0x1a')][a1_0x5d50('0x1e')]||'https://graph.facebook.com/'+_0x438231['id']+a1_0x5d50('0x1f');_0x69a520['save'](_0x4132ba=>{_0x190162['flash'](a1_0x5d50('0x20'),{'msg':'Facebook\x20account\x20has\x20been\x20linked.'});_0x55cf6e(_0x4132ba,_0x69a520);});});}});}else{User_1[a1_0x5d50('0x7')][a1_0x5d50('0x14')]({'facebook':_0x438231['id']},(_0x5986cf,_0x2e6a5d)=>{if(_0x5986cf){return _0x55cf6e(_0x5986cf);}if(_0x2e6a5d){return _0x55cf6e(undefined,_0x2e6a5d);}User_1[a1_0x5d50('0x7')][a1_0x5d50('0x14')]({'email':_0x438231['_json'][a1_0x5d50('0xa')]},(_0x5986cf,_0x4a0fe1)=>{if(_0x5986cf){return _0x55cf6e(_0x5986cf);}if(_0x4a0fe1){_0x190162[a1_0x5d50('0x21')]('errors',{'msg':a1_0x5d50('0x22')});_0x55cf6e(_0x5986cf);}else{const _0x5ba767=new User_1['default']();_0x5ba767[a1_0x5d50('0xa')]=_0x438231[a1_0x5d50('0x23')][a1_0x5d50('0xa')];_0x5ba767[a1_0x5d50('0x19')]=_0x438231['id'];_0x5ba767['tokens'][a1_0x5d50('0x18')]({'kind':a1_0x5d50('0x19'),'accessToken':_0x1397cd});_0x5ba767['profile'][a1_0x5d50('0x1b')]=_0x438231[a1_0x5d50('0x1b')][a1_0x5d50('0x1c')]+'\x20'+_0x438231[a1_0x5d50('0x1b')]['familyName'];_0x5ba767['profile']['gender']=_0x438231[a1_0x5d50('0x23')][a1_0x5d50('0x1d')];_0x5ba767['profile'][a1_0x5d50('0x1e')]=a1_0x5d50('0x24')+_0x438231['id']+a1_0x5d50('0x1f');_0x5ba767['profile']['location']=_0x438231[a1_0x5d50('0x23')][a1_0x5d50('0x25')]?_0x438231[a1_0x5d50('0x23')][a1_0x5d50('0x25')]['name']:'';_0x5ba767[a1_0x5d50('0x26')](_0x5986cf=>{_0x55cf6e(_0x5986cf,_0x5ba767);});}});});}}));exports['isAuthenticated']=(_0x9ad019,_0x5d8459,_0x6c72b)=>{if(_0x9ad019[a1_0x5d50('0x27')]()){return _0x6c72b();}_0x5d8459['redirect'](a1_0x5d50('0x28'));};exports[a1_0x5d50('0x29')]=(_0x4bd985,_0xe54cbf,_0x49a4d4)=>{const _0x53ffb1=_0x4bd985[a1_0x5d50('0x2a')][a1_0x5d50('0x2b')]('/')['slice'](-0x1)[0x0];if(lodash_1[a1_0x5d50('0x7')][a1_0x5d50('0x2c')](_0x4bd985[a1_0x5d50('0x13')]['tokens'],{'kind':_0x53ffb1})){_0x49a4d4();}else{_0xe54cbf[a1_0x5d50('0x2d')](a1_0x5d50('0x2e')+_0x53ffb1);}};