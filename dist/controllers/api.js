var a2_0x4747=['then','ready','connected:','fileName','get','colombia/','end','media/','.txt','pipe','createWriteStream','status','save','Downloaded:\x20','connect','readFile','utf8','parse','CountingInfo','Out','EndTime','pass_counting','create','getPassCounting','findAll','countingDate','getPassCountingByDay','query','month','startDate','sum','col','amount','total','gte','params','literal','YEAR(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20MONTH(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20DAY(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27))','endDate','countingDateShort','direction','HOUR','DAY','MONTH','YEAR','user','tokens','facebook','accessToken','Facebook\x20API','__importDefault','__esModule','defineProperty','fbgraph','ftp','sequelize','setSequelize','render','api/index','API\x20Examples','syncFtp','log','connecting','default','colombia','name','endsWith','json','models','report_files','push','error','ftp.vivotek.com','ipd','downloadFtp','findOne'];(function(_0x51e248,_0x1713a3){var _0xfb673a=function(_0x51128b){while(--_0x51128b){_0x51e248['push'](_0x51e248['shift']());}};_0xfb673a(++_0x1713a3);}(a2_0x4747,0x162));var a2_0xa7a6=function(_0x453011,_0x2780e7){_0x453011=_0x453011-0x0;var _0x5de261=a2_0x4747[_0x453011];return _0x5de261;};'use strict';var __importDefault=this&&this[a2_0xa7a6('0x0')]||function(_0x42caa5){return _0x42caa5&&_0x42caa5[a2_0xa7a6('0x1')]?_0x42caa5:{'default':_0x42caa5};};Object[a2_0xa7a6('0x2')](exports,a2_0xa7a6('0x1'),{'value':!![]});const fbgraph_1=__importDefault(require(a2_0xa7a6('0x3')));const ftp_1=__importDefault(require(a2_0xa7a6('0x4')));const fs_1=__importDefault(require('fs'));exports['sequelize']='';function setSequelize(_0x2ffce1){exports[a2_0xa7a6('0x5')]=_0x2ffce1;}exports[a2_0xa7a6('0x6')]=setSequelize;exports['getApi']=(_0x3bc8d2,_0x54cfe7)=>{_0x54cfe7[a2_0xa7a6('0x7')](a2_0xa7a6('0x8'),{'title':a2_0xa7a6('0x9')});};exports[a2_0xa7a6('0xa')]=(_0x11e19e,_0xeeec7c)=>{console[a2_0xa7a6('0xb')](a2_0xa7a6('0xc'));const _0x24edde=[];const _0xbe3b56=new ftp_1[(a2_0xa7a6('0xd'))]();_0xbe3b56['on']('ready',function(){console[a2_0xa7a6('0xb')]('connected');_0xbe3b56['list'](a2_0xa7a6('0xe'),![],function(_0x120d67,_0x20ed03){if(_0x120d67){}else{for(const _0x2239d8 of _0x20ed03){console[a2_0xa7a6('0xb')]('Downloading:\x20'+_0x2239d8[a2_0xa7a6('0xf')]);if(_0x2239d8[a2_0xa7a6('0xf')][a2_0xa7a6('0x10')](a2_0xa7a6('0x11'))){exports['sequelize'][a2_0xa7a6('0x12')][a2_0xa7a6('0x13')]['findOrCreate']({'where':{'fileName':_0x2239d8['name']}})['spread']((_0x2867fb,_0x5d0ccc)=>{if(_0x5d0ccc){console[a2_0xa7a6('0xb')](_0x2239d8['name']);_0x24edde[a2_0xa7a6('0x14')](_0x2867fb);}});}}}_0xeeec7c[a2_0xa7a6('0x11')]({'data':_0x24edde});});});_0xbe3b56['on'](a2_0xa7a6('0x15'),function(_0x3327bc){_0xeeec7c[a2_0xa7a6('0x11')]({'message':_0x3327bc});});_0xbe3b56['connect']({'host':a2_0xa7a6('0x16'),'port':0x15,'user':'ipd','password':a2_0xa7a6('0x17')});};exports[a2_0xa7a6('0x18')]=(_0x15182b,_0x10c91b)=>{exports[a2_0xa7a6('0x5')][a2_0xa7a6('0x12')][a2_0xa7a6('0x13')][a2_0xa7a6('0x19')]({'where':{'status':null}})[a2_0xa7a6('0x1a')](_0x4c223b=>{if(_0x4c223b){const _0xe15a1b=new ftp_1['default']();_0xe15a1b['on'](a2_0xa7a6('0x1b'),function(){console['log'](a2_0xa7a6('0x1c')+_0x4c223b[a2_0xa7a6('0x1d')]);_0xe15a1b[a2_0xa7a6('0x1e')](a2_0xa7a6('0x1f')+_0x4c223b['fileName'],function(_0x19c785,_0x6cdc26){_0xe15a1b[a2_0xa7a6('0x20')]();if(_0x19c785){}else{const _0x6f34d6=a2_0xa7a6('0x21')+_0x4c223b[a2_0xa7a6('0x1d')]+a2_0xa7a6('0x22');_0x6cdc26[a2_0xa7a6('0x23')](fs_1[a2_0xa7a6('0xd')][a2_0xa7a6('0x24')](_0x6f34d6));_0x4c223b[a2_0xa7a6('0x25')]=0x1;_0x4c223b[a2_0xa7a6('0x26')]();console[a2_0xa7a6('0xb')](a2_0xa7a6('0x27')+_0x4c223b['fileName']);}});});_0xe15a1b['on'](a2_0xa7a6('0x15'),function(_0x326864){_0x10c91b['json']({'message':_0x326864});});_0xe15a1b[a2_0xa7a6('0x28')]({'host':a2_0xa7a6('0x16'),'port':0x15,'user':a2_0xa7a6('0x17'),'password':'ipd'});_0x10c91b['json']({'data':_0x4c223b[a2_0xa7a6('0x1d')]});}else{_0x10c91b[a2_0xa7a6('0x11')]({'data':[]});}});};exports['processFtp']=(_0x48ef60,_0x2056cc)=>{exports[a2_0xa7a6('0x5')][a2_0xa7a6('0x12')][a2_0xa7a6('0x13')][a2_0xa7a6('0x19')]({'where':{'status':0x1}})[a2_0xa7a6('0x1a')](_0x2dcc60=>{if(_0x2dcc60){const _0x1a6e2b='media/'+_0x2dcc60[a2_0xa7a6('0x1d')]+a2_0xa7a6('0x22');fs_1[a2_0xa7a6('0xd')][a2_0xa7a6('0x29')](_0x1a6e2b,a2_0xa7a6('0x2a'),function(_0x41da98,_0x2860d8){if(_0x41da98){_0x2dcc60['status']=null;}else{try{const _0x3b2290=JSON[a2_0xa7a6('0x2b')](_0x2860d8);for(const _0x3c46c6 of _0x3b2290['Data'][0x0][a2_0xa7a6('0x2c')]){const _0x847c71=_0x3c46c6['In'];const _0x9384d8=_0x3c46c6[a2_0xa7a6('0x2d')];const _0x2b3350=Date[a2_0xa7a6('0x2b')](_0x3c46c6[a2_0xa7a6('0x2e')]);if(_0x847c71>0x0){exports[a2_0xa7a6('0x5')][a2_0xa7a6('0x12')]['pass_counting']['create']({'reportFileId':_0x2dcc60['id'],'amount':_0x847c71,'countingDate':_0x2b3350});}if(_0x9384d8>0x0){exports['sequelize']['models'][a2_0xa7a6('0x2f')][a2_0xa7a6('0x30')]({'reportFileId':_0x2dcc60['id'],'amount':_0x9384d8*-0x1,'countingDate':_0x2b3350});}}_0x2dcc60[a2_0xa7a6('0x25')]=0x2;}catch(_0xe5d75b){_0x2dcc60[a2_0xa7a6('0x25')]=null;}}_0x2dcc60[a2_0xa7a6('0x26')]();});_0x2056cc[a2_0xa7a6('0x11')]({'data':_0x2dcc60[a2_0xa7a6('0x1d')]});}else{_0x2056cc['json']({'data':[]});}});};exports[a2_0xa7a6('0x31')]=(_0x44144d,_0x418b2a)=>{exports[a2_0xa7a6('0x5')]['models'][a2_0xa7a6('0x2f')][a2_0xa7a6('0x32')]({'where':{'amount':{[exports[a2_0xa7a6('0x5')]['Op']['gt']]:0x0}},'order':[[a2_0xa7a6('0x33'),'ASC']]})[a2_0xa7a6('0x1a')](_0x4ab8e5=>{_0x418b2a[a2_0xa7a6('0x11')]({'data':_0x4ab8e5});});};exports[a2_0xa7a6('0x34')]=(_0x2b6efc,_0x181877)=>{const _0x1da15a=_0x2b6efc[a2_0xa7a6('0x35')][a2_0xa7a6('0x36')];const _0x145341=_0x2b6efc[a2_0xa7a6('0x35')][a2_0xa7a6('0x37')];const _0xfeaa38=_0x2b6efc[a2_0xa7a6('0x35')]['endDate'];exports[a2_0xa7a6('0x5')][a2_0xa7a6('0x12')][a2_0xa7a6('0x2f')][a2_0xa7a6('0x32')]({'attributes':[a2_0xa7a6('0x33'),[exports[a2_0xa7a6('0x5')]['fn'](a2_0xa7a6('0x38'),exports[a2_0xa7a6('0x5')][a2_0xa7a6('0x39')](a2_0xa7a6('0x3a'))),a2_0xa7a6('0x3b')]],'where':{'countingDate':{[exports[a2_0xa7a6('0x5')]['Op'][a2_0xa7a6('0x3c')]]:_0x145341,[exports[a2_0xa7a6('0x5')]['Op']['lt']]:_0xfeaa38},'amount':_0x2b6efc[a2_0xa7a6('0x3d')]['direction']=='in'?{[exports[a2_0xa7a6('0x5')]['Op']['gt']]:0x0}:{[exports[a2_0xa7a6('0x5')]['Op']['lt']]:0x0}},'group':[exports[a2_0xa7a6('0x5')][a2_0xa7a6('0x3e')](a2_0xa7a6('0x3f'))],'order':[[a2_0xa7a6('0x33'),'ASC']]})[a2_0xa7a6('0x1a')](_0x448c6f=>{_0x181877['json']({'data':_0x448c6f});});};exports['getPassCountingByHour']=(_0x444275,_0x1eb63f)=>{const _0x26aa10=_0x444275[a2_0xa7a6('0x35')][a2_0xa7a6('0x36')];const _0x4e7446=_0x444275['query'][a2_0xa7a6('0x37')];const _0x41fed6=_0x444275[a2_0xa7a6('0x35')][a2_0xa7a6('0x40')];exports[a2_0xa7a6('0x5')][a2_0xa7a6('0x12')][a2_0xa7a6('0x2f')][a2_0xa7a6('0x32')]({'attributes':[a2_0xa7a6('0x33'),[exports[a2_0xa7a6('0x5')]['fn']('DATE_FORMAT',exports['sequelize'][a2_0xa7a6('0x39')](a2_0xa7a6('0x33')),'%Y-%m-%d\x20%H:00'),a2_0xa7a6('0x41')],[exports[a2_0xa7a6('0x5')]['fn'](a2_0xa7a6('0x38'),exports[a2_0xa7a6('0x5')][a2_0xa7a6('0x39')](a2_0xa7a6('0x3a'))),a2_0xa7a6('0x3b')]],'where':{'countingDate':{[exports['sequelize']['Op'][a2_0xa7a6('0x3c')]]:_0x4e7446,[exports[a2_0xa7a6('0x5')]['Op']['lt']]:_0x41fed6},'amount':_0x444275['params'][a2_0xa7a6('0x42')]=='in'?{[exports[a2_0xa7a6('0x5')]['Op']['gt']]:0x0}:{[exports['sequelize']['Op']['lt']]:0x0}},'group':[exports[a2_0xa7a6('0x5')]['fn'](a2_0xa7a6('0x43'),exports[a2_0xa7a6('0x5')][a2_0xa7a6('0x39')](a2_0xa7a6('0x33'))),exports[a2_0xa7a6('0x5')]['fn'](a2_0xa7a6('0x44'),exports[a2_0xa7a6('0x5')][a2_0xa7a6('0x39')](a2_0xa7a6('0x33'))),exports[a2_0xa7a6('0x5')]['fn'](a2_0xa7a6('0x45'),exports['sequelize'][a2_0xa7a6('0x39')](a2_0xa7a6('0x33'))),exports[a2_0xa7a6('0x5')]['fn'](a2_0xa7a6('0x46'),exports['sequelize'][a2_0xa7a6('0x39')]('countingDate'))],'order':[[a2_0xa7a6('0x33'),'ASC']]})[a2_0xa7a6('0x1a')](_0x322a77=>{_0x1eb63f[a2_0xa7a6('0x11')]({'data':_0x322a77});});};exports['getFacebook']=(_0x39f09d,_0x218da6,_0x3581c6)=>{const _0x4dc5d4=_0x39f09d[a2_0xa7a6('0x47')][a2_0xa7a6('0x48')]['find'](_0x4dc5d4=>_0x4dc5d4['kind']===a2_0xa7a6('0x49'));fbgraph_1[a2_0xa7a6('0xd')]['setAccessToken'](_0x4dc5d4[a2_0xa7a6('0x4a')]);fbgraph_1[a2_0xa7a6('0xd')][a2_0xa7a6('0x1e')](_0x39f09d['user'][a2_0xa7a6('0x49')]+'?fields=id,name,email,first_name,last_name,gender,link,locale,timezone',(_0x3433ff,_0x451007)=>{if(_0x3433ff){return _0x3581c6(_0x3433ff);}_0x218da6[a2_0xa7a6('0x7')]('api/facebook',{'title':a2_0xa7a6('0x4b'),'profile':_0x451007});});};