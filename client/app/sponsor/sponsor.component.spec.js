'use strict';

describe('Component: sponsor', function() {
  // load the component's module
  beforeEach(module('eventsPortal2018App.sponsor'));

  var sponsorComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    sponsorComponent = $componentController('sponsor', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
