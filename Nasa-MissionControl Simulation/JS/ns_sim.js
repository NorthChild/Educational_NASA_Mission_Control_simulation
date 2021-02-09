
/* ######################################################################## */
/* ######################################################################## */
/* ############################## FIRST WINDOW ############################ */

var activation;

var buttonCheck1 = 0;
var noButtonError1 = false;
var noButtonError2 = false;
var noButtonError3 = false;
var noButtonErrorFinalCheck = false;

var noButtonLightError1 = false;
var noButtonLightError2 = false;
var noButtonLightError3 = false;
var noButtonlightErrorFinalCheck = false

var allGreenLights = false;

var noErrorLights = false;

var noErrorInGame = false;


function infoScreenExplanation() {

  document.getElementById('initialMSG').innerHTML = 'GOOD JOB! you\'re good to go.  ' + '<br>' + '<br>' + 'Now follow the highlighted instructions in the nav log on the right.' + '<br>' + '<br>' + 'follow the instructions to the letter, even one mistake can cause the mission to fail!' + '<br>' + "good luck!";
  document.getElementById('navLogText').style.borderColor = '#DCDCDC';

  // nav log scroll down
  var element = document.getElementById("navLogText");
  element.scrollTop = element.scrollHeight;
}


function firstActiv() {

  var activation = false;

  if (activation === false ) {

    var activation = true;
    console.log('activation = ' + activation);

    // BUTTON COLOR CHANGE
    // crew on board - standby
    document.getElementById('crew_on_b').style.borderColor='#FF8C00';
    document.getElementById('crew_on_b').style.color='#FF8C00';
    // system ready - standby
    document.getElementById('sys_rd').style.borderColor='#FF8C00';
    document.getElementById('sys_rd').style.color='#FF8C00';
    // battery install - standby
    document.getElementById('battLoad').style.borderColor='#FF8C00';
    document.getElementById('battLoad').style.color='#FF8C00';

    //mission goals window activation
    document.getElementById('light1').className='complLightsACT';
    document.getElementById('light2').className='complLightsACT';
    document.getElementById('light3').className='complLightsACT';
    document.getElementById('light4').className='complLightsACT';
    document.getElementById('light5').className='complLightsACT';
    document.getElementById('light6').className='complLightsACT';

    document.getElementById('mistake1').className='mistakLightsACT';
    document.getElementById('mistake2').className='mistakLightsACT';
    document.getElementById('mistake3').className='mistakLightsACT';
    document.getElementById('mistake4').className='mistakLightsACT';
    document.getElementById('mistake5').className='mistakLightsACT';
    document.getElementById('mistake6').className='mistakLightsACT';

    //Mission screen window activation
    document.getElementById('imageScreen').style.opacity='1';

    //mission log window activation
    document.getElementById('navLogText').style.opacity='1';
    document.getElementById('mapImg').style.opacity='1';

    //mission control message in log
    document.getElementById('par1').innerHTML= '- Crew arriving to launch site, systems are a go';
    document.getElementById('par2').innerHTML= '- Booster is preparing for fuel load';
    document.getElementById('par3').innerHTML= '- CHECK battery installation';

    //comms window message update
    document.getElementById('mainDig').innerHTML= 'Mission Control Initialization in progress';

    // info screen message
    document.getElementById('initialMSG').innerHTML= ' THE NAVLOG CONTAINS TECHNICAL INFORMATION REGARDING THE LAUNCH SEQUENCE. <br> <br> HOVER ONTOP OF THE TEXT AND CLICK TO READ A TECHICAL DESCRIPTION OF THE PROCESS';

    // change color of navLog to direct user to press for the descriptive text
    document.getElementById('navLogText').style.borderColor = '#FFD700';

    // change color of information screen border color
    document.getElementById('infoScreen').style.borderColor = '#DCDCDC';

    // nav log scroll down
    var element = document.getElementById("navLogText");
    element.scrollTop = element.scrollHeight;
  }
}

function secondActiv() {
  // battery check - activation
  document.getElementById('bttCheck').style.borderColor='#7FFF00';
  document.getElementById('bttCheck').style.color='#7FFF00';

  // fuel load - standby
  document.getElementById('fuelLoad').style.borderColor='#FF8C00';
  document.getElementById('fuelLoad').style.color='#FF8C00';

  // Mainwindow message update
  document.getElementById('mainDig').innerHTML= 'State commission gives GO to launch vehicle';
  // mission log update
  document.getElementById('par4').innerHTML= '- START liquid nitrogen input';

  // nav log scroll down
  var element = document.getElementById("navLogText");
  element.scrollTop = element.scrollHeight;

  // button check
  buttonCheck1 ++;
  console.log(buttonCheck1);
}

function thirdActiv() {
  // liquid o2 - activation
  document.getElementById('liquidO').style.borderColor='#7FFF00';
  document.getElementById('liquidO').style.color='#7FFF00';
  // crew on b - activation
  document.getElementById('crew_on_b').style.borderColor='#7FFF00';
  document.getElementById('crew_on_b').style.color='#7FFF00';


  // Mainwindow message update
  document.getElementById('mainDig').innerHTML= 'Vehicle stage oxidizer fueling complete';
  document.getElementById('par5').innerHTML= '- Transfer to launch pad initiated';

  // mission log update
  document.getElementById('par6').innerHTML= '- Crew in Entry-Vehicle';
  document.getElementById('par7').innerHTML= '- START entry-vehicle hardware test';

  // nav log scroll down
  var element = document.getElementById("navLogText");
  element.scrollTop = element.scrollHeight;

  // button check
  buttonCheck1 = buttonCheck1 + 2;
  console.log(buttonCheck1);
}

