module.exports = function(grunt) {

// ----------
var packageJson = grunt.file.readJSON("package.json"),
    distribution = "dist/strcase.js",
    minified = "dist/strcase.min.js",
    packageDirName = "strcase-" + packageJson.version,
    packageDir = "dist/" + packageDirName + "/",
    releaseRoot = "./",
    sources = [
      'index.js'
    ];

// ----------
// Project configuration.
grunt.initConfig({
    pkg: packageJson,
    clean: {
        build: ["build"],
        package: [packageDir],
        release: {
            src: [releaseRoot],
            options: {
                force: true
            }
        }
    },
    uglify: {
      options: {
        mangle: false
      },
      pathvisiojs: {
          src: [ distribution ],
          dest: minified
      }
    },
    jshint: {
        options: {
            jshintrc: '.jshintrc'
        }
    },
    browserify: {
      dist: {
        files: {
          './dist/strcase.js': ['index.js']
        },
        options: {
          standalone: 'strcase'
           /*
          transform: ['coffeeify']
           //*/
        }
      }
    },
    "git-describe": {
        build: {
            options: {
                prop: "gitInfo"
            }
        }
    }
  });

  // Load the plugin that provides the tasks.
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks("grunt-git-describe");
  grunt.loadNpmTasks('grunt-browserify');

  // build 
  grunt.registerTask('cb', ['browserify']);

  // build 
  grunt.registerTask('build', ['clean:build', 'browserify', 'git-describe', 'uglify']);

  // test
  //grunt.registerTask('test', ['build']);

  // Default task(s).
  grunt.registerTask('default', ['build']);

};
