// Q：cookie 和 token 都存放在 header 中，为什么不会劫持 token？
// 1.csrf：跨站请求攻击，攻击者通过一些技术手段欺骗用户的浏览器去访问一个自己曾经认证过的网站并运行一些操作
// 2.浏览器发送请求的时候不会自动带上token，而cookie在浏览器发送请求的时候会被自动带上。
// 3.cookie是有状态的，传统的cookie保存的session id，服务器会根据这个session id，确保服务器与客户端对话，意味着验证记录或者会话需要一直在服务端和客户端保持。token是无状态的，服务器不记录哪些用户登录了，只判断token是否有效，通常会给token设置有效时间，来确保不被劫持。
// cookie：登陆后后端生成一个sessionid放在cookie中返回给客户端，并且服务端一直记录着这个sessionid，客户端以后每次请求都会带上这个sessionid，服务端通过这个sessionid来验证身份之类的操作。所以别人拿到了cookie拿到了sessionid后，就可以完全替代你。
// token：登陆后后端返回一个token给客户端，客户端将这个token存储起来，然后每次客户端请求都需要开发者手动将token放在header中带过去，服务端每次只需要对这个token进行验证就能使用token中的信息来进行下一步操作了。
// xss：用户通过各种方式将恶意代码注入到其他用户的页面中。就可以通过脚本获取信息，发起请求，之类的操作。
// csrf：跨站请求攻击，简单地说，是攻击者通过一些技术手段欺骗用户的浏览器去访问一个自己曾经认证过的网站并运行一些操作（如发邮件，发消息，甚至财产操作如转账和购买商品）。由于浏览器曾经认证过，所以被访问的网站会认为是真正的用户操作而去运行。这利用了web中用户身份验证的一个漏洞：简单的身份验证只能保证请求发自某个用户的浏览器，却不能保证请求本身是用户自愿发出的。csrf并不能够拿到用户的任何信息，它只是欺骗用户浏览器，让其以用户的名义进行操作。

// Q：node层的作用：对卡门接口返回的数据进行处理，用node来包的好处是什么？
// 地址解析
// 可以处理大量请求

// Q：过滤hidden为true的项返回一个新数组
// var handleFilter=function(arr){
//     var result=[]
//     for(var i=0;i<arr.length;i++){
//         if(arr[i].constructor === Array){
//             var hiddenObj=arr[i].filter(item=>{
//                 return item.hidden
//             });
//             if(hiddenObj.length){
//                 result.push(hiddenObj);
//             }
//         }else{
//             if(arr[i]['hidden']){
//                 result.push(arr[i]);
//             }
//         }
//     }
//     return result;
// }
// var arr=[[{name: 1, hidden: false},{name: 2, hidden: false}],[{name: 3, hidden: true},{name: 4, hidden: true}],{name: 5},{name: 6, hidden: false}];
// var filteredArr=handleFilter(arr);
// console.log(filteredArr)

// Q：无重复字符的最长子串
// var lengthOfLongestSubstring = function(str) {
//     let maxLen = 0
//     let charSet = new Set()
//     let len = str.length
//     let r = - 1;
//     for (let i = 0; i < len; i++) {
//         if (i != 0) {
//             charSet.delete(str.charAt(i - 1))
//         }
//         while(r + 1 < len && !charSet.has(str.charAt(r + 1))) {
//             charSet.add(str.charAt(r + 1))
//             r++
//         }
//         maxLen = Math.max(maxLen, r - i + 1)
//     }
//     return maxLen
// };
// var str="abcabcbb"
// console.log(lengthOfLongestSubstring(str))
