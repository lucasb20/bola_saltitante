canvas = document.querySelector('#canvas')

ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.fillStyle = "#ff0000"
ctx.arc(100,60,50,0,2*Math.PI,false)
ctx.fill()

ctx.lineWidth = 10
ctx.strokeRect(0,0,200,200)