// App is just a base name. This is the global namespace for you app.
window.App = Ember.Application.create();

App.ApplicationController = Ember.Controller.extend();

// App.Store = DS.Store.extend({
//   revision: 11,
//   adapter: DS.RESTAdapter.create({})
// });


// Static Objects
var developers = [
	"Bob Hanson",
	"Sergio Flores",
	"Jeff Groll",
	"Adam Lintz"
]