(function () {

  angular.module('app')
    .service('addProjectService', [addProjectService]);


  function addProjectService () {
    //this service hold the data to be avaliable to the multistep form
    this.projectData={};
    this.projectData.templateBody ={};

    console.log(this.projectData);
  }

}());
