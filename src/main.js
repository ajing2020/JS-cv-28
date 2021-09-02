let html = document.querySelector('#html')
let style = document.querySelector('#style')

let string = `
/*你好，我是阿景，
*接下来我要准备展示一些
*好玩的动态代码
*首先我们需要一个div盒子
*/
#div1{
    width:200px;
    height:200px;
    border:1px solid red;
}
/*接下来我们要把它变成一个八卦图
*这你可得看仔细点啊
*首先div会被我变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,.5);
    border:none;
}
/*众所周知八卦是阴阳形成
*一黑一白
*/
#div1{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个关键点*/
#div1::before{
    width:100px;
    height:100px;
    background: radial-gradient(circle, rgba(255,255,255,1) 19%, rgba(0,0,0,1) 20%);
    border-radius:50%;
    left:50%;
    top:0;
    transform:translateX(-50%);
}
#div1::after{
    width:100px;
    height:100px;
    background: radial-gradient(circle, rgba(0,0,0,1) 19%, rgba(255,255,255,1) 20%);
    border-radius:50%;
    left:50%;
    bottom:0;
    transform:translateX(-50%);
}
` ;
let string2 = '';
console.log(string.length);
let n = 0

let step = () => {
    setTimeout(() => {
        //如果是回车直接注入回车，如果不是就照搬原本字符串
        //如果是一个空格的话就注入空格
        if (string[n] === '\n') {
            string2 += '<br>'
        } else if (string[n] === ' ') {
            string2 += '&nbsp;'
        } else {
            string2 += string[n];
        }

        //注入元素
        html.innerHTML = string2
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0,9999) //让页面滚动
        html.scrollTo(0,9999) //让页面滚动
        if (n < string.length - 1) {
            // 如果n不是最后一个就继续
            n += 1;
            step();
        }
    }, 10)
}

step();