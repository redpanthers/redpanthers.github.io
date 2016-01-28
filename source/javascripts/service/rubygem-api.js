var RedPanthers  = window.RedPanthers || angular.module('redpanthers',{});
RedPanthers.service('rubygemApi',['$resource','$q','$http',function($resource,$q,$http){
  /**
   * Add more contributors names
   */

  getEachUsersRepo = function(user){    
      return $q(function(resolve,reject){
        $http.get('https://crossorigin.me/https://rubygems.org/api/v1/owners/'+user+'/gems.json').then(function(result){
          
          if(result.data.length > 0){ 
            resolve(result.data)
          }else{
            reject("Error")
          }
        })
      })
  }
  return{
    getEachUsersRepo:getEachUsersRepo
  }
}]);