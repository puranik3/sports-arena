angular.module('gameList', ['ngRoute']);

angular.
    module('gameList').
    component('gameList', {
        templateUrl: 'public/app/components/game-list/game-list-page.html',
        controller: ['$routeParams', 'GameService', function ($routeParams, GameService) {
            var self = this;
            self.games = GameService.getGames();

            self.getDescription = function (game) {
                return game.arenas.length === 1 ? game.description.singular : game.description.plural;
            };

            self.bookOrCancelGame = function (game) {
                location.href = '#!/games/' + game.slug;
            }
        }
    ]});