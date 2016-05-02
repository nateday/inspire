app.controller('TodoController', function (TodoService, $scope) {
	var tc = this;
	tc.todos = TodoService.getTodos();
	// DO NOT EDIT ABOVE
	$scope.myList = false
	tc.list = [];

    tc.addTask = function (newTask) {

        tc.list.push(newTask)
        tc.newTask = {};

    }

    tc.removeTask = function (index) {

        tc.list.splice(index, 1);

    }

	$scope.toggle = function () {

		$scope.myList = !$scope.myList;

	}

})