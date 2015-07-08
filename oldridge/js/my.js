 $(document).ready(function () {
				
				if (window.location.href.indexOf("?view=contact") > -1) {
              	$( "nav ul li:contains(Contact)" ).addClass( "active" );
}


				if (window.location.href.indexOf("?view=start_page") > -1) {
              	$( "nav ul li:contains(Home)" ).addClass( "active" );
}


				if (window.location.href.indexOf("?view=about") > -1) {
              	$( "nav ul li:contains(About)" ).addClass( "active" );
}


				if (window.location.href.indexOf("?view=catalog") > -1) {
              	$( "nav ul li:contains(Catalog)" ).addClass( "active" );
}

				if (window.location.href.indexOf("?view=blog") > -1) {
              	$( "nav ul li:contains(Blog)" ).addClass( "active" );
}
		
		$('#target').click(function(e){
			e.preventDefault();
			e.stopPropagation();
			var img = $('.catalog img').addClass('black');

			for(var i = 0; i <= img.length; i++) {
				var currentImg = img.eq(i);
				var sourceSrc = currentImg.attr('src').split('/')[2];
				currentImg.attr('src', 'img/lot/B' + sourceSrc);
			}

		});
});