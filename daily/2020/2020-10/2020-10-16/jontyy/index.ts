interface TimeType {
  H: number;
  M: number;
}

interface ResultType {
  BigPercentage: number;
  SmallPercentage: number;
}

enum TimeTotal {
  Hour = 12,
  Minute = 60,
  Circle = 360,
}

const calculateBaseRate = (time: TimeType): ResultType => {
  const {H, M} = time;
  const HPer = (H * TimeTotal.Circle) / TimeTotal.Hour;
  const MPer = (M * TimeTotal.Circle) / TimeTotal.Minute;
  const Percentage = Math.abs(HPer - MPer);

  const result = {
    BigPercentage: 360 - Percentage,
    SmallPercentage: Percentage,
  };
  console.log(result);
  return result;
};

calculateBaseRate({H: 7, M: 55});

const calculateCurrRate = (time: TimeType): ResultType => {
  const {H, M} = time;
  // 这里时针也在走，走的 是M / 60 * 30
  const HPer = (H * TimeTotal.Circle) / TimeTotal.Hour + M / 2;
  const MPer = (M * TimeTotal.Circle) / TimeTotal.Minute;
  const Percentage = Math.abs(HPer - MPer);

  const result = {
    BigPercentage: 360 - Percentage,
    SmallPercentage: Percentage,
  };
  console.log(result);
  return result;
};

calculateCurrRate({H: 7, M: 55});

export {};
