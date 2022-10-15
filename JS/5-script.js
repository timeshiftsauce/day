// 获取需要操作的元素
// 左边主体轮播大图
let big_box = document.querySelector('.big-box')
// 右边略缩图
let imgs = document.getElementsByClassName('img')
// 定时器
let timer = null
// 图片序号
let index = 0


// 方法部分
// 重置函数（初始化）
function reset() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].className = 'img'
    // 循化遍历里面的img标签把class初始化
  }
}
// 选中部分
function selected() {
  reset()
  imgs[index].className = 'img active'
}
// 启动轮播函数
function play() {
  timer = setInterval(function () {
    selected()
    big_box.style.backgroundImage = 'url(./img/5-img/bg' + index + '.webp)'
    index++
    if (index == 5) {
      // 当轮播到最后一个时切换回第一个
      index = 0
    }
  }, 1500)
}
for (let i = 0; i < imgs.length; i++) {
  // 为每个小略缩图绑定悬停事件
  imgs[i].onmousemove = function () {
    big_box.style.backgroundImage = 'url(./img/5-img/bg' + i + '.webp)'
    reset()
    clearInterval(timer)
    index = i + 1
    if (index == 5) {
      // 当轮播到最后一个时切换回第一个
      index = 0
    }
    play()
  }
}
play()