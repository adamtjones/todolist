$(document).ready(function() { 

//variables
var input = document.querySelector('.new-todo');
var submit = document.querySelector('.submit');
var items = document.querySelector('.items');
var active = document.querySelector('.show-active');
var completed = document.querySelector('.show-completed');

//constructor for todo array
function ToDoItem(value,completed)
{
	this.value = value;
	this.completed = completed;
}

//array
var todo = [];

//when submit button clicked, adds todo item to list
//also shows all items
function addToDo() {
	var newTodo = new ToDoItem(input.value,false);
	todo.push(newTodo);
	writeTodos();
}


submit.addEventListener('click',addToDo);


function writeTodos() {
	var string = "";
	todo.forEach(function(todo) {
		string += "<h2>"+todo.value+"</h2>";
	});
	items.innerHTML = string;}



//shows all active items in the list, same as All items. Works.
function showActive() {
		writeActiveTodos();
	}

active.addEventListener('click',showActive);

function writeActiveTodos() {
	var string = "";


	todo.forEach(function(todo) {
		if(todo.completed === false)
		{
			string += "<h2>"+todo.value+"</h2>";
		}
	});


	items.innerHTML = string;
}

//shows all completed items in the list. Works.
function showCompleted() {
		writeCompletedTodos();
	}
	
completed.addEventListener('click',showCompleted);

function writeCompletedTodos() {
	var string = "";

	todo.forEach(function(todo) {
		if(todo.completed === true)
		{
			string += "<h2>"+todo.value+"</h2>";
		}
	});

	items.innerHTML = string;
}

//doing the Check Mark portion. 
$("body").on("click",'.check', function() {
	var text = $(this).parent().find('p').text();
	todo.ForEach(function(todo){
		if(todo.value === text){
			todo.completed = true;
		}
	})
});



});


/*

var ul = document.getElementById('items'),
or
var ul = $(".items"),


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