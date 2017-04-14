app.service('GameService', function () {
    this.getGames = function () {
        return games;    
    };

    /**
     * @param details {object} Details of game whose information is sought. One of name or slug is to be passed. If slug is present, search is based on slug.
     * Example:
     * {
     *     slug: 'table-tennis'
     * }
     * or,
     * {
     *     name: 'Table Tennis'
     * }
     */
    this.getGameDetails = function (details) {
        var game;
        if (details.slug) {
            game = _.findWhere(games, { slug: details.slug });
        } else {
            game = _.findWhere(games, { name: details.name });
        }

        if (!game) {
            throw new Error("Unrecognized game");
        }

        return game;
    };

    /**
     * @param details {object} Details of arena whose information is sought
     * Example:
     * {
     *     slug: "bowling", // name may instead be passed
     *     arenaId : 2
     * }
     */
    this.getArenaDetails = function (details) {
        var game;
        try {
            game = getGameDetails(details);
        } catch (e) {
            throw e;
        }

        var arena = _.findWhere(game.arenas, {arenaId: details.arenaId});
        if (!arena) {
            throw new Error("Invalid arena id");
        }
        
        return arena;
    };

    /**
     * @param details {object} Details of slot whose information is sought
     * Example:
     * {
     *     slug: "bowling", // name may instead be passed
     *     arenaId : 2,
     *     date : (new Date()).toString(),
     *     slot : 14
     * }
     */
    this.getSlotDetails = function (details) {
        var arena;
        try {
            arena = getArenaDetails(details);
        } catch (e) {
            throw e;
        }

        return _.findWhere(arena.bookedSlots, {date: bookingDetails.date, slot: bookingDetails.slot});
    };

    /**
     * @param details {object} Details of slot that is to be booked, along with requestor details
     * {
     *     slug: "bowling", // name may instead be passed
     *     arenaId : 2,
     *     date : (new Date()).toString(),
     *     slot : 14,
     *     emailid : "john.doe@example.com"
     * }
     */
    this.bookSlot = function (details) {
        var slot = this.getSlotDetails(details);

        if (slot) {
            throw new Error("Slot is already booked");
        }
        
        arena.bookedSlots.push({
            date: bookingDetails.date,
            slot: bookingDetails.slot,
            bookedBy: bookingDetails.emailid
        });

        return true;
    };

    /**
     * @param details {object} Details of slot which is to be cancelled
     * Example:
     * {
     *     name: "bowling",
     *     arenaId : 2,
     *     date : (new Date()).toString(),
     *     slot : 14
     * }
     */    
    this.cancelSlot = function (details) {
        
    };

    var games = [
        {
            name: "Badminton",
            slug: "badminton",
            type: "sport",
            description: {
                singular: "Badminton court",
                plural: "Badminton courts"
            },
            arenas: [
                {
                    arenaId: 1,
                    description: "Badminton court 1",
                    bookedSlots: [
                        {
                            "date": (new Date()).toString(),
                            "slot": 7,
                            "bookedBy": "john.doe@example.com"
                        },
                        {
                            "date": (new Date()).toString(),
                            "slot": 21,
                            "bookedBy": "jane.doe@example.com"
                        }
                    ]
                }
            ]
        },
        {
            name: "Basketball",
            slug: "basketball",
            type: "sport",
            description: {
                singular: "Basketball court",
                plural: "Basketball courts"
            },
            arenas: [
                {
                    arenaId: 1,
                    description: "Basketball court 1",
                    bookedSlots: [
                        {
                            "date": (new Date()).toString(),
                            "slot": 7,
                            "bookedBy": "john.doe@example.com"
                        },
                        {
                            "date": (new Date()).toString(),
                            "slot": 21,
                            "bookedBy": "jane.doe@example.com"
                        }
                    ]
                },
                {
                    arenaId: 2,
                    description: "Basketball court 2",
                    bookedSlots: [
                        {
                            "date": (new Date()).toString(),
                            "slot": 5,
                            "bookedBy": "john.doe@example.com"
                        },
                        {
                            "date": (new Date()).toString(),
                            "slot": 16,
                            "bookedBy": "jane.doe@example.com"
                        }
                    ]
                }
            ]
        },
        {
            name: "Cricket",
            slug: "cricket",
            type: "sport",
            description: {
                singular: "Cricket field",
                plural: "Cricket fields"
            },
            arenas: [
                {
                    arenaId: 1,
                    description: "Cricket field 1",
                    bookedSlots: [
                        {
                            "date": (new Date()).toString(),
                            "slot": 7,
                            "bookedBy": "john.doe@example.com"
                        },
                        {
                            "date": (new Date()).toString(),
                            "slot": 21,
                            "bookedBy": "jane.doe@example.com"
                        }
                    ]
                }
            ]
        },
        {
            name: "Football",
            slug: "football",
            type: "sport",
            description: {
                singular: "Football field",
                plural: "Football fields"
            },
            arenas: [
                {
                    arenaId: 1,
                    description: "Football field 1",
                    bookedSlots: [
                        {
                            "date": (new Date()).toString(),
                            "slot": 7,
                            "bookedBy": "john.doe@example.com"
                        },
                        {
                            "date": (new Date()).toString(),
                            "slot": 21,
                            "bookedBy": "jane.doe@example.com"
                        }
                    ]
                }
            ]
        },
        {
            name: "Tennis",
            slug: "tennis",
            type: "sport",
            description: {
                singular: "Tennis court",
                plural: "Tennis courts"
            },
            arenas: [
                {
                    arenaId: 1,
                    description: "Tennis court 1",
                    bookedSlots: [
                        {
                            "date": (new Date()).toString(),
                            "slot": 7,
                            "bookedBy": "john.doe@example.com"
                        },
                        {
                            "date": (new Date()).toString(),
                            "slot": 21,
                            "bookedBy": "jane.doe@example.com"
                        }
                    ]
                }
            ]
        },
        {
            name: "Volleyball",
            slug: "volleyball",
            type: "sport",
            description: {
                singular: "Volleyball court",
                plural: "Volleyball courts"
            },
            arenas: [
                {
                    arenaId: 1,
                    description: "Volleyball court 1",
                    bookedSlots: [
                        {
                            "date": (new Date()).toString(),
                            "slot": 7,
                            "bookedBy": "john.doe@example.com"
                        },
                        {
                            "date": (new Date()).toString(),
                            "slot": 21,
                            "bookedBy": "jane.doe@example.com"
                        }
                    ]
                }
            ]
        }
    ];
});