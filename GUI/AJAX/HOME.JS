/* Variable Declaration */
var dbTimer = '';
var datalogTimer = '';
var PageName = '';
var DisabledLabel = 'DISABLED';
var TempFlag = true; // If this is true then temp settings in F else in C
var DashBoardTimerFlag = '';
/* Variable Declaration */

/* Temperature Sensor Block Commands */
var CommandTempUnit = '16 16 36 00 06 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandEngineRPM = '16 16 36 70 0A 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';//70, 0A
var CommandOilPressure = '16 16 36 70 58 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';//70,58
var CommandEngineTemp = '16 16 36 70 10 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandCoolantTemp = '16 16 36 70 11 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandEngineStartReason = '16 16 36 70 0D 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandEngineStopReason = '16 16 36 70 0E 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandEngineRequiredReason = '16 16 36 70 0F 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
/* Temperature Sensor Block Commands */

/* HMI Operation Block Commands */
var CommandCabinTemperature = '16 16 36 13 08 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandAmbientTemperature = '16 16 36 01 14 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandSystemOperationMode = '16 16 36 00 10 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandHMIMode = '16 16 36 13 01 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandSetpointHeat = '16 16 36 07 03 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandSetpointCool = '16 16 36 07 02 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandHVACFanSpeed = '16 16 36 13 03 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandEvaporatorFanSpeedLow = '16 16 36 75 60 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandEvaporatorFanSpeedMedium = '16 16 36 75 63 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandEvaporatorFanSpeedHigh = '16 16 36 75 61 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
/* HMI Operation Block Commands */

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
/* Hour Meter Block Commands */

/* Battery Operation Block Commands */
var CommandBatteryVoltage = '16 16 36 70 25 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandBatteryCurrent = '16 16 36 70 32 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
/* Battery Operation Block Commands */

/* Alarm Block Commands */
var CommandNumberOfAlarms = '16 16 36 A0 01 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
var CommandHighestActiveAlarm = '16 16 36 A0 02 00 00 00 00 00 00 00 00 00 00 00 00 a6 44';
/* Alarm Block Commands */



function getDashboardDetails(PageName,Flag){
	xmlHttp=GetXmlHttpObject();
	var url = '/query?';
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
	dboardFlag = Flag;
	var input_string = "";
	document.getElementById('statusDisplay').style.visibility = 'visible';
	input_string =  AppendAPUEngine(input_string)+"\n"+CommandBatteryVoltage+"\n"+CommandBatteryCurrent+"\n"+CommandNumberOfAlarms+"\n"+CommandHighestActiveAlarm+"\n"+AppendHourMeter(input_string)+"\n"+CommandCabinTemperature+"\n"+CommandSystemOperationMode+"\n"+CommandSetpointHeat+"\n"+CommandSetpointCool+"\n"+CommandEvaporatorFanSpeedLow+"\n"+CommandEvaporatorFanSpeedMedium+"\n"+CommandEvaporatorFanSpeedHigh+"\n"+CommandHMIMode+"\n"+CommandAmbientTemperature;
	url = url+encodeURIComponent(input_string);
	url=url+"?sid="+Math.random();
	xmlHttp.onreadystatechange=handleGetDB;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}

