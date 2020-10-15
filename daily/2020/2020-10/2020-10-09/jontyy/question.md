# 发布相关

正常发布

1. 去 pkg，修改 version
2. npm publish

beta 发布

1. 先在 package.json 中修改 version 版本号，版本号后边加-beta,支持 beta1，beta2 等等。
2. npm publish --tag=beta1
