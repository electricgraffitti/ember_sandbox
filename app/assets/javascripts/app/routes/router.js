App.Router.map(function() {
	this.route("home", { path: "/" });
  //match("/").to("home");
});

App.HomeRoute = Ember.Route.extend({
	setupControllers: function (controller) {
		controller.set('developers', developers);
	}
});