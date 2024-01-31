'use strict'

var gBalls = [{ name: 'ball1', size: 100 }, { name: 'ball2', size: 100 }]

function onBallClick(elBall, maxDiameter) {
    var ball = gBalls.find(ball => ball.name === elBall.dataset.name)
    ball.size = (ball.size >= maxDiameter) ? 100 : ball.size + getRandomInt(20, 61)
    elBall.style.width = `${ball.size}px`
    elBall.style.height = `${ball.size}px`
    elBall.style.backgroundColor = getRandomColor()
    elBall.innerHTML = `${ball.size}`
}
