"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mapValue(n) {
    let options = {
        "Music": (n % 3 == 0),
        "IT": (n % 5 == 0),
        "Musical": (n % 15 == 0)
    };
    // entries => [ [ 'Music', boolean ], [ 'IT', boolean ], [ 'Musical', boolean ] ]
    let entries = Object.entries(options);
    //We filter the array in order to get those whose value is true (meaning n is a multiple of 3,5 or both):
    let filteredArray = entries.filter(a => a[1]);
    //if length is 0 it means that the received number is not a multiple of 3,5 nor both, so we return the numer itself
    if (filteredArray.length == 0) {
        return n;
    }
    //otherwise we return the last element of the filtered array so that whenever the received number is a multiple of 3 and 5 
    //we get the word Musical (true,true,true), Music for multiple of 3 (true,false,false) and IT for multiple of 5 (false,true,false)
    return filteredArray.slice(-1)[0][0];
}
exports.default = mapValue;
function iterate() {
    let counter = 1;
    while (counter <= 100) {
        console.log(mapValue(counter));
        counter += 1;
    }
}
iterate();
//# sourceMappingURL=app.js.map