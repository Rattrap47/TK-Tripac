/* Service Test Commands */
var CommandCoolModeTest = '16 16 73 00 00 01 00';
var CommandHeatModeTest = '16 16 73 00 00 02 00';
var CommandFanOnlyTest = '16 16 73 00 00 19 00';
var CommandAlternatorOutputTest = '16 16 73 00 00 1A 00';
var CommandRelayTest = '16 16 73 00 00 1B 00';
var CommandRunInTest = '16 16 73 00 00 1C 00';
var CommandExitServiceTest = '16 16 73 00 00 05 00';
var CommandTimer = '16 16 36 13 4D 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var ServiceTestRefreshFlag = '';
/* Unit Setup Commands */

function RunServiceTest(){
	xmlHttp=GetXmlHttpObject();
	var url = '/query?';
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
	document.getElementById('testButton').disabled = true;
	var input_string;
	if(document.getElementById('CoolModeTest').checked){
		input_string = CommandCoolModeTest;
	} else if(document.getElementById('HeatModeTest').checked){
		input_string = CommandHeatModeTest;
	} else if(document.getElementById('FanOnlyTest').checked){
		input_string = CommandFanOnlyTest;
	} else if(document.getElementById('AlternatorOutputTest').checked){
		input_string = CommandAlternatorOutputTest;
	} else if(document.getElementById('RunInTest').checked){
		input_string = CommandRunInTest;
	} else if(document.getElementById('RelayTest').checked){
		input_string = CommandRelayTest;
	}	 
	url = url+encodeURIComponent(input_string);
	url=url+"?sid="+Math.random();
	xmlHttp.onreadystatechange=LoadServiceTest;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}

function LoadServiceTest(){
	if(xmlHttp.readyState == 4){
		var valuesArray = ConvertHextoDecimal(xmlHttp.responseText);
		if(parseInt(valuesArray[0]) == 255 ){
			alert('Failed to Start the test');
			document.getElementById('testButton').disabled = false;
			return false;
		} else {
			document.getElementById('statusDisplay').innerHTML = "Running Service Test";
			document.getElementById('servicetestbutton').innerHTML = '<input type="submit" name="update" id="CancelTestButton" value="Exit Service Test" onclick="CancelServiceTest();" style="background-color:#C4AE7C;font: 12px Verdana, Arial, Helvetica, sans-serif;width:155px;">';
			document.getElementById('serviceTestTimer').style.display = 'inline';
			LoadTimer();
			ServiceTestRefreshFlag = setTimeout("CheckServiceTest()",5000);
		}
	}
}

//need to write function to update Timer

function LoadTimer(){
	xmlHttp=GetXmlHttpObject();
	var url = '/query?';
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
	//select the current test running and then load timer
	var input_string = CommandTimer;
	url = url+encodeURIComponent(input_string);
	url=url+"?sid="+Math.random();
	xmlHttp.onreadystatechange=LoadTimerValue;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);	
}

function LoadTimerValue(){
	if(xmlHttp.readyState == 4){
		//calculate the time remaning and update it
		var valuesArray = ConvertHextoDecimal(xmlHttp.responseText);
		if(valuesArray[0] < 9){
			valuesArray[0] = '0'+valuesArray[0];
		}
		document.getElementById('timerMinute').innerHTML = valuesArray[0];
		if(valuesArray[0] == 15 && document.getElementById('RunInTest').checked == false){
			alert('Service Test Completed');
			document.getElementById('statusDisplay').innerHTML = "Service Test Completed";
		} else if(valuesArray[0] == 600 && document.getElementById('RunInTest').checked == true){
			alert('Service Test Completed');
			document.getElementById('statusDisplay').innerHTML = "Service Test Completed";
		} else {
			setTimeout("LoadTimer()",30000);
		}
	}
}

function CancelServiceTest(){
	xmlHttp=GetXmlHttpObject();
	var url = '/query?';
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
	document.getElementById('CancelTestButton').disabled = true;
	var input_string = CommandExitServiceTest;		 
	url = url+encodeURIComponent(input_string);
	url=url+"?sid="+Math.random();
	xmlHttp.onreadystatechange=ExitServiceTest;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}

function ExitServiceTest(){
	if(xmlHttp.readyState == 4){
		var valuesArray = ConvertHextoDecimal(xmlHttp.responseText);
		if(parseInt(valuesArray[0]) == 255){
			alert('Failed to Cancel the Test');
		} else {
			// set timers to zero -- may not be required
			//code needed to be added here
			document.getElementById('statusDisplay').innerHTML = ''
			document.getElementById('timerMinute').innerHTML = '00';
			document.getElementById('serviceTestTimer').style.display = 'none';
			document.getElementById('servicetestbutton').innerHTML = '<input type="submit" name="update" id="testButton" value="Run Test" onclick="RunServiceTest();" style="background-color:#C4AE7C;font: 12px Verdana, Arial, Helvetica, sans-serif;width:155px;">';
		}
	}
}

function CurrentServiceTestRunning(CurrentTest){
	if(CurrentTest == '01'){
		document.getElementById('CoolModeTest').checked = true;
	} else if(CurrentTest == '02'){
		document.getElementById('HeatModeTest').checked = true;
	} else if(CurrentTest == '19'){
		document.getElementById('FanOnlyTest').checked = true;
	} else if(CurrentTest == '1A'){
		document.getElementById('AlternatorOutputTest').checked = true;
	} else if(CurrentTest == '1B'){
		document.getElementById('RelayTest').checked = true;
	} else if(CurrentTest == '1C'){
		document.getElementById('RunInTest').checked = true;
	}
	document.getElementById('serviceTestTimer').style.display = 'inline';
	document.getElementById('servicetestbutton').innerHTML = '<input type="submit" name="update" id="CancelTestButton" value="Exit Service Test" onclick="CancelServiceTest();" style="background-color:#C4AE7C;font: 12px Verdana, Arial, Helvetica, sans-serif;width:155px;">';
	clearTimeout(ServiceTestRefreshFlag);
	LoadTimer();
}

function CheckServiceTest(){
	xmlHttp=GetXmlHttpObject();
	var url = '/query?';
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
	var input_string = "16 16 73 00 00 01 80"; //16 16 73 00 00 01 80 
	url = url+encodeURIComponent(input_string);
	url=url+"?sid="+Math.random();
	xmlHttp.onreadystatechange=UpdateServiceTestStatus;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}

function UpdateServiceTestStatus(){
	if(xmlHttp.readyState == 4){
		var space_split = xmlHttp.responseText.split(' ');
		if(parseInt(space_split[5],16) != 255){
			GlobalStatus = 'Service Test';
			document.getElementById('statusDisplay').innerHTML = 'Running '+GlobalStatus;
			CurrentServiceTestRunning(space_split[5]);
		} else {
			alert('Service test got terminated');
			document.getElementById('statusDisplay').innerHTML = '';
			location.reload(true);
		}
	}
}