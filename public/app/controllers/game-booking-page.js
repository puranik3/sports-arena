app.controller('GameBookingPageCtrl', function ($routeParams, GameService) {
    this.game = GamesService.getGameDetails($routeParams.name);
});