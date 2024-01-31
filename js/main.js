'use strict'

var gBallSize = 100

function onBallClick(elBall) {
    gBallSize = (gBallSize >= 400)? 100 : gBallSize + getRandomInt(20,61)
    document.querySelector(':root').style.setProperty('--ball-size', `${gBallSize}px`)
    elBall.style.backgroundColor = getRandomColor()
    elBall.innerHTML = `${gBallSize}`
}