function fourthActiv() {
  // hardware test - standby
  document.getElementById('hrwdTest').style.borderColor='#FF8C00';
  document.getElementById('hrwdTest').style.color='#FF8C00';
  // hardware test - standby
  document.getElementById('sysTest').style.borderColor='#FF8C00';
  document.getElementById('sysTest').style.color='#FF8C00';
  //progress lights - activation
  document.getElementById('light1').style.backgroundColor='#32CD32';

  // Mainwindow message update
  document.getElementById('mainDig').innerHTML= 'Service towers withdrawing...';
  document.getElementById('par8').innerHTML= '- Launch Command service unit prepared ';

  // mission log update
  document.getElementById('par9').innerHTML= '- START gyroscope instruments unit';
  document.getElementById('par10').innerHTML= '- Orbital compartment hatch tested';

  // nav log scroll down
  var element = document.getElementById("navLogText");
  element.scrollTop = element.scrollHeight;

  // button check
  buttonCheck1 = buttonCheck1 + 1;
  console.log(buttonCheck1);
}

function fithActiv() {
  // gyro activation - activation
  document.getElementById('actGyro').style.borderColor='#7FFF00';
  document.getElementById('actGyro').style.color='#7FFF00';
  // fuel load - activation
  document.getElementById('fuelLoad').style.borderColor='#7FFF00';
  document.getElementById('fuelLoad').style.color='#7FFF00';
  // btr load - activation
  document.getElementById('battLoad').style.borderColor='#7FFF00';
  document.getElementById('battLoad').style.color='#7FFF00';
  // onboard log - activation
  document.getElementById('onbLog').style.borderColor='#7FFF00';
  document.getElementById('onbLog').style.color='#7FFF00';
  // onboard rec - activation
  document.getElementById('onbRec').style.borderColor='#7FFF00';
  document.getElementById('onbRec').style.color='#7FFF00';

  // hardware - activation
  document.getElementById('hrwdTest').style.borderColor='#7FFF00';
  document.getElementById('hrwdTest').style.color='#7FFF00';

  //progress lights - activation
  document.getElementById('light2').style.backgroundColor='#32CD32';

  // Mainwindow message update
  document.getElementById('mainDig').innerHTML= 'All Pre-Launch operations are complete';

  // mission log update
  document.getElementById('par11').innerHTML= '- On-Board Recorders Activation by Crew';
  document.getElementById('par12').innerHTML= '- HardWare tests successfull ';
  document.getElementById('par13').innerHTML= '- Leak tests successfull';
  document.getElementById('par14').innerHTML= '- Key to launch command given';
  document.getElementById('par15').innerHTML= '- RELEASE CTR to on-board control';

  // nav log scroll down
  var element = document.getElementById("navLogText");
  element.scrollTop = element.scrollHeight;

  // button check
  buttonCheck1 = buttonCheck1 + 6;
  console.log(buttonCheck1);
}

function sixthActiv() {
  // hardware test - standby
  document.getElementById('onbCtrl').style.borderColor='#FF8C00';
  document.getElementById('onbCtrl').style.color='#FF8C00';
  // gyro activation - activation
  document.getElementById('onbProg').style.borderColor='#7FFF00';
  document.getElementById('onbProg').style.color='#7FFF00';
  // gyro activation - activation
  document.getElementById('cmmCtrl').style.borderColor='#7FFF00';
  document.getElementById('cmmCtrl').style.color='#7FFF00';

  // Mainwindow message update
  document.getElementById('mainDig').innerHTML= 'Launch Key Inserted';

  // mission log update
  document.getElementById('par16').innerHTML= '- Tank Pressurization commencing';
  document.getElementById('par17').innerHTML= '- Safety Valves closed';
  document.getElementById('par18').innerHTML= '- Fuel Load Complete';
  document.getElementById('par19').innerHTML= '- Battery Check Complete';
  document.getElementById('par20').innerHTML= '- SWITCH to internal power';

  // nav log scroll down
  var element = document.getElementById("navLogText");
  element.scrollTop = element.scrollHeight;

  // button check
  buttonCheck1 = buttonCheck1 + 2;
  console.log(buttonCheck1);
}

function seventhActiv() {
  // int power - activation
  document.getElementById('intPwr').style.borderColor='#7FFF00';
  document.getElementById('intPwr').style.color='#7FFF00';
  // sys test - activation
  document.getElementById('sysTest').style.borderColor='#7FFF00';
  document.getElementById('sysTest').style.color='#7FFF00';
  // onb control - activation
  document.getElementById('onbCtrl').style.borderColor='#7FFF00';
  document.getElementById('onbCtrl').style.color='#7FFF00';
  // sys rd - activation
  document.getElementById('sys_rd').style.borderColor='#7FFF00';
  document.getElementById('sys_rd').style.color='#7FFF00';

  // Mainwindow message update
  document.getElementById('mainDig').innerHTML= 'Launch Key Inserted';

  // mission log update
  document.getElementById('par21').innerHTML= '- Vehicle running on internal Power';
  document.getElementById('par22').innerHTML= '- Automatic sequencer activated';
  document.getElementById('par23').innerHTML= '- Begin Tower Withdrawl';
  document.getElementById('par24').innerHTML= '- Booster propellant pressurization in progress';
  document.getElementById('par25').innerHTML= '- Pre-launch pressurization in progress';
  document.getElementById('par26').innerHTML= '- START final fuel check';

  // nav log scroll down
  var element = document.getElementById("navLogText");
  element.scrollTop = element.scrollHeight;

  // button check
  buttonCheck1 = buttonCheck1 + 4;
  console.log(buttonCheck1);
}

