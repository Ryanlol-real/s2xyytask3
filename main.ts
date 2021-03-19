namespace SpriteKind {
    export const Minus = SpriteKind.create()
    export const Add = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Add, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Minus, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
function Level2 () {
    scene.setBackgroundColor(4)
    projectile = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    game.showLongText("Which of the following is not subject of STEM?     (Type the number)        1: Science                                        2: Techonology                                    3: Chinese", DialogLayout.Full)
    if (game.askForNumber("", 1) == 3) {
        game.over(true, effects.bubbles)
    } else {
        game.over(false)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 5 a a 2 . . . . . . . . . 
        . . 5 5 a 2 2 2 2 4 4 4 . . . . 
        . . . 5 a a 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spacePlane, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Add, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Minus, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    info.changeScoreBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    info.changeScoreBy(0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let Prisma_Bogey: Sprite = null
let bogey: Sprite = null
let CandyCorn_Bogey: Sprite = null
let myDart: Sprite = null
let projectile: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ....82..........................
    ....111.....99999...............
    ....2222...9999999..............
    .444f866666699999666............
    444f6666666666666666666.........
    .44f68886666666666666666........
    ..44f88.....88886666666.........
    ...........8888882..............
    ...........888882...............
    ..........888882................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
spacePlane.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(5)
controller.moveSprite(spacePlane, 200, 200)
game.onUpdateInterval(2000, function () {
    CandyCorn_Bogey = sprites.create(img`
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 5 4 . . . . . . . 
        . . 4 4 . . 4 5 5 5 4 . . 4 4 . . 
        . . 2 2 4 . 4 5 5 5 4 . 4 2 2 . . 
        . . 4 4 2 4 4 5 5 5 4 4 2 4 4 . . 
        . . 2 2 4 2 4 4 4 4 4 2 4 2 2 . . 
        . . 4 4 2 4 4 5 5 5 4 4 2 4 4 . . 
        . . . . 4 2 4 5 5 5 4 2 4 . . . . 
        . . . . . 4 4 5 5 5 4 4 . . . . . 
        . . . . . . . 4 5 4 . . . . . . . 
        . . . . . . . . 4 . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        `, SpriteKind.Add)
    CandyCorn_Bogey.setVelocity(-100, 0)
    CandyCorn_Bogey.setPosition(180, randint(0, 120))
})
game.onUpdateInterval(1000, function () {
    bogey = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 9 9 . . . . . 5 . . . . 
        . . . 9 9 9 9 . . . 5 5 . . . . 
        2 2 2 2 9 9 2 2 2 2 2 f 3 4 . . 
        . . . 2 2 2 5 5 5 2 2 f 4 4 4 . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Minus)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(180, randint(0, 120))
    if (info.score() >= 10) {
        bogey.destroy()
        spacePlane.destroy()
        Prisma_Bogey.destroy()
        CandyCorn_Bogey.destroy()
        Level2()
    }
})
game.onUpdateInterval(500, function () {
    Prisma_Bogey = sprites.create(img`
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . f . f . f . f . f . . . . 
        . . . . f f f f f f f f f . . . . 
        . . . . . f f f f f f f . . . . . 
        . . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . f . . . a a a a a a a . . . f . 
        . b f f f a 2 2 2 2 2 a f f f b . 
        . f b b b a 2 8 8 8 2 a b b b f . 
        . b f f f a 2 8 1 8 2 a f f f b . 
        . f b b b a 2 8 8 8 2 a b b b f . 
        . . f f f a 2 2 2 2 2 a f f f . . 
        . . . . . a a a a a a a . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Prisma_Bogey.setVelocity(-100, 0)
    Prisma_Bogey.setPosition(180, randint(0, 120))
})
