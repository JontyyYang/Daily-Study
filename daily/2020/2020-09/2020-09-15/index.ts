interface type {
  value: string;
  children?: type | null;
}

export const normalize = (str: string): any => {
  const reg = /[\[|\]]/g;
  const deleteGap = str.split(reg).filter(item => !!item);

  const result: type = {value: ''};
  let final: any;

  deleteGap.forEach((item, index) => {
    if (index !== 0) {
      final.children = {};
      final.children.value = item;
      final = final.children;
    } else {
      result.value = item;
      final = result;
    }
  });
  console.log(result);
  return result;
};

['[a[b[c]]]', '', 'asd', '[aads', 'asdasd]', '[asddd]', '[a[d]', '[s[]]'].reduce(
  // @ts-ignore
  (acc, c) => ((acc[c] = normalize(c)), acc),
  {}
);
