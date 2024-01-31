'use strict'

var gBallSize = 100

function onBallClick(elBall) {
    gBallSize = (gBallSize >= 400)? 100 : gBallSize + getRandomInt(20,61)
    elBall.style.width = `${gBallSize}px`
    elBall.style.height = `${gBallSize}px`
    elBall.style.backgroundColor = getRandomColor()
    elBall.innerHTML = `${gBallSize}`
}