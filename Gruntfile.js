module.exports = function (grunt) {
    grunt.initConfig({
        qunit_junit: {
            options: {
                dest:'scripts/tests/reports',
                namer: function (url) {
                    return 'qunit.test.report';
                }
            }
        },
        qunit: {
            all: ['index_grunt.htm']
        },
        jshint: {
            options: {
              reporter: 'checkstyle',
              reporterOutput: 'scripts/tests/reports/jshint.xml',
            },
            all: ['scripts/Calculator.js', 'scripts/tests/testCalculator.js']
        },
    });

	grunt.registerTask('test', ['qunit_junit', 'qunit', 'jshint']);

    // carrega plugins
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-qunit-junit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
}; 