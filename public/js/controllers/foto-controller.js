angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams){

	$scope.foto = {};
	$scope.mensagem = '';

	if($routeParams.fotoId){
		$http.get('v1/fotos/' + $routeParams.fotoId)
		.success(function(foto){
			$scope.foto = foto;
		})
		.error(function(erro){
			console.log(erro);
			$scope.mensagem = 'An error occured during the transaction!';
		});
	}

	$scope.submeter = function() {

		if(!$scope.formulario.$valid){
			return;
		}

		if($scope.foto._id){

			$http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
			.success(function(){
				$scope.mensagem = "The photo was successfully updated!";
			})
			.error(function(erro){
				$scope.mensagem = "The photo could not be updated!";
				console.log(erro);
			});

		} else {
			
			$http.post('v1/fotos', $scope.foto)
			.success(function(){
				$scope.foto = {};
				$scope.mensagem = "The photo was successfully added!";
			})
			.error(function(erro){
				$scope.mensagem = "The photo could not be added!";
				console.log(erro);
			});

		}
	};

});
