angular.module('alurapic').controller('FotosController', function($scope, recursoFoto) {

    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';
    $scope.palindromo = '';

    recursoFoto.query(function(fotos){
    	$scope.fotos = fotos;
    }, function(erro){
    	console.log(erro);
    });

    $scope.remover = function(foto) {

    	recursoFoto.delete({fotoId : foto._id}, function(){
    		var indiceFoto = $scope.fotos.indexOf(foto);
    		$scope.fotos.splice(indiceFoto,1);
    		$scope.mensagem = foto.titulo + ' was successfully removed!';
    	}, function(erro){
    		$scope.mensagem = 'There was an error during the removal and the photo ' + foto.titulo + ' was not removed.';
    		console.log(erro);
    	});

    };

    $scope.checkPalindrome = function(palindromo){

		if(!$scope.formulario.$valid){
			return;
		}

		palindromo = palindromo.replace(/\s/g,'').replace(/[^a-zA-Z ]/g, "").toLowerCase();

		var contrario = palindromo.split("").reverse().join("");

		if(palindromo == contrario){
			$scope.mensagemPalindromo  = '"' + $scope.palindromo + '" is a palindrome!';
		}else{
			$scope.mensagemPalindromo  = '"' + $scope.palindromo + '" is not a palindrome!';
		}

    }
});
