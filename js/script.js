// GOALs
// - to remove divs after hover
// - to fix all prject sections


$(document).ready(function(){
	$('div.navb .nav a').on('click', function() {
		//Remove and add class currents
		$('.nav li.current').removeClass('current');
		$(this).parent().addClass('current');

		// Set heading text
		$('h1.page-header').text($(this).text());

		// get link text
		var category = $(this).text().toLowerCase().replace(' ', '-');

		//if all-project then remove hidden class
		if(category == 'all-projects'){
			$('.gallery div:hidden').fadeIn('slow').removeClass('hidden');
		} else{
			$('.gallery div').each(function(){
				if(!$(this).hasClass(category)){
					$(this).hide().addClass('hidden');
				}else{
					$(this).fadeIn('slow').removeClass('hidden');
				}
			});
		}
		//stop filtering
		//TODO - uncomment
		//return false;

	});

	/**
	 * get data attribute values, create overlay div and set 
	 * them to overlay div on mouse enter 
	 * @param  
	 * @return 
	 */
	$('.gallery div.thumb').on('mouseenter', function(){

		var title = $(this).children().data('title');
		var desc = $(this).children().data('desc');

		if(desc == null){
			desc = 'Click to Enlarge';
		}

		if(title == null){
			title = '';
		}

		$(this).append('<div class="overlay"></div>');

		var overlay = $(this).children('.overlay');

		overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>')

		overlay.fadeIn(800);

	});

	$('.gallery div.thumb').on('mouseleave', function(){
			$(this).append('<div class="overlay"></div>');

			var overlay = $(this).children('.overlay');

			overlay.fadeOut(500);
		
			overlay.remove();

	});
});