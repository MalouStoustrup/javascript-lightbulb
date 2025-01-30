"use strict";


//til første metode (skal også bruges i anden metode)

function onBulb() {
    const bulb = document.getElementById("bulb");
    bulb.src = "img/on.jpg";
  }
  
  function offBulb() {
    const bulb = document.getElementById("bulb");
    bulb.src = "img/off.jpg";
  }

  //anden metode (mere rigtig)

  document.getElementById("onBtn").addEventListener('click', onBulb);
  document.getElementById("offBtn").addEventListener('click', offBulb);

