$(document).ready(function() {
	console.log('document ready');

	// add items to list

	$('.addButton').on('click', function() {

		// check to see if anything entered in text field
		// if not, show error
		if($('.addItems').val() === '') {
			$('.error').show();
		} else { 
			
			// else add item to list to buy
			var item = $('.addItems').val();
			console.log('Adding ' + item);
			$('.toBuy ul').append('<li class="itembuy">' + item + '</li>');
			$('.error').hide();

			//clear the input box after adding
			$('.addItems').val('');
		};
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

	// clear list when "clear list" button clicked

	$('.clearButton').on('click', function() {
		console.log('Clear list clicked');
		$('.itemlist > li').remove();
		$('.cartlist > li').remove();
	});


});