function eighthsActiv() {
  // fuel check - activated
  document.getElementById('FuelCheck').style.borderColor='#7FFF00';
  document.getElementById('FuelCheck').style.color='#7FFF00';
  // full thru - activated
  document.getElementById('fullThrl').style.borderColor='#7FFF00';
  document.getElementById('fullThrl').style.color='#7FFF00';

  // Mainwindow message update
  document.getElementById('mainDig').innerHTML= 'READY FOR LIFT OFF';

  // mission log update
  document.getElementById('par27').innerHTML= '- First Stage Engine at full thrust';
  document.getElementById('par28').innerHTML= '- Engine Turbo-Pumps at flight speed';
  document.getElementById('par29').innerHTML= '- Ground Power supply disconnected';
  document.getElementById('par30').innerHTML= '- Tower detaching from booster complete';
  document.getElementById('par31').innerHTML= '- Fueling tower separation in progress';
  document.getElementById('par32').innerHTML= '- READY for LIFT OFF';

  // nav log scroll down
  var element = document.getElementById("navLogText");
  element.scrollTop = element.scrollHeight;

  // button check
  buttonCheck1 = buttonCheck1 + 2;
  console.log(buttonCheck1);
}

// FINAL BUTTON ON WINDOW, AFTER THIS HAS BEEN PRESSED, THERE A CHECK TO SEE IF ANY MISTAKES HAVE BEEN MADE, AND IT PROCEEDS TO NEXT SECTION
function liftOff() {
  // lift off - activated
  document.getElementById('liftOff').style.borderColor='#7FFF00';
  document.getElementById('liftOff').style.color='#7FFF00';

  //progress lights - activation
  document.getElementById('light3').style.backgroundColor='#32CD32';

  // mission log update
  document.getElementById('par33').innerHTML= '- ORBITING PROCEDURE INITIALIZING -';
  document.getElementById('par34').innerHTML= '- ACTIVATE SAS';

  // Mainwindow message update
  document.getElementById('mainDig').innerHTML = 'Lift Off sequence successfull';

  // activate de orbit window
  document.getElementById('tsk1').style.opacity = '1';

  // change image background
  document.getElementById('imageScreen').src = '/Users/mikesnow/Desktop/Principia /Programming projects/Game Dev/Nasa-Simulator/images/pixelated/02 - LiftOffPx.png';

  // nav log scroll down
  var element = document.getElementById("navLogText");
  element.scrollTop = element.scrollHeight;

  // button check
  buttonCheck1 = buttonCheck1 + 1;
  console.log(buttonCheck1);

  // error lights test
  if (buttonCheck1 !== 19) {

    noButtonError1 = false;
    console.log(noButtonError1);

    console.log('button check one failed');
    document.getElementById('mistake1').style.backgroundColor='#000000';
    document.getElementById('mistake2').style.backgroundColor='#000000';
  } else {

    noButtonError1 = true;
    console.log(noButtonError1);

    console.log('button check success');
  }

  // testing button colors
  var crew_on_bColor = document.getElementById('crew_on_b').style.color;
  var sys_rdColor = document.getElementById('sys_rd').style.color;

  var fuelLoadColor = document.getElementById('fuelLoad').style.color;
  var fuelCheckColor = document.getElementById('FuelCheck').style.color;

  var battLoadColor = document.getElementById('battLoad').style.color;
  var bttCheckColor = document.getElementById('bttCheck').style.color;

  var liquidOColor = document.getElementById('liquidO').style.color;
  var hrwdTestColor = document.getElementById('hrwdTest').style.color;
  var actGyroColor = document.getElementById('actGyro').style.color;
  var sysTestColor = document.getElementById('sysTest').style.color;

  var onbRecColor = document.getElementById('onbRec').style.color;
  var onbLogColor = document.getElementById('onbLog').style.color;
  var onbCtrlColor = document.getElementById('onbCtrl').style.color;
  var onbProgColor = document.getElementById('onbProg').style.color;

  var cmmCtrlColor = document.getElementById('cmmCtrl').style.color;
  var intPwrColor = document.getElementById('intPwr').style.color;
  var fullThrlColor = document.getElementById('fullThrl').style.color;
  var liftOffColor = document.getElementById('liftOff').style.color;

  if (crew_on_bColor !== 'rgb(127, 255, 0)' || sys_rdColor !== 'rgb(127, 255, 0)' || fuelLoadColor !== 'rgb(127, 255, 0)' || fuelCheckColor !== 'rgb(127, 255, 0)' || battLoadColor !== 'rgb(127, 255, 0)' || bttCheckColor !== 'rgb(127, 255, 0)' || liquidOColor !== 'rgb(127, 255, 0)' || hrwdTestColor !== 'rgb(127, 255, 0)' || actGyroColor !== 'rgb(127, 255, 0)' || sysTestColor !== 'rgb(127, 255, 0)' || onbRecColor !== 'rgb(127, 255, 0)' || onbLogColor !== 'rgb(127, 255, 0)' || onbCtrlColor !== 'rgb(127, 255, 0)' || onbProgColor !== 'rgb(127, 255, 0)' || cmmCtrlColor !== 'rgb(127, 255, 0)' || intPwrColor !== 'rgb(127, 255, 0)' || fullThrlColor !== 'rgb(127, 255, 0)' || liftOffColor !== 'rgb(127, 255, 0)') {

    // error signaling in completion section
    document.getElementById('mistake1').style.backgroundColor='#000000';
    document.getElementById('mistake2').style.backgroundColor='#000000';
    console.log('negative on green light');

    // check if all lights are a green and if they are, confirm the section to be cleared correctly
    var noButtonLightError1 = false;
    console.log('noButtonLightError1: ' + noButtonLightError1);
  } else {
    // check if all lights are a green and if they are, confirm the section to be cleared correctly
    var noButtonLightError1 = true;
    console.log('noButtonLightError1: ' + noButtonLightError1);

    console.log('positive on green light');
  }

}

