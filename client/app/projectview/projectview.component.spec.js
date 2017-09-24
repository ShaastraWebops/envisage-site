'use strict';

describe('Component: ProjectviewComponent', function() {
  // load the controller's module
  beforeEach(module('envisageSiteApp.projectview'));

  var ProjectviewComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ProjectviewComponent = $componentController('projectview', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
