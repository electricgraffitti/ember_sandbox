App.Router.reopen({
  location: "history"
})
App.Router.map(function() {
	this.route("developers", { path: "/" });
});

App.DevelopersRoute = Ember.Route.extend({
	setupController: function (controller) {
		controller.set('developers', developers);
	}
});