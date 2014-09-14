module.exports = function(grunt) {

	grunt.initConfig({

		watch: {
		 	less: {
		    	files: ['less/*.less', 'css/compiled.css'],
		    	tasks: ['less:style', 'autoprefixer:style'],

		    	options: {
		     		spawn: false,
		    	}
		 	}
		},
		
		less: {
			style: {
			    options: {
			      paths: ["less"]
			    },
			    files: {
			      "css/compiled.css": "less/style.less"
			    }
			}
		},

		autoprefixer: {
			style: {
		      src: 'css/compiled.css',
		      dest: 'css/style.css'
		    }
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.registerTask('default', ['less']);
};