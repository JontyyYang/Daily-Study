对于一个 promise 有三个状态， 分别是

1. pending 未完成

2. reject 失败

3. resolve 成功

两个过渡状态

1. pending -> reject
2. pending -> resolve

对于异步编程来说，状态一旦改变了，就不会再变了，而且对象的状态是不受外界控制的

在 promise 的实例中，

如果状态变为 fulfuilled，则可以返回 resolve 函数，然后作为参数传递到 then 中的成功处理函数中

如果状态变为 rejected，则可以返回 reject 函数， 然后作为参数传递到 then 中的失败处理函数中

但是在 then 方法中， 没有部署好的， resolve 和 reject 函数， 则可以 return resolve 函数，然后作为参数传递到 then 中的成功处理函数中

```JavaScript
Promise.reject('a error')
        .then(res => console.log('res'), err => console.log('err'))
        .then(res => console.log('res'), err => console.log('err'));
```

在上面这个函数中， 是先 reject 的一个错误， 在 then 的第二个 err 函数中处理了，返回了一个新的 promise，但是他并没有 return 一个新的值， 所以返回的就是 undefined。 而对于这个，直接进入了 resolve 中
