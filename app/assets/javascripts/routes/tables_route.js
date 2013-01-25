EmberSandbox.TablesRoute = Ember.Route.extend({
	model: function() {
		return EmberSandbox.Table.find();
	}
});