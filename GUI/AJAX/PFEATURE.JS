/* Programmable Features Block */

var CommandTemperatureUnit = '16 16 36 00 06 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandSwitchToMonitor = '16 16 36 13 85 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandHysterisisOnCooling = '16 16 36 13 E9 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var ChargeCurrentShutoffValue = '16 16 36 13 87 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var EngineDelayTimer = '16 16 36 70 0C 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var RunTimePeriod = '16 16 36 13 86 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var LowTempLimitCool = '16 16 36 08 02 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var HighTempLimitCool = '16 16 36 09 02 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var LowTempLimitHeat = '16 16 36 08 03 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var HighTempLimitHeat = '16 16 36 09 03 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var BatteryVoltageRestartValve = '16 16 36 13 88 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var DLLoggingInterval = '16 16 36 10 03 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var HMIBrightness = '16 16 36 13 05 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var RTCClockRead = '16 16 17 HH MM SS DW DM MM YY 0'; //for reading
var CommandMinimumChargeDuration =  '16 16 36 13 C9 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';



var CommandTemperatureUnitWrite = '16 16 36 00 06 FB 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var CommandSwitchToMonitorWrite = '16 16 36 13 85 FB 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var CommandHysterisisOnCoolingWrite = '16 16 36 13 E9 FB 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var ChargeCurrentShutoffValueWrite = '16 16 36 13 87 FB LB 00 00 00 00 00 00 01 00 00 00 a6 44';
var EngineDelayTimerWrite = '16 16 36 70 0C FB 00 00 00 00 00 00 00 00 01 00 00 a6 44';

var MinimumChargeDurationWrite =  '16 16 36 13 C9 FB 00 00 00 00 00 00 00 00 01 00 00 a6 44'; //umesh

var RunTimePeriodWrite = '16 16 36 13 86 FB 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var LowTempLimitCoolWrite = '16 16 36 08 02 FB LB 00 00 00 00 00 00 00 01 00 00 a6 44';
var HighTempLimitCoolWrite = '16 16 36 09 02 FB LB 00 00 00 00 00 00 00 01 00 00 a6 44';
var LowTempLimitHeatWrite = '16 16 36 08 03 FB LB 00 00 00 00 00 00 00 01 00 00 a6 44';
var HighTempLimitHeatWrite = '16 16 36 09 03 FB LB 00 00 00 00 00 00 00 01 00 00 a6 44';
var BatteryVoltageRestartValveWrite = '16 16 36 13 88 FB LB 00 00 00 00 00 00 00 01 00 00 a6 44';
var DLLoggingIntervalWrite = '16 16 36 10 03 FB 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var HMIBrightnessWrite = '16 16 36 13 05 FB 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var RTCClockWrite = '16 16 17 HH MM SS DW DM MM YY 1'; //for writing




var PasswordGDTWriteFirstCharacter = '16 16 36 ff 48 DB 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var PasswordGDTWriteSecondCharacter = '16 16 36 ff 49 DB 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var PasswordGDTWriteThirdCharacter = '16 16 36 ff 4a DB 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var PasswordGDTWriteFourthCharacter = '16 16 36 ff 4b DB 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var PasswordGDTWriteFifthCharacter = '16 16 36 ff 4c DB 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var PasswordGDTWriteSixthCharacter = '16 16 36 ff 4d DB 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var PasswordGDTWriteSeventhCharacter = '16 16 36 ff 4e DB 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var PasswordGDTWriteEigthCharacter = '16 16 36 ff 4f DB 00 00 00 00 00 00 00 00 01 00 00 a6 44';


var CompareEEPROMRAMpassword ='16 16 36 ff 51 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';

var PasswordRequiredOrNot ='16 16 36 ff 50 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';

var PasswordRequiredOrNotWrite ='16 16 36 ff 50 FB 00 00 00 00 00 00 00 00 01 00 00 a6 44';

var PasswordGDTWriteFirstCharacterEEPROM = '16 16 36 ff 40 DB 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var PasswordGDTWriteSecondCharacterEEPROM = '16 16 36 ff 41 DB 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var PasswordGDTWriteThirdCharacterEEPROM = '16 16 36 ff 42 DB 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var PasswordGDTWriteFourthCharacterEEPROM = '16 16 36 ff 43 DB 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var PasswordGDTWriteFifthCharacterEEPROM = '16 16 36 ff 44 DB 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var PasswordGDTWriteSixthCharacterEEPROM = '16 16 36 ff 45 DB 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var PasswordGDTWriteSeventhCharacterEEPROM = '16 16 36 ff 46 DB 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var PasswordGDTWriteEigthCharacterEEPROM = '16 16 36 ff 47 DB 00 00 00 00 00 00 00 00 01 00 00 a6 44';


/* EEPROM password read commands */
var PasswordGDTReadFirstCharacter = '16 16 36 ff 40 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var PasswordGDTReadSecondCharacter = '16 16 36 ff 41 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var PasswordGDTReadThirdCharacter = '16 16 36 ff 42 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var PasswordGDTReadFourthCharacter = '16 16 36 ff 43 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var PasswordGDTReadFifthCharacter = '16 16 36 ff 44 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var PasswordGDTReadSixthCharacter = '16 16 36 ff 45 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var PasswordGDTReadSeventhCharacter = '16 16 36 ff 46 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var PasswordGDTReadEigthCharacter = '16 16 36 ff 47 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
/* EEPROM password read commands */


var DayOfWeek = new Array();
DayOfWeek[1] = 'Sunday';
DayOfWeek[2] = 'Monday';
DayOfWeek[3] = 'Tuesday';
DayOfWeek[4] = 'Wednesday';
DayOfWeek[5] = 'Thursday';
DayOfWeek[6] = 'Friday';
DayOfWeek[7] = 'Saturday';

var MonthArray = new Array();
MonthArray[1] = 'January';
MonthArray[2] = 'February';
MonthArray[3] = 'March';
MonthArray[4] = 'April';
MonthArray[5] = 'May';
MonthArray[6] = 'June';
MonthArray[7] = 'July';
MonthArray[8] = 'August';
MonthArray[9] = 'September';
MonthArray[10] = 'October';
MonthArray[11] = 'November';
MonthArray[12] = 'December';

var UpdateRTCFlag = false;

/* Programmable Features Block */

function getprogrammableFeature(){
	xmlHttp=GetXmlHttpObject();
	var url = '/query?';
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
	
	var input_string = CommandTemperatureUnit+"\n"+CommandSwitchToMonitor+"\n"+ChargeCurrentShutoffValue+"\n"+EngineDelayTimer+"\n"+DLLoggingInterval+"\n"+CommandHysterisisOnCooling+"\n"+HMIBrightness+"\n"+RunTimePeriod+"\n"+LowTempLimitCool+"\n"+HighTempLimitCool+"\n"+LowTempLimitHeat+"\n"+HighTempLimitHeat+"\n"+BatteryVoltageRestartValve+"\n"+PasswordRequiredOrNot;
	input_string = input_string + "\n" + PasswordGDTReadFirstCharacter+"\n"+PasswordGDTReadSecondCharacter+"\n"+PasswordGDTReadThirdCharacter+"\n"+PasswordGDTReadFourthCharacter+"\n"+PasswordGDTReadFifthCharacter+"\n"+PasswordGDTReadSixthCharacter+"\n"+PasswordGDTReadSeventhCharacter+"\n"+PasswordGDTReadEigthCharacter+"\n"+ CommandMinimumChargeDuration;
	url = url+encodeURIComponent(input_string);
	
	url=url+"?sid="+Math.random();
	xmlHttp.onreadystatechange=LoadprogrammableFeature;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}

