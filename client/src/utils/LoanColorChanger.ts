const loanColorChanger = (loanAmount: number) => {
  if (loanAmount < 2001) {
    return "text-green-500";
  } else if (loanAmount < 3000) {
    return "text-green-700";
  } else if (loanAmount < 4000) {
    return "text-green-900";
  } else if (loanAmount < 5000) {
    return "text-yellow-500";
  } else if (loanAmount < 6000) {
    return "text-yellow-700";
  } else if (loanAmount < 7000) {
    return "text-yellow-900";
  } else if (loanAmount < 8000) {
    return "text-red-500";
  } else if (loanAmount < 9000) {
    return "text-red-700";
  } else {
    return "text-red-900";
  }
};

export default loanColorChanger;
