canvas = document.querySelector('#canvas')

canvas.style.background = "darkolivegreen"

ctx = canvas.getContext('2d')

let ballx=150,bally=75,ballrad=10
let ballvx=4,ballvy=8
let boxx=0,boxy=0,box_tamx=300,box_tamy=150
let boxboundR=box_tamx+boxx-ballrad
let boxboundB=box_tamy+boxy-ballrad
let boxboundL=boxx+ballrad
let boxboundT=boxy+ballrad

let button = document.querySelector('#but_change')
button.addEventListener('click',change)
let new_vx = Number((document.getElementsByTagName('input')[0]).value)
let new_vy = Number((document.getElementsByTagName('input')[1]).value)

ctx.beginPath()
ctx.fillStyle = "rgb(255,0,0)"
ctx.arc(ballx,bally,ballrad,0,2*Math.PI,false)
ctx.fill()

ctx.lineWidth = ballrad
ctx.strokeRect(boxx,boxy,box_tamx,box_tamy)

function init(){
    move_ball()
    setInterval(move_ball,100)
}

function move_ball(){
    ctx.clearRect(boxx,boxy,box_tamx,box_tamy)
    move_and_check()
    ctx.beginPath()
    ctx.arc(ballx,bally,ballrad,0,2*Math.PI,false)
    ctx.fill()
    ctx.strokeRect(boxx,boxy,box_tamx,box_tamy)
}

function move_and_check(){
    let not_ballx = ballx + ballvx
    let not_bally = bally + ballvy
    if(not_ballx > boxboundR){
        ballvx = -ballvx
        not_ballx = boxboundR
    }
    if(not_ballx > boxboundL){
        ballvx = -ballvx
        not_ballx = boxboundL
    }
    if(not_bally > boxboundB){
        ballvy = -ballvy
        not_bally = boxboundB
    }
    if(not_bally > boxboundT){
        ballvy = -ballvy
        not_bally = boxboundT
    }
    ballx = not_ballx
    bally = not_bally
}

function change(){
    ballvx = new_vx
    ballvy = new_vy
    alert('Teste.')
}