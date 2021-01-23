const reStr = (str: string): string => {
  if (typeof str !== 'string' || str.length <= 0) {
    throw new Error('参数错误');
  }

  if (str.length === 1) {
    return str;
  }

  return str;
};

reStr('aabb');

export {};
