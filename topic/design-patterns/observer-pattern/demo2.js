// 接收到的信息数量
let mailCount = 0;

// 初始化订阅， 名称是index/newMessage
// 呈现消息预览
const subscriber1 = subscriber('index/newMessage', (topic, data) => {
  console.log('a new message was received:', topic);
  // 使用从目标subject传递过来的data，一般呈现消息预览
  $('.messageSender').html(data.sender);
  $('.messagePreview').html(data.body);
});

// 另外一个订阅， 使用同样的data数据用于不同的任务
// 通过发布者更新锁接受的消息的数量

const subscriber2 = subscriber('inbox/newMessage', (topic, data) => {
  $('.newMessageCounter').html(mailCount++);
});

publish('inbox/newMessage', [{sender: 'jontyy@163.com', body: 'hello'}]);

// 之后通过unsubscribe来解绑
unsubscribe(subscriber1);
unsubscribe(subscriber2);
