System.config({
    paths: {
      'npm:': '../node_modules/'
    },
    map: {
        'rxjs': 'npm:rxjs',

        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-webworker': 'npm:@angular/platform-webworker/bundles/platform-webworker.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/platform-webworker-dynamic': 'npm:@angular/platform-webworker-dynamic/bundles/platform-webworker-dynamic.umd.js',

        'app': 'app'

    },
    packages: {
        'app': {
            main: 'index',
            defaultExtension: 'js'
        },
        'rxjs': {
            defaultExtension: 'js'
        }
    },
    defaultJSExtensions: true
})