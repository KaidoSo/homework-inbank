const MonthNumber = (number: number) => {
  const array = [];
  for (let i = 12; i <= number; i++) {
    array.push(i);
  }
  return array;
};

export default MonthNumber;
