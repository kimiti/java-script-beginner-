var num = [12,243,4,435,645,546,4,6,6,4,56,456,456,46,564,56,46,45];
var sortarray = num.sort(function(x,y){return x-y});

for(i=0;i<sortarray.length;i++)
{
  	console.log(num(i));
};






function factorial(num)
{
	if (num <=1) {
		return 1;
	}else {
		return num = factorial(num - 1) + factorial(num - 2);
	}
}
factorial(4);



function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}