/* ############################## FIRST WINDOW ############################ */
/* ######################################################################## */
/* ####################### ORBIT WINDOW PT 1 ########################### */

function deOrbit1() {
  // SAS - activated
  document.getElementById('SAS').style.borderColor='#7FFF00';
  document.getElementById('SAS').style.color='#7FFF00';
  // pitch correct - standby
  document.getElementById('pitchCorr').style.borderColor='#FF8C00';
  document.getElementById('pitchCorr').style.color='#FF8C00';

  // mission log update
  document.getElementById('par35').innerHTML= '- Thrust set to Maximum';
  document.getElementById('par36').innerHTML= '- Trajectory Set';
  document.getElementById('par37').innerHTML= '- Acceleration to 100 m/s in progress';
  document.getElementById('par38').innerHTML= '- Pitch correction in standby';
  document.getElementById('par39').innerHTML= '- ACTIVATE decoupling stage';

  // Mainwindow message update
  document.getElementById('mainDig').innerHTML = 'Escape Sequence initiated';

  // nav log scroll down
  var element = document.getElementById("navLogText");
  element.scrollTop = element.scrollHeight;

  // button check
  buttonCheck1 = buttonCheck1 + 1;
  console.log(buttonCheck1);
}

function decoupleSTG() {
  // stage decouple - activated
  document.getElementById('stageDECU').style.borderColor='#7FFF00';
  document.getElementById('stageDECU').style.color='#7FFF00';
  // pitch corrected - activated
  document.getElementById('pitchCorr').style.borderColor='#7FFF00';
  document.getElementById('pitchCorr').style.color='#7FFF00';
  // prograde - standby
  document.getElementById('prograde').style.borderColor='#FF8C00';
  document.getElementById('prograde').style.color='#FF8C00';
  // engine standby - standby
  document.getElementById('engineSTBY').style.borderColor='#FF8C00';
  document.getElementById('engineSTBY').style.color='#FF8C00';
  // HDG - standby
  document.getElementById('hdg').style.borderColor='#FF8C00';
  document.getElementById('hdg').style.color='#FF8C00';

  //progress lights - activation
  document.getElementById('light4').style.backgroundColor='#32CD32';

  // Mainwindow message update
  document.getElementById('mainDig').innerHTML = 'DECOUPLE SUCCESSFULL';

  // mission log update
  document.getElementById('par40').innerHTML= '- Changed Pitch to 10 Degrees East';
  document.getElementById('par41').innerHTML= '- Pitch Correction Successfull';
  document.getElementById('par42').innerHTML= '- Changed Heading to 90 Degrees';
  document.getElementById('par43').innerHTML= '- Apoapsis Analysis in progress';
  document.getElementById('par44').innerHTML= '- Fuel Empty, Decoupling Successful';
  document.getElementById('par45').innerHTML= '- Apoapsis above 70km';
  document.getElementById('par46').innerHTML= '- Engines on standby';
  document.getElementById('par47').innerHTML= '- PERFORM systems check';

  // window screen image update
  document.getElementById('imageScreen').src = '/Users/mikesnow/Desktop/Principia /Programming projects/Game Dev/Nasa-Simulator/images/pixelated/03-decoupPIX.png';

  // nav log scroll down
  var element = document.getElementById("navLogText");
  element.scrollTop = element.scrollHeight;

  // button check
  buttonCheck1 = buttonCheck1 + 2;
  console.log(buttonCheck1);
}

function sysCheck() {
  // sys check - activated
  document.getElementById('sysCheck').style.borderColor='#7FFF00';
  document.getElementById('sysCheck').style.color='#7FFF00';
  // Comm check - standby
  document.getElementById('commCheck').style.borderColor='#FF8C00';
  document.getElementById('commCheck').style.color='#FF8C00';


  // Mainwindow message update
  document.getElementById('mainDig').innerHTML = 'System check successfull';

  // mission log update
  document.getElementById('par48').innerHTML= '- Coasting Apoapsis';
  document.getElementById('par49').innerHTML= '- 70 km Periapsis in approach';
  document.getElementById('par50').innerHTML= '- Comms Check in progress';
  document.getElementById('par51').innerHTML= '- START prograde allignment';

  // nav log scroll down
  var element = document.getElementById("navLogText");
  element.scrollTop = element.scrollHeight;

  // button check
  buttonCheck1 = buttonCheck1 + 1;
  console.log(buttonCheck1);
}

