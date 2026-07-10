
function isLandscape(width,hight){
return width>hight;
}
console.log(isLandscape(300>600));




function checkSpeed (speed){
    const speedLimit = 70;
    const KmPerPoint = 5;
    if(speed < speedLimit + KmPerPoint)
        console.log('OK');
    else{
        let points = Math.floor((speed - speedLimit) /KmPerPoint);
        if (points >= 12)
            console.log('License suspended');
        else
            console.log('Points' ,points);
    }
}
checkSpeed(1300);