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
  //calculate the water level for each element in the array
  let waterLevel = 0;
  for (let i = 0; i < n; i++) {
    waterLevel += Math.min(leftMaxNum[i], rightMaxNum[i]) - numbers[i];
  }
  console.log(waterLevel);

  document.getElementById("result").innerText =
    `Water Level: ${waterLevel} Units `;
  drawGraph(numbers, leftMaxNum, rightMaxNum);
}

// water graph

function drawGraph(numbers, leftMaxNum, rightMaxNum) {
  let graph = document.getElementById("drawingResult");
  graph.innerHTML = "";
  let maxHeight = Math.max(...numbers);
  for (let level = maxHeight; level > 0; level--) {
    let row = document.createElement("div");
    row.classList.add("graph-row");
    row.className = "row";

    for (let i = 0; i < numbers.length; i++) {
      let cell = document.createElement("div");

      cell.className = "cell";

      let waterLevel = Math.min(leftMaxNum[i], rightMaxNum[i]);

      if (numbers[i] >= level) {
        cell.classList.add("block");
      } else if (waterLevel >= level) {
        cell.classList.add("water");
      }

      row.appendChild(cell);
    }

    graph.appendChild(row);
  }
}

 
