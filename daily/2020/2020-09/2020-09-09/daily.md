# flex

flex :flex-grow flex-shrink flex-basis

①.flex-grow 剩余空间索取

默认值为 0，不索取

eg:父元素 400，子元素 A 为 100px，B 为 200px.则剩余空间为 100

此时 A 的 flex-grow 为 1，B 为 2，

则 A=100px+1001/3; B=200px+1002/3

②.flex-shrink 子元素总宽度大于复制元素如何缩小

父 400px,A 200px B 300px

AB 总宽度超出父元素 100px;

如果 A 不减少，则 flex-shrink ：0,B 减少；

②,flex-basis

该属性用来设置元素的宽度，当然 width 也可以用来设置元素的宽度，如果设置了 width 和 flex-basis，那么 flex-basis 会覆盖 width 值。
