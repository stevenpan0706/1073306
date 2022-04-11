var topic=[
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性"
];
var startdate=new Date();
function setMonthAndDay(startMonth,startDay){
    startdate.setMonth(startMonth-1,startDay);
    startdate.setHours(0);
    startdate.setMinutes(0);
    startdate.setSeconds(0);
}
setMonthAndDay(4,1);