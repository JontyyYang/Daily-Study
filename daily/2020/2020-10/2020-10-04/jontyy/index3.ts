const res = `
1. 为什么cookie会被劫持， 而token不会
  - cookie是浏览器请求的时候，  如果前端设置允许携带cookie的时候，自动带过去的 【credentials】这个属性的是request的只读属性， 标识用户代理是否应该在跨域的情况下，把cookie带过去  有三个值， 分别是omit， 从不发送， same-origin，同源才发送， include， 不管是不是跨域， 都会发送
  - token是后端在一些需要标识的情况下生成返回的， 如果我不塞到cookie里面他是不会自己传递的， 所以劫持不到
  - token主要是防止csrf 劫持 cookie的

2. 解决cookie劫持
  - 后端设置cookie的时候增加httpOnly， 这样的话，只能在传递的时候带过去， 其余方法获取不了
  - 增加其他方式的校验信息 ，比如ip地址，其余人登录的时候， ip地址不符合，  【比如a在南京， 截取了上海的b的cookie，但是登录服务器还是在南京呀， 所以ip地址不符合用户习惯，拦截掉】
  - 
3. https://www.cnblogs.com/itsuibi/p/10752868.html
   https://segmentfault.com/a/1190000014527692
`;

console.log(res);
export {};
