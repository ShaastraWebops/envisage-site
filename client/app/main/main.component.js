import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';
import $ from 'jquery'

export class MainController {
	
	
	constructor(){

		var old_deg=0, deg=0;
		
		$("#back").on('mousewheel  DOMMouseScroll',function(e){

		    e.stopPropagation();
		    e.preventDefault();
		    
		    var scroll = e.wheelDelta || -e.detail || e.originalEvent.wheelDelta || -e.originalEvent.detail;
		    var dir;

		    if(scroll<0){
		    	dir = -1;
		    }
		    else{
		    	dir = 1;
		    }

		    deg = dir*80;
		    
		    deg = deg + old_deg;
		    
		   	old_deg = deg;

		    $("#rotator").css( "transform","rotateY(" + deg + "deg)" );
		
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
