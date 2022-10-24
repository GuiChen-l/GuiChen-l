let starsNum = 800;
let distance = 900;
let speed = 0.2;

const stars = document.getElementById('stars');

let content = '';
for (let i = 0; i < starsNum; i++) {
  content += '<div class="star"></div>';
}

stars.innerHTML = content;

for (let i = 0; i < starsNum; i++) {
  let itemSpeed = speed + Math.random() * 1;
  let itemDistance = distance + Math.random() * 300;

  stars.children[i].style.transformOrigin = `0 0 ${itemDistance.toFixed()}px`;
  stars.children[i].style.transform = `
    translate3d(0, 0, -${itemDistance}px)
    rotateY(${Math.random() * 360}deg)
    rotateX(${Math.random() * -50}deg)
    scale(${itemSpeed},${itemSpeed})`;
}

// 测试通过innerHTML的方式添加div节点后加不上style
// 找到bug, 不是写不上, 是distance的random没写括号, 我是傻比
