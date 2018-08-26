angular.module('meusServicos', ['ngResource'])
.factory('recursoFoto', function($resource){

	return $resource('v1/fotos/:fotoId', null, {
		update : {
			method : 'PUT'
		}
	});

})
.factory('cadastroDeFotos', function(recursoFoto, $q){

	var servico = {};

	servico.cadastrar = function(foto){
		return $q(function(resolve, reject){
			if(foto._id){

				recursoFoto.update({fotoId : foto._id}, foto ,function(){
					resolve({
						mensagem: 'The photo was successfully updated!',
						inclusao: false
					});
				}, function(erro){
					console.log(erro);
					reject({
						mensagem : 'The photo could not be updated!'
					});
				});

			}else{

				recursoFoto.save(foto, function(){
					resolve({
						mensagem: 'The photo was successfully added!',
						inclusao: true
					})
				}, function(erro){
					console.log(erro);
					reject({
						mensagem : 'The photo could not be added!'
					});
				});

			}
		});
	};

	return servico;

});