function progAll() {
  // prograde allignment - activation
  document.getElementById('ProgradeSys').style.borderColor='#7FFF00';
  document.getElementById('ProgradeSys').style.color='#7FFF00';
  // comm check - activation
  document.getElementById('commCheck').style.borderColor='#7FFF00';
  document.getElementById('commCheck').style.color='#7FFF00';
  // HDG - activation
  document.getElementById('hdg').style.borderColor='#7FFF00';
  document.getElementById('hdg').style.color='#7FFF00';

  // prograde marker - standby
  document.getElementById('proGraMKR').style.borderColor='#FF8C00';
  document.getElementById('proGraMKR').style.color='#FF8C00';

  // mission log update
  document.getElementById('par52').innerHTML= '- Alligning with prograde marker';
  document.getElementById('par53').innerHTML= '- Comm Check complete at 100%';
  document.getElementById('par54').innerHTML= '- 30s to Apoapsis';
  document.getElementById('par55').innerHTML= '- RE-START engines';

  // nav log scroll down
  var element = document.getElementById("navLogText");
  element.scrollTop = element.scrollHeight;

  // button check
  buttonCheck1 = buttonCheck1 + 3;
  console.log(buttonCheck1);
}

function engineOn() {
  // prograde - activation
  document.getElementById('prograde').style.borderColor='#7FFF00';
  document.getElementById('prograde').style.color='#7FFF00';
  // engine on - activation
  document.getElementById('engineOn').style.borderColor='#7FFF00';
  document.getElementById('engineOn').style.color='#7FFF00';
  // eng standby - activation
  document.getElementById('engineSTBY').style.borderColor='#7FFF00';
  document.getElementById('engineSTBY').style.color='#7FFF00';
  // prograde marker - activation
  document.getElementById('proGraMKR').style.borderColor='#7FFF00';
  document.getElementById('proGraMKR').style.color='#7FFF00';

  // Mainwindow message update
  document.getElementById('mainDig').innerHTML = 'STABLE ORBIT REACHED!';

  // mission log update
  document.getElementById('par56').innerHTML= '- Engines at Full Thruttle';
  document.getElementById('par57').innerHTML= '- Projected Trajectory confirmed';
  document.getElementById('par58').innerHTML= '- Engines back on standby';
  document.getElementById('par59').innerHTML= '- STAGE completed';

  // image CHANGE
  document.getElementById('imageScreen').src = '/Users/mikesnow/Desktop/Principia /Programming projects/Game Dev/Nasa-Simulator/images/pixelated/04 - successfull_deorbit.png';

  // nav log scroll down
  var element = document.getElementById("navLogText");
  element.scrollTop = element.scrollHeight;

  // button check
  buttonCheck1 = buttonCheck1 + 4;
  console.log(buttonCheck1);
}

// FINAL BUTTON ON WINDOW, AFTER THIS HAS BEEN PRESSED, THERE A CHECK TO SEE IF ANY MISTAKES HAVE BEEN MADE, AND IT PROCEEDS TO NEXT SECTION
function stageClear() {
  // stage clear - activation
  document.getElementById('STGClear').style.borderColor='#7FFF00';
  document.getElementById('STGClear').style.color='#7FFF00';

  // activate task 3
  document.getElementById('tsk3').style.opacity = '1';

  // Mainwindow message update
  document.getElementById('mainDig').innerHTML = 'CONNECTING TO ISS';

  // mission log update
  document.getElementById('par60').innerHTML= '" Welcome to Orbit from the ISS "';
  document.getElementById('par61').innerHTML= '" time to deliver your payload... "';
  document.getElementById('par62').innerHTML= '" dont forget to allign "';
  document.getElementById('par63').innerHTML= '" and initialize DOCKING...ISS out..."';

  // nav log scroll down
  var element = document.getElementById("navLogText");
  element.scrollTop = element.scrollHeight;

  // button check
  buttonCheck1 = buttonCheck1 + 1;
  console.log(buttonCheck1);

  // error lights test
  if (buttonCheck1 !== 31) {

    noButtonError2 = false;
    console.log(noButtonError2);

    console.log('button check II failed');
    document.getElementById('mistake3').style.backgroundColor='#000000';
    document.getElementById('mistake4').style.backgroundColor='#000000';

  } else {

    noButtonError2 = true;
    console.log(noButtonError2);

    console.log('button check II success');
  }

  // testing button colors
  var sasColor = document.getElementById('SAS').style.color;
  var pitchCorrColor = document.getElementById('pitchCorr').style.color;
  var stageDECUColor = document.getElementById('stageDECU').style.color;
  var engineSTBYColor = document.getElementById('engineSTBY').style.color;
  var sysCheckColor = document.getElementById('sysCheck').style.color;
  var progradeSysColor = document.getElementById('ProgradeSys').style.color;

  var hdgColor = document.getElementById('hdg').style.color;
  var progradeColor = document.getElementById('prograde').style.color;
  var commCheckColor = document.getElementById('commCheck').style.color;
  var engineOnColor = document.getElementById('engineOn').style.color;
  var proGraMKRColor = document.getElementById('proGraMKR').style.color;
  var stgClearColor = document.getElementById('STGClear').style.color;

  if (sasColor !== 'rgb(127, 255, 0)' || pitchCorrColor !== 'rgb(127, 255, 0)' || stageDECUColor !== 'rgb(127, 255, 0)' || engineSTBYColor !== 'rgb(127, 255, 0)' || sysCheckColor !== 'rgb(127, 255, 0)' || progradeSysColor !== 'rgb(127, 255, 0)' || hdgColor !== 'rgb(127, 255, 0)' || progradeColor !== 'rgb(127, 255, 0)' || commCheckColor !== 'rgb(127, 255, 0)' || engineOnColor !== 'rgb(127, 255, 0)' || proGraMKRColor !== 'rgb(127, 255, 0)' || stgClearColor !== 'rgb(127, 255, 0)' ) {

    // error signaling in completion section
    document.getElementById('mistake3').style.backgroundColor='#000000';
    document.getElementById('mistake4').style.backgroundColor='#000000';
    console.log('negative on green light II');

    // check if all lights are a green and if they are, confirm the section to be cleared correctly
    var noButtonLightError2 = false;
    console.log('noButtonLightError2: ' + noButtonLightError2);

  } else {
    // check if all lights are a green and if they are, confirm the section to be cleared correctly
    var noButtonLightError2 = true;
    console.log('noButtonLightError2: ' + noButtonLightError2);

    console.log('positive on green light II');
  }
}

