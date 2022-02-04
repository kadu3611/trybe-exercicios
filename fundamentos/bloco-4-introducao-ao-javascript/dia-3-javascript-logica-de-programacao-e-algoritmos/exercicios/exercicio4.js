let array = ['java', 'javascript', 'python', 'html', 'css'];
let a = array[0]

for (let i=0; i<array.length; i+=1){
    
    if( a.length < array[i].length){
        a = array[i]
    }
}

console.log(a)