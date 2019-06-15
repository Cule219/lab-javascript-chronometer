let chronometer = new Chronometer();
let btnLeft     = document.getElementById('btnLeft');
let btnRight    = document.getElementById('btnRight');
let minDec      = document.getElementById('minDec');
let minUni      = document.getElementById('minUni');
let secDec      = document.getElementById('secDec');
let secUni      = document.getElementById('secUni');
let milDec      = document.getElementById('milDec');
let milUni      = document.getElementById('milUni');
let splitList   = document.getElementById('splits');
let state       = true;

let mild, secd, mind;
function printTime() {
    printSeconds();
    printMinutes();
    
}

function printMinutes() {
    minDec.innerHTML = Math.floor(chronometer.getMinutes()/10);
    minUni.innerHTML = chronometer.getMinutes()%10;
}

function printSeconds() {
    secDec.innerHTML = Math.floor(chronometer.getSeconds()/10);
    secUni.innerHTML = chronometer.getSeconds()%10;
}
function printMilliseconds() {
    // mild = milDec.innerHTML = (Math.floor(milu/10)%10);
    // let milu = milUni.innerHTML = (Math.floor(chronometer.curentTime/10)%10);
}

function printSplit() {
    let newSplit = document.createElement('li');
    newSplit.innerHTML = chronometer.splitClick();
    splitList.appendChild(newSplit);
}

function clearSplits() {
    splitList.innerHTML = "";
}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {
    
}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(state) {
        btnLeft.innerHTML = 'STOP';
        btnLeft.classList = 'btn stop' 
        
        btnRight.innerHTML = 'SPLIT'
        btnRight.classList = 'btn split'
        chronometer.startClick();
    }
    else {
        btnLeft.innerHTML = 'START';
        btnLeft.classList = 'btn start'

        btnRight.innerHTML = 'RESET'
        btnRight.classList = 'btn reset'
        chronometer.stopClick();
    }
    state = !state;
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(state) {
        chronometer.resetClick();
    }

    else {
        printSplit()
    }
});
