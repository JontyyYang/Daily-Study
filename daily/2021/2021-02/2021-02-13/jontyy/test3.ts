const formaturl = (urllist: string[]) => {
  urllist.map(item => {
    let formatstr = '';
    if (item.startsWith('http://') || item.startsWith('https://')) {
      formatstr = item;
    } else {
      formatstr = `http://${item}`;
    }
    console.log(formatstr);

    return formatstr;
  });
  return urllist;
};

console.log(formaturl(['nodejs.org', 'http://nodejs.org', 'http://bytedance.com']));
export {};
