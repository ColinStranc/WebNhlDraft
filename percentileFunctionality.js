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
    }
};

window.webNhlDraft = window.webNhlDraft || {};
window.webNhlDraft.percentileFunctionality = percentileFunctionality;