(() => {
const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) =>{
evento.preventDefault();
const input = document.querySelector("[data-form-btn]");
const value = input.value;
const list = document.querySelector("[data-list]");
const task = document.createElement("li");
task.classList.add("card");

//backticks
const content = ` <div>
<i class="far fa-check-square icon"></i>
<span class="task">${value}</span>
</div>
<i class="fas fa-trash-alt trashIcon icon"></i>`;

task.innerHTML = content;
list.appendChild(task);
console.log(content);


input.value = "";


};
btn.addEventListener("click",createTask)
})();