var percentileFunctionality = {
    calculatePercentile: function(attributeId, attributeValue, filterByPosition, filterByAvailability, position) {
        var filter = 'league';
        if (filterByPosition) {
            filter = 'position';
        } else if (filterByAvailability) {
            filter = 'available';
        }
        
        var allValues = this.getAllValues();
        var attributeValues = allValues[attributeId-1];
        var filteredList;
        if (filter === 'league') {
            filteredList = attributeValues;
        }
        if (filter === 'position') {
            filteredList = [];
            filteredList.push(attributeValues[0]);
            filteredList.push(attributeValues[2]);
            filteredList.push(attributeValues[3]);
            filteredList.push(attributeValues[7]);
            filteredList.push(attributeValues[8]);
            filteredList.push(attributeValues[9]);
        }
        if (filter === 'available') {
            filteredList = [];
            filteredList.push(attributeValues[0]);
            filteredList.push(attributeValues[2]);
            filteredList.push(attributeValues[3]);
            filteredList.push(attributeValues[4]);
            filteredList.push(attributeValues[5]);
            filteredList.push(attributeValues[6]);
            filteredList.push(attributeValues[7]);
        }

        return this.getPercentileOfValueInList(attributeValue, filteredList);
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