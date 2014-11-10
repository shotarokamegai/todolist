var Todoapp = Todoapp || { Models: {}, Collections: {}, Views: {} };

Todoapp.Views.CategoryListView = Backbone.View.extend({
	initialize: function(){
		// this.listenTo(this.collection, 'add', this.render);
	},
	render: function(){
		var self = this;
		this.$el.empty();
		_.each(this.collection.models, function(categoryModel){
			var categoryView = new Todoapp.Views.CategoryView({model: categoryModel})
			self.$el.append( categoryView.render().el )
		});
	}
});