window.setTimeout(function () {

    var todos = [];

    var action = prompt("What would you like to do?");

    while (action !== "quit") {

        if (action === "new") {
            var newTodo = prompt("Enter a new todo");
            todos.push(newTodo);
        }
        else if (action === "list") {
            console.log(todos);
        }
        else {
            console.log("I dont know what this action means.");
        }

        action = prompt("What would you like to do?");
    }

    console.log("Good bye! U quiter!")

}, 500);




