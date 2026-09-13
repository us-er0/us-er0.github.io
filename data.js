let E=Decimal
let canvas=document.getElementById("cav");
let res=[E(1)]
let upg=[
    {
        title:"太阳",
        text:"每秒获取1基础能量",
        need:function(){return E(1)},
        maxL:1,
        pos:[0,0],
        nowL:0,
        color:"#fc0",
        pre:[],
        prel:[], // 无前置，空数组
        unlock:true
    },
    {
        title:"叶绿体",
        text:"太阳产出 × 当前等级平方",
        need:function(){return E(20).add(E(5).mul(E(this.nowL)))},
        maxL:5,
        pos:[0,500],
        nowL:0,
        color:"#4c0",
        pre:[0],       // 依赖太阳(下标0)
        prel:[1],       // 太阳需要≥1级才能解锁
        unlock:false
    },
    {
        title:"储能电池",
        text:"全局能量获取倍率 +0.5/级",
        need:function(){return E(100).mul(E(this.nowL+1))},
        maxL:10,
        pos:[300,0],
        nowL:0,
        color:"#0cf",
        pre:[1],        // 依赖叶绿体(下标1)
        prel:[1],        // 叶绿体≥1级解锁
        unlock:false
    },
    {
        title:"光能阵列",
        text:"基础太阳产能 +3/级",
        need:function(){return E(500).mul(E(this.nowL).pow(2))},
        maxL:8,
        pos:[300,500],
        nowL:0,
        color:"#f80",
        pre:[2],        // 依赖储能电池(下标2)
        prel:[2],        // 储能电池≥2级解锁
        unlock:false
    },
    {
        title:"聚光镜",
        text:"光能阵列效果翻倍/级",
        need:function(){return E(3000).mul(E(this.nowL))},
        maxL:6,
        pos:[600,0],
        nowL:0,
        color:"#ff6",
        pre:[3],
        prel:[3], // 光能阵列≥3级解锁
        unlock:false
    }
]
const ctx=canvas.getContext('2d');
let dx=0,dy=0;
let npx=0,npy=0;
let mousePressed = false;
let mouseMoved = false;
let lastTime=performance.now();
let dt=0;
let mouseX=0,mouseY=0;
let borderWide=17,innerWide=15
