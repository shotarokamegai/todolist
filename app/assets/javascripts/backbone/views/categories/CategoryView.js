var Todoapp = Todoapp || { Models: {}, Collections: {}, Views: {} };

Todoapp.Views.CategoryView = Backbone.View.extend({
	initialize: function(){
		this.listenTo( this.model, "change", this.render );
	},
	tagName: 'li',
	template: _.template( $('#category-template').html() ),
	events: {
		'click [data-action="edit"]' : 'renderEditForm',
	},
	render: function(){
		this.$el.empty();
		this.$el.html(this.template( this.model.attributes ));
		return this
	}
});