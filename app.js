// const titleInput = document.getElementById("todo-title");
// const addBtn = document.getElementById("btn");
// const container = document.getElementById("container");
// const modeBtn = document.getElementById("btn-mode");
// const [html] = document.getElementsByTagName("html");

// modeBtn.addEventListener("click", () => {
//   html.classList.toggle("dark");
// });

// let todos = [];
// let idsi = 1;
// let res = "";
// function getAllTodos() {
//   todos.map((todo, index) => {
//     res +=  `
//         <div class="mb-2 w-full m-auto group relative flex justify-between rounded-md border border-transparent bg-gray-400 py-2 px-4 text-sm font-medium text-white">
//             ${index + 1} ${todo.title}
//             <p class="cursor-pointer" onclick="deleteTodo(${todo.id})">❌</p>
//         </div>
//         `;
//   });

//   container.innerHTML = res;
//   res = "";
// }

// function deleteTodo(aydi) {
//   delete todos[aydi - 1];
//   getAllTodos();
// }

// function addTodo() {
//   todos = [
//     ...todos,
//     {
//       id: todos.length + 1,
//       title: titleInput.value,
//     },
//   ];

//   titleInput.value = "";
//   getAllTodos();
// }

// addBtn.addEventListener("click", async () => {
//   await addTodo();
//   getAllTodos();
// });

// getAllTodos();

// function () {} -> anonymus function
// function name(){} -> declaration function
// const name = function() {} -> expression function
// const name = () => {} -> arrow function
// () => {} -> callback function
// IEFI  -> Immediately Invoked Function Expression
// ( function (ismi, laqabi) {
//   console.log('MEN '+ ismi, "laqabim esa " +laqabi);
// } )("Megamiyya", "Jumanazar")

let arr = [1, 3, 4, 5, 6];

let res = arr.filter((bittaSon, sonniIndex) => {
  if (bittaSon % 2 === 0) {
    return bittaSon
  }
});


console.log(res);
