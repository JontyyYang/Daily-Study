//时针和分针的夹角
// function calcul(time) {
//   const h = time.h;
//   const m = time.m;
//   if (h < 24 && m < 60) {
//     const num1 = (h % 12) * 30 + m * 0.5;
//     const num2 = m * 6;
//     return Math.abs(num1 - num2);
//   }
// }
// const time = {h: 5, m: 50};
// console.log(calcul(time));

//1.TCP与UDP的区别。2.TCP是如何保证包的顺序传输？
// 1.
// 基于连接与无连接
// 对系统资源的要求（TCP较多，UDP少）
// UDP程序结构较简单
// 流模式与数据报模式
// TCP保证数据正确性，UDP可能丢包
// TCP保证数据顺序，UDP不保证
// 2.
// 主机每次发送数据时，TCP就给每个数据包分配一个序列号并且在一个特定的时间内等待接收主机对分配的这个序列号进行确认，
// 如果发送主机在一个特定时间内没有收到接收主机的确认，则发送主机会重传此数据包。
// 接收主机利用序列号对接收的数据进行确认，以便检测对方发送的数据是否有丢失或者乱序等，
// 接收主机一旦收到已经顺序化的数据，它就将这些数据按正确的顺序重组成数据流并传递到高层进行处理。

//按json的某一个字段排序
// var data=[{name:'xixi',time:'2019-09-03'},
// {name:'haha',time:'2019-09-02'},
// {name:'hehe',time:'2019-09-01'},
// {name:'hihi',time:'2019-09-04'},
// {name:'mumu',time:''},
// {name:'dudu',time:''}
// ]
// data.sort(function(a,b){
// 	return process(a.time)-process(b.time)
// })
// function process(x){
// 	return x.split('-').join('')
// }
// for(var i=0;i<data.length;i++){
// 	if(data[i].time==''){
// 		data.push(data.shift())
// 	}
// }

// console.log(data)
