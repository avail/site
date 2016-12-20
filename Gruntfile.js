module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		mkdir: {
			options: {
				create: ["dist\\assets"]
			}
		},

		copy: {
			dist: {
				files: [{
					expand: true,
					cwd: "bower_components/fira/",
					src: "*/*",
					dest: "dist/assets"
				},
				{
					expand: true,
					cwd: "bower_components/jquery/dist/",
					src: "jquery.min.js",
					dest: "dist/assets"
				}]
			}
		},

		cssmin: {
			dist: {
				files: {
					"dist/assets/dist.css" : [
						"bower_components/pure/pure-min.css",
						"bower_components/fira/fira.css",
						"raw/site.css"
					]
				}
			}
		},

		uglify: {
			dist: {
				files: {
					"dist/assets/dist.js": [
						"raw/site.js"
					]
				}
			}
		},

		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true,
					conservativeCollapse: true,
					removeEmptyAttributes: true
				},
				files: [{
					expand: true,
					cwd: "raw/",
					src: "**/*.html",
					dest: "dist/"
				},
				{
					expand: true,
					cwd: "raw/",
					src: "*.txt",
					dest: "dist/"
				}]

			}
		}

	});

	grunt.loadNpmTasks("grunt-mkdir");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-htmlmin");
	grunt.loadNpmTasks("grunt-contrib-cssmin");

	grunt.registerTask("default", ["copy", "uglify", "cssmin", "htmlmin"]);
}