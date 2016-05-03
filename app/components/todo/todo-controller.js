app.controller('TodoController', function (TodoService, $scope) {
	var tc = this;
	tc.todos = TodoService.getTodos();
	// DO NOT EDIT ABOVE
	$scope.myList = false

    tc.addTask = function (newTask) {

        tc.todos.push(newTask);
		TodoService.saveTodos(tc.todos);
        tc.newTask = {};

    }

    tc.removeTask = function (index) {

        tc.todos.splice(index, 1);
		TodoService.saveTodos(tc.todos);
    }

	$scope.toggle = function () {

		$scope.myList = !$scope.myList;

	}

})