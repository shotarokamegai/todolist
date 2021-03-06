var Todoapp = Todoapp || { Models: {}, Collections: {}, Views: {} };

Todoapp.Views.CategoryView = Backbone.View.extend({
	initialize: function(){
		this.listenTo( this.model, "change", this.render );
	},
	tagName: 'li',
	className: 'ui-state-default',
	template: _.template( $('#category-template').html() ),
	events: {
		'click [data-action="edit"]' : 'renderEditForm',
		'click span.deletecategory' : 'destroyCategory',
		'click h4.category' : 'renderItems',
		'mouseenter' : 'hoverOn',
		'mouseleave' : 'hoverOff'
	},
	render: function(){
		this.$el.empty();
		this.$el.html(this.template( this.model.attributes ));
		return this
	},
	renderItems: function(){
		$('ul.itemlist').children().remove();
		var category_id = this.$el.find('input').val();

		var itemCollection = new Todoapp.Collections.TodoCollection();

		itemCollection.fetch({success: function(e){
			var array = [];
			$(e.models).each(function(){
				if (this.attributes.category_id == category_id){
					array.push(this)
				};
			});

			$(array).each(function(){
				var todoByCategoryView = new Todoapp.Views.TodoByCategoryView({
					model: this
				});
				$('ul.itemlist').append( todoByCategoryView.render().el )
			});
		}});
		// $.ajax({ url: '/category/find', data: {name: category}, type: 'GET', success: function(e){
		// 	debugger
		// 	var itemCollection = new Todoapp.Collections.TodoCollection();

		// 	itemCollection.fetch({success: function(e){
		// 		var array = [];
		// 		$(e.models).each(function(){
		// 			if (this.attributes.category_id == category_id){
		// 				array.push(this)
		// 			};
		// 		});

		// 		$(array).each(function(){
		// 			var todoByCategoryView = new Todoapp.Views.TodoByCategoryView({
		// 				model: this
		// 			});
		// 			$('ul.itemlist').append( todoByCategoryView.render().el )
		// 		});
		// 	}});
		// } });
	},
	destroyCategory: function(){
		this.model.destroy();
		var name = this.$el.find('h4').text();
		name = name.substring(0, name.length - 1);
		$('option').each(function(){
			var text = $(this).text().replace(/^\s+|\s+$/g, "");
			if (text == name) {
				$(this).remove();
			};
		});
		this.$el.find('h4').remove();

	},
	hoverOn: function(){
		this.$el.find('div.item').css('background', '#F7F7F7');
		// this.$el.css("color", "#2ecc71");

		return this;
	},
	hoverOff: function(){
		this.$el.find('div.item').css('background', '#FFFFFF');

		return this;
	}
});