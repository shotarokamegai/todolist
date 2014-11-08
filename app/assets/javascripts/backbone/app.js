var Todoapp = Todoapp || { Models: {}, Collections: {}, Views: {} };
var itemCollection;
var categoryCollection;

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
		var itemDescription = $('textarea.description').val();
		var itemQuantity = $('input.quantity').val();
		var itemDate = $('input.date').val();
		$('input.item').val('');
		$('textarea.description').val('');
		$('input.quantity').val('');
		$('input.date').val('');
		itemCollection.create({name: itemName, description: itemDescription, quantity: itemQuantity, date: itemDate })
	});

	// categoryCollection = new Todoapp.Collections.CategoryCollection();

	// var categoryListView = new Todoapp.Views.CategoryListView({
	// 	collection: categoryCollection,
	// 	el: $('ul.categorylist')
	// });

	// categoryCollection.fetch();

	// $('input.category').on('submit', function(e){
	// 	var categoryName = $('input.category').val();
	// 	$('input.category').val('');
	// 	categoryCollection.create({name: categoryName});
	// });

}

$(function(){
	console.log($('#todo-template'))

	Todoapp.initialize();
});