/* ####################### ORBIT WINDOW PT 1 ########################### */
/* ######################################################################## */
/* ####################### ORBIT WINDOW PT II ########################## */

function allignProcess() {
  // allignment procedure - activation
  document.getElementById('AllProc').style.borderColor='#7FFF00';
  document.getElementById('AllProc').style.color='#7FFF00';
  // release control - activation
  document.getElementById('RLS_CTR').style.borderColor='#7FFF00';
  document.getElementById('RLS_CTR').style.color='#7FFF00';

  // cargo delivering process - standby
  document.getElementById('CargoDlv').style.borderColor='#FF8C00';
  document.getElementById('CargoDlv').style.color='#FF8C00';

  // Mainwindow message update
  document.getElementById('mainDig').innerHTML = 'DOCKING PROCEDURE INITIATED';

  // mission log update
  document.getElementById('par64').innerHTML= '- Allignment Proceedure successful';
  document.getElementById('par65').innerHTML= '- Releasing SYS control';
  document.getElementById('par66').innerHTML= '- Cargo Ready';
  document.getElementById('par67').innerHTML= '- Docking successful, Stage Clear';

  // image CHANGE
  document.getElementById('imageScreen').src = '/Users/mikesnow/Desktop/Principia /Programming projects/Game Dev/Nasa-Simulator/Nasa-Simulator NewIt/images/pixelated/06 - experiment1.png';
  // image CHANGE
  document.getElementById('mapImg').src = '/Users/mikesnow/Desktop/Principia /Programming projects/Game Dev/Nasa-Simulator/Nasa-Simulator NewIt/images/pixelated/05 - docking.png';

  // nav log scroll down
  var element = document.getElementById("navLogText");
  element.scrollTop = element.scrollHeight;

  // button check
  buttonCheck1 = buttonCheck1 + 2;
  console.log(buttonCheck1);

}


function issStgClear() {
  // ISS stage clear - activation
  document.getElementById('stgClrISS').style.borderColor='#7FFF00';
  document.getElementById('stgClrISS').style.color='#7FFF00';
  // cargo delivery - activation
  document.getElementById('CargoDlv').style.borderColor='#7FFF00';
  document.getElementById('CargoDlv').style.color='#7FFF00';

  // system check ISS - standby
  document.getElementById('sysCheckISS').style.borderColor='#FF8C00';
  document.getElementById('sysCheckISS').style.color='#FF8C00';

  // Mainwindow message update
  document.getElementById('mainDig').innerHTML = 'READY TO RETURN TO EARTH?';

  // mission log update
  document.getElementById('par68').innerHTML= '- Cargo Delivery Successful';
  document.getElementById('par69').innerHTML= '- All systems ready for detachment';
  document.getElementById('par70').innerHTML= '- System check in progress';
  document.getElementById('par71').innerHTML= '- Prepare for System Release';

  //progress lights - activation
  document.getElementById('light5').style.backgroundColor='#32CD32';

  // nav log scroll down
  var element = document.getElementById("navLogText");
  element.scrollTop = element.scrollHeight;

  // button check
  buttonCheck1 = buttonCheck1 + 2;
  console.log(buttonCheck1);

}


