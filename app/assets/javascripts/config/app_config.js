// App is just a base name. This is the global namespace for you app.
window.EmberSandbox = Ember.Application.create();

EmberSandbox.Store = DS.Store.extend({
  revision: 11,
  adapter: DS.RESTAdapter.create()
});