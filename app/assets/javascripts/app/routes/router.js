App.Router.map(function() {
	this.route("developers", { path: "/" });
  //match("/").to("home");
});

App.DevelopersRoute = Ember.Route.extend({
	setupControllers: function (controller) {
		controller.set('developers', developers);
	}
});