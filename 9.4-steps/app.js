const stepShape = (N) => {
  let result = new Array(N).fill("'");
  for (let i = N; i > 0; i--) {
    for (let j = 0; j < N; j++) {
      if (i + j >= 4) {
        result[j] += "#";
      } else {
        result[j] += " ";
      }
      if (i === 1) {
        result[j] += "'";
      }
    }
  }
  return result;
};
console.log(stepShape(4));