function handleGetDB(){
	if(xmlHttp.readyState == 4){
		var valuesArray = new Array();
		valuesArray = ConvertHextoDecimal(xmlHttp.responseText); 
		
		if(parseInt(valuesArray[0],16) == 1){ // its in F
			TempFlag = true;
			if((valuesArray[3]/32) < 1000){
				document.getElementById('EngineTemp').innerHTML = ConvertToFahrenheit((valuesArray[3]/32))+"&deg; F";
			} else {
				document.getElementById('EngineTemp').innerHTML = "N/A";
			}
			if((valuesArray[4]/32) < 1000){
				document.getElementById('CoolantTemp').innerHTML = ConvertToFahrenheit((valuesArray[4]/32))+"&deg; F";
			} else {
				document.getElementById('CoolantTemp').innerHTML = "N/A";
			}
			
		} else {
			TempFlag = false;
			document.getElementById('EngineTemp').innerHTML = Upto2Decimal((valuesArray[3]/32),2)+"&deg; C";
			document.getElementById('CoolantTemp').innerHTML = Upto2Decimal((valuesArray[4]/32),2)+"&deg; C";
		}
		document.getElementById('EngineRPM').innerHTML = parseInt(valuesArray[1]);
		if(parseInt(valuesArray[2]) == 0){
			document.getElementById('OilPressure').innerHTML = "OK";	
		} else {
			document.getElementById('OilPressure').innerHTML = "LOW";	
		}
		updateEngineStartReason(valuesArray[5]);
		//updateEngineStopReason(valuesArray[6]);
		//updateEngineRequiredReason(valuesArray[7]);			
		
		//var valuesArray = ConvertHextoDecimal(xmlHttp.responseText);
		var line_split = xmlHttp.responseText.split('\n');
		var space_splitLow = line_split[12].split(' ');
		var space_splitHigh = line_split[13].split(' ');
		space_splitEngineDecimal = line_split[19].split(' ');
		var EngineDecimalValue = parseInt((space_splitEngineDecimal[6]+space_splitEngineDecimal[5]),16)/6;
		document.getElementById('EngineHours').innerHTML = parseInt(space_splitHigh[6]+space_splitHigh[5]+space_splitLow[6]+space_splitLow[5],10)+"."+Math.floor(EngineDecimalValue)+" Hrs";
		space_splitLow = line_split[14].split(' ');
		space_splitHigh = line_split[15].split(' ');
		space_splitCoolDecimal = line_split[20].split(' ');
		CoolDecimalValue = parseInt((space_splitCoolDecimal[6]+space_splitCoolDecimal[5]),16)/6;
		document.getElementById('totalcoolhours').innerHTML = parseInt(space_splitHigh[6]+space_splitHigh[5]+space_splitLow[6]+space_splitLow[5],10)+"."+Math.floor(CoolDecimalValue)+" Hrs";
		space_splitLow = line_split[16].split(' ');
		space_splitHigh = line_split[17].split(' ');
		space_splitHeatDecimal = line_split[18].split(' ');
		var HeatDecimalValue = parseInt((space_splitHeatDecimal[6]+space_splitHeatDecimal[5]),16)/6;
		document.getElementById('totalheathours').innerHTML = parseInt(space_splitHigh[6]+space_splitHigh[5]+space_splitLow[6]+space_splitLow[5],10)+"."+Math.floor(HeatDecimalValue)+" Hrs";
		//document.getElementById('totalFanOnlyhours').innerHTML = space_splitHigh[6]+space_splitHigh[5]+space_splitLow[6]+space_splitLow[5]+" Hrs";
		document.getElementById('BatteryVoltage').innerHTML = Upto2Decimal(((valuesArray[8])/1000),1)+" V";
		document.getElementById('BatteryCurrent').innerHTML = Upto2Decimal(((valuesArray[9])/100),1)+" Amps";

		document.getElementById('noofalarms').innerHTML = parseInt(valuesArray[10],16);
		var AlarmType = '';
		switch(parseInt(valuesArray[11],16)){
			case 0:
				AlarmType = 'NO ALARM';
				break;
			case 1:
				AlarmType = 'LOG';
				break;
			case 2:
				AlarmType = 'CHECK';
				break;
			case 3:
				AlarmType = 'PREVENT';
				break;
			case 4:
				AlarmType = 'SHUTDOWN';
				break;
			default:
				break;
		}
		document.getElementById('highestalarm').innerHTML = AlarmType;
		handleHMIoperation(xmlHttp.responseText);   
	}
}

