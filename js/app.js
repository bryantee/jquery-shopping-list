$(document).ready(function() {
	console.log('document ready');

	// add items to list

	$('.addButton').on('click', function() {
		var item = $('.addItems').val();
		console.log('Adding ' + item);
		$('.toBuy ul').append('<li class="itembuy">' + item + '</li>');
	});

	// hover: highlight to add to cart

	$('.itemlist').on('mouseenter', 'li', function() {
		console.log('mouse entered item ' + $(this).html())
		$(this).addClass('selected');
		});
	$('.itemlist').on('mouseleave', 'li', function() {
		$(this).removeClass('selected');
	});

	// on click: remove from list -> add to cart

	$('.itemlist').on('click', 'li', function() {
		var itemToCart = $(this).text();
		$(this).remove();
		console.log('removed ' + $(this).html());
		$('.cart ul').append('<li class="incart">' + itemToCart + '</li>');
	});

});