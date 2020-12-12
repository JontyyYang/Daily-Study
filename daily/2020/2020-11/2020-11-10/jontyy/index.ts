import format from 'date-fns/format';

//eslint-disable-next-line
console.log(format('0:30', "HH:mm:ss"));

const sku = [
  {
    k: '颜色',
    k_id: 1,
    values: {'1225': '黄', '1229': '黑', '325742': '金色'},
    valuesSorted: [{'1225': '黄'}, {'1229': '黑'}, {'325742': '金色'}],
  },
  {
    k: '款式',
    k_id: 33,
    values: {'651605': '三人套', '651604': '单人套', '651603': '全家套餐'},
    valuesSorted: [{'651605': '三人套'}, {'651604': '单人套'}, {'651603': '全家套餐'}],
  },
];

const sku1 = [
  {k: '颜色', k_id: 1, v: '黄', v_id: 1225},
  {k: '款式', k_id: 33, v: '三人套', v_id: 651605},
];

const sku2 = [
  {k: '颜色', k_id: 1, v: '黄', v_id: 1225},
  {k: '款式', k_id: 33, v: '单人套', v_id: 651604},
];

export {};
