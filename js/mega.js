const buttons = document.querySelectorAll("button");

const generateRandomArray = (length, min, max) => {
  let arr = Array(length).fill(0);
  arr = arr.map(() => {
    let temp = [];
    let random = 0;
    while (true) {
      random = Math.round(Math.random() * (max - min) + min);
      if (!temp.includes(random)) {
        temp.push(random);
        break;
      }
    }
    return random;
  });
  return arr;
};

const numbersArray = generateRandomArray(60, 1, 99);

buttons.forEach((button, index) => {
  if (button.innerHTML === "[]") {
    const num = numbersArray[index].toString().padStart(2, "0");
    button.innerHTML = `[${num}]`;
  }
});
