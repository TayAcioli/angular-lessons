angular.module('alurapic').controller('FotoController', function($scope, $http){

	$scope.foto = {};
	$scope.mensagem = '';

	$scope.submeter = function() {

		if(!$scope.formulario.$valid){
			return;
		}

		$http.post('v1/fotos', $scope.foto)
		.success(function(){
			$scope.foto = {};
			$scope.mensagem = "The photo was successfully added!";
		})
		.error(function(erro){
			$scope.mensagem = "The photo could not be added!";
			console.log(erro);
		});
	};

});
