app.service('sharedValues', function () {
    var value = "Type the name of the Barbarian";
    var sharedValue = {
        searchName: '',
        selectedDept: ''
    }
    return {
        getName: function () {
            return value;
        },
        setModel: function(input) {
            value = input;
        },
        getObject: function() {
            return sharedValue;
        }
    };
});