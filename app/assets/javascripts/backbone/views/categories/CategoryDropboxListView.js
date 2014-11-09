var Todoapp = Todoapp || { Models: {}, Collections: {}, Views: {} };

Todoapp.Views.CategoryDropboxListView = Backbone.View.extend({
	initialize: function(){
		this.listenTo(this.collection, 'add', this.render);
	},
	render: function(){
		var self = this;
		var html = '<option>Category</option>';
		this.$el.empty();
		this.$el.append(html);
		_.each(this.collection.models, function(categoryModel){
			var categoryDropboxView = new Todoapp.Views.CategoryDropboxView({model: categoryModel})
			self.$el.append( categoryDropboxView.render().el )
		});
	}
});