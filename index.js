'use strict';

var plateNumber = {
    localGovtAreas: require('./localGovtArea.json'),

    genPlateNumber: function(localGovtName) {
        if(! plateNumber.localGovtAreas.hasOwnProperty(localGovtName)){
            return "Invalid Input or Local Govt doesn't exist";
        }

        return plateNumber.localGovtAreas[toUpperCase(localGovtName)] +  '-' + plateNumber.genRandomNumber(0, 999) + plateNumber.genlastTwoLetters();
    },
    genRandomNumber: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    genlastTwoLetters: function() {
        var text = "";
        var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        for( var i=0; i < 2; i++ ) {
            text += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        return text;
    }
};

module.exports = {
    plateNumber: plateNumber
}