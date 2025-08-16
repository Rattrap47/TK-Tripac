var logoImage = '';
var menulink = '';
var linkArray = new Array();
var contVerC = '';
var hmiVerC = '';
var scmVerC = '';
var pcmonVerC = '';
var contVerF = 'NA';
var hmiVerF = 'NA';
var scmVerF = 'NA';
var pcmonVerF = 'NA';
var contTextC = '';
var hmiTextC = '';
var scmTextC = '';
var pcmonTextC = '';
var appModeFlag = true;
var sysmonFlag = false;
var GlobalStatus = '';
var PageName = ''
var blockFlag = '';
var TempDisplayFlag = '';
var TimerFlag;
var ServiceTestNumber = '';
var appBootCheck = '';
var tkmVerWritten = '';
var bootMode=false;

/* Restart Commands */
var CommandWarmRestart = "16 16 73 01 00";
var CommandControllerMode = "16 16 76";
/* Restart Commands Ends Here */

/* Datalogger filename read commands */
var ReadDataloggerFileNameFirstCharacter = '16 16 36 13 45 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var ReadDataloggerFileNameSecondCharacter = '16 16 36 13 46 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var ReadDataloggerFileNameThirdCharacter = '16 16 36 13 47 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var ReadDataloggerFileNameFourthCharacter = '16 16 36 13 48 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var ReadDataloggerFileNameFifthCharacter = '16 16 36 13 49 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var ReadDataloggerFileNameSixthCharacter = '16 16 36 13 4A 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var ReadDataloggerFileNameCounter = '16 16 36 13 4B 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
/* Datalogger filename read commands */

/* TKMonitor Version */
var CommandTKMVersion =    '16 16 36 13 42 43 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var CommandTKMSubVersion = '16 16 36 13 43 10 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var CommandTKMBuild =      '16 16 36 13 41 45 00 00 00 00 00 00 00 00 01 00 00 a6 44';

var PasswordRequiredOrNot ='16 16 36 ff 50 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';


function WriteTKMVersion(){
	xmlHttp=GetXmlHttpObject();
	var url = "query?";
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
	var input_string = CommandTKMVersion+'\n'+CommandTKMSubVersion+'\n'+CommandTKMBuild;
	url = url+encodeURIComponent(input_string);
	url=url+"?sid="+Math.random();
	xmlHttp.onreadystatechange=WriteVersion;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}

function WriteVersion(){
	if(xmlHttp.readyState == 4){
		tkmVerWritten="true";
		sessionStorage.setItem("tkmVerWritten", tkmVerWritten);
		CheckGlobalStatus(PageName);
	}
}

/* TKMonitor Version */

function GetXmlHttpObject()
{
var xmlHttp=null;
try
  {
  // Firefox, Opera 8.0+, Safari
  xmlHttp=new XMLHttpRequest();
  }
catch (e)
  {
  // Internet Explorer
  try
    {
    xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
    }
  catch (e)
    {
    xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  }
return xmlHttp;
}

function isEven(value){
	return !(value % 2);
}

function decimalToHex(d, padding) {
    var hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
        hex = "0" + hex;
    }

    return hex;
}


function TempConversion(num){
	var strLen = num.length;
	num = num.substr(0,strLen);
	var result = parseFloat(num) * (9/5) + 32;
	if(isNaN(result)){
		if(num.toLowerCase() == 'disabled'){
			return num;
		} else {
			return '0';
		}
	}
	return result.toFixed(1);
}


function restart(){
	xmlHttp=GetXmlHttpObject();
	var url = "query?";
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
	var input_string = CommandWarmRestart;
	url = url+encodeURIComponent(input_string);
	url=url+"?sid="+Math.random();
	xmlHttp.onreadystatechange=HandleRestart;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);	
}

function HandleRestart(){
	if(xmlHttp.readyState == 4){
	    var valuesArray = ConvertHextoDecimal(xmlHttp.responseText);
		window.close();
	}
}

function AchorCursor(){
	document.body.style.cursor = 'pointer';
	return;
}

function DefaultCorsor(){
	document.body.style.cursor = 'default';
	return;
}

