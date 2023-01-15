function nextBigger(n) {
	//check for only one digit
	n = n.toString().split('');
	if (n.length === 1) {
		return -1;
	}
	//check if digits are equal
	let count = 1;
	for (let i = 0; i < n.length - 1; i++) {
		n[i] === n[i + 1] ? (count += 1) : '';
	}
	if (count === n.length) {
		return -1;
	}
	n = n.map(e => parseInt(e, 10));
	let valueHolder = 0;
	for (let j = n.length - 1; j > 0; j -= 1) {
		if (n[j - 1] < n[j]) {
			let arrOrdered = n.slice(j).sort((a, b) => a - b);
			for (let i = 0; i < arrOrdered.length; i++) {
				if (arrOrdered[i] > n[j - 1]) {
					valueHolder = n[j - 1]; 
					n.splice(j - 1, 1, arrOrdered[i]); 
					n = n.slice(0, j); 
					arrOrdered.splice(i, 1, valueHolder); 
					return Number(n.concat(arrOrdered).join(''));
				}
			}
		}
	}
	return -1;
}
console.log(nextBigger(12));
console.log(nextBigger(6542321));
console.log(nextBigger(100098765));
