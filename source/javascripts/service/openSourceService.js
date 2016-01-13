var RedPanther = window.RedPanther || angular.module('redpanther',[])
RedPanther.factory('openSouceProjects',['$http',function($http){
  getProjectCategories = function(){
    var categories = [
      {categoryName:"Javascript",categoryId:1,categoryProjects:12,categoryImage:"js.png",categorySlug:"javascript"},
      {categoryName:"Rails",categoryId:5,categoryProjects:21,categoryImage:"rails.png",categorySlug:"rails"},
      {categoryName:"Ionic",categoryId:3,categoryProjects:31,categoryImage:"ionic.png",categorySlug:"ionic"},
      {categoryName:"Angular",categoryId:8,categoryProjects:8,categoryImage:"angular.png",categorySlug:"angular"},
      // {categoryName:"React JS",categoryId:12,categoryProjects: 4},
      {categoryName:"Dart",categoryId:18,categoryProjects:2,categoryImage:"dart.png",categorySlug:"dart"}
    ];
    return categories;
  }
  getAllProjects = function(){
    var allProjects = [
      {projectName:"Rails Framework",projectCategory:"Rails",projectCategorySlug:"rails",projectDescription:"Web framework written in ruby on rails",projectOwner:"ruby",projectOwnerUsername:"ruby",projectContributers:[
        {authorImage:"http://thewhiteboardct.com/wp-content/uploads/2013/08/MG_4273.jpg",authorName:"John Doe", authorUserId:22334},{authorImage:"http://thewhiteboardct.com/wp-content/uploads/2013/08/mel.jpg",authorName:"Rahul", authorUserId:2334}
      ],projectLanguages:["Ruby", "Coffeescript","HTML","CSS"]},
      {projectName:"Slick Carousel",projectCategory:"Javascript",projectCategorySlug:"javascript",projectDescription:"Javascript image slider and carousel",projectOwner:"slick",projectOwnerUsername:"slick",projectContributers:[
        {authorImage:"http://thewhiteboardct.com/wp-content/uploads/2013/08/MG_4273.jpg",authorName:"Akhil Don",authorUserId:23346},{authorImage:"http://thewhiteboardct.com/wp-content/uploads/2013/08/mel.jpg",authorName:"Bibin Tom",authorUserId:5356}
      ],projectLanguages:["Javascript","CSS"]},
      {projectName:"Hybrid Ecommerce App",projectCategory:"Ionic",projectCategorySlug:"ionic",projectDescription:"Hybrid cross platform mobile e-commerse store",projectOwner:"ionic",projectOwnerUsername:"ionic",projectContributers:[
        {authorImage:"http://thewhiteboardct.com/wp-content/uploads/2013/08/MG_4273.jpg",authorName:"Bilbo Baggins",authorUserId:8990},{authorImage:"http://thewhiteboardct.com/wp-content/uploads/2013/08/mel.jpg",authorName:"Bruce Wayne",authorUserId:99012},{authorImage:"http://assets.toptal.io/uploads/user/photo/44554/large_865b97c8-78da-4296-86ae-33ef1820aa80.jpg",authorName:"Clark Kent", authorUserId:45435}
      ],
      projectLanguages:["Angular","HTML","CSS","Cordova"]},
      {projectName:"Slim Scroll",projectCategory:"Javascript",projectCategorySlug:"javascript",projectDescription:"Scrollable element for long description",projectOwner:"Ezra Milller",projectOwnerUsername:"ezra-miller",projectContributers:[
        {authorImage:"http://thewhiteboardct.com/wp-content/uploads/2013/08/MG_4273.jpg",authorName:"Ezra Miller",authorUserId:73634},{authorImage:"http://thewhiteboardct.com/wp-content/uploads/2013/08/mel.jpg",authorName:"Jason Momoa",authorUserId:542543},{authorImage:"http://assets.toptal.io/uploads/user/photo/44554/large_865b97c8-78da-4296-86ae-33ef1820aa80.jpg",authorName:"Ray Fisher",authorUserId:34234}
      ],projectLanguages:["Javascript","CSS"]},
      {projectName:"School Management System",projectCategory:"dart",projectCategorySlug:"dart",projectDescription:"School Management software written in dark language",projectOwner:"Jesse Eisenberg",projectOwnerUsername:"jesse-eisenberg",projectContributers:[
        {authorImage:"http://thewhiteboardct.com/wp-content/uploads/2013/08/MG_4273.jpg",authorName:"Jesse Eisenberg",authorUserId:33411},{authorImage:"http://thewhiteboardct.com/wp-content/uploads/2013/08/mel.jpg",authorName:"Amy Adams",authorUserId:12334},{authorImage:"http://assets.toptal.io/uploads/user/photo/44554/large_865b97c8-78da-4296-86ae-33ef1820aa80.jpg",authorName:"Gal Gadot",authorUserId:1234}
      ],projectLanguages:["Dart","HTML","CSS","Jquery"]},
      {projectName:"World News portal",projectCategory:"Angular JS",projectCategorySlug:"angular",projectDescription:"English News website using angular, data fetched using apis",projectOwner:"Jeremy Ions",projectOwnerUsername:"jeremy-ions",projectContributers:[
        {authorImage:"http://thewhiteboardct.com/wp-content/uploads/2013/08/MG_4273.jpg",authorName:"Michael Shannon",authorUserId:1232},{authorImage:"http://thewhiteboardct.com/wp-content/uploads/2013/08/mel.jpg",authorName:"Russell Crowe",authorUserId:2232},{authorImage:"http://assets.toptal.io/uploads/user/photo/44554/large_865b97c8-78da-4296-86ae-33ef1820aa80.jpg",authorName:"Kevin Costner",authorUserId:4232},{authorName:"Ayelet Zurer",authorUserId:6232}
      ],projectLanguages:["Angular JS","HTML","CSS","Handlebar"]},
      {projectName:"Isotope",projectCategory:"Javascript",projectCategorySlug:"javascript",projectDescription:"Responsive and automatic grid system",projectOwner:"Anthony Mackie",projectOwnerUsername:"anthony-mackie",projectContributers:[
        {authorImage:"http://thewhiteboardct.com/wp-content/uploads/2013/08/MG_4273.jpg",authorName:"Anthony Mackie",authorUserId:89798},{authorImage:"http://thewhiteboardct.com/wp-content/uploads/2013/08/mel.jpg",authorName:"Sebastian Stan",authorUserId:19798},{authorImage:"http://assets.toptal.io/uploads/user/photo/44554/large_865b97c8-78da-4296-86ae-33ef1820aa80.jpg",authorName:"Hayley Atwell",authorUserId:59798}
      ],projectLanguages:["Javascript","Angular","CSS"]},
      {projectName:"Code 1, Web dvelopment Project",projectCategory:"Rails",projectCategorySlug:"rails",projectDescription:"Web development and designing using latest languages",projectOwner:"Chris Pratt",projectOwnerUsername:"chris-pratt",projectContributers:[
        {authorImage:"http://thewhiteboardct.com/wp-content/uploads/2013/08/MG_4273.jpg",authorName:"Gregg Henry",authorUserId:7622131},{authorImage:"http://thewhiteboardct.com/wp-content/uploads/2013/08/mel.jpg",authorName:"Ophelia Lovibond",authorUserId:33423},{authorImage:"http://assets.toptal.io/uploads/user/photo/44554/large_865b97c8-78da-4296-86ae-33ef1820aa80.jpg",authorName:"Michael Rooker",authorUserId:789623423}
      ],projectLanguages:["Ruby","HTML"]},
      {projectName:"Code 11, Web dvelopment Project",projectCategory:"Angular",projectCategorySlug:"angular",projectDescription:"Web development and designing using latest languages",projectOwner:"Lee Pace",projectOwnerUsername:"lee-pace",projectContributers:[
        {authorImage:"http://thewhiteboardct.com/wp-content/uploads/2013/08/MG_4273.jpg",authorName:"Glenn Close",authorUserId:2122131},{authorImage:"http://thewhiteboardct.com/wp-content/uploads/2013/08/mel.jpg",authorName:"Gregg Henry",authorUserId:123423},{authorImage:"http://assets.toptal.io/uploads/user/photo/44554/large_865b97c8-78da-4296-86ae-33ef1820aa80.jpg",authorName:"Michael Rooker",authorUserId:21453423423}
      ],projectLanguages:["Javascript","Angular","CSS"]},
      {projectName:"Code 5, Web dvelopment Project",projectCategory:"Dart",projectCategorySlug:"dart",projectDescription:"Web development and designing using latest languages",projectOwner:"Chris Pratt",projectOwnerUsername:"chris-pratt",projectContributers:[
        {authorImage:"http://thewhiteboardct.com/wp-content/uploads/2013/08/MG_4273.jpg",authorName:"Gregg Henry",authorUserId:567822131},{authorImage:"http://thewhiteboardct.com/wp-content/uploads/2013/08/mel.jpg",authorName:"Michael Rooker",authorUserId:3343423},{authorImage:"http://assets.toptal.io/uploads/user/photo/44554/large_865b97c8-78da-4296-86ae-33ef1820aa80.jpg",authorName:"Glenn Close",authorUserId:123423423}
      ],projectLanguages:["Ruby","HTML"]},
      {projectName:"Code 9, Web dvelopment Project",projectCategory:"Rails",projectCategorySlug:"rails",projectDescription:"Web development and designing using latest languages",projectOwner:"Lee Pace",projectOwnerUsername:"lee-pace",projectContributers:[
        {authorImage:"http://thewhiteboardct.com/wp-content/uploads/2013/08/MG_4273.jpg",authorName:"Michael Rooker",authorUserId:8922131},{authorImage:"http://thewhiteboardct.com/wp-content/uploads/2013/08/mel.jpg",authorName:"Glenn Close",authorUserId:4343423},{authorImage:"http://assets.toptal.io/uploads/user/photo/44554/large_865b97c8-78da-4296-86ae-33ef1820aa80.jpg",authorName:"Gregg Henry",authorUserId:67823423}
      ],projectLanguages:["Javascript","Angular","CSS"]},
      {projectName:"Code 12, Web dvelopment Project",projectCategory:"Dart",projectCategorySlug:"dart",projectDescription:"Web development and designing using latest languages",projectOwner:"Chris Pratt",projectOwnerUsername:"chris-pratt",projectContributers:[
        {authorImage:"http://thewhiteboardct.com/wp-content/uploads/2013/08/MG_4273.jpg",authorName:"Gregg Henry",authorUserId:545422131},{authorImage:"http://thewhiteboardct.com/wp-content/uploads/2013/08/mel.jpg",authorName:"Michael Rooker",authorUserId:53423},{authorImage:"http://assets.toptal.io/uploads/user/photo/44554/large_865b97c8-78da-4296-86ae-33ef1820aa80.jpg",authorName:"Glenn Close",authorUserId:54623423}
      ],projectLanguages:["Ruby","HTML"]},
      {projectName:"Code 29, Web dvelopment Project",projectCategory:"Rails",projectCategorySlug:"rails",projectDescription:"Web development and designing using latest languages",projectOwner:"Karen Gillan",projectOwnerUsername:"karen-gillen",projectContributers:[
        {authorImage:"http://thewhiteboardct.com/wp-content/uploads/2013/08/MG_4273.jpg",authorName:"Gregg Henry",authorUserId:23422131},{authorImage:"http://thewhiteboardct.com/wp-content/uploads/2013/08/mel.jpg",authorName:"Glenn Close",authorUserId:83423},{authorImage:"http://assets.toptal.io/uploads/user/photo/44554/large_865b97c8-78da-4296-86ae-33ef1820aa80.jpg",authorName:"Michael Rooker",authorUserId:5465423423}
      ],projectLanguages:["Javascript","Angular","CSS"]},
      {projectName:"Code 32, Web dvelopment Project",projectCategory:"Javascript",projectCategorySlug:"javascript",projectDescription:"Web development and designing using latest languages",projectOwner:"Chris Pratt",projectOwnerUsername:"chris-pratt",projectContributers:[
        {authorImage:"http://thewhiteboardct.com/wp-content/uploads/2013/08/MG_4273.jpg",authorName:"Glenn Close",authorUserId:4322131},{authorImage:"http://thewhiteboardct.com/wp-content/uploads/2013/08/mel.jpg",authorName:"Michael Rooker",authorUserId:63423},{authorImage:"http://assets.toptal.io/uploads/user/photo/44554/large_865b97c8-78da-4296-86ae-33ef1820aa80.jpg",authorName:"Ophelia Lovibond",authorUserId:4356423423}
      ],projectLanguages:["Ruby","HTML"]},
      {projectName:"Code 44, Web dvelopment Project",projectCategory:"Javascript",projectCategorySlug:"javascript",projectDescription:"Web development and designing using latest languages",projectOwner:"Karen Gillan",projectOwnerUsername:"karen-gillen",projectContributers:[
        {authorImage:"http://thewhiteboardct.com/wp-content/uploads/2013/08/MG_4273.jpg",authorName:"Michael Rooker",authorUserId:56622131},{authorImage:"http://thewhiteboardct.com/wp-content/uploads/2013/08/mel.jpg",authorName:"Glenn Close",authorUserId:983423},{authorImage:"http://assets.toptal.io/uploads/user/photo/44554/large_865b97c8-78da-4296-86ae-33ef1820aa80.jpg",authorName:"Ophelia Lovibond",authorUserId:3433423}
      ],projectLanguages:["Javascript","Angular","CSS"]},
      {projectName:"Code 17, Web dvelopment Project",projectCategory:"Rails",projectCategorySlug:"rails",projectDescription:"Web development and designing using latest languages",projectOwner:"Chris Pratt",projectOwnerUsername:"chris-patte",projectContributers:[
        {authorImage:"http://thewhiteboardct.com/wp-content/uploads/2013/08/MG_4273.jpg",authorName:"Glenn Close",authorUserId:6622131},{authorImage:"http://thewhiteboardct.com/wp-content/uploads/2013/08/mel.jpg",authorName:"Gregg Henry",authorUserId:553423},{authorImage:"http://assets.toptal.io/uploads/user/photo/44554/large_865b97c8-78da-4296-86ae-33ef1820aa80.jpg",authorName:"Ophelia Lovibond",authorUserId:1213423}
      ],projectLanguages:["Ruby","HTML"]}
    ];
    return allProjects;
  }
  getTenProjectsByCategory = function(category){
    
    var i = 10;
    var categories = getAllProjects();
    var category = category?category:""
    var tenCategory = []
    if(category==""){
      $.each(categories,function(index,value){
        if(index<10){ 
          $.each(value.projectContributers,function(index,value2){            
           if(typeof(value2.authorImage)=="undefined"){ // if image is not available we use default image 
             value.projectContributers[index].authorImage  = "https://www.drupal.org/files/profile_default.jpg"
           }
          })
          tenCategory.push(value)
        }
      })
    }else{
      $.each(categories,function(index,value){
        if(index<10 && value.projectCategory==category){
          tenCategory.push(value)
        }
      })
    }
    return tenCategory    
  }
  getCategoryDetailBySlug = function(slug){
    var categories = getProjectCategories();
    var category = null 
    $.each(categories,function(index,value){     
      if(value.categorySlug == slug){
        category = value 
      }
    })
    return category;
  }
  getProjectsByCategorySlug = function(slug){
    var category  = getCategoryDetailBySlug(slug)
    var projects  = getAllProjects()
    var categoryProjects = []
    if(category!=null){
    $.each(projects,function(index,value){
      if(value.projectCategory == category.categoryName){
    
        categoryProjects.push(value)
      }
    })
    }else{
      categoryProjects = [] 
    }
      
      return categoryProjects
        
  }
  return{
    getProjectCategories: getProjectCategories,
    getTenProjectsByCategory: getTenProjectsByCategory,
    getProjectsByCategorySlug: getProjectsByCategorySlug,
    getCategoryDetailBySlug: getCategoryDetailBySlug
  }
}]) 