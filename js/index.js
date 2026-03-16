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
  //calculate left max for each element in the array
  for (let i = 1; i < numbers.length; i++) {
    leftMaxNum[i] = Math.max(leftMaxNum[i - 1], numbers[i]);
  }
  rightMaxNum[numbers.length - 1] = numbers[numbers.length - 1];
  //calculate right max for each element in the array
  for (let i = numbers.length - 2; i >= 0; i--) {
    rightMaxNum[i] = Math.max(rightMaxNum[i + 1], numbers[i]);
  }
}
