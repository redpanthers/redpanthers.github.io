var RedPanther = window.RedPanther || angular.module('redpanther',[]);

RedPanther.service('githubApis',['$http','$q', function($http,$q){
	var userRepository = [];
	var userLanguages = [];
	getUser= function(){
		var github = new Github({
  		username: "sibinx7",
  		password: "hitman-47",
  		auth: "basic"
		});
		var user = github.getUser();
		return $q(function(resolve,reject){
			user.repos(function(err,repos){
				if(repos.length > 0){
					resolve(repos)
				}else{
					reject(userRepository)
				}
			})
		})
		

		
	}
	getAllRepository= function(){
		return $q(function(resolve,reject){
			getUser().then(function(result){
				if(result.length > 0){
					resolve(result)
				}else{
					reject(result)
				}
			})
		})
	}
	getAllLanguages= function(){
		var languages = []
	 	return $q(function(resolve,reject){
	 		getUser().then(function(values){
	 			if(values.length > 0){
	 				$.each(values,function(index,value){
	 					if(value.language != null && languages.indexOf(value.language) == - 1){
	 						languages.push(value.language)
	 					}
	 				})
	 				resolve(languages)
	 			}else{
	 				reject(languages)
	 			}
	 		})
	 	})
		
		
	}
	return{
		getAllLanguages: getAllLanguages,
		getAllRepository: getAllRepository
	}
}])
