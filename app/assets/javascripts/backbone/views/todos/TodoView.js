var Todoapp = Todoapp || { Models: {}, Collections: {}, Views: {} };

Todoapp.Views.TodoView = Backbone.View.extend({
	initialize: function(){
		this.listenTo( this.model, "change", this.render );
		// this.listenTo( this.model, "destroy", this.remove );
	},
	tagName: 'li',
	className: 'ui-state-default',
	editTemplate: _.template( $('#todo-edit-template').html() ),
	template: _.template( $('#todo-template').html() ),
	events: {
		'click [data-action="destroy"]' : 'destroyItem',
		'click [data-action="edit"]' : 'renderEditForm',
		'click [type="checkbox"]' : 'lineThroghItem',
		'mouseenter' : 'hoverOn',
		'mouseleave' : 'hoverOff'
	},
	render: function(){
		this.$el.empty();
		this.$el.html(this.template( this.model.attributes ));

		return this
	},
	// renderAll: function(){
	// 	this.$el.empty();
	// 	this.$el.html(this.template( this.model.attributes ));
	// 	console.log('Hi!');
	// 	var itemCollection = new Todoapp.Collections.TodoCollection();

	// 	var todoListView = new Todoapp.Views.TodoListView({
	// 		collection: itemCollection,
	// 		el: $('ul.itemlist')
	// 	});

	// 	return this
	// },
	destroyItem: function(e){
		e.preventDefault();
		this.model.destroy();
		this.$el.remove();
	},
	renderEditForm: function(){
		var self = this;
		this.$el.html(this.editTemplate( this.model.attributes ));

		this.$el.find('form').on("submit", function(e){
			e.preventDefault();
			var nameField = self.$el.find('input.name');
			var newName = nameField.val();
			var dateField = self.$el.find('input.date');
			var newDate = dateField.val();
			var quantityField = self.$el.find('input.quantity');
			var newQuantity = quantityField.val();
			self.model.set('name', newName);
			self.model.set('description', newDescription);
			self.model.set('date', newDate);
			self.model.set('quantity', newQuantity);			
			self.model.save();
		})

		this.$el.find('button').on('click', function(e){
			e.preventDefault;
			self.render();
		})
	},
	lineThroghItem: function(e){
		e.preventDefault();
		this.model.set('done', true);
		this.model.save();
		this.$el.find('span.line').css('text-decoration', 'line-through');
	},
	hoverOn: function(){
		this.$el.find('div.item').css('background', '#F7F7F7');

		return this;
	},
	hoverOff: function(){
		this.$el.find('div.item').css('background', '#FFFFFF');

		return this;
	}
});