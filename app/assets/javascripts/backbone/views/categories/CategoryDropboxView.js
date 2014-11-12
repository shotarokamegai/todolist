var Todoapp = Todoapp || { Models: {}, Collections: {}, Views: {} };

Todoapp.Views.CategoryDropboxView = Backbone.View.extend({
	initialize: function(){
		this.listenTo( this.model, "change", this.render );
		this.listenTo( this.model, "destroy", this.remove );
	},
	tagName: 'option',
	template: _.template( $('#category-dropbox-template').html() ),
	render: function(){
		this.$el.empty();
		this.$el.html(this.template( this.model.attributes ));
		return this
	},
	destroyItem: function(e){
		e.preventDefault();
		this.$el.remove();
	}
});