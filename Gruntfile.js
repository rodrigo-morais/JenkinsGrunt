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
    });

	grunt.registerTask('test', ['qunit_junit', 'qunit']);

    // carrega plugins
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-qunit-junit');
}; 