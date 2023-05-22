canvas = document.querySelector('#canvas')

ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.fillStyle = "#ff0000"
ctx.arc(150,75,10,0,2*Math.PI,false)
ctx.fill()

ctx.lineWidth = 5
ctx.strokeRect(0,0,300,150)

