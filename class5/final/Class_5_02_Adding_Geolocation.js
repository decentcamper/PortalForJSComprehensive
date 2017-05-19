/**
 * Created by viveksh2 on 1/5/17.
 */
function toggle(div_id) {
    var el = document.getElementById(div_id);
    if ( el.style.display === 'none' ) {	el.style.display = 'block';}
    else {el.style.display = 'none';}
}


/**
 * This callback is called by the Google Maps API.
 */

function showGeolocation() {
   var output = document.getElementById("showGeolocation");
    function successCallBack(myObject) {
        var latitude = myObject.coords.latitude;
        var longitude = myObject.coords.longitude;
        var latlong = {lat: latitude, lng:longitude};
       /* output.innerHTML = '<p>Latitude is ' + latitude +
            '° <br>Longitude is ' + longitude + '°</p>';*/
        var map = new google.maps.Map(document.getElementById('showGeolocation'), {
            zoom: 14,
            center: latlong
        });
        var marker = new google.maps.Marker({
            position: latlong,
            map: map
        });

    }
    function errorCallBack() {
        output.innerHTML = "Unable to retrieve your location";
    }
        if (!navigator.geolocation) {
            output.innerHTML =
                "<p>Geolocation is not supported by your browser</p>";
            return;
        }
        output.innerHTML = "<p>Locating…</p>";
        navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);
}


