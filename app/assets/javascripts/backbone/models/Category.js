var Todoapp = Todoapp || { Models: {}, Collections: {}, Views: {} };

Todoapp.Models.CategoryModel = Backbone.Model.extend({
	initialize: function(){
		console.log('Added New Category!');
	},

	defaults: {
		name: ''
	}

});