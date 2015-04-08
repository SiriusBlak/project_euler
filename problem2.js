var answer = function(limit){
	var a = 1;
	var b = 2;
	var temp;
	var sum = 0;
	while(b<limit){
	if(b % 2 === 0){
	sum += b;
	}
	temp = b;
	b += a;
	a = temp;
	}
	return sum;
};
answer(4000000);