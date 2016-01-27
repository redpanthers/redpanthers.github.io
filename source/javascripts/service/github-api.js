var RedPanthers = window.RedPanthers || angular.module('redpanthers',[]);

RedPanthers.service('githubApis',['$http','$q','$resource',function($http,$q, $resource){
  var userRepository = [];
  var userLanguages = [];
  getAllRepository= function(){
    return $resource('https://api.github.com/orgs/redpanthers/repos',{})

  }
  getRedpanthersMembers= function(){
    return $resource('https://api.github.com/orgs/redpanthers/members',{})
  }
  getRedpantherCompanyInfo = function(){
    return $resource('https://api.github.com/orgs/redpanthers')
  }
  getUserInformation= function(){
    return $resource('https://api.github.com/users/:username',{},{
      'getUser':{
        method:'GET',
        params: { username:'@username'}
      }
    });
  }
  return{
    //getAllLanguages: getAllLanguages,
    getAllRepository: getAllRepository,
    getRedpanthersMembers:getRedpanthersMembers,
    getUserInformation: getUserInformation,
    getRedpantherCompanyInfo:getRedpantherCompanyInfo
  }
}])
