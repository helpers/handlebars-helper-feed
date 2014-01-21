# {{feed}} [![NPM version](https://badge.fury.io/js/handlebars-helper-feed.png)](http://badge.fury.io/js/handlebars-helper-feed)

> Handlebars helper for generating entries for RSS or atom feeds.

If you find a bug or have a feature request, [please create an issue](https://github.com/helpers/handlebars-helper-feed/issues).

## Installation
Use [npm](npmjs.org) to install the package:

```bash
npm i handlebars-helper-feed --save-dev
```

Use [bower](https://github.com/bower/bower) to install the package:

```bash
bower install handlebars-helper-feed --save-dev
```


## Usage Examples
With the helper registered, you may now begin using it in your templates:

```handlebars
{{#feed src="pages/*.hbs"}}
<entry>
  <title>{{@title}}</title>
  <link href="{{site.homepage}}/{{@slug}}/"/>
  <updated>{{@date}}</updated>
  <id>{{site.homepage}}/{{@slug}}</id>
  <content type="html">{{@content}}</content>
</entry>
{{/feed}}
```

#### Example

This example also makes use of [handlebars-helper-datetime](https://github.com/helpers/handlebars-helper-datetime) (`npm i handlebars-helper-datetime --save`):

```xml
<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <link type="application/atom+xml" href="http://asemble.io/feed/" rel="self"/>
  <link href="{{site.homepage}}/atom.xml" rel="self"/>
  <link href="{{site.homepage}}/"/>

  <title>{{site.title}}</title>
  <updated>{{datetime}}</updated>
  <id>{{site.homepage}}</id>
  <author>
    <name>{{pkg.author.name}}</name>
    <email>{{pkg.author.email}}</email>
  </author>
  <rights>Copyright (c) 2012-{{now '%Y'}}, {{pkg.author.name}}. All rights reserved.</rights>

  <!-- feed entries -->
  {{#feed src="pages/*.hbs"}}
  <entry>
    <title>{{@title}}</title>
    <link href="{{site.homepage}}/{{@slug}}/"/>
    <updated>{{@date}}</updated>
    <id>{{site.homepage}}/{{@slug}}</id>
    <content type="html"></content>
  </entry>
  {{/feed}}
</feed>
```

### Usage with [Assemble](http://assemble.io)

The easiest way to register the helper with [Assemble](https://github.com/assemble/assemble) is to add the module to both `devDependencies` and `keywords` in your project's package.json:

```json
{
  "devDependencies": {
    "handlebars-helper-feed": "*"
  },
  "keywords": [
    "handlebars-helper-feed"
  ]
}
```

Alternatively, to register the helper explicitly in the Gruntfile:

```javascript
grunt.initConfig({
  assemble: {
    options: {
      // the 'handlebars-helper-feed' npm module must also be listed in
      // devDependencies for assemble to automatically resolve the helper
      helpers: ['handlebars-helper-feed', 'foo/*.js']
    },
    files: {
      'dist/': ['src/templates/*.hbs']
    }
  }
});
```


## Related projects
Besides the [handlebars-helpers](https://github.com/assemble/handlebars-helpers) library, which includes more than 120 helpers, Here are some related projects you might be interested in from the [Assemble](http://assemble.io) core team.

+ [handlebars-helper-aggregate](https://github.com/helpers/handlebars-helper-aggregate): {{aggregate}} handlebars helper. inlines content from multiple files optionally using wildcard (globbing/minimatch) patterns. uses YAML front matter as context for each file. optionally pass in a sorting function. 
+ [handlebars-helper-autolink](https://github.com/helpers/handlebars-helper-autolink): {{autolink}} handlebars helper. Generate relative links from the "current page" to other dest pages. 
+ [handlebars-helper-br](https://github.com/helpers/handlebars-helper-br): {{br}} Handlebars helper. Adds `<br>` tags to generated HTML. Great for prototyping. 
+ [handlebars-helper-compose](https://github.com/helpers/handlebars-helper-compose): {{compose}} handlebars helper. Similar to {{aggregate}}, but this is a block helper that extends the inner block's content with content from "external" files, while also extending the context with YAML front matter from those files. You may also optionally use wildcard (glob/minimatch) patterns.  
+ [handlebars-helper-condense](https://github.com/helpers/handlebars-helper-condense): Remove extra newlines from HTML content. 
+ [handlebars-helper-datetime](https://github.com/helpers/handlebars-helper-datetime): Handlebars helper for adding RFC-822 formatted datetimes to XML feeds 
+ [handlebars-helper-disqus](https://github.com/helpers/handlebars-helper-disqus): {{disqus}} Handlebars helper. Simplifies adding [Disqus](https://disqus.com/) comments to your site. 
+ [handlebars-helper-eachitems](https://github.com/helpers/handlebars-helper-eachitems): {{eachItems}} handlebars helper. 
+ [handlebars-helper-ghbtns](https://github.com/helpers/handlebars-helper-ghbtns): {{ghbtn}} handlebars helper. Add github buttons (http://ghbtns.com) to your site. 
+ [handlebars-helper-include](https://github.com/helpers/handlebars-helper-include): Handlebars helper, alternative to built-in partials. Similar to handlebars-helper-partial, but this helper will allow wildcard (glob) patterns. Like Assemble itself, this helper will automatically determine the correct context to use, or a context may be explicitly passed in as a second parameter. 
+ [handlebars-helper-isActive](https://github.com/helpers/handlebars-helper-isActive): {{isactive}} handlebars helper. Adds an 'active' class to the 'current page'. Class can be customized. 
+ [handlebars-helper-jade](https://github.com/helpers/handlebars-helper-jade): {{jade}} handlebars helper, for converting basic Jade templates to HTML.  
+ [handlebars-helper-less](https://github.com/helpers/handlebars-helper-less): {{less}} handlebars helper. This helper allows you to use LESS inside style tags in your HTML. By default, the resulting CSS will be rendered inside the `<style>...</style>` tags of the rendered HTML, but you may alternatively define a destination path using the `dest` hash option of the helper. 
+ [handlebars-helper-lorem](https://github.com/helpers/handlebars-helper-lorem): {{lorem}} handlebars helper, for generating lorem lorem placeholder text. 
+ [handlebars-helper-md](https://github.com/helpers/handlebars-helper-md): A new and improved {{md}] helper! Convert markdown to HTML. Use wildcard (glob) patterns for files. Like Assemble itself, this helper will automatically determine the correct context to use, or a context may be explicitly passed in as a second parameter. 
+ [handlebars-helper-minify](https://github.com/helpers/handlebars-helper-minify): {{minify}} handlebars helper, for minification of HTML with html-minifier. 
+ [handlebars-helper-moment](https://github.com/helpers/handlebars-helper-moment): {{moment}} handlebars helper. Combines the powers of Assemble, Handlebars.js and Moment.js into a great helper to master time. 
+ [handlebars-helper-not](https://github.com/helpers/handlebars-helper-not): {{not}} handlebars helper. Conditionally render a block if the condition is false. This block helper is really just a semantic alternative to {{isnt}} 
+ [handlebars-helper-paginate](https://github.com/helpers/handlebars-helper-paginate): {{paginate}} handlebars helper. Made for Assemble, the static site generator for Node.js, Grunt.js and Yeoman. 
+ [handlebars-helper-partial](https://github.com/helpers/handlebars-helper-partial): Handlebars helper, alternative to built-in partials. Like Assemble itself, this helper will automatically determine the correct context to use, or a context may be explicitly passed in as a second parameter. 
+ [handlebars-helper-pkg](https://github.com/helpers/handlebars-helper-pkg): {{pkg}} handlebars helper, for retrieving a value from your project's package.json 
+ [handlebars-helper-post](https://github.com/helpers/handlebars-helper-post): {{post}} handlebars helper, for including a post, or a list of posts. 
+ [handlebars-helper-prettify](https://github.com/helpers/handlebars-helper-prettify): {{prettify}} handlebars helper, for formatting ("beautifying") HTML, CSS and JavaScript.      
+ [handlebars-helper-process](https://github.com/helpers/handlebars-helper-process): {{process}} handlebars helper, for processing raw templates in included content, with the correct context 
+ [handlebars-helper-rel](https://github.com/helpers/handlebars-helper-rel): Handlebars helper for generating a relative link from the current page to the specified page. 
+ [handlebars-helper-repeat](https://github.com/helpers/handlebars-helper-repeat): {{repeat}} handlebars helper, for duplicating a block of content n times. 
+ [handlebars-helper-slugify](https://github.com/helpers/handlebars-helper-slugify): Convert strings into URL slugs. 
+ [handlebars-helper-track](https://github.com/helpers/handlebars-helper-track): {{track}} handlebars helper. Simplify the process of adding Google analytics tracking codes to your web projects. 
+ [handlebars-helper-twitter](https://github.com/helpers/handlebars-helper-twitter): Add {{tweet}} and {{follow}} buttons using handlebars helpers. 
+ [handlebars-helper-uml](https://github.com/helpers/handlebars-helper-uml): Embed UML diagrams in your handlebars template using www.websequencediagrams.com 
+ [handlebars-helpers-yfm](https://github.com/helpers/handlebars-helpers-yfm): Helpers and examples for extracting, parsing, and passing context from YAML front matter into your templates. Useful if you need custom programming beyond what Assemble offers by default. 

Visit [assemble.io/plugins](http:/assemble.io/plugins/) for more information about [Assemble](http:/assemble.io/) plugins.



_(List of related projects was generated by [grunt-repos](https://github.com/assemble/grunt-repos) and [grunt-readme](https://github.com/assemble/grunt-readme))_.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][], and build the documentation with [grunt-readme](https://github.com/assemble/grunt-readme).



## Authors

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

**Brian Woodward**

+ [github/doowb](https://github.com/doowb)
+ [twitter/doowb](http://twitter.com/jonschlinkert)


## License
Copyright (c) 2014 Jon Schlinkert, contributors.
Released under the MIT license

***

_This file was generated by [grunt-readme](https://github.com/assemble/grunt-readme) on Tuesday, January 21, 2014._

[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md
[package.json]: https://npmjs.org/doc/json.html


