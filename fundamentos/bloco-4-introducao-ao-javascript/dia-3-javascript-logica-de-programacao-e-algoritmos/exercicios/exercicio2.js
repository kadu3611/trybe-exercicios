let word = 'tryber';
let a = [];
let b = [];
for(i=1; i<=word.length; i+=1){

    a = word.length - i;
    b.push(word[a])
}
console.log(b)