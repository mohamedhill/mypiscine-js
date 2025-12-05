function sunnySunday(date){
let dif = new Date('0001-01-01')
let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let miltoday = 60*60*24*1000
date = new Date(date)

let day = date -dif


day = day / miltoday
return days[day%6]




}