function CheckMode(screen){
	xmlHttp=GetXmlHttpObject();
	var url = '/query?';
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
	PageName = screen;
	var appBootCheck = sessionStorage.getItem("appBootCheck");
	if(appBootCheck ==null){
		var input_string = CommandControllerMode;
		url = url+encodeURIComponent(input_string);
		url=url+"?sid="+Math.random();
		xmlHttp.onreadystatechange=UpdateModeStatus;
		xmlHttp.open("GET",url,true);
		xmlHttp.send(null);
	}
	else{
		if(bootMode==true){
			window.location.href="BOOTMODE.HTM";
		}
		else{
			var tkmVerWritten = sessionStorage.getItem("tkmVerWritten");
			if(tkmVerWritten==null){
				//write TKM Version to GDT
				WriteTKMVersion();
			}
			else{
				CheckGlobalStatus(PageName);
			}
		}
	}
}

function UpdateModeStatus(){
	if(xmlHttp.readyState == 4){
		appBootCheck = "true";
		sessionStorage.setItem("appBootCheck", appBootCheck);
		var space_split = xmlHttp.responseText.split(' ');
		if(space_split[3] == '00'){
			//controller in Boot mode so only frimware upgrade available
			bootMode=true;
			window.location.href='BOOTMODE.HTM';
		} else {
			if(tkmVerWritten==''){
				//write TKM Version to GDT
				WriteTKMVersion();
			}
			else{
				CheckGlobalStatus(PageName);
			}
		}
	}
}

function CheckGlobalStatus(FromValue){
	xmlHttp=GetXmlHttpObject();
	var url = '/query?';
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
	PageName = FromValue;
	var input_string = "16 16 73 00 00 01 80"; 
	url = url+encodeURIComponent(input_string);
	url=url+"?sid="+Math.random();
	xmlHttp.onreadystatechange=UpdateGlobalStatus;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}

function UpdateGlobalStatus(){
	if(xmlHttp.readyState == 4){
		var space_split = xmlHttp.responseText.split(' ');
		if(parseInt(space_split[5],16) != 255){
			GlobalStatus = 'Service Test';
			document.getElementById('statusDisplay').innerHTML = 'Running '+GlobalStatus;
		}
		if(PageName == 'dboard'){
			getDashboardDetails('dboard','1');
			if(GlobalStatus == 'Service Test'){
				ServiceTestNumber = space_split[5];
			}
		} else if(PageName == 'firmsrc'){
			getCurVer();
		} else if(PageName == 'sysmon'){
			getSysMonVariables(1);			
		} else if(PageName == 'alarm'){
			getAlarmDetails();
		} else if(PageName == 'service'){
			document.getElementById('testButton').disabled = false;
			document.getElementById('statusDisplay').innerHTML = '';
			if(GlobalStatus == 'Service Test'){
				document.getElementById('statusDisplay').innerHTML = 'Running '+GlobalStatus;
				CurrentServiceTestRunning(space_split[5]);
			}
			document.getElementById('servicetestbutton').style.display = 'inline'; 

//alert('service test page');

//IsPasswordRequiredOrNot(); not required for now ... umesh tripathi

		} else if(PageName == 'unitsetup'){
			getUnitSetup();
		} else if(PageName == 'pfeature'){
			getprogrammableFeature();
		} 	
	}
	return true;
}


function IsPasswordRequiredOrNot()
{
xmlHttp=GetXmlHttpObject();
	var url = '/query?';
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}

	var input_string=PasswordRequiredOrNot;	 
	url = url+encodeURIComponent(input_string);
	url=url+"?sid="+Math.random();
	xmlHttp.onreadystatechange=IsPasswordNecessary;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}

function IsPasswordNecessary()
{
if(xmlHttp.readyState == 4){
		var space_split = xmlHttp.responseText.split(' ');
		alert(space_split);
		if(space_split[5]==0)
	{
			document.getElementById('passwordTable').style.display = 'none';
			//document.getElementById('pfeatureupdate').style.display = 'none';			
			document.getElementById('testButton').disabled = false;

	}
			else

	{

	}
}
}

