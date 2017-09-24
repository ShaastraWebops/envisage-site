'use strict';

describe('Component: contact', function() {
  // load the component's module
  beforeEach(module('envisageSiteApp.contact'));

  var contactComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    contactComponent = $componentController('contact', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
