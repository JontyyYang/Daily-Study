**question**

v-if、v-show、v-html 的区别

**answer**

1. v-if 会调用 addIfCondition 方法， 生成 vNode 的时候会忽略对应节点，render 的时候就不会渲染
2. v-show 会生成 vNode， render 的时候也会渲染成真实节点， 但是在 render 过程中会在节点的属性中修改 show 的值，应该就是 visibility 的值
3. v-html 会移出节点下的所有节点，调用 html 方法，调用 addProp 添加 innerHTML 属性

**question**

watch 和 computed 的区别

**answer**

功能上：computed 是计算属性， 是依赖其他的属性计算生成的。watch 是监听一个值的变化，然后执行对应的函数

使用上：computed 中的函数必须要有 return 返回，而且只有使用的时候，才会计算， watch 的回调中会传入监听属性的新旧值，通过这两个值的变化做一些操作，【不一定要对这个值操作】

性能上： computed 依赖的属性没有变化时，那么调用当前的函数会从缓存中读取，而 watch 每次监听的值变化的时候都要执行回调

场景上：computed 是当一个属性收多个属性影响，而 watch 是一个属性影响多个属性。

Watch
    watch 用于观察和监听页面上的 vue 实例，当你需要在数据变化响应时，执行异步操作，或高性能消耗的操作，那么 watch 为最佳选择

computed
     可以关联多个实时计算的对象，当这些对象中的其中一个改变时都会触发这个属性
     具有缓存能力，所以只有当数据再次改变时才会重新渲染，否则就会直接拿取缓存中的数据。