function LoadprogrammableFeature(){
	if(xmlHttp.readyState == 4){
		var valuesArray = ConvertHextoDecimal(xmlHttp.responseText);
		var line_split = xmlHttp.responseText.split('\n');

		//alert(valuesArray);
		if(valuesArray[0] == 0){
			//Celsius
			document.getElementById('tempNo').checked = true;
			document.getElementById('tempsettinghidden').value = 'C';
			document.getElementById('coolingdeadbandSpan').innerHTML = 'C';
			document.getElementById('lowtemplimitcoolSpan').innerHTML = 'C';
			document.getElementById('hightemplimitcoolSpan').innerHTML = 'C';
			document.getElementById('lowtemplimitheatSpan').innerHTML = 'C';
			document.getElementById('hightemplimitheatSpan').innerHTML = 'C';
		} else {
			//Fahrenheit
			document.getElementById('tempYes').checked = true;
			document.getElementById('tempsettinghidden').value = 'F';
			document.getElementById('coolingdeadbandSpan').innerHTML = 'F';
			document.getElementById('lowtemplimitcoolSpan').innerHTML = 'F';
			document.getElementById('hightemplimitcoolSpan').innerHTML = 'F';
			document.getElementById('lowtemplimitheatSpan').innerHTML = 'F';
			document.getElementById('hightemplimitheatSpan').innerHTML = 'F';
		}
		
		if(valuesArray[1] == 0){
			//NO
			document.getElementById('switchtoMonitorNo').checked = true;
	
		} else {
			//Yes
			document.getElementById('switchtoMonitorYes').checked = true;
			//document.getElementById('pfeatureupdate').disabled=true;
		}
		
		document.getElementById('ChargeCurrentShutoffValue').value = valuesArray[2]/100;
		document.getElementById('EngineDelay').value = valuesArray[3];		
		document.getElementById('DLLogInterval').value = valuesArray[4];
		document.getElementById('HMIBrightness').value = valuesArray[6];
		document.getElementById('RunTimePeriod').value = valuesArray[7];
		document.getElementById('CoolingHysterisis').value = valuesArray[5];
		document.getElementById('BatteryVoltage').value = valuesArray[12]/1000;	
		document.getElementById('DLChargeDuration').value = valuesArray[22];	 // minimum charge display . umesh

		if(parseInt(valuesArray[0],16) == 1){ // its in F								
			document.getElementById('lowtemplimitcool').value = Math.round(ConvertToFahrenheit((valuesArray[8]/32)));
			document.getElementById('hightemplimitcool').value = Math.round(ConvertToFahrenheit((valuesArray[9]/32)));
			document.getElementById('lowtemplimitheat').value = Math.round(ConvertToFahrenheit((valuesArray[10]/32)));
			document.getElementById('hightemplimitheat').value = Math.round(ConvertToFahrenheit((valuesArray[11]/32)));
		} else {
			document.getElementById('lowtemplimitcool').value = Math.round(valuesArray[8]/32);
			document.getElementById('hightemplimitcool').value = Math.round(valuesArray[9]/32);
			document.getElementById('lowtemplimitheat').value = Math.round(valuesArray[10]/32);
			document.getElementById('hightemplimitheat').value = Math.round(valuesArray[11]/32);
		}		

	if(valuesArray[13] == 0){
			//NO
			document.getElementById('PasswordProtectionNo').checked = true;
			document.getElementById('passwordTable').style.display = 'none';
			document.getElementById('pfeatureupdate').disabled=false;
			document.getElementById('passwordBox').style.display = 'none';
			document.getElementById('forgotpasswordjavascriptNew').style.display = 'none';
		} else {
			//Yes
			document.getElementById('PasswordProtectionYes').checked = true;
			document.getElementById('pfeatureupdate').disabled=true;
			document.getElementById('passwordBox').style.display = 'inline';
			document.getElementById('forgotpasswordjavascriptNew').style.display = 'inline';

		}

//var Min_Charge_Duration=line_split[22];

//alert(Min_Charge_Duration);

//var MinimumChargeDuration = document.getElementById('DLChargeDuration').value;
//MinimumChargeDurationWrite = MinimumChargeDurationWrite.replace("FB", MinimumChargeDuration,null);



//tempvarMinimumChargeDurationWrite = MinimumChargeDurationWrite;

//var MinimumChargeDuration = splitValueIntoBytes(parseInt(document.getElementById('DLChargeDuration').value,10).toString(16));
	//tempvarMinimumChargeDurationWrite = tempvarMinimumChargeDurationWrite.replace('FB', MinimumChargeDuration.HB); // umesh



//alert(tempvarMinimumChargeDurationWrite);
			var lineOne=line_split[14];
		var CharacterOne=lineOne.split(' ');
		var lineTwo=line_split[15];
		var CharacterTwo=lineTwo.split(' ');
		var lineThree=line_split[16];
		var CharacterThree=lineThree.split(' ');
		var lineFour=line_split[17];
		var CharacterFour=lineFour.split(' ');
		var lineFive=line_split[18];
		var CharacterFive=lineFive.split(' ');
		var lineSix=line_split[19];
		var CharacterSix=lineSix.split(' ');
		var lineSeven=line_split[20];
		var CharacterSeven=lineSeven.split(' ');
		var lineEight=line_split[21];
		var CharacterEight=lineEight.split(' ');
		if(parseInt(CharacterOne[5],10) == 20 && parseInt(CharacterTwo[5],10) == 20 && parseInt(CharacterThree[5],10) == 20 && parseInt(CharacterFour[5],10) == 20 && parseInt(CharacterFive[5],10)==20 && parseInt(CharacterSix[5],10)==20 && parseInt(CharacterSeven[5],10)== 20 && parseInt(CharacterEight[5],10)==20 && valuesArray[13] == 1)
	{
		//alert('Default Password');
		document.getElementById('forgotpasswordjavascript').style.display = 'inline'; // kept none for now. umesh
		document.getElementById('forgotpasswordjavascriptNew').style.display = 'none';
	}

	else
	{
	document.getElementById('forgotpasswordjavascript').style.display = 'none';
	if(valuesArray[13] == 1)
		{
	document.getElementById('forgotpasswordjavascriptNew').style.display = 'inline';
		}
	}


		getRTCParameter();			
	}
}


function ForgotPassword()
{
document.getElementById('PasswordTabularShow').style.display = 'inline';

}
function ForgotPasswordForUpdate()
{
document.getElementById('PasswordTabularShowForUpdateNew').style.display = 'inline';

}

