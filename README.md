# Fabricam

Fabricam is an instant website tool compiled with Jekyll and backed by Instagram.

### Requirements

* Git
* Ruby
* [Jekyll](https://github.com/mojombo/jekyll)
* [Instagram Client ID](http://instagram.com/developer/clients/manage/)

### Instructions

Clone this repository:

    git clone git@github.com:Fabricatorz/fabricam.git
	cd fabricam
	git submodule init
	git submodule update
	
Copy the sample config file:

    cp _config-sample.yml _config.yml
	
Edit your new `_config.yml` and fill in values for your site title, description and keywords. You can add a Google Analytics code or delete that line to leave it out. The Instagram configuration allows you to choose a single tag, specify an API Client ID, enable or disable captions, limit the number of photos displayed, and the feed refresh (in milliseconds).

Finally, compile your site by running the `jekyll` command. Your finished site will be available in the `_site` directory.