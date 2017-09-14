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
    getPlayersId: function() {
        return this._rawData.players.map((p) => { return p.id; });
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
            },
            {
                id: 6,
                shortName: 'CTM',
                longName: 'Current Team'
            },
            {
                id: 7,
                shortName: 'DEK',
                longName: 'Deking'
            },
            {
                id: 8,
                shortName: 'H-E',
                longName: 'Hand-Eye'
            },
            {
                id: 9,
                shortName: 'PAS',
                longName: 'Passing'
            },
            {
                id: 10,
                shortName: 'PCK',
                longName: 'Puck Control'
            },
            {
                id: 11,
                shortName: 'SSA',
                longName: 'Slap Shot Accuracy'
            },
            {
                id: 12,
                shortName: 'SSP',
                longName: 'Slap Shot Power'
            },
            {
                id: 13,
                shortName: 'WSP',
                longName: 'Wrist Shot Power'
            },
            {
                id: 14,
                shortName: 'ACC',
                longName: 'Acceleration'
            },
            {
                id: 15,
                shortName: 'AGL',
                longName: 'Agility'
            },
            {
                id: 16,
                shortName: 'BAL',
                longName: 'Balance'
            },
            {
                id: 17,
                shortName: 'END',
                longName: 'Endurance'
            },
            {
                id: 18,
                shortName: 'DIS',
                longName: 'Discipline'
            },
            {
                id: 19,
                shortName: 'POI',
                longName: 'Poise'
            },
            {
                id: 20,
                shortName: 'DFA',
                longName: 'Defensive Awareness'
            },
            {
                id: 21,
                shortName: 'FOS',
                longName: 'Faceoffs'
            },
            {
                id: 22,
                shortName: 'SHB',
                longName: 'Shot Blocking'
            },
            {
                id: 23,
                shortName: 'STC',
                longName: 'Stick Checking'
            },
            {
                id: 24,
                shortName: 'AGG',
                longName: 'Aggressiveness'
            },
            {
                id: 25,
                shortName: 'BDY',
                longName: 'Body Checking'
            },
            {
                id: 26,
                shortName: 'DUR',
                longName: 'Durability'
            },
            {
                id: 27,
                shortName: 'FGT',
                longName: 'Fighting Skill'
            },
            {
                id: 28,
                shortName: 'STR',
                longName: 'Strength'
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
                attributeValue: 0.925
            },
            {
                playerId: 1,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 1,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'EDM'
            },
            {
                playerId: 1,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 96
            },
            {
                playerId: 1,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 95
            },
            {
                playerId: 1,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 95
            },
            {
                playerId: 1,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 96
            },
            {
                playerId: 1,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 1,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 1,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 1,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 97
            },
            {
                playerId: 1,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 97
            },
            {
                playerId: 1,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 1,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 1,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 1,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 1,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 1,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 1,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 81
            },
            {
                playerId: 1,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 1,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 1,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 82
            },
            {
                playerId: 1,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 1,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 68
            },
            {
                playerId: 1,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 86
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
                attributeValue: 4.5
            },
            {
                playerId: 2,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 2,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'MTL'
            },
            {
                playerId: 2,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 2,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 2,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 2,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 2,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 2,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 2,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 2,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 2,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 2,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 2,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 2,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 83
            },
            {
                playerId: 2,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 2,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 2,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 60
            },
            {
                playerId: 2,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 82
            },
            {
                playerId: 2,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 2,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 2,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 2,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 2,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 75
            },
            {
                playerId: 2,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 88
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
                attributeValue: 7.6
            },
            {
                playerId: 3,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 3,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'WPG'
            },
            {
                playerId: 3,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 3,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 3,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 3,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 3,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 83
            },
            {
                playerId: 3,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 3,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 3,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 3,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 84
            },
            {
                playerId: 3,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 95
            },
            {
                playerId: 3,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 3,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 70
            },
            {
                playerId: 3,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 3,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 3,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 60
            },
            {
                playerId: 3,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 3,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 3,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 3,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 3,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 3,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 3,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 95
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
                attributeValue: 6.75
            },
            {
                playerId: 4,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 4,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'CGY'
            },
            {
                playerId: 4,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 95
            },
            {
                playerId: 4,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 4,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 4,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 4,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 4,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 4,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 4,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 4,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 4,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 4,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 4,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 95
            },
            {
                playerId: 4,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 4,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 4,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 65
            },
            {
                playerId: 4,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 75
            },
            {
                playerId: 4,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 4,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 4,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 74
            },
            {
                playerId: 4,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 4,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 65
            },
            {
                playerId: 4,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 80
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
                attributeValue: 0.925
            },
            {
                playerId: 5,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 5,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'BOS'
            },
            {
                playerId: 5,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 5,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 5,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 5,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 5,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 5,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 5,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 5,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 5,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 5,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 84
            },
            {
                playerId: 5,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 84
            },
            {
                playerId: 5,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 83
            },
            {
                playerId: 5,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 5,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 5,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 68
            },
            {
                playerId: 5,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 75
            },
            {
                playerId: 5,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 5,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 77
            },
            {
                playerId: 5,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 79
            },
            {
                playerId: 5,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 5,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 65
            },
            {
                playerId: 5,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 83
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
                attributeValue: 6.125
            },
            {
                playerId: 6,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 6,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'BOS'
            },
            {
                playerId: 6,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 6,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 6,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 6,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 6,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 6,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 6,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 6,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 6,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 6,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 6,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 6,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 70
            },
            {
                playerId: 6,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 6,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 6,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 60
            },
            {
                playerId: 6,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 84
            },
            {
                playerId: 6,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 6,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 6,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 6,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 6,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 83
            },
            {
                playerId: 6,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 87
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
                attributeValue: 5.5
            },
            {
                playerId: 7,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 7,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'ARI'
            },
            {
                playerId: 7,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 7,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 7,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 7,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 7,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 7,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 7,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 7,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 7,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 7,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 7,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 7,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 7,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 84
            },
            {
                playerId: 7,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 7,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 55
            },
            {
                playerId: 7,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 7,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 7,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 7,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 7,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 7,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 65
            },
            {
                playerId: 7,
                attributeId: 28,
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
                attributeValue: 0.925
            },
            {
                playerId: 9,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 9,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'BUF'
            },
            {
                playerId: 9,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 9,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 9,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 9,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 9,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 9,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 9,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 9,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 9,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 9,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 9,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 9,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 82
            },
            {
                playerId: 9,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 9,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 9,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 77
            },
            {
                playerId: 9,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 9,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 9,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 83
            },
            {
                playerId: 9,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 9,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 9,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 75
            },
            {
                playerId: 9,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 85
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
                attributeValue: 8.5
            },
            {
                playerId: 10,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 10,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'EDM'
            },
            {
                playerId: 10,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 10,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 10,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 10,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 10,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 10,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 10,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 10,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 10,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 10,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 10,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 77
            },
            {
                playerId: 10,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 10,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 10,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 10,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 79
            },
            {
                playerId: 10,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 84
            },
            {
                playerId: 10,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 10,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 10,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 10,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 77
            },
            {
                playerId: 10,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 70
            },
            {
                playerId: 10,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 88
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
                attributeValue: 6
            },
            {
                playerId: 11,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 11,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'NJD'
            },
            {
                playerId: 11,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 11,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 11,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 11,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 11,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 11,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 11,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 11,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 11,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 11,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 11,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 11,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 84
            },
            {
                playerId: 11,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 11,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 11,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 70
            },
            {
                playerId: 11,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 82
            },
            {
                playerId: 11,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 11,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 11,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 11,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 83
            },
            {
                playerId: 11,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 70
            },
            {
                playerId: 11,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 86
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
                attributeValue: 9
            },
            {
                playerId: 12,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 84
            },
            {
                playerId: 12,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'NSH'
            },
            {
                playerId: 12,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 12,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 84
            },
            {
                playerId: 12,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 12,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 12,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 81
            },
            {
                playerId: 12,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 12,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 12,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 12,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 12,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 12,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 12,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 78
            },
            {
                playerId: 12,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 12,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 12,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 55
            },
            {
                playerId: 12,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 12,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 12,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 12,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 12,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 12,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 77
            },
            {
                playerId: 12,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 89
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
                attributeValue: 0.925
            },
            {
                playerId: 13,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 13,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'TOR'
            },
            {
                playerId: 13,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 13,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 13,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 13,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 13,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 13,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 13,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 13,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 13,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 13,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 13,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 13,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 13,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 13,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 13,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 75
            },
            {
                playerId: 13,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 83
            },
            {
                playerId: 13,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 13,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 13,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 13,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 13,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 65
            },
            {
                playerId: 13,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 88
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
                attributeValue: 5.6
            },
            {
                playerId: 14,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 14,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'WPG'
            },
            {
                playerId: 14,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 14,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 14,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 14,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 14,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 14,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 14,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 14,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 14,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 14,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 14,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 14,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 14,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 14,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 14,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 70
            },
            {
                playerId: 14,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 84
            },
            {
                playerId: 14,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 14,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 14,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 14,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 14,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 75
            },
            {
                playerId: 14,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 90
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
                attributeValue: 8.275
            },
            {
                playerId: 15,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 15,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'PHI'
            },
            {
                playerId: 15,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 15,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 15,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 15,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 15,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 15,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 15,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 15,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 15,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 15,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 84
            },
            {
                playerId: 15,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 15,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 15,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 15,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 15,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 15,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 15,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 15,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 82
            },
            {
                playerId: 15,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 82
            },
            {
                playerId: 15,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 15,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 70
            },
            {
                playerId: 15,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 84
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
                attributeValue: 6.5
            },
            {
                playerId: 18,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 81
            },
            {
                playerId: 18,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'STL'
            },
            {
                playerId: 18,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 83
            },
            {
                playerId: 18,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 81
            },
            {
                playerId: 18,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 18,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 18,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 18,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 18,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 18,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 18,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 18,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 18,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 18,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 83
            },
            {
                playerId: 18,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 18,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 18,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 55
            },
            {
                playerId: 18,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 18,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 18,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 18,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 18,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 18,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 75
            },
            {
                playerId: 18,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 88
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
                attributeValue: 4
            },
            {
                playerId: 19,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 84
            },
            {
                playerId: 19,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'NSH'
            },
            {
                playerId: 19,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 83
            },
            {
                playerId: 19,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 83
            },
            {
                playerId: 19,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 19,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 19,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 83
            },
            {
                playerId: 19,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 19,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 19,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 19,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 19,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 19,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 19,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 19,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 19,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 19,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 55
            },
            {
                playerId: 19,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 19,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 19,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 19,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 19,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 19,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 70
            },
            {
                playerId: 19,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 88
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
                attributeValue: 7.25
            },
            {
                playerId: 20,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 82
            },
            {
                playerId: 20,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'PIT'
            },
            {
                playerId: 20,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 20,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 84
            },
            {
                playerId: 20,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 20,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 20,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 20,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 20,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 20,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 20,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 20,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 20,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 20,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 20,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 20,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 20,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 55
            },
            {
                playerId: 20,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 20,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 20,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 20,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 20,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 75
            },
            {
                playerId: 20,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 75
            },
            {
                playerId: 20,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 85
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
                attributeValue: 6.125
            },
            {
                playerId: 23,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 23,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'WPG'
            },
            {
                playerId: 23,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 23,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 23,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 23,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 23,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 23,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 23,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 23,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 23,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 23,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 23,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 84
            },
            {
                playerId: 23,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 23,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 23,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 23,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 70
            },
            {
                playerId: 23,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 79
            },
            {
                playerId: 23,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 23,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 84
            },
            {
                playerId: 23,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 84
            },
            {
                playerId: 23,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 23,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 70
            },
            {
                playerId: 23,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 87
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
                attributeValue: 6
            },
            {
                playerId: 24,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 24,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'SJS'
            },
            {
                playerId: 24,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 24,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 24,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 24,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 24,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 24,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 24,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 24,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 24,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 24,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 84
            },
            {
                playerId: 24,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 24,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 24,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 24,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 24,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 24,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 24,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 24,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 24,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 81
            },
            {
                playerId: 24,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 24,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 75
            },
            {
                playerId: 24,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 84
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
                attributeValue: 7.855
            },
            {
                playerId: 25,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 83
            },
            {
                playerId: 25,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'MTL'
            },
            {
                playerId: 25,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 76
            },
            {
                playerId: 25,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 76
            },
            {
                playerId: 25,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 25,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 25,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 81
            },
            {
                playerId: 25,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 95
            },
            {
                playerId: 25,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 25,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 25,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 25,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 25,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 25,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 25,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 25,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 25,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 55
            },
            {
                playerId: 25,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 25,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 25,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 25,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 25,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 25,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 25,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 93
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
                attributeValue: 7.54
            },
            {
                playerId: 27,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 81
            },
            {
                playerId: 27,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'MIN'
            },
            {
                playerId: 27,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 82
            },
            {
                playerId: 27,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 27,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 27,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 27,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 27,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 27,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 27,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 27,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 27,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 27,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 27,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 84
            },
            {
                playerId: 27,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 27,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 27,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 55
            },
            {
                playerId: 27,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 27,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 27,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 27,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 27,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 27,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 75
            },
            {
                playerId: 27,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 88
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
                attributeValue: 10
            },
            {
                playerId: 28,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 28,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'LAK'
            },
            {
                playerId: 28,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 28,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 28,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 28,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 28,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 28,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 28,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 28,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 28,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 28,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 28,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 28,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 28,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 28,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 28,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 82
            },
            {
                playerId: 28,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 28,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 28,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 28,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 28,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 28,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 70
            },
            {
                playerId: 28,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 90
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
                attributeValue: 10.5
            },
            {
                playerId: 29,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 29,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'CHI'
            },
            {
                playerId: 29,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 29,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 29,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 29,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 29,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 29,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 29,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 29,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 29,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 29,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 29,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 29,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 29,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 95
            },
            {
                playerId: 29,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 29,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 29,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 29,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 29,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 29,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 29,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 29,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 75
            },
            {
                playerId: 29,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 87
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
                attributeValue: 5.75
            },
            {
                playerId: 31,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 31,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'DAL'
            },
            {
                playerId: 31,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 31,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 31,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 31,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 31,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 31,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 31,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 31,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 31,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 31,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 31,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 31,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 31,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 31,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 31,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 82
            },
            {
                playerId: 31,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 31,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 31,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 31,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 31,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 31,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 65
            },
            {
                playerId: 31,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 86
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
                attributeValue: 8.25
            },
            {
                playerId: 32,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 32,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'ANA'
            },
            {
                playerId: 32,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 32,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 32,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 32,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 32,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 32,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 32,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 32,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 32,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 32,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 32,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 32,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 32,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 32,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 32,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 32,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 32,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 32,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 32,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 32,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 32,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 83
            },
            {
                playerId: 32,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 92
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
                attributeValue: 4.765
            },
            {
                playerId: 33,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 33,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'TBL'
            },
            {
                playerId: 33,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 33,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 33,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 33,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 33,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 33,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 33,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 33,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 33,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 33,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 84
            },
            {
                playerId: 33,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 82
            },
            {
                playerId: 33,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 82
            },
            {
                playerId: 33,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 33,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 33,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 60
            },
            {
                playerId: 33,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 33,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 33,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 33,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 78
            },
            {
                playerId: 33,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 33,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 65
            },
            {
                playerId: 33,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 85
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
                attributeValue: 6.875
            },
            {
                playerId: 34,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 34,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'BOS'
            },
            {
                playerId: 34,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 34,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 34,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 34,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 34,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 34,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 34,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 34,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 34,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 34,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 34,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 34,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 34,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 34,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 34,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 95
            },
            {
                playerId: 34,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 34,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 95
            },
            {
                playerId: 34,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 34,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 84
            },
            {
                playerId: 34,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 34,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 70
            },
            {
                playerId: 34,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 87
            },
            // Nicklas Backstrom, holy jumping, who figured it would be a funny joke to just put seguins stats here as well?
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
                attributeValue: 6.7
            },
            {
                playerId: 35,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 35,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'WSH'
            },
            {
                playerId: 35,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 35,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 35,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 95
            },
            {
                playerId: 35,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 95
            },
            {
                playerId: 35,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 35,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 35,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 35,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 35,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 35,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 35,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 35,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 35,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 35,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 35,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 84
            },
            {
                playerId: 35,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 83
            },
            {
                playerId: 35,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 35,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 35,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 35,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 35,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 65
            },
            {
                playerId: 35,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 85
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
                attributeValue: 5.54
            },
            {
                playerId: 36,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 84
            },
            {
                playerId: 36,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'CHI'
            },
            {
                playerId: 36,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 36,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 36,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 36,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 36,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 84
            },
            {
                playerId: 36,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 36,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 36,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 36,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 36,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 84
            },
            {
                playerId: 36,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 36,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 83
            },
            {
                playerId: 36,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 36,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 36,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 55
            },
            {
                playerId: 36,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 36,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 36,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 36,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 36,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 36,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 75
            },
            {
                playerId: 36,
                attributeId: 28,
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
                attributeValue: 9.5
            },
            {
                playerId: 38,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 38,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'DAL'
            },
            {
                playerId: 38,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 38,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 38,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 38,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 38,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 38,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 38,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 38,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 38,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 38,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 38,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 38,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 38,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 38,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 38,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 81
            },
            {
                playerId: 38,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 38,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 38,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 38,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 38,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 38,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 75
            },
            {
                playerId: 38,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 90
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
                attributeValue: 7.5
            },
            {
                playerId: 39,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 39,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'STL'
            },
            {
                playerId: 39,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 39,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 39,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 39,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 39,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 39,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 39,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 39,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 39,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 39,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 39,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 39,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 39,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 39,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 39,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 60
            },
            {
                playerId: 39,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 39,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 39,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 82
            },
            {
                playerId: 39,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 82
            },
            {
                playerId: 39,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 39,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 65
            },
            {
                playerId: 39,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 87
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
                attributeValue: 7.875
            },
            {
                playerId: 40,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 40,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'TBL'
            },
            {
                playerId: 40,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 40,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 40,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 40,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 40,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 40,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 40,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 40,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 40,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 40,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 40,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 40,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 40,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 40,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 40,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 55
            },
            {
                playerId: 40,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 40,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 40,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 40,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 40,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 40,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 75
            },
            {
                playerId: 40,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 93
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
                attributeValue: 8
            },
            {
                playerId: 41,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 41,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'SJS'
            },
            {
                playerId: 41,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 41,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 41,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 41,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 41,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 41,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 41,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 41,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 41,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 41,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 41,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 41,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 41,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 41,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 41,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 60
            },
            {
                playerId: 41,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 41,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 41,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 41,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 41,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 41,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 41,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 92
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
                attributeValue: 5.5
            },
            {
                playerId: 42,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 42,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'NYI'
            },
            {
                playerId: 42,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 42,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 42,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 42,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 42,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 42,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 42,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 42,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 42,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 42,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 42,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 42,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 42,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 42,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 42,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 82
            },
            {
                playerId: 42,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 84
            },
            {
                playerId: 42,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 42,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 84
            },
            {
                playerId: 42,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 84
            },
            {
                playerId: 42,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 42,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 70
            },
            {
                playerId: 42,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 88
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
                attributeValue: 8.5
            },
            {
                playerId: 43,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 43,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'TBL'
            },
            {
                playerId: 43,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 43,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 43,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 43,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 43,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 43,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 43,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 43,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 43,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 43,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 43,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 43,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 84
            },
            {
                playerId: 43,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 43,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 43,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 78
            },
            {
                playerId: 43,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 43,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 43,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 83
            },
            {
                playerId: 43,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 83
            },
            {
                playerId: 43,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 75
            },
            {
                playerId: 43,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 77
            },
            {
                playerId: 43,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 87
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
                attributeValue: 7
            },
            {
                playerId: 44,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 44,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'LAK'
            },
            {
                playerId: 44,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 44,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 44,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 44,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 44,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 83
            },
            {
                playerId: 44,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 44,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 44,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 44,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 44,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 44,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 44,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 44,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 44,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 44,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 55
            },
            {
                playerId: 44,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 44,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 44,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 44,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 44,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 44,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 75
            },
            {
                playerId: 44,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 88
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
                attributeValue: 10.5
            },
            {
                playerId: 45,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 95
            },
            {
                playerId: 45,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'CHI'
            },
            {
                playerId: 45,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 97
            },
            {
                playerId: 45,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 97
            },
            {
                playerId: 45,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 96
            },
            {
                playerId: 45,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 97
            },
            {
                playerId: 45,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 45,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 45,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 45,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 45,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 45,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 82
            },
            {
                playerId: 45,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 45,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 45,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 95
            },
            {
                playerId: 45,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 45,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 65
            },
            {
                playerId: 45,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 75
            },
            {
                playerId: 45,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 45,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 75
            },
            {
                playerId: 45,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 75
            },
            {
                playerId: 45,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 45,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 65
            },
            {
                playerId: 45,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 81
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
                attributeValue: 6.5
            },
            {
                playerId: 46,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 46,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'OTT'
            },
            {
                playerId: 46,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 95
            },
            {
                playerId: 46,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 46,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 96
            },
            {
                playerId: 46,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 96
            },
            {
                playerId: 46,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 46,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 46,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 46,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 46,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 46,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 46,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 46,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 46,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 95
            },
            {
                playerId: 46,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 46,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 55
            },
            {
                playerId: 46,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 46,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 46,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 46,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 81
            },
            {
                playerId: 46,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 46,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 65
            },
            {
                playerId: 46,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 85
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
                attributeValue: 9.535
            },
            {
                playerId: 47,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 47,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'WSH'
            },
            {
                playerId: 47,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 47,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 96
            },
            {
                playerId: 47,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 47,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 95
            },
            {
                playerId: 47,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 95
            },
            {
                playerId: 47,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 95
            },
            {
                playerId: 47,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 47,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 47,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 47,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 95
            },
            {
                playerId: 47,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 47,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 47,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 47,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 88
            },
            {
                playerId: 47,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 65
            },
            {
                playerId: 47,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 82
            },
            {
                playerId: 47,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 47,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 47,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 47,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 47,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 47,
                attributeId: 28,
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
                attributeValue: 9.5
            },
            {
                playerId: 49,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 49,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'PIT'
            },
            {
                playerId: 49,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 49,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 95
            },
            {
                playerId: 49,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 49,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 95
            },
            {
                playerId: 49,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 49,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 49,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 49,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 49,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 49,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 94
            },
            {
                playerId: 49,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 49,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 75
            },
            {
                playerId: 49,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 49,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 49,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 77
            },
            {
                playerId: 49,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 84
            },
            {
                playerId: 49,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 89
            },
            {
                playerId: 49,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 85
            },
            {
                playerId: 49,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 49,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 49,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 75
            },
            {
                playerId: 49,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 91
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
                attributeValue: 8.7
            },
            {
                playerId: 50,
                attributeId: 5,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 50,
                attributeId: 6,
                ratingPackId: 1,
                attributeValue: 'PIT'
            },
            {
                playerId: 50,
                attributeId: 7,
                ratingPackId: 1,
                attributeValue: 95
            },
            {
                playerId: 50,
                attributeId: 8,
                ratingPackId: 1,
                attributeValue: 96
            },
            {
                playerId: 50,
                attributeId: 9,
                ratingPackId: 1,
                attributeValue: 95
            },
            {
                playerId: 50,
                attributeId: 10,
                ratingPackId: 1,
                attributeValue: 95
            },
            {
                playerId: 50,
                attributeId: 11,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 50,
                attributeId: 12,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 50,
                attributeId: 13,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 50,
                attributeId: 14,
                ratingPackId: 1,
                attributeValue: 92
            },
            {
                playerId: 50,
                attributeId: 15,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 50,
                attributeId: 16,
                ratingPackId: 1,
                attributeValue: 90
            },
            {
                playerId: 50,
                attributeId: 17,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 50,
                attributeId: 18,
                ratingPackId: 1,
                attributeValue: 83
            },
            {
                playerId: 50,
                attributeId: 19,
                ratingPackId: 1,
                attributeValue: 95
            },
            {
                playerId: 50,
                attributeId: 20,
                ratingPackId: 1,
                attributeValue: 91
            },
            {
                playerId: 50,
                attributeId: 21,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 50,
                attributeId: 22,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 50,
                attributeId: 23,
                ratingPackId: 1,
                attributeValue: 93
            },
            {
                playerId: 50,
                attributeId: 24,
                ratingPackId: 1,
                attributeValue: 86
            },
            {
                playerId: 50,
                attributeId: 25,
                ratingPackId: 1,
                attributeValue: 87
            },
            {
                playerId: 50,
                attributeId: 26,
                ratingPackId: 1,
                attributeValue: 80
            },
            {
                playerId: 50,
                attributeId: 27,
                ratingPackId: 1,
                attributeValue: 75
            },
            {
                playerId: 50,
                attributeId: 28,
                ratingPackId: 1,
                attributeValue: 90
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