function securityPassWordUpdate()
{
xmlHttp=GetXmlHttpObject();
	var url = '/query?';
	var urlAgain = '/query?';
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
	
	var pass1 = document.getElementById("securityPasswordinputUpdateFeature");
	var pass2 = document.getElementById("securityPasswordinputRe");

if(pass1.value==pass2.value && pass1.value!=null && pass2.value!=null && pass1.value!="" && pass2.value!="" ){
var InputPasswordValue = document.getElementById('securityPasswordinputUpdateFeature').value;
//alert(InputPasswordValue);
		var firstcharacter = InputPasswordValue.substring(0,1);
		var secondcharacter = InputPasswordValue.substring(1,2);
		var thirdcharacter = InputPasswordValue.substring(2,3);
		var fourthcharacter = InputPasswordValue.substring(3,4);
		var fifthcharacter = InputPasswordValue.substring(4,5);
		var sixthcharacter = InputPasswordValue.substring(5,6);
		var seventhcharacter = InputPasswordValue.substring(6,7);
		var eigthcharacter = InputPasswordValue.substring(7,8);

		//var countercharacter = DataloggerFileNameValue.substring(6,8).toLowerCase();

		PasswordGDTWriteFirstCharacterEEPROM = PasswordGDTWriteFirstCharacterEEPROM.replace("DB", firstcharacter.charCodeAt(0),null);
		PasswordGDTWriteSecondCharacterEEPROM = PasswordGDTWriteSecondCharacterEEPROM.replace("DB", secondcharacter.charCodeAt(0),null);
		PasswordGDTWriteThirdCharacterEEPROM = PasswordGDTWriteThirdCharacterEEPROM.replace("DB", thirdcharacter.charCodeAt(0),null);
		PasswordGDTWriteFourthCharacterEEPROM = PasswordGDTWriteFourthCharacterEEPROM.replace("DB", fourthcharacter.charCodeAt(0),null);
		PasswordGDTWriteFifthCharacterEEPROM = PasswordGDTWriteFifthCharacterEEPROM.replace("DB", fifthcharacter.charCodeAt(0),null);
		PasswordGDTWriteSixthCharacterEEPROM = PasswordGDTWriteSixthCharacterEEPROM.replace("DB", sixthcharacter.charCodeAt(0),null);
		PasswordGDTWriteSeventhCharacterEEPROM = PasswordGDTWriteSeventhCharacterEEPROM.replace("DB", sixthcharacter.charCodeAt(0),null);
		PasswordGDTWriteEigthCharacterEEPROM = PasswordGDTWriteEigthCharacterEEPROM.replace("DB", sixthcharacter.charCodeAt(0),null);


var input_string =PasswordGDTWriteFirstCharacterEEPROM+"\n"+PasswordGDTWriteSecondCharacterEEPROM+"\n"+PasswordGDTWriteThirdCharacterEEPROM+"\n"+PasswordGDTWriteFourthCharacterEEPROM+"\n"+PasswordGDTWriteFifthCharacterEEPROM+"\n"+PasswordGDTWriteSixthCharacterEEPROM+"\n"+PasswordGDTWriteSeventhCharacterEEPROM+"\n"+PasswordGDTWriteEigthCharacterEEPROM;
//alert(input_string);

	url = url+encodeURIComponent(input_string);
	url=url+"?sid="+Math.random();
	xmlHttp.onreadystatechange=GetThesecurityPassWordValidationResponseEEPROM;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}
else { alert("Password do not match or invalid password entered");}

		

}

function GetThesecurityPassWordValidationResponseEEPROM()
{
if(xmlHttp.readyState == 4){
		var space_split = xmlHttp.responseText.split(' ');
		alert('Password updated ');
		document.getElementById('forgotpasswordjavascript').style.display = 'none';
		document.getElementById('PasswordTabularShow').style.display = 'none';
		//alert(space_split);
xmlHttp=GetXmlHttpObject();
	var url = '/query?';
	var urlAgain = '/query?';
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
	document.location.reload(true);

}
}


function securityPassWordValidation()
{
xmlHttp=GetXmlHttpObject();
	var url = '/query?';
	var urlAgain = '/query?';
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
	



		var InputPasswordValue = document.getElementById('securityPasswordinput').value;

		if(InputPasswordValue == "")
	{
//alert("BLANK");
PasswordGDTWriteFirstCharacter = PasswordGDTWriteFirstCharacter.replace("DB", 20,null);
		PasswordGDTWriteSecondCharacter = PasswordGDTWriteSecondCharacter.replace("DB", 20,null);
		PasswordGDTWriteThirdCharacter = PasswordGDTWriteThirdCharacter.replace("DB", 20,null);
		PasswordGDTWriteFourthCharacter = PasswordGDTWriteFourthCharacter.replace("DB", 20,null);
		PasswordGDTWriteFifthCharacter = PasswordGDTWriteFifthCharacter.replace("DB", 20,null);
		PasswordGDTWriteSixthCharacter = PasswordGDTWriteSixthCharacter.replace("DB",20,null);
		PasswordGDTWriteSeventhCharacter = PasswordGDTWriteSeventhCharacter.replace("DB", 20,null);
		PasswordGDTWriteEigthCharacter = PasswordGDTWriteEigthCharacter.replace("DB", 20,null);
		//alert(PasswordGDTWriteEigthCharacter);
	}
	
else
	{
		var firstcharacter = InputPasswordValue.substring(0,1);
		var secondcharacter = InputPasswordValue.substring(1,2);
		var thirdcharacter = InputPasswordValue.substring(2,3);
		var fourthcharacter = InputPasswordValue.substring(3,4);
		var fifthcharacter = InputPasswordValue.substring(4,5);
		var sixthcharacter = InputPasswordValue.substring(5,6);
		var seventhcharacter = InputPasswordValue.substring(6,7);
		var eigthcharacter = InputPasswordValue.substring(7,8);

		//var countercharacter = DataloggerFileNameValue.substring(6,8).toLowerCase();

		PasswordGDTWriteFirstCharacter = PasswordGDTWriteFirstCharacter.replace("DB", firstcharacter.charCodeAt(0),null);
		PasswordGDTWriteSecondCharacter = PasswordGDTWriteSecondCharacter.replace("DB", secondcharacter.charCodeAt(0),null);
		PasswordGDTWriteThirdCharacter = PasswordGDTWriteThirdCharacter.replace("DB", thirdcharacter.charCodeAt(0),null);
		PasswordGDTWriteFourthCharacter = PasswordGDTWriteFourthCharacter.replace("DB", fourthcharacter.charCodeAt(0),null);
		PasswordGDTWriteFifthCharacter = PasswordGDTWriteFifthCharacter.replace("DB", fifthcharacter.charCodeAt(0),null);
		PasswordGDTWriteSixthCharacter = PasswordGDTWriteSixthCharacter.replace("DB", sixthcharacter.charCodeAt(0),null);
		PasswordGDTWriteSeventhCharacter = PasswordGDTWriteSeventhCharacter.replace("DB", sixthcharacter.charCodeAt(0),null);
		PasswordGDTWriteEigthCharacter = PasswordGDTWriteEigthCharacter.replace("DB", sixthcharacter.charCodeAt(0),null);
}

var input_string =PasswordGDTWriteFirstCharacter+"\n"+PasswordGDTWriteSecondCharacter+"\n"+PasswordGDTWriteThirdCharacter+"\n"+PasswordGDTWriteFourthCharacter+"\n"+PasswordGDTWriteFifthCharacter+"\n"+PasswordGDTWriteSixthCharacter+"\n"+PasswordGDTWriteSeventhCharacter+"\n"+PasswordGDTWriteEigthCharacter;
//alert(input_string);

	url = url+encodeURIComponent(input_string);
	url=url+"?sid="+Math.random();
	xmlHttp.onreadystatechange=GetThesecurityPassWordValidationResponse;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);

}

