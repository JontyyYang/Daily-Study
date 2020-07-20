const fixItem = [1, 2, 3];
const featItem: any[] = [''];
const changeItem: any[] = [''];
const finalItem = [...fixItem, ...featItem, ...changeItem];

const res = finalItem.filter(item => !!item);
console.log(res);
