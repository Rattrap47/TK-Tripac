/* Alarm command block */
var CommandAlarmRead = '16 16 41 01 7c 0b';
var CommandClearAll = '16 16 52';
var CommandAlarmClear = '16 16 46 00 XX';
/* Alarm command block */

var AlarmDetailsArray = new Array(); //Global array which holds all Alarms

function getAlarm(){
	xmlHttp=GetXmlHttpObject();
	var url = '/query?';
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
	var input_string = CommandAlarmRead;
	document.getElementById('statusDisplay').style.visibility = 'visible';
	document.getElementById('button').disabled = true;
	url = url+encodeURIComponent(input_string);
	url=url+"?sid="+Math.random();
	xmlHttp.onreadystatechange=updateAlarm;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}

function updateAlarm(){
	if(xmlHttp.readyState == 4){
		var space_split = xmlHttp.responseText.split(' ');
		var alarmNumberArray = new Array();
		var alarmLevelArray = new Array();
		var AlarmCount = parseInt(space_split[5],16);
		for(var counter=9,k=0; counter<space_split.length-2; counter = counter+4,k++){
			alarmNumberArray[k] = parseInt(space_split[counter],16);
			alarmLevelArray[k] = parseInt(space_split[counter+2],16);
		}
		var bgcolor = ''
		var alarmTypeTxt = '';
		var NumberValue = '';
		if( AlarmCount > 0){
			var tableString = "<div id=\"table\"><p><span class=\"head1\">Alarm Code</span><span class=\"head2\">Alarm Type</span><span class=\"head3\">Alarm Title</span><span class=\"head4\">Action</span></p>";
		    for(var i = 0; i < AlarmCount; i++){
			    bgcolor ="#FF9900";
			    if((alarmLevelArray[i] & 7) == 1){
				    bgcolor = '#FFFFFF'; // LOG
				    alarmTypeTxt="LOG";
			    } else if((alarmLevelArray[i] & 7) == 2){
				    bgcolor = '#FFFF00'; // CHECK
				    alarmTypeTxt="CHECK";
			    } else if((alarmLevelArray[i] & 7) == 3){
				    bgcolor = '#FF9900'; // PREVENT
				    alarmTypeTxt="PREVENT";
 		        } else if((alarmLevelArray[i] & 7) == 4){
				    bgcolor = '#FF3300'; // shutdown
				    alarmTypeTxt="SHUTDOWN";
			    } 
			    if((parseInt(alarmLevelArray[i]) & 128) == 0){
			    	//alert('inactive');
			    	//alert(alarmNumberArray[i]);
					bgcolor = '#808080'; // inactive Alarm
					var alarmdisplayString = '<p id="1"><span class="sp1" style="background-color:'+ bgcolor +'">'+alarmNumberArray[i]+'</span><span class="sp2" style="background-color:'+ bgcolor +'">' +alarmTypeTxt+ '</span><span class="sp3" style="background-color:'+ bgcolor +'">'+AlarmDetailsArray[alarmNumberArray[i]]+'</span><span class="sp4" style="background-color:'+ bgcolor +'"><input type="button" class="button" name="delete" id="'+alarmNumberArray[i]+'" value="Clear" onclick="clearAlarm('+alarmNumberArray[i]+');" style="font: 10px Verdana, Arial, Helvetica, sans-serif;height: 18px;" disabled></span></p>';
				} else {
					//alert('active');
					//alert(alarmNumberArray[i]);
					var alarmdisplayString = '<p id="1"><span class="sp1" style="background-color:'+ bgcolor +'">'+alarmNumberArray[i]+'</span><span class="sp2" style="background-color:'+ bgcolor +'">' +alarmTypeTxt+ '</span><span class="sp3" style="background-color:'+ bgcolor +'">'+AlarmDetailsArray[alarmNumberArray[i]]+'</span><span class="sp4" style="background-color:'+ bgcolor +'"><input type="button" class="button" name="delete" id="'+alarmNumberArray[i]+'" value="Clear" onclick="clearAlarm('+alarmNumberArray[i]+');" style="font: 10px Verdana, Arial, Helvetica, sans-serif;height: 18px;"></span></p>';
				}
		    	tableString += alarmdisplayString;
		    }		
		    tableString += '</div>';
		    document.getElementById('alarmtable').innerHTML = tableString+'</center>';
		    if(document.getElementById('statusDisplay').innerHTML != 'Running Service Test'){
		    	document.getElementById('statusDisplay').innerHTML = '';
		    }
		    document.getElementById('alarmtablecontent').style.display = 'inline';
		    document.getElementById('button').disabled = false; 
		} else {
			document.getElementById('alarmtablecontent').style.display = 'inline';
			var tableString = "<br><br><center>No Active Alarms</center>";
			document.getElementById('alarmtable').innerHTML = tableString;
			if(document.getElementById('statusDisplay').innerHTML != 'Running Service Test'){
				document.getElementById('statusDisplay').innerHTML = '';
			}
			document.getElementById('button').style.visibility = 'hidden';
		}
		setTimeout("getAlarm();",10000);
	}	
}

function getAlarmDetails(){
	xmlHttp=GetXmlHttpObject();
	var url = 'http://localhost:8080/ALARMS.TXT';
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
	url=url+"?sid="+Math.random();
	xmlHttp.onreadystatechange=LoadGLobalAlarmArray;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}

function LoadGLobalAlarmArray(){
	if(xmlHttp.readyState == 4){
		var line_split = xmlHttp.responseText.split('\n');
		AlarmDetailsArray = line_split;
		getAlarm();
	}
}

function ClearAll(){
	xmlHttp=GetXmlHttpObject();
	var url = '/query?';
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
	document.getElementById('button').disabled = true;
	var input_string = CommandClearAll;
	url = url+encodeURIComponent(input_string);
	url=url+"?sid="+Math.random();
	xmlHttp.onreadystatechange=ClearAllAlarm;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}

function ClearAllAlarm(){
	if(xmlHttp.readyState == 4){
		alert('Alarms Cleared ');
		location.reload(true);
	}
}

function clearAlarm(AlarmCode){
	xmlHttp=GetXmlHttpObject();
	var url = '/query?';
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
	document.getElementById(AlarmCode).disabled = true;
	AlarmCode = decimalToHex(AlarmCode,2);
	var input_string = CommandAlarmClear;
	if(AlarmCode.length < 2){
		AlarmCode = '0'+AlarmCode;
	}
	input_string = input_string.replace("XX",AlarmCode);
	url = url+encodeURIComponent(input_string);
	url=url+"?sid="+Math.random();
	xmlHttp.onreadystatechange=ClearAllAlarm;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}