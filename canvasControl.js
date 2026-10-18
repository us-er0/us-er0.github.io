function drawUpg(){
    for(let i=0;i<upg.length;i++){
        if(upg[i].unlock===false) {
            let flag=0;
            for(let j in upg[i].pre){
                if(upg[upg[i].pre[j]].nowL<upg[i].prel[j]){flag=1;break;}
            }
            if(flag===0){
                upg[i].unlock=true
            }
        }
        else{
            let a=upg[i].pos;
            ctx.fillStyle=upg[i].color;
            ctx.strokeStyle=upg[i].color;
            ctx.beginPath();
            ctx.fillRect((a[0]-borderWide)*xc+dx,(a[1]-borderWide)*yc+dy,borderWide*2*xc,borderWide*2*yc);
            ctx.fill();
            if(upg[i].nowL===0)ctx.fillStyle="#fff";
            else if(upg[i].nowL<upg[i].maxL)ctx.fillStyle="#707";
            else ctx.fillStyle="#ca3";
            ctx.fillRect((a[0]-innerWide)*xc+dx,(a[1]-innerWide)*yc+dy,innerWide*2*xc,innerWide*2*yc);
            ctx.fillStyle="#fff";
            ctx.fillText(upg[i].nowL.toString(),a[0]*xc+dx+innerWide*2*xc,a[1]*yc+dy+innerWide*2*yc+4);
            for(let j of upg[i].pre){
                ctx.strokeStyle="#fff"
                ctx.beginPath();
                ctx.moveTo(a[0]*xc+dx,a[1]*yc+dy);
                ctx.lineTo(upg[j].pos[0]*xc+dx,upg[j].pos[1]*yc+dy);
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
        if(inSquare(mouseX,mouseY,(a.pos[0]-borderWide)*xc+dx,(a.pos[1]-borderWide)*yc+dy,
            (a.pos[0]+borderWide)*xc+dx,(a.pos[1]+borderWide)*yc+dy)&&a.unlock){
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
            ctx.fillText(`cost:${upg[i].nowL<upg[i].maxL?upg[i].need():"MAX"}`, mouseX+20, mouseY+160);
            ctx.font="normal 28px 宋体";
        }
    }
}
function draw(){
    drawBg()
    drawUpg()
    drawText()
}
