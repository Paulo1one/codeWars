function expandedForm(num) {
    return num.toString().split('').map((element,index,arr)=>{
      if(element!=='0'){
        return `${element}${'0'.repeat(arr.length-index-1)}`;
      }
      return element
    }).filter(element=>element!=='0').join(' + ')
    // Your code here
  }