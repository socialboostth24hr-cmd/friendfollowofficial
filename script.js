const reviews = [

"ยอดขึ้นไวมาก งานละเอียดสุดๆ 💖",
"ระบบดูดีมาก เช็คสถานะได้จริง ✨",
"ตอบเร็ว งานไว ประทับใจมาก",
"ยอดขึ้นจริง ร้านนี้แนะนำเลย",
"ระบบดูโปรมาก น่าเชื่อถือ",
"ส่งงานเร็วมากกก 💕",
"มีประกันด้วย ชอบมาก",
"แอดมินตอบไวสุดๆ",
"งานละเอียด ดูแลดี",
"สั่งหลายรอบแล้วไม่ผิดหวัง",
"ยอดขึ้นธรรมชาติมาก",
"แพ็คเกจคุ้มมาก ✨",
"มีหน้าเช็คออเดอร์ด้วย ดูดีมาก",
"งานไวกว่าเดิมเยอะ",
"ชอบระบบติดตามงาน 💖",
"บริการดีมากกก",
"ร้านดูมืออาชีพสุดๆ",
"ตอบไว งานไม่ช้า",
"ราคาดีมากเมื่อเทียบกับคุณภาพ",
"แนะนำร้านนี้เลย ✨"

];

const users = [

"@fx4x***",
"@nx_9***",
"@pxl***",
"@qz8***",
"@lmx***",
"@vxq***",
"@tpx***",
"@f9x***",
"@mrx***",
"@uxz***",
"@kkx***",
"@zpx***",
"@yqv***",
"@txm***",
"@rxx***",
"@p9l***",
"@fqa***",
"@lzm***",
"@mxp***",
"@vtx***"

];

let html = "";

for(let i=0; i<20; i++){

html += `

<div class="reviewCard">

<div class="reviewStars">
★★★★★
</div>

<div class="reviewText">
${reviews[i]}
</div>

<div class="reviewUser">
${users[i]}
</div>

</div>

`;

}

document.getElementById(
"reviewGrid"
).innerHTML = html;

/* LIVE FEED */

const liveData = [

{
name:"fx4x***",
order:"FF-4X2X-98X9",
status:"🩷 ชำระเงินแล้ว",
time:"2 นาทีที่แล้ว"
},

{
name:"nx_9***",
order:"FF-8X1X-21X8",
status:"⚙️ กำลังดำเนินการ",
time:"5 นาทีที่แล้ว"
},

{
name:"pxl***",
order:"FF-7X5X-63X1",
status:"✅ เสร็จงานแล้ว",
time:"8 นาทีที่แล้ว"
},

{
name:"qz8***",
order:"FF-2X8X-77X2",
status:"🩷 รอดำเนินการ",
time:"12 นาทีที่แล้ว"
},

{
name:"lmx***",
order:"FF-5X1X-33X9",
status:"✅ เสร็จงานแล้ว",
time:"15 นาทีที่แล้ว"
}

];

function randomFeed(){

const item =
liveData[
Math.floor(
Math.random() *
liveData.length
)
];

document.getElementById(
"liveText"
).innerHTML =

`
คุณ ${item.name}<br>
${item.order}<br>
${item.status}<br>

<span style="
color:#999;
font-size:12px;
">

${item.time}

</span>
`;

}

randomFeed();

setInterval(
randomFeed,
9000
);

/* FLOAT EFFECT */

const cards =
document.querySelectorAll(
'.reviewCard'
);

cards.forEach((card,index)=>{

card.style.animationDelay =
(index * 0.2) + 's';

});
