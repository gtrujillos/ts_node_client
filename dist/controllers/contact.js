var a3_0x4391=['postContact','assert','Name\x20cannot\x20be\x20blank','notEmpty','email','isEmail','validationErrors','flash','errors','your@email.com','body','Contact\x20Form','message','sendMail','redirect','/contact','__importDefault','__esModule','defineProperty','nodemailer','SendGrid','SENDGRID_PASSWORD','getContact','render','contact'];(function(_0x34d375,_0x479ab4){var _0x4ea481=function(_0x500594){while(--_0x500594){_0x34d375['push'](_0x34d375['shift']());}};_0x4ea481(++_0x479ab4);}(a3_0x4391,0xbf));var a3_0x3dca=function(_0x3cce58,_0x19ab91){_0x3cce58=_0x3cce58-0x0;var _0x35af97=a3_0x4391[_0x3cce58];return _0x35af97;};'use strict';var __importDefault=this&&this[a3_0x3dca('0x0')]||function(_0x551a31){return _0x551a31&&_0x551a31[a3_0x3dca('0x1')]?_0x551a31:{'default':_0x551a31};};Object[a3_0x3dca('0x2')](exports,a3_0x3dca('0x1'),{'value':!![]});const nodemailer_1=__importDefault(require(a3_0x3dca('0x3')));const transporter=nodemailer_1['default']['createTransport']({'service':a3_0x3dca('0x4'),'auth':{'user':process['env']['SENDGRID_USER'],'pass':process['env'][a3_0x3dca('0x5')]}});exports[a3_0x3dca('0x6')]=(_0x3f3c74,_0x1c55fa)=>{_0x1c55fa[a3_0x3dca('0x7')](a3_0x3dca('0x8'),{'title':'Contact'});};exports[a3_0x3dca('0x9')]=(_0x358423,_0xfdb5a8)=>{_0x358423[a3_0x3dca('0xa')]('name',a3_0x3dca('0xb'))[a3_0x3dca('0xc')]();_0x358423[a3_0x3dca('0xa')](a3_0x3dca('0xd'),'Email\x20is\x20not\x20valid')[a3_0x3dca('0xe')]();_0x358423['assert']('message','Message\x20cannot\x20be\x20blank')['notEmpty']();const _0x33998c=_0x358423[a3_0x3dca('0xf')]();if(_0x33998c){_0x358423[a3_0x3dca('0x10')](a3_0x3dca('0x11'),_0x33998c);return _0xfdb5a8['redirect']('/contact');}const _0x2729d2={'to':a3_0x3dca('0x12'),'from':_0x358423[a3_0x3dca('0x13')]['name']+'\x20<'+_0x358423[a3_0x3dca('0x13')]['email']+'>','subject':a3_0x3dca('0x14'),'text':_0x358423[a3_0x3dca('0x13')][a3_0x3dca('0x15')]};transporter[a3_0x3dca('0x16')](_0x2729d2,_0x2786e4=>{if(_0x2786e4){_0x358423[a3_0x3dca('0x10')](a3_0x3dca('0x11'),{'msg':_0x2786e4['message']});return _0xfdb5a8[a3_0x3dca('0x17')](a3_0x3dca('0x18'));}_0x358423[a3_0x3dca('0x10')]('success',{'msg':'Email\x20has\x20been\x20sent\x20successfully!'});_0xfdb5a8['redirect'](a3_0x3dca('0x18'));});};