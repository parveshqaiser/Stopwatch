
var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
var zero = '00';

// timer denotes whether it is working or not 
var timer = false;

function StartClick()
{
    timer = true;
    StopWatch();
    document.getElementById('start').disabled= true;
    document.getElementById('stop').disabled= false;
}

function StopClick()
{
    timer = false;
    document.getElementById('start').disabled= false;
    // document.getElementById('start').style.color='red';
    document.getElementById('stop').disabled= true;
}

function ResetClick()
{
    document.getElementById('start').disabled= false;
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    document.getElementById('count').innerHTML= zero;
    document.getElementById('sec').innerHTML= zero;
    document.getElementById('min').innerHTML= '00';
    document.getElementById('hr').innerHTML= '00';
}

function StopWatch()
{
    var countString = count;
    var secString = sec;
    var minString = min;
    var hourString = hr;
    // 10 here is milliseconds  
    if (timer == true)
    {
        count++;
       
        if (count==100 )
        {
            sec++;
            count = 0;
        }

        if ( sec==60)
        {
            min++;
            sec = 0;
        }

        if ( min==60)
        {
            hr++;
            min = 0;
            sec =0;
        }

        if (count <10)
        {
            countString = '0'+ countString;
        }

        if ( sec < 10)
        {
            secString = '0' + secString;
        }
        if ( min < 10)
        {
            minString = '0' + minString;
        }
        if ( hr < 10)
        {
            hourString = '0' + hourString;
        }

        document.getElementById('count').innerHTML= countString;
        document.getElementById('sec').innerHTML= secString;
        document.getElementById('min').innerHTML= minString;
        document.getElementById('hr').innerHTML= hourString;
        
        setTimeout(StopWatch,10);  

    }
}