/*function updateHMIBlock(){
	xmlHttp=GetXmlHttpObject();
	var url = '/query?';
	if (xmlHttp==null){
		alert ("Please upgrade your browser, Refer to operations manual for compatible browser");
		return;
	}
	var input_string = ""; 
	//append HVAC Operation commands
	input_string = input_string+CommandCabinTemperature+"\n"+CommandSystemOperationMode+"\n"+CommandSetpointHeat+"\n"+CommandSetpointCool+"\n"+CommandEvaporatorFanSpeedLow+"\n"+CommandEvaporatorFanSpeedMedium+"\n"+CommandEvaporatorFanSpeedHigh+"\n"+CommandHMIMode;
	url = url+encodeURIComponent(input_string);
	url=url+"?sid="+Math.random();
	xmlHttp.onreadystatechange=handleHMIoperation;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);

}*/

function handleHMIoperation(responseString){
		var valuesArray = new Array();
	    var valuesArray = ConvertHextoDecimal(responseString);
	    var speedValue = valuesArray['25'];
		if(TempFlag){
			//values in F
			if((valuesArray[21]/32) < 1000){
				document.getElementById('CabinTemp').innerHTML = ConvertToFahrenheit((valuesArray[21]/32))+"&deg; F";
			} else {
				document.getElementById('CabinTemp').innerHTML = "N/A";
			}
			
			if((valuesArray[29]/32) < 1000){
				document.getElementById('AmbientTemp').innerHTML = ConvertToFahrenheit((valuesArray[29]/32))+"&deg; F";
			} else {
				document.getElementById('AmbientTemp').innerHTML = "N/A";
			}
			
		} else {
			document.getElementById('CabinTemp').innerHTML = Upto2Decimal((valuesArray[21]/32),2)+"&deg; C";
			document.getElementById('AmbientTemp').innerHTML = Upto2Decimal((valuesArray[29]/32),2)+"&deg; C";
		}		
		if(valuesArray['22'] == 1 || valuesArray['22'] == 32 || valuesArray['28'] == 1){
			if(valuesArray['22'] == 1){
				document.getElementById('HVACMode').innerHTML = 'COOL';
			} else if(valuesArray['22'] == 32){
				document.getElementById('HVACMode').innerHTML = 'SERVICE TEST';
			} else if(valuesArray['28'] == 1 && valuesArray['22'] == 2){
				document.getElementById('HVACMode').innerHTML = 'NULL';	
			}
			if(valuesArray['22'] == 1 || valuesArray['22'] == 32 || valuesArray['28'] == 1){
		    	if(TempFlag){
				//values in F
					if((valuesArray[24]/32) < 1000){
						document.getElementById('SetpointCool').innerHTML = ConvertToFahrenheit((valuesArray[24]/32))+"&deg; F";
						if(ServiceTestNumber == '1C'){
							document.getElementById('SetpointHeat').innerHTML = ConvertToFahrenheit((valuesArray[23]/32))+"&deg; F";
						} else if(ServiceTestNumber == '02'){
							document.getElementById('SetpointHeat').innerHTML = ConvertToFahrenheit((valuesArray[23]/32))+"&deg; F";
							document.getElementById('SetpointCool').innerHTML = '--';
						} else if(ServiceTestNumber == '19' || ServiceTestNumber == '1A'){
							document.getElementById('SetpointCool').innerHTML  = '--';
							document.getElementById('SetpointHeat').innerHTML = '--';
						}
					} else {
						document.getElementById('SetpointCool').innerHTML = "N/A";
					}
				} else {
					document.getElementById('SetpointCool').innerHTML = Upto2Decimal((valuesArray[24]/32),2)+"&deg; C";
					if(ServiceTestNumber == '1C'){
						document.getElementById('SetpointHeat').innerHTML = Upto2Decimal((valuesArray[23]/32),2)+"&deg; C";
					} else if(ServiceTestNumber == '02'){
						document.getElementById('SetpointCool').innerHTML  = '--';
						document.getElementById('SetpointHeat').innerHTML = Upto2Decimal((valuesArray[23]/32),2)+"&deg; C";
					} else if(ServiceTestNumber == '19' || ServiceTestNumber == '1A'){
						document.getElementById('SetpointCool').innerHTML  = '--';
						document.getElementById('SetpointHeat').innerHTML = '--';
					}
				} 
				//document.getElementById('SetpointHeat').innerHTML = '--';
			}
	    } else if(valuesArray['22'] == 2 || valuesArray['22'] == 32){
	    	if(valuesArray['22'] == 2){
				document.getElementById('HVACMode').innerHTML = 'NULL';
			} else if(valuesArray['22'] == 32){
				document.getElementById('HVACMode').innerHTML = 'SERVICE TEST';
			}
			if(valuesArray['22'] == 2 || (valuesArray['22'] == 32)){
		    	if(TempFlag){
				//values in F
					if((valuesArray[23]/32) < 1000){
						document.getElementById('SetpointHeat').innerHTML = ConvertToFahrenheit((valuesArray[23]/32))+"&deg; F";
						if(ServiceTestNumber == '01'){
							// update only cool
							document.getElementById('SetpointCool').innerHTML = ConvertToFahrenheit((valuesArray[24]/32))+"&deg; F";
							document.getElementById('SetpointHeat').innerHTML = '--';
						} else if(ServiceTestNumber == '1C'){
							//update both
							document.getElementById('SetpointCool').innerHTML = ConvertToFahrenheit((valuesArray[24]/32))+"&deg; F";
						} else if(ServiceTestNumber == '19' || ServiceTestNumber == '1A'){
							document.getElementById('SetpointCool').innerHTML  = '--';
							document.getElementById('SetpointHeat').innerHTML = '--';
						}
					} else {
						document.getElementById('SetpointHeat').innerHTML = "N/A";
					}
					if((valuesArray[24]/32) < 1000){
						document.getElementById('SetpointCool').innerHTML = ConvertToFahrenheit((valuesArray[24]/32))+"&deg; F";
						if(ServiceTestNumber == '01'){
							document.getElementById('SetpointCool').innerHTML = ConvertToFahrenheit((valuesArray[24]/32))+"&deg; F";
							document.getElementById('SetpointHeat').innerHTML = '--';							document.getElementById('SetpointHeat').innerHTML = '--';
						} else if(ServiceTestNumber == '1C'){
							//update both
							document.getElementById('SetpointCool').innerHTML = ConvertToFahrenheit((valuesArray[24]/32))+"&deg; F";
						}
					} else {
						document.getElementById('SetpointCool').innerHTML = "N/A";
					}
				} else {
					document.getElementById('SetpointCool').innerHTML = Upto2Decimal((valuesArray[24]/32),2)+"&deg; C";
					document.getElementById('SetpointHeat').innerHTML = Upto2Decimal((valuesArray[23]/32),2)+"&deg; C";
					if(ServiceTestNumber == '01'){
						document.getElementById('SetpointHeat').innerHTML = '--';
					}
				}
			}
	    } else if(valuesArray['22'] == 3 || (valuesArray['22'] == 32) || valuesArray['28'] == 3){
	    	if(valuesArray['22'] == 3){
				document.getElementById('HVACMode').innerHTML = 'HEAT';
			} else if(valuesArray['22'] == 32){
				document.getElementById('HVACMode').innerHTML = 'SERVICE TEST';
			} else if(valuesArray['28'] == 3 && valuesArray['22'] == 2){
				document.getElementById('HVACMode').innerHTML = 'NULL';	
			}
			if(valuesArray['22'] == 3 || (valuesArray['22'] == 32) || valuesArray['28'] == 3){
		    	if(TempFlag){
				//values in F
					if((valuesArray[23]/32) < 1000){
						document.getElementById('SetpointHeat').innerHTML = ConvertToFahrenheit((valuesArray[23]/32))+"&deg; F";
						document.getElementById('SetpointCool').innerHTML = '--';
						if(ServiceTestNumber == '1C'){
							//update cool also
							document.getElementById('SetpointCool').innerHTML = ConvertToFahrenheit((valuesArray[24]/32))+"&deg; F";
						} else if(ServiceTestNumber == '01'){
							//update cool only
							document.getElementById('SetpointHeat').innerHTML = '--';
							document.getElementById('SetpointCool').innerHTML = ConvertToFahrenheit((valuesArray[24]/32))+"&deg; F";
						} else if(ServiceTestNumber == '19' || ServiceTestNumber == '1A'){
							document.getElementById('SetpointCool').innerHTML  = '--';
							document.getElementById('SetpointHeat').innerHTML = '--';
						}
					} else {
						document.getElementById('SetpointHeat').innerHTML = "N/A";
					}
				} else {
					document.getElementById('SetpointHeat').innerHTML = Upto2Decimal((valuesArray[23]/32),2)+"&deg; C";
					if(ServiceTestNumber == '1C'){
						//update cool also
						document.getElementById('SetpointCool').innerHTML = Upto2Decimal((valuesArray[24]/32),2)+"&deg; C";
					} else if(ServiceTestNumber == '01'){
						//update cool only
						document.getElementById('SetpointHeat').innerHTML = '--';
						document.getElementById('SetpointCool').innerHTML = Upto2Decimal((valuesArray[24]/32),2)+"&deg; C";
					} else if(ServiceTestNumber == '19' || ServiceTestNumber == '1A'){
						document.getElementById('SetpointCool').innerHTML  = '--';
						document.getElementById('SetpointHeat').innerHTML = '--';
					}
				}
				//document.getElementById('SetpointCool').innerHTML = '--';
			}
	    } else if(valuesArray['22'] == 12){
	    	document.getElementById('HVACMode').innerHTML = 'FAN ONLY';
	    	document.getElementById('SetpointCool').innerHTML = '--';
	    	document.getElementById('SetpointHeat').innerHTML = '--';
	    } else if(valuesArray['22'] == 42){
	    	document.getElementById('HVACMode').innerHTML = 'MONITOR';
	    	document.getElementById('SetpointCool').innerHTML = '--';
	    	document.getElementById('SetpointHeat').innerHTML = '--';
	    } else if(valuesArray['22'] == 43){
	    	document.getElementById('HVACMode').innerHTML = 'STANDBY';
	    	document.getElementById('SetpointCool').innerHTML = '--';
	    	document.getElementById('SetpointHeat').innerHTML = '--';
	    } else if(valuesArray['22'] == 32){
	    	document.getElementById('HVACMode').innerHTML = 'SERVICE TEST';
	    } else {
	    	document.getElementById('HVACMode').innerHTML = '--';
	    }
	    if(valuesArray[25] == 1){
	    	document.getElementById('HVACFanSpeed').innerHTML = 'LOW';
	    } else if(valuesArray[26] == 1){
	    	document.getElementById('HVACFanSpeed').innerHTML = 'MEDIUM';
	    } else if(valuesArray[27] == 1){
	    	document.getElementById('HVACFanSpeed').innerHTML = 'HIGH';
	    } else {
	    	document.getElementById('HVACFanSpeed').innerHTML = 'OFF';
	    }
	    if(document.getElementById('statusDisplay').innerHTML != 'Running Service Test'){
			document.getElementById('statusDisplay').style.visibility = 'hidden';
		}
	    setTimeout("getDashboardDetails('dboard','1')",5000); // auto refresh after every 10 seconds
}

