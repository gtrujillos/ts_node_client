var a3_0x320c=['notEmpty','email','Email\x20is\x20not\x20valid','isEmail','message','Message\x20cannot\x20be\x20blank','validationErrors','flash','errors','redirect','/contact','body','Contact\x20Form','sendMail','success','Email\x20has\x20been\x20sent\x20successfully!','__esModule','defineProperty','nodemailer','default','createTransport','SendGrid','env','SENDGRID_USER','SENDGRID_PASSWORD','getContact','render','contact','Contact','postContact','assert','Name\x20cannot\x20be\x20blank'];(function(_0xe0d4f2,_0x131293){var _0x535544=function(_0xcf3f41){while(--_0xcf3f41){_0xe0d4f2['push'](_0xe0d4f2['shift']());}};_0x535544(++_0x131293);}(a3_0x320c,0x130));var a3_0x561b=function(_0x670c9e,_0x1ed470){_0x670c9e=_0x670c9e-0x0;var _0x54650d=a3_0x320c[_0x670c9e];return _0x54650d;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x269996){return _0x269996&&_0x269996[a3_0x561b('0x0')]?_0x269996:{'default':_0x269996};};Object[a3_0x561b('0x1')](exports,a3_0x561b('0x0'),{'value':!![]});const nodemailer_1=__importDefault(require(a3_0x561b('0x2')));const transporter=nodemailer_1[a3_0x561b('0x3')][a3_0x561b('0x4')]({'service':a3_0x561b('0x5'),'auth':{'user':process[a3_0x561b('0x6')][a3_0x561b('0x7')],'pass':process['env'][a3_0x561b('0x8')]}});exports[a3_0x561b('0x9')]=(_0x3859e1,_0x24e248)=>{_0x24e248[a3_0x561b('0xa')](a3_0x561b('0xb'),{'title':a3_0x561b('0xc')});};exports[a3_0x561b('0xd')]=(_0x19520c,_0x113d14)=>{_0x19520c[a3_0x561b('0xe')]('name',a3_0x561b('0xf'))[a3_0x561b('0x10')]();_0x19520c['assert'](a3_0x561b('0x11'),a3_0x561b('0x12'))[a3_0x561b('0x13')]();_0x19520c['assert'](a3_0x561b('0x14'),a3_0x561b('0x15'))[a3_0x561b('0x10')]();const _0x7a118c=_0x19520c[a3_0x561b('0x16')]();if(_0x7a118c){_0x19520c[a3_0x561b('0x17')](a3_0x561b('0x18'),_0x7a118c);return _0x113d14[a3_0x561b('0x19')](a3_0x561b('0x1a'));}const _0x4c7bec={'to':'your@email.com','from':_0x19520c[a3_0x561b('0x1b')]['name']+'\x20<'+_0x19520c[a3_0x561b('0x1b')]['email']+'>','subject':a3_0x561b('0x1c'),'text':_0x19520c[a3_0x561b('0x1b')][a3_0x561b('0x14')]};transporter[a3_0x561b('0x1d')](_0x4c7bec,_0x2e6b41=>{if(_0x2e6b41){_0x19520c[a3_0x561b('0x17')]('errors',{'msg':_0x2e6b41[a3_0x561b('0x14')]});return _0x113d14[a3_0x561b('0x19')](a3_0x561b('0x1a'));}_0x19520c['flash'](a3_0x561b('0x1e'),{'msg':a3_0x561b('0x1f')});_0x113d14[a3_0x561b('0x19')]('/contact');});};