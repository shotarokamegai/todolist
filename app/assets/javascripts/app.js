$(function() {
    $( "#datepicker" ).datepicker();
    $( "#datapicker" ).datepicker();
    $('h3.option').click(function(){
    	$(this).parent().parent().find('h3').removeClass("on");
    	$(this).addClass("on");
    });
    $( "#sortable" ).sortable({
      revert: true
    });
    $( "#draggable" ).draggable({
      connectToSortable: "#sortable",
      helper: "clone",
      revert: "invalid"
    });
    $( "ul, li" ).disableSelection();
});