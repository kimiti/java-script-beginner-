var num = [12,243,4,435,645,546,4,6,6,4,56,456,456,46,564,56,46,45];
var sortarray = num.sort(function(x,y){return x-y});

function inarray(arraytocheak, value )
{
	for(i=0;i<arraytocheak.length;i++)
	{
		if (arraytocheak[i] == value) {
			return true;
		}
		return false;
	}
}
inarray(num , 4);