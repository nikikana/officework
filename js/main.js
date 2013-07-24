var feed = new Instafeed({
	get: 'tagged',
	tagName: tagName,
	clientId: clientId,
	mock: true,
	limit: limit,
	success: function(feed) {
		var data = feed.data;
		
		var backgrounds = [];
		var captions = [];

		for (var i = 0; i < data.length; i++) {
			var instagram = data[i];
			backgrounds.push({ src: instagram.images.standard_resolution.url });
			var link = instagram.link
			var caption = instagram.caption;
			if (caption) {
				var text = caption.text;
			} else {
				var text = "#" + tagName;
			}

			var user = instagram.user;
			var username = user.username;

			captions.push("<a href='" + link + "'>@" + username + "</a> " + text);
		}

	  $.vegas('slideshow', {
	  	backgrounds: backgrounds,
		walk: function(step) {
			if (showCaptions) {
				var html = "<div class='caption'>" + captions[step] + "</div>";	
				$('#message').html(html);
			}
		}
	  });
	  $.vegas('overlay', {
		src:'js/vendor/vegas/overlays/01.png'
	  });
	},	
});

feed.run();

setInterval(function() {
	feed.run()
}, interval);
