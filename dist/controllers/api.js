var a2_0x18c6=['fbgraph','sequelize','setSequelize','render','api/index','API\x20Examples','log','connecting','default','ready','list','colombia','Downloading:\x20','name','endsWith','json','models','spread','push','error','connect','ftp.vivotek.com','ipd','downloadFtp','report_files','findOne','then','connected:','fileName','get','colombia/','end','media/','.txt','pipe','createWriteStream','status','save','Downloaded:\x20','processFtp','readFile','utf8','parse','Out','EndTime','pass_counting','countingDate','ASC','getPassCountingByDay','query','month','endDate','findAll','sum','col','amount','total','direction','getPassCountingByHour','%Y-%m-%d\x20%H:00','countingDateShort','gte','params','HOUR','DAY','MONTH','YEAR','tokens','find','facebook','setAccessToken','?fields=id,name,email,first_name,last_name,gender,link,locale,timezone','__importDefault','__esModule'];(function(_0x2408e6,_0x23a2a7){var _0x5a5c88=function(_0x4c41cc){while(--_0x4c41cc){_0x2408e6['push'](_0x2408e6['shift']());}};_0x5a5c88(++_0x23a2a7);}(a2_0x18c6,0x170));var a2_0x982f=function(_0x12f885,_0x4dd4b0){_0x12f885=_0x12f885-0x0;var _0x28bff9=a2_0x18c6[_0x12f885];return _0x28bff9;};'use strict';var __importDefault=this&&this[a2_0x982f('0x0')]||function(_0x1cda39){return _0x1cda39&&_0x1cda39[a2_0x982f('0x1')]?_0x1cda39:{'default':_0x1cda39};};Object['defineProperty'](exports,a2_0x982f('0x1'),{'value':!![]});const fbgraph_1=__importDefault(require(a2_0x982f('0x2')));const ftp_1=__importDefault(require('ftp'));const fs_1=__importDefault(require('fs'));exports[a2_0x982f('0x3')]='';function setSequelize(_0xb60f06){exports[a2_0x982f('0x3')]=_0xb60f06;}exports[a2_0x982f('0x4')]=setSequelize;exports['getApi']=(_0x1d1f17,_0x3e84ce)=>{_0x3e84ce[a2_0x982f('0x5')](a2_0x982f('0x6'),{'title':a2_0x982f('0x7')});};exports['syncFtp']=(_0x387199,_0x149d55)=>{console[a2_0x982f('0x8')](a2_0x982f('0x9'));const _0x2d9945=[];const _0x5adec9=new ftp_1[(a2_0x982f('0xa'))]();_0x5adec9['on'](a2_0x982f('0xb'),function(){console[a2_0x982f('0x8')]('connected');_0x5adec9[a2_0x982f('0xc')](a2_0x982f('0xd'),![],function(_0x570daa,_0x433aa2){if(_0x570daa){}else{for(const _0x179b2d of _0x433aa2){console[a2_0x982f('0x8')](a2_0x982f('0xe')+_0x179b2d[a2_0x982f('0xf')]);if(_0x179b2d[a2_0x982f('0xf')][a2_0x982f('0x10')](a2_0x982f('0x11'))){exports[a2_0x982f('0x3')][a2_0x982f('0x12')]['report_files']['findOrCreate']({'where':{'fileName':_0x179b2d[a2_0x982f('0xf')]}})[a2_0x982f('0x13')]((_0x38656b,_0x1722ad)=>{if(_0x1722ad){console[a2_0x982f('0x8')](_0x179b2d[a2_0x982f('0xf')]);_0x2d9945[a2_0x982f('0x14')](_0x38656b);}});}}}_0x149d55[a2_0x982f('0x11')]({'data':_0x2d9945});});});_0x5adec9['on'](a2_0x982f('0x15'),function(_0x387488){_0x149d55['json']({'message':_0x387488});});_0x5adec9[a2_0x982f('0x16')]({'host':a2_0x982f('0x17'),'port':0x15,'user':a2_0x982f('0x18'),'password':a2_0x982f('0x18')});};exports[a2_0x982f('0x19')]=(_0x2471b3,_0x1642e1)=>{exports[a2_0x982f('0x3')]['models'][a2_0x982f('0x1a')][a2_0x982f('0x1b')]({'where':{'status':null}})[a2_0x982f('0x1c')](_0x36c02a=>{if(_0x36c02a){const _0x59ae96=new ftp_1[(a2_0x982f('0xa'))]();_0x59ae96['on'](a2_0x982f('0xb'),function(){console[a2_0x982f('0x8')](a2_0x982f('0x1d')+_0x36c02a[a2_0x982f('0x1e')]);_0x59ae96[a2_0x982f('0x1f')](a2_0x982f('0x20')+_0x36c02a[a2_0x982f('0x1e')],function(_0x3556d8,_0x55e3df){_0x59ae96[a2_0x982f('0x21')]();if(_0x3556d8){}else{const _0x331e24=a2_0x982f('0x22')+_0x36c02a[a2_0x982f('0x1e')]+a2_0x982f('0x23');_0x55e3df[a2_0x982f('0x24')](fs_1[a2_0x982f('0xa')][a2_0x982f('0x25')](_0x331e24));_0x36c02a[a2_0x982f('0x26')]=0x1;_0x36c02a[a2_0x982f('0x27')]();console['log'](a2_0x982f('0x28')+_0x36c02a[a2_0x982f('0x1e')]);}});});_0x59ae96['on'](a2_0x982f('0x15'),function(_0x3157b8){_0x1642e1[a2_0x982f('0x11')]({'message':_0x3157b8});});_0x59ae96[a2_0x982f('0x16')]({'host':a2_0x982f('0x17'),'port':0x15,'user':a2_0x982f('0x18'),'password':a2_0x982f('0x18')});_0x1642e1[a2_0x982f('0x11')]({'data':_0x36c02a[a2_0x982f('0x1e')]});}else{_0x1642e1[a2_0x982f('0x11')]({'data':[]});}});};exports[a2_0x982f('0x29')]=(_0x501f75,_0x27f361)=>{exports[a2_0x982f('0x3')][a2_0x982f('0x12')][a2_0x982f('0x1a')][a2_0x982f('0x1b')]({'where':{'status':0x1}})[a2_0x982f('0x1c')](_0x1de2b1=>{if(_0x1de2b1){const _0x2552f9=a2_0x982f('0x22')+_0x1de2b1[a2_0x982f('0x1e')]+a2_0x982f('0x23');fs_1[a2_0x982f('0xa')][a2_0x982f('0x2a')](_0x2552f9,a2_0x982f('0x2b'),function(_0x435543,_0x3e5bdd){if(_0x435543){_0x1de2b1[a2_0x982f('0x26')]=null;}else{try{const _0xce5781=JSON[a2_0x982f('0x2c')](_0x3e5bdd);for(const _0x4f0d33 of _0xce5781['Data'][0x0]['CountingInfo']){const _0x2fe0f4=_0x4f0d33['In'];const _0x2efff3=_0x4f0d33[a2_0x982f('0x2d')];const _0x66e770=Date['parse'](_0x4f0d33[a2_0x982f('0x2e')]);if(_0x2fe0f4>0x0){exports[a2_0x982f('0x3')]['models'][a2_0x982f('0x2f')]['create']({'reportFileId':_0x1de2b1['id'],'amount':_0x2fe0f4,'countingDate':_0x66e770});}if(_0x2efff3>0x0){exports[a2_0x982f('0x3')][a2_0x982f('0x12')][a2_0x982f('0x2f')]['create']({'reportFileId':_0x1de2b1['id'],'amount':_0x2efff3*-0x1,'countingDate':_0x66e770});}}_0x1de2b1[a2_0x982f('0x26')]=0x2;}catch(_0x1b9e6c){_0x1de2b1['status']=null;}}_0x1de2b1[a2_0x982f('0x27')]();});_0x27f361[a2_0x982f('0x11')]({'data':_0x1de2b1[a2_0x982f('0x1e')]});}else{_0x27f361[a2_0x982f('0x11')]({'data':[]});}});};exports['getPassCounting']=(_0x4d0355,_0x1325c1)=>{exports[a2_0x982f('0x3')]['models'][a2_0x982f('0x2f')]['findAll']({'where':{'amount':{[exports['sequelize']['Op']['gt']]:0x0}},'order':[[a2_0x982f('0x30'),a2_0x982f('0x31')]]})[a2_0x982f('0x1c')](_0x250901=>{_0x1325c1['json']({'data':_0x250901});});};exports[a2_0x982f('0x32')]=(_0x166189,_0x19770e)=>{const _0x2721d9=_0x166189[a2_0x982f('0x33')][a2_0x982f('0x34')];const _0x3d80ad=_0x166189['query']['startDate'];const _0x3fba53=_0x166189[a2_0x982f('0x33')][a2_0x982f('0x35')];exports[a2_0x982f('0x3')][a2_0x982f('0x12')]['pass_counting'][a2_0x982f('0x36')]({'attributes':[a2_0x982f('0x30'),[exports[a2_0x982f('0x3')]['fn'](a2_0x982f('0x37'),exports[a2_0x982f('0x3')][a2_0x982f('0x38')](a2_0x982f('0x39'))),a2_0x982f('0x3a')]],'where':{'countingDate':{[exports[a2_0x982f('0x3')]['Op']['gte']]:_0x3d80ad,[exports[a2_0x982f('0x3')]['Op']['lt']]:_0x3fba53},'amount':_0x166189['params'][a2_0x982f('0x3b')]=='in'?{[exports['sequelize']['Op']['gt']]:0x0}:{[exports[a2_0x982f('0x3')]['Op']['lt']]:0x0}},'group':[exports[a2_0x982f('0x3')]['literal']('YEAR(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20MONTH(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20DAY(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27))')],'order':[[a2_0x982f('0x30'),a2_0x982f('0x31')]]})[a2_0x982f('0x1c')](_0x3d8eb8=>{_0x19770e['json']({'data':_0x3d8eb8});});};exports[a2_0x982f('0x3c')]=(_0x2ed731,_0x100774)=>{const _0x5d4ed8=_0x2ed731[a2_0x982f('0x33')]['month'];const _0x538ac3=_0x2ed731[a2_0x982f('0x33')]['startDate'];const _0x22f110=_0x2ed731[a2_0x982f('0x33')][a2_0x982f('0x35')];exports[a2_0x982f('0x3')][a2_0x982f('0x12')][a2_0x982f('0x2f')][a2_0x982f('0x36')]({'attributes':[a2_0x982f('0x30'),[exports[a2_0x982f('0x3')]['fn']('DATE_FORMAT',exports[a2_0x982f('0x3')]['col']('countingDate'),a2_0x982f('0x3d')),a2_0x982f('0x3e')],[exports['sequelize']['fn']('sum',exports[a2_0x982f('0x3')][a2_0x982f('0x38')](a2_0x982f('0x39'))),a2_0x982f('0x3a')]],'where':{'countingDate':{[exports[a2_0x982f('0x3')]['Op'][a2_0x982f('0x3f')]]:_0x538ac3,[exports[a2_0x982f('0x3')]['Op']['lt']]:_0x22f110},'amount':_0x2ed731[a2_0x982f('0x40')]['direction']=='in'?{[exports[a2_0x982f('0x3')]['Op']['gt']]:0x0}:{[exports[a2_0x982f('0x3')]['Op']['lt']]:0x0}},'group':[exports[a2_0x982f('0x3')]['fn'](a2_0x982f('0x41'),exports[a2_0x982f('0x3')][a2_0x982f('0x38')](a2_0x982f('0x30'))),exports[a2_0x982f('0x3')]['fn'](a2_0x982f('0x42'),exports['sequelize']['col'](a2_0x982f('0x30'))),exports[a2_0x982f('0x3')]['fn'](a2_0x982f('0x43'),exports['sequelize'][a2_0x982f('0x38')](a2_0x982f('0x30'))),exports['sequelize']['fn'](a2_0x982f('0x44'),exports['sequelize'][a2_0x982f('0x38')]('countingDate'))],'order':[[a2_0x982f('0x30'),'ASC']]})[a2_0x982f('0x1c')](_0x11faed=>{_0x100774['json']({'data':_0x11faed});});};exports['getFacebook']=(_0x981e8b,_0x3445f9,_0x2d4336)=>{const _0x4fd536=_0x981e8b['user'][a2_0x982f('0x45')][a2_0x982f('0x46')](_0x4fd536=>_0x4fd536['kind']===a2_0x982f('0x47'));fbgraph_1[a2_0x982f('0xa')][a2_0x982f('0x48')](_0x4fd536['accessToken']);fbgraph_1[a2_0x982f('0xa')][a2_0x982f('0x1f')](_0x981e8b['user']['facebook']+a2_0x982f('0x49'),(_0x4d8491,_0x59db20)=>{if(_0x4d8491){return _0x2d4336(_0x4d8491);}_0x3445f9[a2_0x982f('0x5')]('api/facebook',{'title':'Facebook\x20API','profile':_0x59db20});});};