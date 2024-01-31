'use strict'

var gBallSize = 100

function onBallClick(elBall) {
    gBallSize = (gBallSize >= 400)? 100 : gBallSize + 50
    document.querySelector(':root').style.setProperty('--ball-size', `${gBallSize}px`)
    elBall.innerHTML = `${gBallSize}`
}