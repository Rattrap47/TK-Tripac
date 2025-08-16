

/* Dummy Commands */
var CommandRead = '16 16 36 BID DID 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandWrite = '16 16 36 BID DID LB HB 00 00 00 00 00 00 00 01 00 00 a6 44';
var settimeoutFlag = 1;
var readDownloadFlag = '';
/* Dummy Commands Ends Here*/
/* Restart Commands */
var CommandWarmRestart = "16 16 73 01 00";
var CommandColdRestart = "16 16 73 01 02";
var CommandSuperColdRestart = "16 16 73 01 03";
/* Restart Commands */

/* Datalogger Download Command */
var CommandDataloggerDownload = '16 16 24 41';
var CommandDownloadPercentage = '16 16 36 13 4C 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
/* Datalogger Download Command */


var PasswordGDTWriteFirstCharacter = '16 16 36 ff 40 DB 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var PasswordGDTWriteSecondCharacter = '16 16 36 ff 41 DB 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var PasswordGDTWriteThirdCharacter = '16 16 36 ff 42 DB 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var PasswordGDTWriteFourthCharacter = '16 16 36 ff 43 DB 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var PasswordGDTWriteFifthCharacter = '16 16 36 ff 44 DB 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var PasswordGDTWriteSixthCharacter = '16 16 36 ff 45 DB 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var PasswordGDTWriteSeventhCharacter = '16 16 36 ff 46 DB 00 00 00 00 00 00 00 00 01 00 00 a6 44';
var PasswordGDTWriteEigthCharacter = '16 16 36 ff 47 DB 00 00 00 00 00 00 00 00 01 00 00 a6 44';


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




function ForgotPassword()
{
document.getElementById('PasswordTabularShow').style.display = 'inline';

}

function updategdtDOM(button){
	if(button == 'read'){
		document.getElementById('gdtreaddiv').style.display = 'inline';
		document.getElementById('gdtwritediv').style.display = 'none';
		document.getElementById('restartDiv').style.display = 'none';
		document.getElementById('dataloggerDiv').style.display = 'none';
	} else if( button == 'write'){
		document.getElementById('gdtwritediv').style.display = 'inline';
		document.getElementById('gdtreaddiv').style.display = 'none';
		document.getElementById('restartDiv').style.display = 'none';
		document.getElementById('dataloggerDiv').style.display = 'none';
	} else if(button == 'restart'){
		document.getElementById('restartDiv').style.display = 'inline';
		document.getElementById('gdtwritediv').style.display = 'none';
		document.getElementById('gdtreaddiv').style.display = 'none';
		document.getElementById('dataloggerDiv').style.display = 'none';
	} else {
		document.getElementById('restartDiv').style.display = 'none';
		document.getElementById('gdtwritediv').style.display = 'none';
		document.getElementById('gdtreaddiv').style.display = 'none';
		document.getElementById('dataloggerDiv').style.display = 'inline';
	}
}

function GDTread(){
	xmlHttp=GetXmlHttpObject();
	var	url = "query?";
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
	var blockId = document.getElementById('blockId').value;
	var dataId = document.getElementById('dataId').value;
	if(blockId.length < 2){
		blockId = AppendZero(blockId);
	}
	if(dataId.length < 2){
		dataId = AppendZero(dataId);
	}
	if(isNaN(parseInt(blockId,16))){
		alert('Enter a valid hex between 00 to ff');
		document.getElementById('blockId').focus();
		return false;
	} else if( isNaN(parseInt(dataId,16)) ){
		alert('Enter a valid hex between 00 to ff');
		document.getElementById('dataId').focus();
		return false;
	}
	var input_string = CommandRead;
	document.getElementById('getGDT').disabled = true;
	input_string = input_string.replace('BID',blockId);
	input_string = input_string.replace('DID',dataId);
	document.getElementById('GDTReadinDecimal').innerHTML = '';
	document.getElementById('messageDecimal').innerHTML = '';
	document.getElementById('GDTReadinHex').innerHTML = '';		
	document.getElementById('messageHex').innerHTML = '';
	url = url+encodeURIComponent(input_string);
	url=url+"?sid="+Math.random();
	xmlHttp.onreadystatechange=handleGDT;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}

