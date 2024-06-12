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
    smsPopup.style.display = smsPopup.style.display === "none" ? 'inline-flex' : 'none';
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