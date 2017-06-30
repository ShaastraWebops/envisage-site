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

	   	$("#logo").hover(function(){
	   		$("#logo-holder").hover();
	   	})

		// var old_deg=0, deg=0, deg2 = 0,x=0;
		// var vis0 = 0, vis1 = 1, vis2 = 2, vis3 = 3, vis4 = 4;

		// if( ($(window).innerWidth()) < 900)
	 //    {
	 //    	var scale = $(window).innerWidth()/1200;
	 //    	$(".box-content").css("transform","scale(" + scale + ")" );
	 //    }
	 //    else
	 //    	$(".box-content").css("transform","scale(1)" );

	    $(window).on('resize',function(){
	      
	     	// if( ($(window).innerWidth()) < 900)
	      // 	{
	      // 		var scale = $(window).innerWidth()/1200;
	      // 		$(".box-content").css("transform","scale(" + scale + ")" );
	      // 	}
	      // 	else
	    		// $(".box-content").css("transform","scale(1)" );

	    	w = $(".portal").innerWidth();
	    	w2 = $(window).innerWidth();
	    	$(".portal").css("height",w + "px");
	    	$(".portal").css("border-radius",w + "px");
	    	$(".portal").css("padding-top",w/3+ "px");
	    	$(".portal").css("font-size",w/6.5 + "px");
	   		$(".cube-container").css("left",0.51*w2 - 119.992 + "px");

	    })
		
		// $("#back").on('mousewheel  DOMMouseScroll',function(e){

		//     e.stopPropagation();
		//     e.preventDefault();
		//     var scroll = e.wheelDelta || -e.detail || e.originalEvent.wheelDelta || -e.originalEvent.detail;
		//     var dir;

		//     if(scroll<0)
		//     	dir = -1;
		//     else
		//     	dir = 1;

		//     deg = dir*72;
		//     deg = deg + old_deg;		    
		//    	old_deg = deg;

		//     $("#revolver").css( "transform","rotateY(" + deg + "deg)" );
		    
	 //    	if(deg%144==0)
	 //    		deg2 = 360;
	 //    	else
	 //    		deg2 = 0;

	 //    	$("#_007").css( "transform","rotateZ(" + deg2 +"deg)" );
	 //    	$("#man").css( "transform","rotateY(" + deg2 +"deg)" );
	    	
	 //    	if(deg2==0)
	 //    	{
	 //    		$("#dance").css( "opacity","0" );
	 //    		$("#ironman").css( "transform","scale(0.2) rotateZ(360deg)" );
	 //    	} 
	 //    	else
	 //    	{
	 //    		$("#dance").css( "opacity","1" );
	 //    		$("#ironman").css( "transform","scale(1) rotateZ(0deg)" );
	 //    	}

		// })
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
