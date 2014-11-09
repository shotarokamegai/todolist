var Todoapp = Todoapp || { Models: {}, Collections: {}, Views: {} };
var itemCollection;
var categoryCollection;
var categoryDropbox;

Todoapp.initialize = function(){

	itemCollection = new Todoapp.Collections.TodoCollection();

	var todoListView = new Todoapp.Views.TodoListView({
		collection: itemCollection,
		el: $('ul.itemlist')
	});

	itemCollection.fetch();

	$('div.items').find('form').on('submit', function(e){
		e.preventDefault();
		var itemName = $('input.item').val();
		var itemCategory = $('select.categorydropbox').val();
		var itemQuantity = $('input.quantity').val();
		var itemDate = $('input.date').val();
		$('input.item').val('');
		$('textarea.description').val('');
		$('input.quantity').val('');
		$('input.date').val('');
		itemCollection.create({name: itemName, quantity: itemQuantity, date: itemDate, category: itemCategory })
	});

	categoryCollection = new Todoapp.Collections.CategoryCollection();

	var categoryListView = new Todoapp.Views.CategoryListView({
		collection: categoryCollection,
		el: $('ul.categorylist')
	});

	categoryCollection.fetch();

	categoryDropbox = new Todoapp.Collections.CategoryCollection();

	var categoryDropboxListView = new Todoapp.Views.CategoryDropboxListView({
		collection: categoryDropbox,
		el: $('select.categorydropbox')
	});

	categoryDropbox.fetch();

	$('form.categoryform').on('submit', function(e){
		e.preventDefault();
		var categoryName = $('input.category').val();
		$('input.category').val('');
		categoryCollection.create({name: categoryName});

		categoryDropbox = new Todoapp.Collections.CategoryCollection();

		var categoryDropboxListView = new Todoapp.Views.CategoryDropboxListView({
			collection: categoryDropbox,
			el: $('select.categorydropbox')
		});

	categoryDropbox.fetch();	
		
	});

}

$(function(){
	console.log($('#todo-template'))

	Todoapp.initialize();
});