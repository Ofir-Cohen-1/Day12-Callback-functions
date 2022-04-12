//* 1.
const logFunc = (str) => {
    console.log(str);
  };
  
  const isString = (str, callbackFunc) => {
    if (typeof str === "string") {
        callbackFunc(str);
    }
  };
  console.log(isString('string',logFunc));

  //2. 
  const makeDashes = (str2) => {
    console.log(str2.split(" ").join("-"));
  };
  
  const firstWordUpperCase = (str2, func2) => {
    const [first, ...rest] = str2.split(" ");        // ['learn', 'how']
    func2([first.toUpperCase(), ...rest].join(" "));  // 'LEARN how'
  };

  //3.
let aString = "learn how to learn";
firstWordUpperCase(aString, makeDashes);


//4.
const checkWin = (roll) => {
    if (roll === 1 || roll === 4) {
      console.log(`Congratz, you rolled ${roll} and won!`);
    } else {
      console.log(`woops, you rolled ${roll}, need 1 or 4 to win!`);
    }
  };
  
  const rollTheDice = (func) => {
    let diceRoll = Math.floor(Math.random() * 6 + 1);
    func(diceRoll);
  };
  
  rollTheDice(checkWin);