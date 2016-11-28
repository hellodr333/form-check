
(function(){
	var myapp=angular.module('myapp',['ngMessages']);
	myapp.controller('myctrl',function($scope){
		// 用户数据
		$scope.user={};
		// 复选框
		$scope.user.hobby = [];
		$scope.setHobby = function(which){
			$scope.user.hobby.push(which);
		};
		$scope.submitForm = function(json){
			$scope.user = json;
		};
		
		$scope.check = function(){
			console.log($scope.myform)
		}
	});




})();