function GetThesecurityPassWordValidationResponse()
{
if(xmlHttp.readyState == 4){
		var space_split = xmlHttp.responseText.split(' ');
	//	alert(space_split);
xmlHttp=GetXmlHttpObject();
	var url = '/query?';
	var urlAgain = '/query?';
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
var input_string =CompareEEPROMRAMpassword;
//alert(input_string);

	url = url+encodeURIComponent(input_string);
	url=url+"?sid="+Math.random();
	xmlHttp.onreadystatechange=IsPasswordMatch;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);

}
}


function IsPasswordMatch()
{
if(xmlHttp.readyState == 4){
		var space_split = xmlHttp.responseText.split(' ');
		//alert(space_split[5]);

		var valueRead=space_split[5];
		if(valueRead == 1)
		{
document.getElementById('pfeatureupdate').disabled = false;
document.getElementById('passwordTable').style.display = 'none';

		}

		else

	{
	document.getElementById('pfeatureupdate').disabled = true;
//document.getElementById('pfeatureupdate').style.display = 'none';
	alert('Wrong Password . Enter the correct password');
	document.location.reload(true);
	}
		
}
}


function securityPassWordUpdateWithNew()
{

	
	var pass1 = document.getElementById("securityPasswordinputUpdateWithNew");
	var pass2 = document.getElementById("securityPasswordinputUpdateNew");
	var pass2 = document.getElementById("securityPasswordinputUpdateConfirm");

//var input_string = PasswordGDTReadFirstCharacter+"\n"+PasswordGDTReadSecondCharacter+"\n"+PasswordGDTReadThirdCharacter+"\n"+PasswordGDTReadFourthCharacter+"\n"+PasswordGDTReadFifthCharacter+"\n"+PasswordGDTReadSixthCharacter+"\n"+PasswordGDTReadSeventhCharacter+"\n"+PasswordGDTReadEigthCharacter;


xmlHttp=GetXmlHttpObject();
	var url = '/query?';
	var urlAgain = '/query?';
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
	

		var InputPasswordValue = document.getElementById('securityPasswordinputUpdateCurrent').value;
		var firstcharacter = InputPasswordValue.substring(0,1);
		var secondcharacter = InputPasswordValue.substring(1,2);
		var thirdcharacter = InputPasswordValue.substring(2,3);
		var fourthcharacter = InputPasswordValue.substring(3,4);
		var fifthcharacter = InputPasswordValue.substring(4,5);
		var sixthcharacter = InputPasswordValue.substring(5,6);
		var seventhcharacter = InputPasswordValue.substring(6,7);
		var eigthcharacter = InputPasswordValue.substring(7,8);

		//var countercharacter = DataloggerFileNameValue.substring(6,8).toLowerCase();

		PasswordGDTWriteFirstCharacter = PasswordGDTWriteFirstCharacter.replace("DB", firstcharacter.charCodeAt(0),null);
		PasswordGDTWriteSecondCharacter = PasswordGDTWriteSecondCharacter.replace("DB", secondcharacter.charCodeAt(0),null);
		PasswordGDTWriteThirdCharacter = PasswordGDTWriteThirdCharacter.replace("DB", thirdcharacter.charCodeAt(0),null);
		PasswordGDTWriteFourthCharacter = PasswordGDTWriteFourthCharacter.replace("DB", fourthcharacter.charCodeAt(0),null);
		PasswordGDTWriteFifthCharacter = PasswordGDTWriteFifthCharacter.replace("DB", fifthcharacter.charCodeAt(0),null);
		PasswordGDTWriteSixthCharacter = PasswordGDTWriteSixthCharacter.replace("DB", sixthcharacter.charCodeAt(0),null);
		PasswordGDTWriteSeventhCharacter = PasswordGDTWriteSeventhCharacter.replace("DB", sixthcharacter.charCodeAt(0),null);
		PasswordGDTWriteEigthCharacter = PasswordGDTWriteEigthCharacter.replace("DB", sixthcharacter.charCodeAt(0),null);


var input_string =PasswordGDTWriteFirstCharacter+"\n"+PasswordGDTWriteSecondCharacter+"\n"+PasswordGDTWriteThirdCharacter+"\n"+PasswordGDTWriteFourthCharacter+"\n"+PasswordGDTWriteFifthCharacter+"\n"+PasswordGDTWriteSixthCharacter+"\n"+PasswordGDTWriteSeventhCharacter+"\n"+PasswordGDTWriteEigthCharacter;
//alert(input_string);

	url = url+encodeURIComponent(input_string);
	url=url+"?sid="+Math.random();
	xmlHttp.onreadystatechange=VerifytheCurrentPasswordWithEnteredOne;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);



}

function VerifytheCurrentPasswordWithEnteredOne()
{
if(xmlHttp.readyState == 4){
		var space_split = xmlHttp.responseText.split(' ');
		//alert(space_split);
xmlHttp=GetXmlHttpObject();
	var url = '/query?';
	var urlAgain = '/query?';
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
var input_string =CompareEEPROMRAMpassword;
//alert(input_string);

	url = url+encodeURIComponent(input_string);
	url=url+"?sid="+Math.random();
	xmlHttp.onreadystatechange=IsPasswordMatchForCurrentEnteredPassword;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);

}
}


function IsPasswordMatchForCurrentEnteredPassword()
{
if(xmlHttp.readyState == 4){
		var space_split = xmlHttp.responseText.split(' ');
		//alert(space_split[5]);

		var valueRead=space_split[5];
		if(valueRead == 1)
		{
		GetTheEntryForNewPasswordAndUpdate();
//alert('whoa');
		}

		else

	{
alert('please enter correct Current password');
return;
	}
		
}
}



