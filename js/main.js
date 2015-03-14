(function() {
	var Fabricam, root;

	Fabricam = (function() {

		function Fabricam(params) {
			this.options = params;
		}

		Fabricam.prototype.run = function() {

			var tagName = this.options.tagName;
			var clientId = this.options.clientId;
			var limit = this.options.limit;
			var showCaptions = this.options.showCaptions;
			var interval = this.options.interval;
      		var delay = this.options.delay;

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

				  $('.fabricam').vegas({
				  	slides: backgrounds,
				  	delay: delay,
				  	timer: false,
				  	transition: ['fade', 'blur', 'blur2'],
				  	overlay: 'js/vendor/vegas/src/overlays/09.png',
				  	walk: function(step) {
						if (showCaptions) {
							var html = $('<p>').clone().html(captions[step]);	
							$('.tags').html(html);
						}
					}
				  });

				  
				  if (limit === '1' || limit === 1) {
					$.vegas('pause');
				  }
				},
			});

			feed.run();

			setInterval(function() {
				feed.run()
			}, interval);

			return true;

		};

		return Fabricam;
	})();

	root = typeof exports !== "undefined" && exports !== null ? exports : window;

	root.Fabricam = Fabricam;

}).call(this);
