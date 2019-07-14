window.setTimeout(function () {

    function listTodos() {
        console.log("***********");
        todos.forEach(function (todo, i) {
            console.log(i + ": " + todo);
        })
        console.log("***********");
    }

    function newTodo() {
        var newTodo = prompt("Enter a new todo");
        todos.push(newTodo);
        console.log(newTodo + " has been added to the list.");
    }

    function deleteTodo() {
        var toDelete = prompt("Enter index of todo to delete");
        // go that index, and remove 1 element at and following that index
        todos.splice(toDelete, 1)
        console.log("Todo is removed.");
    }

    var todos = [];

    var action = prompt("What would you like to do?");

    while (action !== "quit") {

        if (action === "new") {
            newTodo();
        }
        else if (action === "list") {
            listTodos();
        }
        else if (action === "delete") {
            deleteTodo();
        }
        else {
            console.log("I dont know what this action means.");
        }

        action = prompt("What would you like to do?");
    }

    console.log("Good bye! U quiter!")

}, 500);

