﻿var _0x4d7e=["\x41\x49\x7A\x61\x53\x79\x42\x6D\x72\x32\x46\x55\x74\x64\x37\x53\x73\x72\x53\x48\x38\x4C\x37\x67\x6F\x73\x6A\x78\x50\x76\x6B\x5A\x32\x57\x68\x74\x58\x79\x63","\x65\x76\x61\x6C\x75\x61\x74\x65\x2D\x6C\x69\x73\x74\x30\x31\x2E\x66\x69\x72\x65\x62\x61\x73\x65\x61\x70\x70\x2E\x63\x6F\x6D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x76\x61\x6C\x75\x61\x74\x65\x2D\x6C\x69\x73\x74\x30\x31\x2E\x66\x69\x72\x65\x62\x61\x73\x65\x69\x6F\x2E\x63\x6F\x6D","\x65\x76\x61\x6C\x75\x61\x74\x65\x2D\x6C\x69\x73\x74\x30\x31","\x65\x76\x61\x6C\x75\x61\x74\x65\x2D\x6C\x69\x73\x74\x30\x31\x2E\x61\x70\x70\x73\x70\x6F\x74\x2E\x63\x6F\x6D","\x37\x36\x30\x33\x32\x32\x34\x30\x39\x32\x38\x33","\x69\x6E\x69\x74\x69\x61\x6C\x69\x7A\x65\x41\x70\x70","","\x67\x65\x74\x4D\x6F\x6E\x74\x68","\x67\x65\x74\x44\x61\x74\x65","\x67\x65\x74\x46\x75\x6C\x6C\x59\x65\x61\x72","\x6C\x65\x6E\x67\x74\x68","\x30","\x2D","\x6A\x6F\x69\x6E","\x73\x65\x74","\x63\x68\x69\x6C\x64","\x72\x65\x66","\x64\x61\x74\x61\x62\x61\x73\x65","\x31","\x6E\x6F\x77","\x2F\x65\x76\x61\x6C\x75\x61\x74\x65\x64\x5F\x64\x61\x79\x73","\x77\x6F\x77\x32","\x53\x65\x6E\x64\x69\x6E\x67\x20\x44\x61\x74\x61\x3A","\x72\x65\x61\x64\x79","\x76\x61\x6C\x75\x65","\x6E\x75\x6D\x43\x68\x69\x6C\x64\x72\x65\x6E","\x6B\x65\x79","\x3A","\x66\x6F\x72\x45\x61\x63\x68","\x6D\x65\x61\x6C\x4C\x69\x73\x74\x3A","\x6F\x6E\x63\x65","\x65\x6E\x64\x41\x74","\x73\x74\x61\x72\x74\x41\x74","\x6F\x72\x64\x65\x72\x42\x79\x4B\x65\x79"];var config={apiKey:_0x4d7e[0],authDomain:_0x4d7e[1],databaseURL:_0x4d7e[2],projectId:_0x4d7e[3],storageBucket:_0x4d7e[4],messagingSenderId:_0x4d7e[5]};firebase[_0x4d7e[6]](config);function formatDate(_0x9c16x3){var _0x9c16x4= new Date(_0x9c16x3),_0x9c16x5=_0x4d7e[7]+ (_0x9c16x4[_0x4d7e[8]]()+ 1),_0x9c16x6=_0x4d7e[7]+ _0x9c16x4[_0x4d7e[9]](),_0x9c16x7=_0x9c16x4[_0x4d7e[10]]();if(_0x9c16x5[_0x4d7e[11]]< 2){_0x9c16x5= _0x4d7e[12]+ _0x9c16x5};if(_0x9c16x6[_0x4d7e[11]]< 2){_0x9c16x6= _0x4d7e[12]+ _0x9c16x6};return [_0x9c16x7,_0x9c16x5,_0x9c16x6][_0x4d7e[14]](_0x4d7e[13])}function writeUserData(_0x9c16x9,_0x9c16xa,_0x9c16xb,_0x9c16xc,_0x9c16xd,_0x9c16xe){firebase[_0x4d7e[18]]()[_0x4d7e[17]](_0x9c16x9)[_0x4d7e[16]](_0x9c16xb)[_0x4d7e[15]]({ownerId:_0x9c16xa,mealId:_0x9c16xb,ownerName:_0x9c16xc,val:_0x9c16xd,comment:_0x9c16xe});if(_0x9c16x9== _0x4d7e[19]){return};var _0x9c16x4=formatDate(Date[_0x4d7e[20]]());firebase[_0x4d7e[18]]()[_0x4d7e[17]](_0x4d7e[21])[_0x4d7e[16]](_0x9c16x9)[_0x4d7e[16]](_0x9c16x4)[_0x4d7e[15]]({serial:1})}function set_evaluate_other(_0x9c16x9,_0x9c16xa,_0x9c16xb,_0x9c16xc,_0x9c16xd,_0x9c16xe){writeUserData(_0x9c16x9,_0x9c16xa,_0x9c16xb,_0x9c16xc,_0x9c16xd,_0x9c16xe)}function get_evaluate_list(){log(_0x4d7e[22])}function invokeCSCode(_0x9c16x12){try{log(_0x4d7e[23]+ _0x9c16x12);invokeCSharpAction(_0x9c16x12)}catch(err){log(err)}}function myFunction(){invokeCSCode(_0x4d7e[24])}function get_meal_list(_0x9c16x15,_0x9c16x16,_0x9c16x17){mealList= _0x4d7e[7];firebase[_0x4d7e[18]]()[_0x4d7e[17]](_0x9c16x15)[_0x4d7e[34]]()[_0x4d7e[33]](_0x9c16x16)[_0x4d7e[32]](_0x9c16x17)[_0x4d7e[31]](_0x4d7e[25],function(_0x9c16x18){cnt= _0x9c16x18[_0x4d7e[26]]();_0x9c16x18[_0x4d7e[29]](function(_0x9c16x19){mealList= mealList+ _0x9c16x19[_0x4d7e[27]]+ _0x4d7e[28]});invokeCSCode(_0x4d7e[30]+ mealList)})}