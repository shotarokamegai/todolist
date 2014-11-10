var Todoapp = Todoapp || { Models: {}, Collections: {}, Views: {} };

Todoapp.Views.TodoByCategoryListView = Backbone.View.extend({
	initialize: function(){
		// this.listenTo(this.collection, 'add', this.render);
	},
	render: function(){
		var self = this;
		this.$el.empty();
		_.each(this.collection.models, function(todoItem){
			var todoByCategoryView = new Todoapp.Views.TodoByCategoryView({model: todoItem})
			self.$el.append( todoByCategoryView.render().el )
		});
	}
});