function trimNumber(s) {
    while (s.substr(0, 1) == '0' && s.length > 1) { s = s.substr(1, 9999); }
    return s;
}

function AppendAPUEngine(stringInput){
	return stringInput+CommandTempUnit+"\n"+CommandEngineRPM+"\n"+CommandOilPressure+"\n"+CommandEngineTemp+"\n"+CommandCoolantTemp+"\n"+CommandEngineStartReason+"\n"+CommandEngineStopReason+"\n"+CommandEngineRequiredReason;
}

function AppendHourMeter(stringInput){
	return stringInput+CommandEngineHoursLow+"\n"+CommandEngineHoursHgh+"\n"+CommandTotalCoolHoursLow+"\n"+CommandTotalCoolHoursHgh+"\n"+CommandTotalHeatHoursLow+"\n"+CommandTotalHeatHoursHgh+"\n"+CommandTotalHeatHoursDecimal+"\n"+CommandEngineHoursDecimal+'\n'+CommandTotalCoolHoursDecimal;
}

function updateEngineStartReason(ValueforSwitch){
	switch(ValueforSwitch){
		case 0:
			document.getElementById('EngineStartReason').innerHTML = 'NONE';
			break;
		case 1:
			document.getElementById('EngineStartReason').innerHTML = 'Cool Demand';
			break;
		case 2:
			document.getElementById('EngineStartReason').innerHTML = 'Low Battery';
			break;
		case 3:
			document.getElementById('EngineStartReason').innerHTML = 'Artic Option';
			break;
		case 4:
			document.getElementById('EngineStartReason').innerHTML = 'Service Test';
			break;
		case 5:
			document.getElementById('EngineStartReason').innerHTML = 'Continuous Run Switch';
			break;
		default:
			document.getElementById('EngineStartReason').innerHTML = 'N/A';
			break;
	}
}

