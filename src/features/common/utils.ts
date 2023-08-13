// 切り捨て
export const floorDecimal = (value: number, n: number): number => {
  return Math.floor(value * Math.pow(10, n)) / Math.pow(10, n);
};

// 切り上げ
export const ceilDecimal = (value: number, n: number): number => {
  return Math.ceil(value * Math.pow(10, n)) / Math.pow(10, n);
};

// 四捨五入
export const roundDecimal = (value: number, n: number): number => {
  return Math.round(value * Math.pow(10, n)) / Math.pow(10, n);
};
