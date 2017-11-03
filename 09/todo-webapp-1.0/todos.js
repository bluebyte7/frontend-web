//start...
//console.log('todos.js');


var todoStringField = getDom('todoString');
var todoTemplateHtml = getDom('todoTemplate').innerHTML;
var listDom = getDom('todoList');

console.log(todoStringField);


todoStringField.addEventListener('keyup', addTodo);

listDom.addEventListener('click', checkDelete);

listDom.innerHTML = loadData();
