var a2_0x4e5e=['then','connected:','fileName','get','colombia/','end','media/','.txt','pipe','save','error','processFtp','findOne','utf8','status','parse','Data','Out','EndTime','pass_counting','create','getPassCounting','findAll','countingDate','ASC','query','startDate','endDate','sum','amount','gte','direction','literal','YEAR(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20MONTH(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20DAY(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27))','getPassCountingByHour','month','DATE_FORMAT','col','%Y-%m-%d\x20%H:00','countingDateShort','total','params','HOUR','DAY','MONTH','YEAR','user','tokens','kind','facebook','accessToken','?fields=id,name,email,first_name,last_name,gender,link,locale,timezone','api/facebook','Facebook\x20API','__esModule','defineProperty','fbgraph','ftp','sequelize','setSequelize','getApi','render','api/index','API\x20Examples','syncFtp','log','connecting','default','ready','connected','name','endsWith','models','report_files','findOrCreate','spread','json','connect','ftp.vivotek.com','ipd'];(function(_0x1ddfdd,_0x252397){var _0x35674e=function(_0x30527d){while(--_0x30527d){_0x1ddfdd['push'](_0x1ddfdd['shift']());}};_0x35674e(++_0x252397);}(a2_0x4e5e,0x1c6));var a2_0x5632=function(_0x315da7,_0x34dd36){_0x315da7=_0x315da7-0x0;var _0x451a50=a2_0x4e5e[_0x315da7];return _0x451a50;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x2f6445){return _0x2f6445&&_0x2f6445[a2_0x5632('0x0')]?_0x2f6445:{'default':_0x2f6445};};Object[a2_0x5632('0x1')](exports,a2_0x5632('0x0'),{'value':!![]});const fbgraph_1=__importDefault(require(a2_0x5632('0x2')));const ftp_1=__importDefault(require(a2_0x5632('0x3')));const fs_1=__importDefault(require('fs'));exports['sequelize']='';function setSequelize(_0x1288ad){exports[a2_0x5632('0x4')]=_0x1288ad;}exports[a2_0x5632('0x5')]=setSequelize;exports[a2_0x5632('0x6')]=(_0x4db51c,_0x4c5c0f)=>{_0x4c5c0f[a2_0x5632('0x7')](a2_0x5632('0x8'),{'title':a2_0x5632('0x9')});};exports[a2_0x5632('0xa')]=(_0x17e6bf,_0x5e52c5)=>{console[a2_0x5632('0xb')](a2_0x5632('0xc'));const _0xf41442=[];const _0xc9a2e9=new ftp_1[(a2_0x5632('0xd'))]();_0xc9a2e9['on'](a2_0x5632('0xe'),function(){console['log'](a2_0x5632('0xf'));_0xc9a2e9['list']('colombia',![],function(_0x15c0f8,_0x48d5a6){if(_0x15c0f8){}else{for(const _0x5c2c0f of _0x48d5a6){console[a2_0x5632('0xb')]('Downloading:\x20'+_0x5c2c0f[a2_0x5632('0x10')]);if(_0x5c2c0f[a2_0x5632('0x10')][a2_0x5632('0x11')]('json')){exports[a2_0x5632('0x4')][a2_0x5632('0x12')][a2_0x5632('0x13')][a2_0x5632('0x14')]({'where':{'fileName':_0x5c2c0f['name']}})[a2_0x5632('0x15')]((_0x26ee3f,_0x5c6d2d)=>{if(_0x5c6d2d){console[a2_0x5632('0xb')](_0x5c2c0f['name']);_0xf41442['push'](_0x26ee3f);}});}}}_0x5e52c5['json']({'data':_0xf41442});});});_0xc9a2e9['on']('error',function(_0x12794f){_0x5e52c5[a2_0x5632('0x16')]({'message':_0x12794f});});_0xc9a2e9[a2_0x5632('0x17')]({'host':a2_0x5632('0x18'),'port':0x15,'user':a2_0x5632('0x19'),'password':a2_0x5632('0x19')});};exports['downloadFtp']=(_0x411513,_0x14b5a9)=>{exports[a2_0x5632('0x4')]['models']['report_files']['findOne']({'where':{'status':null}})[a2_0x5632('0x1a')](_0x4c3493=>{if(_0x4c3493){const _0x620a9a=new ftp_1['default']();_0x620a9a['on']('ready',function(){console[a2_0x5632('0xb')](a2_0x5632('0x1b')+_0x4c3493[a2_0x5632('0x1c')]);_0x620a9a[a2_0x5632('0x1d')](a2_0x5632('0x1e')+_0x4c3493[a2_0x5632('0x1c')],function(_0x3ae21d,_0x1243cc){_0x620a9a[a2_0x5632('0x1f')]();if(_0x3ae21d){}else{const _0x3a9cb2=a2_0x5632('0x20')+_0x4c3493[a2_0x5632('0x1c')]+a2_0x5632('0x21');_0x1243cc[a2_0x5632('0x22')](fs_1[a2_0x5632('0xd')]['createWriteStream'](_0x3a9cb2));_0x4c3493['status']=0x1;_0x4c3493[a2_0x5632('0x23')]();console['log']('Downloaded:\x20'+_0x4c3493[a2_0x5632('0x1c')]);}});});_0x620a9a['on'](a2_0x5632('0x24'),function(_0x55119c){_0x14b5a9['json']({'message':_0x55119c});});_0x620a9a[a2_0x5632('0x17')]({'host':'ftp.vivotek.com','port':0x15,'user':a2_0x5632('0x19'),'password':a2_0x5632('0x19')});_0x14b5a9[a2_0x5632('0x16')]({'data':_0x4c3493[a2_0x5632('0x1c')]});}else{_0x14b5a9[a2_0x5632('0x16')]({'data':[]});}});};exports[a2_0x5632('0x25')]=(_0x2f6b7c,_0x2d4452)=>{exports[a2_0x5632('0x4')][a2_0x5632('0x12')][a2_0x5632('0x13')][a2_0x5632('0x26')]({'where':{'status':0x1}})[a2_0x5632('0x1a')](_0x4cd4b5=>{if(_0x4cd4b5){const _0x31956e=a2_0x5632('0x20')+_0x4cd4b5['fileName']+a2_0x5632('0x21');fs_1[a2_0x5632('0xd')]['readFile'](_0x31956e,a2_0x5632('0x27'),function(_0x3b6c6f,_0x217a1c){if(_0x3b6c6f){_0x4cd4b5[a2_0x5632('0x28')]=null;}else{try{const _0x3567dc=JSON[a2_0x5632('0x29')](_0x217a1c);for(const _0x225a4c of _0x3567dc[a2_0x5632('0x2a')][0x0]['CountingInfo']){const _0x140ba8=_0x225a4c['In'];const _0xab2a2c=_0x225a4c[a2_0x5632('0x2b')];const _0x4685a4=Date[a2_0x5632('0x29')](_0x225a4c[a2_0x5632('0x2c')]);if(_0x140ba8>0x0){exports['sequelize'][a2_0x5632('0x12')][a2_0x5632('0x2d')]['create']({'reportFileId':_0x4cd4b5['id'],'amount':_0x140ba8,'countingDate':_0x4685a4});}if(_0xab2a2c>0x0){exports[a2_0x5632('0x4')][a2_0x5632('0x12')][a2_0x5632('0x2d')][a2_0x5632('0x2e')]({'reportFileId':_0x4cd4b5['id'],'amount':_0xab2a2c*-0x1,'countingDate':_0x4685a4});}}_0x4cd4b5[a2_0x5632('0x28')]=0x2;}catch(_0x48b39c){_0x4cd4b5[a2_0x5632('0x28')]=null;}}_0x4cd4b5[a2_0x5632('0x23')]();});_0x2d4452[a2_0x5632('0x16')]({'data':_0x4cd4b5[a2_0x5632('0x1c')]});}else{_0x2d4452[a2_0x5632('0x16')]({'data':[]});}});};exports[a2_0x5632('0x2f')]=(_0x2028fc,_0x250987)=>{exports[a2_0x5632('0x4')][a2_0x5632('0x12')][a2_0x5632('0x2d')][a2_0x5632('0x30')]({'where':{'amount':{[exports[a2_0x5632('0x4')]['Op']['gt']]:0x0}},'order':[[a2_0x5632('0x31'),a2_0x5632('0x32')]]})[a2_0x5632('0x1a')](_0x5d902d=>{_0x250987[a2_0x5632('0x16')]({'data':_0x5d902d});});};exports['getPassCountingByDay']=(_0x3b7556,_0x5c2277)=>{const _0x191c98=_0x3b7556[a2_0x5632('0x33')]['month'];const _0xdb4936=_0x3b7556['query'][a2_0x5632('0x34')];const _0x39be9a=_0x3b7556[a2_0x5632('0x33')][a2_0x5632('0x35')];exports['sequelize'][a2_0x5632('0x12')][a2_0x5632('0x2d')][a2_0x5632('0x30')]({'attributes':[a2_0x5632('0x31'),[exports[a2_0x5632('0x4')]['fn'](a2_0x5632('0x36'),exports[a2_0x5632('0x4')]['col'](a2_0x5632('0x37'))),'total']],'where':{'countingDate':{[exports[a2_0x5632('0x4')]['Op'][a2_0x5632('0x38')]]:_0xdb4936,[exports[a2_0x5632('0x4')]['Op']['lt']]:_0x39be9a},'amount':_0x3b7556['params'][a2_0x5632('0x39')]=='in'?{[exports[a2_0x5632('0x4')]['Op']['gt']]:0x0}:{[exports[a2_0x5632('0x4')]['Op']['lt']]:0x0}},'group':[exports['sequelize'][a2_0x5632('0x3a')](a2_0x5632('0x3b'))],'order':[['countingDate',a2_0x5632('0x32')]]})[a2_0x5632('0x1a')](_0x2fa7ef=>{_0x5c2277[a2_0x5632('0x16')]({'data':_0x2fa7ef});});};exports[a2_0x5632('0x3c')]=(_0x1eae2f,_0x2ac606)=>{const _0x4421bc=_0x1eae2f[a2_0x5632('0x33')][a2_0x5632('0x3d')];const _0x520118=_0x1eae2f[a2_0x5632('0x33')][a2_0x5632('0x34')];const _0x366546=_0x1eae2f[a2_0x5632('0x33')][a2_0x5632('0x35')];exports['sequelize'][a2_0x5632('0x12')][a2_0x5632('0x2d')][a2_0x5632('0x30')]({'attributes':[a2_0x5632('0x31'),[exports['sequelize']['fn'](a2_0x5632('0x3e'),exports[a2_0x5632('0x4')][a2_0x5632('0x3f')]('countingDate'),a2_0x5632('0x40')),a2_0x5632('0x41')],[exports[a2_0x5632('0x4')]['fn'](a2_0x5632('0x36'),exports[a2_0x5632('0x4')][a2_0x5632('0x3f')](a2_0x5632('0x37'))),a2_0x5632('0x42')]],'where':{'countingDate':{[exports[a2_0x5632('0x4')]['Op'][a2_0x5632('0x38')]]:_0x520118,[exports['sequelize']['Op']['lt']]:_0x366546},'amount':_0x1eae2f[a2_0x5632('0x43')][a2_0x5632('0x39')]=='in'?{[exports[a2_0x5632('0x4')]['Op']['gt']]:0x0}:{[exports['sequelize']['Op']['lt']]:0x0}},'group':[exports[a2_0x5632('0x4')]['fn'](a2_0x5632('0x44'),exports[a2_0x5632('0x4')]['col']('countingDate')),exports[a2_0x5632('0x4')]['fn'](a2_0x5632('0x45'),exports[a2_0x5632('0x4')][a2_0x5632('0x3f')]('countingDate')),exports['sequelize']['fn'](a2_0x5632('0x46'),exports[a2_0x5632('0x4')][a2_0x5632('0x3f')]('countingDate')),exports[a2_0x5632('0x4')]['fn'](a2_0x5632('0x47'),exports['sequelize'][a2_0x5632('0x3f')](a2_0x5632('0x31')))],'order':[[a2_0x5632('0x31'),a2_0x5632('0x32')]]})[a2_0x5632('0x1a')](_0x32cb89=>{_0x2ac606[a2_0x5632('0x16')]({'data':_0x32cb89});});};exports['getFacebook']=(_0xdb29db,_0x52b05f,_0x3e9530)=>{const _0x147bce=_0xdb29db[a2_0x5632('0x48')][a2_0x5632('0x49')]['find'](_0x147bce=>_0x147bce[a2_0x5632('0x4a')]===a2_0x5632('0x4b'));fbgraph_1[a2_0x5632('0xd')]['setAccessToken'](_0x147bce[a2_0x5632('0x4c')]);fbgraph_1[a2_0x5632('0xd')][a2_0x5632('0x1d')](_0xdb29db[a2_0x5632('0x48')][a2_0x5632('0x4b')]+a2_0x5632('0x4d'),(_0x52df27,_0x182890)=>{if(_0x52df27){return _0x3e9530(_0x52df27);}_0x52b05f[a2_0x5632('0x7')](a2_0x5632('0x4e'),{'title':a2_0x5632('0x4f'),'profile':_0x182890});});};