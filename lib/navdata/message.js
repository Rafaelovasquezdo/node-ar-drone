var exports = module.exports = function createMessage() {
  return new Message();
};

exports.Message = Message;
function Message() {
  this.sequenceNumber = undefined;
  this.batteryLevel = undefined;
  this.controlState = undefined;
  this.flyState = undefined;
  this.altitude = undefined;
  this.wifiQuality = undefined;
  this.time = undefined;

  this.orientation = {
    frontBack: undefined,
    leftRight: undefined,
    clockSpin: undefined,
  };

  this.speed = {
    frontBack: undefined,
    leftRight: undefined,
    upDown: undefined,
  };

  this.status = {
    flying: undefined,
    videoEnabled: undefined,
    visionEnabled: undefined,
    controlAlgorithm: undefined,
    altitudeControlAlgorithm: undefined,
    startButtonState: undefined,
    controlCommandAck: undefined,
    cameraReady: undefined,
    travellingEnabled: undefined,
    usbReady: undefined,
    navdataDemo: undefined,
    navdataBootstrap: undefined,
    motorProblem: undefined,
    communicationLost: undefined,
    softwareFault: undefined,
    lowBattery: undefined,
    userEmergencyLanding: undefined,
    timerElapsed: undefined,
    magnometerNeedsCalibration: undefined,
    anglesOutOfRange: undefined,
    tooMuchWind: undefined,
    ultrasonicSensorDeaf: undefined,
    cutoutDetected: undefined,
    picVersionNumberOk: undefined,
    atCodecThreadOn: undefined,
    navdataThreadOn: undefined,
    videoThreadOn: undefined,
    acquisitionThreadOn: undefined,
    controlWatchdogDelay: undefined,
    adcWatchdogDelay: undefined,
    comWatchdogProblem: undefined,
    emergencyLanding: undefined,
  };

  this.options = [];
  this.received = undefined;
}