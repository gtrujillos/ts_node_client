var a3_0x197f=['Name\x20cannot\x20be\x20blank','notEmpty','email','Email\x20is\x20not\x20valid','isEmail','Message\x20cannot\x20be\x20blank','validationErrors','flash','errors','/contact','your@email.com','body','Contact\x20Form','message','redirect','success','__importDefault','__esModule','nodemailer','createTransport','SendGrid','env','SENDGRID_USER','getContact','render','contact','Contact','postContact','assert','name'];(function(_0x11d02f,_0x10f033){var _0x3326b1=function(_0x4b7011){while(--_0x4b7011){_0x11d02f['push'](_0x11d02f['shift']());}};_0x3326b1(++_0x10f033);}(a3_0x197f,0x1b4));var a3_0x2903=function(_0x70d3dd,_0x161e4d){_0x70d3dd=_0x70d3dd-0x0;var _0x469cf8=a3_0x197f[_0x70d3dd];return _0x469cf8;};'use strict';var __importDefault=this&&this[a3_0x2903('0x0')]||function(_0x380b6f){return _0x380b6f&&_0x380b6f[a3_0x2903('0x1')]?_0x380b6f:{'default':_0x380b6f};};Object['defineProperty'](exports,a3_0x2903('0x1'),{'value':!![]});const nodemailer_1=__importDefault(require(a3_0x2903('0x2')));const transporter=nodemailer_1['default'][a3_0x2903('0x3')]({'service':a3_0x2903('0x4'),'auth':{'user':process[a3_0x2903('0x5')][a3_0x2903('0x6')],'pass':process[a3_0x2903('0x5')]['SENDGRID_PASSWORD']}});exports[a3_0x2903('0x7')]=(_0x27cca1,_0x53721c)=>{_0x53721c[a3_0x2903('0x8')](a3_0x2903('0x9'),{'title':a3_0x2903('0xa')});};exports[a3_0x2903('0xb')]=(_0x5da705,_0x288c1a)=>{_0x5da705[a3_0x2903('0xc')](a3_0x2903('0xd'),a3_0x2903('0xe'))[a3_0x2903('0xf')]();_0x5da705[a3_0x2903('0xc')](a3_0x2903('0x10'),a3_0x2903('0x11'))[a3_0x2903('0x12')]();_0x5da705[a3_0x2903('0xc')]('message',a3_0x2903('0x13'))['notEmpty']();const _0x8090b3=_0x5da705[a3_0x2903('0x14')]();if(_0x8090b3){_0x5da705[a3_0x2903('0x15')](a3_0x2903('0x16'),_0x8090b3);return _0x288c1a['redirect'](a3_0x2903('0x17'));}const _0x5df4fb={'to':a3_0x2903('0x18'),'from':_0x5da705[a3_0x2903('0x19')][a3_0x2903('0xd')]+'\x20<'+_0x5da705['body']['email']+'>','subject':a3_0x2903('0x1a'),'text':_0x5da705[a3_0x2903('0x19')][a3_0x2903('0x1b')]};transporter['sendMail'](_0x5df4fb,_0xe943ed=>{if(_0xe943ed){_0x5da705[a3_0x2903('0x15')]('errors',{'msg':_0xe943ed[a3_0x2903('0x1b')]});return _0x288c1a[a3_0x2903('0x1c')](a3_0x2903('0x17'));}_0x5da705[a3_0x2903('0x15')](a3_0x2903('0x1d'),{'msg':'Email\x20has\x20been\x20sent\x20successfully!'});_0x288c1a['redirect']('/contact');});};