interface ItemType {
  name: string;
  time: string;
}

type DataType = ItemType[];

const data: DataType = [
  {name: 'xixi', time: '2019-09-03'},
  {name: 'haha', time: '2019-09-02'},
  {name: 'hehe', time: '2019-09-01'},
  {name: 'hihi', time: '2019-09-04'},
  {name: 'mumu', time: ''},
  {name: 'dudu', time: ''},
];

const calculateNum = (time: string): number => {
  return Number.isNaN(+new Date(time)) ? +new Date('9999-12-31') : +new Date(time);
};

const sortData = (data: DataType): DataType => {
  data.sort((a, b) => {
    const result = calculateNum(a.time) - calculateNum(b.time);
    return result;
  });
  console.log(data);
  return data;
};

sortData(data);

export {};