function updateEngineStopReason(ValueforSwitch){
	switch(ValueforSwitch){
		case 0:
			document.getElementById('EngineStopReason').innerHTML = 'NONE';
			break;
		case 1:
			document.getElementById('EngineStopReason').innerHTML = 'SetPoint Achieved';
			break;
		case 2:
			document.getElementById('EngineStopReason').innerHTML = 'Cool Mode Stopped';
			break;
		case 3:
			document.getElementById('EngineStopReason').innerHTML = 'Shutdown Alarm';
			break;
		case 4:
			document.getElementById('EngineStopReason').innerHTML = 'Battery Charge Complete';
			break;
		case 5:
			document.getElementById('EngineStopReason').innerHTML = 'StandBy';
			break;
		case 6:
			document.getElementById('EngineStopReason').innerHTML = 'Artic Option Done';
			break;
		case 7:
			document.getElementById('EngineStopReason').innerHTML = 'Service Test';
			break;
		case 8:
			document.getElementById('EngineStopReason').innerHTML = 'Alt Test End';
			break;
		case 9:
			document.getElementById('EngineStopReason').innerHTML = 'Cabin Sensor Fail';
			break;
		default:
			document.getElementById('EngineStopReason').innerHTML = 'N/A';
			break;
	}
}

function updateEngineRequiredReason(ValueforSwitch){
	switch(ValueforSwitch){
		case 0:
			document.getElementById('EngineRequireReason').innerHTML = 'NONE';
			break;
		case 1:
			document.getElementById('EngineRequireReason').innerHTML = 'Cool Control';
			break;
		case 2:
			document.getElementById('EngineRequireReason').innerHTML = 'Battery Control';
			break;
		case 3:
			document.getElementById('EngineRequireReason').innerHTML = 'Cool & Battery Control';
			break;
		case 4:
			document.getElementById('EngineRequireReason').innerHTML = 'Coolant Control';
			break;
		case 5:
			document.getElementById('EngineRequireReason').innerHTML = 'Cool & Coolant Control';
			break;
		case 6:
			document.getElementById('EngineRequireReason').innerHTML = 'Battery & Coolant Control';
			break;
		case 7:
			document.getElementById('EngineRequireReason').innerHTML = 'Cool, Battery & Coolant';
			break;
		default:
			document.getElementById('EngineRequireReason').innerHTML = 'N/A';
			break;
	}
}