# Fabricam

[Fabricam](https://github.com/Fabricatorz/fabricam) is an instant website tool compiled with Jekyll and backed by Instagram.

### Requirements

* Git
* Ruby
* [Jekyll](https://github.com/mojombo/jekyll)
* [Instagram Client ID](http://instagram.com/developer/clients/manage/)

### Installation

Clone this repository:

    git clone git@github.com:Fabricatorz/fabricam.git
	cd fabricam
	git submodule init
	git submodule update
	
Copy the sample config file:

    cp _config-sample.yml _config.yml
	
Edit your new `_config.yml` and fill in values for your site title, description and keywords. You can add a Google Analytics code or delete that line to leave it out. The Instagram configuration allows you to choose a single tag, specify an API Client ID, enable or disable captions, limit the number of photos displayed, and set the feed refresh (in milliseconds). There is also a hashTag options. If set to true, the tag will be taken from the URL, like `http://example.com/#tag'.

### Customizing

You can add your own CSS rules to the `css/custom.css` file. Also, any content you add to `index.html` will be included on your site when it is compiled.

### Compiling

Finally, compile your site by running the `jekyll` command. Your finished site will be available in the `_site` directory.

### Saving your work

Be sure to check in your config file and any other files you customized:

    git add _config.yml index.html css/custom.css
    git commit -m "Made my own site"

If you have a Github account, you can [create a new repository](https://github.com/new), add it as a remote and push your changes there. You should probably also [change or rename your remote](https://help.github.com/articles/renaming-a-remote) to "origin".

### Deploying

If you have a Github account, you can make your site live using [Github Pages](https://help.github.com/categories/20/articles). After you are done customizing and committing your changes, push your code to the `gh-pages` branch.

    git push origin master:gh-pages

If you check your repository settings page, Github will tell you the public URL of your new site.
