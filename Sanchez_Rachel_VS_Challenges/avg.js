function findAvg(arr) {
    // code

    var avg = 0;
    arr = [3,3,3,3];

    for (var i=0; i<arr.length; i++) {
        avg += arr[i];
    }
    var count = arr.length;
    avg = avg/count;
    console.log(avg);

    return avg;

}
findAvg();