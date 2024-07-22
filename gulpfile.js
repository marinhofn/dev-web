'use strict';

// DEPENDENCIES
const gulp = require('gulp');
const tslint = require('gulp-tslint');
const ts = require('gulp-typescript');
const nodemon = require('gulp-nodemon');

// TSLINT
gulp.task('ts-lint', () => {
  const config = { formatter: 'verbose' };
  return gulp.src(['src/**/*.ts'])
    .pipe(tslint(config))
    .pipe(tslint.report({
      reportLimit: 5
    }));
});

// COPY FILES
gulp.task('copy-files', () => {
  const COPY_FILES = ['package.json'];
  return gulp.src(COPY_FILES)
    .pipe(gulp.dest('dist'));
});

// BUILD
gulp.task('build', gulp.series(['ts-lint', 'copy-files'], function compiler() {
  const tsProject = ts.createProject('tsconfig.json', { typescript: require('typescript') });
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest('dist'))
    .on('error', (err) => {
      console.error('Build error:', err.message);
      // process.exit(1) // Optional: Uncomment to exit on build errors
    });
}));

// WATCH and RELOAD
gulp.task('watch', () => {
  nodemon({
    script: 'dist/server.js', // Path to your compiled server file
    watch: 'src/**/*.ts', // Watch only files in the src directory with .ts extension
    tasks: ['build'], // Run the 'build' task on file changes
    ext: 'ts', // Only consider TypeScript file changes
    ignore: ['node_modules/', 'package.json', 'tsconfig.json'] // Ignore these directories
  }).on('restart', () => {
    console.log('##################################### // ######################################');
    console.log('########################### (0) Server restarted... ###########################');
  }).on('crash', function () {
    console.error('Application has crashed!');
  });
});

// DEV (Build and Watch)
gulp.task('dev', gulp.series('build', 'watch'));
