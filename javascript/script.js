const inputBox = document.getElementById("input-box");
const dateInput = document.getElementById("date-input");
const listContainer = document.getElementById("list-container");
const filterButtons = document.querySelectorAll(".filter-btn");

function addTask() {
  if (inputBox.value.trim() === "") {
    alert("You must write something!");
    return;
  }

  const li = document.createElement("li");
  const taskText = document.createElement("span");
  taskText.textContent = inputBox.value;

  li.appendChild(taskText);

  if (dateInput.value) {
    const dateSpan = document.createElement("small");
    dateSpan.textContent = ` (${dateInput.value})`;
    dateSpan.style.marginLeft = "10px";
    li.appendChild(dateSpan);
  }

  const closeBtn = document.createElement("span");
  closeBtn.textContent = "×";
  closeBtn.className = "close-btn";
  li.appendChild(closeBtn);

  listContainer.appendChild(li);

  inputBox.value = "";
  dateInput.value = "";
  saveData();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "SPAN" && e.target.classList.contains("close-btn")) {
    e.target.parentElement.remove();
    saveData();
  } else if (e.target.closest("li")) {
    e.target.closest("li").classList.toggle("checked");
    saveData();
  }
});

function saveData() {
  localStorage.setItem("tasks", listContainer.innerHTML);
}

function showTask() {
  const saved = localStorage.getItem("tasks");
  if (saved) {
    listContainer.innerHTML = saved;
  }
}
showTask();

inputBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filter-btn.active")?.classList.remove("active");
    button.classList.add("active");
    const tasks = document.querySelectorAll("#list-container li");
    tasks.forEach((task) => {
      switch (button.id) {
        case "all":
          task.style.display = "flex";
          break;
        case "active":
          task.style.display = task.classList.contains("checked")
            ? "none"
            : "flex";
          break;
        case "completed":
          task.style.display = task.classList.contains("checked")
            ? "flex"
            : "none";
          break;
      }
    });
  });
});

document.getElementById("toggle-dark").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
