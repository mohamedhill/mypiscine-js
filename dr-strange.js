function addWeek(date){
    const startdate=new Date('0001-01-01') 
    const days = ['Monday', 'Tuesday', 'Wednesday',
     'Thursday', 'Friday', 'Saturday','Sunday','secondMonday', 
     'secondTuesday', 'secondWednesday', 'secondThursday', 
     'secondFriday', 'secondSaturday','secondSunday'];

     const miltoday = 24*60*60 *1000
    
const diffDays = (date - startdate) / miltoday
const index = diffDays%14

return days[index]

}
function timeTravel(obj){
const d = new Date(obj.date.getTime());
d.setHours(obj.hour)
d.setMinutes(obj.minute)
d.setSeconds(obj.second)
return d





}

