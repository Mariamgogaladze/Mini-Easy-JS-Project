const inputField = document.getElementById("inputfield");
const checkBtn = document.getElementById("checkbtn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  let vowels = inputField.value.match(/[aeiouAEIOU]/gi);
  result.style.display = "block"
  if (vowels) {
    result.innerText = vowels.length;
    inputField.value ="";
  } else {
    result.innerText = "0";
  }

  result.classList.remove("slide-down"); 
  void result.offsetWidth; 
  result.classList.add("slide-down");
});

result.addEventListener("animationend", () => {
  result.classList.remove("slide-down"); 
});
