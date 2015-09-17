require.config({

    paths: {
        domReady: './libs/requirejs-domready/domReady',
        angular: './libs/angular/angular',
        ngRoute: './libs/angular-route/angular-route.min',
        resource: './libs/angular-resource/angular-resource.min'
    },

    shim: {
        'angular': {
            exports: 'angular'
        },
        'ngRoute': ['angular'],
        'resource': ['angular'],
        'app': []
    },

    deps: ['./bootstrap']
});
