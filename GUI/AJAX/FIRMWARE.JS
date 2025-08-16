/* Firmware Version Commands */
var CommandControllerVersion = '16 16 36 00 02 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandControllerSubVersion = '16 16 36 00 03 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandControllerBuild = '16 16 36 00 01 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';

var CommandHMIVersion = '16 16 36 13 0A 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandHMISubVersion = '16 16 36 13 0B 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandHMIBuild = '16 16 36 13 0C 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';

var CommandTKMVersion = '16 16 36 13 42 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandTKMSubVersion = '16 16 36 13 43 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandTKMBuild = '16 16 36 13 41 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';

var CommandFlashloadPercentage = '16 16 36 13 4C 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';

var CommandFlashloadApp = '16 16 2A 41';
var CommandFlashloadHMI = '16 16 2A 42';
var CommandFlashloadTKMonitor = '16 16 2A 35';


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


var FilaName = '';
var flahsloadSelect = '';
/* Firmware Version Commands */

/* prototyping String function for Ltrim */

String.prototype.lefttrim = function() {
	return this.replace(/^\s+/,"");
}

/* Prototyping ends here */
function getCurVer(){
	xmlHttp=GetXmlHttpObject();
	var url = '/query?';
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
	var input_string = CommandControllerVersion+"\n"+CommandControllerSubVersion+"\n"+CommandControllerBuild+"\n";
	input_string += CommandHMIVersion+"\n"+CommandHMISubVersion+"\n"+CommandHMIBuild+'\n';
	input_string += CommandTKMVersion+"\n"+CommandTKMSubVersion+"\n"+CommandTKMBuild+"\n"+PasswordRequiredOrNot; 
	input_string = input_string + "\n" + PasswordGDTReadFirstCharacter+"\n"+PasswordGDTReadSecondCharacter+"\n"+PasswordGDTReadThirdCharacter+"\n"+PasswordGDTReadFourthCharacter+"\n"+PasswordGDTReadFifthCharacter+"\n"+PasswordGDTReadSixthCharacter+"\n"+PasswordGDTReadSeventhCharacter+"\n"+PasswordGDTReadEigthCharacter;
	url = url+encodeURIComponent(input_string);
	url=url+"?sid="+Math.random();
	xmlHttp.onreadystatechange=LoadCurVer;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}

