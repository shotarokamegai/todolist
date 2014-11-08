var Todoapp = Todoapp || { Models: {}, Collections: {}, Views: {} };

Todoapp.Models.TodoItem = Backbone.Model.extend({
	initialize: function(){
		console.log('Added New Item!');
	},

	defaults: {
		name: ''
	}

});