function systemRelease() {
  // release system - activation
  document.getElementById('rlsSys').style.borderColor='#7FFF00';
  document.getElementById('rlsSys').style.color='#7FFF00';
  // sys check - activation
  document.getElementById('sysCheckISS').style.borderColor='#7FFF00';
  document.getElementById('sysCheckISS').style.color='#7FFF00';

  // heat shield check - standby
  document.getElementById('HeatShieldCheck').style.borderColor='#FF8C00';
  document.getElementById('HeatShieldCheck').style.color='#FF8C00';

  // Mainwindow message update
  document.getElementById('mainDig').innerHTML = 'RE-ENTRY SEQUENCE IN PROCESS';

  // mission log update
  document.getElementById('par72').innerHTML= '- Atomsphere re-entry in progress';
  document.getElementById('par73').innerHTML= '- Trajectory comfirmed';
  document.getElementById('par74').innerHTML= '- registred velocity: 7.5km/s, decreasing';
  document.getElementById('par75').innerHTML= '- Heat Shields Nominal';
  document.getElementById('par76').innerHTML= '- START final checks';

  // image CHANGE
  document.getElementById('imageScreen').src = '/Users/mikesnow/Desktop/Principia /Programming projects/Game Dev/Nasa-Simulator/Nasa-Simulator NewIt/images/pixelated/08 - re-entry.png';
  // image CHANGE
  document.getElementById('mapImg').src = '/Users/mikesnow/Desktop/Principia /Programming projects/Game Dev/Nasa-Simulator/Nasa-Simulator NewIt/images/pixelated/05 - docking.png';

  // nav log scroll down
  var element = document.getElementById("navLogText");
  element.scrollTop = element.scrollHeight;

  // button check
  buttonCheck1 = buttonCheck1 + 2;
  console.log(buttonCheck1);

}