function handleGDT(){
	if(xmlHttp.readyState == 4){
		var space_split = xmlHttp.responseText.split(' ');
		if(space_split.length < 10){
			alert('GDT read failed');
			document.getElementById('getGDT').disabled = false;
			return false;
		} else {
			var DecimalArray = new Array();
			var HexArray = new Array();
			var arrayIndex = 0;
			for(var index = 5; index <= space_split.length; index = index + 18){
				//reversing the byte
				DecimalArray[arrayIndex] = parseInt(space_split[index+1]+space_split[index],16);
				if(DecimalArray[0] > 32728){
					//its -ve value
					DecimalArray[arrayIndex] = (65535 - DecimalArray[0])+1;
					DecimalArray[arrayIndex] = '-'+DecimalArray[arrayIndex];
				} else {
					DecimalArray[arrayIndex] = parseInt(space_split[index+1]+space_split[index],16);//reversing bytes and converting them to decimal
				}				
				HexArray[arrayIndex] = space_split[index+1]+space_split[index];//combining bytes.
				arrayIndex++;			
			}
			document.getElementById('GDTReadinDecimal').innerHTML = '<b>'+parseInt(DecimalArray[0])+'</b>';
			document.getElementById('messageDecimal').innerHTML = "(Decimal)";
			document.getElementById('GDTReadinHex').innerHTML = '<b>'+HexArray[0]+'</b>';		
			document.getElementById('messageHex').innerHTML = "(Hex)";
			document.getElementById('getGDT').disabled = false;;
		}
	}
}

function GDTwrite(){
	xmlHttp=GetXmlHttpObject();
	var url = "query?";
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
	var blockId = document.getElementById('blockIdw').value;
	var dataId = document.getElementById('dataIdw').value;
	if(blockId.length < 2){
		blockId = AppendZero(blockId);
	}
	if(dataId.length < 2){
		dataId = AppendZero(dataId);
	}
	var value = document.getElementById('value').value;
	if(isNaN(parseInt(blockId,16))){
		alert('Enter a valid hex between 00 to ff');
		document.getElementById('blockIdw').focus();
		return false;
	} else if( isNaN(parseInt(dataId,16)) ){
		alert('Enter a valid hex between 00 to ff');
		document.getElementById('dataIdw').focus();
		return false;
	} else if( isNaN(parseInt(value,16)) ){
		alert('Enter a valid hex between 00 to ff');
		document.getElementById('value').focus();
		return false;	
	}
	var input_string = CommandWrite;
	document.getElementById('putGDT').disabled = true;
	input_string = input_string.replace("BID",blockId);
	input_string = input_string.replace("DID",dataId);
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
	input_string = input_string.replace("LB",LowByte); 
	input_string = input_string.replace("HB",HighByte);	
	url = url+encodeURIComponent(input_string);
	url=url+"?sid="+Math.random();
	xmlHttp.onreadystatechange=handleGDTWrite;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);	
}

function handleGDTWrite(){
	if(xmlHttp.readyState == 4){
		var space_split = xmlHttp.responseText.split(' ');
		var ResultArray = new Array();
		var arrayIndex = 0;
		if(space_split.length < 10){
			alert("GDT write was unsuccessful. Please try again.");
		    document.getElementById('blockIdw').value = '';
		    document.getElementById('dataIdw').value = '';
		    document.getElementById('value').value = '';
		    document.getElementById('putGDT').disabled = false;
		} else {
			for(var index = 5; index <= space_split.length; index = index + 18){
				//reversing the byte
				ResultArray[arrayIndex] = parseInt(space_split[index+1]+space_split[index],16);//reversing bytes and converting them to decimal
				arrayIndex++;			
			}
			alert("GDT write was successful");
			document.getElementById('putGDT').disabled = false;
		}
	}
}

function Updaterestart(){
	xmlHttp=GetXmlHttpObject();
	var url = "query?";
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
	var restartConfirmation = '';
	if(document.getElementById('warmrestart').checked){
		var input_string = CommandWarmRestart;
		restartConfirmation = confirm("Initiating Warm Restart,Controller will reset. Click OK to continue");
	} else if(document.getElementById('coldrestart').checked){
		var input_string = CommandColdRestart;
		restartConfirmation = confirm("Initiating Cold Restart,Controller will reset and datalogger will be erased. Click OK to continue");
	} else if(document.getElementById('supercold').checked){
		var input_string = CommandSuperColdRestart;
		restartConfirmation = confirm("Initiating Super Cold Restart,Controller will reset and datalogger & hourmeter will be erased. Click OK to continue");
	}	
	if(!restartConfirmation){
		return false;
	}
	document.getElementById('restartCommand').disabled = true;
	url = url+encodeURIComponent(input_string);
	url=url+"?sid="+Math.random();
	xmlHttp.onreadystatechange=handleRestart;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}

