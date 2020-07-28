# DNS

- 浏览器发起请求
- 查询浏览器是否有 dns 缓存
- 浏览器没有缓存，则找到计算机本地 host 文件。 是否存在映射关系

```shell
Mac：/etc/hosts
Windows 7: C:\\**Windows**\\System32\\drivers\\etc

// 这里相当于告诉计算机， 如果有域名对应着IP，就代表，访问这个域名的时候，直接去这个ip地址下找资源
```

```shell

➜  youzan cat /etc/hosts
##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting.  Do not change this entry.
##
127.0.0.1 localhost
255.255.255.255 broadcasthost
10.11.1.51 registry.npm.qima-inc.com
::1 localhost


223.112.103.19 rs.qbox.me
```

- 如果本地不存在映射关系， 那么就会去找 dns 的本地缓存

- 如果本地没有 dns 本地缓存，就去找本地 dns 服务器要资源，但是一般来说，dns 服务器都会有缓存，如果有，就会直接把缓存的内容传回去，没有的话，就去找根服务器

- dns 服务器之间的关系是，管理下一级域名的服务器会把自己注册到上级域名的 DNS 服务器上

- 比如本地 DNS 服务器先是去根服务器找域名的 ip，根域名服务器没有，给了他 com 域名服务器的 ip。

  但是 com 域名服务器也不知道 www.test.com 的 ip，但是知道 test.com 在哪台域名服务器上。

  最终，找到了 www.test.com

  这个就是管理下一级域名的服务器把自己注册到上一级上

* mac 上查看本地服务器， setting 里面找到 network，找到 advanced，找到 dns。一般来说，dns 就是 isp 服务商的 ip 地址

* 如果我们设置了转发(使用了路由器)，那我们的地址极有可能是 192.168.1.1（如上图），路由器本身，我们的路由器会将请求转发到上层 DNS，也就是 ISP 运营商 DNS 服务器。

- 谷歌清除浏览器缓存[https://jingyan.baidu.com/article/c275f6ba0a4264e33d7567b4.html](网址)
