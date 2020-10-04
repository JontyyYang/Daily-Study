const lengthOfLongestSubstring = (s: string): number => {
  let start = 0;
  let end = 0;
  let maxLen = 0;
  [...s].map((item, index) => {
    let res = s.substring(start, end);
    const idx = res.indexOf(item);

    if (idx !== index && idx !== -1) {
      start = start + idx + 1;
    }
    end++;

    res = s.substring(start, end);
    maxLen = Math.max(end - start, maxLen);
  });
  return maxLen;
};

lengthOfLongestSubstring('abcabcbb');
lengthOfLongestSubstring('bbbbb');
lengthOfLongestSubstring('pwwkew');

export {};
