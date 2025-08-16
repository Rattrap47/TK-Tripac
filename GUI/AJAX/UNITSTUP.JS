/* Unit Setup Commands */
var EngineCoolingSystem = '16 16 36 70 60 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var AlternatorCapacity = '16 16 36 71 21 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var UnitSerialNumberFirstCharacter = '16 16 36 80 08 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var UnitSerialNumberSecondCharacter = '16 16 36 80 09 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var UnitSerialNumberThirdCharacter = '16 16 36 80 0a 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var UnitSerialNumberFourthCharacter = '16 16 36 80 0b 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var UnitSerialNumberFifthCharacter = '16 16 36 80 0c 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var UnitSerialNumberSixthCharacter = '16 16 36 80 0d 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var UnitSerialNumberSeventhCharacter = '16 16 36 80 0e 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var UnitSerialNumberEighthCharacter = '16 16 36 80 0f 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';


var WriteUnitSerialNumberFirstCharacter = '16 16 36 80 08 B2 B1 00 00 00 00 00 00 00 00 00 00 a6 44';
var WriteUnitSerialNumberSecondCharacter = '16 16 36 80 09 B2 B1 00 00 00 00 00 00 00 00 00 00 a6 44';
var WriteUnitSerialNumberThirdCharacter = '16 16 36 80 0a B2 B1 00 00 00 00 00 00 00 00 00 00 a6 44';
var WriteUnitSerialNumberFourthCharacter = '16 16 36 80 0b B2 B1 00 00 00 00 00 00 00 00 00 00 a6 44';
var WriteUnitSerialNumberFifthCharacter = '16 16 36 80 0c B2 B1 00 00 00 00 00 00 00 00 00 00 a6 44';
var WriteUnitSerialNumberSixthCharacter = '16 16 36 80 0d 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var WriteUnitSerialNumberSeventhCharacter = '16 16 36 80 0e 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var WriteUnitSerialNumberEighthCharacter = '16 16 36 80 0f 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';


var CommandAlternatorCapacityWrite = '16 16 36 71 21 DB 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var CommandAmbientSensorConnectedYesWrite = '16 16 36 70 62 01 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var CommandAmbientSensorConnectedNoWrite= '16 16 36 70 62 00 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var CommandEngineCoolingSystemWrite = '16 16 36 70 60 DB 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var WriteDataloggerFileNameFirstCharacter = '16 16 36 13 45 DB 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var WriteDataloggerFileNameSecondCharacter = '16 16 36 13 46 DB 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var WriteDataloggerFileNameThirdCharacter = '16 16 36 13 47 DB 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var WriteDataloggerFileNameFourthCharacter = '16 16 36 13 48 DB 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var WriteDataloggerFileNameFifthCharacter = '16 16 36 13 49 DB 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var WriteDataloggerFileNameSixthCharacter = '16 16 36 13 4A DB 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var WriteDataloggerFileNameCounter = '16 16 36 13 4B DB 00 00 00 00 00 00 00 00 01 00 00 a6 44';
/* Unit Setup Commands */

/* Hour Meter Block Commands */
var CommandEngineHoursLow = '16 16 36 06 28 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandEngineHoursHgh = '16 16 36 06 A8 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandTotalCoolHoursLow = '16 16 36 06 20 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandTotalCoolHoursHgh = '16 16 36 06 A0 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandTotalHeatHoursLow = '16 16 36 06 22 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandTotalHeatHoursHgh = '16 16 36 06 A2 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandTotalFanHoursLow = '16 16 36 06 A3 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandTotalFanHoursHgh = '16 16 36 06 A4 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandEngineHoursDecimal = '16 16 36 FF 15 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandTotalCoolHoursDecimal = '16 16 36 FF 11 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandTotalHeatHoursDecimal = '16 16 36 FF 13 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandHourMeterUpdateFlag = '16 16 36 FF 20 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var hourmeterFlag = true;
var CommandEngineHoursLowWrite = '16 16 36 FF 3D B2 B1 00 00 00 00 00 00 00 01 00 00 a6 44';//ff 1D
var CommandEngineHoursHghWrite = '16 16 36 FF 3C B2 B1 00 00 00 00 00 00 00 01 00 00 a6 44';//ff 1C
var CommandTotalCoolHoursLowWrite = '16 16 36 FF 39 B2 B1 00 00 00 00 00 00 01 00 00 00 a6 44';//ff 18
var CommandTotalCoolHoursHghWrite = '16 16 36 FF 38 B2 B1 00 00 00 00 00 00 01 00 00 00 a6 44';//ff 19
var CommandTotalHeatHoursLowWrite = '16 16 36 FF 3B B2 B1 00 00 00 00 00 00 01 00 00 00 a6 44';//FF 1B
var CommandTotalHeatHoursHghWrite = '16 16 36 FF 3A B2 B1 00 00 00 00 00 00 01 00 00 00 a6 44';//FF 1A
var CommandEngineHoursDecimalWrite = '16 16 36 FF 35 B1 00 00 00 00 00 00 00 01 00 00 00 a6 44';
var CommandTotalCoolHoursDecimalWrite = '16 16 36 FF 31 B1 00 00 00 00 00 00 00 01 00 00 00 a6 44';
var CommandTotalHeatHoursDecimalWrite = '16 16 36 FF 33 B1 00 00 00 00 00 00 00 01 00 00 00 a6 44';
var CommandHourMeterUpdateFlagWrite = '16 16 36 FF 20 01 00 00 00 00 00 00 00 00 01 00 00 a6 44';



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


/* Hour Meter Block Commands */

/* hourmeter data */
var TempEngineHours = '';
var TempCoolHours = '';
var TempHeatHours = '';
var TempEngineDecimalHours = '';
var TempCoolDecimalHours = '';
var TempHeatDecimalHours = '';
/* hourmeter data */

