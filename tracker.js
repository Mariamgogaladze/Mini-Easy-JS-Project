const inputName = document.getElementById("name");
const inputDate = document.getElementById("date");
const inputAmount = document.getElementById("amount");
const addBtn = document.getElementById("addExpense");
const table = document.getElementById("table");
const noExpensesTd = document.getElementById("noExpenses");

addBtn.addEventListener("click", function() {

   // Check if any of the input fields are empty
  if (inputName.value === "" || inputDate.value === "" || inputAmount.value === "") {
    return;
     // Exit the function without adding a new row
  }
  // Check if the "no expenses added yet!" td element exists
  if (noExpensesTd) {
    // If it exists, remove it from the table
    noExpensesTd.style.display = "none";
  }

  // Create a new row for the expenses
  const newRow = document.createElement("tr");

  // Create td elements for the name, date, and amount
  const nameTd = document.createElement("td");
  nameTd.innerText = inputName.value;

  const dateTd = document.createElement("td");
  dateTd.innerText = inputDate.value;

  const amountTd = document.createElement("td");
  amountTd.innerText = inputAmount.value;

  // Add the td elements to the new row
  newRow.appendChild(nameTd);
  newRow.appendChild(dateTd);
  newRow.appendChild(amountTd);

  // Add the new row to the table
  table.querySelector('tbody').appendChild(newRow);

  // Clear the input fields
  inputName.value = "";
  inputDate.value = "";
  inputAmount.value = "";

  //delete expenses
  newRow.addEventListener("mouseenter", function(){
    const clearBtn = document.createElement("button");
    clearBtn.innerText = "-";
    clearBtn.style.marginLeft = "30px";
    clearBtn.classList.add("clearbtn")
    amountTd.appendChild(clearBtn);
  
    clearBtn.addEventListener("click", function() {
      newRow.style.display = "none";
    });
  });
  
    newRow.addEventListener("mouseleave", function(){
    const clearBtn = newRow.querySelector("button");
    if (clearBtn) {
        amountTd.removeChild(clearBtn);
    }
  });
})


document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      // Simulate a click on the Add button
      addBtn.click();
    }
  });