function LoadCurVer(){
	if(xmlHttp.readyState == 4){
	    var valuesArray = InHexValue(xmlHttp.responseText);

		var line_split = xmlHttp.responseText.split('\n');


		contTextC = "Controller";
		hmiTextC = "Human Machine Interface (HMI)";
		TKMTextC = "TK Monitor";
		if(parseInt(valuesArray[2]) <= 9){
			valuesArray[2] = '0'+valuesArray[2];
		}
		if(parseInt(valuesArray[5]) <= 9){
			valuesArray[5] = '0'+valuesArray[5];
		}
		if(parseInt(valuesArray[8]) <= 9){
			valuesArray[8] = '0'+valuesArray[8];
		}
		if(parseInt(valuesArray[1]) <= 9){
			valuesArray[1] = '0'+valuesArray[1];
		}
		if(parseInt(valuesArray[4]) <= 9){
			valuesArray[4] = '0'+valuesArray[4];
		}
		if(parseInt(valuesArray[7]) <= 9){
			valuesArray[7] = '0'+valuesArray[7];
		}

if(parseInt(valuesArray[9]) == 1)
		{
	document.getElementById('firmware').disabled = true;
	document.getElementById('passwordBox').style.display = 'inline';
	document.getElementById('forgotpasswordjavascriptNew').style.display = 'inline';
	document.getElementById('ToDisplayPasswordBox').style.display = 'inline';
	document.getElementById('ToDisplayPasswordBoxForgot').style.display = 'inline';
	

		}

else

		{
		document.getElementById('passwordBox').style.display = 'none';
		document.getElementById('firmware').disabled = false;
		document.getElementById('forgotpasswordjavascriptNew').style.display = 'none';
		document.getElementById('ToDisplayPasswordBox').style.display = 'none';
		document.getElementById('ToDisplayPasswordBoxForgot').style.display = 'none';
		}


		contVerC = valuesArray[0]+"."+valuesArray[1];//+"."+valuesArray[2];
		hmiVerC = valuesArray[3]+"."+valuesArray[4];//+"."+valuesArray[5];
		TKMVerC = valuesArray[6]+"."+valuesArray[7];//+"."+valuesArray[8];
		var tag_param = 1;
		//document.getElementById('firmware').disabled = true;
		document.getElementById('expandImage_C').innerHTML = "<img src=\"IMAGES/COLLAPSE.GIF\" onclick=\"expand("+tag_param+");\">";
		document.getElementById('currentversion_c').innerHTML = '&nbsp;&nbsp;<b>Current Version:</b>';
		if(document.getElementById('statusDisplay').innerHTML != 'Running Service Test'){
			document.getElementById('statusDisplay').innerHTML = '';
		}

		var lineOne=line_split[10];
		var CharacterOne=lineOne.split(' ');
		var lineTwo=line_split[11];
		var CharacterTwo=lineTwo.split(' ');
		var lineThree=line_split[12];
		var CharacterThree=lineThree.split(' ');
		var lineFour=line_split[13];
		var CharacterFour=lineFour.split(' ');
		var lineFive=line_split[14];
		var CharacterFive=lineFive.split(' ');
		var lineSix=line_split[15];
		var CharacterSix=lineSix.split(' ');
		var lineSeven=line_split[16];
		var CharacterSeven=lineSeven.split(' ');
		var lineEight=line_split[17];
		var CharacterEight=lineEight.split(' ');
		if(parseInt(CharacterOne[5],10) == 20 && parseInt(CharacterTwo[5],10) == 20 && parseInt(CharacterThree[5],10) == 20 && parseInt(CharacterFour[5],10) == 20 && parseInt(CharacterFive[5],10)==20 && parseInt(CharacterSix[5],10)==20 && parseInt(CharacterSeven[5],10)== 20 && parseInt(CharacterEight[5],10)==20 && parseInt(valuesArray[9]) == 1)
	{
		//alert('Default Password');
		document.getElementById('forgotpasswordjavascript').style.display = 'inline'; // kept none after new req . umesh
		document.getElementById('forgotpasswordjavascriptNew').style.display = 'none';
	}

	else
	{
	document.getElementById('forgotpasswordjavascript').style.display = 'none';
	if(valuesArray[9] == 1)
		{
	document.getElementById('forgotpasswordjavascriptNew').style.display = 'inline';
		}
	}

		expand(tag_param);
	}
}

function ForgotPassword()
{
document.getElementById('PasswordTabularShow').style.display = 'inline';


}



//***BOOT MODE******

function LoadBootMode()
{
var imagesp = 'expandImage_C';
var titlesp = 'currentversion_c';
var heading = 'Current Version';
var contTextC = "Controller";
var hmiTextC = "Human Machine Interface (HMI)";
var TKMTextC = "TK Monitor";
var text1 = contTextC;
	var text2 = hmiTextC;
	var text3 = TKMTextC;
var version1 = 'N/A';
	var version2 = 'N/A';
	var version3 = 'N/A';		
		
document.getElementById('firmware').disabled = false;
//var c = 1;
		//document.getElementById('firmware').disabled = true;
document.getElementById('expandImage_C').innerHTML = "<img src=\"IMAGES/EXPAND.GIF\" onclick=\"collapse_bm();\">";
document.getElementById('currentversion_c').innerHTML = '&nbsp;&nbsp;<b>Current Version:</b>';

var tableString = "<table align='left' id=\"curvertable\"><tr><td><b>" + text1 + " :</b></td><td>&nbsp;&nbsp;&nbsp;&nbsp;" + version1 + "</td></tr><tr><td><b>" + text2 + " :</b></td><td>&nbsp;&nbsp;&nbsp;&nbsp;" + version2 + "</td></tr><tr><td><b>" + text3 + " :</b></td><td>&nbsp;&nbsp;&nbsp;&nbsp;" + version3 + "</td></tr></table>";
document.getElementById(titlesp).innerHTML = '&nbsp;&nbsp;<b>'+heading+'</b><br><br>'+tableString+"<br><br>";
}

function collapse_bm(){
	var imagesp = 'expandImage_C';
	var titlesp = 'currentversion_c';
	var heading = 'Current Version';
	//if(value4 == 2){
	//	imagesp = 'expandImage_F';
	//	titlesp = 'currentversion_f';
	//	heading = 'Selected Version';
	//}
	document.getElementById(imagesp).innerHTML = '<img src="IMAGES/COLLAPSE.GIF" onclick="LoadBootMode()">';
	document.getElementById(titlesp).innerHTML = '&nbsp;&nbsp;<b>'+heading+'</b><br>';
}










