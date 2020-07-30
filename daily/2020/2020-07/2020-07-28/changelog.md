### 当前流程

1. make publish_render args="-g" 此时修改 changelog， 添加 version 文件, 并推送到 gitlab 上
2. make publish_main 此时修改 changelog， 把 changelog 文件打包到 rds 上。

### 存在问题

1. 两个地方都需要修改 changelog， 会导致后发布的存在空白。
2. 两个地方都需要修改 version 文件， 目前只发客户端会导致 version 文件缺失

### 核心

1. web 和客户端的渲染进程， 是 make publish_render
2. 客户端的主进程， 是 make publish_main
3. 存在两个进程单独发布， 互不干涉的情况
4. 这两个地方的发布都需要展示 changelog，都用统一的 version 这样就能修复 【还有一个问题 就是现在 页面看到的都是渲染进程的版本 主进程的版本看不太出来】

### 疑惑问题

1. 主进程的 changelog， web 要不要显示？？ 【我觉得可以，反正是不影响用户使用的】

### 思路

5. 如果是渲染进程和主进程都要发，就加-b，这个时候，拉取最新代码。changelog 是没有修改的， 这个时候， 进行修改是不影响的，但是客户端对 changlog 又单独做了处理，我 tm。。。
6. 只发客户端的时候， 也加个标 -c
7. 如果 发现-c， 就要处理下 version 和 pkg 文件

1) 客户端修改 changelog 纯属就是为了打包到 rds 里面。
2) make publish_render 单独加两个标 -a
3) -g 只做打包。 不做任何其他操作 add commit push 全部不做
4) 不加-a 就是在打包的时候， 修改 version，pkg, changelog 文件，但是 changelog 不推到 gitlab 上
5) -a 就是在打包的时候， 修改 version, pkg, changelog 文件，所有的文件都推到 gitlab 上
6) 如果是渲染进程和主进程都要发，不加-a，这个时候，拉取最新代码。changelog 是没有修改的， 这个时候， 进行修改是不影响的
7) make publish_main 也加个标 -c。 加标就代表不要生成 version 文件，否则生成， 最后都从 version 文件中获取第一个，加入到 rds 中
