function tick(){
    dt=performance.now()-lastTime
    lastTime=performance.now()
    for(let i in res){
        res[0].nw=res[0].nw.add(getRec()[i].mul(E(dt).div(E(1000))).mul(E(kg)))
    }
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
            for(let i=0;i<upg.length;i++){
                let a=upg[i];
                if(inSquare(event.clientX,event.clientY,
                    (a.pos[0]-borderWide)*xc+dx,(a.pos[1]-borderWide)*yc+dy,
                    (a.pos[0]+borderWide)*xc+dx,(a.pos[1]+borderWide)*yc+dy)){
                    flag1=true
                    let flag=false;
                    if(a.need().gt(res[0].nw)){flag=true;break;}
                    if(upg[i].nowL===upg[i].maxL){flag=true;}
                    if(!flag){
                        res[0].nw=res[0].nw.sub(a.need());
                        upg[i].nowL++
                    }
                }
            }
            if(!flag1){
                res[0].nw=res[0].nw.add(E(1))
            }
        }
        mouseMoved = false;
    });
    canvas.addEventListener("mousemove",(event)=>{
        mouseX=event.clientX;
        mouseY=event.clientY;
    });
    canvas.addEventListener("wheel",(event)=>{
        event.preventDefault();
        let f=Math.pow(1.2,-(event.deltaY/166.66665649414062));
        let nxc=Math.min(100,Math.max(0.01,xc*f));
        let nyc=Math.min(100,Math.max(0.01,yc*f));
        dx=event.clientX-(event.clientX-dx)*nxc/xc;
        dy=event.clientY-(event.clientY-dy)*nyc/yc;
        xc=nxc;
        yc=nyc;
    });
    tick()
    resizeCanvas()
}
init()