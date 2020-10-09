let sound = new Audio();
sound.src = "alarm.mp3";
var hours,minutes
setInterval(() => 
{
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;
    alarmrotation = 0;
    if(htime > 12)
    {
        htime-=12;
    }

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
    console.log(hours,minutes,htime,mtime)
    if(hours== htime && minutes == mtime && (stime==0 || stime==1) )
    {
        console.log("manas")
        sound.play();
    }
    if(hours == undefined)
    {
        document.getElementById("alarm").style.display="none";
    }
   
}, 1000);
alarm=(value)=>
{
    document.getElementById("alarm").style.display="block";
    value= value.split(':');
    hours =value[0];
    if(hours > 12)
    {
        hours-=12;
    }
    minutes=value[1];

    atime=hours*30+minutes/2;
    document.getElementById("alarm").style.transform=`rotate(${atime}deg)`;


}