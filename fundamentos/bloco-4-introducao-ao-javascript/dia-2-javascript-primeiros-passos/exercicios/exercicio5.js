let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let a
for(i=0; i<numbers.length; i+=1){

    for( j=0; j<numbers.length; j+=1)
    if(numbers[i]>numbers[j]){
        console.log(numbers[i])
    }
}

