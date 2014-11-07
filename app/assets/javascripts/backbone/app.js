var Todoapp = Todoapp || { Models: {}, Collections: {}, Views: {} };
var collection;

Todoapp.initialize = function(){
	collection = new Todoapp.Collections.TodoCollection();

	var todoListView = new Todoapp.Views.TodoListView({
		collection: collection,
		el: $('ul.list')
	});

	collection.fetch();

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
		collection.create({name: itemName, description: itemDescription, quantity: itemQuantity, date: itemDate })
	});
}

$(function(){
	console.log($('#todo-template'))

	Todoapp.initialize();
});