input.onButtonPressed(Button.A, function () {
    random = randint(0, 3)
    if (random == 1) {
        basic.clearScreen()
        basic.showString("TRUTH")
    } else if (random == 0) {
        basic.clearScreen()
        basic.showString("DARE")
    } else {
        basic.clearScreen()
        basic.showString("skip")
    }
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
})
let random = 0
basic.showLeds(`
    . . # . .
    . # # # .
    # # # # #
    . . # . .
    . . # . .
    `)
basic.forever(function () {
	
})
