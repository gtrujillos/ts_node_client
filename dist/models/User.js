var a8_0x249b=['bcrypt-nodejs','crypto','mongoose','default','Schema','pre','save','isModified','password','genSalt','methods','gravatar','email','&d=retro','createHash','update','digest','hex','https://gravatar.com/avatar/','?s=','model','__importDefault','__esModule','defineProperty'];(function(_0x2d8f05,_0x4b81bb){var _0x4d74cb=function(_0x32719f){while(--_0x32719f){_0x2d8f05['push'](_0x2d8f05['shift']());}};_0x4d74cb(++_0x4b81bb);}(a8_0x249b,0x8d));var a8_0x1551=function(_0x1878a2,_0x58d3b2){_0x1878a2=_0x1878a2-0x0;var _0x1dff36=a8_0x249b[_0x1878a2];return _0x1dff36;};'use strict';var __importDefault=this&&this[a8_0x1551('0x0')]||function(_0x41b9a2){return _0x41b9a2&&_0x41b9a2[a8_0x1551('0x1')]?_0x41b9a2:{'default':_0x41b9a2};};Object[a8_0x1551('0x2')](exports,'__esModule',{'value':!![]});const bcrypt_nodejs_1=__importDefault(require(a8_0x1551('0x3')));const crypto_1=__importDefault(require(a8_0x1551('0x4')));const mongoose_1=__importDefault(require(a8_0x1551('0x5')));const userSchema=new mongoose_1[(a8_0x1551('0x6'))][(a8_0x1551('0x7'))]({'email':{'type':String,'unique':!![]},'password':String,'passwordResetToken':String,'passwordResetExpires':Date,'facebook':String,'twitter':String,'google':String,'tokens':Array,'profile':{'name':String,'gender':String,'location':String,'website':String,'picture':String}},{'timestamps':!![]});userSchema[a8_0x1551('0x8')](a8_0x1551('0x9'),function save(_0x447e79){const _0x231555=this;if(!_0x231555[a8_0x1551('0xa')](a8_0x1551('0xb'))){return _0x447e79();}bcrypt_nodejs_1[a8_0x1551('0x6')][a8_0x1551('0xc')](0xa,(_0x5ca525,_0x399d98)=>{if(_0x5ca525){return _0x447e79(_0x5ca525);}bcrypt_nodejs_1['default']['hash'](_0x231555[a8_0x1551('0xb')],_0x399d98,undefined,(_0x5ca525,_0x10a78a)=>{if(_0x5ca525){return _0x447e79(_0x5ca525);}_0x231555[a8_0x1551('0xb')]=_0x10a78a;_0x447e79();});});});const comparePassword=function(_0x31c36a,_0x19aa06){bcrypt_nodejs_1['default']['compare'](_0x31c36a,this[a8_0x1551('0xb')],(_0xf595e4,_0x47f0a6)=>{_0x19aa06(_0xf595e4,_0x47f0a6);});};userSchema[a8_0x1551('0xd')]['comparePassword']=comparePassword;userSchema[a8_0x1551('0xd')][a8_0x1551('0xe')]=function(_0x14c9c2){if(!_0x14c9c2){_0x14c9c2=0xc8;}if(!this[a8_0x1551('0xf')]){return'https://gravatar.com/avatar/?s='+_0x14c9c2+a8_0x1551('0x10');}const _0x25d3d0=crypto_1[a8_0x1551('0x6')][a8_0x1551('0x11')]('md5')[a8_0x1551('0x12')](this['email'])[a8_0x1551('0x13')](a8_0x1551('0x14'));return a8_0x1551('0x15')+_0x25d3d0+a8_0x1551('0x16')+_0x14c9c2+a8_0x1551('0x10');};const User=mongoose_1['default'][a8_0x1551('0x17')]('User',userSchema);exports[a8_0x1551('0x6')]=User;