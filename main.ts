basic.showNumber(4)
radio.setGroup(4)
basic.forever(function () {
    radio.sendValue("x", Math.round(Math.map(joystickbit.getRockerValue(joystickbit.rockerType.X), 0, 1023, 0, 180)))
    radio.sendValue("y", Math.round(Math.map(joystickbit.getRockerValue(joystickbit.rockerType.Y), 0, 1023, 100, -100)))
})
