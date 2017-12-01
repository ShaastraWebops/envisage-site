
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './projectview.routes';

export class ProjectviewComponent {
  /*@ngInject*/



  constructor($scope,$stateParams,$state,$http) {

     this.$scope = $scope;


     console.log('came inside projview.component.js');

     console.log($stateParams.id, " is the params");

     if($stateParams.id == null)
     {

      console.log('entered in the null stateParams');
      $state.go("projects");

     }

     else if($stateParams.id == "Description 1")
     {
       $scope.projects =
          {
          name: "Multi Coloured POV",
          lead: ["Deepanath C" , "Abhishek Kelkar"],
          mentors:["Abhijeet Ghawade" , "Aswath"],
          members: [],
          desc:"Persistence of vision refers to the optical illusion that occurs when visual perception of an object does not cease for some time after the rays of light proceeding from it have ceased to enter the eye. To put simply, your brain persists the frame of the image for a while , even after it has disappeared. A simple example is the reason you don’t see the blades of the ceiling fan individually, but as a fused image. In the POV project we aim to enthrall the envisage audience by  displaying a video on a display 2 meters in diameter, made by using just a strip of LEDs. What’s new this year? A multicoloured POV is a whole different project from the single coloured display. A multicoloured display will have 2^24 different colours, much more than many of  the conventional displays!",
          img:"./../assets/images/images_proj/pov.png"
          };
         if(process.env.NODE_ENV === "production")
         {
           $scope.projects.img='/api/projects/inside/view/pov.png';
         }
     }


     else if($stateParams.id == "Description 2")
     {
       $scope.projects =
          {
          name: "3D Waterfall",
          lead: ["Deepanath C" , "Abhishek Kelkar"],
          mentors:["Pravallika Kollipara", "Abhijeet Ghawade"],
          members: [],
          desc:"The 3D Waterfall is a project of a grand scale, that displays patterns and images in a cylindrical curtain of water. Grand, not just in terms of physical size, but also the vastness of technical expertise and creative skills involved.This project was started last year and has sufficient groundwork and mentorship. As mentioned earlier, this project involves a vast number of fields of technical knowledge.",
          img:"./../assets/images/images_proj/3dwaterfall2.png"
          };
          if(process.env.NODE_ENV === "production")
          {
            $scope.projects.img='/api/projects/inside/view/3dwaterfall2.png';
          }
     }

     else if($stateParams.id == "Description 3")
     {
       $scope.projects =
          {
          name: "Speed Painting Bots",
          lead: ["Deepanath C" , "Abhishek Kelkar"],
          mentors:["Karteek Dhara", "Jyotesh Chowdary"],
          members: [],
          /*desc_xtra: ["1) Precise motor and actuator control (Painting the picture)" , "2) Power distribution and management (Controlling and powering many actuators at once" , "3) Mechanical design (Designing and building the platform on which all these can be placed)"],*/
          desc:"A completely new concept for Shaastra in its entirety (we hope :P). As the name suggests this project will involve coordinators building a bot which can paint a large picture in a very short time in front of a live audience. The coordinators working on this project will be working on",
          img:"./../assets/images/images_proj/painting.jpg"
          };
          if(process.env.NODE_ENV === "production")
          {
            $scope.projects.img='/api/projects/inside/view/painting.jpg';
          }
     }

     else if($stateParams.id == "Description 4")
     {
       $scope.projects =
          {
          name: "Virtual Instruments",
          lead: ["Deepanath C" , "Abhishek Kelkar"],
          mentors:["Karteek Dhara", "Jyotesh Chowdary"],
          members: [],
          /*desc_xtra: ["1) We did not do our best the last time and we know what went wrong. Not the tech but our showmanship for this particularly project lacked significantly." , "2) We did not do our best the last time and we know what went wrong. Not the tech but our showmanship for this particularly project lacked significantly. " ],*/
          desc:"Virtual instruments, as the name suggest, are musical instruments without any physical structure (kind of virtual), but resemble the actual instrument in the way we play them. We present it as a band with around 5 or 6 instruments. This was a very successful project in the previous edition of Envisage. We are adding new instruments this year along with drums (with little tweaks). There is a limit to the sort of instruments that can be made but we have a few ideas we are juggling with. Hope to have a solid idea soon. Why again? Two reasons",
          img:"./../assets/images/images_proj/virtual.jpg"
          };
          if(process.env.NODE_ENV === "production")
          {
            $scope.projects.img='/api/projects/inside/view/virtual.jpg';
          }
     }

     else if($stateParams.id == "Description 5")
     {
       $scope.projects =
          {
          name: "Laser Show",
          lead: ["Deepanath C" , "Abhishek Kelkar"],
          mentors:["Aswath", "Chaitanya"],
          members: [],
          /*desc_xtra: ["1) Image processing" , "2) Arduino programming", "3) Stepper motor control" ],*/
          desc:"This project mainly involves rotating mirrors for diverting a laser beam to project images on fog. These mirrors are rotated using stepper motors where we will be using arduinos to control them for projecting images.The image sketching is done very fast and repeatedly. Depending on the progress of the idea over the summer we might want to integrate it with the TCS concept. (Dancing suits) . Main funda revolves around :",
          img:"./../assets/images/images_proj/lasershow2.png"
          };
          if(process.env.NODE_ENV === "production")
          {
            $scope.projects.img='/api/projects/inside/view/lasershow2.png';
          }
     }

     else if($stateParams.id == "Description 6")
     {
       $scope.projects =
          {
          name: "Projection Mapping",
          lead: ["Deepanath C" , "Abhishek Kelkar"],
          mentors:["Pravallika Kollipara", "Chaitanya"],
          members: [],
          /*desc:"Ever wondered much about them high-funda holograms you see in cartoons and sci-fi movies? Well, this project is all about it. Projection mapping is an enchanting visual display that mesmerises the audience by a combination of artistic choreography and holographic projections interacting on stage to create a memorable multimedia performance. A similar project in two dimensions has been attempted in an earlier version of Envisage (link) and received a great response from the audience. Projection mapping, also known as spatial augmented reality, is a technology which is used to turn irregularly shaped objects into surfaces for projection.By using softwares (Audacity, After Effects to name a few), a two- or three-dimensional object is spatially mapped on the virtual program which mimics the real environment it is to be projected on. The software can interact with a projector to fit any desired image onto the surface of that object.",*/
          img:"./../assets/images/images_proj/mapping.jpg"
          };
          if(process.env.NODE_ENV === "production")
          {
            $scope.projects.img='/api/projects/inside/view/mapping.jpg';
          }
     }

     else if($stateParams.id == "Description 7")
     {
       $scope.projects =
          {
          name: " Dance Dance Revolution",
          lead: ["Deepanath C" , "Abhishek Kelkar"],
          mentors:["Adhitya"],
          members: [],
          /*desc_xtra: ["1) Unity" , "2) Product design", "3) Arduinos, pcb design and sensors, the coordinators in this project will get fair experience with microcontrollers, how they can be used and designing printed circuit boards in Eagle software." ],*/
          desc:"As wikipedia would put it, “Dance Dance Revolution is the pioneering series of the rhythm and dance genre in video games. Players stand on a ‘dance platform’ or stage and hit colored arrows laid out in a cross with their feet to musical and visual cues. Players are judged by how well they time their dance to the patterns presented to them and are allowed to choose more music to play to if they receive a passing score. DDR is a very popular game developed for many consoles. The coordinators who take up this project will build this game using a unity+arduino approach. We will develop a game on unity which will be the user interface of the game. Further, we will build a robust mat with sensors which shall interface with the game.The game is interactive in nature and has prospects of including in malls or any place where we expect Shaastra publicity to work in huge numbers. This project will involve the following skills:",
          img:"./../assets/images/images_proj/DDR.jpg"
          };
          if(process.env.NODE_ENV === "production")
          {
            $scope.projects.img='/api/projects/inside/view/ddr.jpg';
          }
     }


     else if($stateParams.id == "Description 8")
     {
       $scope.projects =
          {
          name: "Interactive LED table",
          lead: ["Deepanath C" , "Abhishek Kelkar"],
          mentors:["Adhitya"],
          members: [],
          desc:"Most of you might have heard of a lot of LED based projects like LED matrix, RGB LED cube, mini POV modules, etc. where people won’t get a chance to control what is happening, except watching it as if it were a show. This is another LED based project but with a twist. The twist being that it is interactive. The interaction will be based upon proximity detection using infrared phototransistors. This project would involve arduino and microcontroller knowledge to control multiple LEDs using shift registers.",
          img:"./../assets/images/images_proj/led.png"
          };
          if(process.env.NODE_ENV === "production")
          {
            $scope.projects.img='/api/projects/inside/view/led.png';
          }
     }

     else if($stateParams.id == "Description 9")
     {
       $scope.projects =
          {
          name: "Face sketching Bot",
          lead: ["Deepanath C" , "Abhishek Kelkar"],
          mentors:["Adhitya"],
          members: [],
          /*desc_xtra: ["1) Arduino stepper controlling" , "2) Basic mech funda", "3) Basic image processing" , "4) Gen elec funda" ],*/
          desc:"The basic idea for this project is to make a pencil sketcher using two stepper motors which control the two degrees of freedom (X,Y positions). The feed to sketch is to be given from the processed images from the camera. The skills :",
          img:"./../assets/images/images_proj/facesketching1.png"
          };
          if(process.env.NODE_ENV === "production")
          {
            $scope.projects.img='/api/projects/inside/view/facesketching1.png';
          }
     }

     else
     {
       $state.go("projects");
     }

   }

  $onInit() {}
}

export default angular.module('envisageSiteApp.projectview', [uiRouter])
  .config(routes)
  .component('projectview', {
    template: require('./projectview.html'),
    controller: ProjectviewComponent,
    controllerAs: 'projectviewCtrl'
  })
  .name;
