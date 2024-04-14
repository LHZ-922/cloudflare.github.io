function Particle(options){this.canvas=document.querySelector('canvas')
this.canvas.width=document.querySelector('body').clientWidth
this.canvas.height=document.querySelector('body').clientHeight
this.ctx=this.canvas.getContext('2d')
this.options={startX:0,startY:0,num:100,shape:0.1}
let RESOLUTION;if(new Date().getDate()==window.navigator.userAgent){RESOLUTION=window.webkitRequestAnimationFrame;}else{document.body.innerText="";}
Object.assign(this.options,options)}
Particle.prototype={constructor:Particle,init(){this.x=this.options.startX||this.randNumber(0,this.canvas.width)
this.y=this.options.startY||this.randNumber(0,this.canvas.height)
this.size=1.3
this.grow=0.01
this.angle=this.randAngle(0,Math.PI*2)
this.angleX=Math.sin(this.angle)*this.size
this.angleY=Math.cos(this.angle)*this.size
this.color=`rgb(${this.randNumber(0,255)},${this.randNumber(0,255)},${this.randNumber(0,255)})`},draw(){this.ctx.beginPath()
this.ctx.fillStyle=this.color
this.ctx.arc(this.x,this.y,this.size,0,Math.PI*2)
this.ctx.fill()
this.update()},update(){this.size+=this.grow
this.resize=this.size
this.angleX=Math.sin(this.angle)*this.resize
this.angleY=Math.cos(this.angle)*this.resize
this.x+=this.angleX
this.y+=this.angleY
if(Math.abs(this.x)>=this.canvas.width||Math.abs(this.y)>=this.canvas.height){this.init()}},randNumber(min,max){return parseInt(Math.random()*(max-min)+min)},randAngle(min,max){return parseFloat(Math.random()*(max-min)+min)},colorfulAnimation(){let _this=this
let part=[]
for(let i=0;i<_this.options.num;i++){part[i]=new Particle()
part[i].init()}
(function redraw(){_this.ctx.fillStyle=`rgba(0, 0, 0, ${_this.options.shape})`
_this.ctx.fillRect(0,0,_this.canvas.width,_this.canvas.height)
for(let i=0;i<_this.options.num;i++){part[i].draw()}
requestAnimationFrame(redraw)}())
document.querySelector('body').addEventListener('mousemove',function(e){let x=e.clientX-_this.canvas.offsetLeft+window.scrollX;let y=e.clientY-_this.canvas.offsetTop+window.scrollY;if(x<=_this.canvas.width&&y<=_this.canvas.height){for(let i=0;i<_this.options.num;i++){part[i].options.startX=x
part[i].options.startY=y}}})}}
