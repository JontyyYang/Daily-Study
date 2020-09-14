// 抛出一个错误
Promise.reject('a error')
  .then(
    res => console.log('res', res),
    err => {
      console.log('err', err);
      // 返回值与新的promise，当这个返回值是一个普通的值而不是错误的时候，下一个promise的状态自然就是resolve
      return 'a value and change state';

      // 继续抛出错误， 让下一个then捕获
      // throw new Error(err);
    }
  )
  .then(
    // 继续获取， 拿到上面返回的错误值
    res => console.log('res', res),
    err => console.log('err', err)
  );
