const inputBtn = document.getElementById("input-btn");

const listContainer = document.getElementById("list=container");

function addTask() {
  if (inputBtn.value === "") {
    alert("You Have not Entered a value");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBtn.value;
    listContainer.appendChild(li);
  }
}
