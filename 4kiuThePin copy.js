
function allPossibleCases(arr) {
    if (arr.length == 1) {
        //console.log(arr[0]+' deu 1')
        return arr[0];
    } else {
        var result = [];
        var allCasesOfRest = allPossibleCases(arr.slice(1));  // recur with the rest of array
        for (var i = 0; i < allCasesOfRest.length; i++) {
            for (var j = 0; j < arr[0].length; j++) {
                result.push(arr[0][j] + allCasesOfRest[i]);
            }
        }
        return result;
    }
}

var allArrays = [['1', '2', '4'], ['1', '2'], ['3', '6', '9']]
console.log(allPossibleCases(allArrays))