console.log("This is our Calculator");

process.stdout.write("Enter the First Number: ");

function firstNumberReader() {
  return new Promise((resolve) => {
    process.stdin.once("data", (chunks) => {
      resolve(chunks.toString().trim());
    });
  });
}

let num1 = await firstNumberReader();
num1 = Number(num1);

process.stdout.write("Enter the Second Number: ");

function secondNumberReader() {
  return new Promise((resolve) => {
    process.stdin.once("data", (chunks) => {
      resolve(chunks.toString().trim());
    });
  });
}

let num2 = await secondNumberReader();
num2 = Number(num2);

process.stdout.write("\n Enter the operator (+,-,*,/) : ");

function operatorReader() {
  return new Promise((resolve) => {
    process.stdin.once("data", (chunks) => {
      resolve(chunks.toString().trim());
    });
  });
}

const operator = await operatorReader();

switch (operator) {
  case "+":
    console.log("The summation of the Two numbers are ", num1 + num2);
    break;
  case "-":
    console.log("The difference of the Two numbers are ", num1 - num2);
    break;
  case "*":
    console.log("The product of the Two numbers are ", num1 * num2);
    break;
  case "/":
    console.log("The ratio of the Two number are ", num1 / num2);
    break;
}
