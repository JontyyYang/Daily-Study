const restoreIp = (str: string, start: number, temp: string[], res: string[]) => {
  return [];
};

const reduction = (str: string): string[] => {
  const res: string[] = [];
  const temp: string[] = [];
  const start = 0;
  if (str.length < 3 || str.length > 12) {
    throw new Error('字符串长度异常');
  }

  // 递归函数
  restoreIp(str, start, temp, res);
  return res;
};
reduction('25525512212');
export {};

// https://leetcode-cn.com/problems/restore-ip-addresses/solution/di-gui-hui-su-jiang-jie-by-autunmnleo/
