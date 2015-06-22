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

});