function ForgotPasswordForUpdate()
{
document.getElementById('PasswordTabularShowForUpdateNew').style.display = 'inline';

}

function expand(tagdecider){
	var imagesp = 'expandImage_C';
	var titlesp = 'currentversion_c';
	var heading = 'Current Version';

	var version1 = contVerC;
	var version2 = hmiVerC;
	var version3 = TKMVerC;

	var text1 = contTextC;
	var text2 = hmiTextC;
	var text3 = TKMTextC;

	if(tagdecider == 2){
		imagesp = 'expandImage_F';
		titlesp = 'currentversion_f';
		heading = 'Selected File Version';
		version1 = contVerF;
		version2 = hmiVerF;
		version3 = scmVerF;
		
		text1 = contTextF;
		text2 = hmiTextF;
		text3 = scmTextF;
	}
	document.getElementById(imagesp).innerHTML = '<img src="IMAGES/EXPAND.GIF" onclick="collapse('+tagdecider+');">';
	var tableString = "<table align='left' id=\"curvertable\"><tr><td><b>" + text1 + " :</b></td><td>&nbsp;&nbsp;&nbsp;&nbsp;" + version1 + "</td></tr><tr><td><b>" + text2 + " :</b></td><td>&nbsp;&nbsp;&nbsp;&nbsp;" + version2 + "</td></tr><tr><td><b>" + text3 + " :</b></td><td>&nbsp;&nbsp;&nbsp;&nbsp;" + version3 + "</td></tr></table>";
	document.getElementById(titlesp).innerHTML = '&nbsp;&nbsp;<b>'+heading+'</b><br><br>'+tableString+"<br><br>";
}
function collapse(value4){
	var imagesp = 'expandImage_C';
	var titlesp = 'currentversion_c';
	var heading = 'Current Version';
	if(value4 == 2){
		imagesp = 'expandImage_F';
		titlesp = 'currentversion_f';
		heading = 'Selected Version';
	}
	document.getElementById(imagesp).innerHTML = '<img src="IMAGES/COLLAPSE.GIF" onclick="expand('+value4+');">';
	document.getElementById(titlesp).innerHTML = '&nbsp;&nbsp;<b>'+heading+'</b><br>';
}

function validateFile(){
	var folderLength = document.getElementById('firmware').value.split('\\');
	var file_ext = folderLength[folderLength.length - 1].split('.');
	if(file_ext['1'].toLowerCase() != 'bin'){
		alert('Improper firmware file. Please select the valid firmware file.');
		location.reload(true);
		return false;
	} 
	// build conventin test
	var filenameSubString = file_ext['0'].substring(0,4);

//alert(filenameSubString);

if(filenameSubString.toLowerCase() == 'ta90' || filenameSubString.toLowerCase() == 'th90' || filenameSubString.toLowerCase() == 'tt90'){
		//alert('Build filename convention failed. Please select the valid firmware file.');
		
}
else if(filenameSubString.toLowerCase() != 'ta41' && filenameSubString.toLowerCase() != 'th42' && filenameSubString.toLowerCase() != 'tt43'){
		alert('Build filename convention failed. Please select the valid firmware file.');
		return false;
	} else if( isNaN(folderLength[folderLength.length - 1].substring(8,4)) ){
		alert('Subversion/Build convention failed. Please select the valid firmware file.');
		return false;
	} else if(file_ext.length > 2){
		alert('Build file format not with 8.3. Please select the valid firmware file.');
		return false;
	}
	var CurAction = document.getElementById('firmwareForm').action;
	var FileToBePassed = folderLength[folderLength.length - 1];
	var FileToBePassed_Array = FileToBePassed.split('_');
	document.getElementById('firmwareForm').action = "/post?"+FileToBePassed;
	FileName = filenameSubString;
	document.firmware_upload.submit();
	document.getElementById('firmware').disabled = true;	
	document.getElementById('flashload').style.display = 'inline';			
}

