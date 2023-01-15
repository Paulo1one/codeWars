function spinWords(strng) {  
    return strng.split(' ').map(word => word.length>4? word.split('').reverse().join(''):word).join(' ') 
    // let arr = strng.split(' ')
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i].length > 4) {
    //         arr[i] = arr[i].split('').reverse().join('')
    //     }
    // }
    // return arr.join(' ')
}

console.log(spinWords('teste'))
console.log(spinWords('test this shit weeeee'))