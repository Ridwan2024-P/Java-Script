


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




function showNumber(limit){
    for(let i = 0; i<= limit; i++){
        if(i %2 ===0) console.log(i,'Even');
        else console.log('ODD');
    }

}
showNumber(20);

const array = [0,1,null,'',2,5];

console.log(countTruth(array));
function countTruth(array){
    let count = 0;
    for (let value of array){
        if (value)
            count++;
    }
    return count;
}

const movie = {
    title: 'a',
    releaseYear:2018,
    rating:4.5,
    director:'b'
};
showProperties(movie);

function showProperties(obj){
    for(let key in obj)
        if(typeof obj[key] === 'string')
            console.log(key,obj[key]);
}