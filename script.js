function firstWord(s) {
  // your code here
	let arr = s.split(" ")
	for(let i of arr){
	  if(i!=''){
	    return i
	  }
}
}

// Do not change the code below
const s = prompt("Enter s:");
alert(firstWord(s));
