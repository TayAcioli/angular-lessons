angular.module('alurapic').controller('FotoController', function($scope, cadastroDeFotos, recursoFoto, $routeParams){

	$scope.foto = {};
	$scope.mensagem = '';

	if($routeParams.fotoId){
		
		recursoFoto.get({fotoId : $routeParams.fotoId}, function(foto){
			$scope.foto = foto;
		}, function(erro){
			console.log(erro);
			$scope.mensagem = 'An error occured during the transaction!';
		});
		
	}

	$scope.submeter = function() {

		if(!$scope.formulario.$valid){
			return;
		}

		cadastroDeFotos.cadastrar($scope.foto)
		.then(function(dados){
			$scope.mensagem = dados.mensagem;
			if(dados.inclusao){
				$scope.foto = {};
			}
		})
		.catch(function(dados){
			$scope.mensagem = dados.mensagem;
		});
		
	};

});
