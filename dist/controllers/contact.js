var a3_0x115f=['env','SENDGRID_PASSWORD','Contact','postContact','assert','name','Name\x20cannot\x20be\x20blank','isEmail','message','Message\x20cannot\x20be\x20blank','validationErrors','errors','redirect','your@email.com','body','email','Contact\x20Form','flash','/contact','success','__importDefault','__esModule','defineProperty','default','SendGrid','SENDGRID_USER'];(function(_0x35182b,_0x56cf39){var _0x40c80c=function(_0x4d8f1c){while(--_0x4d8f1c){_0x35182b['push'](_0x35182b['shift']());}};_0x40c80c(++_0x56cf39);}(a3_0x115f,0xfe));var a3_0x47a3=function(_0x366c9e,_0x3c7fe6){_0x366c9e=_0x366c9e-0x0;var _0x5029e3=a3_0x115f[_0x366c9e];return _0x5029e3;};'use strict';var __importDefault=this&&this[a3_0x47a3('0x0')]||function(_0x55b3f2){return _0x55b3f2&&_0x55b3f2[a3_0x47a3('0x1')]?_0x55b3f2:{'default':_0x55b3f2};};Object[a3_0x47a3('0x2')](exports,a3_0x47a3('0x1'),{'value':!![]});const nodemailer_1=__importDefault(require('nodemailer'));const transporter=nodemailer_1[a3_0x47a3('0x3')]['createTransport']({'service':a3_0x47a3('0x4'),'auth':{'user':process['env'][a3_0x47a3('0x5')],'pass':process[a3_0x47a3('0x6')][a3_0x47a3('0x7')]}});exports['getContact']=(_0x58d464,_0x2c9c63)=>{_0x2c9c63['render']('contact',{'title':a3_0x47a3('0x8')});};exports[a3_0x47a3('0x9')]=(_0xe97b87,_0x5f1104)=>{_0xe97b87[a3_0x47a3('0xa')](a3_0x47a3('0xb'),a3_0x47a3('0xc'))['notEmpty']();_0xe97b87['assert']('email','Email\x20is\x20not\x20valid')[a3_0x47a3('0xd')]();_0xe97b87[a3_0x47a3('0xa')](a3_0x47a3('0xe'),a3_0x47a3('0xf'))['notEmpty']();const _0x4c7a7a=_0xe97b87[a3_0x47a3('0x10')]();if(_0x4c7a7a){_0xe97b87['flash'](a3_0x47a3('0x11'),_0x4c7a7a);return _0x5f1104[a3_0x47a3('0x12')]('/contact');}const _0x12e51e={'to':a3_0x47a3('0x13'),'from':_0xe97b87[a3_0x47a3('0x14')][a3_0x47a3('0xb')]+'\x20<'+_0xe97b87[a3_0x47a3('0x14')][a3_0x47a3('0x15')]+'>','subject':a3_0x47a3('0x16'),'text':_0xe97b87[a3_0x47a3('0x14')][a3_0x47a3('0xe')]};transporter['sendMail'](_0x12e51e,_0x232dd8=>{if(_0x232dd8){_0xe97b87[a3_0x47a3('0x17')](a3_0x47a3('0x11'),{'msg':_0x232dd8['message']});return _0x5f1104[a3_0x47a3('0x12')](a3_0x47a3('0x18'));}_0xe97b87[a3_0x47a3('0x17')](a3_0x47a3('0x19'),{'msg':'Email\x20has\x20been\x20sent\x20successfully!'});_0x5f1104[a3_0x47a3('0x12')](a3_0x47a3('0x18'));});};