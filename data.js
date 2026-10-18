let E=Decimal
let canvas=document.getElementById("cav");
let res=[E(1)]
let upg = []

const ctx=canvas.getContext('2d');
let dx=50,dy=50;
let npx=0,npy=0;
let mousePressed = false;
let mouseMoved = false;
let lastTime=performance.now();
let dt=0;
let mouseX=0,mouseY=0;
let borderWide=17,innerWide=15
let kg=1;
let xc=1,yc=1