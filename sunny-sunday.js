function sunnySunday(date){
let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let miltoday = 60*60*24*1000
date = new Date(date)

let day = date /miltoday


return days[day%6]





}

