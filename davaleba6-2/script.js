const changer = () => {
  let colorInput = document.querySelector(".color").value;
  let colors = ["red", "blue", "green", "black", "white"];

  colors.includes(colorInput)
    ? (document.body.style.backgroundColor = colorInput)
    : alert("Choose from: red, blue, green, black, white");
};

document.querySelector(".btn").addEventListener("click", changer);
