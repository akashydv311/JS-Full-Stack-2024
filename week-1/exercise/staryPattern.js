
function startFullLine(n){
	let str = "";
	for(let i=0; i<n; i++){
		str += "*";
	}
	console.log(str);
}


function parctualLineStart(n){
	let str="";
	for(let i=0; i<n; i++){
		if(i==0 || i==n-1){
			str += "*";
		}
		str += " ";
	}
	console.log(str);
}


function fullPattern(n){
	startFullLine(n);
	
        for(let i=0; i<n/2; i++){
		parctualLineStart(n);
	}
	
	//parctualLineStart(n);
	
	startFullLine(n);
}


// Driver Code

fullPattern(10);