function GetTheEntryForNewPasswordAndUpdate()
{
xmlHttp=GetXmlHttpObject();
	var url = '/query?';
	var urlAgain = '/query?';
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
	
	var pass1 = document.getElementById("securityPasswordinputUpdateNeww");
	var pass2 = document.getElementById("securityPasswordinputUpdateConfirmm");


if(pass1.value==pass2.value && pass1.value!=null && pass2.value!=null && pass1.value!="" && pass2.value!="" ){
var InputPasswordValue = document.getElementById('securityPasswordinputUpdateNeww').value;
		var firstcharacterupdate = InputPasswordValue.substring(0,1);
		var secondcharacterupdate = InputPasswordValue.substring(1,2);
		var thirdcharacterupdate = InputPasswordValue.substring(2,3);
		var fourthcharacterupdate = InputPasswordValue.substring(3,4);
		var fifthcharacterupdate = InputPasswordValue.substring(4,5);
		var sixthcharacterupdate = InputPasswordValue.substring(5,6);
		var seventhcharacterupdate = InputPasswordValue.substring(6,7);
		var eigthcharacterupdate = InputPasswordValue.substring(7,8);

		//var countercharacter = DataloggerFileNameValue.substring(6,8).toLowerCase();

		PasswordGDTWriteFirstCharacterEEPROM = PasswordGDTWriteFirstCharacterEEPROM.replace("DB", firstcharacterupdate.charCodeAt(0),null);
		PasswordGDTWriteSecondCharacterEEPROM = PasswordGDTWriteSecondCharacterEEPROM.replace("DB", secondcharacterupdate.charCodeAt(0),null);
		PasswordGDTWriteThirdCharacterEEPROM = PasswordGDTWriteThirdCharacterEEPROM.replace("DB", thirdcharacterupdate.charCodeAt(0),null);
		PasswordGDTWriteFourthCharacterEEPROM = PasswordGDTWriteFourthCharacterEEPROM.replace("DB", fourthcharacterupdate.charCodeAt(0),null);
		PasswordGDTWriteFifthCharacterEEPROM = PasswordGDTWriteFifthCharacterEEPROM.replace("DB", fifthcharacterupdate.charCodeAt(0),null);
		PasswordGDTWriteSixthCharacterEEPROM = PasswordGDTWriteSixthCharacterEEPROM.replace("DB", sixthcharacterupdate.charCodeAt(0),null);
		PasswordGDTWriteSeventhCharacterEEPROM = PasswordGDTWriteSeventhCharacterEEPROM.replace("DB", sixthcharacterupdate.charCodeAt(0),null);
		PasswordGDTWriteEigthCharacterEEPROM = PasswordGDTWriteEigthCharacterEEPROM.replace("DB", sixthcharacterupdate.charCodeAt(0),null);


var input_string =PasswordGDTWriteFirstCharacterEEPROM+"\n"+PasswordGDTWriteSecondCharacterEEPROM+"\n"+PasswordGDTWriteThirdCharacterEEPROM+"\n"+PasswordGDTWriteFourthCharacterEEPROM+"\n"+PasswordGDTWriteFifthCharacterEEPROM+"\n"+PasswordGDTWriteSixthCharacterEEPROM+"\n"+PasswordGDTWriteSeventhCharacterEEPROM+"\n"+PasswordGDTWriteEigthCharacterEEPROM;
//alert(PasswordGDTWriteEigthCharacterEEPROM);

	url = url+encodeURIComponent(input_string);
	url=url+"?sid="+Math.random();
	xmlHttp.onreadystatechange=GetThesecurityPassWordValidationResponseEEPROMForUpdate;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}
else { alert("Password do not match or invalid password entered");}

		

}

function GetThesecurityPassWordValidationResponseEEPROMForUpdate()
{
if(xmlHttp.readyState == 4){
		var space_split = xmlHttp.responseText.split(' ');
		alert('Password updated');
		document.getElementById('forgotpasswordjavascript').style.display = 'none';
		document.getElementById('PasswordTabularShow').style.display = 'none';
		document.getElementById('PasswordTabularShowForUpdateNew').style.display = 'none';


		//alert(space_split);
xmlHttp=GetXmlHttpObject();
	var url = '/query?';
	var urlAgain = '/query?';
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}

	document.location.reload(true);

}
}



function getRTCParameter(){
	xmlHttp=GetXmlHttpObject();
	var url = '/query?';
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
	var input_string = RTCClockRead;
	url = url+encodeURIComponent(input_string);
	url=url+"?sid="+Math.random();
	xmlHttp.onreadystatechange=LoadRTC;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null)
}

function LoadRTC(){
	if(xmlHttp.readyState == 4){
		var spaceSplit = xmlHttp.responseText.split(' ');
		var MonthtoDisplay = parseInt(spaceSplit['8'],10);		
		var RTCString = DayOfWeek[parseInt(spaceSplit['6'])]+" "+spaceSplit['7']+" "+MonthArray[MonthtoDisplay]+" 20"+spaceSplit['9']+"  "+spaceSplit['3']+":"+spaceSplit['4']+":"+spaceSplit['5'];
		document.getElementById('realtimeclock').innerHTML = RTCString;
		document.getElementById('systemRTC').innerHTML = '&nbsp;<input type="checkbox" name="rtcset" id="setSystemRTC" value="" onclick="changeDisplay();">&nbsp;Set System Clock';
		if(document.getElementById('statusDisplay').innerHTML != 'Running Service Test'){
			document.getElementById('statusDisplay').innerHTML = '';
		}
		//document.getElementById('pfeatureupdate').disabled = false;
	}
}

function changeDisplay(){
	if(document.getElementById('setSystemRTC').checked){
		document.getElementById('realtimeclock').style.textDecoration = 'line-through';
	} else {
		document.getElementById('realtimeclock').style.textDecoration = 'none';
	}
}

