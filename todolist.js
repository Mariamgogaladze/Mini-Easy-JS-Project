const inputField = document.getElementById("into");
const addBtn = document.getElementById("addbtn");
const toDoDIv =document.getElementById("todo");

addBtn.addEventListener("click", () => {
 addParagraph()
})
function addParagraph() {
    let paragraph = document.createElement("p");
    let removeBtn = document.createElement("button");
    removeBtn.innerText = "-";
    paragraph.textContent = inputField.value;
    paragraph.appendChild(removeBtn);
    toDoDIv.appendChild(paragraph);
    inputField.value = ""

    removeBtn.addEventListener("click" , () => {
        paragraph.style.display = "none"
    })
 }
 