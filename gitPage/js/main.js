require.config({

  // alias libraries paths
    paths: {
        // 'jQuery': '//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min',
        'angular': '//ajax.googleapis.com/ajax/libs/angularjs/1.6.1/angular.min',
        'angular-route': '//ajax.googleapis.com/ajax/libs/angularjs/1.6.1/angular-route.min'
        // 'bootstrap': '//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min'
    },

    // angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            exports: 'angular'
        }
    },

    // kick start application
    deps: ['zenvia-developers']
});
