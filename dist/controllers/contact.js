var a3_0x6255=['default','createTransport','SendGrid','env','getContact','render','contact','Contact','postContact','assert','Name\x20cannot\x20be\x20blank','notEmpty','email','Email\x20is\x20not\x20valid','isEmail','message','Message\x20cannot\x20be\x20blank','validationErrors','redirect','/contact','your@email.com','body','name','Contact\x20Form','flash','errors','success','Email\x20has\x20been\x20sent\x20successfully!','__importDefault','__esModule','defineProperty','nodemailer'];(function(_0x48f9ac,_0x477d37){var _0xdec743=function(_0x4328c3){while(--_0x4328c3){_0x48f9ac['push'](_0x48f9ac['shift']());}};_0xdec743(++_0x477d37);}(a3_0x6255,0x1dc));var a3_0x2dd8=function(_0x9faaee,_0x21bff5){_0x9faaee=_0x9faaee-0x0;var _0x21ce4d=a3_0x6255[_0x9faaee];return _0x21ce4d;};'use strict';var __importDefault=this&&this[a3_0x2dd8('0x0')]||function(_0x192564){return _0x192564&&_0x192564[a3_0x2dd8('0x1')]?_0x192564:{'default':_0x192564};};Object[a3_0x2dd8('0x2')](exports,a3_0x2dd8('0x1'),{'value':!![]});const nodemailer_1=__importDefault(require(a3_0x2dd8('0x3')));const transporter=nodemailer_1[a3_0x2dd8('0x4')][a3_0x2dd8('0x5')]({'service':a3_0x2dd8('0x6'),'auth':{'user':process[a3_0x2dd8('0x7')]['SENDGRID_USER'],'pass':process[a3_0x2dd8('0x7')]['SENDGRID_PASSWORD']}});exports[a3_0x2dd8('0x8')]=(_0xdb72bb,_0x4d0a98)=>{_0x4d0a98[a3_0x2dd8('0x9')](a3_0x2dd8('0xa'),{'title':a3_0x2dd8('0xb')});};exports[a3_0x2dd8('0xc')]=(_0x1aaddd,_0x458ae8)=>{_0x1aaddd[a3_0x2dd8('0xd')]('name',a3_0x2dd8('0xe'))[a3_0x2dd8('0xf')]();_0x1aaddd[a3_0x2dd8('0xd')](a3_0x2dd8('0x10'),a3_0x2dd8('0x11'))[a3_0x2dd8('0x12')]();_0x1aaddd['assert'](a3_0x2dd8('0x13'),a3_0x2dd8('0x14'))[a3_0x2dd8('0xf')]();const _0x259b18=_0x1aaddd[a3_0x2dd8('0x15')]();if(_0x259b18){_0x1aaddd['flash']('errors',_0x259b18);return _0x458ae8[a3_0x2dd8('0x16')](a3_0x2dd8('0x17'));}const _0x97bbff={'to':a3_0x2dd8('0x18'),'from':_0x1aaddd[a3_0x2dd8('0x19')][a3_0x2dd8('0x1a')]+'\x20<'+_0x1aaddd[a3_0x2dd8('0x19')][a3_0x2dd8('0x10')]+'>','subject':a3_0x2dd8('0x1b'),'text':_0x1aaddd[a3_0x2dd8('0x19')][a3_0x2dd8('0x13')]};transporter['sendMail'](_0x97bbff,_0x26a1ef=>{if(_0x26a1ef){_0x1aaddd[a3_0x2dd8('0x1c')](a3_0x2dd8('0x1d'),{'msg':_0x26a1ef[a3_0x2dd8('0x13')]});return _0x458ae8['redirect'](a3_0x2dd8('0x17'));}_0x1aaddd['flash'](a3_0x2dd8('0x1e'),{'msg':a3_0x2dd8('0x1f')});_0x458ae8[a3_0x2dd8('0x16')](a3_0x2dd8('0x17'));});};