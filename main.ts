input.onButtonPressed(Button.A, function () {
    shokika()
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    watchfont.showIcon(
    "11110",
    "00010",
    "00100",
    "10010",
    "01100"
    )
    basic.pause(1000)
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    watchfont.showIcon(
    "11100",
    "00010",
    "01100",
    "10000",
    "11110"
    )
    basic.pause(1000)
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    watchfont.showIcon(
    "00100",
    "01100",
    "00100",
    "00100",
    "01110"
    )
    basic.pause(1000)
    music.play(music.tonePlayable(880, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    mode = 1
    watchfont.showIcon(
    "01100",
    "10010",
    "10010",
    "10010",
    "01100"
    )
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
    oldp1 = 1
    oldp2 = 1
}
let p2 = 0
let p1 = 0
let oldp2 = 0
let oldp1 = 0
let ichib = 0
let ichia = 0
let mode = 0
let strip: neopixel.Strip = null
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
strip = neopixel.create(DigitalPin.P0, 144, NeoPixelMode.RGB)
let goal = strip.length() - 1
strip.setBrightness(32)
let colora = neopixel.colors(NeoPixelColors.Red)
let colorb = neopixel.colors(NeoPixelColors.Green)
let colorboth = neopixel.colors(NeoPixelColors.Yellow)
shokika()
basic.forever(function () {
    p1 = pins.digitalReadPin(DigitalPin.P1)
    p2 = pins.digitalReadPin(DigitalPin.P2)
    if (mode == 1) {
        if (p1 != oldp1) {
            if (p1 == 0) {
                ichia += 1
                if (ichia >= goal - 3) {
                    music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
                }
            }
            oldp1 = p1
        }
        if (p2 != oldp2) {
            if (p2 == 0) {
                ichib += 1
                if (ichib >= goal - 3) {
                    music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
                }
            }
            oldp2 = p2
        }
        if (ichia >= goal || ichib >= goal) {
            music.play(music.tonePlayable(880, music.beat(BeatFraction.Double)), music.PlaybackMode.InBackground)
            if (ichia == ichib) {
                shuryo(colorboth)
            } else if (ichia >= goal) {
                shuryo(colora)
            } else {
                shuryo(colorb)
            }
        }
    } else {
        if (p1 == 0) {
            ichia = 0
        }
        if (p2 == 0) {
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
