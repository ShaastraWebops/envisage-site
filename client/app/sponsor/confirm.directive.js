'use strict';
const angular = require('angular');


/*
 Used for delivering the confirmation message
*/

export default angular.module('eventsPortal2018App.confirm', [])
  .directive('confirm', function() {
    return {
        link: function(scope, element, attrs) {
            restrict: 'EA',
            element.bind('click', function() {
                var message = attrs.ngReallyMessage;
                if (message && confirm(message)) {
                    scope.$apply(attrs.ngReallyClick);
                }
                else {
                    scope.$apply(attrs.ngCancelClick);
                }
            });
        }
}
  })
  .name;
