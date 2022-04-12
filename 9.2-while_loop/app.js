arr = ["boo", "doooo", "hoo", "ro"];

const strLenght = (arr) => {
  const array = [];
  let i = 0;
  while (i < arr.length) {
    array.push(arr[i].length);
    i++

    // for (let i = 0; i < arr.length; i++) {
    //     array.push(arr[i].length);
  }
  return array;
};
console.log(strLenght(arr));

//2. for this case i choose for loop