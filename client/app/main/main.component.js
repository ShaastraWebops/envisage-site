import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';
import $ from 'jquery'

export class MainController {
	
	
	constructor(){

		var old_deg=0, deg=0, deg2 = 0,x=0;
		var vis0 = 0, vis1 = 1, vis2 = 2, vis3 = 3, vis4 = 4;

		if( ($(window).innerWidth()) < 900)
	    {
	    	var scale = $(window).innerWidth()/1200;
	    	$(".box-content").css("transform","scale(" + scale + ")" );
	    }
	    else
	    	$(".box-content").css("transform","scale(1)" );

	    $(window).on('resize',function(){
	      
	     	if( ($(window).innerWidth()) < 900)
	      	{
	      		var scale = $(window).innerWidth()/1200;
	      		$(".box-content").css("transform","scale(" + scale + ")" );
	      	}
	      	else
	    		$(".box-content").css("transform","scale(1)" );

	    })
		
		$("#back").on('mousewheel  DOMMouseScroll',function(e){

		    e.stopPropagation();
		    e.preventDefault();
		    var scroll = e.wheelDelta || -e.detail || e.originalEvent.wheelDelta || -e.originalEvent.detail;
		    var dir;

		    if(scroll<0)
		    	dir = -1;
		    else
		    	dir = 1;

		    deg = dir*72;
		    deg = deg + old_deg;		    
		   	old_deg = deg;

		    $("#revolver").css( "transform","rotateY(" + deg + "deg)" );
		    
	    	if(deg%144==0)
	    		deg2 = 360;
	    	else
	    		deg2 = 0;

	    	$("#_007").css( "transform","rotateZ(" + deg2 +"deg)" );
	    	$("#man").css( "transform","rotateY(" + deg2 +"deg)" );
	    	
	    	if(deg2==0)
	    	{
	    		$("#dance").css( "opacity","0" );
	    		$("#ironman").css( "transform","scale(0.2) rotateZ(360deg)" );
	    	} 
	    	else
	    	{
	    		$("#dance").css( "opacity","1" );
	    		$("#ironman").css( "transform","scale(1) rotateZ(0deg)" );
	    	}

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
