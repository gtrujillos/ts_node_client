var a1_0x4239=['_json','There\x20is\x20already\x20an\x20account\x20using\x20this\x20email\x20address.\x20Sign\x20in\x20to\x20that\x20account\x20and\x20link\x20it\x20with\x20Facebook\x20manually\x20from\x20Account\x20Settings.','push','familyName','/picture?type=large','location','isAuthenticated','/login','split','slice','redirect','/auth/','__importDefault','__esModule','defineProperty','passport','passport-local','passport-facebook','../models/User','default','Strategy','serializeUser','findById','use','email','findOne','toLowerCase','Email\x20','\x20not\x20found.','comparePassword','Invalid\x20email\x20or\x20password.','env','FACEBOOK_ID','name','locale','timezone','user','flash','errors','facebook','tokens','profile','gender','picture','https://graph.facebook.com/','save','Facebook\x20account\x20has\x20been\x20linked.'];(function(_0x3c42b4,_0xa198d5){var _0x49acb5=function(_0x45bc7f){while(--_0x45bc7f){_0x3c42b4['push'](_0x3c42b4['shift']());}};_0x49acb5(++_0xa198d5);}(a1_0x4239,0x6a));var a1_0x4c24=function(_0x38c4ec,_0x461f60){_0x38c4ec=_0x38c4ec-0x0;var _0x9df6b4=a1_0x4239[_0x38c4ec];return _0x9df6b4;};'use strict';var __importDefault=this&&this[a1_0x4c24('0x0')]||function(_0x39c415){return _0x39c415&&_0x39c415[a1_0x4c24('0x1')]?_0x39c415:{'default':_0x39c415};};Object[a1_0x4c24('0x2')](exports,'__esModule',{'value':!![]});const passport_1=__importDefault(require(a1_0x4c24('0x3')));const passport_local_1=__importDefault(require(a1_0x4c24('0x4')));const passport_facebook_1=__importDefault(require(a1_0x4c24('0x5')));const lodash_1=__importDefault(require('lodash'));const User_1=__importDefault(require(a1_0x4c24('0x6')));const LocalStrategy=passport_local_1['default']['Strategy'];const FacebookStrategy=passport_facebook_1[a1_0x4c24('0x7')][a1_0x4c24('0x8')];passport_1['default'][a1_0x4c24('0x9')]((_0x548a4e,_0x430ee9)=>{_0x430ee9(undefined,_0x548a4e['id']);});passport_1[a1_0x4c24('0x7')]['deserializeUser']((_0x466e06,_0x530061)=>{User_1[a1_0x4c24('0x7')][a1_0x4c24('0xa')](_0x466e06,(_0x3d8d2a,_0x46795d)=>{_0x530061(_0x3d8d2a,_0x46795d);});});passport_1['default'][a1_0x4c24('0xb')](new LocalStrategy({'usernameField':a1_0x4c24('0xc')},(_0x4b728b,_0x154de1,_0x266884)=>{User_1[a1_0x4c24('0x7')][a1_0x4c24('0xd')]({'email':_0x4b728b[a1_0x4c24('0xe')]()},(_0x1d2912,_0x40420d)=>{if(_0x1d2912){return _0x266884(_0x1d2912);}if(!_0x40420d){return _0x266884(undefined,![],{'message':a1_0x4c24('0xf')+_0x4b728b+a1_0x4c24('0x10')});}_0x40420d[a1_0x4c24('0x11')](_0x154de1,(_0x1d2912,_0x3905b4)=>{if(_0x1d2912){return _0x266884(_0x1d2912);}if(_0x3905b4){return _0x266884(undefined,_0x40420d);}return _0x266884(undefined,![],{'message':a1_0x4c24('0x12')});});});}));passport_1['default'][a1_0x4c24('0xb')](new FacebookStrategy({'clientID':process[a1_0x4c24('0x13')][a1_0x4c24('0x14')],'clientSecret':process[a1_0x4c24('0x13')]['FACEBOOK_SECRET'],'callbackURL':'/auth/facebook/callback','profileFields':[a1_0x4c24('0x15'),a1_0x4c24('0xc'),'link',a1_0x4c24('0x16'),a1_0x4c24('0x17')],'passReqToCallback':!![]},(_0x22e375,_0x50dc80,_0x5a5d8d,_0x4e586a,_0x53a5e3)=>{if(_0x22e375[a1_0x4c24('0x18')]){User_1[a1_0x4c24('0x7')]['findOne']({'facebook':_0x4e586a['id']},(_0x3763f9,_0x4318b0)=>{if(_0x3763f9){return _0x53a5e3(_0x3763f9);}if(_0x4318b0){_0x22e375[a1_0x4c24('0x19')](a1_0x4c24('0x1a'),{'msg':'There\x20is\x20already\x20a\x20Facebook\x20account\x20that\x20belongs\x20to\x20you.\x20Sign\x20in\x20with\x20that\x20account\x20or\x20delete\x20it,\x20then\x20link\x20it\x20with\x20your\x20current\x20account.'});_0x53a5e3(_0x3763f9);}else{User_1[a1_0x4c24('0x7')][a1_0x4c24('0xa')](_0x22e375[a1_0x4c24('0x18')]['id'],(_0x3763f9,_0x55b10e)=>{if(_0x3763f9){return _0x53a5e3(_0x3763f9);}_0x55b10e[a1_0x4c24('0x1b')]=_0x4e586a['id'];_0x55b10e[a1_0x4c24('0x1c')]['push']({'kind':a1_0x4c24('0x1b'),'accessToken':_0x50dc80});_0x55b10e[a1_0x4c24('0x1d')][a1_0x4c24('0x15')]=_0x55b10e[a1_0x4c24('0x1d')]['name']||_0x4e586a['name']['givenName']+'\x20'+_0x4e586a[a1_0x4c24('0x15')]['familyName'];_0x55b10e[a1_0x4c24('0x1d')]['gender']=_0x55b10e['profile'][a1_0x4c24('0x1e')]||_0x4e586a['_json']['gender'];_0x55b10e[a1_0x4c24('0x1d')][a1_0x4c24('0x1f')]=_0x55b10e[a1_0x4c24('0x1d')][a1_0x4c24('0x1f')]||a1_0x4c24('0x20')+_0x4e586a['id']+'/picture?type=large';_0x55b10e[a1_0x4c24('0x21')](_0x3763f9=>{_0x22e375['flash']('info',{'msg':a1_0x4c24('0x22')});_0x53a5e3(_0x3763f9,_0x55b10e);});});}});}else{User_1[a1_0x4c24('0x7')][a1_0x4c24('0xd')]({'facebook':_0x4e586a['id']},(_0x3f375e,_0x206e1b)=>{if(_0x3f375e){return _0x53a5e3(_0x3f375e);}if(_0x206e1b){return _0x53a5e3(undefined,_0x206e1b);}User_1[a1_0x4c24('0x7')]['findOne']({'email':_0x4e586a[a1_0x4c24('0x23')][a1_0x4c24('0xc')]},(_0x3f375e,_0x19067d)=>{if(_0x3f375e){return _0x53a5e3(_0x3f375e);}if(_0x19067d){_0x22e375[a1_0x4c24('0x19')](a1_0x4c24('0x1a'),{'msg':a1_0x4c24('0x24')});_0x53a5e3(_0x3f375e);}else{const _0xbeb821=new User_1[(a1_0x4c24('0x7'))]();_0xbeb821[a1_0x4c24('0xc')]=_0x4e586a[a1_0x4c24('0x23')][a1_0x4c24('0xc')];_0xbeb821[a1_0x4c24('0x1b')]=_0x4e586a['id'];_0xbeb821[a1_0x4c24('0x1c')][a1_0x4c24('0x25')]({'kind':a1_0x4c24('0x1b'),'accessToken':_0x50dc80});_0xbeb821[a1_0x4c24('0x1d')][a1_0x4c24('0x15')]=_0x4e586a[a1_0x4c24('0x15')]['givenName']+'\x20'+_0x4e586a[a1_0x4c24('0x15')][a1_0x4c24('0x26')];_0xbeb821[a1_0x4c24('0x1d')][a1_0x4c24('0x1e')]=_0x4e586a[a1_0x4c24('0x23')]['gender'];_0xbeb821[a1_0x4c24('0x1d')]['picture']='https://graph.facebook.com/'+_0x4e586a['id']+a1_0x4c24('0x27');_0xbeb821[a1_0x4c24('0x1d')][a1_0x4c24('0x28')]=_0x4e586a[a1_0x4c24('0x23')][a1_0x4c24('0x28')]?_0x4e586a['_json']['location'][a1_0x4c24('0x15')]:'';_0xbeb821['save'](_0x3f375e=>{_0x53a5e3(_0x3f375e,_0xbeb821);});}});});}}));exports[a1_0x4c24('0x29')]=(_0x53c994,_0x8a23aa,_0x3d77ca)=>{if(_0x53c994[a1_0x4c24('0x29')]()){return _0x3d77ca();}_0x8a23aa['redirect'](a1_0x4c24('0x2a'));};exports['isAuthorized']=(_0x346004,_0x15e593,_0x393031)=>{const _0x56766d=_0x346004['path'][a1_0x4c24('0x2b')]('/')[a1_0x4c24('0x2c')](-0x1)[0x0];if(lodash_1[a1_0x4c24('0x7')]['find'](_0x346004[a1_0x4c24('0x18')][a1_0x4c24('0x1c')],{'kind':_0x56766d})){_0x393031();}else{_0x15e593[a1_0x4c24('0x2d')](a1_0x4c24('0x2e')+_0x56766d);}};