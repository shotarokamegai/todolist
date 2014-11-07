var Todoapp = Todoapp || { Models: {}, Collections: {}, Views: {} };

Todoapp.Views.TodoListView = Backbone.View.extend({
	initialize: function(){
		this.listenTo(this.collection, 'add', this.render);
	},
	render: function(){
		var self = this;
		this.$el.empty();
		_.each(this.collection.models, function(todoItem){
			var todoView = new Todoapp.Views.TodoView({model: todoItem})
			self.$el.append( todoView.render().el )
		});
	}
});