var a3_0x1229=['errors','redirect','your@email.com','body','Contact\x20Form','message','Email\x20has\x20been\x20sent\x20successfully!','/contact','__importDefault','__esModule','defineProperty','nodemailer','default','createTransport','env','SENDGRID_USER','SENDGRID_PASSWORD','getContact','render','contact','postContact','assert','name','Name\x20cannot\x20be\x20blank','email','Email\x20is\x20not\x20valid','isEmail','Message\x20cannot\x20be\x20blank','notEmpty','validationErrors','flash'];(function(_0x175964,_0x27fd38){var _0x22af36=function(_0x3ef743){while(--_0x3ef743){_0x175964['push'](_0x175964['shift']());}};_0x22af36(++_0x27fd38);}(a3_0x1229,0xa3));var a3_0x299c=function(_0x55a5a6,_0x10092b){_0x55a5a6=_0x55a5a6-0x0;var _0x59150d=a3_0x1229[_0x55a5a6];return _0x59150d;};'use strict';var __importDefault=this&&this[a3_0x299c('0x0')]||function(_0xf45888){return _0xf45888&&_0xf45888[a3_0x299c('0x1')]?_0xf45888:{'default':_0xf45888};};Object[a3_0x299c('0x2')](exports,a3_0x299c('0x1'),{'value':!![]});const nodemailer_1=__importDefault(require(a3_0x299c('0x3')));const transporter=nodemailer_1[a3_0x299c('0x4')][a3_0x299c('0x5')]({'service':'SendGrid','auth':{'user':process[a3_0x299c('0x6')][a3_0x299c('0x7')],'pass':process[a3_0x299c('0x6')][a3_0x299c('0x8')]}});exports[a3_0x299c('0x9')]=(_0x2e8f16,_0x47db43)=>{_0x47db43[a3_0x299c('0xa')](a3_0x299c('0xb'),{'title':'Contact'});};exports[a3_0x299c('0xc')]=(_0x500c21,_0x5ce962)=>{_0x500c21[a3_0x299c('0xd')](a3_0x299c('0xe'),a3_0x299c('0xf'))['notEmpty']();_0x500c21[a3_0x299c('0xd')](a3_0x299c('0x10'),a3_0x299c('0x11'))[a3_0x299c('0x12')]();_0x500c21['assert']('message',a3_0x299c('0x13'))[a3_0x299c('0x14')]();const _0x34bef2=_0x500c21[a3_0x299c('0x15')]();if(_0x34bef2){_0x500c21[a3_0x299c('0x16')](a3_0x299c('0x17'),_0x34bef2);return _0x5ce962[a3_0x299c('0x18')]('/contact');}const _0x43426e={'to':a3_0x299c('0x19'),'from':_0x500c21[a3_0x299c('0x1a')]['name']+'\x20<'+_0x500c21['body']['email']+'>','subject':a3_0x299c('0x1b'),'text':_0x500c21[a3_0x299c('0x1a')]['message']};transporter['sendMail'](_0x43426e,_0xc08aa6=>{if(_0xc08aa6){_0x500c21[a3_0x299c('0x16')](a3_0x299c('0x17'),{'msg':_0xc08aa6[a3_0x299c('0x1c')]});return _0x5ce962[a3_0x299c('0x18')]('/contact');}_0x500c21['flash']('success',{'msg':a3_0x299c('0x1d')});_0x5ce962['redirect'](a3_0x299c('0x1e'));});};