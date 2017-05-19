/**
 * Created by viveksh2 on 12/27/16.
 */


// DOM Manipulation :: Selecting the elements on the HTML page....
var clock = document.getElementById('clockdiv');
var daysSpan = clock.querySelector('.days');
var hoursSpan = clock.querySelector('.hours');
var minutesSpan = clock.querySelector('.minutes');
var secondsSpan = clock.querySelector('.seconds');



// Determining the date after 15 days..
var endTime =  new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
updateClock();

//Updating the clock after every second....
var timeinterval = setInterval(updateClock, 1000);


function getTimeRemaining(endtime) {
    //Getting the delta of the parsed date.
    var t = Date.parse(endtime) - Date.parse(new Date());

    //Converting the Delta in number of seconds. minutes and hours and days...
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));

    // Returning the final JS object.....
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

    function updateClock() {

        var t = getTimeRemaining(endTime);

        //Displaying the time using the innerHTML property of the DOM Object......
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }




