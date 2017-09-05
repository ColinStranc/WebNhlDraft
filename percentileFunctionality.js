var percentileFunctionality = {
    calculatePercentile: function(attributeId, attributeValue, filterByPosition, filterByAvailability, position) {
        var players = [];
        if (filterByPosition) {
            if (filterByAvailability) {
                players = window.webNhlDraft.dataProvider.getPlayers(position, true);
            } else {
                players = window.webNhlDraft.dataProvider.getPlayers(position, false);
            }
        } else {
            if (filterByAvailability) {
                players = window.webNhlDraft.dataProvider.getPlayers('', true);
            } else {
                players = window.webNhlDraft.dataProvider.getPlayers('', false);
            }
        }

        var attributeValuePopulation = players.map((p) => {
            var attributeValueExample = p.attributes.find((a) => {
                return a.id === attributeId;
            });
            return attributeValueExample.attributeValue;
        });

        return this.getPercentileOfValueInList(attributeValue, attributeValuePopulation);
    },
    getPercentileOfValueInList: function(value, list) {
        var countValueIsGreaterThan = 0;
        for (var i = 0; i < list.length; i++) {
            if (value >= list[i]) {
                countValueIsGreaterThan += 1;
            }
        }

        var proportion = countValueIsGreaterThan / list.length;
        return Math.ceil(100*proportion);
    },
    getAllValues: function() {
        return [
            // overalls
            [88, 88, 88, 89, 89, 90, 90, 90, 91, 91],
            // salary
            [6.5, 4, 7.25, 7.86, 7.54, 5.54, 7.88, 8, 7, 6.5],
            // speed
            [87, 88, 89, 85, 88, 90, 86, 87, 90, 93],
            // slap shot accuracy
            [80, 83, 80, 81, 80, 84, 80, 86, 83, 89],
            // offensive awareness
            [91, 91, 90, 89, 91, 94, 90, 93, 94, 95],
            // defensive awareness
            [92, 91, 92, 92, 93, 94, 93, 92, 94, 93]
        ];
    }
};

window.webNhlDraft = window.webNhlDraft || {};
window.webNhlDraft.percentileFunctionality = percentileFunctionality;