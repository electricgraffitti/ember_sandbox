EmberSandbox.DevelopersController = Ember.ArrayController.extend({
	setupController: function(controller, model) {
    controller.set('content', model);
    alert('here');
    console.log(controller);
  }

});