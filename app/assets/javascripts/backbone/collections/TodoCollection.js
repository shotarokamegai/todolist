var Todoapp = Todoapp || { Models: {}, Collections: {}, Views: {} };

Todoapp.Collections.TodoCollection = Backbone.Collection.extend({
	model: Todoapp.Models.TodoItem,
	url: '/items'
});