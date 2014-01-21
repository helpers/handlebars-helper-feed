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

### Example

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
    <content type="html">{{!@content}}</content>
  </entry>
  {{/feed}}
</feed>
```

## Usage with [Assemble](http://assemble.io)

The easiest way to register the helper with [Assemble](https://github.com/assemble/assemble) is to add the module to both `devDependencies` and `keywords` in your project's package.json:

```json
{
  "devDependencies": {
    "{%= name %}": "*"
  },
  "keywords": [
    "{%= name %}"
  ]
}
```

Alternatively, to register the helper explicitly in the Gruntfile:

```javascript
grunt.initConfig({
  assemble: {
    options: {
      // the '{%= name %}' npm module must also be listed in
      // devDependencies for assemble to automatically resolve the helper
      helpers: ['{%= name %}', 'foo/*.js']
    },
    files: {
      'dist/': ['src/templates/*.hbs']
    }
  }
});
```