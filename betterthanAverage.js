function betterThanAverage(arr) {
    // calculate the average
    var sum = 0;
    for (var i=0; i<arr.length; i++) {
        sum= sum + arr[i];
    }
    var average = sum / arr.length;

     // count how many values are greater than the average
    var count = 0;
    for (var j=0; j<=arr.length; j++) {
        if (arr[j] > average) {
            count += 1;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

