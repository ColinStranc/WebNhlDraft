var dataProvider = {
    getAttributes: function() {
        return this._rawData.attributes;
    },
    getPlayer: function(id) {
        var allPlayers = this._rawData.players;

        var player = allPlayers.find((p) => {
            return p.id === id;
        });

        return this._createReturnablePlayerObject(player);
    },
    getPlayers: function(position='', available=false) {
        var playersToReturn = this._rawData.players;
        
        if (position !== '') {
            playersToReturn = playersToReturn.filter((p) => {
                return p.position === position;
            });
        }
        if (available) {
            // once transactions are made this can be done...
        }

        return this._createReturnablePlayerObjects(playersToReturn);
    },
    _createReturnablePlayerObjects: function(returnedPlayersData) {
        var returnedPlayerObjects = [];

        for (var p = 0; p < returnedPlayersData.length; p++) {
            var playerObject = this._createReturnablePlayerObject(returnedPlayersData[p]);
            
            returnedPlayerObjects.push(playerObject);
        }

        return returnedPlayerObjects;
    },
    _createReturnablePlayerObject: function(playerObject) {
        var playerObjectAttributes = [];
        var attrs = this._rawData.attributes;

        for (var a = 0; a < attrs.length; a++) {
            var attributeObject = attrs[a];
            var playerAttributeData = this._rawData.playerAttributes.find((pa) => {
                return pa.playerId === playerObject.id && 
                    pa.ratingPackId === this.activeRatingPack &&
                    pa.attributeId === attributeObject.id;
            });
            attributeObject.attributeValue = playerAttributeData.attributeValue;
            playerObjectAttributes.push(attributeObject);
        }

        this._attachCustomAttributes(playerObjectAttributes);
        playerObject.attributes = JSON.parse(JSON.stringify(playerObjectAttributes));

        return playerObject;
    },
    _attachCustomAttributes: function(attributeObject) {
        // do later, may have some trouble with attribute IDs here...
    },
    activeRatingPack: 1,
    _rawData: {
        players: [
            {
                id: 1,
                firstName: 'Connor',
                lastName: 'McDavid',
                position: 'C',
                handedness: 'L'
            },
            {
                id: 2,
                firstName: 'Max',
                lastName: 'Pacioretty',
                position: 'LW',
                handedness: 'L'
            },
            {
                id: 3,
                firstName: 'Dustin',
                lastName: 'Byfuglien',
                position: 'D',
                handedness: 'R'
            },
            {
                id: 4,
                firstName: 'Johnny',
                lastName: 'Gaudreau',
                position: 'LW',
                handedness: 'L'
            },
            {
                id: 5,
                firstName: 'David',
                lastName: 'Pastrnak',
                position: 'RW',
                handedness: 'R'
            },
            {
                id: 6,
                firstName: 'Brad',
                lastName: 'Marchand',
                position: 'LW',
                handedness: 'L'
            },
            {
                id: 7,
                firstName: 'Oliver',
                lastName: 'Ekman-Larsson',
                position: 'D',
                handedness: 'L'
            },
            // {
            //     id: 8,
            //     firstName: 'Corey',
            //     lastName: 'Crawford',
            //     position: 'G',
            //     handedness: 'L'
            // },
            {
                id: 9,
                firstName: 'Jack',
                lastName: 'Eichel',
                position: 'C',
                handedness: 'R'
            },
            {
                id: 10,
                firstName: 'Leon',
                lastName: 'Draisaitl',
                position: 'C',
                handedness: 'L'
            },
            {
                id: 11,
                firstName: 'Taylor',
                lastName: 'Hall',
                position: 'LW',
                handedness: 'L'
            },
            {
                id: 12,
                firstName: 'PK',
                lastName: 'Subban',
                position: 'D',
                handedness: 'R'
            },
            {
                id: 13,
                firstName: 'Auston',
                lastName: 'Matthews',
                position: 'C',
                handedness: 'L'
            },
            {
                id: 14,
                firstName: 'Blake',
                lastName: 'Wheeler',
                position: 'RW',
                handedness: 'R'
            },
            {
                id: 15,
                firstName: 'Claude',
                lastName: 'Giroux',
                position: 'C',
                handedness: 'R'
            },
            // {
            //     id: 16,
            //     firstName: 'Tuukka',
            //     lastName: 'Rask',
            //     position: 'G',
            //     handedness: 'L'
            // },
            // {
            //     id: 17,
            //     firstName: 'Devan',
            //     lastName: 'Dubnyk',
            //     position: 'G',
            //     handedness: 'L'
            // },
            {
                id: 18,
                firstName: 'Alex',
                lastName: 'Pietrangelo',
                position: 'D',
                handedness: 'R'
            },
            {
                id: 19,
                firstName: 'Roman',
                lastName: 'Josi',
                position: 'D',
                handedness: 'L'
            },
            {
                id: 20,
                firstName: 'Kris',
                lastName: 'Letang',
                position: 'D',
                handedness: 'R'
            },
            // {
            //     id: 21,
            //     firstName: 'Henrik',
            //     lastName: 'Lundqvist',
            //     position: 'G',
            //     handedness: 'L'
            // },
            // {
            //     id: 22,
            //     firstName: 'Matt',
            //     lastName: 'Murray',
            //     position: 'G',
            //     handedness: 'L'
            // },
            {
                id: 23,
                firstName: 'Mark',
                lastName: 'Scheifele',
                position: 'C',
                handedness: 'R'
            },
            {
                id: 24,
                firstName: 'Joe',
                lastName: 'Pavelski',
                position: 'RW',
                handedness: 'R'
            },
            {
                id: 25,
                firstName: 'Shea',
                lastName: 'Weber',
                position: 'D',
                handedness: 'R'
            },
            // {
            //     id: 26,
            //     firstName: 'Cory',
            //     lastName: 'Schneider',
            //     position: 'G',
            //     handedness: 'L'
            // },
            {
                id: 27,
                firstName: 'Ryan',
                lastName: 'Suter',
                position: 'D',
                handedness: 'L'
            },
            {
                id: 28,
                firstName: 'Anze',
                lastName: 'Kopitar',
                position: 'C',
                handedness: 'L'
            },
            {
                id: 29,
                firstName: 'Jonathan',
                lastName: 'Toews',
                position: 'C',
                handedness: 'L'
            },
            // {
            //     id: 30,
            //     firstName: 'Sergei',
            //     lastName: 'Bobrovsky',
            //     position: 'G',
            //     handedness: 'L'
            // },
            {
                id: 31,
                firstName: 'Tyler',
                lastName: 'Seguin',
                position: 'C',
                handedness: 'R'
            },
            {
                id: 32,
                firstName: 'Ryan',
                lastName: 'Getzlaf',
                position: 'C',
                handedness: 'R'
            },
            {
                id: 33,
                firstName: 'Nikita',
                lastName: 'Kucherov',
                position: 'RW',
                handedness: 'L'
            },
            {
                id: 34,
                firstName: 'Patrice',
                lastName: 'Bergeron',
                position: 'C',
                handedness: 'R'
            },
            {
                id: 35,
                firstName: 'Nicklas',
                lastName: 'Backstrom',
                position: 'C',
                handedness: 'L'
            },
            {
                id: 36,
                firstName: 'Duncan',
                lastName: 'Keith',
                position: 'D',
                handedness: 'L'
            },
            // {
            //     id: 37,
            //     firstName: 'Braden',
            //     lastName: 'Holtby',
            //     position: 'G',
            //     handedness: 'L'
            // },
            {
                id: 38,
                firstName: 'Jamie',
                lastName: 'Benn',
                position: 'LW',
                handedness: 'L'
            },
            {
                id: 39,
                firstName: 'Vladimir',
                lastName: 'Tarasenko',
                position: 'RW',
                handedness: 'L'
            },
            {
                id: 40,
                firstName: 'Victor',
                lastName: 'Hedman',
                position: 'D',
                handedness: 'L'
            },
            {
                id: 41,
                firstName: 'Brent',
                lastName: 'Burns',
                position: 'D',
                handedness: 'R'
            },
            {
                id: 42,
                firstName: 'John',
                lastName: 'Tavares',
                position: 'C',
                handedness: 'L'
            },
            {
                id: 43,
                firstName: 'Steven',
                lastName: 'Stamkos',
                position: 'C',
                handedness: 'R'
            },
            {
                id: 44,
                firstName: 'Drew',
                lastName: 'Doughty',
                position: 'D',
                handedness: 'R'
            },
            {
                id: 45,
                firstName: 'Patrick',
                lastName: 'Kane',
                position: 'RW',
                handedness: 'L'
            },
            {
                id: 46,
                firstName: 'Erik',
                lastName: 'Karlsson',
                position: 'D',
                handedness: 'R'
            },
            {
                id: 47,
                firstName: 'Alex',
                lastName: 'Ovechkin',
                position: 'LW',
                handedness: 'R'
            },
            // {
            //     id: 48,
            //     firstName: 'Carey',
            //     lastName: 'Price',
            //     position: 'G',
            //     handedness: 'L'
            // },
            {
                id: 49,
                firstName: 'Evgeni',
                lastName: 'Malkin',
                position: 'C',
                handedness: 'L'
            },
            {
                id: 50,
                firstName: 'Sidney',
                lastName: 'Crosby',
                position: 'C',
                handedness: 'L'
            }
        ],
        attributes: [
            {
                id: 1,
                shortName: 'SPD',
                longName: 'Speed'
            },
            {
                id: 2,
                shortName: 'OFA',
                longName: 'Offensive Awareness'
            },
            {
                id: 3,
                shortName: 'OVR',
                longName: 'Overall'
            },
            {
                id: 4,
                shortName: 'SAL',
                longName: 'Salary'
            },
            {
                id: 5,
                shortName: 'WSA',
                longName: 'Wrist Shot Accuracy'
            }
        ],
        playerAttributes: [
            // Connor Mcdavid
            {
                playerId: 1,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 96
            },
            {
                playerId: 1,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 97
            },
            {
                playerId: 1,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 1,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 1,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 93
            },
            // Max Pacioretty
            {
                playerId: 2,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 2,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 2,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 2,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 2,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 90
            },
            // Dustin Byfuglien
            {
                playerId: 3,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 3,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 3,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 3,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 3,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 85
            },
            // Johnny Gaudreau
            {
                playerId: 4,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 4,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 4,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 4,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 4,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 90
            },
            // David Pastrnak
            {
                playerId: 5,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 5,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 5,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 5,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 5,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 92
            },
            // Brad Marchand
            {
                playerId: 6,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 6,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 6,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 6,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 6,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 92
            },
            // Oliver Ekman Larsson
            {
                playerId: 7,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 7,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 7,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 7,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 7,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 85
            },
            // Corey Crawford 8
            // Jack Eichel
            {
                playerId: 9,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 9,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 9,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 9,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 9,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 90
            },
            // Leon Draisaitl
            {
                playerId: 10,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 10,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 10,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 10,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 10,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 90
            },
            // Taylor Hall
            {
                playerId: 11,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 95
            },
            {
                playerId: 11,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 11,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 11,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 11,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 91
            },
            // PK Subban
            {
                playerId: 12,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 12,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 12,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 12,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 12,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 84
            },
            // Auston Matthews
            {
                playerId: 13,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 13,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 13,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 13,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 13,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 90
            },
            // Blake Wheeler
            {
                playerId: 14,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 14,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 14,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 14,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 14,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 88
            },
            // Claude Giroux
            {
                playerId: 15,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 15,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 15,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 15,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 15,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 91
            },
            // Tuukka Rask 16
            // Devan Dubnyk 17
            // Alex Pietrangelo
            {
                playerId: 18,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 18,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 18,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 18,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 18,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 81
            },
            // Roman Josi
            {
                playerId: 19,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 19,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 19,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 19,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 19,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 84
            },
            // Kris Letang
            {
                playerId: 20,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 20,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 20,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 20,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 20,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 82
            },
            // Henrik Lundqvist 21
            // Matt Murray 22
            // Mark Scheifele
            {
                playerId: 23,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 23,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 23,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 23,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 23,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 90
            },
            // Joe Pavelski
            {
                playerId: 24,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 24,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 24,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 24,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 24,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 92
            },
            // Shea Weber
            {
                playerId: 25,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 25,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 25,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 25,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 25,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 83
            },
            // Cory Schneider 26
            // Ryan Suter
            {
                playerId: 27,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 27,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 27,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 27,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 27,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 81
            },
            // Anze Kopitar
            {
                playerId: 28,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 28,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 28,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 28,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 28,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 88
            },
            // Jonathan Toews
            {
                playerId: 29,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 29,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 29,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 29,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 29,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 90
            },
            // Sergei Bobrovsky 30
            // Tyler Seguin
            {
                playerId: 31,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 31,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 31,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 31,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 31,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 92
            },
            // Ryan Getzlaf
            {
                playerId: 32,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 32,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 32,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 32,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 32,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 86
            },
            // Nikita Kucherov
            {
                playerId: 33,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 33,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 33,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 33,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 33,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 93
            },
            // Patrice Bergeron
            {
                playerId: 34,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 34,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 34,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 34,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 34,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 87
            },
            // Nicklas Backstrom
            {
                playerId: 35,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 35,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 35,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 35,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 35,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 87
            },
            // Duncan Keith
            {
                playerId: 36,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 36,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 36,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 36,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 36,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 84
            },
            // Braden Holtby 37
            // Jamie Benn
            {
                playerId: 38,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 38,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 38,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 38,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 38,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 92
            },
            // Vladimir Tarasenko
            {
                playerId: 39,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 39,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 39,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 39,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 39,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 94
            },
            // Victor Hedman
            {
                playerId: 40,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 40,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 40,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 40,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 40,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 80
            },
            // Brent Burns
            {
                playerId: 41,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 41,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 41,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 41,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 41,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 85
            },
            // John Tavares
            {
                playerId: 42,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 42,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 42,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 42,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 42,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 94
            },
            // Steven Stamkos
            {
                playerId: 43,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 43,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 43,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 43,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 43,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 94
            },
            // Drew Doughty
            {
                playerId: 44,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 44,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 44,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 44,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 44,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 85
            },
            // Patrick Kane
            {
                playerId: 45,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 45,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 96
            },
            {
                playerId: 45,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 45,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 45,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 95
            },
            // Erik Karlsson
            {
                playerId: 46,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 46,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 95
            },
            {
                playerId: 46,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 46,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 46,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 89
            },
            // Alexander Ovechkin
            {
                playerId: 47,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 47,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 96
            },
            {
                playerId: 47,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 47,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 47,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 94
            },
            // Carey Price 48
            // Evgeni Malkin
            {
                playerId: 49,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 49,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 95
            },
            {
                playerId: 49,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 49,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 49,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 94
            },
            // Sidney Crosby
            {
                playerId: 50,
                attributeId: 1,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 50,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 96
            },
            {
                playerId: 50,
                attributeId: 3,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 50,
                attributeId: 4,
                ratingPackId: 1,
                attributeValue: 1000
            },
            {
                playerId: 50,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 93
            }
        ],
        transactions: [
            // I don't really know...
        ],
        ratingPacks: [
            {
                id: 1,
                name: 'first rating pack'
            }
        ]
    }
}

window.webNhlDraft = window.webNhlDraft || {};
window.webNhlDraft.dataProvider = dataProvider;