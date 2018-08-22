angular.module('alurapic').controller('FotosController', function($scope, $http) {

    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    $http.get('/v1/fotos')
    .success(function(retorno) {
        $scope.fotos = retorno;
    })
    .error(function(erro) {
        console.log(erro)
    });

    $scope.remover = function(foto) {

    	$http.delete('v1/fotos/' + foto._id)
    	.success(function(){
    		var indiceFoto = $scope.fotos.indexOf(foto);
    		$scope.fotos.splice(indiceFoto,1);
    		$scope.mensagem = foto.titulo + ' was successfully removed!';
    	})
    	.error(function(erro){
    		$scope.mensagem = 'There was an error during the removal and the photo ' + foto.titulo + ' was not removed.';
    		console.log(erro);
    	});
    };
});
