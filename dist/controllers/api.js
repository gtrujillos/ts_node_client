var a2_0x38da=['ftp','sequelize','setSequelize','getApi','render','api/index','API\x20Examples','syncFtp','log','default','ready','connected','colombia','Downloading:\x20','name','endsWith','json','models','report_files','findOrCreate','spread','error','connect','ftp.vivotek.com','ipd','then','connected:','fileName','get','colombia/','.txt','createWriteStream','status','save','Downloaded:\x20','findOne','media/','readFile','utf8','parse','Data','CountingInfo','Out','EndTime','pass_counting','create','findAll','countingDate','getPassCountingByDay','query','month','startDate','endDate','sum','total','gte','params','direction','YEAR(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20MONTH(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20DAY(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27))','ASC','getPassCountingByHour','col','%Y-%m-%d\x20%H:00','countingDateShort','amount','HOUR','DAY','MONTH','getFacebook','find','kind','setAccessToken','accessToken','user','facebook','?fields=id,name,email,first_name,last_name,gender,link,locale,timezone','api/facebook','Facebook\x20API','__importDefault','__esModule','defineProperty'];(function(_0x55f23a,_0x4b8ddd){var _0x1dbacc=function(_0x130857){while(--_0x130857){_0x55f23a['push'](_0x55f23a['shift']());}};_0x1dbacc(++_0x4b8ddd);}(a2_0x38da,0x141));var a2_0x4dfe=function(_0x202061,_0x47efc5){_0x202061=_0x202061-0x0;var _0x469bf1=a2_0x38da[_0x202061];return _0x469bf1;};'use strict';var __importDefault=this&&this[a2_0x4dfe('0x0')]||function(_0x30206e){return _0x30206e&&_0x30206e[a2_0x4dfe('0x1')]?_0x30206e:{'default':_0x30206e};};Object[a2_0x4dfe('0x2')](exports,'__esModule',{'value':!![]});const fbgraph_1=__importDefault(require('fbgraph'));const ftp_1=__importDefault(require(a2_0x4dfe('0x3')));const fs_1=__importDefault(require('fs'));exports[a2_0x4dfe('0x4')]='';function setSequelize(_0x258329){exports['sequelize']=_0x258329;}exports[a2_0x4dfe('0x5')]=setSequelize;exports[a2_0x4dfe('0x6')]=(_0x42b6e2,_0x5e9794)=>{_0x5e9794[a2_0x4dfe('0x7')](a2_0x4dfe('0x8'),{'title':a2_0x4dfe('0x9')});};exports[a2_0x4dfe('0xa')]=(_0x23bc7a,_0x3fa10d)=>{console[a2_0x4dfe('0xb')]('connecting');const _0x3781f3=[];const _0x40c72e=new ftp_1[(a2_0x4dfe('0xc'))]();_0x40c72e['on'](a2_0x4dfe('0xd'),function(){console['log'](a2_0x4dfe('0xe'));_0x40c72e['list'](a2_0x4dfe('0xf'),![],function(_0x531b10,_0x6680e0){if(_0x531b10){}else{for(const _0x2238f1 of _0x6680e0){console[a2_0x4dfe('0xb')](a2_0x4dfe('0x10')+_0x2238f1['name']);if(_0x2238f1[a2_0x4dfe('0x11')][a2_0x4dfe('0x12')](a2_0x4dfe('0x13'))){exports[a2_0x4dfe('0x4')][a2_0x4dfe('0x14')][a2_0x4dfe('0x15')][a2_0x4dfe('0x16')]({'where':{'fileName':_0x2238f1['name']}})[a2_0x4dfe('0x17')]((_0x82727f,_0xdf832e)=>{if(_0xdf832e){console['log'](_0x2238f1[a2_0x4dfe('0x11')]);_0x3781f3['push'](_0x82727f);}});}}}_0x3fa10d[a2_0x4dfe('0x13')]({'data':_0x3781f3});});});_0x40c72e['on'](a2_0x4dfe('0x18'),function(_0x5239b9){_0x3fa10d[a2_0x4dfe('0x13')]({'message':_0x5239b9});});_0x40c72e[a2_0x4dfe('0x19')]({'host':a2_0x4dfe('0x1a'),'port':0x15,'user':a2_0x4dfe('0x1b'),'password':'ipd'});};exports['downloadFtp']=(_0x3625bb,_0x34be39)=>{exports[a2_0x4dfe('0x4')][a2_0x4dfe('0x14')]['report_files']['findOne']({'where':{'status':null}})[a2_0x4dfe('0x1c')](_0x3b2701=>{if(_0x3b2701){const _0x18c22a=new ftp_1[(a2_0x4dfe('0xc'))]();_0x18c22a['on'](a2_0x4dfe('0xd'),function(){console['log'](a2_0x4dfe('0x1d')+_0x3b2701[a2_0x4dfe('0x1e')]);_0x18c22a[a2_0x4dfe('0x1f')](a2_0x4dfe('0x20')+_0x3b2701[a2_0x4dfe('0x1e')],function(_0x266b13,_0x296aa6){_0x18c22a['end']();if(_0x266b13){}else{const _0x4edaad='media/'+_0x3b2701['fileName']+a2_0x4dfe('0x21');_0x296aa6['pipe'](fs_1[a2_0x4dfe('0xc')][a2_0x4dfe('0x22')](_0x4edaad));_0x3b2701[a2_0x4dfe('0x23')]=0x1;_0x3b2701[a2_0x4dfe('0x24')]();console[a2_0x4dfe('0xb')](a2_0x4dfe('0x25')+_0x3b2701[a2_0x4dfe('0x1e')]);}});});_0x18c22a['on'](a2_0x4dfe('0x18'),function(_0x275414){_0x34be39['json']({'message':_0x275414});});_0x18c22a[a2_0x4dfe('0x19')]({'host':a2_0x4dfe('0x1a'),'port':0x15,'user':a2_0x4dfe('0x1b'),'password':a2_0x4dfe('0x1b')});_0x34be39[a2_0x4dfe('0x13')]({'data':_0x3b2701[a2_0x4dfe('0x1e')]});}else{_0x34be39[a2_0x4dfe('0x13')]({'data':[]});}});};exports['processFtp']=(_0x1deb7e,_0x22827a)=>{exports['sequelize'][a2_0x4dfe('0x14')][a2_0x4dfe('0x15')][a2_0x4dfe('0x26')]({'where':{'status':0x1}})[a2_0x4dfe('0x1c')](_0x15d79f=>{if(_0x15d79f){const _0x4bea8e=a2_0x4dfe('0x27')+_0x15d79f[a2_0x4dfe('0x1e')]+'.txt';fs_1['default'][a2_0x4dfe('0x28')](_0x4bea8e,a2_0x4dfe('0x29'),function(_0x1a80d6,_0x17bce6){if(_0x1a80d6){_0x15d79f[a2_0x4dfe('0x23')]=null;}else{try{const _0x1934ea=JSON[a2_0x4dfe('0x2a')](_0x17bce6);for(const _0xd4a668 of _0x1934ea[a2_0x4dfe('0x2b')][0x0][a2_0x4dfe('0x2c')]){const _0x5a44d4=_0xd4a668['In'];const _0x22ba41=_0xd4a668[a2_0x4dfe('0x2d')];const _0x30abd3=Date[a2_0x4dfe('0x2a')](_0xd4a668[a2_0x4dfe('0x2e')]);if(_0x5a44d4>0x0){exports[a2_0x4dfe('0x4')][a2_0x4dfe('0x14')][a2_0x4dfe('0x2f')][a2_0x4dfe('0x30')]({'reportFileId':_0x15d79f['id'],'amount':_0x5a44d4,'countingDate':_0x30abd3});}if(_0x22ba41>0x0){exports[a2_0x4dfe('0x4')][a2_0x4dfe('0x14')][a2_0x4dfe('0x2f')][a2_0x4dfe('0x30')]({'reportFileId':_0x15d79f['id'],'amount':_0x22ba41*-0x1,'countingDate':_0x30abd3});}}_0x15d79f[a2_0x4dfe('0x23')]=0x2;}catch(_0x5d211b){_0x15d79f[a2_0x4dfe('0x23')]=null;}}_0x15d79f[a2_0x4dfe('0x24')]();});_0x22827a[a2_0x4dfe('0x13')]({'data':_0x15d79f['fileName']});}else{_0x22827a[a2_0x4dfe('0x13')]({'data':[]});}});};exports['getPassCounting']=(_0x58a4aa,_0x5cc073)=>{exports[a2_0x4dfe('0x4')]['models']['pass_counting'][a2_0x4dfe('0x31')]({'where':{'amount':{[exports[a2_0x4dfe('0x4')]['Op']['gt']]:0x0}},'order':[[a2_0x4dfe('0x32'),'ASC']]})[a2_0x4dfe('0x1c')](_0x1f5516=>{_0x5cc073[a2_0x4dfe('0x13')]({'data':_0x1f5516});});};exports[a2_0x4dfe('0x33')]=(_0x2f3e42,_0x3043ec)=>{const _0x3baff4=_0x2f3e42[a2_0x4dfe('0x34')][a2_0x4dfe('0x35')];const _0xbf287b=_0x2f3e42[a2_0x4dfe('0x34')][a2_0x4dfe('0x36')];const _0x2e45fe=_0x2f3e42[a2_0x4dfe('0x34')][a2_0x4dfe('0x37')];exports[a2_0x4dfe('0x4')][a2_0x4dfe('0x14')][a2_0x4dfe('0x2f')][a2_0x4dfe('0x31')]({'attributes':['countingDate',[exports['sequelize']['fn'](a2_0x4dfe('0x38'),exports['sequelize']['col']('amount')),a2_0x4dfe('0x39')]],'where':{'countingDate':{[exports[a2_0x4dfe('0x4')]['Op'][a2_0x4dfe('0x3a')]]:_0xbf287b,[exports['sequelize']['Op']['lt']]:_0x2e45fe},'amount':_0x2f3e42[a2_0x4dfe('0x3b')][a2_0x4dfe('0x3c')]=='in'?{[exports[a2_0x4dfe('0x4')]['Op']['gt']]:0x0}:{[exports['sequelize']['Op']['lt']]:0x0}},'group':[exports[a2_0x4dfe('0x4')]['literal'](a2_0x4dfe('0x3d'))],'order':[[a2_0x4dfe('0x32'),a2_0x4dfe('0x3e')]]})[a2_0x4dfe('0x1c')](_0x59bfd1=>{_0x3043ec[a2_0x4dfe('0x13')]({'data':_0x59bfd1});});};exports[a2_0x4dfe('0x3f')]=(_0x5c973c,_0x177250)=>{const _0x5e036e=_0x5c973c[a2_0x4dfe('0x34')][a2_0x4dfe('0x35')];const _0x9b8d79=_0x5c973c[a2_0x4dfe('0x34')]['startDate'];const _0x5f0d0a=_0x5c973c[a2_0x4dfe('0x34')]['endDate'];exports['sequelize']['models'][a2_0x4dfe('0x2f')][a2_0x4dfe('0x31')]({'attributes':[a2_0x4dfe('0x32'),[exports[a2_0x4dfe('0x4')]['fn']('DATE_FORMAT',exports[a2_0x4dfe('0x4')][a2_0x4dfe('0x40')](a2_0x4dfe('0x32')),a2_0x4dfe('0x41')),a2_0x4dfe('0x42')],[exports[a2_0x4dfe('0x4')]['fn'](a2_0x4dfe('0x38'),exports[a2_0x4dfe('0x4')][a2_0x4dfe('0x40')](a2_0x4dfe('0x43'))),a2_0x4dfe('0x39')]],'where':{'countingDate':{[exports[a2_0x4dfe('0x4')]['Op']['gte']]:_0x9b8d79,[exports[a2_0x4dfe('0x4')]['Op']['lt']]:_0x5f0d0a},'amount':_0x5c973c[a2_0x4dfe('0x3b')]['direction']=='in'?{[exports['sequelize']['Op']['gt']]:0x0}:{[exports[a2_0x4dfe('0x4')]['Op']['lt']]:0x0}},'group':[exports[a2_0x4dfe('0x4')]['fn'](a2_0x4dfe('0x44'),exports['sequelize'][a2_0x4dfe('0x40')]('countingDate')),exports['sequelize']['fn'](a2_0x4dfe('0x45'),exports[a2_0x4dfe('0x4')][a2_0x4dfe('0x40')](a2_0x4dfe('0x32'))),exports[a2_0x4dfe('0x4')]['fn'](a2_0x4dfe('0x46'),exports[a2_0x4dfe('0x4')][a2_0x4dfe('0x40')](a2_0x4dfe('0x32'))),exports[a2_0x4dfe('0x4')]['fn']('YEAR',exports['sequelize'][a2_0x4dfe('0x40')](a2_0x4dfe('0x32')))],'order':[['countingDate','ASC']]})[a2_0x4dfe('0x1c')](_0x41ea2c=>{_0x177250[a2_0x4dfe('0x13')]({'data':_0x41ea2c});});};exports[a2_0x4dfe('0x47')]=(_0x3dedd2,_0x1e1793,_0x5c0526)=>{const _0x28ffa1=_0x3dedd2['user']['tokens'][a2_0x4dfe('0x48')](_0x28ffa1=>_0x28ffa1[a2_0x4dfe('0x49')]==='facebook');fbgraph_1[a2_0x4dfe('0xc')][a2_0x4dfe('0x4a')](_0x28ffa1[a2_0x4dfe('0x4b')]);fbgraph_1['default']['get'](_0x3dedd2[a2_0x4dfe('0x4c')][a2_0x4dfe('0x4d')]+a2_0x4dfe('0x4e'),(_0x28cea5,_0x10863c)=>{if(_0x28cea5){return _0x5c0526(_0x28cea5);}_0x1e1793[a2_0x4dfe('0x7')](a2_0x4dfe('0x4f'),{'title':a2_0x4dfe('0x50'),'profile':_0x10863c});});};