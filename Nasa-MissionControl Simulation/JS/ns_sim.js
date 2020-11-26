/*
##############################################################################
                                    TO DO
##############################################################################

- fix the firstActiv function, make the pressing reversable
- polish the code, make it quicker (try changing the lights by class instead
of by id)


##############################################################################
                                    TO DO
##############################################################################
*/

/* ######################################################################## */
/* ############################## FIRST WINDOW ############################ */

var activation;

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

    //mission control message in log
    document.getElementById('par1').innerHTML= '- Crew arriving to launch site, systems are a go';
    document.getElementById('par2').innerHTML= '- Booster is preparing for fuel load';
    document.getElementById('par3').innerHTML= '- CHECK battery installation';


    //comms window message update
    document.getElementById('mainDig').innerHTML= 'Mission Control Initialization in progress';

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
}

function liftOff() {
  // lift off - activated
  document.getElementById('liftOff').style.borderColor='#7FFF00';
  document.getElementById('liftOff').style.color='#7FFF00';

  //progress lights - activation
  document.getElementById('light3').style.backgroundColor='#32CD32';

  // Mainwindow message update
  document.getElementById('mainDig').innerHTML = 'Lift Off sequence successfull';

  // activate de orbit window
  document.getElementById('tsk1').style.opacity = '1';
  document.getElementById('tsk2').style.opacity = '1';
  document.getElementById('tsk3').style.opacity = '1';
  // change image background
  document.getElementById('imageScreen').src = '/Users/mikesnow/Desktop/Principia /Programming projects/Game Dev/Nasa-Simulator/images/pixelated/LiftOffPx.png';

  // nav log scroll down
  var element = document.getElementById("navLogText");
  element.scrollTop = element.scrollHeight;
}

/* ############################## FIRST WINDOW ############################ */
/* ######################################################################## */

/* ######################################################################## */
/* ########################## DE-ORBIT WINDOW ############################# */



/* ########################## DE-ORBIT WINDOW ############################# */
/* ######################################################################## */
