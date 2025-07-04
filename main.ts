function shuryo (数値: number) {
    strip.showColor(数値)
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(500)
}
let p1 = 0
let p0 = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P2, 20, NeoPixelMode.RGB)
let goal = strip.length() - 1
strip.setBrightness(32)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
let colora = neopixel.colors(NeoPixelColors.Red)
let colorb = neopixel.colors(NeoPixelColors.Green)
let colorboth = neopixel.colors(NeoPixelColors.Yellow)
let ichia = 0
let ichib = 0
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
let oldp0 = 1
let oldp1 = 1
basic.forever(function () {
    p0 = pins.digitalReadPin(DigitalPin.P0)
    p1 = pins.digitalReadPin(DigitalPin.P1)
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
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    if (ichia == ichib) {
        strip.setPixelColor(ichia, colorboth)
    } else {
        strip.setPixelColor(ichia, colora)
        strip.setPixelColor(ichib, colorb)
    }
    strip.show()
})
