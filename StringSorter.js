exports.sort = function (string) {
    var clearString = string.replace(/\s/g, '');
    let sortedArr = clearString.split('').sort();
    return sortedArr.join('');
}