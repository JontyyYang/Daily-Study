emmm
我记得这道题目我做过，略微尴尬

# 分析

1. 边界条件
   1. 长度为 0，返回 true
   2. 长度为奇数，返回 false
2. 遍历做一些操作，这是我当时的写法。。

<!--  -->

1. 做一个栈，是左括号，就入栈， 不是左括号，就和栈中的头部元素比对，比对失败就退出。
2. 最后返回栈的长度
