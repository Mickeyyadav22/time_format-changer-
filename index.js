// <!-- conversion of 24 hours format into 12 hours -->

function timeconversion(time,new_time)
{
   if(time>=12 && time<=24){
    new_time=time-12;
   }
   return new_time
}
timeconversion()
