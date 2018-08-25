angular.module('alurapic').controller('FotosController', function($scope, recursoFoto) {

    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

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
});
