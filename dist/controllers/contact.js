var a3_0x3de9=['sendMail','redirect','success','Email\x20has\x20been\x20sent\x20successfully!','__importDefault','defineProperty','__esModule','nodemailer','default','SendGrid','SENDGRID_USER','env','SENDGRID_PASSWORD','getContact','render','contact','Contact','postContact','assert','name','Name\x20cannot\x20be\x20blank','notEmpty','email','isEmail','message','Message\x20cannot\x20be\x20blank','flash','/contact','your@email.com','body','Contact\x20Form'];(function(_0x357c8e,_0x314914){var _0x348fbe=function(_0x49e78f){while(--_0x49e78f){_0x357c8e['push'](_0x357c8e['shift']());}};_0x348fbe(++_0x314914);}(a3_0x3de9,0x1d5));var a3_0x3b9c=function(_0x1a40bb,_0x138234){_0x1a40bb=_0x1a40bb-0x0;var _0x11f0c7=a3_0x3de9[_0x1a40bb];return _0x11f0c7;};'use strict';var __importDefault=this&&this[a3_0x3b9c('0x0')]||function(_0x2f71e1){return _0x2f71e1&&_0x2f71e1['__esModule']?_0x2f71e1:{'default':_0x2f71e1};};Object[a3_0x3b9c('0x1')](exports,a3_0x3b9c('0x2'),{'value':!![]});const nodemailer_1=__importDefault(require(a3_0x3b9c('0x3')));const transporter=nodemailer_1[a3_0x3b9c('0x4')]['createTransport']({'service':a3_0x3b9c('0x5'),'auth':{'user':process['env'][a3_0x3b9c('0x6')],'pass':process[a3_0x3b9c('0x7')][a3_0x3b9c('0x8')]}});exports[a3_0x3b9c('0x9')]=(_0x3bf979,_0x105dce)=>{_0x105dce[a3_0x3b9c('0xa')](a3_0x3b9c('0xb'),{'title':a3_0x3b9c('0xc')});};exports[a3_0x3b9c('0xd')]=(_0x17be21,_0x588c34)=>{_0x17be21[a3_0x3b9c('0xe')](a3_0x3b9c('0xf'),a3_0x3b9c('0x10'))[a3_0x3b9c('0x11')]();_0x17be21[a3_0x3b9c('0xe')](a3_0x3b9c('0x12'),'Email\x20is\x20not\x20valid')[a3_0x3b9c('0x13')]();_0x17be21[a3_0x3b9c('0xe')](a3_0x3b9c('0x14'),a3_0x3b9c('0x15'))[a3_0x3b9c('0x11')]();const _0x49bb10=_0x17be21['validationErrors']();if(_0x49bb10){_0x17be21[a3_0x3b9c('0x16')]('errors',_0x49bb10);return _0x588c34['redirect'](a3_0x3b9c('0x17'));}const _0x3426f4={'to':a3_0x3b9c('0x18'),'from':_0x17be21[a3_0x3b9c('0x19')][a3_0x3b9c('0xf')]+'\x20<'+_0x17be21['body'][a3_0x3b9c('0x12')]+'>','subject':a3_0x3b9c('0x1a'),'text':_0x17be21[a3_0x3b9c('0x19')][a3_0x3b9c('0x14')]};transporter[a3_0x3b9c('0x1b')](_0x3426f4,_0x1aabd0=>{if(_0x1aabd0){_0x17be21[a3_0x3b9c('0x16')]('errors',{'msg':_0x1aabd0[a3_0x3b9c('0x14')]});return _0x588c34[a3_0x3b9c('0x1c')](a3_0x3b9c('0x17'));}_0x17be21[a3_0x3b9c('0x16')](a3_0x3b9c('0x1d'),{'msg':a3_0x3b9c('0x1e')});_0x588c34['redirect'](a3_0x3b9c('0x17'));});};