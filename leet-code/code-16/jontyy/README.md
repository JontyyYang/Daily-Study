# 分析

### 第一想法

1. 如果我第一次把数组每一个数字乘积求出来，这样的话求出某个位置的值只需要除以这个位置的值，但是好像不要行，因为不能用除法

### 第二想法

1. 难不成就是想让我暴力解决？从头乘到尾。 但是我觉得这样肯定会有问题的，效率太低了

### 第三想法

1. 应该是找一个什么量。 来存一下前一次的变化
2. 最后发现是利用左右两个数组， 来记录下每个位置，的左边所有情况的数组和右边所有情况下的数组
3. 然后左右两个数组乘就可以了

### 网上看了下 还有更好的解法

1. 只需要右数组就行，左数组直接改原数组
