var a3_0x4541=['default','createTransport','env','SENDGRID_PASSWORD','getContact','render','contact','Contact','postContact','name','Name\x20cannot\x20be\x20blank','notEmpty','email','Email\x20is\x20not\x20valid','isEmail','assert','message','Message\x20cannot\x20be\x20blank','validationErrors','flash','errors','redirect','your@email.com','body','success','Email\x20has\x20been\x20sent\x20successfully!','/contact','__importDefault','__esModule','defineProperty','nodemailer'];(function(_0x2df6a9,_0x447e86){var _0x2ff88c=function(_0x225e56){while(--_0x225e56){_0x2df6a9['push'](_0x2df6a9['shift']());}};_0x2ff88c(++_0x447e86);}(a3_0x4541,0x1ae));var a3_0x3104=function(_0x3d04ca,_0xc73000){_0x3d04ca=_0x3d04ca-0x0;var _0x4a01bf=a3_0x4541[_0x3d04ca];return _0x4a01bf;};'use strict';var __importDefault=this&&this[a3_0x3104('0x0')]||function(_0x22bd54){return _0x22bd54&&_0x22bd54[a3_0x3104('0x1')]?_0x22bd54:{'default':_0x22bd54};};Object[a3_0x3104('0x2')](exports,a3_0x3104('0x1'),{'value':!![]});const nodemailer_1=__importDefault(require(a3_0x3104('0x3')));const transporter=nodemailer_1[a3_0x3104('0x4')][a3_0x3104('0x5')]({'service':'SendGrid','auth':{'user':process[a3_0x3104('0x6')]['SENDGRID_USER'],'pass':process[a3_0x3104('0x6')][a3_0x3104('0x7')]}});exports[a3_0x3104('0x8')]=(_0x572ced,_0x497841)=>{_0x497841[a3_0x3104('0x9')](a3_0x3104('0xa'),{'title':a3_0x3104('0xb')});};exports[a3_0x3104('0xc')]=(_0x36d1b2,_0x3a7598)=>{_0x36d1b2['assert'](a3_0x3104('0xd'),a3_0x3104('0xe'))[a3_0x3104('0xf')]();_0x36d1b2['assert'](a3_0x3104('0x10'),a3_0x3104('0x11'))[a3_0x3104('0x12')]();_0x36d1b2[a3_0x3104('0x13')](a3_0x3104('0x14'),a3_0x3104('0x15'))['notEmpty']();const _0x35ccbc=_0x36d1b2[a3_0x3104('0x16')]();if(_0x35ccbc){_0x36d1b2[a3_0x3104('0x17')](a3_0x3104('0x18'),_0x35ccbc);return _0x3a7598[a3_0x3104('0x19')]('/contact');}const _0x3f9317={'to':a3_0x3104('0x1a'),'from':_0x36d1b2[a3_0x3104('0x1b')][a3_0x3104('0xd')]+'\x20<'+_0x36d1b2['body'][a3_0x3104('0x10')]+'>','subject':'Contact\x20Form','text':_0x36d1b2[a3_0x3104('0x1b')]['message']};transporter['sendMail'](_0x3f9317,_0x410caa=>{if(_0x410caa){_0x36d1b2[a3_0x3104('0x17')]('errors',{'msg':_0x410caa[a3_0x3104('0x14')]});return _0x3a7598[a3_0x3104('0x19')]('/contact');}_0x36d1b2[a3_0x3104('0x17')](a3_0x3104('0x1c'),{'msg':a3_0x3104('0x1d')});_0x3a7598[a3_0x3104('0x19')](a3_0x3104('0x1e'));});};