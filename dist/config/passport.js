var a1_0x5db3=['picture','https://graph.facebook.com/','/picture?type=large','save','flash','Facebook\x20account\x20has\x20been\x20linked.','_json','There\x20is\x20already\x20an\x20account\x20using\x20this\x20email\x20address.\x20Sign\x20in\x20to\x20that\x20account\x20and\x20link\x20it\x20with\x20Facebook\x20manually\x20from\x20Account\x20Settings.','email','tokens','location','isAuthenticated','isAuthorized','slice','find','__importDefault','__esModule','defineProperty','default','Strategy','serializeUser','deserializeUser','findById','use','findOne','toLowerCase','Email\x20','\x20not\x20found.','comparePassword','Invalid\x20email\x20or\x20password.','env','FACEBOOK_ID','/auth/facebook/callback','name','link','locale','timezone','user','errors','facebook','push','profile','givenName','familyName','gender'];(function(_0x1c9b72,_0x3567da){var _0x16688b=function(_0x5afe10){while(--_0x5afe10){_0x1c9b72['push'](_0x1c9b72['shift']());}};_0x16688b(++_0x3567da);}(a1_0x5db3,0x177));var a1_0xcd7b=function(_0x2538c9,_0xab1909){_0x2538c9=_0x2538c9-0x0;var _0x4cd961=a1_0x5db3[_0x2538c9];return _0x4cd961;};'use strict';var __importDefault=this&&this[a1_0xcd7b('0x0')]||function(_0xd8d04a){return _0xd8d04a&&_0xd8d04a[a1_0xcd7b('0x1')]?_0xd8d04a:{'default':_0xd8d04a};};Object[a1_0xcd7b('0x2')](exports,a1_0xcd7b('0x1'),{'value':!![]});const passport_1=__importDefault(require('passport'));const passport_local_1=__importDefault(require('passport-local'));const passport_facebook_1=__importDefault(require('passport-facebook'));const lodash_1=__importDefault(require('lodash'));const User_1=__importDefault(require('../models/User'));const LocalStrategy=passport_local_1[a1_0xcd7b('0x3')][a1_0xcd7b('0x4')];const FacebookStrategy=passport_facebook_1[a1_0xcd7b('0x3')][a1_0xcd7b('0x4')];passport_1[a1_0xcd7b('0x3')][a1_0xcd7b('0x5')]((_0x536a9f,_0x28ab6d)=>{_0x28ab6d(undefined,_0x536a9f['id']);});passport_1[a1_0xcd7b('0x3')][a1_0xcd7b('0x6')]((_0x4ae118,_0x4b4f14)=>{User_1[a1_0xcd7b('0x3')][a1_0xcd7b('0x7')](_0x4ae118,(_0x6dd666,_0x9f72be)=>{_0x4b4f14(_0x6dd666,_0x9f72be);});});passport_1['default'][a1_0xcd7b('0x8')](new LocalStrategy({'usernameField':'email'},(_0x2bb4fe,_0x2f5ee8,_0x485360)=>{User_1[a1_0xcd7b('0x3')][a1_0xcd7b('0x9')]({'email':_0x2bb4fe[a1_0xcd7b('0xa')]()},(_0x5978be,_0x5f1b3e)=>{if(_0x5978be){return _0x485360(_0x5978be);}if(!_0x5f1b3e){return _0x485360(undefined,![],{'message':a1_0xcd7b('0xb')+_0x2bb4fe+a1_0xcd7b('0xc')});}_0x5f1b3e[a1_0xcd7b('0xd')](_0x2f5ee8,(_0x5978be,_0x55940e)=>{if(_0x5978be){return _0x485360(_0x5978be);}if(_0x55940e){return _0x485360(undefined,_0x5f1b3e);}return _0x485360(undefined,![],{'message':a1_0xcd7b('0xe')});});});}));passport_1['default'][a1_0xcd7b('0x8')](new FacebookStrategy({'clientID':process[a1_0xcd7b('0xf')][a1_0xcd7b('0x10')],'clientSecret':process['env']['FACEBOOK_SECRET'],'callbackURL':a1_0xcd7b('0x11'),'profileFields':[a1_0xcd7b('0x12'),'email',a1_0xcd7b('0x13'),a1_0xcd7b('0x14'),a1_0xcd7b('0x15')],'passReqToCallback':!![]},(_0x24069b,_0x57fe55,_0x1842ee,_0x206a57,_0x366834)=>{if(_0x24069b[a1_0xcd7b('0x16')]){User_1['default']['findOne']({'facebook':_0x206a57['id']},(_0x2da599,_0x419ce1)=>{if(_0x2da599){return _0x366834(_0x2da599);}if(_0x419ce1){_0x24069b['flash'](a1_0xcd7b('0x17'),{'msg':'There\x20is\x20already\x20a\x20Facebook\x20account\x20that\x20belongs\x20to\x20you.\x20Sign\x20in\x20with\x20that\x20account\x20or\x20delete\x20it,\x20then\x20link\x20it\x20with\x20your\x20current\x20account.'});_0x366834(_0x2da599);}else{User_1[a1_0xcd7b('0x3')][a1_0xcd7b('0x7')](_0x24069b[a1_0xcd7b('0x16')]['id'],(_0x2da599,_0x1fee93)=>{if(_0x2da599){return _0x366834(_0x2da599);}_0x1fee93[a1_0xcd7b('0x18')]=_0x206a57['id'];_0x1fee93['tokens'][a1_0xcd7b('0x19')]({'kind':a1_0xcd7b('0x18'),'accessToken':_0x57fe55});_0x1fee93[a1_0xcd7b('0x1a')][a1_0xcd7b('0x12')]=_0x1fee93[a1_0xcd7b('0x1a')][a1_0xcd7b('0x12')]||_0x206a57[a1_0xcd7b('0x12')][a1_0xcd7b('0x1b')]+'\x20'+_0x206a57[a1_0xcd7b('0x12')][a1_0xcd7b('0x1c')];_0x1fee93[a1_0xcd7b('0x1a')]['gender']=_0x1fee93['profile'][a1_0xcd7b('0x1d')]||_0x206a57['_json'][a1_0xcd7b('0x1d')];_0x1fee93[a1_0xcd7b('0x1a')][a1_0xcd7b('0x1e')]=_0x1fee93['profile']['picture']||a1_0xcd7b('0x1f')+_0x206a57['id']+a1_0xcd7b('0x20');_0x1fee93[a1_0xcd7b('0x21')](_0x2da599=>{_0x24069b[a1_0xcd7b('0x22')]('info',{'msg':a1_0xcd7b('0x23')});_0x366834(_0x2da599,_0x1fee93);});});}});}else{User_1[a1_0xcd7b('0x3')][a1_0xcd7b('0x9')]({'facebook':_0x206a57['id']},(_0x36bd54,_0x46d6a2)=>{if(_0x36bd54){return _0x366834(_0x36bd54);}if(_0x46d6a2){return _0x366834(undefined,_0x46d6a2);}User_1[a1_0xcd7b('0x3')]['findOne']({'email':_0x206a57[a1_0xcd7b('0x24')]['email']},(_0x36bd54,_0x323498)=>{if(_0x36bd54){return _0x366834(_0x36bd54);}if(_0x323498){_0x24069b['flash']('errors',{'msg':a1_0xcd7b('0x25')});_0x366834(_0x36bd54);}else{const _0x29a8e9=new User_1['default']();_0x29a8e9[a1_0xcd7b('0x26')]=_0x206a57['_json'][a1_0xcd7b('0x26')];_0x29a8e9['facebook']=_0x206a57['id'];_0x29a8e9[a1_0xcd7b('0x27')][a1_0xcd7b('0x19')]({'kind':a1_0xcd7b('0x18'),'accessToken':_0x57fe55});_0x29a8e9['profile'][a1_0xcd7b('0x12')]=_0x206a57[a1_0xcd7b('0x12')][a1_0xcd7b('0x1b')]+'\x20'+_0x206a57['name'][a1_0xcd7b('0x1c')];_0x29a8e9['profile'][a1_0xcd7b('0x1d')]=_0x206a57['_json'][a1_0xcd7b('0x1d')];_0x29a8e9[a1_0xcd7b('0x1a')][a1_0xcd7b('0x1e')]='https://graph.facebook.com/'+_0x206a57['id']+a1_0xcd7b('0x20');_0x29a8e9[a1_0xcd7b('0x1a')]['location']=_0x206a57[a1_0xcd7b('0x24')][a1_0xcd7b('0x28')]?_0x206a57['_json'][a1_0xcd7b('0x28')][a1_0xcd7b('0x12')]:'';_0x29a8e9[a1_0xcd7b('0x21')](_0x36bd54=>{_0x366834(_0x36bd54,_0x29a8e9);});}});});}}));exports['isAuthenticated']=(_0x22fb87,_0xc9163e,_0x558483)=>{if(_0x22fb87[a1_0xcd7b('0x29')]()){return _0x558483();}_0xc9163e['redirect']('/login');};exports[a1_0xcd7b('0x2a')]=(_0x351b99,_0x4e962a,_0xf71547)=>{const _0x189569=_0x351b99['path']['split']('/')[a1_0xcd7b('0x2b')](-0x1)[0x0];if(lodash_1[a1_0xcd7b('0x3')][a1_0xcd7b('0x2c')](_0x351b99[a1_0xcd7b('0x16')]['tokens'],{'kind':_0x189569})){_0xf71547();}else{_0x4e962a['redirect']('/auth/'+_0x189569);}};