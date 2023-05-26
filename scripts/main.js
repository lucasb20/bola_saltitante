canvas = document.querySelector('#canvas')

canvas.style.background = "darkolivegreen"

ctx = canvas.getContext('2d')

const lineWidth = 5

let ballx=150,bally=75,ballrad=2
let ballvx=4,ballvy=8
let boxx=0,boxy=0,box_tamx=300,box_tamy=150
let boxboundR=box_tamx+boxx-lineWidth
let boxboundB=box_tamy+boxy-lineWidth
let boxboundL=boxx+lineWidth
let boxboundT=boxy+lineWidth

let button = document.querySelector('#but_change')
button.addEventListener('click',change)

let new_vx,new_vy

function init(){
    ctx.beginPath()
    ctx.fillStyle = "rgb(255,0,0)"
    ctx.arc(ballx,bally,ballrad,0,2*Math.PI,false)
    ctx.fill()

    ctx.lineWidth = lineWidth
    ctx.strokeRect(boxx,boxy,box_tamx,box_tamy)

    move_ball()
    setInterval(move_ball,50)
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
    if(not_ballx < boxboundL){
        ballvx = -ballvx
        not_ballx = boxboundL
    }
    if(not_bally > boxboundB){
        ballvy = -ballvy
        not_bally = boxboundB
    }
    if(not_bally < boxboundT){
        ballvy = -ballvy
        not_bally = boxboundT
    }
    ballx = not_ballx
    bally = not_bally
}

function change(){
    new_vx = Number((document.getElementsByTagName('input')[0]).value)
    new_vy = Number((document.getElementsByTagName('input')[1]).value)
    
    if(new_vx*ballvx>=0){
        ballvx = new_vx
    }
    else{
        ballvx = -new_vx
    }

    if(new_vy*ballvy>=0){
        ballvy = new_vy
    }
    else{
        ballvy = -new_vy
    }
}