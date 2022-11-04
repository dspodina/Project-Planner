let addMessage = document.querySelector(".message");
let addButton = document.querySelector(".button");
let todo = document.querySelector("#date");
let todoList = [];

addButton.addEventListener("click", function () {
  let newTodo = {
    todo: addMessage.value,
    checked: false,
    important: false,
  };
  todoList.push(newTodo);
  displayMessages();
});
function displayMessages() {
  todoList.forEach(function (item, i) {
    let displayMessage = `Our tasks: ${addMessage.value}`;
    console.log('displayMessage: ', displayMessage);
  });
}
