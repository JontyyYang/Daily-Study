// code-1

// 传入一个函数，返回一个函数
const  getSingle =  fn => {

    let res;

    return (arg) => {
        // 利用闭包的性质，保存res的状态
        // 第一次执行的时候， res执行createPopUp，返回新建的div，res赋值为这个函数，也就是  第一次 getSingle（createPopUp）的时候并没有执行
        // 第二次执行的时候， 因为res已经存在了。 所以直接返回这个res，也就是 其它地方调用这个函数，并不会新建div，而是返回同一个div
        return res || (res = fn.apply(this, arg));
    }
}

const  createPopup = () => {
    const div = document.createElement('div');
    div.innerHTML = "Login window";
    div.style.display = "none"; 
    document.body.appendChild(div);
    // 这里返回这个div 是为了 下面的pop.style.display设置属性
    return div;
}

const createLoginPopup = getSingle(createPopup);  


// 下面两个点击就是为了执行这个函数
document.querySelector('#testSingle').addEventListener('click', ()=> {
    const pop = createLoginPopup();
    pop.style.display = "block";
})
document.querySelector('#testSingle2').addEventListener('click', ()=> {
    const pop = createLoginPopup();
    pop.style.display = "block";
})