function startFlash(){
	xmlHttp=GetXmlHttpObject();
	var url = '/query?';
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
	document.getElementById('statusDisplay').innerHTML = '<font color="red"><b>Flash loading in progress</b></font><br>';	
	var input_string = "";
	if(FileName.toLowerCase() == "ta41" || FileName.toLowerCase() =="ta90" ){
		input_string = CommandFlashloadApp;
		flahsloadSelect = 'Controller';
	} else if(FileName.toLowerCase() == "tt43" || FileName.toLowerCase() == "tt90"){
		input_string = CommandFlashloadTKMonitor;
		flahsloadSelect = 'TK Monitor';
	} else if(FileName.toLowerCase() == "th42" || FileName.toLowerCase() == "th90"){
		input_string = CommandFlashloadHMI;
		flahsloadSelect = 'HMI';
	}
	document.getElementById('flash').disabled = true;
	url = url+encodeURIComponent(input_string);
	url=url+"?sid="+Math.random();
	xmlHttp.onreadystatechange=HandleFlashLoad;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}

function HandleFlashLoad(){
	if(xmlHttp.readyState == 4){
		//check for nack and proceed to calculate percentage
		var spaceSplit = xmlHttp.responseText.split(' ');
		document.getElementById('firmwarehome').innerHTML = '<a href="#">DashBoard</a>';
		document.getElementById('firmwaresysmon').innerHTML = '<a href="#">System Monitoring</a>';
		document.getElementById('firmwarepfeature').innerHTML = '<a href="#">Programmable Settings</a>';
		document.getElementById('firmwareunitstup').innerHTML = '<a href="#">Unit Setup</a>';
		document.getElementById('firmwareservice').innerHTML = '<a href="#">Service Test</a>';
		document.getElementById('firmwarealarms').innerHTML = '<a href="#">Alarms</a>';
		document.getElementById('firmwaretools').innerHTML = '<a href="#">Tools</a>';
		if(spaceSplit[4] == '00'){
			//flashload failed
			alert(flahsloadSelect+" flashloading failed, Please try again");
			location.reload(true);
		} else {
			//start reading percentage and update it for every 2 seconds
			readFlashloadPercentage();
			
		}
	}
}

function readFlashloadPercentage(){
	xmlHttp=GetXmlHttpObject();
	var url = '/query?';
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
	input_string = CommandFlashloadPercentage;
	url = url+encodeURIComponent(input_string);
	url=url+"?sid="+Math.random();
	xmlHttp.onreadystatechange=handleFlashLoadPercentage;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}

function handleFlashLoadPercentage(){
	if(xmlHttp.readyState == 4){
		var valuesArray = ConvertHextoDecimal(xmlHttp.responseText); 
		document.getElementById('flashloadPercentage').innerHTML = valuesArray[0]+"% Flashloading Complete";
		if(valuesArray[0] == 100){
			if(flahsloadSelect == "HMI"){
				alert(flahsloadSelect+" flashloading completed. Controller will Turn OFF automatically.");
			} else {
				alert(flahsloadSelect+" flashloading completed. Controller will reset to get new settings.");
			}
			clearTimeout(TimerFlag);
			document.getElementById('statusDisplay').innerHTML = "";
			document.getElementById('flashloadPercentage').innerHTML = "";
			restart();
		} else if(valuesArray[0] == 255){
			clearTimeout(TimerFlag);
			alert('Flashloading failed, please retry');
			location.reload(true);
		} else {
			var TimerFlag = setTimeout("readFlashloadPercentage()",2000);
		}		
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
document.getElementById('firmware').disabled = false;
document.getElementById('passwordTable').style.display = 'none';

		}

		else

	{
	document.getElementById('firmware').disabled = true;
//document.getElementById('button').style.display = 'none';
	alert('Wrong Password . Enter the correct password');
	document.location.reload(true);
	}
		
}
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


function startBootFlash(){
	xmlHttp=GetXmlHttpObject();
	var url = '/query?';
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
	var input_string = CommandFlashloadApp;
	document.getElementById('flash').disabled = true;
	url = url+encodeURIComponent(input_string);
	url=url+"?sid="+Math.random();
	xmlHttp.onreadystatechange=HandleBootFlashLoad;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}

function HandleBootFlashLoad(){
	if(xmlHttp.readyState == 4){
		document.getElementById('statusDisplay').innerHTML = "";
		alert("flashloading completed. Controller will reset to get new settings.");
		restart();
	}
}