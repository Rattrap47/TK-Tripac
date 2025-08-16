var pageNumber = 1;
var sysMonTimer;
var scm1SN = '';
var scm2SN = '';
var SysmonFlag = 1;

/* System Monitoring Commands */
var CommandTempUnit = '16 16 36 00 06 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandHVACTurnedOn = '16 16 36 13 09 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandHMIOn = '16 16 36 13 04 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandHMIMode = '16 16 36 13 01 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandHMISetpointSelection = '16 16 36 13 02 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandHMIFanSpeed = '16 16 36 13 03 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandCabinTemperature = '16 16 36 13 08 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandSenseVoltage = '16 16 36 70 20 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandStandbyInput = '16 16 36 13 52 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';//Truck Ignition
var CommandChargeCurrent = '16 16 36 70 32 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandEngineRPM = '16 16 36 70 0A 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandOilPressure = '16 16 36 70 58 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandEngineTempWT1 = '16 16 36 70 10 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandEngineTempWT2 = '16 16 36 70 11 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandHeater = '16 16 36 75 20 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandCondensorFanOn = '16 16 36 75 62 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandCompressorClutch = '16 16 36 75 06 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandLPCO = '16 16 36 01 41 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandHPCO = '16 16 36 01 40 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandEvaporatorCoil = '16 16 36 01 12 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandEvaporatorFanSpeed = '16 16 36 13 03 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandEvaporatorFanSpeedLow = '16 16 36 75 60 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandEvaporatorFanSpeedMedium = '16 16 36 75 63 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandEvaporatorFanSpeedHigh = '16 16 36 75 61 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandRunRelayOutput = '16 16 36 75 02 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';//ON/OFF
var CommandAPUSwitch = '16 16 36 13 B4 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';//ON/OFF//not displayed
var CommandPreCollerFan = '16 16 36 75 3D 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';//ON/OFF
var CommandFuelSollenoidPullIN = '16 16 36 75 1E 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';//ON/OFF//not displayed
var CommandStarter = '16 16 36 75 04 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';//ON/OFF
var CommandPreheatRelay = '16 16 36 75 03 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';//ON/OFF
var CommandAlternatorExcite1 = '16 16 36 75 10 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandAlternatorExcite2 = '16 16 36 75 3E 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandAlternatorExcite3 = '16 16 36 75 3F 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandSystemVoltage = '16 16 36 70 25 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';


/* System Monitoring Commands */

function getSysMonVariables(inputPassed){
	xmlHttp=GetXmlHttpObject();
	var url = '/query?';
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
	var input_string = "";
	document.getElementById('statusDisplay').style.visibility = 'visible';
	SysmonFlag = inputPassed;
	if(inputPassed == 1){
		input_string = input_string+CommandTempUnit+"\n"+CommandHVACTurnedOn+"\n"+CommandHMIMode+"\n"+CommandHMISetpointSelection+"\n"+CommandHMIFanSpeed+"\n"+CommandCabinTemperature+"\n"+CommandEvaporatorCoil+"\n"+CommandLPCO+"\n"+CommandHPCO+"\n"+CommandEngineRPM+"\n"+CommandOilPressure+"\n"+CommandEngineTempWT1+"\n"+CommandEngineTempWT2+"\n"+CommandStandbyInput+"\n"+CommandSystemVoltage+"\n"+CommandSenseVoltage+"\n"+CommandChargeCurrent+"\n"+CommandAPUSwitch;
	} else {
		input_string = input_string+CommandPreheatRelay+"\n"+CommandRunRelayOutput+"\n"+CommandStarter+"\n"+CommandPreCollerFan+"\n"+CommandCondensorFanOn+"\n"+CommandCompressorClutch+"\n"+CommandHeater+"\n"+CommandAlternatorExcite1+"\n"+CommandAlternatorExcite2+"\n"+CommandAlternatorExcite3+"\n"+CommandEvaporatorFanSpeedLow+"\n"+CommandEvaporatorFanSpeedMedium+"\n"+CommandEvaporatorFanSpeedHigh;
	}
	url = url+encodeURIComponent(input_string);
	url=url+"?sid="+Math.random();
	xmlHttp.onreadystatechange=UpdateSysmon;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}

