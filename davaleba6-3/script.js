let averageNum = document.querySelector(".btn");
averageNum.addEventListener("click", () => {
  let input = document.querySelector(".numbers").value;
  let numbersSplit = input.split(":");
  let sum = 0;

  for (let i = 0; i < numbersSplit.length; i++) {
    sum += Number(numbersSplit[i]);
  }

  let average = sum / numbersSplit.length;
  document.querySelector(".result").textContent = "Result: " + average;
});
