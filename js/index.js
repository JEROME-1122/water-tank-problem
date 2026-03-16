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

  let n = numbers.length;

  //calculate left max for each element in the array
  for (let i = 1; i < n; i++) {
    leftMaxNum[i] = Math.max(leftMaxNum[i - 1], numbers[i]);
  }

  rightMaxNum[n - 1] = numbers[n - 1];
  //calculate right max for each element in the array
  for (let i = n - 2; i >= 0; i--) {
    rightMaxNum[i] = Math.max(rightMaxNum[i + 1], numbers[i]);
  }
}
