function toggleCallPopup() {
    const callPopup = document.getElementById('call-popup');
    const mobileFrame = document.getElementById('mobile-frame');
    const mobileFrameIncomingCall = document.getElementById('mobile-frame-incoming-call');
    const mobileFrameCallAccepted = document.getElementById('mobile-frame-call-accepted');
    callPopup.style.display = callPopup.style.display === "none" ? 'inline-flex' : 'none';
    mobileFrame.style.display = 'none';
    mobileFrameIncomingCall.style.display = 'block';
    mobileFrameCallAccepted.style.display = 'none';
}

function toggleSMSPopup() {
    const smsPopup = document.getElementById('sms-popup');
    if (smsPopup.style.display === 'inline-flex') {
        setTimeout(() => {
            decreaseNumberAnimation('bank-amount', 175231, 231, 1);
            increaseNumberAnimation('hacker-bank-amount', 0, 175000, 1);
        }, 2000);
    }
    smsPopup.style.display = smsPopup.style.display === "none" ? 'inline-flex' : 'none';
}

function convertToCrypto() {
    setTimeout(() => {
        decreaseNumberAnimation('hacker-bank-amount', 175000, 0, 1);
    }, 200);
}

function acceptCall() {
    const callPopup = document.getElementById('call-popup');
    const mobileFrame = document.getElementById('mobile-frame');
    const mobileFrameIncomingCall = document.getElementById('mobile-frame-incoming-call');
    const mobileFrameCallAccepted = document.getElementById('mobile-frame-call-accepted');
    callPopup.style.display = 'none';
    mobileFrame.style.display = 'none';
    mobileFrameIncomingCall.style.display = 'none';
    mobileFrameCallAccepted.style.display = 'block';
}

function endCall() {
    const callPopup = document.getElementById('call-popup');
    const mobileFrame = document.getElementById('mobile-frame');
    const mobileFrameIncomingCall = document.getElementById('mobile-frame-incoming-call');
    const mobileFrameCallAccepted = document.getElementById('mobile-frame-call-accepted');
    callPopup.style.display = 'none';
    mobileFrame.style.display = 'block';
    mobileFrameIncomingCall.style.display = 'none';
    mobileFrameCallAccepted.style.display = 'none';
}

function toggleSettings() {
    const settingsMenu = document.getElementById('settings-menu');
    settingsMenu.style.display = settingsMenu.style.display === "none" ? 'inline-flex' : 'none';
}

function goToIndex() {
    window.location.href = "/index.html"
}

function flightModeOn() {
    const flightModeOnButton = document.getElementById('flight-mode-on');
    const flightModeOffButton = document.getElementById('flight-mode-off');
    flightModeOnButton.style.color = 'rgba(0, 0, 0, 1)';
    flightModeOffButton.style.color = 'rgba(0, 0, 0, 0.30)';
}

function flightModeOff() {
    const flightModeOnButton = document.getElementById('flight-mode-on');
    const flightModeOffButton = document.getElementById('flight-mode-off');
    flightModeOnButton.style.color = 'rgba(0, 0, 0, 0.30)';
    flightModeOffButton.style.color = 'rgba(0, 0, 0, 1)';
}


function increaseNumberAnimation(elementId, currentNumber, endNumber, speed = 10) {
    const element = document.getElementById(elementId)
    
    if(!element) return
    
    const animationRunning = JSON.parse(element.dataset.animationRunning ?? false)
    
    if(animationRunning) return
    
    element.dataset.animationRunning = true
    
    incNbrRec(currentNumber, endNumber, element, speed)
}

function incNbrRec(currentNumber, endNumber, element, speed) {
    if (currentNumber <= endNumber) {
    element.innerHTML = formatNumber(currentNumber)
    setTimeout(function() {
        incNbrRec(currentNumber + 1000, endNumber, element, speed)
    }, speed)
    } else {
    element.dataset.animationRunning = false
    }
}

function decreaseNumberAnimation(elementId, currentNumber, endNumber, speed = 10) {
    const element = document.getElementById(elementId)
    
    if(!element) return
    
    const animationRunning = JSON.parse(element.dataset.animationRunning ?? false)
    
    if(animationRunning) return
    
    element.dataset.animationRunning = true
    
    decNbrRec(currentNumber, endNumber, element, speed)
}

function decNbrRec(currentNumber, endNumber, element, speed) {
    if (currentNumber >= endNumber) {
    element.innerHTML = formatNumber(currentNumber)
    setTimeout(function() {
        decNbrRec(currentNumber - 1000, endNumber, element, speed)
    }, speed)
    } else {
    element.dataset.animationRunning = false
    }
}

function formatNumber(num) {
    let numStr = num.toString();
    let lastThree = numStr.slice(-3);
    let otherNumbers = numStr.slice(0, -3);
    if (otherNumbers !== '') {
        lastThree = ',' + lastThree;
    }
    let result = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return result;
}
