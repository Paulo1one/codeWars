function isPangram(string){
    return [...new Set(string.replace(/\W|\d/gm,'').toLowerCase().split('').sort())].join('') === 'abcdefghijklmnopqrstuvwxyz' 
  }

console.log(isPangram("The quick brown fox jumps over the lazy dog."))//, true)
console.log(isPangram("This is not a pangram."))//, false)
