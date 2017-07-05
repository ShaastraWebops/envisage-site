import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './prevprojects.routes';
import $ from 'jquery'

export class PrevprojectsController {

  prevprojects = [ ];
  newPrevproject = {
    "name" : "",
    "info" : ""
  };
  editproject = {};
  

  /*@ngInject*/
  constructor($http, Auth) {
    this.$http = $http;
    this.isAdmin = Auth.isAdminSync;
    console.log(this.isAdmin());
  }

  $onInit() {
    // this.$http.get('/api/prevprojects')
    //   .then(response => {
    //     this.prevprojects = response.data;
    //   });

    // console.log(this.prevprojects);

    this.prevprojects = [
      { 
        "name" : "Project 1",
        "info" : " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        "pictures" : ["../assets/images/cube1.JPG", "../assets/images/cube2.jpg", "../assets/images/cube3.JPG", "../assets/images/cube4.jpg",],
      },

      { 
        "name" : "Project 2",
        "info" : " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        "pictures" : ["../assets/images/cube2.jpg", "../assets/images/cube1.JPG", "../assets/images/cube3.JPG", "../assets/images/cube4.jpg",],
      },

      { 
        "name" : "Project 3",
        "info" : " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        "pictures" : ["../assets/images/cube3.JPG", "../assets/images/cube1.JPG", "../assets/images/cube2.jpg", "../assets/images/cube4.jpg",],
      }

    ];
    console.log(this.prevprojects);

  }

  bringGallery() {
    $("#gallery").css({
      "transform" : "translateX(0vw) translateY(0vh)"
    });
    $(".tile").css("display","none");
  }

  closeGallery() {
    $(".tile").css("display","block");
    $("#gallery").css({
      "transform" : "translateX(-100vw) translateY(-92vh)"
    });
  }

  addPrevproject() {
    // if(this.newPrevproject) {
    //   this.$http.post('/api/prevprojects', {
    //     name: this.newPrevproject
    //   });
    //   this.newPrevproject = '';
    // }

    this.newPrevproject.pictures = ["../assets/images/cube1.JPG", "../assets/images/cube2.jpg", "../assets/images/cube3.JPG", "../assets/images/cube4.jpg",];
    console.log(this.newPrevproject);
    if(this.newPrevproject.name != '')
      {
        this.prevprojects.push(this.newPrevproject);
        this.newPrevproject = {
          "name" : "",
          "info" : ""
        };
      }

    $(".tile").css("display","block");
    $(".add-prev").css("display","block");   
    $("#add-window").css("transform","translateX(-150vw)");
  }

  bringAdd(){
    $(".tile").css("display","none");
    $(".add-prev").css("display","none");
    $("#add-window").css("transform","translateX(0px)");
  }

  editPrevproject(index) {
    this.editproject = this.prevprojects[index];
    this.editindex = index;
    $(".tile").css("display","none");
    $(".add-prev").css("display","none");
    $("#edit-window").css("transform","translateX(0px)");
  }

  hideEdit() {
    this.prevprojects[this.editindex].name = this.editproject.name;
    this.prevprojects[this.editindex].info = this.editproject.info;
    $(".tile").css("display","block");
     $(".add-prev").css("display","block"); 
    $("#edit-window").css("transform","translateX(-150vw)");
  }

  deletePrevproject(index) {
    // this.prevproject = this.prevprojects[index];
    // this.$http.delete(`/api/posts/${this.prevproject._id}`);

    this.prevprojects.splice(index,1);
    console.log(this.prevprojects);
  }
}

export default angular.module('envisageApp.prevprojects', [uiRouter])
  .config(routing)
  .component('prevprojects', {
    template: require('./prevprojects.html'),
    controller: PrevprojectsController,
    controllerAs: 'ppCtrl'
  })
  .name;
