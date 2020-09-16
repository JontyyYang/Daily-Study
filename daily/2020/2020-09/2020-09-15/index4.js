const normalize = str => {
  const formatStr = str.split(/[\[|\]]/).filter(Boolean);

  let x = (y = {});

  formatStr.forEach((item, index) => {
    if (index === formatStr.length - 1) {
      x.value = item;
      delete x.child;
    } else {
      x.value = item;
      x.child = {};
      x = x.child;
    }
  });
  console.log(y);
  return y;
};

['[a[b[c]]]', '', 'asd', '[aads', 'asdasd]', '[asddd]', '[a[d]', '[s[]]'].reduce(
  (acc, c) => ((acc[c] = normalize(c)), acc),
  {}
);
