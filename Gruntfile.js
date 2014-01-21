/**
 * Handlebars Helper: {{feed}}
 * https://github.com/helpers/handlebars-helper-feed
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * https://github.com/jonschlinkert
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  'use strict';

  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({

    book: grunt.file.readYAML('test/fixtures/data/book.yml'),
    blog: grunt.file.readYAML('test/fixtures/data/blog.yml'),
    config: grunt.file.readYAML('_config.yml'),

    // Lint JavaScript
    jshint: {
      all: ['Gruntfile.js', 'index.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Pull down a list of repos from Github.
    repos: {
      helpers: {
        options: {
          username: 'helpers',
          include: ['handlebars-helper'],
          exclude: ['example']
        },
        files: {
          'docs/helpers.json': ['repos?page=1&per_page=100']
        }
      }
    },

    // Use helpers.json for context to generate list
    // of related repos
    readme: {
      options: {
        metadata: ['docs/helpers.json']
      }
    },

    // assemble: {
    //   options: {
    //     flatten: true,
    //     config: '<%= config %>',
    //     data: ['<%= config.data %>'],
    //     helpers: ['./index.js', 'test/helpers/*.js'],
    //     partials: ['<%= config.includes %>'],
    //     layoutdir: '<%= config.layouts %>',
    //     layoutext: '<%= config.layoutext %>',
    //     layout: '<%= config.layout %>'
    //   },

    //   // No options defined
    //   dynamic: {
    //     options: {
    //       flatten: false,
    //       feed: {
    //         sortBy: 'title',
    //         sortOrder: 'desc'
    //       }
    //     },
    //     files: [{
    //       expand: true,
    //       cwd: '<%= config.templates %>/dynamic',
    //       src: ['**/*.{hbs,md}'],
    //       dest: '<%= config.dest %>/dynamic/',
    //       ext: '.html'
    //     }]
    //   },

    //   // Should convert markdown to HTML and use a
    //   // custom template for headings (anchors)
    //   markdown: {
    //     options: {
    //       marked: {
    //         process: true,
    //         heading: 'test/heading.tmpl'
    //       }
    //     },
    //     src: ['<%= config.pages %>/markdown-*.md'],
    //     dest: '<%= config.dest %>/md/'
    //   },

    //   // Should
    //   dynamic_src_dest_pairings: {
    //     options: {
    //       flatten: false,
    //       feed: {
    //         sortBy: 'title',
    //         sortOrder: 'desc'
    //       }
    //     },
    //     expand: true,
    //     cwd: '<%= config.templates %>/dynamic',
    //     src: ['**/*.{hbs,md}'],
    //     dest: '<%= config.dest %>/dynamic_src_dest/',
    //     ext: '.html'
    //   },

    //   // Should filter src files using custom function
    //   filter_fn: {
    //     options: {
    //       flatten: false,
    //       feed: {
    //         filter: function(arr) {
    //           return arr.slice(Math.max(arr.length - 2, 0));
    //         },
    //         sortBy: 'title',
    //         sortOrder: 'desc'
    //       }
    //     },
    //     files: [{
    //       expand: true,
    //       cwd: '<%= config.templates %>/dynamic',
    //       src: ['**/*.{hbs,md}'],
    //       dest: '<%= config.dest %>/filter_fn/',
    //       ext: '.html'
    //     }]
    //   },

    //   // Should process templates in different contexts
    //   // Should also render code comment with template
    //   // origin above each include
    //   context: {
    //     options: {
    //       feed: {
    //         sortBy: 'title',
    //         sortOrder: 'desc',
    //         cwd: '<%= config.book %>',
    //         sep: '<!-- chapter -->',
    //         origin: true
    //       }
    //     },
    //     src: ['<%= config.pages %>/context-*.hbs'],
    //     dest: '<%= config.dest %>/context/',
    //   },

    //   book: {
    //     options: {
    //       feed: {
    //         sortBy: 'number',
    //         sortOrder: 'desc',
    //         cwd: '<%= config.book %>',
    //         sep: '<!-- chapter -->'
    //       }
    //     },
    //     src: ['<%= config.pages %>/{book,toc}.hbs'],
    //     dest: '<%= config.dest %>/book/',
    //   },

    //   // No options defined
    //   bogus_options: {
    //     options: {
    //       feed: {
    //         foo: 'bar'
    //       }
    //     },
    //     src: ['<%= config.pages %>/full_path.hbs'],
    //     dest: '<%= config.dest %>/bogus_options/',
    //   },


    //   // No options defined
    //   no_opts_defined: {
    //     options: {
    //       feed: {}
    //     },
    //     src: ['<%= config.pages %>/full_path.hbs'],
    //     dest: '<%= config.dest %>/no_opts_defined/',
    //   },

    //   // Should use cwd defined in task options (Gruntfile)
    //   opts_cwd: {
    //     options: {
    //       feed: {
    //         sortBy: 'basename',
    //         cwd: '<%= config.posts %>',
    //         sep: '<!-- article -->'
    //       }
    //     },
    //     src: ['<%= config.pages %>/opts_cwd.hbs'],
    //     dest: '<%= config.dest %>/opts_cwd/',
    //   },

    //   // Should use cwd from options hash
    //   opts_hash_cwd: {
    //     options: {
    //       feed: {process: true}
    //     },
    //     src: ['<%= config.posts %>/opts_hash_cwd.hbs'],
    //     dest: '<%= config.dest %>/opts_hash_cwd/'
    //   },

    //   // Should use a custom separator between sections
    //   custom_separator_opts: {
    //     options: {
    //       feed: {
    //         cwd: '<%= config.posts %>',
    //         sep: '<!-- CUSTOM SEPARATOR -->'
    //       }
    //     },
    //     src: ['<%= config.pages %>/custom_sep_opts.hbs'],
    //     dest: '<%= config.dest %>/custom_separator_opts/',
    //   },

    //   // Should use a custom separator between sections
    //   custom_separator_hash: {
    //     options: {
    //       feed: {
    //         cwd: '<%= config.posts %>'
    //       }
    //     },
    //     src: ['<%= config.pages %>/custom_sep_hash.hbs'],
    //     dest: '<%= config.dest %>/custom_separator_hash/',
    //   },

    //   // Basic compare function
    //   compare_fn_index: {
    //     src: ['<%= config.pages %>/toc-sorting.hbs'],
    //     dest: '<%= config.dest %>/compare_fn_index/',
    //     options: {
    //       feed: {
    //         cwd: '<%= config.book %>',
    //         sep: '<!-- chapter -->',
    //         compare: function(a, b) {
    //           return a.data.index >= b.data.index ? 1 : -1;
    //         }
    //       }
    //     }
    //   },

    //   // Basic compare function
    //   compare_fn_custom_prop: {
    //     src: ['<%= config.pages %>/toc-sorting.hbs'],
    //     dest: '<%= config.dest %>/compare_fn_custom_prop/',
    //     options: {
    //       feed: {
    //         cwd: '<%= config.book %>',
    //         sep: '<!-- chapter -->',
    //         compare: function(a, b) {
    //           return a.data.custom >= b.data.custom ? 1 : -1;
    //         }
    //       }
    //     }
    //   },

    //   // Alternative compare function
    //   compare_fn_chapter: {
    //     src: ['<%= config.pages %>/toc-sorting.hbs'],
    //     dest: '<%= config.dest %>/compare_fn_chapter/',
    //     options: {
    //       feed: {
    //         cwd: '<%= config.book %>',
    //         sep: '<!-- chapter -->',
    //         compare: function(a, b) {
    //           return a.data.chapter >= b.data.chapter ? 1 : -1;
    //         },
    //         debug: 'tmp/obj.json'
    //       }
    //     }
    //   }
    // },

    // Before generating any new files,
    // remove files from previous build.
    clean: {
      example: ['<%= config.dest %>/**']
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-repos');
  grunt.loadNpmTasks('grunt-readme');
  grunt.loadNpmTasks('grunt-sync-pkg');
  grunt.loadNpmTasks('assemble');

  // Default to tasks to run with the "grunt" command.
  grunt.registerTask('default', ['clean', 'jshint', 'readme', 'sync']);
};
