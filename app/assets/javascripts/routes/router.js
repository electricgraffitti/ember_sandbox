EmberSandbox.Router.reopen({
  location: "history"
});
EmberSandbox.Router.map(function() {
	this.route("developers", { path: "/" });
	this.resource("developers");
});