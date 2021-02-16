function badToInt(str: string): number | undefined {
  return str ? Number.parseInt(str) : undefined;
}

// 但是， 把一个函数的返回值设置为undefined可能会变得比较可怕

function goodToInt(str: string): {valid: boolean; int?: number} {
  const intNumber = Number.parseInt(str);
  if (isNaN(intNumber)) {
    return {valid: false};
  } else {
    return {valid: true, int: intNumber};
  }
}

export {};
// 使用null是不太好的想法
