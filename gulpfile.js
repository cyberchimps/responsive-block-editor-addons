const gulp = require("gulp");
const zip = require("gulp-zip");

function bundle() {
    return gulp
        .src([
            "**/*",
            "!node_modules/**",
            "!bundled/**",
            "!gulpfile.js",
            "!package.json",
            "!package-lock.json",
            "!webpack.config.js",
            "!.gitignore",
            "!circle.yml",
            "!phpcs.xml.dist",
            "!phpunit.xml.dist",
            "!Gruntfile.js",
            "!bin/**",
            "!config/**",
            "!scripts/**",
            "!tests/**",
        ])
        .pipe(zip("responsive-block-editor-addons.zip"))
        .pipe(gulp.dest("bundled"));
}

exports.bundle = bundle;
