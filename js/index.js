function calculate() {
  const input = document.getElementById("numb").value;
  console.log(input);
  const numbers = input.split(",").map(Number);

  console.log(numbers);
}
