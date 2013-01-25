EmberSandbox.Router.reopen({
  location: "history"
});
EmberSandbox.Router.map(function() {
	this.resource('tables', function() {
		this.resource('table', {path:':table_id'});
	});
});