function UpdateSysmon(){
	if(xmlHttp.readyState == 4){
		var valuesArray = ConvertHextoDecimal(xmlHttp.responseText);
		if(SysmonFlag == 1){
			UpdateInputBlock(valuesArray);
		} else {
			UpdateOutputBlock(valuesArray);
			setTimeout("getSysMonVariables('1')",5000); // auto refresh after every 5 seconds
		}
		if(document.getElementById('statusDisplay').innerHTML != 'Running Service Test'){
			document.getElementById('statusDisplay').style.visibility = 'hidden';
		}
	}	
}

function UpdateInputBlock(responseArray){
	if(parseInt(responseArray[1]) == 1){ //HVAC Turned on
		ChangeFontColor('HVACTurnedON',document.getElementById('HVACTurnedON').innerHTML,'YES');
		document.getElementById('HVACTurnedON').innerHTML = 'YES';
	} else {
		ChangeFontColor('HVACTurnedON',document.getElementById('HVACTurnedON').innerHTML,'NO');
		document.getElementById('HVACTurnedON').innerHTML = 'NO';
	}
	/*if(parseInt(responseArray[2]) == 1){ //HMI ON
		document.getElementById('HMItalkingtocontroller').innerHTML = 'YES';
	} else {
		document.getElementById('HMItalkingtocontroller').innerHTML = 'NO';
	}*/
	if(parseInt(responseArray[2]) == 1){ //HMI Mode
		ChangeFontColor('HMIMode',document.getElementById('HMIMode').innerHTML,'COOL');
		document.getElementById('HMIMode').innerHTML = 'COOL';
	} else if(parseInt(responseArray[2]) == 3){ 
		ChangeFontColor('HMIMode',document.getElementById('HMIMode').innerHTML,'HEAT');
		document.getElementById('HMIMode').innerHTML = 'HEAT';
	} else if(parseInt(responseArray[2]) == 12){
		ChangeFontColor('HMIMode',document.getElementById('HMIMode').innerHTML,'FAN ONLY'); 
		document.getElementById('HMIMode').innerHTML = 'FAN ONLY';
	}
	if(parseInt(responseArray[0],16) == 1){ // its in F
		if((responseArray[5]/32) < 1000){
			ChangeFontColor('CabinTemperature',parseInt(document.getElementById('CabinTemperature').innerHTML),parseInt(ConvertToFahrenheit(responseArray[5]/32)+"&deg; F"));
			document.getElementById('CabinTemperature').innerHTML = ConvertToFahrenheit(responseArray[5]/32)+"&deg; F";
		} else {
			document.getElementById('CabinTemperature').innerHTML = "N/A";
		}
		if((responseArray[6]/32) < 1000){
			ChangeFontColor('EvaporatorCoilTemp',parseInt(document.getElementById('EvaporatorCoilTemp').innerHTML),parseInt(ConvertToFahrenheit(responseArray[6]/32)+"&deg; F"));
			document.getElementById('EvaporatorCoilTemp').innerHTML = ConvertToFahrenheit(responseArray[6]/32)+"&deg; F";
		} else {
			document.getElementById('EvaporatorCoilTemp').innerHTML = "N/A";
		}
		if((responseArray[11]/32) < 1000){
			ChangeFontColor('EngineTempWT1',parseInt(document.getElementById('EngineTempWT1').innerHTML),parseInt(ConvertToFahrenheit(responseArray[11]/32)+"&deg; F"));
			document.getElementById('EngineTempWT1').innerHTML = ConvertToFahrenheit(responseArray[11]/32)+"&deg; F";
		} else {
			document.getElementById('EngineTempWT1').innerHTML = "N/A";
		}
		if(responseArray[12]/32 < 1000){
			ChangeFontColor('EngineTempWT2',parseInt(document.getElementById('EngineTempWT2').innerHTML),parseInt(ConvertToFahrenheit(responseArray[12]/32)+"&deg; F"));
			document.getElementById('EngineTempWT2').innerHTML = ConvertToFahrenheit(responseArray[12]/32)+"&deg; F";
		} else {
			document.getElementById('EngineTempWT2').innerHTML = "N/A";
		}
	} else {
		if(responseArray[5]/32 < 1000){
			ChangeFontColor('CabinTemperature',parseInt(document.getElementById('CabinTemperature').innerHTML),parseInt(ConvertToFahrenheit(responseArray[5]/32)+"&deg; C"));
			document.getElementById('CabinTemperature').innerHTML = Upto2Decimal(responseArray[5]/32,2)+"&deg; C";
		} else {
			document.getElementById('CabinTemperature').innerHTML = "N/A";
		}
		if(responseArray[6]/32 < 1000){
			ChangeFontColor('EvaporatorCoilTemp',parseInt(document.getElementById('EvaporatorCoilTemp').innerHTML),parseInt(ConvertToFahrenheit(responseArray[6]/32)+"&deg; C"));
			document.getElementById('EvaporatorCoilTemp').innerHTML = Upto2Decimal(responseArray[6]/32,2)+"&deg; C";
		} else {
			document.getElementById('EvaporatorCoilTemp').innerHTML = "N/A";
		}
		if(responseArray[11]/32 < 1000){
			ChangeFontColor('EngineTempWT1',parseInt(document.getElementById('EngineTempWT1').innerHTML),parseInt(ConvertToFahrenheit(responseArray[11]/32)+"&deg; C"));
			document.getElementById('EngineTempWT1').innerHTML = Upto2Decimal(responseArray[11]/32,2)+"&deg; C";
		} else {
			document.getElementById('EngineTempWT1').innerHTML = "N/A";
		}
		if((responseArray[12]/32) < 1000){
			ChangeFontColor('EngineTempWT2',parseInt(document.getElementById('EngineTempWT2').innerHTML),parseInt(ConvertToFahrenheit(responseArray[12]/32)+"&deg; C"));
			document.getElementById('EngineTempWT2').innerHTML = Upto2Decimal(responseArray[12]/32,2)+"&deg; C";
		} else {
			document.getElementById('EngineTempWT2').innerHTML = "N/A";
		}
	}
	if(parseInt(responseArray[7]) == 1){
		document.getElementById('LPCO').innerHTML = 'OPEN';
		document.getElementById('LPCO').style.color = 'red';
	} else {
		document.getElementById('LPCO').innerHTML = 'CLOSED';
		document.getElementById('LPCO').style.color = 'black';
	}
	if(parseInt(responseArray[8]) == 1){
		document.getElementById('HPCO').innerHTML = 'OPEN';
		document.getElementById('HPCO').style.color = 'red';
	} else {
		document.getElementById('HPCO').innerHTML = 'CLOSED';
		document.getElementById('HPCO').style.color = 'black';
	}
	if(responseArray[4] == 0){
		ChangeFontColor('HMIfanspeed',document.getElementById('HMIfanspeed').innerHTML,'OFF');
    	document.getElementById('HMIfanspeed').innerHTML = 'OFF';
	} else if(responseArray[4] == 1){
		ChangeFontColor('HMIfanspeed',document.getElementById('HMIfanspeed').innerHTML,'LOW');
    	document.getElementById('HMIfanspeed').innerHTML = 'LOW';
	} else if(responseArray[4] == 2){
		ChangeFontColor('HMIfanspeed',document.getElementById('HMIfanspeed').innerHTML,'MEDIUM');
    	document.getElementById('HMIfanspeed').innerHTML = 'MEDIUM';
    } else if(responseArray[4] == 3){
    	ChangeFontColor('HMIfanspeed',document.getElementById('HMIfanspeed').innerHTML,'HIGH');
    	document.getElementById('HMIfanspeed').innerHTML = 'HIGH';
    }
    if(responseArray[13] == '0'){
    	ChangeFontColor('Ignition',document.getElementById('Ignition').innerHTML,'OFF');
    	document.getElementById('Ignition').innerHTML = 'OFF';
    } else {
    	ChangeFontColor('Ignition',document.getElementById('Ignition').innerHTML,'ON');
    	document.getElementById('Ignition').innerHTML = 'ON';
    }
    ChangeFontColor('HMISetpoint',document.getElementById('HMISetpoint').innerHTML,responseArray[3]);
    document.getElementById('HMISetpoint').innerHTML = responseArray[3];
    ChangeFontColor('EngineRPM',document.getElementById('EngineRPM').innerHTML,responseArray[9]);
	document.getElementById('EngineRPM').innerHTML = parseInt(responseArray[9]);
	
	if(parseInt(responseArray[10]) == 0){
		ChangeFontColor('OilPressure',document.getElementById('OilPressure').innerHTML,'OK');
		document.getElementById('OilPressure').innerHTML = "OK";	
	} else {
		ChangeFontColor('OilPressure',document.getElementById('OilPressure').innerHTML,'LOW');
		document.getElementById('OilPressure').innerHTML = "LOW";	
	}
	
	if((responseArray[17]/1000) >= 9){
		ChangeFontColor('APUSwitch',document.getElementById('APUSwitch').innerHTML,'ON');
		document.getElementById('APUSwitch').innerHTML = 'ON';
	} else {
		ChangeFontColor('APUSwitch',document.getElementById('APUSwitch').innerHTML,'ON');
		document.getElementById('APUSwitch').innerHTML = 'OFF';
	}
	ChangeFontColor('SystemVoltage',document.getElementById('SystemVoltage').innerHTML,Upto2Decimal((responseArray[14]/1000),1)+" V");	
	document.getElementById('SystemVoltage').innerHTML = Upto2Decimal((responseArray[14]/1000),1)+" V";
	ChangeFontColor('SenseVoltage',document.getElementById('SenseVoltage').innerHTML,Upto2Decimal((responseArray[15]/1000),1)+" V");
	document.getElementById('SenseVoltage').innerHTML = Upto2Decimal((responseArray[15]/1000),1)+" V";
	ChangeFontColor('ChargeCurrent',document.getElementById('ChargeCurrent').innerHTML,Upto2Decimal((responseArray[16]/100),1)+" Amps");
	document.getElementById('ChargeCurrent').innerHTML = Upto2Decimal((responseArray[16]/100),1)+" Amps";
	getSysMonVariables(2);
}

