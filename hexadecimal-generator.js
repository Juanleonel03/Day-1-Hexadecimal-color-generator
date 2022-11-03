const input = document.getElementById("input");
const button = document.getElementById("button");
const box_color = document.getElementById("theme-color");
const button_copy = document.getElementById("btn-copy");
const color_hexaH2 = document.getElementById("color-hexa");
const resultCopy = document.getElementById("resultCopy");
const title = document.querySelector('.title')
const first = "^#([A-Fa-f0-9]{6})$";
const second = "^#([A-Fa-f0-9]{6})$";
const third = "^#([A-Fa-f0-9]{6})$";
const fourth = "^#([A-Fa-f0-9]{6})$";
const fifth = "^#([A-Fa-f0-9]{6})$";
const sixth = "^#([A-Fa-f0-9]{6})$";

//color search event
button.addEventListener("click", () => {
  input.value = `#${Math.floor(Math.random(first) * 16).toString(
    16
  )}${Math.floor(Math.random(second) * 16).toString(16)}${Math.floor(
    Math.random(third) * 16
  ).toString(16)}${Math.floor(Math.random(fourth) * 16).toString(
    16
  )}${Math.floor(Math.random(fifth) * 16).toString(16)}${Math.floor(
    Math.random(sixth) * 16
  ).toString(16)}`;
  box_color.style = `background: ${input.value}`;
  color_hexaH2.innerText = input.value;
  resultCopy.innerHTML = "";
  button_copy.classList.replace("bi-clipboard-check", "bi-clipboard");
  if(input.value === '#202020'){
    title.style = 'color: #ffffff'
  }else{
    title.style = `color: ${input.value}`
  }
});

//event for when the user wants to search for a color
input.addEventListener("change", () => {
  box_color.style = `background: #${input.value}`;
  color_hexaH2.innerText = `#${input.value}`;
  resultCopy.innerHTML = "";
  button_copy.classList.replace("bi-clipboard-check", "bi-clipboard");
});

//icon clipboard
button_copy.addEventListener("click", () => {
  button_copy.classList.replace("bi-clipboard", "bi-clipboard-check");
  resultCopy.innerHTML = "¡color successfully copied!😍";
  navigator.clipboard.writeText(color_hexaH2.innerText);
})
