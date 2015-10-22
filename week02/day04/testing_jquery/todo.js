$(document).ready(function () {
    var todoApp = $('#todoApp');
    var todoTitle = $("<h1>jQuery Todo App</h1>");
    var todoInput = $('<input placeholder="add and item..."></input>');
    var todoAddItemButton = $('<button>Add</button>');
    var todoClearButton = $('<button>Remove All Done</button>');
    var todoList = $('<ul></ul>');
    var todoItem = $('<li></li>');


    todoApp.append(todoTitle);
    todoApp.append(todoInput);
    todoApp.append(todoAddItemButton);
    todoApp.append(todoList);
    todoApp.append(todoClearButton);

    todoClearButton.on('click', function() {
        $('.done').remove();
    });

    var handleAdd = function () {
        var userText = todoInput.val();
        if (userText) {
            var newTodoItem = $('<li></li>');
            newTodoItem.text(userText);
            todoList.append(newTodoItem);
            todoInput.val(''); //makes box empty after user submits text
        }
    };

    todoInput.on('keyup', function(event) {
      if (event.which == 13) { //13 is enter, which is which key
        handleAdd();
      }
    });

    todoAddItemButton.on('click', handleAdd);

    todoList.on('click', 'li', function() {
      var todoItem = $(this); //because of how 'this' works, it === the button clicked.
      todoItem.toggleClass('done'); //not .done because not a selector here
    });

  });
