console.log("This is our Calculator:");

process.stdout.write("Enter the First Number: ");

function firstNumberReader() {
  return new Promise((resolve) => {
    process.stdin.once("data", (chunks) => {
      resolve(chunks.toString().trim());
    });
  });
}

const num1 = firstNumberReader();

process.stdout.write("\n Enter the Second Number: ");
