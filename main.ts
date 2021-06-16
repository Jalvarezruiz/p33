input.onButtonPressed(Button.A, function () {
    dino.change(LedSpriteProperty.Y, -1)
    basic.pause(500)
    dino.change(LedSpriteProperty.Y, 1)
})
let dino: game.LedSprite = null
dino = game.createSprite(1, 3)
let cactus = game.createSprite(4, 3)
game.setScore(0)
basic.forever(function () {
    if (cactus.get(LedSpriteProperty.X) == 0) {
        game.addScore(1)
        cactus.set(LedSpriteProperty.X, 4)
    } else {
        cactus.change(LedSpriteProperty.X, -1)
    }
    if (cactus.get(LedSpriteProperty.X) == dino.get(LedSpriteProperty.X) && cactus.get(LedSpriteProperty.Y) == dino.get(LedSpriteProperty.Y)) {
        game.gameOver()
    }
    basic.pause(500)
})
