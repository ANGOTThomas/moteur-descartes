radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber))
    if (receivedNumber == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        RECULE()
    }
    if (receivedNumber == 2) {
        basic.showLeds(`
            . . # # .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        RECULE()
    }
    if (receivedNumber == 3) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        STOP()
    }
    if (receivedNumber == 4) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        DROITE()
    }
    if (receivedNumber == 5) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        GAUCHE()
    }
})
function DROITE () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 170)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 0)
}
function GAUCHE () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 0)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 170)
}
function AVANCE2 () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 170)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 170)
}
function STOP () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 0)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 0)
}
function RECULE () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 170)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 170)
}
radio.setGroup(82)
