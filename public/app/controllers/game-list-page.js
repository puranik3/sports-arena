app.controller('GameListPageCtrl', function ($routeParams, GameService) {
    this.games = GameService.getGames();

    this.getDescription = function (game) {
        return game.arenas.length === 1 ? game.description.singular : game.description.plural;
    };
});