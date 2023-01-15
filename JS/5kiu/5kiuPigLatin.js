function pigIt(str) {
    let arr = str.split(' ')
    let arr2 = []
    arr.forEach(a => { a.match(/\W/) ? arr2.push(a) : arr2.push(a.slice(1, a.length) + a[0] + 'ay') })
    console.log(arr2.join(' '))
    return (arr2.join(' '))
}

pigIt('Pig latin is cool')
pigIt('This is my string')
pigIt('Hello world !')
pigIt('Hello world ?')