function updateProgrammableSetup(){
	xmlHttp=GetXmlHttpObject();
	var url = '/query?';
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
	document.getElementById('pfeatureupdate').disabled = true;


	tempPasswordRequiredOrNotWrite  = PasswordRequiredOrNotWrite;

	tempvarMinimumChargeDurationWrite = MinimumChargeDurationWrite;

	tempCommandTemperatureUnitWrite = CommandTemperatureUnitWrite;
	tempCommandSwitchToMonitorWrite = CommandSwitchToMonitorWrite;
	tempChargeCurrentShutoffValueWrite = ChargeCurrentShutoffValueWrite;
	tempEngineDelayTimerWrite = EngineDelayTimerWrite;
	tempDLLoggingIntervalWrite = DLLoggingIntervalWrite;
	tempHMIBrightnessWrite = HMIBrightnessWrite;
	tempRunTimePeriodWrite = RunTimePeriodWrite;
	tempCommandHysterisisOnCoolingWrite = CommandHysterisisOnCoolingWrite;
	tempBatteryVoltageRestartValveWrite = BatteryVoltageRestartValveWrite;
	tempLowTempLimitCoolWrite = LowTempLimitCoolWrite;
	tempHighTempLimitCoolWrite = HighTempLimitCoolWrite;
	tempLowTempLimitHeatWrite = LowTempLimitHeatWrite;
	tempHighTempLimitHeatWrite = HighTempLimitHeatWrite;
	

var MinimumChargeDuration = splitValueIntoBytes(parseInt(document.getElementById('DLChargeDuration').value,10).toString(16));
	tempvarMinimumChargeDurationWrite = tempvarMinimumChargeDurationWrite.replace('FB', MinimumChargeDuration.HB); // umesh

	if(document.getElementById('tempYes').checked){
		tempCommandTemperatureUnitWrite = tempCommandTemperatureUnitWrite.replace('FB', '01');
		
		var LowTempLimitCool = splitValueIntoBytes((Math.round(((document.getElementById('lowtemplimitcool').value)-32)*(5/9)*32)).toString(16));
		tempLowTempLimitCoolWrite = tempLowTempLimitCoolWrite.replace('FB', LowTempLimitCool.HB);
		tempLowTempLimitCoolWrite = tempLowTempLimitCoolWrite.replace('LB', LowTempLimitCool.LB);
		
		var HighTempLimitCool = splitValueIntoBytes((Math.round(((document.getElementById('hightemplimitcool').value)-32)*(5/9)*32)).toString(16));
		tempHighTempLimitCoolWrite = tempHighTempLimitCoolWrite.replace('FB', HighTempLimitCool.HB);
		tempHighTempLimitCoolWrite = tempHighTempLimitCoolWrite.replace('LB', HighTempLimitCool.LB);
		
		var LowTempLimitHeat = splitValueIntoBytes((Math.round(((document.getElementById('lowtemplimitheat').value)-32)*(5/9)*32)).toString(16));
		tempLowTempLimitHeatWrite = tempLowTempLimitHeatWrite.replace('FB', LowTempLimitHeat.HB);
		tempLowTempLimitHeatWrite = tempLowTempLimitHeatWrite.replace('LB', LowTempLimitHeat.LB);
		
		var HighTempLimitHeat = splitValueIntoBytes((Math.round(((document.getElementById('hightemplimitheat').value)-32)*(5/9)*32)).toString(16));
		tempHighTempLimitHeatWrite = tempHighTempLimitHeatWrite.replace('FB', HighTempLimitHeat.HB);
		tempHighTempLimitHeatWrite = tempHighTempLimitHeatWrite.replace('LB', HighTempLimitHeat.LB);
	} else {
		tempCommandTemperatureUnitWrite = tempCommandTemperatureUnitWrite.replace('FB', '00');
				
		var LowTempLimitCool = splitValueIntoBytes((parseInt(document.getElementById('lowtemplimitcool').value,10)*32).toString(16));
		tempLowTempLimitCoolWrite = tempLowTempLimitCoolWrite.replace('FB', LowTempLimitCool.HB);
		tempLowTempLimitCoolWrite = tempLowTempLimitCoolWrite.replace('LB', LowTempLimitCool.LB);
		
		var HighTempLimitCool = splitValueIntoBytes((parseInt(document.getElementById('hightemplimitcool').value,10)*32).toString(16));
		tempHighTempLimitCoolWrite = tempHighTempLimitCoolWrite.replace('FB', HighTempLimitCool.HB);
		tempHighTempLimitCoolWrite = tempHighTempLimitCoolWrite.replace('LB', HighTempLimitCool.LB);
		
		var LowTempLimitHeat = splitValueIntoBytes((parseInt(document.getElementById('lowtemplimitheat').value)*32).toString(16));
		tempLowTempLimitHeatWrite = tempLowTempLimitHeatWrite.replace('FB', LowTempLimitHeat.HB);
		tempLowTempLimitHeatWrite = tempLowTempLimitHeatWrite.replace('LB', LowTempLimitHeat.LB);
		
		var HighTempLimitHeat = splitValueIntoBytes((parseInt(document.getElementById('hightemplimitheat').value)*32).toString(16));
		tempHighTempLimitHeatWrite = tempHighTempLimitHeatWrite.replace('FB', HighTempLimitHeat.HB);
		tempHighTempLimitHeatWrite = tempHighTempLimitHeatWrite.replace('LB', HighTempLimitHeat.LB);
	}
	if(document.getElementById('switchtoMonitorYes').checked){
		tempCommandSwitchToMonitorWrite = tempCommandSwitchToMonitorWrite.replace('FB', '01');
	} else {
		tempCommandSwitchToMonitorWrite = tempCommandSwitchToMonitorWrite.replace('FB', '00');
	}


if(document.getElementById('PasswordProtectionYes').checked){
		tempPasswordRequiredOrNotWrite = tempPasswordRequiredOrNotWrite.replace('FB', '01');
	} else {
		tempPasswordRequiredOrNotWrite = tempPasswordRequiredOrNotWrite.replace('FB', '00');
	}

	//tempACClutchDelayTimerWrite = tempACClutchDelayTimerWrite.replace('FB', document.getElementById('ACclutchTimer').value);
	var ChargeCurrentShutoffValue = splitValueIntoBytes((document.getElementById('ChargeCurrentShutoffValue').value*100).toString(16));
	tempChargeCurrentShutoffValueWrite = tempChargeCurrentShutoffValueWrite.replace('LB', ChargeCurrentShutoffValue.LB);
	tempChargeCurrentShutoffValueWrite = tempChargeCurrentShutoffValueWrite.replace('FB', ChargeCurrentShutoffValue.HB);
	
	var EngineDelayTimer = splitValueIntoBytes(parseInt(document.getElementById('EngineDelay').value,10).toString(16));
	tempEngineDelayTimerWrite = tempEngineDelayTimerWrite.replace('FB', EngineDelayTimer.HB);



	
	var DLLoggingInterval = splitValueIntoBytes(parseInt(document.getElementById('DLLogInterval').value,10).toString(16));
	tempDLLoggingIntervalWrite = tempDLLoggingIntervalWrite.replace('FB', DLLoggingInterval.HB);
	
	var HMIBrightness = splitValueIntoBytes(parseInt(document.getElementById('HMIBrightness').value,10).toString(16));
	tempHMIBrightnessWrite = tempHMIBrightnessWrite.replace('FB', HMIBrightness.HB);

	var RunTimePeriod = splitValueIntoBytes(parseInt(document.getElementById('RunTimePeriod').value,10).toString(16));
	tempRunTimePeriodWrite = tempRunTimePeriodWrite.replace('FB', RunTimePeriod.HB);
	
	var CollingDeadBand = splitValueIntoBytes((Math.round(document.getElementById('CoolingHysterisis').value).toString(16)));
	tempCommandHysterisisOnCoolingWrite = tempCommandHysterisisOnCoolingWrite.replace('FB',CollingDeadBand.HB);
		
	var BatteryVoltageRestart = splitValueIntoBytes((document.getElementById('BatteryVoltage').value*1000).toString(16));
	tempBatteryVoltageRestartValveWrite = tempBatteryVoltageRestartValveWrite.replace('LB',BatteryVoltageRestart.LB);
	tempBatteryVoltageRestartValveWrite = tempBatteryVoltageRestartValveWrite.replace('FB',BatteryVoltageRestart.HB);
	
	
	var input_string = tempCommandTemperatureUnitWrite+"\n"+tempCommandSwitchToMonitorWrite+"\n"+tempChargeCurrentShutoffValueWrite+"\n"+tempEngineDelayTimerWrite+"\n"+tempDLLoggingIntervalWrite+"\n"+tempHMIBrightnessWrite+"\n"+tempRunTimePeriodWrite+"\n"+tempCommandHysterisisOnCoolingWrite+"\n"+tempBatteryVoltageRestartValveWrite+"\n"+tempLowTempLimitCoolWrite+"\n"+tempHighTempLimitCoolWrite+"\n"+tempLowTempLimitHeatWrite+"\n"+tempHighTempLimitHeatWrite+"\n"+tempPasswordRequiredOrNotWrite+"\n"+tempvarMinimumChargeDurationWrite;

	if(document.getElementById('setSystemRTC').checked){
		UpdateRTCFlag = true;
	}
	url = url+encodeURIComponent(input_string);
	url=url+"?sid="+Math.random();
	xmlHttp.onreadystatechange=updateProgFeatures;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null)
}

