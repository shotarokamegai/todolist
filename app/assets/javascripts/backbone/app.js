var Todoapp = Todoapp || { Models: {}, Collections: {}, Views: {} };
var itemCollection;
var categoryCollection;
var categoryDropbox;

Todoapp.initialize = function(){

	// Render All Items //

	itemCollection = new Todoapp.Collections.TodoCollection();

	var todoListView = new Todoapp.Views.TodoListView({
		collection: itemCollection,
		el: $('ul.itemlist')
	});

	itemCollection.fetch();

	// Add New Items //	

	$('form.itemform').on('submit', function(e){
		e.preventDefault();
		var itemName = $('input.item').val();
		var itemCategory = $('select.categorydropbox').val();
		var itemQuantity = $('input.quantity').val();
		var itemDate = $('input.date').val();
		$('input.item').val('');
		$('input.quantity').val('');
		$('input.date').val('');
		itemCollection.create({name: itemName, quantity: itemQuantity, date: itemDate, status: false, category: itemCategory })
	});

	// Render All Categories //	

	categoryCollection = new Todoapp.Collections.CategoryCollection();

	var categoryListView = new Todoapp.Views.CategoryListView({
		collection: categoryCollection,
		el: $('ul.categorylist')
	});

	categoryCollection.fetch({success: function(e){
		$(e.models).each(function(){
			var categoryView = new Todoapp.Views.CategoryView({
				model: this
			});
			$('ul.categorylist').append( categoryView.render().el )
		});
	}});

	// Render All Categories in Dropbox //		

	categoryDropbox = new Todoapp.Collections.CategoryCollection();

	var categoryDropboxListView = new Todoapp.Views.CategoryDropboxListView({
		collection: categoryDropbox,
		el: $('select.categorydropbox')
	});

	categoryDropbox.fetch();

	// Add New Categories //	

	$('form.categoryform').on('submit', function(e){
		e.preventDefault();
		$('ul.categorylist').children().remove();
		var categoryName = $('input.category').val();
		$('input.category').val('');
		categoryCollection.create({name: categoryName}, {success: function(e){
			categoryCollection.fetch({success: function(e){
				$(e.models).each(function(){
					var categoryView = new Todoapp.Views.CategoryView({
						model: this
					});
					$('ul.categorylist').append( categoryView.render().el )
				});
			}});
		}});

		categoryDropbox = new Todoapp.Collections.CategoryCollection();

		var categoryDropboxListView = new Todoapp.Views.CategoryDropboxListView({
			collection: categoryDropbox,
			el: $('select.categorydropbox')
		});

	categoryDropbox.fetch();	
		
	});

	// Render All Items //

	$('h3#all').click(function(){
		itemCollection = new Todoapp.Collections.TodoCollection();

		var todoListView = new Todoapp.Views.TodoListView({
			collection: itemCollection,
			el: $('ul.itemlist')
		});

		itemCollection.fetch();
	});

	// Render Today's Items //

	$('h3#today').click(function(){
		$('ul.itemlist').children().remove();
		var itemCollection = new Todoapp.Collections.TodoCollection();

		itemCollection.fetch({success: function(e){
			var array = [];
			var date = new Date();
			date = ((date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear());
			$(e.models).each(function(){
				if (this.attributes.date == date){
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
	});

	// Render "DONE" Items //

	$('h3#done').click(function(){
		$('ul.itemlist').children().remove();
		var itemCollection = new Todoapp.Collections.TodoCollection();

		itemCollection.fetch({success: function(e){
			var array = [];
			$(e.models).each(function(){
				if (this.attributes.done == true){
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
	});

	// Render "PENDING" Items //

	$('h3#pending').click(function(){
		$('ul.itemlist').children().remove();
		var itemCollection = new Todoapp.Collections.TodoCollection();

		itemCollection.fetch({success: function(e){
			var array = [];
			$(e.models).each(function(){
				if (this.attributes.done == false){
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
	});

	// Search Items //

	$('form.searchitem').on('submit', function(e){
		$('ul.itemlist').children().remove();
		var keyword = $('input.filter').val();
		var itemCollection = new Todoapp.Collections.TodoCollection();
		itemCollection.fetch({success: function(e){
			var array = [];
			$(e.models).each(function(){
				if (this.attributes.name == keyword){
					array.push(this)
				}
			})
			if (array.length != 0){
				$(array).each(function(){ 
					var todoByCategoryView = new Todoapp.Views.TodoByCategoryView({
						model: this
					});
					$('ul.itemlist').append( todoByCategoryView.render().el )
				});
			} else {
				var h2 = document.createElement('h2');
				$(h2).text('There is no match');
				$('ul.itemlist').append(h2);
			};
		}});
	});	
};

$(function(){
	console.log($('#todo-template'))

	Todoapp.initialize();
});