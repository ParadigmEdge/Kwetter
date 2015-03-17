(function() {
    var app = angular.module('kwetterApp', ['ui.router', 'ngResource', 'kwetterApp.controllers', 'kwetterApp.services']);
    app.config(function($stateProvider,$httpProvider){ 
        $stateProvider.state('index',{
            url:'/index',
            templateUrl:'index.html',
            controller:'mainController'
        }).state('loggedIn',{
            url:'/myView',
            templateUrl:'myView.html',
            controller:'mainController'
        });
    }).run(function($state){
        // will always go to index state upon load, because im using the same app.js for 2 different pages (new instance)
       $state.go('index');
    });
})();