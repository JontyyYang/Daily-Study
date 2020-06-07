let pubsub = {};
const realize = pubsub => {
  // 发布或者广播事件， 包含特定的topic名称或者参数，。比如传递的数据
  let topics = {},
    subUid = -1;

  // 发布消息
  pubsub.publish = (topic, args) => {
    // 如果向一个不存在的端口发布消息，直接返回
    if (!topics[topic]) {
      return false;
    }

    // 获取这个端口的数据
    const subscribers = topics[topic];
    let len = subscribers ? subscribers.length : 0;
    // 对当前端口的没一个成员执行这个函数
    while (len--) {
      subscribers[len].func(topic, args);
    }
    return this;
  };

  // 监听
  pubsub.subscriber = (topic, func) => {
    // 不存在，就创造一个，
    if (!topics[topic]) {
      topics[topic] = [];
    }

    // 每个端口， 都是一个数组， 数组的每个成员分别由token和func组成。 也就是每个端口都有可能有无数个函数
    const token = (++subUid).toString();
    topics[topic].push({
      token,
      func,
    });

    return token;
  };

  // 结束订阅
  // 获得token，结束某个具体端口的某个具体的订阅
  pubsub.unsubscribe = token => {
    for (let m in topics) {
      if (topics[m]) {
        for (let i = 0, j = topics[m].length; i !== j; i++) {
          if (topics[m][i].token === token) {
            topics[m].splice(i, 1);
            return token;
          }
        }
      }
    }
    return this;
  };
};

realize(pubsub);

const messageLogger = (topics, data) => {
  console.log('logging', topics, data);
};

const subscription = pubsub.subscriber('inbox/newMessage', messageLogger);
const subscription2 = pubsub.subscriber('inbox/newMessage2', messageLogger);

pubsub.publish('inbox/newMessage', 'hello world');
pubsub.publish('inbox/newMessage', [1, 2, 3]);
pubsub.publish('inbox/newMessage2', 'jontyy');
