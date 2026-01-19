radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        AVANCE()
    }
    if (receivedNumber == 2) {
        RECULE()
    }
    if (receivedNumber == 3) {
        STOP()
    }
    if (receivedNumber == 4) {
        DROITE()
    }
    if (receivedNumber == 5) {
        GAUCHE()
    }
})
function DROITE () {
    // motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, 170)
    // motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 170)
    robobit.rotate(RBRobotDirection.Right, 60)
}
function GAUCHE () {
    // motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 170)
    // motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 170)
    robobit.rotate(RBRobotDirection.Left, 60)
}
function STOP () {
    // motor.motorStopAll()
    robobit.stop(RBStopMode.Coast)
}
function RECULE () {
    // motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, 170)
    // motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 170)
    robobit.go(RBDirection.Reverse, 60)
}
function AVANCE () {
    // motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 170)
    // motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 170)
    robobit.go(RBDirection.Forward, 60)
}
radio.setGroup(82)
robobit.select_model(RBModel.Mk3)
