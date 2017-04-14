'use strict';

var app = angular.module('GameBookingApp', ['ngRoute', 'gameList', 'gameBooking']);

app.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider
            .when('/games', {
                template: '<game-list></game-list>'
            })
            .when('/games/:slug', {
                template: '<game-booking></game-booking>'
            })
            .otherwise('/games');
    }
]);

/*
    $routeProvider
        .when('/games', {
            controller: 'GameListPageCtrl',
            // controllerAs: 'gameList',
            templateUrl: 'public/app/partials/game-list-page.html'
        })
        .when('/games/:name', {
            controller: 'GameBookingPageCtrl',
            // controllerAs: 'gameDetails',
            templateUrl: 'public/app/partials/game-booking-page.html'
        })
        .otherwise({
            redirectTo: '/games'
        });
*/