var a1_0x2e63=['flash','familyName','location','save','isAuthenticated','/login','split','slice','find','redirect','/auth/','__importDefault','__esModule','defineProperty','passport-facebook','lodash','default','Strategy','deserializeUser','use','email','findOne','toLowerCase','comparePassword','Invalid\x20email\x20or\x20password.','env','FACEBOOK_SECRET','/auth/facebook/callback','name','link','timezone','user','errors','There\x20is\x20already\x20a\x20Facebook\x20account\x20that\x20belongs\x20to\x20you.\x20Sign\x20in\x20with\x20that\x20account\x20or\x20delete\x20it,\x20then\x20link\x20it\x20with\x20your\x20current\x20account.','findById','facebook','tokens','push','profile','givenName','gender','_json','picture','https://graph.facebook.com/','/picture?type=large','Facebook\x20account\x20has\x20been\x20linked.'];(function(_0x49288b,_0x35003f){var _0x10285f=function(_0x1ef597){while(--_0x1ef597){_0x49288b['push'](_0x49288b['shift']());}};_0x10285f(++_0x35003f);}(a1_0x2e63,0x95));var a1_0x4382=function(_0x2d8f05,_0x4b81bb){_0x2d8f05=_0x2d8f05-0x0;var _0x4d74cb=a1_0x2e63[_0x2d8f05];return _0x4d74cb;};'use strict';var __importDefault=this&&this[a1_0x4382('0x0')]||function(_0x3d4ef3){return _0x3d4ef3&&_0x3d4ef3[a1_0x4382('0x1')]?_0x3d4ef3:{'default':_0x3d4ef3};};Object[a1_0x4382('0x2')](exports,a1_0x4382('0x1'),{'value':!![]});const passport_1=__importDefault(require('passport'));const passport_local_1=__importDefault(require('passport-local'));const passport_facebook_1=__importDefault(require(a1_0x4382('0x3')));const lodash_1=__importDefault(require(a1_0x4382('0x4')));const User_1=__importDefault(require('../models/User'));const LocalStrategy=passport_local_1[a1_0x4382('0x5')][a1_0x4382('0x6')];const FacebookStrategy=passport_facebook_1['default'][a1_0x4382('0x6')];passport_1[a1_0x4382('0x5')]['serializeUser']((_0x14cba2,_0x2efec5)=>{_0x2efec5(undefined,_0x14cba2['id']);});passport_1[a1_0x4382('0x5')][a1_0x4382('0x7')]((_0xcec7f5,_0x25746d)=>{User_1[a1_0x4382('0x5')]['findById'](_0xcec7f5,(_0x481e81,_0x28b4c8)=>{_0x25746d(_0x481e81,_0x28b4c8);});});passport_1[a1_0x4382('0x5')][a1_0x4382('0x8')](new LocalStrategy({'usernameField':a1_0x4382('0x9')},(_0x5eb463,_0x27aa2c,_0x253bdd)=>{User_1['default'][a1_0x4382('0xa')]({'email':_0x5eb463[a1_0x4382('0xb')]()},(_0x11b907,_0x47db32)=>{if(_0x11b907){return _0x253bdd(_0x11b907);}if(!_0x47db32){return _0x253bdd(undefined,![],{'message':'Email\x20'+_0x5eb463+'\x20not\x20found.'});}_0x47db32[a1_0x4382('0xc')](_0x27aa2c,(_0x11b907,_0x527381)=>{if(_0x11b907){return _0x253bdd(_0x11b907);}if(_0x527381){return _0x253bdd(undefined,_0x47db32);}return _0x253bdd(undefined,![],{'message':a1_0x4382('0xd')});});});}));passport_1['default'][a1_0x4382('0x8')](new FacebookStrategy({'clientID':process['env']['FACEBOOK_ID'],'clientSecret':process[a1_0x4382('0xe')][a1_0x4382('0xf')],'callbackURL':a1_0x4382('0x10'),'profileFields':[a1_0x4382('0x11'),'email',a1_0x4382('0x12'),'locale',a1_0x4382('0x13')],'passReqToCallback':!![]},(_0x4edf23,_0x5a5f7f,_0x4fe675,_0x564df5,_0x3f28a2)=>{if(_0x4edf23[a1_0x4382('0x14')]){User_1[a1_0x4382('0x5')]['findOne']({'facebook':_0x564df5['id']},(_0x13ab02,_0x5d16b3)=>{if(_0x13ab02){return _0x3f28a2(_0x13ab02);}if(_0x5d16b3){_0x4edf23['flash'](a1_0x4382('0x15'),{'msg':a1_0x4382('0x16')});_0x3f28a2(_0x13ab02);}else{User_1['default'][a1_0x4382('0x17')](_0x4edf23[a1_0x4382('0x14')]['id'],(_0x13ab02,_0x18a0d3)=>{if(_0x13ab02){return _0x3f28a2(_0x13ab02);}_0x18a0d3[a1_0x4382('0x18')]=_0x564df5['id'];_0x18a0d3[a1_0x4382('0x19')][a1_0x4382('0x1a')]({'kind':a1_0x4382('0x18'),'accessToken':_0x5a5f7f});_0x18a0d3[a1_0x4382('0x1b')][a1_0x4382('0x11')]=_0x18a0d3['profile'][a1_0x4382('0x11')]||_0x564df5[a1_0x4382('0x11')][a1_0x4382('0x1c')]+'\x20'+_0x564df5[a1_0x4382('0x11')]['familyName'];_0x18a0d3[a1_0x4382('0x1b')][a1_0x4382('0x1d')]=_0x18a0d3[a1_0x4382('0x1b')]['gender']||_0x564df5[a1_0x4382('0x1e')]['gender'];_0x18a0d3['profile'][a1_0x4382('0x1f')]=_0x18a0d3[a1_0x4382('0x1b')][a1_0x4382('0x1f')]||a1_0x4382('0x20')+_0x564df5['id']+a1_0x4382('0x21');_0x18a0d3['save'](_0x13ab02=>{_0x4edf23['flash']('info',{'msg':a1_0x4382('0x22')});_0x3f28a2(_0x13ab02,_0x18a0d3);});});}});}else{User_1['default'][a1_0x4382('0xa')]({'facebook':_0x564df5['id']},(_0x393115,_0xd0409d)=>{if(_0x393115){return _0x3f28a2(_0x393115);}if(_0xd0409d){return _0x3f28a2(undefined,_0xd0409d);}User_1[a1_0x4382('0x5')][a1_0x4382('0xa')]({'email':_0x564df5[a1_0x4382('0x1e')][a1_0x4382('0x9')]},(_0x393115,_0x304e19)=>{if(_0x393115){return _0x3f28a2(_0x393115);}if(_0x304e19){_0x4edf23[a1_0x4382('0x23')](a1_0x4382('0x15'),{'msg':'There\x20is\x20already\x20an\x20account\x20using\x20this\x20email\x20address.\x20Sign\x20in\x20to\x20that\x20account\x20and\x20link\x20it\x20with\x20Facebook\x20manually\x20from\x20Account\x20Settings.'});_0x3f28a2(_0x393115);}else{const _0x527609=new User_1[(a1_0x4382('0x5'))]();_0x527609['email']=_0x564df5[a1_0x4382('0x1e')][a1_0x4382('0x9')];_0x527609[a1_0x4382('0x18')]=_0x564df5['id'];_0x527609['tokens']['push']({'kind':'facebook','accessToken':_0x5a5f7f});_0x527609['profile'][a1_0x4382('0x11')]=_0x564df5[a1_0x4382('0x11')]['givenName']+'\x20'+_0x564df5['name'][a1_0x4382('0x24')];_0x527609[a1_0x4382('0x1b')][a1_0x4382('0x1d')]=_0x564df5[a1_0x4382('0x1e')][a1_0x4382('0x1d')];_0x527609[a1_0x4382('0x1b')][a1_0x4382('0x1f')]=a1_0x4382('0x20')+_0x564df5['id']+'/picture?type=large';_0x527609[a1_0x4382('0x1b')][a1_0x4382('0x25')]=_0x564df5[a1_0x4382('0x1e')][a1_0x4382('0x25')]?_0x564df5[a1_0x4382('0x1e')][a1_0x4382('0x25')]['name']:'';_0x527609[a1_0x4382('0x26')](_0x393115=>{_0x3f28a2(_0x393115,_0x527609);});}});});}}));exports[a1_0x4382('0x27')]=(_0x44f058,_0x436325,_0x128cc8)=>{if(_0x44f058[a1_0x4382('0x27')]()){return _0x128cc8();}_0x436325['redirect'](a1_0x4382('0x28'));};exports['isAuthorized']=(_0x394f53,_0x3a6092,_0x1c986b)=>{const _0x3ca7f5=_0x394f53['path'][a1_0x4382('0x29')]('/')[a1_0x4382('0x2a')](-0x1)[0x0];if(lodash_1['default'][a1_0x4382('0x2b')](_0x394f53[a1_0x4382('0x14')][a1_0x4382('0x19')],{'kind':_0x3ca7f5})){_0x1c986b();}else{_0x3a6092[a1_0x4382('0x2c')](a1_0x4382('0x2d')+_0x3ca7f5);}};