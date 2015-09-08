var gulp = require("gulp"),
    browserSync = require("browser-sync");

gulp.task("serve", function () {
    browserSync({
        server: {
            baseDir: ["build/", "node_modules/", "docs/"]
        },
        browser: "google-chrome-stable",
        ui: {
            port: 9080
        },
        port: 3500
    });
});
