var array = ["c", "a", "e", "f", "d", "l", "j", "m", "n", "i", "j", "h"];

// Basic implementation (pivot is the first element of the array)
function sort(array) {
    if (array.length == 0) return [];

    var left = [], right = [], pivot = array[0];

    for (var i = 1; i < array.length; i++) {
        if(array[i].localeCompare(pivot) == -1)
            left.push(array[i])
        else
            right.push(array[i]);
    }

    return sort(left).concat(pivot, sort(right));
}

console.log(sort(array.slice()));//['a', 'c', 'd', 'e','f', 'h', 'i', 'j','j', 'j', 'l', 'n']