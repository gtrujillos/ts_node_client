var a3_0x4f27=['message','Message\x20cannot\x20be\x20blank','validationErrors','flash','redirect','/contact','your@email.com','body','Contact\x20Form','errors','Email\x20has\x20been\x20sent\x20successfully!','__importDefault','defineProperty','__esModule','nodemailer','createTransport','SendGrid','getContact','render','contact','Contact','postContact','assert','name','Name\x20cannot\x20be\x20blank','Email\x20is\x20not\x20valid','isEmail'];(function(_0xfb6dea,_0x128596){var _0x5f113b=function(_0x372311){while(--_0x372311){_0xfb6dea['push'](_0xfb6dea['shift']());}};_0x5f113b(++_0x128596);}(a3_0x4f27,0x185));var a3_0x2c2f=function(_0x9fcd8a,_0x1cced3){_0x9fcd8a=_0x9fcd8a-0x0;var _0x2de8f6=a3_0x4f27[_0x9fcd8a];return _0x2de8f6;};'use strict';var __importDefault=this&&this[a3_0x2c2f('0x0')]||function(_0x9fa080){return _0x9fa080&&_0x9fa080['__esModule']?_0x9fa080:{'default':_0x9fa080};};Object[a3_0x2c2f('0x1')](exports,a3_0x2c2f('0x2'),{'value':!![]});const nodemailer_1=__importDefault(require(a3_0x2c2f('0x3')));const transporter=nodemailer_1['default'][a3_0x2c2f('0x4')]({'service':a3_0x2c2f('0x5'),'auth':{'user':process['env']['SENDGRID_USER'],'pass':process['env']['SENDGRID_PASSWORD']}});exports[a3_0x2c2f('0x6')]=(_0x289162,_0x5455d9)=>{_0x5455d9[a3_0x2c2f('0x7')](a3_0x2c2f('0x8'),{'title':a3_0x2c2f('0x9')});};exports[a3_0x2c2f('0xa')]=(_0x472999,_0x18177b)=>{_0x472999[a3_0x2c2f('0xb')](a3_0x2c2f('0xc'),a3_0x2c2f('0xd'))['notEmpty']();_0x472999[a3_0x2c2f('0xb')]('email',a3_0x2c2f('0xe'))[a3_0x2c2f('0xf')]();_0x472999[a3_0x2c2f('0xb')](a3_0x2c2f('0x10'),a3_0x2c2f('0x11'))['notEmpty']();const _0x18c8a5=_0x472999[a3_0x2c2f('0x12')]();if(_0x18c8a5){_0x472999[a3_0x2c2f('0x13')]('errors',_0x18c8a5);return _0x18177b[a3_0x2c2f('0x14')](a3_0x2c2f('0x15'));}const _0x509dfb={'to':a3_0x2c2f('0x16'),'from':_0x472999[a3_0x2c2f('0x17')][a3_0x2c2f('0xc')]+'\x20<'+_0x472999[a3_0x2c2f('0x17')]['email']+'>','subject':a3_0x2c2f('0x18'),'text':_0x472999[a3_0x2c2f('0x17')][a3_0x2c2f('0x10')]};transporter['sendMail'](_0x509dfb,_0x1292bc=>{if(_0x1292bc){_0x472999[a3_0x2c2f('0x13')](a3_0x2c2f('0x19'),{'msg':_0x1292bc[a3_0x2c2f('0x10')]});return _0x18177b[a3_0x2c2f('0x14')](a3_0x2c2f('0x15'));}_0x472999[a3_0x2c2f('0x13')]('success',{'msg':a3_0x2c2f('0x1a')});_0x18177b[a3_0x2c2f('0x14')]('/contact');});};