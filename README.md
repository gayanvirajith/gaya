# Gaya Jekyll Theme

Modern responsive theme made for jekyll blogging platform. 
Gaya is a simple theme build from ground up with the focus of performance. 
The theme itself quickly adapts to the users device, so it looks great on 
smartphones, tablets, desktops or even the large monitors.

- Ability to change theme color at any time with any color.
- Easy customizable menu navigation.
- SEO Friendly
- Embed image, YouTube/Vimeo video or SoundCloud audio to your post.

---

![Theme preview](http://gayan.me/thumbnails/gaya-jekyll-theme-preview-590x300.png "Gaya jekyll theme")

### Need Help?

Please submit as an 
[issue](https://github.com/web-create/harmony/issues/new), I am happy 
to response back.

## How to install/run

1. [Fork](https://github.com/gayanvirajith/gaya) this repository.
2. Clone it: git clone https://github.com/YOUR-USERNAME/gaya.
3. If you completely new to jekyll, please read more about [Jekyll](http://jekyllrb.com/) and [Github pages](https://help.github.com/articles/using-jekyll-with-pages).
4. Change your directory into cloned repository. 
5. Run `bundle install`
6. Edit the _config.yml on root directory. Change `url` property to to 
`http://127.0.0.1:4000` since you are going to run on localhost.
7. Run the jekyll server by having: `bundle exec jekyll serve --baseurl ''` or `rake preview`   

Try to locate your browser at [http://localhost:4000](http://localhost:4000).

Note: If you are a windows user please refer this nice website - http://jekyll-windows.juthilo.com/ by Julian Thilo to configure ruby + jekyll on windows.


## Theme options and configurations

Following options can be seen within the file `_config.yml`. More information 
about configuration can be found on the [Jekyll Documentationn][jekyll]

### General settings

| Property name | Description  |
------------ | -------------
`title` | The title of your blog shown in the site header along with the logo.
`tagline` | The site tagline also shown in the site header along with the title.
`email` | The email address associated with blog/site.
`description` | The site description used to show author's/site's description in the top of the sidebar.
`baseurl` | The subpath of your site, e.g. /blog/. More information can be found in the [Jekyll Documentationn][jekyll].
`url` | The base host name & protocol for your site. More information can be found in the [Jekyll Documentationn][jekyll].
`logourl` | Path to main logo image.
`author_thumbnail` | Path to author's thumbnail image. 
`author` | Name of the author.
`paginate` | Number of posts to show per page, More information can be found in the [Jekyll Documentationn][jekyll].

### Social profile links

| Property name | Description  |
------------ | -------------
`github` | GitHub link (Leave empty to exclude)
`twitter` | Twitter link (Leave empty to exclude)
`facebook` | Facebook link (Leave empty to exclude)
`gplus` | Google plus link (Leave empty to exclude)
`dribble` | Dribble link (Leave empty to exclude)
`pinterest` | Pinterest link (Leave empty to exclude)

### Theme settings

| Property name | Description  |
------------ | -------------
`highlight_color` | The main highlight/theme color of the site. You can put any color as a hex color. The configured color will be applied to sidebar, anchor links, buttons etc.
`show_share_buttons` | Set as True/False to enable or disable Post share option.
`show_author_info` | Set as True/False to enable or disable the author information on a post.
`disqus_shortname` | Disqus Short name for Disqus comments. Leave empty to disable comments.
`google_analytics_key` | Enter your Google analytics tracking ID to enable analytic support.
`google_webmaster_key` | Enter your Google web-master verification key to verify your site with the web-master tool. (This is an alternative way of verifying your site with the web-master tool, the general way is to upload a file to your server.)


### Page level configurations

These configurations can be found within the top section of the each page, see the a post under `_posts` directory for example. 

| Property name | Description  |
------------ | -------------
`banner_image` | Specify the image name eg: `sample-banner-image-1.jpg` for banner image for the post. Jekyll system tries to locate the image under `assets/images`. So make sure you place all banner images under assets/images.
`banner_video` | If you want to embed `Youtube/Vimeo` Video or `SoundCloud` audio, Specify the resource within single quotes. Please have a look on example post in `_posts/2014-12-14-what-is-nodejs.md` to see how we embed YouTube video. 
`comments` | Set as True/False, if false will disable comments for current page/post.
`browser_title` | SEO property.  Use this property if you want to display different browser title other than default page title. Please have a look on example post under `_posts/2014-12-14-what-is-nodejs.md` to see how we used the property.
`meta_description` | SEO property. Use this property If you want to have unique meta description for each post. See the example post on `_posts/2014-12-14-what-is-nodejs.md` to see how we used the property.

### Sidebar navigation configurations

As jekyll supports data files, **Gaya** theme uses `YAML` [data file][df] to load sidebar navigation items. You could find the `main-nav.yaml` data file under `_data/` directory. You could add any number of menu items by modifying `main-nav.yaml`. 

An example of `main-nav.yaml`:

```
- title: "About me" # Title/Caption of the menu item
  href: "/about" # the page where it pointed
- title: "Blog Archive"
  href: "/archive"
```

At some point you want to link an external URL, in that case you could edit the `_includes/sidebar.html` file. See the following example:

```
<nav class="sidebar-nav">
   <a class="sidebar-nav-item" 
      href="http://www.example.com"
      target="_blank">
      Example site
    </a>
</nav>
```

## License

(The MIT License)

Copyright (c) 2014 Gayan Virajith

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[jekyll]: http://jekyllrb.com
[df]: http://jekyllrb.com/docs/datafiles/
