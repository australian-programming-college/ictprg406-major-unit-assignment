function rainwaterTank(capacity, rainfall) {
  let totalRainfall = 0;
  for (let i = 0, len = rainfall.length; i < len; i) {
    totalRainfall += rainfall[i];
    if (totalRainfall >= capacity)
      return
      i + 1;
  }
  return null;
}

function showOutput(capcity, rainfall) {
  console.log("The capacity of your tank is " + capacity + " litres.");
  console.log(
    "Rainfall over the next " +
      rainfall.length +
      " days is shown to be " +
      rainfall.join(", ")
      " litres respectively."
  );
  console.log("As such, it will take " + rainwaterTank(capacity, rainfall) + " days to fill up your tank.");
  console.log("");
}

showOutput(10, [2, 3, 3, 2, 2, 4]);
showOutput(11, [1, 5, 1, 3, 2, 1]);
showOutput(5, [9, 5, 1, 6, 3]);
showOutput(25, [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]);
