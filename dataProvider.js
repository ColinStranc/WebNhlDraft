var dataProvider = {
    rawData: {
        players: [
            {
                id: 1,
                firstName: 'Connor',
                lastName: 'McDavid',
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
                attributeValue: 93
            },
            {
                playerId: 1,
                attributeId: 2,
                ratingPackId: 1,
                attributeValue: 95
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