function handleRestart(){
	if(xmlHttp.readyState == 4){
	    var valuesArray = ConvertHextoDecimal(xmlHttp.responseText);
		window.parent.close();
	}
}

function downloadDatalogger(){
	xmlHttpd=GetXmlHttpObject();	
	var url = '/query?';
	if (xmlHttpd==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
	
	GlobalStatus = 'Downloading Datalogger....';
	document.getElementById('statusDisplay').innerHTML = GlobalStatus;
	document.getElementById('downloadCommand').disabled = true;
	var input_string = CommandDataloggerDownload;
	url = url+encodeURIComponent(input_string);
	url=url+"?sid="+Math.random();
	xmlHttpd.onreadystatechange=HandleDownload;
	xmlHttpd.open("GET",url,true);
	xmlHttpd.send(null);	
}
function HandleDownload(){
	if(xmlHttpd.readyState == 4){
		//read the file name and prepare for download open
		//readDownloadGDT();
		//Wait for 1 minute , But below given time waits for 1 minute 4 sec. Let it be...
		setTimeout("OpenDataloggerforDownload()",10000);
	}
}

function readDownloadGDT(){
	xmlHttp=GetXmlHttpObject();
	var url = 'http://localhost:8080/RES.TXT';
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
	if(settimeoutFlag != 1){
		clearTimeout(readDownloadFlag);
	}
	url=url+"?sid="+Math.random();
	xmlHttp.onreadystatechange=HandleFileResponse;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}

function HandleFileResponse(){
	if(xmlHttp.readyState == 4){
		if(xmlHttp.responseText.search('Oops. File not found') != -1){		
			readDownloadFlag = setTimeout("readDownloadGDT()",2000);
			settimeoutFlag = 0;
		} else {
			//wait for 5 seconds seconds and open download
			var line_split = xmlHttp.responseText.split('\n');
			var percentageArray = ConvertHextoDecimal(line_split['1']);
			if(percentageArray['0'] == 100){
				setTimeout("OpenDataloggerforDownload()",2000);
			} else {
				document.getElementById('restartMessageLink').innerHTML = percentageArray['0']+'% download complete';
				readDownloadFlag = setTimeout("readDownloadGDT()",2000);
				settimeoutFlag = 0;
			}
		}
	}
}

function OpenDataloggerforDownload(){	
	document.getElementById('restartMessageLink').innerHTML = '<a href="#" onclick="readyToRestart();">After Datalogger download, Proceed with WARM restart</a>';
	document.getElementById('statusDisplay').innerHTML = 'Datalogger download complete';
	window.open(dataloggerFileName);
}

function getDataloggerFileName(){
	xmlHttpd=GetXmlHttpObject();
	var url = '/query?';
	if (xmlHttpd==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
	var input_string = ReadDataloggerFileNameFirstCharacter+"\n"+ReadDataloggerFileNameSecondCharacter+"\n"+ReadDataloggerFileNameThirdCharacter+"\n"+ReadDataloggerFileNameFourthCharacter+"\n"+ReadDataloggerFileNameFifthCharacter+"\n"+ReadDataloggerFileNameSixthCharacter+"\n"+ReadDataloggerFileNameCounter;
	url = url+encodeURIComponent(input_string);
	url=url+"?sid="+Math.random();
	xmlHttpd.onreadystatechange=HandleDataloggerFileName;
	xmlHttpd.open("GET",url,true);
	xmlHttpd.send(null);
}

function HandleDataloggerFileName(){
	if(xmlHttpd.readyState == 4){
		var valuesArray = ConvertHextoDecimal(xmlHttpd.responseText);
		valuesArray[6] = valuesArray[6];
		if(valuesArray[6] < 10){
			valuesArray[6] = '0'+valuesArray[6];
		}
		dataloggerFileName = (String.fromCharCode(valuesArray[0],valuesArray[1],valuesArray[2],valuesArray[3],valuesArray[4],valuesArray[5])+valuesArray[6]+'.BIN').toUpperCase();
		setTimeout("downloadDatalogger()",2000);
	}
}

function readyToRestart(){
	alert('Controller will begin WARM restart');
	restart();
}

function updateLink(){
	document.getElementById('restartMessageLink').innerHTML = '<a href="#" onclick="readyToRestart();">After Datalogger Download, Please proceed for WARM restart</a>';
	document.getElementById('statusDisplay').innerHTML = '';
}

function WriteTKMVersionDL(){
	xmlHttp=GetXmlHttpObject();
	var url = "query?";
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
	document.getElementById('downloadCommand').disabled = true;
	document.getElementById('toolsDB').href = "#";
	document.getElementById('toolsSM').href = "#";
	document.getElementById('toolsPG').href = "#";
	document.getElementById('toolsST').href = "#";
	document.getElementById('toolsAM').href = "#";
	document.getElementById('toolsSU').href = "#";
	document.getElementById('toolsUS').href = "#";
	var input_string = CommandTKMVersion+'\n'+CommandTKMSubVersion+'\n'+CommandTKMBuild;
	url = url+encodeURIComponent(input_string);
	url=url+"?sid="+Math.random();
	xmlHttp.onreadystatechange=WriteTKMVersion;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
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
	
	var pass1 = document.getElementById("securityPasswordinput");
	var pass2 = document.getElementById("securityPasswordinputRe");

if(pass1.value==pass2.value && pass1.value!=null && pass2.value!=null && pass1.value!="" && pass2.value!="" ){
var InputPasswordValue = document.getElementById('securityPasswordinput').value;
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
	xmlHttp.onreadystatechange=GetThesecurityPassWordValidationResponse;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}
else { alert("Password do not match or invalid password entered");}

		

}


function UpdatePasswordOrNot()
{
	//alert('here');
xmlHttp=GetXmlHttpObject();
	var url = "query?";
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
		var input_string = PasswordGDTReadFirstCharacter+"\n"+PasswordGDTReadSecondCharacter+"\n"+PasswordGDTReadThirdCharacter+"\n"+PasswordGDTReadFourthCharacter+"\n"+PasswordGDTReadFifthCharacter+"\n"+PasswordGDTReadSixthCharacter+"\n"+PasswordGDTReadSeventhCharacter+"\n"+PasswordGDTReadEigthCharacter;
		//alert('here');
	url = url+encodeURIComponent(input_string);
	url=url+"?sid="+Math.random();
	xmlHttp.onreadystatechange=handleUpdatePasswordOrNot;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}


function handleUpdatePasswordOrNot()
{
if(xmlHttp.readyState == 4){
		var valuesArray = ConvertHextoDecimal(xmlHttp.responseText);
		var line_split = xmlHttp.responseText.split('\n');
		var lineOne=line_split[0];
		var CharacterOne=lineOne.split(' ');
		var lineTwo=line_split[1];
		var CharacterTwo=lineTwo.split(' ');
		var lineThree=line_split[2];
		var CharacterThree=lineThree.split(' ');
		var lineFour=line_split[3];
		var CharacterFour=lineFour.split(' ');
		var lineFive=line_split[4];
		var CharacterFive=lineFive.split(' ');
		var lineSix=line_split[5];
		var CharacterSix=lineSix.split(' ');
		var lineSeven=line_split[6];
		var CharacterSeven=lineSeven.split(' ');
		var lineEight=line_split[7];
		var CharacterEight=lineEight.split(' ');
		if(parseInt(CharacterOne[5],10) == 20 && parseInt(CharacterTwo[5],10) == 20 && parseInt(CharacterThree[5],10) == 20 && parseInt(CharacterFour[5],10) == 20 && parseInt(CharacterFive[5],10)==20 && parseInt(CharacterSix[5],10)==20 && parseInt(CharacterSeven[5],10)== 20 && parseInt(CharacterEight[5],10)==20)
	{
		//alert('Default Password');
		document.getElementById('forgotpasswordjavascript').style.display = 'none'; // kept none . not to be displayed in tools page . umesh
	}

	else
	{
	document.getElementById('forgotpasswordjavascript').style.display = 'none';
	}
}
}


function GetThesecurityPassWordValidationResponse()
{
if(xmlHttp.readyState == 4){
		var space_split = xmlHttp.responseText.split(' ');
		alert('passowrd updated');
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
alert('passowrd updated');
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
	document.getElementById('pfeatureupdate').disabled = false;
document.getElementById('pfeatureupdate').style.display = 'none';
	alert('Wrong Password . Enter the correct password');
	document.location.reload(true);
	}
		
}
}

function WriteTKMVersion(){
	if(xmlHttp.readyState == 4){
		getDataloggerFileName();
	}
}

