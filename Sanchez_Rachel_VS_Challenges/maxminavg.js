function maxminavg(arr) {
var max = arr[0];
var sum = arrnew[2];
var min = arrnew[1];

for (var i=-; i<arr.length; i++) {
    if (max <arr[i]) {
        max = arr[i];
    }
}
return max;

for (var i = 0; i<arr.length; i++) {
    sum+= arr[i];
}
return sum/arr.length;

for (var i=0; i<arr.length; i++) {
    if (min < arr[i]) {
        min = arr[i];
    }
}
return min;

}