function updateProgFeatures(){
	if(xmlHttp.readyState == 4){
		document.getElementById('pfeatureupdate').disabled = false;
		if(UpdateRTCFlag){
			UpadteRTC();
		} else {
			var alertConfirm = alert('Settings Updated To Controller, TKMonitor Will Initiate WARM RESTART Now');
			restart();
		}
	}
}

function splitValueIntoBytes(value){
	var HighByte = '';
	var LowByte = '';
	
	if(value.length > 2 && value.length == 4){
		HighByte = value.substr(0,2);
		LowByte = value.substr(2,4);
		if(LowByte.length < 2){
			LowByte = AppendZero(LowByte);
		}
	} else if(value.length == 3){
		HighByte = AppendZero(value.substr(0,1));
		LowByte = value.substr(1,3);
	} else {
		LowByte = value.substr(0,2);
		HighByte = "00";
		if(value.length != 2){
			if(value.length == 1){
				LowByte = "0"+value;
			}
		}		
	}
	return {HB:LowByte, LB:HighByte} // stupid stuff, I've revered them :) because datapac command is that way
}

function getSystemRTC(){
	var tempRTCClockWrite = RTCClockWrite;
	var dateFunction = new Date();//HH MM SS DW DM MM YY
	var hourString = dateFunction.getHours().toString();
	hourString = AppendZero(hourString);
	var minuteString = dateFunction.getMinutes().toString();
	minuteString = AppendZero(minuteString);
	var secondsString = dateFunction.getSeconds().toString();;
	secondsString = AppendZero(secondsString);
	var dayofweek = dateFunction.getDay()+1;
	dayofweek = AppendZero(dayofweek.toString());
	var dateString = dateFunction.getDate().toString();
	dateString = AppendZero(dateString);
	var monthString = dateFunction.getMonth().toString();
	monthString = parseInt(monthString)+1;
	if(monthString < 10){
		monthString = "0"+monthString;
	}
	var YearString = dateFunction.getFullYear().toString();
	YearString = YearString.substr(2,4);
	tempRTCClockWrite = tempRTCClockWrite.replace('HH',hourString);	
	tempRTCClockWrite = tempRTCClockWrite.replace('MM',minuteString);
	tempRTCClockWrite = tempRTCClockWrite.replace('SS',secondsString);
	tempRTCClockWrite = tempRTCClockWrite.replace('DW',dayofweek);
	tempRTCClockWrite = tempRTCClockWrite.replace('DM',dateString);
	tempRTCClockWrite = tempRTCClockWrite.replace('MM',monthString);
	tempRTCClockWrite = tempRTCClockWrite.replace('YY',YearString);
	return tempRTCClockWrite;
}

