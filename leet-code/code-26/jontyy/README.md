# 性质

1. 树的深度 = Math.max（左子树的深度， 右子树的深度）+1

### 方法一

1. 递归，举两个例子
   demo：[3,9,20,null,null,15,7]

   在代码一中
   const dfs = isBalanced(3)
   left = dfs(9)
   left = dfs(null) = 0
   right = dfs(null) = 0
   此时，反馈到上面 也就是 dfs(9) = max(0,0)+1=1
   right = dfs(20)
   left = dfs(15)
   left = dfs(null) = 0
   right = dfs(null) = 0
   此时，反馈到上面 也就是 dfs(15) = max(0,0)+1=1
   right = dfs(7)
   left = dfs(null) = 0
   right = dfs(null) = 0
   此时，反馈到上面 也就是 dfs(7) = max(0,0)+1=1
   此时，反馈到上面也就是 dfs（20） = max（1，1）+1=2
   此时，反馈到上面，也就是 dfs（3）= max（1，2）+1 =3

2. 递归，举两个例子
   demo：[1,2,2,3,3,null,null,4,4]

   在代码一中
   const dfs = isBalanced(1)
   left = dfs(2)
   left = dfs(3)

   ​ left = dfs(4)

   ​ left = dfs(null)=0

   ​ right = dfs(null)=0

   ​ 此时，反馈到上面 也就是 dfs(4) = max(0,0)+1=1

   ​ right = dfs(4)

   ​ left = dfs(null)=0

   ​ right = dfs(null)=0

   ​ 此时，反馈到上面 也就是 dfs(4) = max(0,0)+1=1

   ​ 此时，反馈到上面 也就是 dfs(3) = max(1,1)+1=2

   ​ right = dfs(3)

   ​ left = dfs(null) = 0

   ​ right = dfs(null) = 0

   ​ 此时，反馈到上面 也就是 dfs(3) = max(0,0)+1=1

   ​ 此时，反馈到上面，也就是 dfs（2） = max（2，1）+1=3

   ​ right = dfs（2）

   ​ left = dfs（null） = 0

   ​ right = dfs(null)=0

   ​ 此时，反馈到上面 也就是 dfs(2) = max(0,0)+1=1

   ​ 此时 left-right>1 所以状态就变成了 false

本质上应该是 🌲 的深搜
