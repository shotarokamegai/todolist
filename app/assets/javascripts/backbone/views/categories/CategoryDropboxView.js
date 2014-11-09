var Todoapp = Todoapp || { Models: {}, Collections: {}, Views: {} };

Todoapp.Views.CategoryDropboxView = Backbone.View.extend({
	initialize: function(){
		this.listenTo( this.model, "change", this.render );
	},
	tagName: 'option',
	template: _.template( $('#category-dropbox-template').html() ),
	render: function(){
		this.$el.empty();
		this.$el.html(this.template( this.model.attributes ));
		return this
	}
});