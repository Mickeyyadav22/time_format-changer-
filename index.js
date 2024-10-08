// <!-- conversion of 24 hours format into 12 hours -->
var time=22;
var new_time=
function time(time,new_time)
{
   if(time>=12 && time<=24){
    new_time=time-12;
   }
   return new_time
}
console.log(time)