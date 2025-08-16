Dim pathString, UserPath
Dim position
Dim WshShell, Shell

'*****************************************************************
' Initialize the Windows Script Shell and get the user environment
'*****************************************************************

Set WshShell = WScript.CreateObject("WScript.Shell")
Set Shell = WshShell.Environment("User")

'*************************************************************
' Kill the aHttpSvr.exe (Http server) if it is already running
'*************************************************************

strComputer = "."
Set objWMIService = GetObject("winmgmts:" & "{impersonationLevel=impersonate}!\\" & strComputer & "\root\cimv2")
Set colProcessList = objWMIService.ExecQuery("SELECT * FROM Win32_Process WHERE Name = 'EMC_WS.EXE'")

For Each objProcess in colProcessList
objProcess.Terminate()
Next

'********************
' Run the http server
'********************

WshShell.Run "EMC_WS.EXE",0,false

'********************
' Close shell
'********************
Set WshShell=Nothing
WScript.Quit(0)