function getUnitSetup(){
	xmlHttp=GetXmlHttpObject();
	var url = '/query?';
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}	
	var input_string = EngineCoolingSystem+"\n"+AlternatorCapacity+"\n"+ReadDataloggerFileNameFirstCharacter+"\n"+ReadDataloggerFileNameSecondCharacter+"\n"+ReadDataloggerFileNameThirdCharacter+"\n"+ReadDataloggerFileNameFourthCharacter+"\n"+ReadDataloggerFileNameFifthCharacter+"\n"+ReadDataloggerFileNameSixthCharacter+"\n"+ReadDataloggerFileNameCounter+"\n"+UnitSerialNumberFirstCharacter+"\n"+UnitSerialNumberSecondCharacter+"\n"+UnitSerialNumberThirdCharacter+"\n"+UnitSerialNumberFourthCharacter+"\n"+UnitSerialNumberFifthCharacter+"\n"+UnitSerialNumberSixthCharacter+"\n"+UnitSerialNumberSeventhCharacter+"\n"+UnitSerialNumberEighthCharacter+"\n"+CommandEngineHoursLow+"\n"+CommandEngineHoursHgh+"\n"+CommandTotalCoolHoursLow+"\n"+CommandTotalCoolHoursHgh+"\n"+CommandTotalHeatHoursLow+"\n"+CommandTotalHeatHoursHgh+"\n"+CommandTotalHeatHoursDecimal+"\n"+CommandEngineHoursDecimal+'\n'+CommandTotalCoolHoursDecimal+"\n"+CommandHourMeterUpdateFlag+"\n"+PasswordRequiredOrNot;
	input_string = input_string + "\n" + PasswordGDTReadFirstCharacter+"\n"+PasswordGDTReadSecondCharacter+"\n"+PasswordGDTReadThirdCharacter+"\n"+PasswordGDTReadFourthCharacter+"\n"+PasswordGDTReadFifthCharacter+"\n"+PasswordGDTReadSixthCharacter+"\n"+PasswordGDTReadSeventhCharacter+"\n"+PasswordGDTReadEigthCharacter;
	url = url+encodeURIComponent(input_string);
	url=url+"?sid="+Math.random();
	xmlHttp.onreadystatechange=LoadUnitSetup;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}

