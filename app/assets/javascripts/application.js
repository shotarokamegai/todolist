// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require jquery-ui
//= require app

//= require ./libraries/underscore
//= require ./libraries/backbone
//= require ./libraries/prettyCheckable.min

//= require ./backbone/app
//= require ./backbone/models/Todo
//= require ./backbone/models/Category
//= require ./backbone/collections/TodoCollection
//= require ./backbone/collections/CategoryCollection
//= require ./backbone/views/todos/TodoView
//= require ./backbone/views/todos/TodoListView
//= require ./backbone/views/categories/CategoryView
//= require ./backbone/views/categories/CategoryListView
//= require ./backbone/views/categories/CategoryDropboxView
//= require ./backbone/views/categories/CategoryDropboxListView
