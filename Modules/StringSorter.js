exports.sort = function (string) {
    var correctedNames = [];
    var clearString = string.forEach(element => {
        correctedNames.push(element.replace(/\s/g, ''));
    });
    let sortedArr = correctedNames.sort();
    return sortedArr;
}