function LoadUnitSetup(){
	if(xmlHttp.readyState == 4){
		var valuesArray = ConvertHextoDecimal(xmlHttp.responseText);
		var line_split = xmlHttp.responseText.split('\n');

//alert(valuesArray[27]);

		if(valuesArray[27] == 1)
		{
		document.getElementById('update').disabled = true;
document.getElementById('passwordBox').style.display = 'inline';
document.getElementById('forgotpasswordjavascriptNew').style.display = 'inline';
		}

		else

		{
		document.getElementById('passwordBox').style.display = 'none';
		document.getElementById('forgotpasswordjavascriptNew').style.display = 'none';
		document.getElementById('update').disabled = false;
		}


		if(parseInt(valuesArray[1]) == 3){
			var alternatorSelect = '<select id="alternator" style="width:155px;"><option value="3" selected>65 Amps</option><option value="2">120 Amps</option></select>';
		} else if(parseInt(valuesArray[1]) == 2){
			var alternatorSelect = '<select id="alternator" style="width:155px;"><option value="3">65 Amps</option><option value="2" selected>120 Amps</option></select>';
		} else {
			var alternatorSelect = '<select id="alternator" style="width:155px;"><option value="3">65 Amps</option><option value="2">120 Amps</option><option value="0" selected>SELECT</option></select>';
		}
		if(parseInt(valuesArray[0]) == 0){
			var CoolingSelect = '<select id="coolingOption" style="width:155px;"><option value="0" selected>Standard</option><option value="2">Standard+Arctic</option><option value="1">Closed Loop</option></select>';
		} else if(parseInt(valuesArray[0]) == 1){
			var CoolingSelect = '<select id="coolingOption" style="width:155px;"><option value="0">Standard</option><option value="2">Standard+Arctic</option><option value="1" selected>Closed Loop</option></select>';
		} else {
			var CoolingSelect = '<select id="coolingOption" style="width:155px;"><option value="0">Standard</option><option value="2" selected>Standard+Arctic</option><option value="1">Closed Loop</option></select>';
		}
		document.getElementById('dataloggerFileName').value = (String.fromCharCode(valuesArray[2],valuesArray[3],valuesArray[4],valuesArray[5],valuesArray[6],valuesArray[7]));
		var serialNumber = '';
		for(var i=9;i<=16;i++){
			var space_split = line_split[i].split(' ');
			serialNumber += (String.fromCharCode(parseInt(space_split[6],16),parseInt(space_split[5],16)));
		}	
		document.getElementById('serialNumber').value = serialNumber;
		document.getElementById('alternatorSetup').innerHTML = alternatorSelect;
		document.getElementById('coolingSetup').innerHTML = CoolingSelect;
		
		var line_split = xmlHttp.responseText.split('\n');
		//alert(line_split[35]);
		var space_splitLow = line_split[17].split(' ');
		var space_splitHigh = line_split[18].split(' ');
		space_splitEngineDecimal = line_split[24].split(' ');
		var EngineDecimalValue = parseInt((space_splitEngineDecimal[6]+space_splitEngineDecimal[5]),16)/6;
		if(parseInt(space_splitHigh[6]+space_splitHigh[5]+space_splitLow[6]+space_splitLow[5],10) < 100 && valuesArray[26] == 0){
			document.getElementById('EngineHour').disabled = false;
			document.getElementById('EngineHourDecimal').disabled = false;
		} else {
			document.getElementById('EngineHour').disabled = true;
			document.getElementById('EngineHourDecimal').disabled = true;
		}
		document.getElementById('EngineHour').value = parseInt(space_splitHigh[6]+space_splitHigh[5]+space_splitLow[6]+space_splitLow[5],10);
		TempEngineHours = parseInt(space_splitHigh[6]+space_splitHigh[5]+space_splitLow[6]+space_splitLow[5],10);
		TempEngineDecimalHours = Math.floor(EngineDecimalValue);
		document.getElementById('EngineHourDecimal').value = Math.floor(EngineDecimalValue);
		space_splitLow = line_split[19].split(' ');
		space_splitHigh = line_split[20].split(' ');
		space_splitCoolDecimal = line_split[25].split(' ');
		CoolDecimalValue = parseInt((space_splitCoolDecimal[6]+space_splitCoolDecimal[5]),16)/6;
		if(parseInt(space_splitHigh[6]+space_splitHigh[5]+space_splitLow[6]+space_splitLow[5],10) < 100 && valuesArray[26] == 0){
			document.getElementById('CoolHour').disabled = false;
			document.getElementById('CoolHourDecimal').disabled = false;
		} else {
			document.getElementById('CoolHour').disabled = true;
			document.getElementById('CoolHourDecimal').disabled = true;
		}
		document.getElementById('CoolHour').value = parseInt(space_splitHigh[6]+space_splitHigh[5]+space_splitLow[6]+space_splitLow[5],10);
		TempCoolHours = parseInt(space_splitHigh[6]+space_splitHigh[5]+space_splitLow[6]+space_splitLow[5],10);
		TempCoolDecimalHours = Math.floor(CoolDecimalValue);
		document.getElementById('CoolHourDecimal').value = Math.floor(CoolDecimalValue);
		space_splitLow = line_split[21].split(' ');
		space_splitHigh = line_split[22].split(' ');
		space_splitHeatDecimal = line_split[23].split(' ');
		var HeatDecimalValue = parseInt((space_splitHeatDecimal[6]+space_splitHeatDecimal[5]),16)/6;
		if(parseInt(space_splitHigh[6]+space_splitHigh[5]+space_splitLow[6]+space_splitLow[5],10) < 100 && valuesArray[26] == 0){
			document.getElementById('HeatHour').disabled = false;
			document.getElementById('HeatHourDecimal').disabled = false;
		} else {
			document.getElementById('HeatHour').disabled = true;
			document.getElementById('HeatHourDecimal').disabled = true;
		}
		document.getElementById('HeatHour').value = parseInt(space_splitHigh[6]+space_splitHigh[5]+space_splitLow[6]+space_splitLow[5],10);
		TempHeatHours = parseInt(space_splitHigh[6]+space_splitHigh[5]+space_splitLow[6]+space_splitLow[5],10);
		TempHeatDecimalHours = Math.floor(HeatDecimalValue);
		document.getElementById('HeatHourDecimal').value = Math.floor(HeatDecimalValue);
		if(valuesArray[26] == 1){
			hourmeterFlag = false;
		}
		//document.getElementById('update').disabled = true;
		if(document.getElementById('statusDisplay').innerHTML != 'Running Service Test'){
			document.getElementById('statusDisplay').innerHTML = '';
		}

		var lineOne=line_split[28];
		var CharacterOne=lineOne.split(' ');
		var lineTwo=line_split[29];
		var CharacterTwo=lineTwo.split(' ');
		var lineThree=line_split[30];
		var CharacterThree=lineThree.split(' ');
		var lineFour=line_split[31];
		var CharacterFour=lineFour.split(' ');
		var lineFive=line_split[32];
		var CharacterFive=lineFive.split(' ');
		var lineSix=line_split[33];
		var CharacterSix=lineSix.split(' ');
		var lineSeven=line_split[34];
		var CharacterSeven=lineSeven.split(' ');
		var lineEight=line_split[35];
		var CharacterEight=lineEight.split(' ');
		if(parseInt(CharacterOne[5],10) == 20 && parseInt(CharacterTwo[5],10) == 20 && parseInt(CharacterThree[5],10) == 20 && parseInt(CharacterFour[5],10) == 20 && parseInt(CharacterFive[5],10)==20 && parseInt(CharacterSix[5],10)==20 && parseInt(CharacterSeven[5],10)== 20 && parseInt(CharacterEight[5],10)==20 && valuesArray[27] == 1)
	{
		//alert('Default Password');
		document.getElementById('forgotpasswordjavascript').style.display = 'inline'; // kept none for now. umesh
		
			document.getElementById('forgotpasswordjavascriptNew').style.display = 'none';
	}

	else
	{
	document.getElementById('forgotpasswordjavascript').style.display = 'none';
	if(valuesArray[27] == 1)
		{
	document.getElementById('forgotpasswordjavascriptNew').style.display = 'inline';
		}
	}


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
	
	var pass1 = document.getElementById("securityPasswordinputUpdate");
	var pass2 = document.getElementById("securityPasswordinputRe");

if(pass1.value==pass2.value && pass1.value!=null && pass2.value!=null && pass1.value!="" && pass2.value!="" ){
var InputPasswordValue = document.getElementById('securityPasswordinputUpdate').value;
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
		alert('Password updated');
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

//PasswordGDTWriteEigthCharacter = PasswordGDTWriteEigthCharacter.charCodeAt(0);



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


function UpdateUnitSetup(){
	xmlHttp=GetXmlHttpObject();
	var url = "query?";
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
	document.getElementById('update').disabled = true;
	var alternatorValue = "0"+document.getElementById('alternator').value;
	var coolingOptionValue = "0"+document.getElementById('coolingOption').value;
	var DataloggerFileNameValue = document.getElementById('dataloggerFileName').value;
	var SerialNumberValue = document.getElementById('serialNumber').value;
	
	if(validateAlphaNumeric(DataloggerFileNameValue,'file')){
		var firstcharacter = DataloggerFileNameValue.substring(0,1);
		var secondcharacter = DataloggerFileNameValue.substring(1,2);
		var thirdcharacter = DataloggerFileNameValue.substring(2,3);
		var fourthcharacter = DataloggerFileNameValue.substring(3,4);
		var fifthcharacter = DataloggerFileNameValue.substring(4,5);
		var sixthcharacter = DataloggerFileNameValue.substring(5,6);
		//var countercharacter = DataloggerFileNameValue.substring(6,8).toLowerCase();

		WriteDataloggerFileNameFirstCharacter = WriteDataloggerFileNameFirstCharacter.replace("DB", decimalToHex(firstcharacter.charCodeAt(0),null));
		WriteDataloggerFileNameSecondCharacter = WriteDataloggerFileNameSecondCharacter.replace("DB", decimalToHex(secondcharacter.charCodeAt(0),null));
		WriteDataloggerFileNameThirdCharacter = WriteDataloggerFileNameThirdCharacter.replace("DB", decimalToHex(thirdcharacter.charCodeAt(0),null));
		WriteDataloggerFileNameFourthCharacter = WriteDataloggerFileNameFourthCharacter.replace("DB", decimalToHex(fourthcharacter.charCodeAt(0),null));
		WriteDataloggerFileNameFifthCharacter = WriteDataloggerFileNameFifthCharacter.replace("DB", decimalToHex(fifthcharacter.charCodeAt(0),null));
		WriteDataloggerFileNameSixthCharacter = WriteDataloggerFileNameSixthCharacter.replace("DB", decimalToHex(sixthcharacter.charCodeAt(0),null));
		//WriteDataloggerFileNameCounter = WriteDataloggerFileNameCounter.replace("DB", decimalToHex(countercharacter,null));
		
	} else {
		document.getElementById('update').disabled = false;
		return false;
	}
	
	if(validateAlphaNumeric(SerialNumberValue,'serial')){
		var firstcharacterByte1 = SerialNumberValue.substring(0,1);
		var firstcharacterByte2 = SerialNumberValue.substring(1,2);
		var secondcharacterByte1 = SerialNumberValue.substring(2,3);
		var secondcharacterByte2 = SerialNumberValue.substring(3,4);
		var thirdcharacterByte1 = SerialNumberValue.substring(4,5);
		var thirdcharacterByte2 = SerialNumberValue.substring(5,6);
		var fourthcharacterByte1 = SerialNumberValue.substring(6,7);
		var fourthcharacterByte2 = SerialNumberValue.substring(7,8);
		var fifthcharacterByte1 = SerialNumberValue.substring(8,9);
		var fifthcharacterByte2 = SerialNumberValue.substring(9,10);
		var sixthcharacterByte1 = SerialNumberValue.substring(10,11);
		var sixthcharacterByte2 = SerialNumberValue.substring(11,12);
		var seventhcharacterByte1 = SerialNumberValue.substring(12,13);
		var seventhcharacterByte2 = SerialNumberValue.substring(13,14);
		var eighthcharacterByte1 = SerialNumberValue.substring(14,15);
		var eighthcharacterByte2 = SerialNumberValue.substring(15,16);

		WriteUnitSerialNumberFirstCharacter = WriteUnitSerialNumberFirstCharacter.replace("B1", decimalToHex(firstcharacterByte1.charCodeAt(0),null));
		WriteUnitSerialNumberFirstCharacter = WriteUnitSerialNumberFirstCharacter.replace("B2", decimalToHex(firstcharacterByte2.charCodeAt(0),null));
		WriteUnitSerialNumberSecondCharacter = WriteUnitSerialNumberSecondCharacter.replace("B1", decimalToHex(secondcharacterByte1.charCodeAt(0),null));
		WriteUnitSerialNumberSecondCharacter = WriteUnitSerialNumberSecondCharacter.replace("B2", decimalToHex(secondcharacterByte2.charCodeAt(0),null));
		WriteUnitSerialNumberThirdCharacter = WriteUnitSerialNumberThirdCharacter.replace("B1", decimalToHex(thirdcharacterByte1.charCodeAt(0),null));
		WriteUnitSerialNumberThirdCharacter = WriteUnitSerialNumberThirdCharacter.replace("B2", decimalToHex(thirdcharacterByte2.charCodeAt(0),null));
		WriteUnitSerialNumberFourthCharacter = WriteUnitSerialNumberFourthCharacter.replace("B1", decimalToHex(fourthcharacterByte1.charCodeAt(0),null));
		WriteUnitSerialNumberFourthCharacter = WriteUnitSerialNumberFourthCharacter.replace("B2", decimalToHex(fourthcharacterByte2.charCodeAt(0),null));
		WriteUnitSerialNumberFifthCharacter = WriteUnitSerialNumberFifthCharacter.replace("B1", decimalToHex(fifthcharacterByte1.charCodeAt(0),null));
		WriteUnitSerialNumberFifthCharacter = WriteUnitSerialNumberFifthCharacter.replace("B2", decimalToHex(fifthcharacterByte2.charCodeAt(0),null));
		WriteUnitSerialNumberSixthCharacter = WriteUnitSerialNumberSixthCharacter.replace("B1", decimalToHex(sixthcharacterByte1.charCodeAt(0),null));
		WriteUnitSerialNumberSixthCharacter = WriteUnitSerialNumberSixthCharacter.replace("B2", decimalToHex(sixthcharacterByte2.charCodeAt(0),null));
		WriteUnitSerialNumberSeventhCharacter = WriteUnitSerialNumberSeventhCharacter.replace("B1", decimalToHex(seventhcharacterByte1.charCodeAt(0),null));
		WriteUnitSerialNumberSeventhCharacter = WriteUnitSerialNumberSeventhCharacter.replace("B2", decimalToHex(seventhcharacterByte2.charCodeAt(0),null));
		WriteUnitSerialNumberEighthCharacter = WriteUnitSerialNumberEighthCharacter.replace("B1", decimalToHex(eighthcharacterByte1.charCodeAt(0),null));
		WriteUnitSerialNumberEighthCharacter = WriteUnitSerialNumberEighthCharacter.replace("B2", decimalToHex(eighthcharacterByte2.charCodeAt(0),null));
		
	} else {
		document.getElementById('update').disabled = false;
		return false;
	}
	
	/* hourmeter write command preparation */
	var numericPattern = /^[0-9]+$/;
	if(!document.getElementById('EngineHour').value.match(numericPattern)){
		alert('Only numeric values allowed');
		document.getElementById('EngineHour').focus();
		document.getElementById('update').disabled = false;
		return;
	} else {
	
		if(decimalToHex(document.getElementById('EngineHour').value).length > 4){
			// need to take care of both higher and lower byte
			if(decimalToHex(document.getElementById('EngineHour').value).length > 6){
				var FirstByteEngineHour = decimalToHex(document.getElementById('EngineHour').value).substr(decimalToHex(document.getElementById('EngineHour').value).length-4,2);
				var SecondByteEngineHour = decimalToHex(document.getElementById('EngineHour').value).substr(decimalToHex(document.getElementById('EngineHour').value).length-2,2);
				var ThirdByteEngineHour = decimalToHex(document.getElementById('EngineHour').value).substr(decimalToHex(document.getElementById('EngineHour').value).length-6,2);
				if(decimalToHex(document.getElementById('EngineHour').value).length == 8 ){
					var FourthByteEngineHour = decimalToHex(document.getElementById('EngineHour').value).substr(decimalToHex(document.getElementById('EngineHour').value).length-8,2);
				} else {
					var FourthByteEngineHour = decimalToHex(document.getElementById('EngineHour').value).substr(0,1);
				}
			} else {
				var FirstByteEngineHour = decimalToHex(document.getElementById('EngineHour').value).substr(decimalToHex(document.getElementById('EngineHour').value).length-4,2);
				var SecondByteEngineHour = decimalToHex(document.getElementById('EngineHour').value).substr(decimalToHex(document.getElementById('EngineHour').value).length-2,2);
				if(decimalToHex(document.getElementById('EngineHour').value).length == 6){
					var ThirdByteEngineHour = decimalToHex(document.getElementById('EngineHour').value).substr(decimalToHex(document.getElementById('EngineHour').value).length-6,2);
				} else {
					var ThirdByteEngineHour = decimalToHex(document.getElementById('EngineHour').value).substr(0,1);
				}
				var FourthByteEngineHour = '00';
			}
			CommandEngineHoursLowWrite = CommandEngineHoursLowWrite.replace('B1',AppendZero(FirstByteEngineHour));
			CommandEngineHoursLowWrite = CommandEngineHoursLowWrite.replace('B2',AppendZero(SecondByteEngineHour));
			CommandEngineHoursHghWrite = CommandEngineHoursHghWrite.replace('B2',AppendZero(ThirdByteEngineHour));
			CommandEngineHoursHghWrite = CommandEngineHoursHghWrite.replace('B1',AppendZero(FourthByteEngineHour));			
		} else {
			//only lower byte
			if(decimalToHex(document.getElementById('EngineHour').value).length > 2){
				if(decimalToHex(document.getElementById('EngineHour').value).length == 4){
					var FirstByteEngineHour = decimalToHex(document.getElementById('EngineHour').value).substr(decimalToHex(document.getElementById('EngineHour').value).length-2,2);
					var SecondByteEngineHour = decimalToHex(document.getElementById('EngineHour').value).substr(decimalToHex(document.getElementById('EngineHour').value).length-4,2);
					
				} else {
					var FirstByteEngineHour = decimalToHex(document.getElementById('EngineHour').value).substr(1,2);
			//		alert(FirstByteEngineHour);
					var SecondByteEngineHour = decimalToHex(document.getElementById('EngineHour').value).substr(0,1);
			//		alert(SecondByteEngineHour);
				}
			} else {
				if(decimalToHex(document.getElementById('EngineHour').value).length == 2){
					var FirstByteEngineHour = decimalToHex(document.getElementById('EngineHour').value).substr(decimalToHex(document.getElementById('EngineHour').value).length-2,2);
				} /*else {
					alert('length is 1');
					var FirstByteEngineHour = decimalToHex(document.getElementById('EngineHour').value).substr(0,1);
					alert('firstbyte -> '+FirstByteEngineHour);
				}*/
				var SecondByteEngineHour = '00';
			}
			CommandEngineHoursLowWrite = CommandEngineHoursLowWrite.replace('B2',AppendZero(FirstByteEngineHour));
			CommandEngineHoursLowWrite = CommandEngineHoursLowWrite.replace('B1',AppendZero(SecondByteEngineHour));
			CommandEngineHoursHghWrite = CommandEngineHoursHghWrite.replace('B1','00');
			CommandEngineHoursHghWrite = CommandEngineHoursHghWrite.replace('B2','00');
			
		}
		//either case you need check the floating conversion as input*6 convert it into hex
		if(!document.getElementById('EngineHourDecimal').value.match(numericPattern)){
			alert('Only numeric values allowed');
			document.getElementById('EngineHourDecimal').focus();
			document.getElementById('update').disabled = false;
			return;
		} else {
			var FirstByteEngineHourDecimal = decimalToHex(AppendZero(String(document.getElementById('EngineHourDecimal').value*6).substring(0,2)),null);
			CommandEngineHoursDecimalWrite = CommandEngineHoursDecimalWrite.replace('B1',FirstByteEngineHourDecimal);
		}
	}
	if(!document.getElementById('CoolHour').value.match(numericPattern)){
		alert('Only numeric values allowed');
		document.getElementById('CoolHour').focus();
		document.getElementById('update').disabled = false;
		return;
	} else {
		if(decimalToHex(document.getElementById('CoolHour').value).length > 4){
			// need to take care of both higher and lower byte
			if(decimalToHex(document.getElementById('CoolHour').value).length > 6){
				var FirstByteEngineHour = decimalToHex(document.getElementById('CoolHour').value).substr(decimalToHex(document.getElementById('CoolHour').value).length-4,2);
				var SecondByteEngineHour = decimalToHex(document.getElementById('CoolHour').value).substr(decimalToHex(document.getElementById('CoolHour').value).length-2,2);
				var ThirdByteEngineHour = decimalToHex(document.getElementById('CoolHour').value).substr(decimalToHex(document.getElementById('CoolHour').value).length-6,2);
				if(decimalToHex(document.getElementById('CoolHour').value).length == 8 ){
					var FourthByteEngineHour = decimalToHex(document.getElementById('CoolHour').value).substr(decimalToHex(document.getElementById('CoolHour').value).length-8,2);
				} else {
					var FourthByteEngineHour = decimalToHex(document.getElementById('CoolHour').value).substr(0,1);
				}
			} else {
				var FirstByteEngineHour = decimalToHex(document.getElementById('CoolHour').value).substr(decimalToHex(document.getElementById('CoolHour').value).length-4,2);
				var SecondByteEngineHour = decimalToHex(document.getElementById('CoolHour').value).substr(decimalToHex(document.getElementById('CoolHour').value).length-2,2);
				if(decimalToHex(document.getElementById('CoolHour').value).length == 6){
					var ThirdByteEngineHour = decimalToHex(document.getElementById('CoolHour').value).substr(decimalToHex(document.getElementById('CoolHour').value).length-6,2);
				} else {
					var ThirdByteEngineHour = decimalToHex(document.getElementById('CoolHour').value).substr(0,1);
				}
				var FourthByteEngineHour = '00';
			}
			CommandTotalCoolHoursLowWrite = CommandTotalCoolHoursLowWrite.replace('B1',AppendZero(FirstByteEngineHour));
			CommandTotalCoolHoursLowWrite = CommandTotalCoolHoursLowWrite.replace('B2',AppendZero(SecondByteEngineHour));
			CommandTotalCoolHoursHghWrite = CommandTotalCoolHoursHghWrite.replace('B2',AppendZero(ThirdByteEngineHour));
			CommandTotalCoolHoursHghWrite = CommandTotalCoolHoursHghWrite.replace('B1',AppendZero(FourthByteEngineHour));			
		} else {
			//only lower byte
			if(decimalToHex(document.getElementById('CoolHour').value).length > 2){
				if(decimalToHex(document.getElementById('CoolHour').value).length == 4){
					var FirstByteEngineHour = decimalToHex(document.getElementById('CoolHour').value).substr(decimalToHex(document.getElementById('CoolHour').value).length-2,2);
					var SecondByteEngineHour = decimalToHex(document.getElementById('CoolHour').value).substr(decimalToHex(document.getElementById('CoolHour').value).length-4,2);
				} else {
					var FirstByteEngineHour = decimalToHex(document.getElementById('CoolHour').value).substr(1,2);
					var SecondByteEngineHour = decimalToHex(document.getElementById('CoolHour').value).substr(0,1);
				}
			} else {
				if(decimalToHex(document.getElementById('CoolHour').value).length == 2){
					var FirstByteEngineHour = decimalToHex(document.getElementById('CoolHour').value).substr(decimalToHex(document.getElementById('CoolHour').value).length-2,2);
				} /*else {
					var FirstByteEngineHour = decimalToHex(document.getElementById('CoolHour').value).substr(0,1);
				}*/
				var SecondByteEngineHour = '00';
			}
			CommandTotalCoolHoursLowWrite = CommandTotalCoolHoursLowWrite.replace('B2',AppendZero(FirstByteEngineHour));
			CommandTotalCoolHoursLowWrite = CommandTotalCoolHoursLowWrite.replace('B1',AppendZero(SecondByteEngineHour));
			CommandTotalCoolHoursHghWrite = CommandTotalCoolHoursHghWrite.replace('B1','00');
			CommandTotalCoolHoursHghWrite = CommandTotalCoolHoursHghWrite.replace('B2','00');
			
		}
		//either case you need check the floating conversion as input*6 convert it into hex
		if(!document.getElementById('CoolHourDecimal').value.match(numericPattern)){
			alert('Only numeric values allowed');
			document.getElementById('CoolHourDecimal').focus();
			document.getElementById('update').disabled = false;
			return;
		} else {
			var FirstByteCoolHourDecimal = decimalToHex(AppendZero(String(document.getElementById('CoolHourDecimal').value*6).substring(0,2)),null);
			CommandTotalCoolHoursDecimalWrite = CommandTotalCoolHoursDecimalWrite.replace('B1',FirstByteCoolHourDecimal);
		}
	}	
	if(!document.getElementById('HeatHour').value.match(numericPattern)){
		alert('Only numeric values allowed');
		document.getElementById('HeatHour').focus();
		document.getElementById('update').disabled = false;
		return;
	} else {
		if(decimalToHex(document.getElementById('HeatHour').value).length > 4){
			// need to take care of both higher and lower byte
			if(decimalToHex(document.getElementById('HeatHour').value).length > 6){
				var FirstByteEngineHour = decimalToHex(document.getElementById('HeatHour').value).substr(decimalToHex(document.getElementById('HeatHour').value).length-4,2);
				var SecondByteEngineHour = decimalToHex(document.getElementById('HeatHour').value).substr(decimalToHex(document.getElementById('HeatHour').value).length-2,2);
				var ThirdByteEngineHour = decimalToHex(document.getElementById('HeatHour').value).substr(decimalToHex(document.getElementById('HeatHour').value).length-6,2);
				if(decimalToHex(document.getElementById('HeatHour').value).length == 8 ){
					var FourthByteEngineHour = decimalToHex(document.getElementById('HeatHour').value).substr(decimalToHex(document.getElementById('HeatHour').value).length-8,2);
				} else {
					var FourthByteEngineHour = decimalToHex(document.getElementById('HeatHour').value).substr(0,1);
				}
			} else {
				var FirstByteEngineHour = decimalToHex(document.getElementById('HeatHour').value).substr(decimalToHex(document.getElementById('HeatHour').value).length-4,2);
				var SecondByteEngineHour = decimalToHex(document.getElementById('HeatHour').value).substr(decimalToHex(document.getElementById('HeatHour').value).length-2,2);
				if(decimalToHex(document.getElementById('HeatHour').value).length == 6){
					var ThirdByteEngineHour = decimalToHex(document.getElementById('HeatHour').value).substr(decimalToHex(document.getElementById('HeatHour').value).length-6,2);
				} else {
					var ThirdByteEngineHour = decimalToHex(document.getElementById('HeatHour').value).substr(0,1);
				}
				var FourthByteEngineHour = '00';
			}
			CommandTotalHeatHoursLowWrite = CommandTotalHeatHoursLowWrite.replace('B1',AppendZero(FirstByteEngineHour));
			CommandTotalHeatHoursLowWrite = CommandTotalHeatHoursLowWrite.replace('B2',AppendZero(SecondByteEngineHour));
			CommandTotalHeatHoursHghWrite = CommandTotalHeatHoursHghWrite.replace('B2',AppendZero(ThirdByteEngineHour));
			CommandTotalHeatHoursHghWrite = CommandTotalHeatHoursHghWrite.replace('B1',AppendZero(FourthByteEngineHour));			
		} else {
			//only lower byte
			if(decimalToHex(document.getElementById('HeatHour').value).length > 2){
				if(decimalToHex(document.getElementById('HeatHour').value).length == 4){
					var FirstByteEngineHour = decimalToHex(document.getElementById('HeatHour').value).substr(decimalToHex(document.getElementById('HeatHour').value).length-2,2); 
					var SecondByteEngineHour = decimalToHex(document.getElementById('HeatHour').value).substr(decimalToHex(document.getElementById('HeatHour').value).length-4,2);
					 
				} else {
					var FirstByteEngineHour = decimalToHex(document.getElementById('HeatHour').value).substr(1,2);
					var SecondByteEngineHour = decimalToHex(document.getElementById('HeatHour').value).substr(0,1);
				}
			} else {
				if(decimalToHex(document.getElementById('HeatHour').value).length == 2){
					var FirstByteEngineHour = decimalToHex(document.getElementById('HeatHour').value).substr(decimalToHex(document.getElementById('HeatHour').value).length-2,2);
				} /*else {
					var FirstByteEngineHour = decimalToHex(document.getElementById('HeatHour').value).substr(0,1);
				}*/
				var SecondByteEngineHour = '00';
			}
			CommandTotalHeatHoursLowWrite = CommandTotalHeatHoursLowWrite.replace('B2',AppendZero(FirstByteEngineHour));
			CommandTotalHeatHoursLowWrite = CommandTotalHeatHoursLowWrite.replace('B1',AppendZero(SecondByteEngineHour));
			CommandTotalHeatHoursHghWrite = CommandTotalHeatHoursHghWrite.replace('B1','00');
			CommandTotalHeatHoursHghWrite = CommandTotalHeatHoursHghWrite.replace('B2','00');
			
		}

		//either case you need check the floating conversion as input*6 convert it into hex
		if(!document.getElementById('HeatHourDecimal').value.match(numericPattern)){
			alert('Only numeric values allowed');
			document.getElementById('HeatHourDecimal').focus();
			document.getElementById('update').disabled = false;
			return;
		} else {
			var FirstByteHeatHourDecimal = decimalToHex(AppendZero(String(document.getElementById('HeatHourDecimal').value*6).substring(0,2)),null);
			CommandTotalHeatHoursDecimalWrite = CommandTotalHeatHoursDecimalWrite.replace('B1',FirstByteHeatHourDecimal);
		}
	}	
			
	/* hour meter writing stuff ends here */
	
	CommandAlternatorCapacityWrite = CommandAlternatorCapacityWrite.replace("DB", alternatorValue);
	CommandEngineCoolingSystemWrite = CommandEngineCoolingSystemWrite.replace("DB", coolingOptionValue);
	
	if(alternatorValue == '03'){
		var input_string = CommandAlternatorCapacityWrite+"\n"+CommandEngineCoolingSystemWrite+"\n"+WriteDataloggerFileNameFirstCharacter+"\n"+WriteDataloggerFileNameSecondCharacter+"\n"+WriteDataloggerFileNameThirdCharacter+"\n"+WriteDataloggerFileNameFourthCharacter+"\n"+WriteDataloggerFileNameFifthCharacter+"\n"+WriteDataloggerFileNameSixthCharacter+"\n"+WriteUnitSerialNumberFirstCharacter+"\n"+WriteUnitSerialNumberSecondCharacter+"\n"+WriteUnitSerialNumberThirdCharacter+"\n"+WriteUnitSerialNumberFourthCharacter+"\n"+WriteUnitSerialNumberFifthCharacter+"\n"+WriteUnitSerialNumberSixthCharacter+"\n"+WriteUnitSerialNumberSeventhCharacter+"\n"+WriteUnitSerialNumberEighthCharacter+"\n"+CommandAmbientSensorConnectedNoWrite;
	} else {
		var input_string = CommandAlternatorCapacityWrite+"\n"+CommandEngineCoolingSystemWrite+"\n"+WriteDataloggerFileNameFirstCharacter+"\n"+WriteDataloggerFileNameSecondCharacter+"\n"+WriteDataloggerFileNameThirdCharacter+"\n"+WriteDataloggerFileNameFourthCharacter+"\n"+WriteDataloggerFileNameFifthCharacter+"\n"+WriteDataloggerFileNameSixthCharacter+"\n"+WriteUnitSerialNumberFirstCharacter+"\n"+WriteUnitSerialNumberSecondCharacter+"\n"+WriteUnitSerialNumberThirdCharacter+"\n"+WriteUnitSerialNumberFourthCharacter+"\n"+WriteUnitSerialNumberFifthCharacter+"\n"+WriteUnitSerialNumberSixthCharacter+"\n"+WriteUnitSerialNumberSeventhCharacter+"\n"+WriteUnitSerialNumberEighthCharacter+"\n"+CommandAmbientSensorConnectedYesWrite;
	}
	if(hourmeterFlag){
		if((parseInt(TempEngineHours,10) != parseInt(document.getElementById('EngineHour').value,10)) || (parseInt(TempCoolHours,10) != parseInt(document.getElementById('CoolHour').value,10)) || (parseInt(TempHeatHours,10) != parseInt(document.getElementById('HeatHour').value,10)) || (parseInt(TempEngineDecimalHours,10) != parseInt(document.getElementById('EngineHourDecimal').value,10)) || (parseInt(TempCoolDecimalHours,10) != parseInt(document.getElementById('CoolHourDecimal').value,10)) || (parseInt(TempHeatDecimalHours,10) != parseInt(document.getElementById('HeatHourDecimal').value,10)) ){
			input_string = input_string+"\n"+CommandHourMeterUpdateFlagWrite;
		} 
		// append hour meter update also & write hour meter GDT with 1
		if(document.getElementById('EngineHour').value < 9999){
			input_string = input_string+"\n"+CommandEngineHoursLowWrite+"\n"+CommandEngineHoursDecimalWrite;
		} else {
			input_string = input_string+"\n"+CommandEngineHoursLowWrite+"\n"+CommandEngineHoursHghWrite+"\n"+CommandEngineHoursDecimalWrite;
		}
		if(document.getElementById('CoolHour').value < 9999){
			input_string = input_string+"\n"+CommandTotalCoolHoursLowWrite+"\n"+CommandTotalCoolHoursDecimalWrite;
		} else {
			input_string = input_string+"\n"+CommandTotalCoolHoursLowWrite+"\n"+CommandTotalCoolHoursHghWrite+"\n"+CommandTotalCoolHoursDecimalWrite;
		}
		if(document.getElementById('HeatHour').value < 9999){
			input_string = input_string+"\n"+CommandTotalHeatHoursLowWrite+"\n"+CommandTotalHeatHoursDecimalWrite;
		} else {
			input_string = input_string+"\n"+CommandTotalHeatHoursLowWrite+"\n"+CommandTotalHeatHoursHghWrite+"\n"+CommandTotalHeatHoursDecimalWrite;
		}
	}
	url = url+encodeURIComponent(input_string);
	url=url+"?sid="+Math.random();
	xmlHttp.onreadystatechange=handleUnitsetupUpdate;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
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
document.getElementById('update').disabled = false;
document.getElementById('passwordTable').style.display = 'none';

		}

		else

	{
	document.getElementById('update').disabled = true;
//document.getElementById('button').style.display = 'none';
	alert('Wrong Password . Enter the correct password');
	document.location.reload(true);
	}
		
}
}


function handleUnitsetupUpdate(){
	if(xmlHttp.readyState == 4){
		var line_split = xmlHttp.responseText.split('\n');
		var space_split = line_split[0].split(' ');
		var ResultArray = new Array();
		var arrayIndex = 0;
		if(space_split.length < 10){
			alert("Unit Setup was unsuccessful. Please try again.");
		} else {
			for(var index = 5; index <= space_split.length; index = index + 18){
				//reversing the byte
				ResultArray[arrayIndex] = parseInt(space_split[index+1]+space_split[index],16);//reversing bytes and converting them to decimal
				arrayIndex++;			
			}
			alert("Unit Setup updated successful, Controller will reset to get new settings");
			restart();
		}
	}
}

function validateAlphaNumeric(inputString,validationFor) {
	if (validationFor == 'serial' && inputString.length == 0){
		//alert('Unit Serial Number is empty');
		return true;
	} else if (!inputString.match(/^[a-zA-Z0-9]+$/)){
		if(validationFor == 'serial'){
			alert('Only Alphanumeric characters allowed for Unit Serial Number');
			document.getElementById('serialNumber').focus();
		} else {
			alert('Only Alphanumeric characters allowed for Unit ID');
			document.getElementById('dataloggerFileName').focus();
		}   		
   		return false;
   	} /*else if(!FileName.match(/[0-9]$/)){
   		alert('Wrong filename, filename should end with 2 digits of numeric character');
   		return false;
   	} */else {
   		if(validationFor == 'file' && inputString.length < 6){
   			alert('Less than 6 characters not allowed');
   			return false;
   		} /*else if(inputString.length < 16 && validationFor == 'serial'){
   			alert('Less than 16 characters not allowed');
   			return false;
   		} */else {
			return true;
		}
   	}
}
