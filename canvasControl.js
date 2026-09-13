function drawUpg(){
    for(let i=0;i<upg.length;i++){
        if(upg[i].unlock==false) {
            let flag=0;
            for(let j of upg[i].pre){
                if(upg[j].nowL<upg[i].prel[j]){flag=1;break;}
            }
            if(flag==0){
                upg[i].unlock=true
            }
        }
        else{
            let a=upg[i].pos;
            ctx.fillStyle=upg[i].color;
            ctx.strokeStyle=upg[i].color;
            ctx.beginPath();
            ctx.fillRect(a[0]-borderWide+dx,a[1]-borderWide+dy,borderWide*2,borderWide*2);
            ctx.fill();
            if(upg[i].nowL==0)ctx.fillStyle="#fff";
            else if(upg[i].nowL<upg[i].maxL)ctx.fillStyle="#707";
            else ctx.fillStyle="#ca3";
            ctx.fillRect(a[0]-innerWide+dx,a[1]-innerWide+dy,innerWide*2,innerWide*2);
            ctx.fillStyle="#fff";
            ctx.fillText(upg[i].nowL.toString(),a[0]+dx+innerWide*2,a[1]+dy+innerWide*2+4);
            for(let j of upg[i].pre){
                ctx.strokeStyle="#fff"
                ctx.beginPath();
                ctx.moveTo(upg[i].pos[0]+dx,upg[i].pos[1]+dy);
                ctx.lineTo(upg[j].pos[0]+dx,upg[j].pos[1]+dy);
                ctx.stroke();
            }
        }
    }
}
function drawBg(){
    ctx.fillStyle='#000';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.strokeStyle='#fff';
    ctx.strokeRect(2,2,canvas.width-4,canvas.height-4);


}
function drawText(){
    ctx.fillStyle='#fff';
    ctx.font="normal 28px 宋体";
    ctx.fillText(`你有${res[0].round()}焦耳能量`, canvas.width/3, innerWide*2);
    ctx.fill();

    for(let i=0;i<upg.length;i++){
        let a=upg[i];
        if(inSquare(mouseX,mouseY,a.pos[0]-borderWide+dx,a.pos[1]-borderWide+dy,
            a.pos[0]+borderWide+dx,a.pos[1]+borderWide+dy)){
            ctx.fillStyle='#fc0';
            ctx.fillRect(mouseX,mouseY,300,200);
            ctx.fillStyle='#000';
            ctx.fillRect(8+mouseX,8+mouseY,300-16,200-16);
            ctx.strokeStyle='#fc0';
            ctx.beginPath();
            ctx.moveTo(mouseX,mouseY+60);
            ctx.lineTo(mouseX+300,mouseY+60);
            ctx.stroke();
            ctx.fillStyle='#fc0';
            ctx.fillText(`Upgrade${i+1}:${upg[i].title}(${upg[i].nowL}/${upg[i].maxL})`,
                mouseX+20, mouseY+40);
            ctx.font="normal 18px 宋体";
            ctx.fillText(`${upg[i].text}`, mouseX+20, mouseY+100);
            ctx.fillText(`cost:${upg[i].need()}`, mouseX+20, mouseY+160);
            ctx.font="normal 28px 宋体";
        }
    }
}
function draw(){
    drawBg()
    drawUpg()
    drawText()
}