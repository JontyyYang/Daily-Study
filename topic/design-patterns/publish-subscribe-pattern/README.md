### 发布订阅模式

发布订阅模式非常适用于 js 生态系统， 主要在于其核心，es 的实现是由事件驱动的， 在浏览器环境下尤其如此， 因为 don 将事件作为脚本编程的主要 API

在实现代码中，无论是 es 还是 dom 都不会提供核心对象或者方法来创建自定义事件系统。

流行的 js 库，比如 jq。很容易实现发布订阅模式

```JavaScript
// publish
// jquery
$(obj).trigger("channle", [arg1, arg2, arg3])
$(el).trigger("/login",[{username:"test", userData: "test"}])

// subscribe
$(obj).on("channel", [data], fn)
$(el).on("/login", function(el){

})
```

### 实现

感觉是这个样子的

1. 先创建一个对象，这个对象中可以包含对各个端口的监听

```JavaScript
const obj = {
  端口1：【】，
  端口2：【】
}
```

2. 我要监听某个端口的时候， 主要是

```JavaScript
pattern.subscribe("端口名"， 函数)
```

3. 第一步，obj 数组中，存放的就是函数

```JavaScript
const obj = {
  端口1：【函数1， 函数2】
}
```

4. 每个函数其实更具体一点， 是

```javascript
{
  函数：函数，
  token：id
}
```

5. 如此一来， 我每次发布消息， 都是对着这个端口发布的

```JavaScript
pattern.publish(端口， 信息)
```

6. 此时， 我只需要找到 obj 中对应的端口， 然后找到这个端口对应的函数， 将信息作为参数传入，执行即可
7. 这样就实现了，发布订阅

感觉和观察者模式好像呀。。emm