function FinalCheck() {
  // release system - activation
  document.getElementById('HeatShieldCheck').style.borderColor='#7FFF00';
  document.getElementById('HeatShieldCheck').style.color='#7FFF00';
  // sys check - activation
  document.getElementById('FnlCheck').style.borderColor='#7FFF00';
  document.getElementById('FnlCheck').style.color='#7FFF00';

  //progress lights - activation
  document.getElementById('light6').style.backgroundColor='#32CD32';


//////////////////////////// TEST 1 - BUTTON COUNT /////////////////////////////

  // button check
  buttonCheck1 = buttonCheck1 + 2;
  console.log(buttonCheck1);

    // button check test
    if (buttonCheck1 !== 39) {

      console.log('- TEST 1 -');

      noButtonError3 = false;
      noButtonErrorFinalCheck = false;
      document.getElementById('mistake2').style.backgroundColor='#000000';

      console.log('noButtonError3: ' + noButtonError3);
      console.log('button check III failed');
      console.log('noButtonErrorFinalCheck: ' + noButtonErrorFinalCheck);

    } else {

      console.log('- TEST 1 -');

      noButtonError3 = true;
      console.log(noButtonError3);
      console.log('button check III success');
      noButtonErrorFinalCheck = true;
      console.log('noButtonErrorFinalCheck: ' + noButtonErrorFinalCheck);
    }

//////////////////////// TEST 2 - BUTTON ARE GREEN /////////////////////////////

    console.log('- TEST 2 -');

    // testing button colors
    var rlsCtrColor = document.getElementById('RLS_CTR').style.color;
    var cargoDlvColor = document.getElementById('CargoDlv').style.color;
    var sysCheckISSColor = document.getElementById('sysCheckISS').style.color;
    var heatShieldCheckColor = document.getElementById('HeatShieldCheck').style.color;
    var allProcColor = document.getElementById('AllProc').style.color;
    var stgClrISSColor = document.getElementById('stgClrISS').style.color;
    var rlsSysColor = document.getElementById('rlsSys').style.color;
    var fnlCheckColor = document.getElementById('FnlCheck').style.color;

    if (rlsCtrColor !== 'rgb(127, 255, 0)' || cargoDlvColor !== 'rgb(127, 255, 0)' || sysCheckISSColor !== 'rgb(127, 255, 0)' || heatShieldCheckColor !== 'rgb(127, 255, 0)' || allProcColor !== 'rgb(127, 255, 0)' || stgClrISSColor !== 'rgb(127, 255, 0)' || rlsSysColor !== 'rgb(127, 255, 0)' || fnlCheckColor !== 'rgb(127, 255, 0)' ) {

      // error signaling in completion section
      document.getElementById('mistake5').style.backgroundColor='#000000';
      document.getElementById('mistake6').style.backgroundColor='#000000';

      // check if all lights are a green and if they are, confirm the section to be cleared correctly
      var noButtonLightError3 = false;
      console.log('noButtonLightError3: ' + noButtonLightError3);
      console.log('negative on green light III');

      // final check for button green state
      var noButtonlightErrorFinalCheck = false;
      console.log('noButtonlightErrorFinalCheck: ' + noButtonlightErrorFinalCheck);

    } else {

      // check if all lights are a green and if they are, confirm the section to be cleared correctly
      var noButtonLightError3 = true;
      console.log('noButtonLightError3: ' + noButtonLightError3);
      console.log('positive on green light III');

      // final check for button green state
      var noButtonlightErrorFinalCheck = true;
      console.log('noButtonlightErrorFinalCheck: ' + noButtonlightErrorFinalCheck);
    }

////////////////////// TEST 3 - PROGRESS LIGHTS ARE GREEN //////////////////////

console.log('- TEST 3 -');

var light1Check = document.getElementById('light1').style.backgroundColor;
var light2Check = document.getElementById('light2').style.backgroundColor;
var light3Check = document.getElementById('light3').style.backgroundColor;
var light4Check = document.getElementById('light4').style.backgroundColor;
var light5Check = document.getElementById('light5').style.backgroundColor;
var light6Check = document.getElementById('light6').style.backgroundColor;

if (light1Check === 'rgb(50, 205, 50)' && light2Check === 'rgb(50, 205, 50)' && light3Check === 'rgb(50, 205, 50)' && light4Check === 'rgb(50, 205, 50)' && light5Check === 'rgb(50, 205, 50)' && light6Check === 'rgb(50, 205, 50)' ) {

  var allGreenLights = true;
  console.log(allGreenLights + ', All green lights a go');
} else {

  var allGreenLights = false;
  console.log(allGreenLights + ', All green lights a no-go');
}

//////////////////////////// TEST 4 - ERROR LIGHTS /////////////////////////////

console.log('- TEST 4 -');

var errorLight1 = document.getElementById('mistake1').style.backgroundColor;
var errorLight2 = document.getElementById('mistake2').style.backgroundColor;
var errorLight3 = document.getElementById('mistake3').style.backgroundColor;
var errorLight4 = document.getElementById('mistake4').style.backgroundColor;
var errorLight5 = document.getElementById('mistake5').style.backgroundColor;
var errorLight6 = document.getElementById('mistake6').style.backgroundColor;

if (errorLight1 === 'rgb(0, 0, 0)' || errorLight2 === 'rgb(0, 0, 0)' || errorLight3 === 'rgb(0, 0, 0)' || errorLight4 === 'rgb(0, 0, 0)' || errorLight5 === 'rgb(0, 0, 0)' || errorLight6 === 'rgb(0, 0, 0)') {

  var noErrorLights = false;
  console.log(noErrorLights + ', No error lights a no-go');


} else {

  var noErrorLights = true;
  console.log(noErrorLights + ', No error lights a go');
}

////////////////////// FINAL TEST - ALL TEST TRUE ? ////////////////////////////

console.log('- FINAL TEST -');

if (noButtonErrorFinalCheck === true && noButtonlightErrorFinalCheck === true && allGreenLights === true && noErrorLights === true ) {

  noErrorInGame = true;
  console.log('-------');
  console.log('final check, no errors: ' + noErrorInGame);
  console.log('-------');

} else {

  noErrorInGame = false;
  console.log('-------');
  console.log('final check, no errors: ' + noErrorInGame);
  console.log('-------');
}

//////////////////////////// END SCENARIO WIN/LOSE /////////////////////////////

// if all tests === true, win scenario, else, lose scenario
if (noErrorInGame === true) {

  // Mainwindow message update
  document.getElementById('mainDig').innerHTML = 'WELCOME BACK TO EARTH!';

  // mission log update
  document.getElementById('par77').innerHTML= '- Parachutes activatation successful';
  document.getElementById('par78').innerHTML= '- System check successful';
  document.getElementById('par79').innerHTML= '- We have a spashdown!';
  document.getElementById('par80').innerHTML= ' THANKS FOR PLAYING, click me to continue...';

  // nav log scroll down
  var element = document.getElementById("navLogText");
  element.scrollTop = element.scrollHeight;

  // image CHANGE
  document.getElementById('imageScreen').src = '/Users/mikesnow/Desktop/Principia /Programming projects/Game Dev/Nasa-Simulator/Nasa-Simulator NewIt/images/pixelated/09 - splash-down.png';
  // image CHANGE
  document.getElementById('mapImg').src = '/Users/mikesnow/Desktop/Principia /Programming projects/Game Dev/Nasa-Simulator/Nasa-Simulator NewIt/images/pixelated/01 - nasaLogoPix.png';

} else {

  // Mainwindow message update
  document.getElementById('mainDig').innerHTML = 'OOOH THE HUMANITY!!';

  // mission log update
  document.getElementById('par77').innerHTML= '...';
  document.getElementById('par78').innerHTML= '... SOMETHING TERRIBLE HAPPENED ...';
  document.getElementById('par79').innerHTML= '-- REFRESH THE PAGE TO TRY AGAIN --';

  // nav log scroll down
  var element = document.getElementById("navLogText");
  element.scrollTop = element.scrollHeight;

  // failed final check message
  document.getElementById('initialMSG').innerHTML = "YOU'VE MADE SOME MISTAKES" + '<br>' + "CHECK ON THE TOP RIGHT COUNTER" + '<br>'  + '<br>' + "- THE FIRST TWO BUTTONS ARE THE FIRST STAGE" + '<br>' + "- THE 3RD AND 4TH BUTTON ARE THE SECOND STAGE ETC" + '<br>' + '<br>' + "REMEMBER TO FOLLOW INSTRUCTIONS TO THE LETTER" + '<br>' + "ALL BUTTONS ARE SUPPOSED TO BE WHITE IN ORDER TO SUCCEED" + '<br>' + '<br>' + "TRY AGAIN" + '<br>' + "MAKING NO MISTAKES!";

  // image CHANGE
  document.getElementById('imageScreen').src = '/Users/mikesnow/Desktop/Principia /Programming projects/Game Dev/Nasa-Simulator/Nasa-Simulator NewIt/images/pixelated/10 - failure.png';
  // image CHANGE
  document.getElementById('mapImg').src = '/Users/mikesnow/Desktop/Principia /Programming projects/Game Dev/Nasa-Simulator/Nasa-Simulator NewIt/images/pixelated/10 - failure.png';

}
}

/* ####################### ORBIT WINDOW PT II ########################## */
/* ##################################################################### */

/* ##################################################################### */
/* ######################## INFORMATION WINDOW ######################### */



/* ######################## INFORMATION WINDOW ######################### */
/* ##################################################################### */
