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

当一个 Promise 完成（fulfilled）或者失败（rejected）时，返回函数将被异步调用（由当前的线程循环来调度完成）。具体的返回值依据以下规则返回。如果 then 中的回调函数：

返回了一个值，那么 then 返回的 Promise 将会成为接受状态，并且将返回的值作为接受状态的回调函数的参数值。
没有返回任何值，那么 then 返回的 Promise 将会成为接受状态，并且该接受状态的回调函数的参数值为 undefined。
抛出一个错误，那么 then 返回的 Promise 将会成为拒绝状态，并且将抛出的错误作为拒绝状态的回调函数的参数值。
返回一个已经是接受状态的 Promise，那么 then 返回的 Promise 也会成为接受状态，并且将那个 Promise 的接受状态的回调函数的参数值作为该被返回的 Promise 的接受状态回调函数的参数值。
返回一个已经是拒绝状态的 Promise，那么 then 返回的 Promise 也会成为拒绝状态，并且将那个 Promise 的拒绝状态的回调函数的参数值作为该被返回的 Promise 的拒绝状态回调函数的参数值。
返回一个未定状态（pending）的 Promise，那么 then 返回 Promise 的状态也是未定的，并且它的终态与那个 Promise 的终态相同；同时，它变为终态时调用的回调函数参数与那个 Promise 变为终态时的回调函数的参数是相同的。
