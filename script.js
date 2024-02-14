// Variables
document.getElementById("rollBtn").addEventListener("click", roll);
document.getElementById("resetBtn").addEventListener("click", reset);
let rollAmount = document.getElementById("amountOfRolls");
let diceInvent = document.getElementById("dices");
let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");
let results = document.getElementById("results");

function roll() {
  if (rollAmount.value == "once") {
    let randNum1 = Math.round(Math.random() * 5 + 1);
    let randNum2 = Math.round(Math.random() * 5 + 1);

    dice1.src = `images/${randNum1}.png`;
    dice2.src = `images/${randNum2}.png`;

    results.innerHTML += `<span>${randNum1}, ${randNum2}</span>`;
  }

  if (rollAmount.value == "five") {
    for (let n = 0; n <= 4; n++) {
      let randNum1 = Math.round(Math.random() * 5 + 1);
      let randNum2 = Math.round(Math.random() * 5 + 1);

      dice1.src = `images/${randNum1}.png`;
      dice2.src = `images/${randNum2}.png`;

      results.innerHTML += `<span>${randNum1}, ${randNum2}</span>`;
    }
  }

  if (rollAmount.value == "option") {
    var option = +prompt("How many rolls would you like?");

    for (let n = 0; n < option; n++) {
      let randNum1 = Math.round(Math.random() * 5 + 1);
      let randNum2 = Math.round(Math.random() * 5 + 1);

      dice1.src = `images/${randNum1}.png`;
      dice2.src = `images/${randNum2}.png`;

      results.innerHTML += `<span>${randNum1}, ${randNum2}</span>`;
    }
  }

  if (rollAmount.value == "snakeEyes") {
    var numOfRolls = 0;
    while (true) {
      let randNum1 = Math.round(Math.random() * 5 + 1);
      let randNum2 = Math.round(Math.random() * 5 + 1);

      dice1.src = `images/${randNum1}.png`;
      dice2.src = `images/${randNum2}.png`;

      results.innerHTML += `<span>${randNum1}, ${randNum2}</span>`;

      numOfRolls++;

      if (randNum1 == 1 && randNum2 == 1) {
        alert(`It took ${numOfRolls} rolls to get Snake Eyes`);
        break;
      }
    }
  }
}

function reset() {
  dice1.src = "images/0.png";
  dice2.src = "images/0.png";

  results.innerHTML = "<h3> Dice Rolls </h3>";
}
