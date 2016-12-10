
(function(){
	

	var myapp=angular.module('myapp',['ngMessages']);
	myapp.controller('formCtrl',function($scope,$http){
		// 用户数据
		$scope.user={};
		// 复选框
		$scope.user.hobby = [];
		$scope.setHobby = function(which){
			$scope.user.hobby.push(which);
		};
		$scope.submitForm = function(json){
			$scope.user = json;
			console.log(json)
			//$http.get('url',{params:$scope.user}).success(function(){}).error(function(){})
			
		};

	});

	var data=[{isFinish:true,name:'html'},{isFinish:true,name:'css'}];
	myapp.controller('tabCtrl',function($scope){
		$scope.tab=0;
		$scope.items = data;
		$scope.aa={};

		$scope.setTab=function(which){
			$scope.tab=which;
		};
		$scope.isSet=function(which){
			return $scope.tab===which;
		};

		$scope.addItem=function(json){
			$scope.items.push({
				isFinish:json.state,name:json.name
			})
			json.state=true;
			json.name='';
		}
	});







})();