function tempsettingsradio(){
	if(document.getElementById('tempNo').checked == false && document.getElementById('tempsettinghidden').value == 'F'){
		return false;
	} else if(document.getElementById('tempYes').checked == false && document.getElementById('tempsettinghidden').value == 'C'){
		return false;
	}
	var currentlowtempcool = Math.round(document.getElementById('lowtemplimitcool').value);
	var currenthightempcool = Math.round(document.getElementById('hightemplimitcool').value);
	var currentlowtempheat = Math.round(document.getElementById('lowtemplimitheat').value);
	var currenthightempheat = Math.round(document.getElementById('hightemplimitheat').value);
	var currentDeadBand = document.getElementById('CoolingHysterisis').value;
	
	if(document.getElementById('tempNo').checked){
		//need to change from F to C
		document.getElementById('CoolingHysterisis').value = Math.round(currentDeadBand/1.8);
		document.getElementById('lowtemplimitcool').value = Math.round((currentlowtempcool-32)*(5/9));
		document.getElementById('hightemplimitcool').value = Math.round((currenthightempcool-32)*(5/9));
		document.getElementById('lowtemplimitheat').value = Math.round((currentlowtempheat-32)*(5/9));
		document.getElementById('hightemplimitheat').value =  Math.round((currenthightempheat-32)*(5/9));
		
		document.getElementById('coolingdeadbandSpan').innerHTML = 'C';
		document.getElementById('lowtemplimitcoolSpan').innerHTML = 'C';
		document.getElementById('hightemplimitcoolSpan').innerHTML = 'C';
		document.getElementById('lowtemplimitheatSpan').innerHTML = 'C';
		document.getElementById('hightemplimitheatSpan').innerHTML = 'C';
		document.getElementById('tempsettinghidden').value = 'C';
	} else {
		// need to change from C to F
		document.getElementById('CoolingHysterisis').value = Math.floor(currentDeadBand*1.8);
		document.getElementById('lowtemplimitcool').value = Math.round((currentlowtempcool*1.8)+32);
		document.getElementById('hightemplimitcool').value = Math.round((currenthightempcool*1.8)+32);
		document.getElementById('lowtemplimitheat').value = Math.round((currentlowtempheat*1.8)+32);
		document.getElementById('hightemplimitheat').value = Math.round((currenthightempheat*1.8)+32);
		
		document.getElementById('coolingdeadbandSpan').innerHTML = 'F';
		document.getElementById('lowtemplimitcoolSpan').innerHTML = 'F';
		document.getElementById('hightemplimitcoolSpan').innerHTML = 'F';
		document.getElementById('lowtemplimitheatSpan').innerHTML = 'F';
		document.getElementById('hightemplimitheatSpan').innerHTML = 'F';
		document.getElementById('tempsettinghidden').value = 'F';
	}
}
function UpadteRTC(){
	xmlHttpRTC=GetXmlHttpObject();
	var url = '/query?';
	if (xmlHttpRTC==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
	input_string = getSystemRTC();
	url = url+encodeURIComponent(input_string);
	url=url+"?sid="+Math.random();
	xmlHttpRTC.onreadystatechange=updatePorgFeaturesRTC;
	xmlHttpRTC.open("GET",url,true);
	xmlHttpRTC.send(null)
}

function updatePorgFeaturesRTC(){
	if(xmlHttpRTC.readyState == 4){
		alert('Settings Updated To Controller, TKMonitor Will Initiate WARM RESTART Now');
		restart();
	}
}

function getConvertedValue(to,value){
	var resultDeadBand = '';
	if(to == 'F'){
		resultDeadBand = Math.round((9/5)*parseInt(value,16));
	} else if(to == 'C') {
		resultDeadBand = Math.round((5/9)*parseInt(value,16));
	}
	if(resultDeadBand > 10){
		resultDeadBand = 10;
	}
	return resultDeadBand;
}

function ChangeChargeCurrentShutoffValue(inputImage){
	var MaxLimitValue = 50;
	var MinLimitValue = 1;
	var Step = 0.5;
	var currentValue = parseFloat(document.getElementById('ChargeCurrentShutoffValue').value,10);
	if(inputImage == 'up'){
		if(currentValue < MaxLimitValue){
			document.getElementById('ChargeCurrentShutoffValue').value = currentValue + Step;
		}
	} else {
		if(currentValue > MinLimitValue){
			document.getElementById('ChargeCurrentShutoffValue').value = currentValue - Step;
		}
	}
}

function ChangeEngineDelay(inputImage){
	var MaxLimitValue = 15;
	var MinLimitValue = 0;
	var Step = 1;
	var currentValue = parseFloat(document.getElementById('EngineDelay').value,10);
	if(inputImage == 'up'){
		if(currentValue < MaxLimitValue){
			document.getElementById('EngineDelay').value = currentValue + Step;
		}
	} else {
		if(currentValue > MinLimitValue){
			document.getElementById('EngineDelay').value = currentValue - Step;
		}
	}
}

function ChangeDLLogInterval(inputImage){
	var MaxLimitValue = 15;
	var MinLimitValue = 1;
	var Step = 1;
	var currentValue = parseInt(document.getElementById('DLLogInterval').value,10);
	if(inputImage == 'up'){
		if(currentValue < MaxLimitValue){
			document.getElementById('DLLogInterval').value = currentValue + Step;
		}
	} else {
		if(currentValue > MinLimitValue){
			document.getElementById('DLLogInterval').value = currentValue - Step;
		}
	}
}

function ChangeDLChargeDuration(inputImage){
	var MaxLimitValue = 60;
	var MinLimitValue = 0;
	var Step = 1;
	var currentValue = parseInt(document.getElementById('DLChargeDuration').value,10);
	if(inputImage == 'up'){
		if(currentValue < MaxLimitValue){
			document.getElementById('DLChargeDuration').value = currentValue + Step;
		}
	} else {
		if(currentValue > MinLimitValue){
			document.getElementById('DLChargeDuration').value = currentValue - Step;
		}
	}
}





function ChangeHMIBrightness(inputImage){
	var MaxLimitValue = 10;
	var MinLimitValue = 1;
	var Step = 1;
	var currentValue = parseInt(document.getElementById('HMIBrightness').value,10);
	if(inputImage == 'up'){
		if(currentValue < MaxLimitValue){
			document.getElementById('HMIBrightness').value = currentValue + Step;
		}
	} else {
		if(currentValue > MinLimitValue){
			document.getElementById('HMIBrightness').value = currentValue - Step;
		}
	}
}

function ChangeRunTimePeriod(inputImage){
	var MaxLimitValue = 16;
	var MinLimitValue = 0;
	var Step = 1;
	var currentValue = parseInt(document.getElementById('RunTimePeriod').value,10);
	if(currentValue == 0){
		Step = 8;
	} 
	if(inputImage == 'up'){
		if(currentValue < MaxLimitValue){
			document.getElementById('RunTimePeriod').value = currentValue + Step;
		}
	} else {
		if(currentValue == 8){
			Step = 8;
		}
		if(currentValue > MinLimitValue){
			document.getElementById('RunTimePeriod').value = currentValue - Step;
		}
	}
}

function ChangeBatteryVoltage(inputImage){
	var MaxLimitValue = 13.0;
	var MinLimitValue = 11.4;
	var Step = 0.1;
	var currentValue = parseFloat(document.getElementById('BatteryVoltage').value,10);
	if(inputImage == 'up'){
		if(currentValue < MaxLimitValue){
			document.getElementById('BatteryVoltage').value = Math.round((currentValue + Step)*10)/10;
		}
	} else {
		if(currentValue > MinLimitValue){
			document.getElementById('BatteryVoltage').value = Math.round((currentValue - Step)*10)/10;
		}
	}
}

function ChangeCoolingHysterisis(inputImage){
	if(document.getElementById('tempYes').checked){//in F
		var MaxLimitValue = 10;
		var MinLimitValue = 1;
		var Step = 1;
	} else { // in C
		var MaxLimitValue = 6;
		var MinLimitValue = 1;
		var Step = 1;
	}
	var currentValue = parseInt(document.getElementById('CoolingHysterisis').value,10);
	if(inputImage == 'up'){
		if(currentValue < MaxLimitValue){
			document.getElementById('CoolingHysterisis').value = currentValue + Step;
		}
	} else {
		if(currentValue > MinLimitValue){
			document.getElementById('CoolingHysterisis').value = currentValue - Step;
		}
	}
}

function Changelowtemplimitcool(inputImage){
	if(document.getElementById('tempYes').checked){//in F
		var MaxLimitValue = 90;
		var MinLimitValue = 50;
		var Step = 1;
	} else { // in C
		var MaxLimitValue = 32;
		var MinLimitValue = 10;
		var Step = 1;
	}
	var currentValue = parseInt(document.getElementById('lowtemplimitcool').value,10);
	if(inputImage == 'up'){
		if(currentValue < MaxLimitValue){
			document.getElementById('lowtemplimitcool').value = currentValue + Step;
		}
	} else {
		if(currentValue > MinLimitValue){
			document.getElementById('lowtemplimitcool').value = currentValue - Step;
		}
	}
}

function Changehightemplimitcool(inputImage){
	if(document.getElementById('tempYes').checked){//in F
		var MaxLimitValue = 90;
		var MinLimitValue = 50;
		var Step = 1;
	} else { // in C
		var MaxLimitValue = 32;
		var MinLimitValue = 10;
		var Step = 1;
	}
	var currentValue = parseInt(document.getElementById('hightemplimitcool').value,10);
	if(inputImage == 'up'){
		if(currentValue < MaxLimitValue){
			document.getElementById('hightemplimitcool').value = currentValue + Step;
		}
	} else {
		if(currentValue > MinLimitValue){
			document.getElementById('hightemplimitcool').value = currentValue - Step;
		}
	}
}

function Changelowtemplimitheat(inputImage){
	if(document.getElementById('tempYes').checked){//in F
		var MaxLimitValue = 90;
		var MinLimitValue = 50;
		var Step = 1;
	} else { // in C
		var MaxLimitValue = 32;
		var MinLimitValue = 10;
		var Step = 1;
	}
	var currentValue = parseInt(document.getElementById('lowtemplimitheat').value,10);
	if(inputImage == 'up'){
		if(currentValue < MaxLimitValue){
			document.getElementById('lowtemplimitheat').value = currentValue + Step;
		}
	} else {
		if(currentValue > MinLimitValue){
			document.getElementById('lowtemplimitheat').value = currentValue - Step;
		}
	}
}

function Changehightemplimitheat(inputImage){
	if(document.getElementById('tempYes').checked){//in F
		var MaxLimitValue = 90;
		var MinLimitValue = 50;
		var Step = 1;
	} else { // in C
		var MaxLimitValue = 32;
		var MinLimitValue = 10;
		var Step = 1;
	}
	var currentValue = parseInt(document.getElementById('hightemplimitheat').value,10);
	if(inputImage == 'up'){
		if(currentValue < MaxLimitValue){
			document.getElementById('hightemplimitheat').value = currentValue + Step;
		}
	} else {
		if(currentValue > MinLimitValue){
			document.getElementById('hightemplimitheat').value = currentValue - Step;
		}
	}
}
