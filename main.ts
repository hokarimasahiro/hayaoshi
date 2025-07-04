input.onButtonPressed(Button.A, function () {
    shokika()
    basic.showNumber(3)
    basic.pause(1000)
    basic.showNumber(2)
    basic.pause(1000)
    basic.showNumber(1)
    basic.pause(1000)
    mode = 1
    basic.showNumber(0)
    basic.pause(100)
    basic.clearScreen()
})
function shuryo (数値: number) {
    while (mode == 1) {
        strip.showColor(数値)
        basic.pause(500)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(500)
    }
}
function shokika () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    mode = 0
    ichia = 10
    ichib = 10
    oldp0 = 1
    oldp1 = 1
}
let p1 = 0
let p0 = 0
let oldp1 = 0
let oldp0 = 0
let ichib = 0
let ichia = 0
let mode = 0
let strip: neopixel.Strip = null
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
strip = neopixel.create(DigitalPin.P2, 144, NeoPixelMode.RGB)
let goal = strip.length() - 1
strip.setBrightness(32)
let colora = neopixel.colors(NeoPixelColors.Red)
let colorb = neopixel.colors(NeoPixelColors.Green)
let colorboth = neopixel.colors(NeoPixelColors.Yellow)
shokika()
basic.forever(function () {
    p0 = pins.digitalReadPin(DigitalPin.P0)
    p1 = pins.digitalReadPin(DigitalPin.P1)
    if (mode == 1) {
        if (p0 != oldp0) {
            if (p0 == 0) {
                ichia += 1
            }
            oldp0 = p0
        }
        if (p1 != oldp1) {
            if (p1 == 0) {
                ichib += 1
            }
            oldp1 = p1
        }
        if (ichia >= goal || ichib >= goal) {
            if (ichia == ichib) {
                shuryo(colorboth)
            } else if (ichia >= goal) {
                shuryo(colora)
            } else {
                shuryo(colorb)
            }
        }
    } else {
        if (p0 == 0) {
            ichia = 0
        }
        if (p1 == 0) {
            ichib = 0
        }
    }
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    if (ichia == ichib) {
        strip.setPixelColor(ichia, colorboth)
    } else {
        strip.setPixelColor(ichia, colora)
        strip.setPixelColor(ichib, colorb)
    }
    strip.show()
})