function ConvertHextoDecimal(responseString){
	var space_split = responseString.split(' ');
	var resultArray = new Array();
	var arrayIndex = 0;
	for(var index = 5; index <= space_split.length; index = index + 18){
		//reversing the byte
		resultArray[arrayIndex] = parseInt(space_split[index+1]+space_split[index],16);//reversing bytes and converting them to decimal
		if(resultArray[arrayIndex] > 32728){//checking for -ve value
			//its -ve value
			resultArray[arrayIndex] = (65535 - resultArray[arrayIndex])+1;
			resultArray[arrayIndex] = '-'+resultArray[arrayIndex];
		}
		arrayIndex++;			
	}
	return resultArray;
}

function InHexValue(responseString){
	var space_split = responseString.split(' ');
	var resultArray = new Array();
	var arrayIndex = 0;
	for(var index = 5; index <= space_split.length; index = index + 18){
		//reversing the byte
		resultArray[arrayIndex] = parseInt(space_split[index+1]+space_split[index],10);//reversing bytes and converting them to Hex
		arrayIndex++;			
	}
	return resultArray;
}

function ConvertToFahrenheit(celsiusValue){
	var fahrenheitValue = Upto2Decimal((celsiusValue*1.8+32),1);
	return fahrenheitValue;
}

function Upto2Decimal(num, decimaldigits) {
	decimaldigits = 1;
	var result = Math.round(num*Math.pow(10,decimaldigits))/Math.pow(10,decimaldigits);
	return result;
}

function CheckSession(){
	if(checkCookie()){
		var pinEntered = checkCookie();
		document.getElementById('passwordselection').style.display='none';
		document.getElementById('radio').style.display='inline';
		if(pinEntered == '5555'){
			document.getElementById('gdtTools').style.display='inline';
			document.getElementById('supercoldrestart').style.display='inline';
		} else {
			document.getElementById('restartDiv').style.display = 'none';
			document.getElementById('gdtwritediv').style.display = 'none';
			document.getElementById('gdtreaddiv').style.display = 'none';
			document.getElementById('supercoldrestart').style.display='none';
		}
		//return true;
	} else {
		//return false;
		//EnterPassword();
		document.getElementById('passwordselection').style.display='inline';
		document.getElementById('radio').style.display='none';	
		document.getElementById('gdtTools').style.display='none';
		document.getElementById('supercoldrestart').style.display='none';	
	}
}

function checkCookie(){
	var i,variableName,VariableValue,ARRcookies=document.cookie.split(";");
	var CookieName = '4444';
	var CookieNameEngineering = '5555';
	for (i=0;i<ARRcookies.length;i++){
		variableName=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
		VariableValue=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
		variableName=variableName.replace(/^\s+|\s+$/g,"");
		if ((variableName==CookieName) || (variableName==CookieNameEngineering)){
    		return variableName;
    	}
  	}
}

function securityPINValidation(){
	var securityPINvalue = document.getElementById('securityPINinput').value;
	if(securityPINvalue.toLowerCase() == '4444' || securityPINvalue.toLowerCase() == '5555'){
		//call cookie creation function
		CreateCookie(securityPINvalue,'ok');
		document.getElementById('passwordselection').style.display='none';
		document.getElementById('radio').style.display='inline';
		//document.getElementById('forgotpasswordjavascript').style.display='inline';
		if(securityPINvalue.toLowerCase() == '5555'){
			document.getElementById('gdtTools').style.display='inline';
			document.getElementById('supercoldrestart').style.display='inline';
			//document.getElementById('forgotpasswordjavascript').style.display='inline';
		} else {
			document.getElementById('restartDiv').style.display = 'none';
			document.getElementById('gdtwritediv').style.display = 'none';
			document.getElementById('gdtreaddiv').style.display = 'none';
			document.getElementById('gdtwritediv').style.visibility = 'hidden';
			document.getElementById('gdtreaddiv').style.visibility = 'hidden';
			if(document.getElementById('supercoldrestart').checked = 'true') {
			document.getElementById('supercoldrestart').disabled='true';
			}
			//document.getElementById('forgotpasswordjavascript').style.display = 'inline';
		}		
	} else {
		alert('Wrong Security PIN, Please retry');
	}
}

function CreateCookie(name,value){
	var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function AppendZero(passedString){
	if(passedString.length == 1 && parseInt(passedString,10) < 10){
		return "0"+passedString;
	} else {
		return passedString;
	}
}