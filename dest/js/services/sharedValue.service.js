app.service('sharedValues', function () {
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