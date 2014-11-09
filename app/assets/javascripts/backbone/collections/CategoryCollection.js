var Todoapp = Todoapp || { Models: {}, Collections: {}, Views: {} };

Todoapp.Collections.CategoryCollection = Backbone.Collection.extend({
	model: Todoapp.Models.CategoryModel,
	url: '/categories'
});