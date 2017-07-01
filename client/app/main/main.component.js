import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';
import $ from 'jquery'

export class MainController {
	
	
	constructor(){
		var w = $(".portal").innerWidth();
		var w2 = $(window).innerWidth();
		var x = 1;
    	$(".portal").css("height",w + "px");
	    $(".portal").css("border-radius",w + "px");
	    $(".portal").css("padding-top",w/3 + "px");
	   	$(".portal").css("font-size",w/6.5 + "px");
	   	$(".cube-container").css("left",0.51*w2 - 119.992 + "px");

	   	$("#click-me").click(function(){
	   		if(x%2){
	   			$("#logo-holder").css("opacity","0");
	   			setTimeout(function(){
		   			$("#heading-content").css("transform","translateY(-220px)");
		   			$(".svg").css("transform","translateY(-220px)");
		   			$(".svg").css("animation","draw 1s linear 1s forwards");
		   			$(".cube-container").css("opacity","1");
	   			},100);
	   		}
	   		else
	   		{
	   			$("#heading-content").css("transform","translateY(0px)");
	   			$(".svg").css("transform","translateY(0px)");
	   			$(".svg").css("animation","none");
	   			$(".cube-container").css("opacity","0");
	   			setTimeout(function(){
		   			$("#logo-holder").css("opacity","1");
		   		},1000);
	   		}

	   		x++;
	   		
	   	});

	    $(window).on('resize',function(){
	      
	    	w = $(".portal").innerWidth();
	    	w2 = $(window).innerWidth();
	    	$(".portal").css("height",w + "px");
	    	$(".portal").css("border-radius",w + "px");
	    	$(".portal").css("padding-top",w/3+ "px");
	    	$(".portal").css("font-size",w/6.5 + "px");
	   		$(".cube-container").css("left",0.51*w2 - 119.992 + "px");

	    })
	}
}

export default angular.module('envisageApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController,
    controllerAs: 'mc'
  })
  .name;
