function sum_even_numbers() {
    var sum =  0;

    //code

    for (var i=1; i<= 10000; i++) {
        if (i%2 == 0) {
            sum = sum + i;
        }
        
    }
    console.log(sum);
    return sum;
}

sum_even_numbers();