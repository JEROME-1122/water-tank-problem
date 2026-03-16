function calculate() {
  const input = document.getElementById("numb").value;
  console.log(input);

  //convert string into array of numbers
  const numbers = input.split(",").map(Number);

    console.log(numbers);

  //calculate the left max and right max for each element in the array
  let leftMaxNum = [];
  let rightMaxNum = [];
  leftMaxNum[0] = numbers[0];
}
