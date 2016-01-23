var RedPanther = window.RedPanther || angular.module('redpanther',[]);

RedPanther.service('githubApis',['$http','$q', function($http,$q){
	var userRepository = [];
	var userLanguages = [];
	getUser= function(){
		var github = new Github({
  		username: githubUserDetails.username,
  		password: githubUserDetails.password,
  		auth: "basic"
		});
		var user = github.getUser();
		return $q(function(resolve,reject){
			user.orgRepos('redpanthers',function(err,repos){
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
	getRedpanthersMembers= function(){
		return $q(function(resolve, reject){
				$.getJSON('https://api.github.com/orgs/redpanthers/members',function(result){
					console.log(result)
				})
		})
	}
	return{
		//getAllLanguages: getAllLanguages,
		getAllRepository: getAllRepository,
		getRedpanthersMembers:getRedpanthersMembers
	}
}])
