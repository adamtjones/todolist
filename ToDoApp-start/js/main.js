$(document).ready(function() {
});

var ul = document.getElementById('items'),
	incomplete = document.getElementById('incomplete-items'),
	showAllActive = document.getElementById('show-all active'),
	showActive = document.getElementById('show-active'),
	showCompleted = document.getElementById('show-completed'),
	check = document.getElementById('check'),
	ex = document.getElementById('delete');

	newTodo = document.getElementById('new-todo');

	newTodo.innerHTML('items')

function addToList() {
	newTodo.append(items)
}













function toDoItem(content, active){
	this.content = content;
	this.active = active;
}










/*Jake came in to talk about the following*/

/*var input = $("newToDo");
var todo = [];

$("form").on('submit',function(e) {
	e.preventDefault();
	var content = input.val();
	var newTodo = new ToDoItem(content,false);
	todo.push(newTodo);
	toNewBox;
})

function toNewBox() {
	var itemBox = $(".items");
	itemBox.html("");

	todo.forEach(function(event) {
		itemBox.append("<li><article><button class='check'")
	})
}



$("body").on("click",".check",function() {
	var complete = 
})


/*with the articles, do an if statement where if it's true then it runs one, if not then it runs the other*/
