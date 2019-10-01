function pigIt(str){
    return str.replace(/\b(\w)(\w*)\b/g,"$2$1ay")
  }

console.log(pigIt('Pig latin is cool'))
pigIt('This is my string')
pigIt('Hello world !')
pigIt('Hello world ?')