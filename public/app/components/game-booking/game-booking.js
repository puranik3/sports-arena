angular.module('gameBooking', ['ngRoute']);

angular.
    module('gameBooking').
    component('gameBooking', {
        templateUrl: 'public/app/components/game-booking/game-booking-page.html',
        controller: ['$scope', '$routeParams', 'GameService', 'SlotService', function ($scope, $routeParams, GameService, SlotService) {
            var self = this;
            
            self.game = GameService.getGameDetails({
                slug: $routeParams.slug
            });

            self.slots = SlotService.getSlots();

            self.setSlot = function () {
                
            };

            // intial values for $scope variables
            var today = new Date;
            self.selectedArena = self.game.arenas[0];            
            self.selectedDate = moment(today).format('dddd, MMMM Do');
            
            self.init = function () {
                $('.datetimepicker-container').datetimepicker({
                    inline: true,
                    minDate: today,
                    stepping: 60
                });

                
                // update $scope variables on various events
                $('.datetimepicker-container').on('dp.change', function ( $event ) {
                    $scope.$apply(function () {
                        self.selectedDate = moment($event.date._d).format('dddd, MMMM Do');
                    });
                });
            };

            // @todo bad hack -- address this
            window.setTimeout(self.init, 0);
        }
    ]});