function UpdateOutputBlock(responseArray){

	if(parseInt(responseArray[6]) == '1'){
		document.getElementById('CabHeater').checked = true;
		document.getElementById('CabHeater').style.background = 'green';
	} else {
		document.getElementById('CabHeater').checked = false;
		document.getElementById('CabHeater').style.background = '#ffffff';
	}
	
	if(parseInt(responseArray[4]) == '1'){
		document.getElementById('CondenserFan').checked = true;
		document.getElementById('CondenserFan').style.background = 'green';
	} else {
		document.getElementById('CondenserFan').checked = false;
		document.getElementById('CondenserFan').style.background = '#ffffff';
	}
	if(responseArray[5] == '1'){
		document.getElementById('CompressorClutch').checked = true;
		document.getElementById('CompressorClutch').style.background = 'green';
	} else {
		document.getElementById('CompressorClutch').checked = false;
		document.getElementById('CompressorClutch').style.background = '#ffffff';
	}
	if(parseInt(responseArray[10]) == 1){
		document.getElementById('EvaporatorFanLow').checked = true;
		document.getElementById('EvaporatorFanMedium').checked = false;
		document.getElementById('EvaporatorFanHigh').checked = false;
		document.getElementById('EvaporatorFanOff').checked = false;
		document.getElementById('EvaporatorFanLow').style.background = 'green';
		document.getElementById('EvaporatorFanMedium').style.background = '#ffffff';
		document.getElementById('EvaporatorFanHigh').style.background = '#ffffff';
		document.getElementById('EvaporatorFanOff').style.background = '#ffffff';
	} else if(parseInt(responseArray[11]) == 1){
		document.getElementById('EvaporatorFanLow').checked = false;
		document.getElementById('EvaporatorFanMedium').checked = true;
		document.getElementById('EvaporatorFanHigh').checked = false;
		document.getElementById('EvaporatorFanOff').checked = false;
		document.getElementById('EvaporatorFanMedium').style.background = 'green';
		document.getElementById('EvaporatorFanLow').style.background = '#ffffff';
		document.getElementById('EvaporatorFanHigh').style.background = '#ffffff';
		document.getElementById('EvaporatorFanOff').style.background = '#ffffff';
	} else if(parseInt(responseArray[12]) == 1){
		document.getElementById('EvaporatorFanLow').checked = false;
		document.getElementById('EvaporatorFanMedium').checked = false;
		document.getElementById('EvaporatorFanHigh').checked = true;
		document.getElementById('EvaporatorFanOff').checked = false;
		document.getElementById('EvaporatorFanHigh').style.background = 'green';
		document.getElementById('EvaporatorFanMedium').style.background = '#ffffff';
		document.getElementById('EvaporatorFanLow').style.background = '#ffffff';
		document.getElementById('EvaporatorFanOff').style.background = '#ffffff';
	} else {
		document.getElementById('EvaporatorFanLow').checked = false;
		document.getElementById('EvaporatorFanMedium').checked = false;
		document.getElementById('EvaporatorFanHigh').checked = false;
		document.getElementById('EvaporatorFanOff').checked = true;
		document.getElementById('EvaporatorFanOff').style.background = 'green';
		document.getElementById('EvaporatorFanHigh').style.background = '#ffffff';
		document.getElementById('EvaporatorFanMedium').style.background = '#ffffff';
		document.getElementById('EvaporatorFanLow').style.background = '#ffffff';
	}
	if(parseInt(responseArray[1]) == 0){
		document.getElementById('RelayOutput').checked = false;
		document.getElementById('RelayOutput').style.background = '#ffffff';
	} else {
		document.getElementById('RelayOutput').checked = true;
		document.getElementById('RelayOutput').style.background = 'green';
	}
	if(parseInt(responseArray[3]) == 0){
		document.getElementById('PreCoolerFan').checked = false;
		document.getElementById('PreCoolerFan').style.background = '#ffffff';
	} else {
		document.getElementById('PreCoolerFan').checked = true;
		document.getElementById('PreCoolerFan').style.background = 'green';
	}
	if(parseInt(responseArray[2]) == 0){
		document.getElementById('Starter').checked = false;
		document.getElementById('Starter').style.background = '#ffffff';
	} else {
		document.getElementById('Starter').checked = true;
		document.getElementById('Starter').style.background = 'green';
	}
	if(parseInt(responseArray[0]) == 1){
		document.getElementById('EnginePreheat').checked = true;
		document.getElementById('EnginePreheat').style.background = 'green';
	} else {
		document.getElementById('EnginePreheat').checked = false;
		document.getElementById('EnginePreheat').style.background = '#ffffff';
	}
	if(parseInt(responseArray[7]) == 0){
		document.getElementById('OutputLevel1').checked = false;
		document.getElementById('OutputLevel1').style.background = '#ffffff';
	} else {
		document.getElementById('OutputLevel1').checked = true;
		document.getElementById('OutputLevel1').style.background = 'green';
	}
	if(parseInt(responseArray[8]) == 0){
		document.getElementById('OutputLevel2').checked = false;
		document.getElementById('OutputLevel2').style.background = '#ffffff';
	} else {
		document.getElementById('OutputLevel2').checked = true;
		document.getElementById('OutputLevel2').style.background = 'green';
	}
	if(parseInt(responseArray[9]) == 0){
		document.getElementById('OutputLevel3').checked = false;
		document.getElementById('OutputLevel3').style.background = '#ffffff';
	} else {
		document.getElementById('OutputLevel3').checked = true;
		document.getElementById('OutputLevel3').style.background = 'green';
	}		
}

function ChangeFontColor(SpanId,OldValue,NewValue){
	if(OldValue != NewValue){
		document.getElementById(SpanId).style.color = 'red';
	} else {
		document.getElementById(SpanId).style.color = 'black';
	}
}