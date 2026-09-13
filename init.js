function tick(){
    dt=performance.now()-lastTime
    lastTime=performance.now()
    res[0]=res[0].add(getRecA().mul(E(dt).div(E(1000))))
    draw()
    requestAnimationFrame(tick)
}
function init(){
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener("mousedown",(event)=>{
        npx=event.clientX;
        npy=event.clientY;
        mousePressed = true;
        mouseMoved = false;
    });
    canvas.addEventListener("mousemove",(event)=>{
        if(mousePressed){
            dx+=(event.clientX-npx);
            dy+=(event.clientY-npy);
            npx=event.clientX;
            npy=event.clientY;
            mouseMoved = true;
        }
    });
    canvas.addEventListener("mouseup",(event)=>{
        mousePressed = false;
        if(!mouseMoved){
            let flag1=false
            if(inSquare(event.clientX,event.clientY,0,0,50,50)){
                alert("我是傻逼")
            }
            for(let i=0;i<upg.length;i++){
                let a=upg[i];
                if(inSquare(event.clientX,event.clientY,a.pos[0]-borderWide+dx,a.pos[1]-borderWide+dy,
                    a.pos[0]+borderWide+dx,a.pos[1]+borderWide+dy)){
                    flag1=true
                    let flag=false;
                    if(a.need().gt(res[0])){flag=true;break;}
                    if(upg[i].nowL==upg[i].maxL){flag=true;}
                    if(!flag){
                        res[0]=res[0].sub(a.need());
                        upg[i].nowL++
                    }
                }
            }
            if(!flag1){
                res[0]=res[0].add(E(1))
            }
        }
        mouseMoved = false;
    })
    canvas.addEventListener("mousemove",(event)=>{
        mouseX=event.clientX;
        mouseY=event.clientY;
    })
    tick()
    resizeCanvas()
}
init()