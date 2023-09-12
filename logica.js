const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");
const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");

//Multiplicar
function calc(a, b, operation) {
  const x = Number(a);
  const y = Number(b);
  switch (operation) {
    case "add":
      return x + y;
    case "multiply":
      return x * y;
    case "subtract":
      return x - y;
    case "divide":
      return x / y;
    default:
      throw new Error("operador no existente");
  }
}

//escucha de button de action
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.getAttribute("data-action");
    result.innerHTML = calc(valor1.value, valor2.value, action);
    console.log(action);
  });
});
