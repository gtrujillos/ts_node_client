var a3_0x4650=['createTransport','SendGrid','env','SENDGRID_USER','getContact','render','contact','postContact','assert','name','notEmpty','email','isEmail','errors','redirect','body','Contact\x20Form','flash','message','/contact','success','Email\x20has\x20been\x20sent\x20successfully!','__importDefault','__esModule','defineProperty','nodemailer','default'];(function(_0x2e6b3f,_0x17b152){var _0x3ded98=function(_0x192d62){while(--_0x192d62){_0x2e6b3f['push'](_0x2e6b3f['shift']());}};_0x3ded98(++_0x17b152);}(a3_0x4650,0x175));var a3_0x2862=function(_0x5206e5,_0x39defa){_0x5206e5=_0x5206e5-0x0;var _0x1bc45e=a3_0x4650[_0x5206e5];return _0x1bc45e;};'use strict';var __importDefault=this&&this[a3_0x2862('0x0')]||function(_0xde8419){return _0xde8419&&_0xde8419[a3_0x2862('0x1')]?_0xde8419:{'default':_0xde8419};};Object[a3_0x2862('0x2')](exports,'__esModule',{'value':!![]});const nodemailer_1=__importDefault(require(a3_0x2862('0x3')));const transporter=nodemailer_1[a3_0x2862('0x4')][a3_0x2862('0x5')]({'service':a3_0x2862('0x6'),'auth':{'user':process[a3_0x2862('0x7')][a3_0x2862('0x8')],'pass':process[a3_0x2862('0x7')]['SENDGRID_PASSWORD']}});exports[a3_0x2862('0x9')]=(_0x2ff392,_0x284f76)=>{_0x284f76[a3_0x2862('0xa')](a3_0x2862('0xb'),{'title':'Contact'});};exports[a3_0x2862('0xc')]=(_0x5c97ad,_0x391ea3)=>{_0x5c97ad[a3_0x2862('0xd')](a3_0x2862('0xe'),'Name\x20cannot\x20be\x20blank')[a3_0x2862('0xf')]();_0x5c97ad[a3_0x2862('0xd')](a3_0x2862('0x10'),'Email\x20is\x20not\x20valid')[a3_0x2862('0x11')]();_0x5c97ad['assert']('message','Message\x20cannot\x20be\x20blank')['notEmpty']();const _0x104aff=_0x5c97ad['validationErrors']();if(_0x104aff){_0x5c97ad['flash'](a3_0x2862('0x12'),_0x104aff);return _0x391ea3[a3_0x2862('0x13')]('/contact');}const _0x3e4235={'to':'your@email.com','from':_0x5c97ad[a3_0x2862('0x14')][a3_0x2862('0xe')]+'\x20<'+_0x5c97ad['body'][a3_0x2862('0x10')]+'>','subject':a3_0x2862('0x15'),'text':_0x5c97ad['body']['message']};transporter['sendMail'](_0x3e4235,_0x16d8f0=>{if(_0x16d8f0){_0x5c97ad[a3_0x2862('0x16')](a3_0x2862('0x12'),{'msg':_0x16d8f0[a3_0x2862('0x17')]});return _0x391ea3[a3_0x2862('0x13')](a3_0x2862('0x18'));}_0x5c97ad['flash'](a3_0x2862('0x19'),{'msg':a3_0x2862('0x1a')});_0x391ea3['redirect'](a3_0x2862('0x18'));});};