let E=Decimal
let canvas=document.getElementById("cav");
let res=[{text:`你有%d焦耳能量`,nw:E(1),
x:50,y:50}]
let upg = [
    {
        need:()=>{return E(0);},
        pos:[0*50,0*50],
        nowL:0,
        maxL:1,
        pre:[],
        preL:[],
        color:"#9f3",
        unlock:true,
        title:"棍母",
        text:"+1 res1/s"
    },
    {
        need:()=>{return E(10);},
        pos:[1*50,0*50],
        nowL:0,
        maxL:5,
        pre:[0],
        preL:[1],
        color:"#4cf",
        unlock:false,
        title:"棍子",
        text:"+2 res1/s 每级"
    },
    {
        need:()=>{return E(100);},
        pos:[2*50,0*50],
        nowL:0,
        maxL:3,
        pre:[1],
        preL:[3],
        color:"#f49",
        unlock:false,
        title:"巨棍",
        text:"res1产出 ×1.5 每级"
    },
    {
        need:()=>{return E(1000);},
        pos:[0*50,1*50],
        nowL:0,
        maxL:2,
        pre:[2],
        preL:[1],
        color:"#fa3",
        unlock:false,
        title:"棍核",
        text:"所有产出加成额外×1.25每级"
    }
]



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